/**
 * 根据数组对象属性给数组排序
 * @param {string} property 属性
 * @param {boolean} type 升序，降序
 * **/
export function sortByProperty(property,type){
    return function(a,b){
        let value1 = a[property]
        let value2 = b[property]
        return type ? (value1-value2) : (value2-value1)
    }
} 

/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
 export function throttle (fn, t){
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
};

export function timestampFormat(timestamp){
    if(!timestamp){return ''}
    function add0(m){return m<10?'0'+m:m }
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
// 金额格式化
export function fomatMoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    var l = s.split('.')[0].split('').reverse(),
    r = s.split('.')[1];
    var t = '';
    for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
    }
    return t.split('').reverse().join('') + '.' + r;
    
    }