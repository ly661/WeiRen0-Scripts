/*

[rewrite_local]

^https:\/\/ppt.fuaybr.cn\/\/Api/getmovexiangqing url request-body sign_token=[a-zA-Z0-9]+ request-body sign_token=a8708eb53c2b5b1e8ce20ab3fa9063ce

^https:\/\/ppt.fuaybr.cn\/\/Api\/getuserinfo url script-response-body Milk.js

[mitm]

hostname = *fuaybr*


*/

var body = $response.body; 
let obj = JSON.parse($response.body);
obj={
  "msg" : "获取用户数据成功",
  "user_info" : {
    "description" : "",
    "grades" : "1",
    "sign_token" : "a8708eb53c2b5b1e8ce20ab3fa9063ce",
    "app_uuid" : "",
    "last_login_time" : "1670073162",
    "status" : "1",
    "login_type" : "3",
    "zhanghaobj" : "https://ppt.fuaybr.cn/Public/appimg/zhanghaobj005.png",
    "mfseett" : "获取更多免费看",
    "qrpassword" : "",
    "sex" : "0",
    "invitshow" : 0,
    "share_id" : "98027",
    "account_token" : "XNa*UqBfoi9XkQ*CDx761932294",
    "ke_id" : 1,
    "share_url" : "https://ppt.fuaybr.cn?qr_code=mm793603",
    "balance" : "0",
    "point" : "0",
    "mf_see" : "0",
    "level_expire" : "2999年09月09日 20:44",
    "id" : "793603",
    "userhead" : "https://ppt.fuaybr.cn/Public/toulogo/47.jpg",
    "level" : "1",
    "invit_code" : "mm793603",
    "qr_code" : "https://ppt.fuaybr.cn",
    "mobile" : "87808520",
    "zhanghaoerwmbj" : "https://ppt.fuaybr.cn/Public/appimg/ffffff.png",
    "dl" : "0",
    "login_banben" : "3",
    "username" : "Fly"
  },
  "code" : 10000
}

$done({body: JSON.stringify(obj)});
