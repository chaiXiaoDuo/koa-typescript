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
const Base_1 = __importDefault(require("../utils/Base"));
const sql_config_1 = __importDefault(require("../utils/sql-config"));
const md5 = require('md5');
class SystemServer extends Base_1.default {
    constructor() {
        super();
    }
    canLogin(req) {
        let SQL;
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const { userName, passWord } = req;
            SQL =
                `select token,user_id from koa_user where user_name='${userName}' and pass_word='${passWord}'`;
            let row = yield sql_config_1.default(SQL);
            resolve(row);
        }));
    }
    checkRepeatUserName(userName) {
        let SQL, row;
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            SQL =
                `select user_id from koa_user where user_name='${userName}'`;
            row = yield sql_config_1.default(SQL);
            if (row.length > 0) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }));
    }
    insertUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let SQL;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const { userName, passWord } = req;
                SQL = `insert into koa_user set user_name='${userName}',pass_word='${passWord}',token='${this.createToken(userName)}',user_type=0,create_time=${this.getTimeStamp()}`;
                let result = yield sql_config_1.default(SQL);
                resolve(result);
            }));
        });
    }
    createToken(userName) {
        return md5(`wo shi chai xiao duo ${userName} ${this.getTimeStamp()}`);
    }
}
exports.default = SystemServer;
