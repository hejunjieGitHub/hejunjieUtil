// 引用类型深拷贝
// ES5写法
function deepCopy(obj) {
    if (obj === null) return null; // null 的情况
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (typeof obj !== 'object') {
        // 如果不是复杂数据类型，直接返回
        return obj;
    }
    let newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}