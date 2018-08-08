import Koa from 'koa'
const app = new Koa();

import Utils from './utils/Utils'
const u = new Utils()

import Router from 'koa-router'
const router = new Router()

import bodyParser from 'koa-bodyparser'
import ws from 'socket.io'

router.get('/',async (c,n) => {
    u.success_log()
    c.response.body = u.fozu
})

import Sys from './router/sys.interfaces'

app.use(new Sys().routes())
app.use(router.routes())
app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}))


u.success_log()

app.listen(8084)