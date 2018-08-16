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
class Base extends Utils_1.default {
    constructor() {
        super();
        this.privateKey = "$cxd$";
    }
    /**
     * 检查权限
     * @param {string} token
     */
    checkAuth(token) {
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * 解析数据
     * @param {object} ctx
     */
    getData(c) {
        console.log(`${this.getTime()} --> ${c.request.url} --> ${JSON.stringify(c.request.body)} `);
        return c.request.body;
    }
    /**
     * 返回数据格式化
     * @param {string} data 返回数据
     */
    sendJson(data) {
        return { code: '200', msg: 'success', data: data };
    }
    /**
     * 返回错误数据
     * @param {string} msg 提示语
     */
    sendErrorJson(msg) {
        return { code: '400', msg: msg, data: {} };
    }
}
exports.default = Base;
