/****************************************
* base class
* created by chaixiaoduo@126.com
* 2018-08-06 14:32:07
****************************************/
import Utils from './Utils'
const u = new Utils()

export default class Base {

    protected privateKey:string = "$cxd$"

    constructor() {
        
    }

    private checkAuth(token: string):boolean {
        if(token){
            return true
        }else {
            return false
        }
    }

    public getData (c:any){ 
        console.log(`${u.getTime()} --> ${c.request.url} --> ${JSON.stringify(c.query)} `)
        this.checkAuth(c.query.token)
        return c.query
    }

}