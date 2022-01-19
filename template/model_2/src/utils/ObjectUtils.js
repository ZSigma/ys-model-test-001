import * as objectpath from 'object-path';
function getDefaultValue(value, defaultValue) {
    if (undefined === value || null === value) {
        return defaultValue;
    }
    return value;
}
export class ObjectUtils {
    /**
     * 从对象中获取指定key的值
     * @param obj 原始对象
     * @param keys 要获取的key
     * @param defaultValue 默认值
     */
    static getValue(obj, keys, defaultValue = '-') {
        if (Array.isArray(keys)) {
            return keys.map(key => getDefaultValue(objectpath.get(obj, key), defaultValue));
        }
        return getDefaultValue(objectpath.get(obj, keys), defaultValue);
    }
    /**
     * 向对象中添加值
     * @param obj 要加值的对象
     * @param key 对象的path路径
     * @param value 值
     */
    static setValue(obj, key, value) {
        objectpath.set(obj, key, value);
    }
    static delValue(obj, key) {
        objectpath.del(obj, key);
    }
    /**
     * 去除对象空元素
     * @param obj
     * @returns {{}}
     */
    static removeNonValue(obj) {
        let newObject = {};
        Object.keys(obj).forEach(key => {
            //如果对象属性的值不为空，就保存该属性（这里我做了限制，如果属性的值为0，保存该属性。如果属性的值全部是空格，属于为空。）
            if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
                //记录属性
                newObject[key] = obj[key];
            }
        });
        //返回对象
        return newObject;
    }
}
//# sourceMappingURL=ObjectUtils.js.map