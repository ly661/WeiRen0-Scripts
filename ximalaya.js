/*

脚本功能：喜马拉雅 会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：暂无
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

^http[s]?:\/\/.+ximalaya.+(product/info|/mobile-user/v2/homePage|/vip/v1/recommand/ts|mobile-playpage/playpage/tabs|/mobile-album/album/page/ts|mobile/v1/album/track/ts|product/promotion/v./whole/album/\d+/price/dynamic/ts|business-vip-presale-mobile-web/page/ts).*$ https://raw.githubusercontent.com/WeiRen0/Scripts/main/ximalaya.js

[mitm]

hostname = *xima*

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'mobile-user/v2/homePage/';
const p2 = 'business-vip-presale-core-web/product/info';
const p3 = 'mobile-playpage/playpage/tabs';
const p4 = 'mobile-album/album/page/ts';
const p5 = 'vip/v1/recommand';
const p6 = 'mobile/v1/album/track/ts'
const p7 = 'business-vip-presale-mobile-web/page/ts';
//个人页面
if (url.indexOf(p1) != -1) {
    obj.data.nickname = "伟人破解";
    obj.data.isVip = true;
    obj.data.vipExpireTime = 32493834549000;
    obj.data.vipStatus = 2;
    obj.data.vipLevel = 5;
    obj.data.anchorVipInfo.isVip = true;
    obj.data.vipInfo.isVip = true;
    obj.data.vipInfo.level = 5;
    obj.data.mobileLargeLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.mobileSmallLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.mobileMiddleLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";

    body = JSON.stringify(obj);
}


//主页会员
if (url.indexOf(p2) != -1) {
    obj.data.userInfo.userNickName = "伟人破解";
    obj.data.userInfo.userLogoPic = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.userInfo.vipStatus = 2;
    obj.data.userInfo.expireDate = "2999-12-12";
    obj.data.userInfo.expireDays = 9999999;
    obj.data.userInfo.userLevel = 2;
    obj.data.userInfo.userLevelIcon = "http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png";
    delete obj.data.recommendVipProduct;
    delete obj.data.moreVipChannels;
    delete obj.data.jointVipProducts;
    
    
    body = JSON.stringify(obj);
}
//播放页面剩余时间
if (url.indexOf(p3) != -1) {
     body = body.replace(/buttonText":"[^"]+/g, 'buttonText":"点击联系作者！').replace(/buttonActionUrl":"[^"]+/g, 'buttonActionUrl":"http://n8t.cn/isRcT').replace(/expireTime":\d+/g, 'expireTime":4092647110').replace(/guidance":"[^"]+/g, 'guidance":"已解锁付费内容').replace(/explainText":"[^"]+/g, 'explainText":"作者伟人!')
     ;

    //body = JSON.stringify(obj);
}

//播放列表改免费
if (url.indexOf(p4) != -1) {
    for (var i = 0; i < obj.data.tracks.list.length; i++) {
        obj.data.tracks.list[i].isFree = true;
        obj.data.tracks.list[i].isPaid = false;
}
//删除底部开会员框架
    delete obj.data.albumGuidVipResourceInfo;
    body = JSON.stringify(obj);
}
//主界面会员删除
if (url.indexOf(p5) != -1) {
    
    delete obj.data.modules ;
    obj.data.vipStatus = 2;
    obj.data.nickName = "伟人破解";

    body = JSON.stringify(obj);
}

//播放列表改免费
if (url.indexOf(p6) != -1) {
    for (var i = 0; i < obj.data.list.length; i++) {
        obj.data.list[i].isFree = true;
        obj.data.list[i].isPaid = false;
    }
    
    body = JSON.stringify(obj);
}
//我的会员
if (url.indexOf(p7) != -1) {
    body = body.replace(/nickName":"[^"]+/g, 'nickName":"伟人破解').replace(/vipStatus":\d/g, 'vipStatus":2').replace(/subtitle":"[^"]+/g, 'subtitle":"2999-09-09会员到期').replace(/userLevelIcon":"[^"]+/g, 'userLevelIcon":"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png').replace(/userLogoPic":"[^"]+/g, 'userLogoPic":"https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a')

;
}
$done({
    body
});
