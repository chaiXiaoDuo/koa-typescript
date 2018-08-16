import Base from '../utils/Base'
import query from '../utils/sql-config'
const md5 = require('md5')
import * as systemInterface from '../interface/system.interface'

export default class SystemServer extends Base {

    constructor(){
        super()
    }

    public canLogin (req:systemInterface.Login){
        let SQL: string
        return new Promise(async (resolve) => {
            const {userName,passWord} = req
            SQL = 
            `select token,user_id from koa_user where user_name='${userName}' and pass_word='${passWord}'`
            let row = await query(SQL)
            resolve(row)
        })
    }

    public checkRepeatUserName (userName: string){
        let SQL: string, row:any
        return new Promise (async (resolve) => {
            SQL = 
            `select user_id from koa_user where user_name='${userName}'`
            row = await query(SQL)
            if(row.length > 0){
                resolve(true)
            }else {
                resolve(false)
            }
        })
    }

    public async insertUser (req: systemInterface.Register){
        let SQL: string
        return new Promise (async (resolve) => {
            const {userName,passWord} = req
            SQL = `insert into koa_user set user_name='${userName}',pass_word='${passWord}',token='${this.createToken(userName)}',user_type=0,create_time=${this.getTimeStamp()}`;
            let result = await query(SQL)
            resolve(result)
        })
    }

    private createToken (userName: string){
        return md5(`wo shi chai xiao duo ${userName} ${this.getTimeStamp()}`)
    }

}