"use strict";
/****************************************
* utils class
* created by chaixiaoduo@126.com
* 2018-08-06 13:52:11
****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    constructor() {
        this.fozu = [
            "                   _ooOoo_",
            "                  o8888888o",
            "                  88\" . \"88",
            "                  (| -_- |)",
            "                  O\\  =  /O",
            "               ____/`---'\\____",
            "             .'  \\\\|     |//  `.",
            "            /  \\\\|||  :  |||//  \\",
            "           /  _||||| -:- |||||-  \\",
            "           |   | \\\\\\  -  /// |   |",
            "           | \\_|  ''\\---/''  |   |",
            "           \\  .-\\__  `-`  ___/-. /",
            "         ___`. .'  /--.--\\  `. . __",
            "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
            "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
            "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
            "======`-.____`-.___\\_____/___.-`____.-'======",
            "                   `=---='",
            "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
            "         佛祖保佑      永无BUG",
            "         SERVER START SUCCESS"
        ].join('\n');
        this.now = +new Date();
    }
    /**
     * 佛祖保佑
     */
    success_log() {
        console.log(this.fozu);
    }
    /**
     * 获取当前时间
     */
    getTime(v = this.now) {
        let e, Y, M, D, h, m, s;
        e = new Date(v);
        Y = e.getFullYear();
        M = (e.getMonth() + 1) > 9 ? e.getMonth() + 1 : '0' + (e.getMonth() + 1);
        D = e.getDate() > 9 ? e.getDate() : '0' + e.getDate();
        h = e.getHours() > 9 ? e.getHours() : '0' + e.getHours();
        m = e.getMinutes() > 9 ? e.getMinutes() : '0' + e.getMinutes();
        s = e.getSeconds() > 9 ? e.getSeconds() : '0' + e.getSeconds();
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    }
    /**
     * 获取时间戳
     */
    getTimeStamp() {
        return +new Date();
    }
}
exports.default = Utils;
