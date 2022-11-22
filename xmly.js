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
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))mobile-play.+$

[mitm]
hostname = *xima*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie']='1&_device=iPhone&216339F3-D51F-42B3-84A3-0C57B7C4047F&9.0.44;1&_token=447520149&F3629910140C8FB75C5DE311DEB2A681B93409D595FFA768D059DCE5DFCF67CB0718E4A80828163M63F4C778B745E15_;iPhone%2011'; 
modifiedHeaders['User-Agent']='ting_v9.0.44_c5(CFNetwork, iOS 15.3.1, iPhone12,1)';

$done({headers : modifiedHeaders});
