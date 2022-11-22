/*

脚本功能：哔哩哔哩 画质解锁
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2022-11-22
问题反馈：QQ+55749353
食用方法: 看免费视频把画质调高，后续看任何视频都高画质
QQ会员群：暂无
TG反馈群：暂无
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


^http[s]?:\/\/.+bilibili.+((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/BLBLHD.js

QX MITM = *.biliapi.*, *.bilibili.*
*/

var body = $response.body;
var url = $request.url;

const path1 = '/pgc/player/api/playurl';
const path2 = "/x/v2/account/myinfo?";
const path3 = "/x/v2/account/mine\?";
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);   
    obj["has_paid"] = true;
	obj["quality"] = obj["accept_quality"][0];
	obj.vip_type = 2;
	obj.vip_status = 1;
 	body = JSON.stringify(obj);  
 };
if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
    obj["data"]["vip"]["type"] = 2;
    obj["data"]["vip"]["status"] = 1;
    obj["data"]["vip"]["vip_pay_type"] = 1;
    obj["data"]["vip"]["due_date"] = 1796054400000;

   body=JSON.stringify(obj);
 };
   
if (url.indexOf(path3) != -1){
  let obj = JSON.parse(body);
     obj["data"]["vip_type"] = 2;
     obj["data"]["vip"]["type"] = 2;
     obj["data"]["vip"]["status"] = 1;
     obj["data"]["vip"]["vip_pay_type"] = 1;
     obj["data"]["vip"]["due_date"] = 1796054400000;
     obj["data"]["name"] = "伟人破解";
     obj["data"]["coin"] = 999880;
     obj["data"]["bcoin"] = 999880;
     obj["data"]["level"] = 6;
     obj["data"]["face"] = "https://static1.keepcdn.com/avatar/2021/11/09/00/23/e8374efaeeaa36fe6004e73490e13b118606eac1.jpg";
   body=JSON.stringify(obj);
};
   
 $done({body});
