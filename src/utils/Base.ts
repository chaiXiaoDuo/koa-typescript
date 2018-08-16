/****************************************
* base class
* created by chaixiaoduo@126.com
* 2018-08-06 14:32:07
****************************************/
import Utils from './Utils'
import query from './sql-config'

export default class Base extends Utils{

    protected privateKey:string = "$cxd$"

    constructor() {
        super()
    }

    /**
     * 检查权限
     * @param {string} token 
     */
    public checkAuth() {

    }

    /**
     * 解析数据
     * @param {object} ctx 
     */
    public getData (c:any) {
        console.log(`${this.getTime()} --> ${c.request.url} --> ${JSON.stringify(c.request.body)} `)
        return c.request.body
    }

    /**
     * 返回数据格式化
     * @param {string} data 返回数据
     */
    public sendJson (data:object):object {
        return {code: '200', msg: 'success', data: data}
    }

    /**
     * 返回错误数据
     * @param {string} msg 提示语
     */
    public sendErrorJson (msg: string):object {
        return {code: '400', msg: msg, data: {}}
    }
}