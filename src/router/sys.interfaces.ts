/****************************************
* sys interface 
* created by chaixiaoduo@126.com
* 2018-08-06 14:27:45
****************************************/
import Router from 'koa-router'
import SystemServer from '../server/system.server'
import query from '../utils/sql-config'
import * as systemInterface from '../interface/system.interface'
export default class Sys extends SystemServer{
    
    private router:any;

    constructor (){
        super()
        this.router = new Router()
        this.login()
        this.register()
    }

    private login() {
        this.router.post('/sys/login',async (c:any) => {
            const req:systemInterface.Login = this.getData(c)
            let result:any = await this.canLogin(req)
            if(result.length == 1){
                c.response.body = this.sendJson(result)
            }else {
                c.response.body = this.sendErrorJson('用户名或密码错误')
            }
        })
    }

    private register (){
        this.router.post('/sys/register',async (c:any) => {
            const req:systemInterface.Register = this.getData(c)
            let isRepeat = await this.checkRepeatUserName(req.userName)
            if(isRepeat){
                c.response.body = this.sendErrorJson('用户名重复')
            }else {
                let result = await this.insertUser(req)
                console.log(`${this.getTime()} --> create new user ${req.userName} --> ${JSON.stringify(result)}`)
                c.response.body = this.sendJson({})
            }
        })
    }

    
    public routes (){
        return this.router.routes()
    }

}
