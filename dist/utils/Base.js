"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************
* base class
* created by chaixiaoduo@126.com
* 2018-08-06 14:32:07
****************************************/
const Utils_1 = __importDefault(require("./Utils"));
const u = new Utils_1.default();
class Base {
    constructor() {
        this.privateKey = "$cxd$";
    }
    checkAuth(token) {
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
    getData(c) {
        console.log(`${u.getTime()} --> ${c.request.url} --> ${JSON.stringify(c.query)} `);
        this.checkAuth(c.query.token);
        return c.query;
    }
}
exports.default = Base;
