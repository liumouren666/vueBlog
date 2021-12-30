
/**
 * @description 防抖
 * @author liumouren
 * @date 29/12/2021
 * @export
 * @param {func} callBack
 * @param {number} ms
 * @return {*} 
 */
export function dithering(callBack, ms) {
    var t = null;
    // var istrue=true;
    return function () {//这里是事件处理程序，事件对象在这里传递
        // if(!istrue){
        // 	return;
        // }
        // istrue=false;//
        var arg = arguments;//这个arguments是当前函数执行环境下的arguments
        t = setTimeout(function () {
            callBack.apply(this, arg);
            // istrue=true;
        }.bind(this), ms);
    }
}