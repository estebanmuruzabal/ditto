import {Request} from "express";
import * as jwt from "jsonwebtoken";
import {Database, IUser} from "../../lib/types";
import {ObjectId} from "mongodb";


export const authorize = async (req: Request, db: Database): Promise<IUser | null> => {
    //Get the jwt token from the head
    const token = <string>req.headers["x-access-token"];
    const secret = <string>process.env.JWT_SECRET;

    if (!token) {
        throw new Error("no token sent!");
    }

    // try {
    //     jwt.verify(token, secret);
    // } catch(err) {
    //     throw new Error("El token de tu sesión ha expirado! Por favor ingrese nuevamente a su cuenta")
    // }

    const {UserId, exp} = <any>jwt.verify(token, secret);

    // if (exp < Date.now().valueOf() / 1000) {
    //     throw new Error("El token de tu sesión ha expirado! Por favor ingrese nuevamente a su cuenta")
    // }

    const user = await db.users.findOne({_id:  new ObjectId(UserId)});

    if (!user) {
        throw new Error("No user found!");
    }

    return user;
};

export const takeNineOutIfItHasIt = (phone: string) => {
    if (phone.startsWith('549')) {
        return '54' + phone.substring(3, phone.length)
    }

    return phone;
}