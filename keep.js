/*

脚本功能：keep 解锁会员课，直播课
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：暂无
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

^http[s]?:\/\/.+keep.+(athena/v7/people/my|/ad/preload|details|preview|/start|liveStream/schedule|course/v3/plans|/home/prime/page).*$ url script-response-body 

hostname = *keep*

*/

var body = $response.body;
var url = $request.url;


const p1 = '/athena/v7/people/my';
const p2 = '/ad/preload';
const p3 = 'details';
const p4 = 'preview';
const p5 = 'start';
const p6 = '/gerudo/v3/liveStream/schedule';
const p7 = '/course/v3/plans/';
const p8 = '/home/prime/page';
//正在直播房
if (url.indexOf(p3) != -1) {
    body = body
        .replace(/free":\w+/g, 'free":true')
        .replace(/status":\d/g, 'status":2')
        .replace(/userMemberStatus":\w+/g, 'userMemberStatus":true');
    $done({
        body
    });
}

//直播回放
if (url.indexOf(p4) != -1) {
    body = body
        .replace(/trainingMode":"\w+/g, 'trainingMode":"explain')
        .replace(/hasPaid":\w+/g, 'hasPaid":true');
    $done({
        body
    });
}

//keep直播课页面
if (url.indexOf(p6) != -1) {
    body = body
        .replace(/userMemberStatus":\w+/g, 'userMemberStatus":true')
        .replace(/free":\w+/g, 'free":true');
    $done({
        body
    });
}

//课程画质
if (url.indexOf(p7) != -1) {
    body = body
        .replace(/type":"ultra/g, 'type":"super');
    $done({
        body
    });
}
//主页会员
if (url.indexOf(p8) != -1) {
    body = body
        .replace(/username":"[^"]+/g, 'username":"伟人破解')
        .replace(/buttonText":"[^"]+/g, 'buttonText":"续费')

    .replace(/memberStatus":\d/g, 'memberStatus":1')

    $done({
        body
    });
}


var obj = JSON.parse(body);
//验证返回值
if (url.indexOf(p5) != -1) {
    obj.data.status = true;
    body = JSON.stringify(obj);
}

//个人页面
if (url.indexOf(p1) != -1) {
    obj.data.user.username = "伟人破解";

    obj.data.user.kgData.growthLevel = 5;
    obj.data.user.avatar = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.user.memberStatus = 1;
    obj.data.user.memberInfoV2.myPageMemberButton.buttonText = "2999-09-09到期";
    obj.data.user.memberInfoV2.rightResourcePosition.mainCopy = "已解锁所有课程";
    obj.data.user.memberInfoV2.rightResourcePosition.subCopy = "点击此处联系作者!!";
    obj.data.user.memberInfoV2.rightResourcePosition.jumpLink = "http://n8t.cn/isRcT";

    delete obj.data.user.memberInfoV2.leftResourcePosition;
    body = JSON.stringify(obj);
}
//开屏广告
if (url.indexOf(p2) != -1) {
    delete obj.data;
    body = JSON.stringify(obj);
}



$done({
    body
});
