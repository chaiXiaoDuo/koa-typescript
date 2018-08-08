/****************************************
* sys interface 
* created by chaixiaoduo@126.com
* 2018-08-06 14:27:45
****************************************/
import Router from 'koa-router'
import Base from '../utils/Base'

export default class Sys extends Base{
    
    private router:any;

    constructor (){
        super()
        this.router = new Router()
        this.login()
        this.getToken()
        this.register()
    }

    private login() {
        this.router.get('/sys/login',async (c:any) => {
            const req = this.getData(c)
            c.response.body = c.query
        })
    }

    private getToken (){
        this.router.post('/sys/getToken', async (c:any) => {
            c.response.body = '/sys/getToken'
        })
    }

    private register (){
        this.router.post('/sys/register',async (c:any) => {
            c.response.body = '/sys/register'
        })
    }

    
    public routes (){
        return this.router.routes()
    }

}
