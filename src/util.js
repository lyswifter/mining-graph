
export function timing(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0,19).replace('T', ' ');
}


/**
 * JS 计算两个时间间隔多久（时分秒）
 * @param startTime "2019-10-23 15:27:23"
 * @param endTime "2019-10-23 15:27:55"
 * @return 1天2时3分5秒
 */

export function twoTimeInterval(startTime, endTime) {
 
    // 开始时间
    let d1 = startTime.replace(/\-/g, "/");
    let date1 = new Date(d1);
   
    // 结束时间
    let d2 = endTime.replace(/\-/g, "/");
    let date2 = new Date(d2);
   
    // 时间相差秒数
    let dateDiff = date2.getTime() - date1.getTime();
   
    // 计算出相差天数
    let days = Math.floor(dateDiff / (24 * 3600 * 1000));
   
    // 计算出小时数
    let residue1 = dateDiff % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
    let hours = Math.floor(residue1 / (3600 * 1000));
   
    // 计算相差分钟数
    let residue2 = residue1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
    let minutes = Math.floor(residue2 / (60 * 1000));
   
    // 计算相差秒数
    let residue3 = residue2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
    let seconds = Math.round(residue3 / 1000);
   
    let returnVal =
      ((days == 0) ? "" : days+"D") +
      ((hours == 0) ? "" : days+"H") +
      ((minutes == 0) ? "" : minutes+"M") +
      ((seconds == 0) ? "" : seconds+"S");
   
    return returnVal;
   
}