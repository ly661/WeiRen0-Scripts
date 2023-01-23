
/***************************************

脚本功能：得间小说

在线观看地址: https://smk005.com/line?
脚本作者：伟人
作者QQ:55749353
更新时间：2023-01-23
问题反馈：QQ+55749353
作者忠告: 建议使用正版
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^http[s]?:\/\/dj\.palmestore\.com\/zyuc\/api\/user\/accountInfo\?idfa.*$ url script-response-body dejian.js

[mitm]
hostname = *palmestore*

**************************************/

var body = $response.body; //声明一个变量body并以响应消息体赋
let obj = JSON.parse($response.body);
obj={

  "code": 0,
  "body": {
    "isLogin": 1,
    "userInfo": {
      "userNick": "by~伟人",
      "phone": "186****8888",
      "introduction": "",
      "backgroundImage": "https:\/\/book.img.zhangyue01.com\/idc_1\/m_1,w_300,h_400\/cc0f7267\/group61\/M00\/F5\/C3\/CmQUOWE3GMiEDJmCAAAAAOBLtBo778866857.png?v=ow--8z53&t=CmQUOWE3GMg.",
      "gender": 2,
      "avatar": "https:\/\/book.img.zhangyue01.com\/idc_1\/group61\/M00\/6A\/0E\/CmQUOF-JksWEXDUBAAAAAHZBVT0881708433.png?v=wF2pXwAF&t=CmQUOF-JksU.",
      "level": 1,
      "birthday": "",
      "title": [],
      "vipInfo": {
        "vipType": 1,
        "vipExpire": 9999999999990,
        "expireDate": "2999-09-09",
        "halfScreen": "https:\/\/dj.palmestore.com\/zytc\/public\/index.php?ca=FreeVip.Index&source=book",
        "fullScreen": "https:\/\/dj.palmestore.com\/zytc\/public\/index.php?ca=FreeVip.Index&showContentInStatusBar=1&source=mine",
        "description": "开通会员",
        "content": "点击进入购买会员",
        "expireDateNew": ""
      },
      "unlockVipInfo": {
        "vipType": 1,
        "vipExpire": 9999999999990,
        "expireDate": "2999-09-09"
      },
      "hohorAmount": {
        "amount": 0,
        "amountText": "0"
      }
    },
    "followInfo": {
      "follow": 0,
      "fans": 0
    },
    "isAuthor": false,
    "read": {
      "time": 0,
      "week": 0,
      "total": 0,
      "tingTotal": 0,
      "tingDay": 0,
      "tingWeek": 0,
      "tingMonth": 0
    },
    "amount": 0,
    "switch": 1,
    "gold": {
      "isShow": 1,
      "goldAmount": 0,
      "goldText": "0元",
      "url": "https:\/\/dj.palmestore.com\/zycl\/gold\/withdraw?source=mine"
    },
    "userRank": 0,
    "myaccount_url": "https:\/\/dj.palmestore.com\/zyuc\/user\/account?source=mine"
  },
  "msg": ""
}
$done({body: JSON.stringify(obj)});
