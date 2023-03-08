/***************************************
脚本功能：付费会员卡
脚本作者：伟人
作者QQ:
更新时间：2023-03-08
问题反馈：QQ+
作者忠告: 不要乱搞
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************


[rewrite_local]

#微信读书
^http[s]?:\/\/(i|res)\.weread\.qq\.com\/(phoneLogin|book/chapterInfos|user\?userVid\=|upload\?type\=avatar|pay\/balance).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/wxds6.js
^http[s]?:\/\/i\.weread\.qq\.com\/guestLogin url request-body [\s\S]+ request-body {"random":2073489611,"deviceId":"8b024b09b8b9ccb1dc6bf030158e02fb","password":"55749353","signature":"b155b686ba856a33ce59892c171b00ead23c5a76b0679659dd0f246613908d6e","tel":"18012902601","timestamp":1678269898,"isReg":false}
^http[s]?:\/\/i\.weread\.qq\.com\/device\/logout url reject-200
^http[s]?:\/\/i\.weread\.qq\.com\/updateConfig url reject-200
^http[s]?:\/\/res\.weread\.qq.com\/upload\?type\=avatar url reject-200

[mitm]

hostname = *.weread.qq.com

***************************************/



var body = $response.body;
var url = $request.url;


const p1 = 'phoneLogin';
const p2 = '/pay/balance';
const p3 = '/book/chapterInfos';
const p4 = '/user?userVid=186381048';
const p5 = 'upload?type=avatar';


//目录解锁
if (url.indexOf(p3) != -1) {
    body = body
        .replace(/price":[0-9.]+/g, 'price":0')
        .replace(/"paid":\d/g, '"paid":0')

}

//金币
if (url.indexOf(p2) != -1) {


    body = body
        .replace(/balance":[0-9.]+/g, 'balance":999880')
}

var obj = JSON.parse(body);

//login
if (url.indexOf(p1) != -1) {

    obj =

        {
            "skey": "PWFP0Rlo",
            "openId": "G_186381048_5FNzAO1KS8WUUx1DzxtD",
            "accessToken": "PWFP0Rlo",
            "vid": 186381048,
            "user": {
                "name": "by~伟人",
                "avatar": "https://res.weread.qq.com/wravatar/WV0008-2CDLd4XONi0lOTJWnmH0Md3/0"
            }
        }



    body = JSON.stringify(obj);
}

//个人数据
if (url.indexOf(p4) != -1) {

    obj = {
        "gender": 2,
        "avatar": "https://res.weread.qq.com/wravatar/WV0008-iXEv0iASfWZu4OuPAgPxLd3/0",
        "nick": "18012902601",
        "isV": 1,
        "isHide": 1,
        "signature": "爱你们的伟人giegie",
        "vDesc": "不要动任何设置O",
        "location": "中国台湾",
        "userVid": 186381048,
        "name": "by~伟人"
    }



    body = JSON.stringify(obj);
}

//头像
if (url.indexOf(p5) != -1) {

    obj = {
        "url": "https://res.weread.qq.com/wravatar/WV0008-S52DlskNfnl~Z0UhZ6G0td3/0"
    }


    body = JSON.stringify(obj);
}

$done({
    body
});
