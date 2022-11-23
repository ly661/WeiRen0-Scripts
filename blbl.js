/*
脚本功能：哔哩哔哩 会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：https://t.me/+tOQEwAEP0B81YzVl
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*
