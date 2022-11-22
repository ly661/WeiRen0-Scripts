/*

脚本功能：哔哩哔哩 会员
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

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = 'DedeUserID=384127042; DedeUserID__ckMd5=21c826fd6926210b; SESSDATA=09411b83%2C1680188013%2C78bcb1a1; bili_jct=034c73206499720d93905f59aad2de23; sid=67gsfl3i; Buvid=YA4B74AB146181B648D5940003B65FCCAAEA';

modifiedHeaders['Authorization'] = 'identify_v1 8b9aa69bec6698a0b31547a102f18ea1';

modifiedHeaders['x-bili-device-bin'] = 'CAEQ5LuwIRokWUE0Qjc0QUIxNDYxODFCNjQ4RDU5NDAwMDNCNjVGQ0NBQUVBIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIDExUgYxNS4zLjFqBTcuMC4wckAyQkIzQkExRjg4OUZFMDlERUFENTI3OEI2OEYyOTVCNzIwMjIwODEwMTAxOTM0RTQ5RDc5MzM0NzIxODU4MEMzeNu+g6C5MA==';
modifiedHeaders['User-Agent'] = 'bili-universal/70000100 os/ios model/iPhone 11 mobi_app/iphone osVer/15.3.1 network/2';

$done({headers : modifiedHeaders});
