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

*/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', juydb = '__0xf03b7',  __0xf03b7=['w5xrJDtRw5U=','w7BfwoDDoD44N8KiVD4rw4rDggvClsKhIB/CuHDDs8KLwqpDwphkw57CqcOkCGnDtHnCmMKAwqQ7PgRJTy/DhgXCk8Oew5oeD8OyRsKzw6bDs0bDpcO1w6NzDQrCmMKOw5o3w6zDgyjDmcKMwpvDvGXCgTxiDsOHdMO8ekM5wq/DmcKRYDseN8Kzw7kxw4o/JF/DrSTDpR1cN8KYb1HDugrDiR/DoBJqGG1UwqjDuyFGw67ClsKmfDlew7fDpsObXD/CklLDtWjCqsOUScK9w7VEV8KiBMOgO33CvTUrC8OwTcKjwrxYworCvnfDo8Kaw7bCm8KUBcK/w5HCgMKlwrogIxN5HD4bfMOnR03Cl8OOwphWwqjCjxkNwppTw5YbE1vCrMKzakspw7vCoyAFM8OHW8OldBE/MMOkw6ktwqI6w7hcPGR+w6Yjf1JgGsOPw7PClT5BwpTCgcK9wrPDkjV9GwnDgMKbw4bCuFYmFMOvbsOnVcK+w7wMw4YzCjA6w6PCuH9AXcKXfCcvBcK8wo7DqHQUVcObw47CpRMDB0LDs8Onwp3DrcOyw5rDj0h6w6DDpMOQSBLDhsO9wrIhw5FMP3PDjgTCnDFs','wq4QZELDuGrCvsKuwo3DvMKqGjk=','acKbwojClsOaw71zw7jDlsOjWMK0w5ZiwqfCm8KVw4DDqsOVw4zDqV8KHz42w44Qd8KtZGE5IMKzw7XCm8K/wopmw41geA==','eMOSwo/CkcOCw704w6XDrMOjAMO3woF3w7HDg8Ke','wps9F8O9wqfCu0VRwqEd','SsKPXDLCuMKJwpc6wq8=','UsOEOULCqMOGw4TDlMO7G8OFamgX','ZHgw','D33CoCPDlA==','bsOdw6rCnE8=','54m35p+N5Y+P772bwrTCk+S/o+WvheaflOW8kOeoqe+8sui8iuivhuaWvuaNneaKguS5keeakeW2peS/gQ==','BH/CozLDtMK7Rw=='];(function(_0x449dbc,_0x515012){var _0x7f5d4=function(_0x276ed8){while(--_0x276ed8){_0x449dbc['push'](_0x449dbc['shift']());}};_0x7f5d4(++_0x515012);}(__0xf03b7,0x8e));var _0x4e05=function(_0x3e63d5,_0x17f8f0){_0x3e63d5=_0x3e63d5-0x0;var _0x13dc7e=__0xf03b7[_0x3e63d5];if(_0x4e05['initialized']===undefined){(function(){var _0x72bc1e=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x274843='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x72bc1e['atob']||(_0x72bc1e['atob']=function(_0x3a3b84){var _0x2e8bff=String(_0x3a3b84)['replace'](/=+$/,'');for(var _0x4e903e=0x0,_0x241d25,_0x2c7b9f,_0x3da8ce=0x0,_0x218e2a='';_0x2c7b9f=_0x2e8bff['charAt'](_0x3da8ce++);~_0x2c7b9f&&(_0x241d25=_0x4e903e%0x4?_0x241d25*0x40+_0x2c7b9f:_0x2c7b9f,_0x4e903e++%0x4)?_0x218e2a+=String['fromCharCode'](0xff&_0x241d25>>(-0x2*_0x4e903e&0x6)):0x0){_0x2c7b9f=_0x274843['indexOf'](_0x2c7b9f);}return _0x218e2a;});}());var _0x534923=function(_0x224490,_0x108f25){var _0x4b6420=[],_0x355914=0x0,_0x3a4d45,_0x55bedb='',_0x2d7c47='';_0x224490=atob(_0x224490);for(var _0x3f1635=0x0,_0xfe86df=_0x224490['length'];_0x3f1635<_0xfe86df;_0x3f1635++){_0x2d7c47+='%'+('00'+_0x224490['charCodeAt'](_0x3f1635)['toString'](0x10))['slice'](-0x2);}_0x224490=decodeURIComponent(_0x2d7c47);for(var _0xb6529a=0x0;_0xb6529a<0x100;_0xb6529a++){_0x4b6420[_0xb6529a]=_0xb6529a;}for(_0xb6529a=0x0;_0xb6529a<0x100;_0xb6529a++){_0x355914=(_0x355914+_0x4b6420[_0xb6529a]+_0x108f25['charCodeAt'](_0xb6529a%_0x108f25['length']))%0x100;_0x3a4d45=_0x4b6420[_0xb6529a];_0x4b6420[_0xb6529a]=_0x4b6420[_0x355914];_0x4b6420[_0x355914]=_0x3a4d45;}_0xb6529a=0x0;_0x355914=0x0;for(var _0x29dbea=0x0;_0x29dbea<_0x224490['length'];_0x29dbea++){_0xb6529a=(_0xb6529a+0x1)%0x100;_0x355914=(_0x355914+_0x4b6420[_0xb6529a])%0x100;_0x3a4d45=_0x4b6420[_0xb6529a];_0x4b6420[_0xb6529a]=_0x4b6420[_0x355914];_0x4b6420[_0x355914]=_0x3a4d45;_0x55bedb+=String['fromCharCode'](_0x224490['charCodeAt'](_0x29dbea)^_0x4b6420[(_0x4b6420[_0xb6529a]+_0x4b6420[_0x355914])%0x100]);}return _0x55bedb;};_0x4e05['rc4']=_0x534923;_0x4e05['data']={};_0x4e05['initialized']=!![];}var _0x41243b=_0x4e05['data'][_0x3e63d5];if(_0x41243b===undefined){if(_0x4e05['once']===undefined){_0x4e05['once']=!![];}_0x13dc7e=_0x4e05['rc4'](_0x13dc7e,_0x17f8f0);_0x4e05['data'][_0x3e63d5]=_0x13dc7e;}else{_0x13dc7e=_0x41243b;}return _0x13dc7e;};var modifiedHeaders=$request[_0x4e05('0x0','kDM6')];modifiedHeaders[_0x4e05('0x1','tKKi')]=_0x4e05('0x2','HQFt');modifiedHeaders[_0x4e05('0x3','Mh!8')]=_0x4e05('0x4','1e5k');modifiedHeaders[_0x4e05('0x5','1e5k')]='CAEQ5LuwIRokWUE0Qjc0QUIxNDYxODFCNjQ4RDU5NDAwMDNCNjVGQ0NBQUVBIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIDExUgYxNS4zLjFqBTcuMC4wckAwMTA2RDAyQzNEQThBN0MyNjgxMzQ2Rjk3NjQ2NTBBQjIwMjAwNTE1MDUyMjIyODM5NDlFRTkzRENFRUE0NTNEeNu+g6C5MA==';modifiedHeaders[_0x4e05('0x6','iK(!')]='bili-universal/70000100\x20os/ios\x20model/iPhone\x2011\x20mobi_app/iphone\x20osVer/15.3.1\x20network/2';$notify('我写的是quantumultx的脚本非得乱搞成色鸡什么的脚本，现在好了没得玩了，哔哩哔哩脚本以后不在这里更新了');$done({'headers':modifiedHeaders});;(function(_0x2396f3,_0xf9f623,_0x30991e){var _0x3650b4={'XljMh':function _0x197154(_0x489127,_0x2f73de){return _0x489127!==_0x2f73de;},'cgbuE':_0x4e05('0x7','wloV'),'kecgu':function _0x1dc5d6(_0x4181ab,_0x14e18f){return _0x4181ab===_0x14e18f;},'LzcEn':_0x4e05('0x8','!NxO'),'dfiGP':function _0x1dedda(_0x2dd65d,_0x226b08){return _0x2dd65d+_0x226b08;},'hZBsX':'删除版本号，js会定期弹窗'};_0x30991e='al';try{_0x30991e+=_0x4e05('0x9','R8Xz');_0xf9f623=encode_version;if(!(_0x3650b4['XljMh'](typeof _0xf9f623,_0x3650b4[_0x4e05('0xa','kDM6')])&&_0x3650b4['kecgu'](_0xf9f623,_0x3650b4[_0x4e05('0xb','HSBx')]))){_0x2396f3[_0x30991e](_0x3650b4['dfiGP']('删除',_0x4e05('0xc','wloV')));}}catch(_0x3ed91f){_0x2396f3[_0x30991e](_0x3650b4['hZBsX']);}}(window));;encode_version = 'jsjiami.com.v5';
