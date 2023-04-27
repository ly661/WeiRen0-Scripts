/*
[rewrite_local]

^http[s]?:\/\/api\.qbkzhibo\.com\/api\/(member\/login|message\/isBanPM).*$ url response-body "errcode":\d+ response-body "errcode":0

[mitm]
hostname = api.qbkzhibo.com

*/
