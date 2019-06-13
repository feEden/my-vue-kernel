import ELEMENT from "element-ui";

/* sessionStorage 方法集合 */
//设置session
export function setItem(key, value){
    sessionStorage.setItem(key, JSON.stringify(value));
}

//获取session
export function getItem(key){
    let result = '';
    try {
        result = JSON.parse(sessionStorage.getItem(key));
    } catch (e) {
        ELEMENT.Message.error('JSON解析错误,' + e.message);
    }
    return result;
}

//清空session
export function clear(key = ''){
    if(key === ''){
        sessionStorage.clear();
    }else{
        sessionStorage.removeItem(key);
    }
}