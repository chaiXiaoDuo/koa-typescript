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
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
const Utils_1 = __importDefault(require("./utils/Utils"));
const u = new Utils_1.default();
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
router.get('/', (c, n) => __awaiter(this, void 0, void 0, function* () {
    u.success_log();
    c.response.body = u.fozu;
}));
const sys_interfaces_1 = __importDefault(require("./router/sys.interfaces"));
// 设置跨域
app.use(koa2_cors_1.default());
// 设置请求体接收
app.use(koa_bodyparser_1.default());
// 启动路由
app.use(new sys_interfaces_1.default().routes());
app.use(router.routes());
app.use(ctx => {
    ctx.body = ctx.request.body;
});
app.listen(8084, () => {
    u.success_log();
});
