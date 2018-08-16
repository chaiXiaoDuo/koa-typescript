"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************
* sys interface
* created by chaixiaoduo@126.com
* 2018-08-06 14:27:45
****************************************/
const koa_router_1 = __importDefault(require("koa-router"));
const system_server_1 = __importDefault(require("../server/system.server"));
class Sys extends system_server_1.default {
    constructor() {
        super();
        this.router = new koa_router_1.default();
        this.login();
        this.register();
    }
    login() {
        this.router.post('/sys/login', (c) => __awaiter(this, void 0, void 0, function* () {
            const req = this.getData(c);
            let result = yield this.canLogin(req);
            if (result.length == 1) {
                c.response.body = this.sendJson(result);
            }
            else {
                c.response.body = this.sendErrorJson('用户名或密码错误');
            }
        }));
    }
    register() {
        this.router.post('/sys/register', (c) => __awaiter(this, void 0, void 0, function* () {
            const req = this.getData(c);
            let isRepeat = yield this.checkRepeatUserName(req.userName);
            if (isRepeat) {
                c.response.body = this.sendErrorJson('用户名重复');
            }
            else {
                let result = yield this.insertUser(req);
                console.log(`${this.getTime()} --> create new user ${req.userName} --> ${JSON.stringify(result)}`);
                c.response.body = this.sendJson({});
            }
        }));
    }
    routes() {
        return this.router.routes();
    }
}
exports.default = Sys;
