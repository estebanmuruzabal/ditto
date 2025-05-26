import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {
    Database,
    ICommonMessageReturnType,
    ICommonPaginationArgs,
    ICommonPaginationReturnType,
    IUser,
    IWorkInfo,
    Logs,
    Roles
} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {search} from "../../../lib/utils/search";
import { generateOTPCode, hashPassword } from '../User';
import shortid from "shortid";
import { timeZone } from '../../../lib/utils/constant';

export const staffMethodsResolvers: IResolvers = {
    Query: {
        getStaffs: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IUser[]> => {
            await authorize(req, db);
            return await db.users.find({}).toArray();
        },
    },

    Mutation: {
        staffSignUp: async (
            _root: undefined,
            {phone, password, name, role}: { phone: string, password: string, name: string, role: Roles },
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({"phones.number": phone});
            
            if (userResult) {
                throw new Error("User already registered.");
            }

            if (!phone ||!password) {
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
                phones: [{id: shortid.generate(), number: phone, status: false, is_primary: true}],
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
                chatHistory: [],
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
                message: "Staff successfully created."
                // message: "Successfully send otp to your number."
            };
        },
        updateUserWorkInfo: async (
            _root: undefined,
            {id, isWorking, startedWorkTime, stoppedWorkTime, ratePerHour, logDescription, totalWorkingMinutesPerWeek, totalSalaryToPayWeekly, advancedSalaryPaid, taskRelated, role}: { id: string, isWorking: boolean, startedWorkTime: string, stoppedWorkTime: string, ratePerHour: number, logDescription: string, totalWorkingMinutesPerWeek: number, totalSalaryToPayWeekly: number, advancedSalaryPaid: number, taskRelated: string, role: Roles },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const logs = userResult.logs || [];
            logs.push({
                logDescription: logDescription,
                timestamp: new Date().toLocaleString('en-US', { timeZone })
            });

            const workInfo: IWorkInfo = {
                isWorking,
                startedWorkTime,
                stoppedWorkTime,
                ratePerHour,
                totalWorkingMinutesPerWeek,
                totalSalaryToPayWeekly,
                advancedSalaryPaid,
                taskRelated,
            };
            
            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {workInfo, logs, role}}
                
            );

            return {
                status: true,
                message: "Updated workInfo successfully."
            };
        },

        updateUserLogs: async (
            _root: undefined,
            {id, logs}: { id: string, logs: [Logs] },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {logs: logs}}
            );

            return {
                status: true,
                message: "Updated logs successfully."
            };
        },

        deleteUserTask: async (
            _root: undefined,
            {id, taskId}: { id: string, taskId: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const { tasks } = userResult;
            const taskIndex = tasks?.findIndex(task => task.taskId === taskId) || 0;

            tasks.splice(taskIndex, 1);

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {tasks: tasks}}
            );

            return {
                status: true,
                message: "Updated logs successfully."
            };
        },


        updateUserTasks: async (
            _root: undefined,
            {id, taskId, description ,startDate ,finishDate ,plannedDate, isRepetitived, completationTimes, workedHours, isDone}: {
                id: string,
                taskId: string,
                description: string,
                startDate: string,
                finishDate: string,
                plannedDate: string,
                isRepetitived: boolean,
                completationTimes: string,
                workedHours: string,
                isDone: boolean },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);
            // console.log(taskId, description ,startDate ,finishDate ,plannedDate, isRepetitived, completationTimes, workedHours, isDone)
            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            
            const { tasks } = userResult;
            const taskIndex = tasks?.findIndex(task => task.taskId === taskId) || 0;

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
            } else {
                tasks.push(task)
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {tasks: tasks}}
            );

            return {
                status: true,
                message: "Updated tasks successfully."
            };
        },
        deleteStaff: async (
            __root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const deleteResult = await db.users.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return {
                message: 'Resource successfully deleted.',
                status: true
            };
        },
    },
}