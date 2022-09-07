"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffMethodsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const User_1 = require("../User");
const shortid_1 = __importDefault(require("shortid"));
exports.staffMethodsResolvers = {
    Query: {
        getStaffs: (_root, _args, { db, req }
        // ): Promise<any> => {
        //     await authorize(req, db);
        //     const workersAndAdmins = await db.users.find((user: IUser) => {
        //         if (user) {
        //             return user;
        //         }
        //     });
        //     // return await db.users.find({}).toArray()
        //     return workersAndAdmins;
        // },
        ) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            return yield db.users.find({}).toArray();
        }),
    },
    Mutation: {
        staffSignUp: (_root, { phone, password, role }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (userResult) {
                throw new Error("User already registered.");
            }
            if (!phone || !password) {
                throw new Error("Every field is required");
            }
            if (password.length < 6) {
                throw new Error("Incorrect length");
            }
            const otp = User_1.generateOTPCode();
            const user = {
                _id: new mongodb_1.ObjectId(),
                name: "",
                email: "",
                password: yield User_1.hashPassword(password),
                phones: [{ id: shortid_1.default.generate(), number: phone, status: false, is_primary: true }],
                otp: otp,
                role: role,
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
                logs: []
            };
            yield db.users.insertOne(user);
            // const {data, status} = await sendOtp(phone, otp);
            // const {data, status} = await sendMailVerification('estebanmuruzabal@gmail.com');
            // if (status != 201) {
            //     throw new Error("Something went wrong! Please try again.");
            // }
            return {
                status: true,
                message: "Staff successfully created."
                // message: "Successfully send otp to your number."
            };
        }),
        updateUserWorkInfo: (_root, { id, isWorking, startedWorkTime, stoppedWorkTime, ratePerHour, logDescription, totalWorkingMinutesPerWeek, totalSalaryToPayWeekly, advancedSalaryPaid, taskRelated, role }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            const logs = userResult.logs || [];
            logs.push({
                logDescription: logDescription,
                timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
            });
            const workInfo = {
                isWorking,
                startedWorkTime,
                stoppedWorkTime,
                ratePerHour,
                totalWorkingMinutesPerWeek,
                totalSalaryToPayWeekly,
                advancedSalaryPaid,
                taskRelated,
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { workInfo, logs, role } });
            return {
                status: true,
                message: "Updated workInfo successfully."
            };
        }),
        updateUserLogs: (_root, { id, logs }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { logs: logs } });
            return {
                status: true,
                message: "Updated logs successfully."
            };
        }),
        deleteUserTask: (_root, { id, taskId }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            const { tasks } = userResult;
            const taskIndex = (tasks === null || tasks === void 0 ? void 0 : tasks.findIndex(task => task.taskId === taskId)) || 0;
            tasks.splice(taskIndex, 1);
            console.log(tasks);
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { tasks: tasks } });
            return {
                status: true,
                message: "Updated logs successfully."
            };
        }),
        updateUserTasks: (_root, { id, taskId, description, startDate, finishDate, plannedDate, isRepetitived, completationTimes, workedHours, isDone }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            // console.log(taskId, description ,startDate ,finishDate ,plannedDate, isRepetitived, completationTimes, workedHours, isDone)
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            // console.log(userResult)
            const { tasks } = userResult;
            const taskIndex = (tasks === null || tasks === void 0 ? void 0 : tasks.findIndex(task => task.taskId === taskId)) || 0;
            const task = {
                taskId: taskId ? taskId : Math.random().toString(),
                description,
                startDate,
                finishDate,
                plannedDate,
                isRepetitived,
                completationTimes,
                workedHours,
                isDone
            };
            if (taskId) {
                tasks[taskIndex] = task;
            }
            else {
                tasks.push(task);
            }
            console.log(tasks);
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { tasks: tasks } });
            return {
                status: true,
                message: "Updated tasks successfully."
            };
        }),
        deleteStaff: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const deleteResult = yield db.users.findOneAndDelete({
                _id: new mongodb_1.ObjectId(id)
            });
            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.");
            }
            return {
                message: 'Resource successfully deleted.',
                status: true
            };
        }),
    },
};
