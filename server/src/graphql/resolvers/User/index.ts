import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Address, Database, DistanceSensorMode, HumiditySensorMode, ICommonMessageReturnType, IPlantReturnType, IProduct, IUser, IUserAuth, IWorkInfo, Logs, Phone, Plant, Roles, TriggerSteps} from "../../../lib/types";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import {authorize, takeNineOutIfItHasIt} from "../../../lib/utils";
import shortid from "shortid";
import {sendOtp} from "../../../lib/utils/number-verification-otp";
import { IOrderInput, IOrderInputArgs } from '../Orders/types';
import { makeObjectIds } from '../Orders';
import { checkAirHumidityAndTempeture, checkSensors, checkSoilWarnings } from '../../../controllers/plants';

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10)
};

export const validatePassword = async (plainPassword: string, hashPassword: string) => {
    return await bcrypt.compare(plainPassword, hashPassword);
};

export const accessToken = (id: any) => {
    const secret = <string>process.env.JWT_SECRET;
    return jwt.sign({UserId: id}, secret )
};

export const authChecker = (token: string, secret: string) => {
    if (!token) {
        return false;
    }

    // try {
    //     jwt.verify(token, secret);
    // } catch(err) {
    //     return false;
    // }

    // const {UserId, exp} = <any>jwt.verify(token, secret);

    // if (exp < Date.now().valueOf() / 1000) {
    //     return false;
    // }

    return true;
}

export const generateOTPCode = () => {
    const digits = '0123456789';
    const otpLength = 6;
    let otp = '';
    for(let i=1; i<=otpLength; i++)
    {
        const index = Math.floor(Math.random()*(digits.length));
        otp = otp + digits[index];
    }
    return otp;
}

export const usersResolvers: IResolvers = {
    Query: {
        getUsers: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IUser[]> => {
            await authorize(req, db);
            return await db.users.find({}).toArray();
        },
        getUser: async (
            _root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IUser> => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await authorize(req, db);
        },
         getCustomer: async (
            _root: undefined,
            {phone}: { phone: string},
            {db, req}: { db: Database, req: Request }
         ): Promise<IUserAuth> => {
             // when comming from whatsapp, numbers has 9, like 549blabla, so we take it off to match web signups users.
             const phoneFormatted = takeNineOutIfItHasIt(phone)
            const userResult = await db.users.findOne({"phones.number": phoneFormatted});
            if (!userResult) {
                throw new Error("User does not exits.");
            }
             const token = accessToken(userResult._id);

             return {
                 user: userResult,
                 access_token: token
             };
        },
        userAuthCheck: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            const token = <string>req.headers["x-access-token"];
            const secret = <string>process.env.JWT_SECRET;

            if (authChecker(token, secret)) {
                return {
                    status: true,
                    message: "Authenticate user is valid."
                };
            }

            return {
                status: false,
                message: "User dose not valid."
            }
        },
    },

    Mutation: {
        updateUserChat: async (
            _root: undefined,
            {message, number, trigger}: { message: string, number: string, trigger: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            // await authorize(req, db);
            const phoneFormatted = takeNineOutIfItHasIt(number)
            const userResult = await db.users.findOne({"phones.number": phoneFormatted});
            let chatHistory: any = [];
            let shoppingCart: any = undefined;
            if (!userResult) {
                throw new Error("User not found");
            }
//  || TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES ||
            if (trigger !== TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART && trigger !== TriggerSteps.END_CONVERSATION_AND_RESET_CHAT) {
                const datetime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                chatHistory = userResult.chatHistory?.length > 0 ? userResult.chatHistory : [];
                chatHistory.push({ message, trigger, datetime })
                shoppingCart = userResult?.shoppingCart;
            }

            await db.users.updateOne(
                {_id: new ObjectId(userResult._id)},
                { $set: { chatHistory, shoppingCart } }
            );

            return {
                status: true,
                message: "Successfully saved chat history."
            };
        },
        signUp: async (
            _root: undefined,
            {phone, password, name}: { phone: string, password: string, name: string },
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const phoneFormatted = takeNineOutIfItHasIt(phone)
            const userResult = await db.users.findOne({"phones.number": phoneFormatted});
            
            if (userResult) {
                throw new Error("User already registered.");
            }

            if (!phone ||!password ||!name) {
                throw new Error("Every field is required");
            }

            if (password.length < 6) {
                throw new Error("Incorrect length");
            }

            const otp = generateOTPCode();
            const user: IUser = {
                _id: new ObjectId(),
                name,
                email: "",
                password: await hashPassword(password),
                phones: [{id: shortid.generate(), number: phoneFormatted, status: false, is_primary: true}],
                otp: otp,
                role: Roles.CLIENT,
                created_at: new Date().toString(),
                workInfo: {
                    stoppedWorkTime: "",
                    startedWorkTime: "",
                    ratePerHour: 0,
                    totalWorkingMinutesPerWeek: 0,
                    totalSalaryToPayWeekly: 0,
                    advancedSalaryPaid: 0,
                    isWorking: false,
                    taskRelated: ""
                },
                tasks: [],
                chatHistory: [],
                shoppingCart: undefined,
                plants: [],
                logs: []
            };
            await db.users.insertOne(user);

            // const {data, status} = await sendOtp(phone, otp);
            // const {data, status} = await sendMailVerification('estebanmuruzabal@gmail.com');
            // if (status != 201) {
            //     throw new Error("Something went wrong! Please try again.");
            // }

            return {
                status: true,
                message: "Successfully send otp to your number.",
                access_token: accessToken(user._id),
            };
        },
        login: async (
            _root: undefined,
            {phone, password}: { phone: string, password: string },
            {db}: { db: Database }
        ): Promise<IUserAuth> => {
            const userResult = await db.users.findOne({"phones.number": phone});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            const validatePass = await validatePassword(password, userResult.password);
            if (!validatePass) {
                throw new Error("Password dose not match.")
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone
                }
            });
            /* if (!phoneObject[0].status) {
                throw new Error("Phone number dose not verified. Please verify your phone number.")
            } */

            return {
                user: userResult,
                access_token: accessToken(userResult._id),
            }
        },
        phoneVerification: async (
            _root: undefined,
            {phone}: { phone: string },
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({"phones.number": phone});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone
                }
            });

            const otp = generateOTPCode();
            await db.users.updateOne(
                {_id: userResult._id, "phones.id": phoneObject[0].id},
                {$set: {otp: otp}}
            );

            const {data, status} = await sendOtp(phone, otp);
            if (status != 201) {
                throw new Error("Something went wrong! Please try again.");
            }

            return {
                status: true,
                message: "Successfully send otp to your number."
            };
        },
        phoneVerificationCheck: async (
            _root: undefined,
            {phone, verification_code}: { phone: string, verification_code: string },
            {db}: { db: Database }
        ): Promise<IUserAuth> => {
            const userResult = await db.users.findOne({"phones.number": phone});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // if (userResult.otp != verification_code) {
            //     throw new Error("Verification code dose not match.");
            // }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone
                }
            });

            await db.users.updateOne(
                {_id: userResult._id, "phones.id": phoneObject[0].id},
                {$set: {"phones.$.status": true, otp: ""}}
            );

            return {
                user: userResult,
                access_token: accessToken(userResult._id),
            }
        },
        updateUserNameAndEmail: async (
            _root: undefined,
            {id, name, email}: { id: string, name: string, email: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {name: name, email: email}}
            );

            return {
                status: true,
                message: "Updated successfully."
            };
        },
        updateUserShoppingCart: async (
            _root: undefined,
            {input}: IOrderInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            // await authorize(req, db);
            
            // const products: Array<IProduct> = await db.products.find({ _id: { $in: makeObjectIds(input.products) } }).toArray();
            const userResult = await db.users.findOne({ _id: new ObjectId(input.customer_id) });
            if (!userResult) throw new Error("User does not exits.");

            const products: Array<IProduct> = await db.products.find({ _id: { $in: makeObjectIds(input.products) } }).toArray();

            for (let i = 0; i < input.products.length; i++) {
                // @ts-ignore
                const dbProduct: IProduct = await db.products.findOne({ _id: new ObjectId(input.products[i].product_id) });
                const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;

                if (dbProduct.product_quantity < purchasedQuantity) {
                    throw new Error(`'${input.products[i].name}', No hay suficiente cantidad de este producto. Cantidad disponible: ${products[i].product_quantity}`);
                }
            }

            const shoppingCart: IOrderInput = {
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                delivery_method_name: input.delivery_method_name,
                selectedCategorySlug: input.selectedCategorySlug,
                payment_option_type: input.payment_option_type,
                payment_method_name: input.payment_method_name,
                isWhatsappPurchase: input.isWhatsappPurchase,
                delivery_date: input.delivery_date,
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                products: input.products
            };

            await db.users.updateOne(
                {_id: new ObjectId(input.customer_id)},
                {$set: {shoppingCart}}
            );

            return {
                status: true,
                message: "updated successfully."
            };
        },
        addPlant: async (
            _root: undefined,
            {   id, 
                name,
                controllerId
            }: { id: string, name: string, controllerId: number },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            // await authorize(req, db);

            const userResult = await db.users.findOne({ _id: new ObjectId(id) });

            if (!userResult) {
                throw new Error("User does not exits.");
            }

            if (userResult.plants.length === 3) {
                throw new Error("Already added three plants. You are not allowed to add more than three.");
            }

            const plantObject = {
                id: shortid.generate(),
                name,
                controllerId,
                soilHumidity: 0,
                airHumidity: 0,
                tempeture: 0,
                distance_cm: 0,
                isRelayOneOn: false,
                isRelayTwoOn: false,
                isRelayThirdOn: false,
                isRelayFourthOn: false,
                distanceSensorSettings: {
                    minWarning: "",
                    maxWarning: "",
                    mode: DistanceSensorMode.SISTEMA_AGUA_A_TRATAR,
                    relayOneAutomatedOnTime: "",
                    relayOneIdRelated: "",
                    relayOneWorking: false,
                    relayTwoAutomatedOnTime: "",
                    relayTwoIdRelated: "",
                    relayTwoWorking: false
                },
                soilHumiditySettings: {
                    minWarning: "",
                    maxWarning: "",
                    mode: HumiditySensorMode.MANUAL,
                    relayOneAutomatedOnTime: "",
                    relayOneIdRelated: "",
                    relayOneWorking: false,
                    relayTwoAutomatedOnTime: "",
                    relayTwoIdRelated: "",
                    relayTwoWorking: false
                }
            };

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$push: {plants: plantObject}}
            );

            return {
                status: true,
                message: "Created plant successfully."
            };
        },
        updatePlant: async (
            _root: undefined,
            {   id, 
                controllerId,
                soilHumidity,
                airHumidity,
                tempeture,
                distance_cm,
                isRelayOneOn,
                isRelayTwoOn,
                isRelayThirdOn,
                isRelayFourthOn
            }: { id: string, controllerId: number, soilHumidity: number, airHumidity: number, tempeture: number, distance_cm: number, isRelayOneOn: boolean, isRelayTwoOn: boolean, isRelayThirdOn: boolean, isRelayFourthOn: boolean },
            {db, req}: { db: Database, req: Request }
        ): Promise<IPlantReturnType> => {
            // await authorize(req, db);

            const userResult: any = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            const plants = userResult.plants;
            const index = userResult.plants?.findIndex((plant: any) => (plant.controllerId == controllerId));

            if (index < 0) {
                throw new Error(`Controller id does not exists: ${controllerId})`);
            } else {
                plants[index].soilHumidity = soilHumidity;
                plants[index].airHumidity = airHumidity;
                plants[index].tempeture = tempeture;
                plants[index].distance_cm = distance_cm;
                plants[index].isRelayOneOn = isRelayOneOn;
                plants[index].isRelayTwoOn = isRelayTwoOn;
                plants[index].isRelayThirdOn = isRelayThirdOn;
                plants[index].isRelayFourthOn = isRelayFourthOn;
            }

            plants[index] = await checkSoilWarnings(plants[index], userResult?.phones[0]?.number);
            plants[index] = await checkAirHumidityAndTempeture(plants[index], userResult?.phones[0]?.number);
            plants[index] = await checkSensors(plants[index], userResult?.phones[0]?.number);
            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {plants}}
            );

             return {
                isRelayOneOn: plants[index].isRelayOneOn ? "ON" : "OF",
                isRelayTwoOn: plants[index].isRelayTwoOn ? "ON" : "OF",
                isRelayThirdOn: plants[index].isRelayThirdOn ? "ON" : "OF",
                isRelayFourthOn: plants[index].isRelayFourthOn ? "ON" : "OF",
            };
        },
        updatePlantSettings: async (
            _root: undefined,
            {   id, 
                controllerId,
                maxWarning,
                minWarning,
                mode,
                relayOneAutomatedOnTime,
                relayOneIdRelated,
                relayOneWorking,
                relayTwoAutomatedOnTime,
                relayTwoIdRelated,
                relayTwoWorking
            }: { id: string, controllerId: number, maxWarning: string, minWarning: string, mode: string, relayOneAutomatedOnTime: string, relayOneIdRelated: string, relayOneWorking: boolean, relayTwoAutomatedOnTime: string, relayTwoIdRelated: string, relayTwoWorking: boolean },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            // await authorize(req, db);

            const userResult: any = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            const plants = userResult.plants;
            const index = userResult.plants?.findIndex((plant: any) => (plant.controllerId == controllerId));

            if (index < 0) {
                throw new Error(`Controller id does not exists: ${controllerId})`);
            } else {
                plants[index].soilHumiditySettings.maxWarning = maxWarning;
                plants[index].soilHumiditySettings.minWarning = minWarning;
                plants[index].soilHumiditySettings.mode = mode;
                plants[index].soilHumiditySettings.relayOneAutomatedOnTime = relayOneAutomatedOnTime;
                plants[index].soilHumiditySettings.relayOneIdRelated = relayOneIdRelated;
                plants[index].soilHumiditySettings.relayOneWorking = relayOneWorking;
                plants[index].soilHumiditySettings.relayTwoAutomatedOnTime = relayTwoAutomatedOnTime;
                plants[index].soilHumiditySettings.relayTwoIdRelated = relayTwoIdRelated;
                plants[index].soilHumiditySettings.relayTwoWorking = relayTwoWorking;
            }

                
            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {plants}}
            );

            return {
                status: true,
                message: "Updated soil settings successfully."
            };
        },
        addPhoneNumber: async (
            _root: undefined,
            {id, number}: { id: string, number: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<Phone> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.phones.length == 2) {
                throw new Error("Already added two phone numbers. You are not allowed to add more than two numbers.");
            }

            const phoneObject = {
                id: shortid.generate(),
                number: number,
                status: false,
                is_primary: false
            };

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$push: {phones: phoneObject}}
            );

            return phoneObject;
        },
        updatePhoneNumber: async (
            _root: undefined,
            {id, phoneId, number}: { id: string, phoneId: string, number: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<Phone> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            await db.users.updateOne(
                {_id: new ObjectId(id), "phones.id": phoneId},
                {$set: {"phones.$.number": number}}
            );

            const user = await db.users.findOne({_id: new ObjectId(id)});

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = user.phones.filter(phone => {
                if (phone.id == phoneId) {
                    return phone
                }
            });

            return phoneObject[0];
        },
        setPhoneNumberPrimary: async (
            _root: undefined,
            {id, phoneId}: { id: string, phoneId: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const numbers = userResult.phones.map(phone => {
                if (phone.id == phoneId) {
                    return {
                        id: phone.id,
                        number: phone.number,
                        status: phone.status,
                        is_primary: true
                    }
                } else {
                    return {
                        id: phone.id,
                        number: phone.number,
                        status: phone.status,
                        is_primary: false
                    }
                }
            });

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {phones: numbers}}
            );

            return {
                status: true,
                message: "Set successfully."
            };
        },
        deletePhoneNumber: async (
            _root: undefined,
            {id, phoneId}: { id: string, phoneId: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.phones.length == 1) {
                throw new Error("You are not allowed to delete your number.");
            }

            const numbers = [];
            const userPhones = userResult.phones;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (let i = 0; i < userPhones.length; i++) {
                if (userPhones && userPhones[i].id != phoneId) {
                    numbers.push({
                        id: userPhones[i].id,
                        number: userPhones[i].number,
                        status: userPhones[i].status,
                        is_primary: true
                    });
                }
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {phones: numbers}}
            );

            return {
                status: true,
                message: "Deleted successfully."
            };
        },
        addDeliveryAddress: async (
            _root: undefined,
            {id, title, address, location, instructions, isPrimary}: {
                id: string,
                title: string,
                address: string,
                location: string,
                instructions: string,
                isPrimary: boolean
            },
            {db, req}: { db: Database, req: Request }
        ): Promise<Address> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.delivery_address && userResult.delivery_address.length == 3) {
                throw new Error("Already added three address. You are not allowed to add more than three address.");
            }

            const newAddress = {
                id: shortid.generate(),
                title: title,
                address: address,
                location: location,
                instructions: instructions,
                is_primary: true,
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$push: {delivery_address: newAddress}}
            );

            return newAddress;
        },
        updateDeliveryAddress: async (
            _root: undefined,
            {id, addressId, title, address, location, instructions}: {
                id: string,
                addressId: string,
                title: string,
                address: string,
                location: string,
                instructions: string,
            },
            {db, req}: { db: Database, req: Request }
        ): Promise<Address> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const matchedAddress = userResult.delivery_address.filter(address => {return address.id == addressId});
            const {id: id1, title: title1, address: address1, location: location1, instructions: instructions1, is_primary} = matchedAddress[0];

            await db.users.updateOne(
                {_id: new ObjectId(id), "delivery_address.id": addressId},
                {
                    $set: {
                        "delivery_address.$.id": id1,
                        "delivery_address.$.title": title ? title : title1,
                        "delivery_address.$.address": address ? address : address1,
                        "delivery_address.$.location": location ? location : location1,
                        "delivery_address.$.instructions": instructions ? instructions : instructions1,
                        "delivery_address.$.is_primary": is_primary,
                    }
                }
            );

            const user = await db.users.findOne({_id: new ObjectId(id)});
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const updatedAddress = user.delivery_address.filter(address => {return address.id == addressId});

            return updatedAddress[0];
        },
        setDeliveryAddressPrimary: async (
            _root: undefined,
            {id, addressId}: { id: string, addressId: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const addresses = userResult.delivery_address.map(address => {
                if (address.id == addressId) {
                    return {
                        id: address.id,
                        title: address.title,
                        address: address.address,
                        location: address.location,
                        instructions: address.instructions,
                        is_primary: true
                    }
                } else {
                    return {
                        id: address.id,
                        title: address.title,
                        address: address.address,
                        location: address.location,
                        instructions: address.instructions,
                        is_primary: false
                    }
                }
            });

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {delivery_address: addresses}}
            );

            return {
                status: true,
                message: "Set successfully."
            };
        },
        deleteDeliveryAddress: async (
            _root: undefined,
            {id, addressId}: { id: string, addressId: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.delivery_address.length == 1) {
                throw new Error("You are not allowed to delete your address.");
            }


            const addresses = [];
            const userAddresses = userResult.delivery_address;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (let i = 0; i < userAddresses.length; i++) {
                if (userAddresses && userAddresses[i].id != addressId) {
                    if (userAddresses) {
                        addresses.push({
                            id: userAddresses[i].id,
                            title: userAddresses[i].title,
                            address: userAddresses[i].address,
                            location: userAddresses[i].location,
                            instructions: userAddresses[i].instructions,
                            is_primary: userAddresses[i].is_primary
                        });
                    }
                }
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {delivery_address: addresses}}
            );

            return {
                status: true,
                message: "Deleted successfully."
            };
        },
        changePassword: async (
            _root: undefined,
            {id, old_password, new_password, confirm_password}: { id: string, old_password: string, new_password: string, confirm_password: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            const validatePass = await validatePassword(old_password, userResult.password);
            if (!validatePass || new_password != confirm_password) {
                throw new Error("Password dose not match.")
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {password: await hashPassword(new_password)}}
            );

            return {
                status: true,
                message: "Changed successfully."
            };
        },
    },
    User: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (user: IUser): string => {
            // @ts-ignore
            return user?.user?._id?.toString() || user?._id?.toString();
        }
    }
}