/****************************************

脚本功能：樊登读书 樊登讲书+非凡精读+李蕾阅读+付费课程
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-15
问题反馈：QQ+
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[mitm]

hostname = *dushu*


[rewrite_local]

^http[s]?:\/\/.+dushu.+(v101|v100|program\/v100)\/(content|play\/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType|share).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/FD.js
http[s]?:\/\/.+dushu.+(v101\/content|book\/v100\/info|\/play\/duration|\/v100\/index|lilei-talk-orch\/program\/v100\/info).*$ url request-body "token":"[^"]+ request-body "token":"202302150q5GBDQRbsKl0noTkH5

***************************************/

/*20230215晚
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', jscqy = '__0xf5358',  __0xf5358=['wpzChAITw6o=','wpfCjUbDnmY=','B8Kdw6FZwqM=','EsOvSQ==','wqFfdMKvw4s=','EMOOw5pww5c=','wpXCmMOmP8K4','dcObTsKt','N8OmwqTDlg==','Flxtw6c=','TQpIacKFwoY=','AMOyfiXDkA==','PAov','w4/CgcKfwrTDjg==','wprCkyMGw6o=','wohEccK2w7U=','wqxTTMKZw5gvwpnCncOtDn0Lw7PCk8K/AQ==','dnpEw4sGwpRZY0Vtw5PCpD1TSMKdeHIpw7TDtTBywpXDgMKBwpDDrsO9w7Fmw4kZJXBXw4VpwpjDisK7w4luwrLDnRbCk8Kpw6Y7wovCvBnCgcKrUT1Ew7bCrm0n','w77DqcKCcA==','CcKcw5FSwqY=','wrHCnwA/w4c=','ZlrDjw==','MsOkUA==','EMOFwpk=','OcOFw6HCsMO7','VzkQw67Dng==','w4nCrCMiw7E=','M8OUeQLDvg==','IcOzw6vCtk0=','AcORw6/Ckw==','IsKSUsK6wqY=','wrnCpAQTw5I=','wqcaUnPCmw==','DMOEw5fCslQ=','w7QBwoDCm0k=','w6jCiyYww68=','e8KAI8K4','w4bCtMKVwrXCtWo=','worCpwcBw6Q=','FFMnOFY=','awtOV8Ke','OMOudsOOIQ==','w7zCmjgIw4c=','w7nCvSUMw68=','G8Odw5TCr3A=','w5LDssO4w4PDlh9sADk=','RTNywoVFw4o=','wqLCi3jDtEEUwpXCig==','NsKpw4zDhsOSw4MnwprDtcOlw4/Ds8OU','Im1qw6fCvQ==','w4rCoSwnw40=','wpdnTQoz','ZRNXwpRt','SBtAwpZT','MsOqw4d3w5Y=','wrM6RGfCgw==','XsO4dcK4w5I=','wqwSQ8KVUygr','w683GyBRGEk=','QkEtw7rDv8OuIkk2ZH/DpcKwPEDCvkM=','Cg7CqkLCtw==','SxRIb8KS','wplWwprCn8Kz','wpR2BsObw4g=','w7PDosKJcSM=','VAtD','wpXDgj5NwpJBw4vCoFk=','aHwSwpQ=','w5nCtMKUwpk=','w7DDkMKTJcKT','CcOdw4jCqn0=','LUrDiVLCl8KOw48=','eMOtT1Y=','w43CusKIwoTCr3/Cog==','w4vCrcKFwpLCsGfCrl3CkQ==','WMO6RcKjLMKyw5M=','IcOGw71nw7J+QA==','McKKbsK3wrk=','WwtKdcKJwoEe','c8KOMA==','wqlJTMKJw4MqwpM=','wqDCm3TDolI=','XEXDtMKvaMO7MQ==','BEwJD1c=','w4XDs8O4w58=','w6rChCE=','CsOaw4J9w5w=','WjBqwpND','LcKjw4/CisOWwpB0wonCqMOtwpvDocKW','w6jCicKea8OCwrbDnE1WwrU=','w6vCoDQSw6LClMOkwqfCk0jDhcKiNcOAwplww4cqWl7CnsObDMKnwoHDvHFd','wpXCmcOCw53CisOuw4DCr8K7HmlWSsOK','w74GLSHDhjfCsSlDwpTDmVDDlw==','AENedALClsOxwo3DuEVDeEJNw5I6bg==','e8KOLcOow7ssw6/Dt8Kswo3CmGI1','w49yVsKIwp3Dtz5pBn1Rw5DDghY=','w6ALHMOWDGspw4N+w6PCtsKPwrxYw6dlw4FCwozDqX7CtMKnB0w=','wojCrC/ClMOrwpvDtH7DisO9w7nCjmLCoMKPVGTDvcOkBS/DjsKwUyc8AcK3fm0oYkbDgw==','wqYTScKDRAso','wqPCnsObOg==','FsOWw5TCpg==','wpNwFcORw4PCvzpuFg==','Ig/CgX7CmBox','w7vClzkR','wqjCm3jDsEEV','d8OIX8Kp','wpFMYR0=','w6UCwqPCoE7Dvw==','CcOZw5bCqmdTw5XCpFU=','w7bCmCkVw7nDvxs=','ScOfEsO/QT9IwqnDvlbDuA==','wrfCjnrDvkE=','TsO7R8K/IMK1','JsOIw6d1','G05bw7PCvsO3dQ==','SxBWb8KIwooSwrXDvg==','BcOjeig=','ZcOIU8Ktw7U=','w7QNwrvCrg==','RBPCkhM=','FF8cDQ==','w57Cp8KJwpDCsnLCqn7ClsOZJQ==','w6A9GzRKHA==','w4PDvcOow4c=','CsOfw4vCpHtVw5HCjkXDqXQ=','w4jCp8KDwpI=','Xz90wo9Fw5U=','w47DssO4w4PDiDlk','csOVwqBowqluF8KfC8K7HQ==','TFrDtsK1cw==','LwDCkXo=','wrgDQ2fCn2g=','w4rCtMKSwpY=','w77CvzAF','w6g5ATI=','w4bDqsO9w5LDkQRXFzE=','Z8ORw6J7w6tef3bCoXgyQ13DlzULFsOEGgnCgFJwfsKrw79mw7rDiMOjw5ktGBDCqzDCrsOowqQTwpxxwocWw6xUCsK1OcKjAMOow7ISwqvCtERpw5xGCcONUsOqw6Ivd3MdPcOgemjDqMKpQ8KsMsOAw606wrtHQBI=','DGnDqsOF','woXDiThawoxUw4/Cqg==','wqbCh2jkvojkuo8=','GcObVsOqAiYkwqHCp0fCrw==','A8OQw4PCqsOmAAQWXw==','VAMgw6TDgsOTwr0=','wq9IRsKuw4UrwpM=','d8KmwpvDiMK0w4t2wpLCs8Oq','TF7DqMK1acOwPcOHw70=','Qz98woVew7EX','FMOFw4XCog==','BG3Dv8OWAi/Dj3VawoLDkMOE','w6zCniwCw6TDpBjCt2U=','5p296K2q56uK5bWB6KS86Za05ou95YqIwrI=','GMOCUsOi','EsOMw5fCgWZBw5vCqlg=','McOdw6F9w7N1TMKFQw==','OMO6wqXDlsKnw7rCiw==','w57CisKAwo7Dr8Kow4U=','6IeQ5pyK55STw5rkvrPku7zDluWGvui3tOaPtOS+ug/Ch8O+6aGy6YG7OcO2XzTClWQnwo7Cmi3DjANjIVXCpOS4qeWRjeWMteWdgOiviumgrumCg+aZt+aVk8Kj6K6s5YuD6Laq5Y+V776C','Ozkpwq3DvjzDt8KPwpU=','wrHCnxQvw4tdwrE=','VQIww5XDlcOswpjCrFMpVWQ+','VQIww4LDlcOpwqnCsEM=','LsOMw71zw6l6','w4PCoTLCmQ==','GFEcOF3DrhjChcKCw7l/w7nCjA==','GMOFw4LCjMO/CQgU','w7zCrCEB','w4bCusKSwqPCr2PChF3CisOYIjZC','aX0AwrjCh2zDn8Ocwpw=','RTd+wrNOw5sdOg==','dcOiXVg=','w5LDvMK9MMKawoB1w4HCrAk2w7dl','w6PDqMKbRyvCn8OqLsKU','wqvCmsOBPMKGw7E=','aXMHwrTCn3fDiMOL','ecOVTsKYw7Y6IMK0YsKUw4zDrwo=','BFEYL13DqynCmcKS','fsOlT2oawooWDA==','WSVqwolIw5kYOgY=','A8Kaw5RewrA3woo=','KkTDk0A=','PcOxwq/DlMKrw50=','woRlE8OZ','wqzCn2XDlUAE','ccKhwozDk8KJw5h+woDCvw==','PcKWeMK9wrNMw6o=','OQTClXfCgTYy','XknDrsK1ccO+IMOYw5DCozMOM8K5wpTohpnmnrfnl5/DieS+vOS4icOD5YeR6LSt5o+i5L6A776p','XsOnXw==','JMO6wqXDlsK5w5zCg3LDtw==','w7ofwqXCpkzDucK6fcOvVsKswpzDoMKt','54mi5p295Y+v77+sTMON5L2r5a+G5p2g5byL56m077+Q6L+N6K6b5pWd5o+H5oiI5Lqz55uL5bSh5L6E','w4EAwp8=','AcO2w7I=','5Yiv6ZuB54ue5pyn5Y2v772oOirkv4jlrpbmnYzlvI7nqqM=','EMKkw6Vzwp0=','KMODw4PCkmI=','S8OMbcKJw6s=','wosmbXTCug==','worChyA8w5U=','U8OoZlYc','QCh8SMKj','KmgZCX4=','b1MTwrXCgg==','w5DCoQAow5s=','eAnClDBi','Hlh3w6HCs8O6','OcO1wrLDscKqw4w=','TMKnwrzDlcKR','w4nCm8KBwoTDlcKm','woxhCcOfw5nCsA==','LE7DqQ==','w6HDt8OQ','e8KYMQ==','w6vCowU=','w7fDlMOrw7LDhA==','woAXe8KNUQ==','wqhyeA==','EsO2YA==','w7XCg8KcJ8ODw6XChVgRwr3Dlw==','LFzDmeS8vuS5gg==','wqcJWcKWT35hwol5w5rCtsKJwr5ewr1Gw4ZBwpfDnnTCiMKrHlDDsiDDj8Oqwo3CrsKCPMKnSHfCnsOnFMK7KcKew4B/JFXDjA4Xw5sywp/CrcOEccKSwpTDqgLDu8K8BkrDnsK4w6XDl8OxwpsrI8K0woDDvDlWQcKSfMOBw6vDtVbDhkM=','wrs+VcKSaA==','wrU0bETCjg==','w6TClsK/woHCtA==','w6LDmcKgAsKh','J8KIcMKxwr8=','Thk2w6jDlMO7wrLCpV8=','wqDCn2LDtg==','WlLDqsK1dcOyC8OVw63Cqy4=','WQwww6A=','QyJHwpZPw44=','wqscWcKH','d8KmwpvDiMKJw556woM=','PW0bOWA=','w5zCncKWwog=','WsOjSsKkIsKsw6N3JA==','S0nDiMKYRg==','w6zCs8K3wpzChA==','w77CiSLCk8Or','T8OXQsKSNw==','XWppTxM=','FsOPw4JXw7I=','JcO8w6vCs0o=','woDCu0fDtUE=','PcOsw6fCk8O4','DcKkw4hswr4=','CsORw5dxw4s=','ZANswpFg','wq1MMcOow50=','w6QAJRZz','wroVbn/CpA==','X8OoTsK9w58=','w53Cr8Kt','OMOgUw==','dMOITg==','woBDcRkgwr3CoTvDhg==','w4TCpsKMwp7CoX7CrhzCnMOFPH1HFA==','54q45p6W5Y6q77ykwohG5L645a2V5pyo5b+d56q877+W6L2Q6K6r5pSL5o2E5oqt5Lm155qB5bW55LyC','5Yqa6ZqL54q75p+B5Y2M77+Nw5/Cr+S/hOWvtuacv+W8geequw==','BsOMworDtMKW','w73CrcKXwovDiQ==','w6rDq8Orw4HDig==','CVTDr3HCgg==','PEcwG0U=','wqF5YQwR','enHDh11Z','RXPDjG9L'];(function(_0x29ae02,_0x4208fc){var _0x5086ef=function(_0xde9ee5){while(--_0xde9ee5){_0x29ae02['push'](_0x29ae02['shift']());}};var _0x56f4c1=function(){var _0x5c1a72={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x22cfda,_0x1eec62,_0x1699c3,_0x5761c0){_0x5761c0=_0x5761c0||{};var _0x5237fe=_0x1eec62+'='+_0x1699c3;var _0x472702=0x0;for(var _0x472702=0x0,_0xd5ab86=_0x22cfda['length'];_0x472702<_0xd5ab86;_0x472702++){var _0x319a5b=_0x22cfda[_0x472702];_0x5237fe+=';\x20'+_0x319a5b;var _0x41f886=_0x22cfda[_0x319a5b];_0x22cfda['push'](_0x41f886);_0xd5ab86=_0x22cfda['length'];if(_0x41f886!==!![]){_0x5237fe+='='+_0x41f886;}}_0x5761c0['cookie']=_0x5237fe;},'removeCookie':function(){return'dev';},'getCookie':function(_0x11796e,_0x31d977){_0x11796e=_0x11796e||function(_0x2ba7ee){return _0x2ba7ee;};var _0x4e48ba=_0x11796e(new RegExp('(?:^|;\x20)'+_0x31d977['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x29859d=function(_0x51b80b,_0x5a07f7){_0x51b80b(++_0x5a07f7);};_0x29859d(_0x5086ef,_0x4208fc);return _0x4e48ba?decodeURIComponent(_0x4e48ba[0x1]):undefined;}};var _0x16279f=function(){var _0x19d5ac=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x19d5ac['test'](_0x5c1a72['removeCookie']['toString']());};_0x5c1a72['updateCookie']=_0x16279f;var _0x2ea5d0='';var _0x2e4d3d=_0x5c1a72['updateCookie']();if(!_0x2e4d3d){_0x5c1a72['setCookie'](['*'],'counter',0x1);}else if(_0x2e4d3d){_0x2ea5d0=_0x5c1a72['getCookie'](null,'counter');}else{_0x5c1a72['removeCookie']();}};_0x56f4c1();}(__0xf5358,0xfc));var _0x3f4a=function(_0x38676f,_0x3ab2b1){_0x38676f=_0x38676f-0x0;var _0x344135=__0xf5358[_0x38676f];if(_0x3f4a['initialized']===undefined){(function(){var _0x16c915=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x36b788='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x16c915['atob']||(_0x16c915['atob']=function(_0x316824){var _0x48375a=String(_0x316824)['replace'](/=+$/,'');for(var _0x2c2191=0x0,_0xa3ad8a,_0x4c1dda,_0x3d6e42=0x0,_0x2ea3be='';_0x4c1dda=_0x48375a['charAt'](_0x3d6e42++);~_0x4c1dda&&(_0xa3ad8a=_0x2c2191%0x4?_0xa3ad8a*0x40+_0x4c1dda:_0x4c1dda,_0x2c2191++%0x4)?_0x2ea3be+=String['fromCharCode'](0xff&_0xa3ad8a>>(-0x2*_0x2c2191&0x6)):0x0){_0x4c1dda=_0x36b788['indexOf'](_0x4c1dda);}return _0x2ea3be;});}());var _0x195f41=function(_0x4c904d,_0x31c6bb){var _0x4196e2=[],_0x1597ec=0x0,_0x37ad2a,_0x4902ce='',_0x55bdd1='';_0x4c904d=atob(_0x4c904d);for(var _0x3699c4=0x0,_0x2ba696=_0x4c904d['length'];_0x3699c4<_0x2ba696;_0x3699c4++){_0x55bdd1+='%'+('00'+_0x4c904d['charCodeAt'](_0x3699c4)['toString'](0x10))['slice'](-0x2);}_0x4c904d=decodeURIComponent(_0x55bdd1);for(var _0x3422fb=0x0;_0x3422fb<0x100;_0x3422fb++){_0x4196e2[_0x3422fb]=_0x3422fb;}for(_0x3422fb=0x0;_0x3422fb<0x100;_0x3422fb++){_0x1597ec=(_0x1597ec+_0x4196e2[_0x3422fb]+_0x31c6bb['charCodeAt'](_0x3422fb%_0x31c6bb['length']))%0x100;_0x37ad2a=_0x4196e2[_0x3422fb];_0x4196e2[_0x3422fb]=_0x4196e2[_0x1597ec];_0x4196e2[_0x1597ec]=_0x37ad2a;}_0x3422fb=0x0;_0x1597ec=0x0;for(var _0x433a0d=0x0;_0x433a0d<_0x4c904d['length'];_0x433a0d++){_0x3422fb=(_0x3422fb+0x1)%0x100;_0x1597ec=(_0x1597ec+_0x4196e2[_0x3422fb])%0x100;_0x37ad2a=_0x4196e2[_0x3422fb];_0x4196e2[_0x3422fb]=_0x4196e2[_0x1597ec];_0x4196e2[_0x1597ec]=_0x37ad2a;_0x4902ce+=String['fromCharCode'](_0x4c904d['charCodeAt'](_0x433a0d)^_0x4196e2[(_0x4196e2[_0x3422fb]+_0x4196e2[_0x1597ec])%0x100]);}return _0x4902ce;};_0x3f4a['rc4']=_0x195f41;_0x3f4a['data']={};_0x3f4a['initialized']=!![];}var _0x4feaea=_0x3f4a['data'][_0x38676f];if(_0x4feaea===undefined){if(_0x3f4a['once']===undefined){var _0x1470cb=function(_0x36b6f3){this['rc4Bytes']=_0x36b6f3;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1470cb['prototype']['checkState']=function(){var _0x50cf07=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x50cf07['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x1470cb['prototype']['runState']=function(_0x4c6cba){if(!Boolean(~_0x4c6cba)){return _0x4c6cba;}return this['getState'](this['rc4Bytes']);};_0x1470cb['prototype']['getState']=function(_0x11f7d2){for(var _0xe54a9a=0x0,_0xd74402=this['states']['length'];_0xe54a9a<_0xd74402;_0xe54a9a++){this['states']['push'](Math['round'](Math['random']()));_0xd74402=this['states']['length'];}return _0x11f7d2(this['states'][0x0]);};new _0x1470cb(_0x3f4a)['checkState']();_0x3f4a['once']=!![];}_0x344135=_0x3f4a['rc4'](_0x344135,_0x3ab2b1);_0x3f4a['data'][_0x38676f]=_0x344135;}else{_0x344135=_0x4feaea;}return _0x344135;};var _0x44e8fa=function(){var _0x5b5445=!![];return function(_0x57ca91,_0x244939){var _0x5e6350=_0x5b5445?function(){if(_0x244939){var _0x580ecf=_0x244939['apply'](_0x57ca91,arguments);_0x244939=null;return _0x580ecf;}}:function(){};_0x5b5445=![];return _0x5e6350;};}();var _0x4d53b3=_0x44e8fa(this,function(){var _0x4a174f=function(){return'\x64\x65\x76';},_0x2b3ed7=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x35bc5f=function(){var _0x1dcb08=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1dcb08['\x74\x65\x73\x74'](_0x4a174f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4d688c=function(){var _0x4541ae=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4541ae['\x74\x65\x73\x74'](_0x2b3ed7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x9bbed=function(_0x460981){var _0x22320e=~-0x1>>0x1+0xff%0x0;if(_0x460981['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x22320e)){_0x49baf4(_0x460981);}};var _0x49baf4=function(_0x312b72){var _0x481979=~-0x4>>0x1+0xff%0x0;if(_0x312b72['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x481979){_0x9bbed(_0x312b72);}};if(!_0x35bc5f()){if(!_0x4d688c()){_0x9bbed('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x9bbed('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x9bbed('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4d53b3();var _0x1e256b=function(){var _0x41b282=!![];return function(_0x529895,_0x5d12bd){var _0xfe336={'WXKGI':function _0x566c60(_0x156844,_0x17d1e7){return _0x156844===_0x17d1e7;},'GBdfr':_0x3f4a('0x0','(tGw'),'Mwwgz':_0x3f4a('0x1','M6HZ'),'GqHPz':_0x3f4a('0x2','FCxb'),'LyXww':function _0x61ea6b(_0x1e8d8d,_0x478142){return _0x1e8d8d!==_0x478142;},'TTtpW':_0x3f4a('0x3','h!rM'),'JgFAh':function _0x566102(_0x3d2423,_0x85924e){return _0x3d2423===_0x85924e;},'ueMsz':_0x3f4a('0x4','(tGw'),'DurYY':function _0xbc506d(_0x24542a,_0x3d88d6){return _0x24542a+_0x3d88d6;},'SsPIS':_0x3f4a('0x5','Dchj'),'miQbk':_0x3f4a('0x6','XzQ)')};if(_0xfe336[_0x3f4a('0x7','!l23')](_0xfe336[_0x3f4a('0x8','XzQ)')],_0xfe336[_0x3f4a('0x9','G1M[')])){c='al';try{c+=_0xfe336[_0x3f4a('0xa','mB3G')];b=encode_version;if(!(_0xfe336[_0x3f4a('0xb','7Nzo')](typeof b,_0xfe336[_0x3f4a('0xc','h!rM')])&&_0xfe336[_0x3f4a('0xd','GtZZ')](b,_0xfe336[_0x3f4a('0xe','GtZZ')]))){w[c](_0xfe336[_0x3f4a('0xf','ysJB')]('删除',_0xfe336[_0x3f4a('0x10','19ZP')]));}}catch(_0x32c498){w[c](_0xfe336[_0x3f4a('0x11','aYUj')]);}}else{var _0x3752d3=_0x41b282?function(){var _0x524726={'kyVUg':function _0x58b298(_0x3aea70,_0x2988a2){return _0x3aea70!==_0x2988a2;},'RgIdJ':_0x3f4a('0x12','M6HZ')};if(_0x5d12bd){if(_0x524726[_0x3f4a('0x13','KAoD')](_0x524726[_0x3f4a('0x14','^1F8')],_0x524726[_0x3f4a('0x15',']B9&')])){_0x55a224[_0x3f4a('0x16','FCxb')][_0x3f2e57][_0x3f4a('0x17','!l23')]=!![];_0x55a224[_0x3f4a('0x18','IiVZ')][_0x3f2e57][_0x3f4a('0x19','Yd[A')]=!![];}else{var _0x449070=_0x5d12bd[_0x3f4a('0x1a','P@TR')](_0x529895,arguments);_0x5d12bd=null;return _0x449070;}}}:function(){var _0x50f0b6={'unlYu':function _0x41f089(_0x251f36,_0x109173){return _0x251f36!==_0x109173;},'BbSLY':_0x3f4a('0x1b','SY9F')};if(_0x50f0b6[_0x3f4a('0x1c','XzQ)')](_0x50f0b6[_0x3f4a('0x1d','ysJB')],_0x50f0b6[_0x3f4a('0x1e','KAoD')])){debugger;}else{}};_0x41b282=![];return _0x3752d3;}};}();(function(){var _0x29c7b1={'jTTod':_0x3f4a('0x1f','KAoD'),'VZnRp':_0x3f4a('0x20','8A0q'),'RVwKW':function _0x31eff0(_0x2b0037,_0xa332a3){return _0x2b0037(_0xa332a3);},'TGwQs':_0x3f4a('0x21','H1Io'),'vjNbm':function _0x249853(_0x7276c5,_0x28f269){return _0x7276c5+_0x28f269;},'aUtYa':_0x3f4a('0x22','aYUj'),'ypKUj':_0x3f4a('0x23','ysJB'),'dmOTd':function _0x8d2af8(_0x42b515,_0x216489){return _0x42b515!==_0x216489;},'pFsPy':_0x3f4a('0x24','a$FO'),'SojQx':_0x3f4a('0x25','M6HZ'),'DMPMQ':_0x3f4a('0x26','!l23'),'cluxF':function _0x98d973(_0x32a7e3){return _0x32a7e3();},'IaPss':function _0x3a19df(_0x5b5ab2,_0x1019eb,_0x1a3549){return _0x5b5ab2(_0x1019eb,_0x1a3549);}};_0x29c7b1[_0x3f4a('0x27','pB[6')](_0x1e256b,this,function(){var _0x1c3a59=new RegExp(_0x29c7b1[_0x3f4a('0x28','BPJ3')]);var _0x1de07b=new RegExp(_0x29c7b1[_0x3f4a('0x29','f5kt')],'i');var _0x299ef1=_0x29c7b1[_0x3f4a('0x2a','P@TR')](_0x10469f,_0x29c7b1[_0x3f4a('0x2b','QYem')]);if(!_0x1c3a59[_0x3f4a('0x2c','QYem')](_0x29c7b1[_0x3f4a('0x2d','EU0n')](_0x299ef1,_0x29c7b1[_0x3f4a('0x2e','ysJB')]))||!_0x1de07b[_0x3f4a('0x2c','QYem')](_0x29c7b1[_0x3f4a('0x2f','CwQd')](_0x299ef1,_0x29c7b1[_0x3f4a('0x30','QYem')]))){if(_0x29c7b1[_0x3f4a('0x31','*#(O')](_0x29c7b1[_0x3f4a('0x32','KuAx')],_0x29c7b1[_0x3f4a('0x32','KuAx')])){_0x55a224[_0x3f4a('0x33','W&9f')][_0x3f2e57][_0x3f4a('0x34','(tGw')]=0x1;}else{_0x29c7b1[_0x3f4a('0x35','ysJB')](_0x299ef1,'0');}}else{if(_0x29c7b1[_0x3f4a('0x36','7Nzo')](_0x29c7b1[_0x3f4a('0x37','Yd[A')],_0x29c7b1[_0x3f4a('0x38','M6HZ')])){_0x29c7b1[_0x3f4a('0x39','f5kt')](_0x10469f);}else{var _0x6a8ab2=fn[_0x3f4a('0x3a','KuAx')](context,arguments);fn=null;return _0x6a8ab2;}}})();}());var _0x9f7183=function(){var _0x26fc3e=!![];return function(_0x2fb33b,_0x4c8b9d){var _0x4d032a=_0x26fc3e?function(){if(_0x4c8b9d){var _0x18a900=_0x4c8b9d[_0x3f4a('0x3b','6RX7')](_0x2fb33b,arguments);_0x4c8b9d=null;return _0x18a900;}}:function(){};_0x26fc3e=![];return _0x4d032a;};}();var _0x563773=_0x9f7183(this,function(){var _0x155e80={'PPsaz':function _0x319de4(_0x26a462,_0x24d96f){return _0x26a462!==_0x24d96f;},'UWaWL':_0x3f4a('0x3c','G1M['),'bJXvu':function _0x5ef116(_0x6e3400,_0x2b3785){return _0x6e3400===_0x2b3785;},'OBOtK':_0x3f4a('0x3d','8A0q'),'pCTcK':_0x3f4a('0x3e','19ZP'),'JCZAf':_0x3f4a('0x3f','U)Cc')};var _0x4aa00f=function(){};var _0x38d4b8=_0x155e80[_0x3f4a('0x40','IiVZ')](typeof window,_0x155e80[_0x3f4a('0x41','f5kt')])?window:_0x155e80[_0x3f4a('0x42','h!rM')](typeof process,_0x155e80[_0x3f4a('0x43','8A0q')])&&_0x155e80[_0x3f4a('0x44','8A0q')](typeof require,_0x155e80[_0x3f4a('0x45','^1F8')])&&_0x155e80[_0x3f4a('0x46','CwQd')](typeof global,_0x155e80[_0x3f4a('0x47','FCxb')])?global:this;if(!_0x38d4b8[_0x3f4a('0x48','JXXD')]){_0x38d4b8[_0x3f4a('0x49','FrA0')]=function(_0x590bd5){var _0x2b150c={'AoOYW':_0x3f4a('0x4a','IiVZ')};var _0x48a010=_0x2b150c[_0x3f4a('0x4b','7GP8')][_0x3f4a('0x4c','Yd[A')]('|'),_0x37ecb0=0x0;while(!![]){switch(_0x48a010[_0x37ecb0++]){case'0':var _0x24fe66={};continue;case'1':_0x24fe66[_0x3f4a('0x4d','y@$T')]=_0x590bd5;continue;case'2':_0x24fe66[_0x3f4a('0x4e','&0XQ')]=_0x590bd5;continue;case'3':_0x24fe66[_0x3f4a('0x4f','H1Io')]=_0x590bd5;continue;case'4':_0x24fe66[_0x3f4a('0x50','Yd[A')]=_0x590bd5;continue;case'5':_0x24fe66[_0x3f4a('0x51','Dchj')]=_0x590bd5;continue;case'6':return _0x24fe66;case'7':_0x24fe66[_0x3f4a('0x52','spnY')]=_0x590bd5;continue;case'8':_0x24fe66[_0x3f4a('0x53','(tGw')]=_0x590bd5;continue;}break;}}(_0x4aa00f);}else{var _0x313610=_0x155e80[_0x3f4a('0x54','TO7T')][_0x3f4a('0x55','6RX7')]('|'),_0x1150f8=0x0;while(!![]){switch(_0x313610[_0x1150f8++]){case'0':_0x38d4b8[_0x3f4a('0x56','mB3G')][_0x3f4a('0x57','1Vw&')]=_0x4aa00f;continue;case'1':_0x38d4b8[_0x3f4a('0x58','(tGw')][_0x3f4a('0x59','(tGw')]=_0x4aa00f;continue;case'2':_0x38d4b8[_0x3f4a('0x5a','wNy&')][_0x3f4a('0x53','(tGw')]=_0x4aa00f;continue;case'3':_0x38d4b8[_0x3f4a('0x5b','^1F8')][_0x3f4a('0x5c','EU0n')]=_0x4aa00f;continue;case'4':_0x38d4b8[_0x3f4a('0x5d','Yd[A')][_0x3f4a('0x5e','W&9f')]=_0x4aa00f;continue;case'5':_0x38d4b8[_0x3f4a('0x5f','KAoD')][_0x3f4a('0x60','19ZP')]=_0x4aa00f;continue;case'6':_0x38d4b8[_0x3f4a('0x61','a$FO')][_0x3f4a('0x62','7Nzo')]=_0x4aa00f;continue;}break;}}});_0x563773();var _0x474543=$response[_0x3f4a('0x63','G1M[')];var _0x541618=$request[_0x3f4a('0x64','f5kt')];setInterval(function(){var _0x395667={'HsQiA':function _0x292378(_0x3d16b1){return _0x3d16b1();}};_0x395667[_0x3f4a('0x65','^1F8')](_0x10469f);},0xfa0);var _0x55a224=JSON[_0x3f4a('0x66','8A0q')](_0x474543);const _0x2cb3c7=_0x3f4a('0x67','U)Cc');const _0x2688ad=_0x3f4a('0x68',']B9&');const _0x1b3fe0=_0x3f4a('0x69','KuAx');const _0x4fef0b=_0x3f4a('0x6a','XzQ)');const _0x189212=_0x3f4a('0x6b','CwQd');const _0x2ae132=_0x3f4a('0x6c','zAj)');const _0x2a5aa6=_0x3f4a('0x6d','EU0n');const _0x4228be=_0x3f4a('0x6e','&0XQ');const _0x3c5394=_0x3f4a('0x6f','JXXD');const _0x22c97e=_0x3f4a('0x70','GTPL');if(_0x541618[_0x3f4a('0x71','JXXD')](_0x2cb3c7)!=-0x1){_0x55a224[_0x3f4a('0x72',']B9&')][_0x3f4a('0x73','pB[6')]=!![];_0x474543=JSON[_0x3f4a('0x74','&0XQ')](_0x55a224);}if(_0x541618[_0x3f4a('0x75','7GP8')](_0x2688ad)!=-0x1){for(var _0x3f2e57=0x0;_0x3f2e57<_0x55a224[_0x3f4a('0x76','f5kt')][_0x3f4a('0x77','19ZP')];_0x3f2e57++){_0x55a224[_0x3f4a('0x16','FCxb')][_0x3f2e57][_0x3f4a('0x78','FCxb')]=!![];_0x55a224[_0x3f4a('0x79','h!rM')][_0x3f2e57][_0x3f4a('0x7a','*#(O')]=!![];}_0x474543=JSON[_0x3f4a('0x7b','6RX7')](_0x55a224);}if(_0x541618[_0x3f4a('0x7c','f5kt')](_0x1b3fe0)!=-0x1){var _0x3fd325=_0x3f4a('0x7d','M6HZ')[_0x3f4a('0x7e','19ZP')]('|'),_0x32a216=0x0;while(!![]){switch(_0x3fd325[_0x32a216++]){case'0':_0x55a224[_0x3f4a('0x76','f5kt')][_0x3f4a('0x7f','wNy&')]=!![];continue;case'1':_0x55a224[_0x3f4a('0x80','^1F8')][_0x3f4a('0x81','IiVZ')]=!![];continue;case'2':_0x474543=JSON[_0x3f4a('0x82','Yd[A')](_0x55a224);continue;case'3':_0x55a224[_0x3f4a('0x83','P@TR')][_0x3f4a('0x84','FCxb')]=!![];continue;case'4':_0x55a224[_0x3f4a('0x85','*#(O')][_0x3f4a('0x86','pjJl')]=!![];continue;case'5':for(var _0x426011=0x0;_0x426011<_0x55a224[_0x3f4a('0x87','7Nzo')][_0x3f4a('0x88','(tGw')][_0x3f4a('0x89','FrA0')];_0x426011++){_0x55a224[_0x3f4a('0x8a','G1M[')][_0x3f4a('0x8b','6RX7')][_0x426011][_0x3f4a('0x8c','(tGw')]=!![];_0x55a224[_0x3f4a('0x33','W&9f')][_0x3f4a('0x8b','6RX7')][_0x426011][_0x3f4a('0x8d','8A0q')]=!![];}continue;}break;}}if(_0x541618[_0x3f4a('0x8e','G1M[')](_0x4fef0b)!=-0x1){var _0x3388eb=_0x3f4a('0x8f','^1F8')[_0x3f4a('0x90','a$FO')]('|'),_0x22642f=0x0;while(!![]){switch(_0x3388eb[_0x22642f++]){case'0':_0x55a224[_0x3f4a('0x91','7GP8')][_0x3f4a('0x92','CwQd')]=!![];continue;case'1':_0x55a224[_0x3f4a('0x93','(tGw')][_0x3f4a('0x94','KuAx')]=!![];continue;case'2':_0x55a224[_0x3f4a('0x95','FrA0')][_0x3f4a('0x96','G1M[')]=_0x3f4a('0x97','QT$2');continue;case'3':_0x55a224[_0x3f4a('0x98','H5zI')][_0x3f4a('0x99','Dchj')]=_0x3f4a('0x9a','19ZP');continue;case'4':_0x55a224[_0x3f4a('0x91','7GP8')][_0x3f4a('0x9b','M6HZ')]=0x1d8d8f773708;continue;case'5':_0x474543=JSON[_0x3f4a('0x9c','pB[6')](_0x55a224);continue;}break;}}if(_0x541618[_0x3f4a('0x9d','BPJ3')](_0x189212)!=-0x1){_0x55a224[_0x3f4a('0x18','IiVZ')][_0x3f4a('0x9e','KAoD')]=0x1d8d8f773708;_0x55a224[_0x3f4a('0x79','h!rM')][_0x3f4a('0x9f','U)Cc')]=0x1;_0x474543=JSON[_0x3f4a('0xa0','a$FO')](_0x55a224);}if(_0x541618[_0x3f4a('0xa1','8A0q')](_0x2ae132)!=-0x1){_0x55a224[_0x3f4a('0xa2','pB[6')][_0x3f4a('0xa3','H5zI')][_0x3f4a('0xa4','f5kt')]=_0x3f4a('0xa5','!l23');_0x55a224[_0x3f4a('0xa6','M6HZ')][_0x3f4a('0xa7','6RX7')]=!![];_0x474543=JSON[_0x3f4a('0xa8','^1F8')](_0x55a224);}if(_0x541618[_0x3f4a('0xa9','!l23')](_0x2a5aa6)!=-0x1){_0x55a224[_0x3f4a('0xa6','M6HZ')][_0x3f4a('0xaa','XzQ)')]=_0x3f4a('0xab','KAoD');_0x474543=JSON[_0x3f4a('0xac','SY9F')](_0x55a224);}if(_0x541618[_0x3f4a('0xad','ysJB')](_0x4228be)!=-0x1){for(var _0x3f2e57=0x0;_0x3f2e57<_0x55a224[_0x3f4a('0x85','*#(O')][_0x3f4a('0xae','BPJ3')][_0x3f4a('0xaf','BPJ3')][_0x3f4a('0xb0','^1F8')];_0x3f2e57++){_0x55a224[_0x3f4a('0xb1','GTPL')][_0x3f4a('0xb2','7Nzo')][_0x3f4a('0xaf','BPJ3')][_0x3f2e57][_0x3f4a('0xb3','pB[6')]=!![];_0x55a224[_0x3f4a('0xb4','KuAx')][_0x3f4a('0xb5','(tGw')][_0x3f4a('0xb6','spnY')][_0x3f2e57][_0x3f4a('0xb7','8A0q')]=!![];}for(var _0x3f2e57=0x0;_0x3f2e57<_0x55a224[_0x3f4a('0xb8','1Vw&')][_0x3f4a('0xb9','TO7T')][_0x3f4a('0xba','H1Io')][_0x3f4a('0xbb',']B9&')];_0x3f2e57++){_0x55a224[_0x3f4a('0x8a','G1M[')][_0x3f4a('0xb2','7Nzo')][_0x3f4a('0xba','H1Io')][_0x3f2e57][_0x3f4a('0xbc','spnY')]=!![];_0x55a224[_0x3f4a('0x76','f5kt')][_0x3f4a('0xbd','FCxb')][_0x3f4a('0xbe','7Nzo')][_0x3f2e57][_0x3f4a('0xbf','1Vw&')]=!![];}_0x474543=JSON[_0x3f4a('0xc0','8A0q')](_0x55a224);}if(_0x541618[_0x3f4a('0xc1','aYUj')](_0x3c5394)!=-0x1){for(var _0x3f2e57=0x0;_0x3f2e57<_0x55a224[_0x3f4a('0xc2','mB3G')][_0x3f4a('0xc3','!l23')];_0x3f2e57++){_0x55a224[_0x3f4a('0xc4','&0XQ')][_0x3f2e57][_0x3f4a('0xc5','19ZP')]=0x1;}_0x474543=JSON[_0x3f4a('0xc6','U)Cc')](_0x55a224);}if(_0x541618[_0x3f4a('0xc7','EU0n')](_0x22c97e)!=-0x1){_0x474543=_0x474543[_0x3f4a('0xc8','7GP8')](/activityText":"[^"]+/g,_0x3f4a('0xc9','a$FO'));}$done({'body':_0x474543});;(function(_0x594906,_0x529859,_0x4430ee){var _0x57cab5={'zPUHU':_0x3f4a('0xca','wNy&'),'RngQk':function _0x1b890f(_0x1c8e94,_0x2f46c8){return _0x1c8e94!==_0x2f46c8;},'ZvWEr':_0x3f4a('0xcb','!l23'),'ZVqeL':function _0x5b9775(_0x362f16,_0x2ce41e){return _0x362f16===_0x2ce41e;},'RvPvf':_0x3f4a('0xcc','*#(O'),'BkOon':function _0x396d38(_0x450c86,_0x396b08){return _0x450c86+_0x396b08;},'xLXNE':_0x3f4a('0xcd','8A0q'),'nAgNj':_0x3f4a('0xce','*#(O'),'HlUHM':_0x3f4a('0xcf','QYem'),'ZhcFs':function _0x5c2c1f(_0x45bcce,_0x180e4b){return _0x45bcce<_0x180e4b;},'NrBov':_0x3f4a('0xd0','QT$2')};_0x4430ee='al';try{_0x4430ee+=_0x57cab5[_0x3f4a('0xd1','aYUj')];_0x529859=encode_version;if(!(_0x57cab5[_0x3f4a('0xd2','6RX7')](typeof _0x529859,_0x57cab5[_0x3f4a('0xd3','FCxb')])&&_0x57cab5[_0x3f4a('0xd4','CwQd')](_0x529859,_0x57cab5[_0x3f4a('0xd5','ysJB')]))){_0x594906[_0x4430ee](_0x57cab5[_0x3f4a('0xd6','1Vw&')]('删除',_0x57cab5[_0x3f4a('0xd7','Yd[A')]));}}catch(_0x3f3320){if(_0x57cab5[_0x3f4a('0xd8','7Nzo')](_0x57cab5[_0x3f4a('0xd9','spnY')],_0x57cab5[_0x3f4a('0xda','KuAx')])){for(var _0x4ad996=0x0;_0x57cab5[_0x3f4a('0xdb','pjJl')](_0x4ad996,_0x55a224[_0x3f4a('0x95','FrA0')][_0x3f4a('0xdc','IiVZ')]);_0x4ad996++){_0x55a224[_0x3f4a('0x16','FCxb')][_0x4ad996][_0x3f4a('0xdd','!l23')]=0x1;}_0x474543=JSON[_0x3f4a('0xac','SY9F')](_0x55a224);}else{_0x594906[_0x4430ee](_0x57cab5[_0x3f4a('0xde','U)Cc')]);}}}(window));function _0x10469f(_0x1c691e){var _0x4678ad={'PHwTt':function _0xec7ca5(_0x5ae2c0,_0x39ca3f){return _0x5ae2c0===_0x39ca3f;},'OjVkm':_0x3f4a('0xdf','XzQ)'),'BfQkD':function _0x3ec8e1(_0xcec789){return _0xcec789();},'YIdke':function _0x505887(_0x474a17,_0x1d79d0){return _0x474a17!==_0x1d79d0;},'tBiBt':function _0x370116(_0x1ec6ff,_0x296834){return _0x1ec6ff+_0x296834;},'rJXNc':function _0x53c847(_0x2bb4f1,_0x20aca5){return _0x2bb4f1/_0x20aca5;},'TfQCo':_0x3f4a('0xe0','&0XQ'),'DEQbt':function _0x238b8f(_0x54b4a2,_0x317c1e){return _0x54b4a2%_0x317c1e;},'MHVPp':function _0x3edb81(_0x401b3d,_0x4824d4){return _0x401b3d===_0x4824d4;},'gPxWv':_0x3f4a('0xe1','mB3G'),'HxDeV':_0x3f4a('0xe2','G1M['),'NRtqF':function _0x4888b3(_0xcc4e53,_0xa75f11){return _0xcc4e53(_0xa75f11);},'hXPEM':_0x3f4a('0xe3','W&9f'),'kernR':_0x3f4a('0xe4','f5kt')};function _0x14b304(_0xcd323c){if(_0x4678ad[_0x3f4a('0xe5','G1M[')](typeof _0xcd323c,_0x4678ad[_0x3f4a('0xe6','JXXD')])){var _0x2c95aa=function(){var _0x5b914e={'tCxtT':function _0x192883(_0x4f540e,_0x4c450c){return _0x4f540e!==_0x4c450c;},'dDpUx':_0x3f4a('0xe7','KAoD'),'JCYvt':_0x3f4a('0xe8','P@TR'),'XJifT':_0x3f4a('0xe9',']B9&'),'MSsUR':_0x3f4a('0xea','mB3G'),'tcRDA':_0x3f4a('0xeb','JXXD')};if(_0x5b914e[_0x3f4a('0xec','JXXD')](_0x5b914e[_0x3f4a('0xed','CwQd')],_0x5b914e[_0x3f4a('0xee','(tGw')])){while(!![]){}}else{var _0x2c0614=_0x5b914e[_0x3f4a('0xef','TO7T')][_0x3f4a('0xf0','EU0n')]('|'),_0x3fef18=0x0;while(!![]){switch(_0x2c0614[_0x3fef18++]){case'0':_0x474543=JSON[_0x3f4a('0xf1','BPJ3')](_0x55a224);continue;case'1':_0x55a224[_0x3f4a('0xf2','19ZP')][_0x3f4a('0xf3','a$FO')]=0x1d8d8f773708;continue;case'2':_0x55a224[_0x3f4a('0xf4','BPJ3')][_0x3f4a('0xf5','8A0q')]=!![];continue;case'3':_0x55a224[_0x3f4a('0xf6','JXXD')][_0x3f4a('0xf7','U)Cc')]=_0x5b914e[_0x3f4a('0xf8','7Nzo')];continue;case'4':_0x55a224[_0x3f4a('0x79','h!rM')][_0x3f4a('0xf9','XzQ)')]=!![];continue;case'5':_0x55a224[_0x3f4a('0x76','f5kt')][_0x3f4a('0xfa','wNy&')]=_0x5b914e[_0x3f4a('0xfb','a$FO')];continue;}break;}}};return _0x4678ad[_0x3f4a('0xfc','(tGw')](_0x2c95aa);}else{if(_0x4678ad[_0x3f4a('0xfd','GTPL')](_0x4678ad[_0x3f4a('0xfe','wNy&')]('',_0x4678ad[_0x3f4a('0xff','zAj)')](_0xcd323c,_0xcd323c))[_0x4678ad[_0x3f4a('0x100','^1F8')]],0x1)||_0x4678ad[_0x3f4a('0x101','QYem')](_0x4678ad[_0x3f4a('0x102','19ZP')](_0xcd323c,0x14),0x0)){debugger;}else{if(_0x4678ad[_0x3f4a('0x103','pB[6')](_0x4678ad[_0x3f4a('0x104','aYUj')],_0x4678ad[_0x3f4a('0x105','^1F8')])){}else{debugger;}}}_0x4678ad[_0x3f4a('0x106','8A0q')](_0x14b304,++_0xcd323c);}try{if(_0x4678ad[_0x3f4a('0x107','&0XQ')](_0x4678ad[_0x3f4a('0x108','FrA0')],_0x4678ad[_0x3f4a('0x109','CwQd')])){return _0x14b304;}else{if(_0x1c691e){return _0x14b304;}else{_0x4678ad[_0x3f4a('0x10a','FCxb')](_0x14b304,0x0);}}}catch(_0x299de4){}};encode_version = 'jsjiami.com.v5';
