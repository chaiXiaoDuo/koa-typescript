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
const mysql_1 = __importDefault(require("mysql"));
const Utils_1 = __importDefault(require("./Utils"));
const u = new Utils_1.default();
const pool = mysql_1.default.createPool({
    host: "192.168.2.100",
    user: "root",
    password: "chaichai11",
    database: "koa"
});
let query = function (sql, values) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    console.log(`${u.getTime()}  ${err}`);
                }
                else {
                    console.log(`${u.getTime()} --> sql = ${sql}`);
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            console.log(`${u.getTime()}  ${err}`);
                        }
                        else {
                            console.log(`${u.getTime()} --> result = ${JSON.stringify(rows)}`);
                            resolve(rows);
                        }
                        connection.release();
                    });
                }
            });
        });
    });
};
exports.default = query;
