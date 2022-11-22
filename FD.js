/*

脚本功能：樊登读书 会员+付费课程
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

^http[s]?:\/\/.+dushu.+(v101/content|book/v100/info|/play/duration|/v100/index).*$ url request-body "token":"[^"]+ request-body "token":"20221117rUwJa1id5I0oUDDYTJk
^http[s]?:\/\/.+dushu.+(v101|v100|program/v100)\/(content|play/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType) url script-response-body 

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/v101/content';
const p2 = '/v100/list';
const p3 = '/program/v100/info';
const p4 = '/v101/userInfo';
const p5 = '/v100/vipInfo';
const p6 = '/course/v100/info';
const p7 = '/v100/ceiltip';
const p8 = '/v100/mainList';
const p9 = '/v100/getMarketInfoByType';
//非凡精读验证
if (url.indexOf(p1) != -1) {
	obj.data.free = true;
	body = JSON.stringify(obj);
}
//付费课程页面
if (url.indexOf(p2) != -1) {
	for (var i = 0;i < obj.data.length;i++) {
		obj.data[i].free = true;
		obj.data[i].unlock = true;
	}
	body = JSON.stringify(obj);
}
//付费课程解锁🔓
  if (url.indexOf(p3) != -1) {
	for (var i = 0;i <                         obj.data.programList.length;i++) {
		obj.data.programList[i].free = true;
		obj.data.programList[i].unlock = true;
	}
	obj.data.free = true;
	obj.data.isBuyed = true;
	obj.data.trial = true;
	obj.data.unlock = true;
	body = JSON.stringify(obj);
}
//会员个人页面
if (url.indexOf(p4) != -1) {
	obj.data.is_vip = true;
	obj.data.username = "伟人破解";
	obj.data.expire_time = 32493834549000;
	obj.data.avatarUrl = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
	obj.data.free = true;
	body = JSON.stringify(obj);
}
//非凡精读页面会员时间
if (url.indexOf(p5) != -1) {
	obj.data.endTime = 32493834549000;
	obj.data.userStatus = 1;
	body = JSON.stringify(obj);
}
//去除课程购买图标
if (url.indexOf(p6) != -1) {
	obj.data.learningInfo.shareText = "本课程已解锁成功!";
	obj.data.hasBought = true;
	body = JSON.stringify(obj);
}
//去除讲书页面会员广告
if (url.indexOf(p7) != -1) {
	delete obj.data;
	body = JSON.stringify(obj);
}

//课程已购买
if (url.indexOf(p8) != -1) {
	//热门新课以已购买
	for (var i = 0;i <                                                 obj.data.hotTopCourses. hotCourse.length;i++) {
		obj.data. hotTopCourses. hotCourse[i].hasOwned = true;
		obj.data. hotTopCourses. hotCourse[i].offShelf = true;
	}
	//热销课程已购买
	for (var i = 0;i <                               obj.data.hotTopCourses.topCourse.length;i++) {
		obj.data.hotTopCourses.topCourse[i].hasOwned = true;
		obj.data.hotTopCourses.topCourse[i].offShelf = true;
	}
	body = JSON.stringify(obj);
}
//主页课程已购买
if (url.indexOf(p9) != -1) {
	for (var i = 0;i < obj.data.length;i++) {
		obj.data[i].hasBuy = 1;
		}
	body = JSON.stringify(obj);
}
$done({
	body
});
