import Koa from 'koa'
const app = new Koa();

import Utils from './utils/Utils'
const u = new Utils()

import Router from 'koa-router'
const router = new Router()

import bodyParser from 'koa-bodyparser'
import ws from 'socket.io'
import cors from 'koa2-cors'

router.get('/',async (c,n) => {
    u.success_log()
    c.response.body = u.fozu
})

import Sys from './router/sys.interfaces'

// 设置跨域
app.use(cors())
// 设置请求体接收
app.use(bodyParser())
// 启动路由
app.use(new Sys().routes())
app.use(router.routes())
app.use( ctx => {
    ctx.body = ctx.request.body
})


app.listen(8084, () => {
    u.success_log()
})