//时间文本格式化
export function dateFormat(data, format) {
    let date = {
    "YYYY+": data.getFullYear(),
    "MM+": data.getMonth() + 1,
    "dd+": data.getDate(),
    "h+": data.getHours(),
    "m+": data.getMinutes(),
    "s+": data.getSeconds(),
    "q+": Math.floor((data.getMonth() + 3) / 3),
    "S+": data.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(
            RegExp.$1,
            (data.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
            RegExp.$1,
            RegExp.$1.length == 1
                ? date[k]
                : ("00" + date[k]).substr(("" + date[k]).length)
            );
        }
    }
    return format;
}
// 计算给定时间的今年的第几周
export function getWeekOfYear(date){
    var firstDay = new Date(date.getFullYear(),0, 1);
    var dayOfWeek = firstDay.getDay();
    var spendDay= 1;
    if (dayOfWeek !=0) {
        // 每周从周一~周日  
        spendDay=7-dayOfWeek;
    }
    firstDay = new Date(date.getFullYear(),0, 1+spendDay);
    var d =Math.ceil((date.valueOf()- firstDay.valueOf())/ 86400000);
    var result =Math.ceil(d/7);
    return date.getFullYear() + '-' + result;
}
// 计算给定时间的周一和周末
export function getMonAndSunday(date){
    date = new Date(date); 
    const nowTime = date.getTime() ; 
    let day = date.getDay();
    let _day = day === 0 ? 7 : day;
    const oneDayLong = 24*60*60*1000 ; 

    // _day = 6的话，时间的毫秒值多了周一，（6-1）* oneDayLong
    // 少了周末的 （7 - 6）* oneDayLong
    return [new Date(nowTime - (_day-1)*oneDayLong), new Date(nowTime + (7-_day)*oneDayLong)];
}
