import jwt_decode from "jwt-decode";
import {userRoles} from "./user-roles";

export function isUserAdmin(user) {
    if (!user) {
        return null;
    } else {
        const {admin} = jwt_decode(user.token);
        return admin;
    }
}

export function getUserRole(user) {
    if (user) {
        const {admin} = jwt_decode(user.token);
        return admin ? userRoles.admin : userRoles.basic;
    }
    return userRoles.guest;
}