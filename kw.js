/*

脚本功能：酷我音乐 已解锁 会员听歌，付费歌曲，听书，动效，音质，下载歌曲以及主题皮肤!!!
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

^http[s]?:\/\/.*kuwo.*(/vip/enc/user/vip|/a.p|/vip/v2/user/vip|/vip/v2/sysinfo|/vip/v2/theme|AdService/kaiping/|/music.pay|player/getStyleListByModel).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/kw.js
[mitm]
hostname = *kuwo*

*/

var body = $response.body;
var url = $request.url;

const p1 = '/vip/enc/user/vip';
const p2 = '/a.p';
const p3 = '/vip/v2/user/vip';
const p4 = '/vip/v2/sysinfo';
const p5 = 'getStyleListByModel';
const p6 = '/vip/v2/theme';
const p7 = '/AdService/kaiping/';
const p8 = '/music.pay?newver=3';


//新版会员
if (url.indexOf(p1) != -1) {
    body =
        $response.body.replace(/.+/, "Cc1O6txfZyzAax8XZpndQsEPZClIw/lKmcVP97nG5zAwzICBFdAtT7Kh5y7EY9TAWzHOnrhqT3OfPm/Ebs2OnM7EPdoh+gBTWFIiNrXZVAQMChJjfDI5ROJb4e8dij1q94yvW1jtsLXNgixzZoGOLhV+KdXyy01Wf5k55vHssEAjUEFSVCOaQ1sU3Lhc+RexYB4G/Kx9KlOwEfLQi+VKY86CwB+ClCo58GZH8L+RieI0ZGDCkPAUcTCKdIYF85EfUZy5inIMV0FWtXz6hsyFGqhe8w5cvjaBoO/H99C1bNdpkeBbNHDG1QbGuYAoIRzpRjug+Fyg16wxJy5LABKr+WdcQJiJ7iNQQVJUI3fOv0QPbWkEWadz8rld9eD3WO8uLcM9gTGPIwcTYPI0anfbaRMWwmeTc7FVTXDBTaT1R2z/zUV2vabAPlWqIlcNnsx9iwJIB4XSCj240WyM786QI1Jer1A8hvon+EfmRXRZOH2kEbdRbglwjs6JO4MIUEMdCtkdcBQS0s2GiVgKI1BBUlQjkEneX2oHVQPVEoZfYWWXIJgVlcD64ImjgmZ8p9DYY6fRlZi6avTIVl/h6d5sw3oTk2F1AwqOUpMQP6CQ6d1aP11QdCJwlFRQhAuZD1o2VHeGo0G0EfQRNZimFlyEKGdkt/ZJxUmzV1ADWe0u7LU9QdmdDfWR36FKFRxrjapR6FUjUEFSVCNVJYVInUldGcP+x2qxiu0ohbtsfw9LCBWP6ddjbLeZRcqXJNvsLu20lK6xTYYwRj1EAVmCPHuPRjg4jMmBd2T8M3xaOMJpRECSO6rcM3ptHHySlURhxxMlJMppe54CWdZeG+vFiM7dMoMpIL+44dSvtk5kn7FJNy3Bj2gLPiiOESNQQVJUI2tssotLp44abpKZxFKva5uGetx4o3ZhfBKhO4u8Qf4NYZl8aWExWtOSL/yR2JiJwfWf1cKPfcbXZUdh2628o1kcPke34WiWMm3iW9Cz7kgRLegd08BW6GAzJvielymoVFd/ruNdw/TVnQBJOKbOsXqS62I3fGMIezV9PJ0i70gtI1BBUlQjLu1Zzx2SYvOrKH1/mO/qgxmVsSj5xnwOZPTVgr+lLQ0x4RMQqPw7L2JtcajdOn9y922w87/WzeL0ekbFV/oWHC9xEbbsU+jesyumW2n69lYVPBc+UttjZdjfGonCENsl4JB/yK/TEVe9hwo5EbabfSSfDnvJuoutJWln7WbuauIjUEFSVCOWvf3xkOz9CcvrP5nZzcQwLR0bpr1vyL2xvL2idh/lFK1amkwRZ7Udb2RCRhQJ+7XnEWFaLHDipoCe48YLdeRy/lK9cJ9DD0AdM8ZtV2ZH4vgMc1h7J7/BbA1F8nFv4LDkK7EEkMYGoD39nhjl+kEjy7nP3wUBVEsT1dUXIDBluA==")
    $done({
        body
    });
}
//酷我听书
if (url.indexOf(p2) != -1) {
    body = body.
    replace(/playright":\d/g, 'playright":1').
    replace(/downright":\d/g, 'downright":1').
    replace(/policytype":\d/g, 'policytype":3');
    $done({
        body
    });
}
//老版本会员修改
if (url.indexOf(p3) != -1) {
    body = body.
    replace(/vipExpire":"\d+/g, 'vipExpire":"32493834549000').
    replace(/vipmExpire":"\d+/g, 'vipmExpire":"32493834549000').
    replace(/vipOverSeasExpire":"\d+/g, 'vipOverSeasExpire":"32493834549000').
    replace(/vipLuxuryExpire":"\d+/g, 'vipLuxuryExpire":"32493834549000').
    replace(/svipExpire":"\d+/g, 'svipExpire":"32493834549000').
    replace(/vip3Expire":"\d+/g, 'vip3Expire":"32493834549000').
    replace(/experienceExpire":"\d+/g, 'experienceExpire":"32493834549000');
    $done({
        body
    });
}

//伴酷播放器&动效

if (url.indexOf(p4) != -1) {
    body = body.
    replace(/feeType":\d/g, 'feeType":0');
    $done({
        body
    });
}
//模式
if (url.indexOf(p5) != -1) {
    body = body.
    replace(/paymentType":\d/g, 'paymentType":0');
    $done({
        body
    });
}

var obj = JSON.parse(body);

//主题皮肤
if (url.indexOf(p6) != -1) {
    obj.data.vipTheme.vipTagNum = 1;
    obj.data.vipTheme.type = "free";
    delete obj.data.needBieds;
    body = JSON.stringify(obj);
}

//开屏广告
if (url.indexOf(p7) != -1) {
    obj = {};
    body = JSON.stringify(obj);
}

//Hi-Res付费歌曲下载
var obj = JSON.parse(body);
if (url.indexOf(p8) != -1) {
    obj = {
        "timestamp": 1659257897,
        "songs": [{
            "id": 330000,
            "artistid": 982,
            "albumid": 13214,
            "isshow": 1,
            "isshowtype": 0,
            "name": "想要弹同调",
            "artist": "凤飞飞",
            "album": "想要弹同调",
            "is_point": 0,
            "muti_ver": 0,
            "hasecho": 1,
            "nsig1": 1685674994,
            "nsig2": 1566652691,
            "mp3rid": 330000,
            "mp3nsig1": 2950181954,
            "mp3nsig2": 2219911288,
            "mkvrid": 135433,
            "mkvnsig1": 3334767160,
            "mkvnsig2": 2025956879,
            "dc_rtimestamp": "2020-06-03 01:39:36",
            "timingonline": 0,
            "pay": 16711935,
            "isstar": 0,
            "fpay": 1,
            "tpay": 1,
            "nationid": "0",
            "opay": "0",
            "overseas_pay": 0,
            "overseas_copyright": "1",
            "content_type": 0,
            "ad_type": "",
            "ad_subtype": "",
            "tme_musician_adtype": "0",
            "pc_formats": "WMA96|WMA128|MP3H|MP3128|AAC48|AAC24|MV500|MP4",
            "phone_formats": "WMA96|WMA128|MP3H|MP3128|AAC48|AAC24|MV500|MP4",
            "mvquality": "MV500|MP4",
            "mvflag": 1,
            "payInfo": {
                "cannotDownload": 0,
                "listen_fragment": "1",
                "tips_intercept": "0",
                "local_encrypt": "1",
                "play": "1111",
                "download": "1111",
                "overseas_nplay": "0",
                "overseas_ndown": "0",
                "nplay": "11111",
                "ndown": "11111",
                "feeType": {
                    "vip": "1",
                    "song": "1",
                    "album": "0",
                    "bookvip": "0"
                },
                "limitfree": "0",
                "refrain_start": "0",
                "refrain_end": "0",
                "cannotOnlinePlay": 0
            },
            "cache_status": "1",
            "spPrivilege": "0",
            "MINFO": "level:p,bitrate:320,format:mp3,size:8.19Mb;level:h,bitrate:128,format:mp3,size:3.26Mb;level:s,bitrate:24,format:aac,size:647.31Kb",
            "N_MINFO": "level:p,bitrate:320,format:mp3,size:8.19Mb;level:h,bitrate:128,format:mp3,size:3.26Mb;level:s,bitrate:24,format:aac,size:647.31Kb",
            "subsStrategy": "0",
            "barrage": "0",
            "subsText": "",
            "overseas_lib": 0,
            "copywriting_id": 202,
            "copywriting_songid": 330000,
            "copywriting": "开通会员畅享VIP歌曲，支持好音乐",
            "audio": [{
                "audioproductid": 496802802,
                "br": 96,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "WMA96",
                "quality": "L",
                "row_fmt": "WMA96",
                "br": 96,
                "st": 103,
                "policy": "song",
                "price": 2.0,
                "pid": "90221639"
            }, {
                "audioproductid": 496802802,
                "br": 96,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "WMA96",
                "quality": "L",
                "row_fmt": "WMA96",
                "br": 96,
                "st": 0,
                "policy": "vip",
                "price": 8.0,
                "cost": 1,
                "pid": "vip_20201230",
                "opid": "90221639",
                "oprice": 2.0
            }, {
                "audioproductid": 496802801,
                "br": 128,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "WMA128",
                "quality": "H",
                "row_fmt": "WMA128",
                "br": 128,
                "st": 103,
                "policy": "song",
                "price": 2.0,
                "pid": "90221639"
            }, {
                "audioproductid": 496802801,
                "br": 128,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "WMA128",
                "quality": "H",
                "row_fmt": "WMA128",
                "br": 128,
                "st": 0,
                "policy": "vip",
                "price": 8.0,
                "cost": 1,
                "pid": "vip_20201230",
                "opid": "90221639",
                "oprice": 2.0
            }, {
                "audioproductid": 496802800,
                "br": 320,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "MP3H",
                "quality": "S",
                "row_fmt": "MP3H",
                "br": 320,
                "st": 103,
                "policy": "song",
                "price": 2.0,
                "pid": "90221639"
            }, {
                "audioproductid": 496802800,
                "br": 320,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "MP3H",
                "quality": "S",
                "row_fmt": "MP3H",
                "br": 320,
                "st": 0,
                "policy": "vip",
                "price": 8.0,
                "cost": 1,
                "pid": "vip_20201230",
                "opid": "90221639",
                "oprice": 2.0
            }, {
                "audioproductid": 496802799,
                "br": 128,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "MP3128",
                "quality": "H",
                "row_fmt": "MP3128",
                "br": 128,
                "st": 103,
                "policy": "song",
                "price": 2.0,
                "pid": "90221639"
            }, {
                "audioproductid": 496802799,
                "br": 128,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "MP3128",
                "quality": "H",
                "row_fmt": "MP3128",
                "br": 128,
                "st": 0,
                "policy": "vip",
                "price": 8.0,
                "cost": 1,
                "pid": "vip_20201230",
                "opid": "90221639",
                "oprice": 2.0
            }, {
                "audioproductid": 496802798,
                "br": 48,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "AAC48",
                "quality": "L",
                "row_fmt": "AAC48",
                "br": 48,
                "st": 103,
                "policy": "song",
                "price": 2.0,
                "pid": "90221639"
            }, {
                "audioproductid": 496802798,
                "br": 48,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "AAC48",
                "quality": "L",
                "row_fmt": "AAC48",
                "br": 48,
                "st": 0,
                "policy": "vip",
                "price": 8.0,
                "cost": 1,
                "pid": "vip_20201230",
                "opid": "90221639",
                "oprice": 2.0
            }, {
                "audioproductid": 496802797,
                "br": 24,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "AAC24",
                "quality": "L",
                "row_fmt": "AAC24",
                "br": 24,
                "st": 103,
                "policy": "song",
                "price": 2.0,
                "pid": "90221639"
            }, {
                "audioproductid": 496802797,
                "br": 24,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 13214,
                "fmt": "AAC24",
                "quality": "L",
                "row_fmt": "AAC24",
                "br": 24,
                "st": 0,
                "policy": "vip",
                "price": 8.0,
                "cost": 1,
                "pid": "vip_20201230",
                "opid": "90221639",
                "oprice": 2.0
            }],
            "policy": [{
                "id": 90221639,
                "type": 0,
                "rid": 330000,
                "audioPlayBR": 1,
                "audioDownBR": 1,
                "videoPlayBR": 0,
                "videoDownBR": 0,
                "policy": "song",
                "rtimestamp": "2020-03-04 00:00:00",
                "price": 2.0
            }, {
                "id": 90221638,
                "type": 0,
                "rid": 330000,
                "audioPlayBR": 1,
                "audioDownBR": 1,
                "videoPlayBR": 0,
                "videoDownBR": 0,
                "policy": "vip",
                "rtimestamp": "2020-03-04 00:00:00",
                "price": 0.0
            }],
            "video": [{
                "br": 0,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 1,
                "quality": "L",
                "row_fmt": "MV500",
                "fmt": "MV500"
            }, {
                "br": 0,
                "avaliable": 1,
                "webavaliable": 1,
                "albumid": 1,
                "quality": "L",
                "row_fmt": "MP4",
                "fmt": "MP4"
            }],
            "formats": "WMA96|WMA128|MP3H|MP3128|AAC48|AAC24|MV500|MP4",
            "isshowtype_car": 0,
            "token": {
                "L": "fbca8a9b17112240a094a5166a16e39b",
                "H": "63f21b7f4c753ebc8bf3611b5a6a747d",
                "S": "636c557c56c2a43fc69dd8696ea6240b",
                "F": "85745ad6bbcc7376ee9a0455dcc5fc18",
                "HR": "0f47c84424c23966570aab5fc74eedf7",
                "DB": "f630a41feaa0355a835d162b6e776b57"
            }
        }],
        "user": [{
            "pid": "vip_20201230",
            "type": "vip",
            "name": "vip_1",
            "categray": "vip_1",
            "id": 1,
            "order": 0,
            "final": ["vip_2"],
            "buy": 1609324026,
            "begin": 1657535226,
            "end": 1711708026,
            "CurEnd": 1660213626,
            "playCnt": 0,
            "playUpper": 3,
            "downCnt": 1,
            "downUpper": 300,
            "playVideoCnt": 0,
            "playVideoUpper": 3000,
            "downVideoCnt": 0,
            "downVideoUpper": 3000,
            "price": 8.0,
            "period": 31,
            "feetype": 0,
            "info": {
                "id": 330000,
                "artistid": 982,
                "albumid": 13214,
                "isshow": 1,
                "isshowtype": 0,
                "name": "想要弹同调",
                "artist": "凤飞飞",
                "album": "想要弹同调",
                "is_point": 0,
                "muti_ver": 0,
                "hasecho": 1,
                "nsig1": 1685674994,
                "nsig2": 1566652691,
                "mp3rid": 330000,
                "mp3nsig1": 2950181954,
                "mp3nsig2": 2219911288,
                "mkvrid": 135433,
                "mkvnsig1": 3334767160,
                "mkvnsig2": 2025956879,
                "dc_rtimestamp": "2020-06-03 01:39:36",
                "timingonline": 0,
                "pay": 16711935,
                "isstar": 0,
                "fpay": 1,
                "tpay": 1,
                "nationid": "0",
                "opay": "0",
                "overseas_pay": 0,
                "overseas_copyright": "1",
                "content_type": 0,
                "ad_type": "",
                "ad_subtype": "",
                "tme_musician_adtype": "0",
                "pc_formats": "WMA96|WMA128|MP3H|MP3128|AAC48|AAC24|MV500|MP4",
                "phone_formats": "WMA96|WMA128|MP3H|MP3128|AAC48|AAC24|MV500|MP4",
                "mvquality": "MV500|MP4",
                "mvflag": 1,
                "payInfo": {
                    "cannotDownload": 0,
                    "listen_fragment": "1",
                    "tips_intercept": "0",
                    "local_encrypt": "1",
                    "play": "1111",
                    "download": "1111",
                    "overseas_nplay": "0",
                    "overseas_ndown": "0",
                    "nplay": "11111",
                    "ndown": "11111",
                    "feeType": {
                        "vip": "1",
                        "song": "1",
                        "album": "0",
                        "bookvip": "0"
                    },
                    "limitfree": "0",
                    "refrain_start": "0",
                    "refrain_end": "0",
                    "cannotOnlinePlay": 0
                },
                "cache_status": "1",
                "spPrivilege": "0",
                "MINFO": "level:p,bitrate:320,format:mp3,size:8.19Mb;level:h,bitrate:128,format:mp3,size:3.26Mb;level:s,bitrate:24,format:aac,size:647.31Kb",
                "N_MINFO": "level:p,bitrate:320,format:mp3,size:8.19Mb;level:h,bitrate:128,format:mp3,size:3.26Mb;level:s,bitrate:24,format:aac,size:647.31Kb",
                "subsStrategy": "0",
                "barrage": "0",
                "subsText": "",
                "overseas_lib": 0,
                "copywriting_id": 202,
                "copywriting_songid": 330000,
                "copywriting": "开通会员畅享VIP歌曲，支持好音乐",
                "audio": [{
                    "audioproductid": 496802802,
                    "br": 96,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "WMA96",
                    "quality": "L",
                    "row_fmt": "WMA96",
                    "br": 96,
                    "st": 103,
                    "policy": "song",
                    "price": 2.0,
                    "pid": "90221639"
                }, {
                    "audioproductid": 496802802,
                    "br": 96,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "WMA96",
                    "quality": "L",
                    "row_fmt": "WMA96",
                    "br": 96,
                    "st": 0,
                    "policy": "vip",
                    "price": 8.0,
                    "cost": 1,
                    "pid": "vip_20201230",
                    "opid": "90221639",
                    "oprice": 2.0
                }, {
                    "audioproductid": 496802801,
                    "br": 128,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "WMA128",
                    "quality": "H",
                    "row_fmt": "WMA128",
                    "br": 128,
                    "st": 103,
                    "policy": "song",
                    "price": 2.0,
                    "pid": "90221639"
                }, {
                    "audioproductid": 496802801,
                    "br": 128,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "WMA128",
                    "quality": "H",
                    "row_fmt": "WMA128",
                    "br": 128,
                    "st": 0,
                    "policy": "vip",
                    "price": 8.0,
                    "cost": 1,
                    "pid": "vip_20201230",
                    "opid": "90221639",
                    "oprice": 2.0
                }, {
                    "audioproductid": 496802800,
                    "br": 320,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "MP3H",
                    "quality": "S",
                    "row_fmt": "MP3H",
                    "br": 320,
                    "st": 103,
                    "policy": "song",
                    "price": 2.0,
                    "pid": "90221639"
                }, {
                    "audioproductid": 496802800,
                    "br": 320,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "MP3H",
                    "quality": "S",
                    "row_fmt": "MP3H",
                    "br": 320,
                    "st": 0,
                    "policy": "vip",
                    "price": 8.0,
                    "cost": 1,
                    "pid": "vip_20201230",
                    "opid": "90221639",
                    "oprice": 2.0
                }, {
                    "audioproductid": 496802799,
                    "br": 128,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "MP3128",
                    "quality": "H",
                    "row_fmt": "MP3128",
                    "br": 128,
                    "st": 103,
                    "policy": "song",
                    "price": 2.0,
                    "pid": "90221639"
                }, {
                    "audioproductid": 496802799,
                    "br": 128,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "MP3128",
                    "quality": "H",
                    "row_fmt": "MP3128",
                    "br": 128,
                    "st": 0,
                    "policy": "vip",
                    "price": 8.0,
                    "cost": 1,
                    "pid": "vip_20201230",
                    "opid": "90221639",
                    "oprice": 2.0
                }, {
                    "audioproductid": 496802798,
                    "br": 48,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "AAC48",
                    "quality": "L",
                    "row_fmt": "AAC48",
                    "br": 48,
                    "st": 103,
                    "policy": "song",
                    "price": 2.0,
                    "pid": "90221639"
                }, {
                    "audioproductid": 496802798,
                    "br": 48,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "AAC48",
                    "quality": "L",
                    "row_fmt": "AAC48",
                    "br": 48,
                    "st": 0,
                    "policy": "vip",
                    "price": 8.0,
                    "cost": 1,
                    "pid": "vip_20201230",
                    "opid": "90221639",
                    "oprice": 2.0
                }, {
                    "audioproductid": 496802797,
                    "br": 24,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "AAC24",
                    "quality": "L",
                    "row_fmt": "AAC24",
                    "br": 24,
                    "st": 103,
                    "policy": "song",
                    "price": 2.0,
                    "pid": "90221639"
                }, {
                    "audioproductid": 496802797,
                    "br": 24,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 13214,
                    "fmt": "AAC24",
                    "quality": "L",
                    "row_fmt": "AAC24",
                    "br": 24,
                    "st": 0,
                    "policy": "vip",
                    "price": 8.0,
                    "cost": 1,
                    "pid": "vip_20201230",
                    "opid": "90221639",
                    "oprice": 2.0
                }],
                "policy": [{
                    "id": 90221639,
                    "type": 0,
                    "rid": 330000,
                    "audioPlayBR": 1,
                    "audioDownBR": 1,
                    "videoPlayBR": 0,
                    "videoDownBR": 0,
                    "policy": "song",
                    "rtimestamp": "2020-03-04 00:00:00",
                    "price": 2.0
                }, {
                    "id": 90221638,
                    "type": 0,
                    "rid": 330000,
                    "audioPlayBR": 1,
                    "audioDownBR": 1,
                    "videoPlayBR": 0,
                    "videoDownBR": 0,
                    "policy": "vip",
                    "rtimestamp": "2020-03-04 00:00:00",
                    "price": 0.0
                }],
                "video": [{
                    "br": 0,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 1,
                    "quality": "L",
                    "row_fmt": "MV500",
                    "fmt": "MV500"
                }, {
                    "br": 0,
                    "avaliable": 1,
                    "webavaliable": 1,
                    "albumid": 1,
                    "quality": "L",
                    "row_fmt": "MP4",
                    "fmt": "MP4"
                }],
                "formats": "WMA96|WMA128|MP3H|MP3128|AAC48|AAC24|MV500|MP4",
                "isshowtype_car": 0,
                "token": {
                    "L": "fbca8a9b17112240a094a5166a16e39b",
                    "H": "63f21b7f4c753ebc8bf3611b5a6a747d",
                    "S": "636c557c56c2a43fc69dd8696ea6240b",
                    "F": "85745ad6bbcc7376ee9a0455dcc5fc18",
                    "HR": "0f47c84424c23966570aab5fc74eedf7",
                    "DB": "f630a41feaa0355a835d162b6e776b57"
                }
            }
        }],
        "result": "ok"
    };
    body = JSON.stringify(obj);
}

$done({
    body
});
