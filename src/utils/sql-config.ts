import mysql from "mysql";
import Utils from './Utils'
const u = new Utils()


const pool = mysql.createPool({
	host: "192.168.2.100",
	user: "root",
	password: "chaichai11",
	database: "koa"
});

let query = async function (sql: string, values?: any)
{
	return new Promise((resolve:any,reject:any) => {
		pool.getConnection(function (err, connection) {
			if (err) {
				console.log(`${u.getTime()}  ${err}`)
			} else {
				console.log(`${u.getTime()} --> sql = ${sql}`)
				connection.query(sql, values, (err, rows) => {
					if (err) {
						console.log(`${u.getTime()}  ${err}`)
					} else {
						console.log(`${u.getTime()} --> result = ${JSON.stringify(rows)}`);
						resolve(rows)
					}
					connection.release();
				});
			}
		});
	})
}
;

export default query;
