
/***************************************

脚本功能：不背单词解锁 词根词缀+柯林斯词典+派生串记
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-01-26
问题反馈：QQ+55749***
作者QQ:55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法
**************************************

[mitm]

hostname = learnywhere*,learn*,cca4app*,*where*,*app.beingfine.cn

[rewrite_local]

^http[s]?:\/\/learnywhere\.cn\/api\/bb\/buy\/(wordroot|collins|wordderive)\/purchase\?sid\= url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/bubei.js
^http[s]?:\/\/learnywhere\.cn\/api\/bb\/buy\/(wordroot|collins|wordderive)\/by-coin url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/bube.js

***************************************/

var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const p1='/wordroot/';const p2='/collins/';const p3='/wordderive/';if(url['indexOf'](p1)!=-(0xc84ef^0xc84ee)){let obj=JSON['parse']($response['body']);obj={'data_kind':'dk','result_code':0xc8,'data_body':{'code':0x0,'tab1':{'title':'词根词缀','count':0x1,'intro':'通过英文词汇的『偏旁部首』速记单词','products':[{'extra':null,'quantity':0x7,'cheaper':null,'disabled':0x0,'price_in_coin':'0\x20酷币','type':'','title':'试用\x207\x20天','code':'bb_wordroot_trail_ios','price':'0','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'quantity':0x5a,'cheaper':null,'disabled':0x0,'price_in_coin':'4800\x20酷币','type':'','title':'3\x20个月','code':'bb_wordroot_3mon_ios','price':'48','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'quantity':0x16d,'cheaper':null,'disabled':0x0,'price_in_coin':'9800\x20酷币','type':'','title':'1\x20年','code':'bb_wordroot_1year_ios','price':'98','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'quantity':-(0xcb785^0xcb784),'cheaper':null,'disabled':0x0,'price_in_coin':'15800\x20酷币','type':'','title':'终身','code':'bb_wordroot_lifetime_ios','price':'158','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'29800\x20酷币','type':'bbvip','title':'大会员','code':'bb_bbvip_ios','price':'0','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'original_price':'¥\x200','selected':0x1}]},'group':'B','bbvip_upgrade':{'purchased':0x0,'price':'298','countdown':0x3c,'limited':0x0,'in_duration':0x1,'plan':0x0,'spend':0x0,'begin_time':'2021-03-23\x2020:58:00','bbvip_abplan':'B'},'tab2':{'title':'真题词组词书','count':0x0,'products':[{'extra':null,'book_codes':['CET4ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET4ZTHXCZ','title':'四级\x20\x20真题核心词组','code':'bb_wordbook_CET4ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET4ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET4ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET4ZTTZCZ','title':'四级\x20\x20真题拓展词组','code':'bb_wordbook_CET4ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET4ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET6ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET6ZTHXCZ','title':'六级\x20\x20真题核心词组','code':'bb_wordbook_CET6ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET6ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET6ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET6ZTTZCZ','title':'六级\x20\x20真题拓展词组','code':'bb_wordbook_CET6ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET6ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['KYZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'KYZTHXCZ','title':'考研\x20\x20真题核心词组','code':'bb_wordbook_KYZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'KYZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['KYZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'KYZTTZCZ','title':'考研\x20\x20真题拓展词组','code':'bb_wordbook_KYZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'KYZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO4ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO4ZTHXCZ','title':'专四\x20\x20备考核心词组','code':'bb_wordbook_PRO4ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO4ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO4ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO4ZTTZCZ','title':'专四\x20\x20备考拓展词组','code':'bb_wordbook_PRO4ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO4ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO8ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO8ZTHXCZ','title':'专八\x20\x20备考核心词组','code':'bb_wordbook_PRO8ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO8ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO8ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO8ZTTZCZ','title':'专八\x20\x20备考拓展词组','code':'bb_wordbook_PRO8ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO8ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZSBZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'ZSBZTHXCZ','title':'专升本\x20\x20真题核心词组','code':'bb_wordbook_ZSBZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZSBZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZSBZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'ZSBZTTZCZ','title':'专升本\x20\x20真题拓展词组','code':'bb_wordbook_ZSBZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZSBZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['TOEFLHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'TOEFLHXCZ','title':'托福\x20\x20真题核心词组','code':'bb_wordbook_TOEFLHXCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'TOEFLHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['TOEFLTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'TOEFLTZCZ','title':'托福\x20\x20真题拓展词组','code':'bb_wordbook_TOEFLTZCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'TOEFLTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['IELTSHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'IELTSHXCZ','title':'雅思\x20\x20真题核心词组','code':'bb_wordbook_IELTSHXCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'IELTSHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['IELTSTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'IELTSTZCZ','title':'雅思\x20\x20真题拓展词组','code':'bb_wordbook_IELTSTZCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'IELTSTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZKZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'ZKZTHXCZ','title':'中考\x20\x20真题核心词组','code':'bb_wordbook_ZKZTHXCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZKZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZKZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'ZKZTTZCZ','title':'中考\x20\x20真题拓展词组','code':'bb_wordbook_ZKZTTZCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZKZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['GKZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'GKZTHXCZ','title':'高考\x20\x20真题核心词组','code':'bb_wordbook_GKZTHXCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'GKZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['GKZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'GKZTTZCZ','title':'高考\x20\x20真题拓展词组','code':'bb_wordbook_GKZTTZCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'GKZTTZCZ','original_price':'¥\x200','selected':0x0}]},'purchase':{'coin_value':0.68,'coin_shortage':0x7424,'extra':null,'original_product_in_coin':null,'product_count':0x1,'purchase_price_in_coin':0x7424,'current_price_in_coin':0x7468,'coupon_name':null,'original_products':null,'coupon_id':null,'original_product':null,'product_codes':['bb_bbvip_ios'],'coin_consumption':0x44,'original_price_in_coin':0x7468,'coupon_price_in_coin':0x0,'purchase_price':297.32,'bbvip_product':0x1,'deduction_price':0.68,'original_price':0x12a,'current_price':0x12a,'pure_coin_purchase':0x0,'current_save_price':0x0,'current_save_price_in_coin':0x0,'coupon_price':0x0,'coin_available':0x44}},'data_version':'dv'};$done({'body':JSON['stringify'](obj)});}if(url['indexOf'](p2)!=-(0x2806a^0x2806b)){let obj=JSON['parse']($response['body']);obj={'data_kind':'dk','result_code':0xc8,'data_body':{'code':0x0,'tab1':{'title':'柯林斯词典','count':0x1,'intro':'豆瓣评分最高的学习型词典','products':[{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'0\x20酷币','type':'','title':'试用\x207\x20天','code':'bb_collins_trail_ios','price':'0','price_per_day':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'4500\x20酷币','type':'','title':'3\x20个月','code':'bb_collins_3mon_ios','price':'45','price_per_day':'每天\x200.5\x20元','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'6000\x20酷币','type':'','title':'6\x20个月','code':'bb_collins_6mon_ios','price':'60','price_per_day':'每天\x200.33\x20元','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'8500\x20酷币','type':'','title':'1\x20年','code':'bb_collins_1year_ios','price':'85','price_per_day':'每天\x200.23\x20元','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'29800\x20酷币','type':'bbvip','title':'大会员','code':'bb_bbvip_ios','price':'0','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'original_price':'¥\x200','selected':0x1}]},'group':'B','bbvip_upgrade':{'purchased':0x0,'price':'298','countdown':0x3c,'limited':0x0,'in_duration':0x1,'plan':0x0,'spend':0x0,'begin_time':'2021-03-23\x2020:58:00','bbvip_abplan':'B'},'tab2':{'title':'真题词组词书','count':0x0,'products':[{'extra':null,'book_codes':['CET4ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET4ZTHXCZ','title':'四级\x20\x20真题核心词组','code':'bb_wordbook_CET4ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET4ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET4ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET4ZTTZCZ','title':'四级\x20\x20真题拓展词组','code':'bb_wordbook_CET4ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET4ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET6ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET6ZTHXCZ','title':'六级\x20\x20真题核心词组','code':'bb_wordbook_CET6ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET6ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET6ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET6ZTTZCZ','title':'六级\x20\x20真题拓展词组','code':'bb_wordbook_CET6ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET6ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['KYZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'KYZTHXCZ','title':'考研\x20\x20真题核心词组','code':'bb_wordbook_KYZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'KYZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['KYZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'KYZTTZCZ','title':'考研\x20\x20真题拓展词组','code':'bb_wordbook_KYZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'KYZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO4ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO4ZTHXCZ','title':'专四\x20\x20备考核心词组','code':'bb_wordbook_PRO4ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO4ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO4ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO4ZTTZCZ','title':'专四\x20\x20备考拓展词组','code':'bb_wordbook_PRO4ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO4ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO8ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO8ZTHXCZ','title':'专八\x20\x20备考核心词组','code':'bb_wordbook_PRO8ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO8ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO8ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO8ZTTZCZ','title':'专八\x20\x20备考拓展词组','code':'bb_wordbook_PRO8ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO8ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZSBZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'ZSBZTHXCZ','title':'专升本\x20\x20真题核心词组','code':'bb_wordbook_ZSBZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZSBZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZSBZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'ZSBZTTZCZ','title':'专升本\x20\x20真题拓展词组','code':'bb_wordbook_ZSBZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZSBZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['TOEFLHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'TOEFLHXCZ','title':'托福\x20\x20真题核心词组','code':'bb_wordbook_TOEFLHXCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'TOEFLHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['TOEFLTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'TOEFLTZCZ','title':'托福\x20\x20真题拓展词组','code':'bb_wordbook_TOEFLTZCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'TOEFLTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['IELTSHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'IELTSHXCZ','title':'雅思\x20\x20真题核心词组','code':'bb_wordbook_IELTSHXCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'IELTSHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['IELTSTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'IELTSTZCZ','title':'雅思\x20\x20真题拓展词组','code':'bb_wordbook_IELTSTZCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'IELTSTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZKZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'ZKZTHXCZ','title':'中考\x20\x20真题核心词组','code':'bb_wordbook_ZKZTHXCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZKZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZKZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'ZKZTTZCZ','title':'中考\x20\x20真题拓展词组','code':'bb_wordbook_ZKZTTZCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZKZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['GKZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'GKZTHXCZ','title':'高考\x20\x20真题核心词组','code':'bb_wordbook_GKZTHXCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'GKZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['GKZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'GKZTTZCZ','title':'高考\x20\x20真题拓展词组','code':'bb_wordbook_GKZTTZCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'GKZTTZCZ','original_price':'¥\x200','selected':0x0}]},'purchase':{'coin_value':0.68,'coin_shortage':0x7424,'extra':null,'original_product_in_coin':null,'product_count':0x1,'purchase_price_in_coin':0x7424,'current_price_in_coin':0x7468,'coupon_name':null,'original_products':null,'coupon_id':null,'original_product':null,'product_codes':['bb_bbvip_ios'],'coin_consumption':0x44,'original_price_in_coin':0x7468,'coupon_price_in_coin':0x0,'purchase_price':297.32,'bbvip_product':0x1,'deduction_price':0.68,'original_price':0x12a,'current_price':0x12a,'pure_coin_purchase':0x0,'current_save_price':0x0,'current_save_price_in_coin':0x0,'coupon_price':0x0,'coin_available':0x44}},'data_version':'dv'};$done({'body':JSON['stringify'](obj)});}if(url['indexOf'](p3)!=-(0x3a2ef^0x3a2ee)){let obj=JSON['parse']($response['body']);obj={'data_kind':'dk','result_code':0xc8,'data_body':{'code':0x0,'tab1':{'title':'派生串记','count':0x1,'intro':'以熟词记生词，疾速串记常考词汇','products':[{'extra':null,'quantity':0x7,'cheaper':null,'disabled':0x0,'price_in_coin':'0\x20酷币','type':'','title':'试用\x207\x20天','code':'bb_wordderive_trail_ios','price':'0','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'quantity':0x5a,'cheaper':null,'disabled':0x0,'price_in_coin':'4800\x20酷币','type':'','title':'3\x20个月','code':'bb_wordderive_3mon_ios','price':'48','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'quantity':0x16d,'cheaper':null,'disabled':0x0,'price_in_coin':'9800\x20酷币','type':'','title':'1\x20年','code':'bb_wordderive_1year_ios','price':'98','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'quantity':-(0xdfe83^0xdfe82),'cheaper':null,'disabled':0x0,'price_in_coin':'15800\x20酷币','type':'','title':'终身','code':'bb_wordderive_lifetime_ios','price':'158','tip':'','original_price_in_coin':'0\x20酷币','purchased':0x0,'cheaper_in_coin':null,'original_price':'¥\x200','selected':0x0},{'extra':null,'cheaper':null,'disabled':0x0,'price_in_coin':'29800\x20酷币','type':'bbvip','title':'大会员','code':'bb_bbvip_ios','price':'0','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'original_price':'¥\x200','selected':0x1}]},'group':'B','bbvip_upgrade':{'purchased':0x0,'price':'298','countdown':0x3c,'limited':0x0,'in_duration':0x1,'plan':0x0,'spend':0x0,'begin_time':'2021-03-23\x2020:58:00','bbvip_abplan':'B'},'tab2':{'title':'真题词组词书','count':0x0,'products':[{'extra':null,'book_codes':['CET4ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET4ZTHXCZ','title':'四级\x20\x20真题核心词组','code':'bb_wordbook_CET4ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET4ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET4ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET4ZTTZCZ','title':'四级\x20\x20真题拓展词组','code':'bb_wordbook_CET4ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET4ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET6ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET6ZTHXCZ','title':'六级\x20\x20真题核心词组','code':'bb_wordbook_CET6ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET6ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['CET6ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'CET6ZTTZCZ','title':'六级\x20\x20真题拓展词组','code':'bb_wordbook_CET6ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'CET6ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['KYZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'KYZTHXCZ','title':'考研\x20\x20真题核心词组','code':'bb_wordbook_KYZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'KYZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['KYZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'KYZTTZCZ','title':'考研\x20\x20真题拓展词组','code':'bb_wordbook_KYZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'KYZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO4ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO4ZTHXCZ','title':'专四\x20\x20备考核心词组','code':'bb_wordbook_PRO4ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO4ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO4ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO4ZTTZCZ','title':'专四\x20\x20备考拓展词组','code':'bb_wordbook_PRO4ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO4ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO8ZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO8ZTHXCZ','title':'专八\x20\x20备考核心词组','code':'bb_wordbook_PRO8ZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO8ZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['PRO8ZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'PRO8ZTTZCZ','title':'专八\x20\x20备考拓展词组','code':'bb_wordbook_PRO8ZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'PRO8ZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZSBZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'ZSBZTHXCZ','title':'专升本\x20\x20真题核心词组','code':'bb_wordbook_ZSBZTHXCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZSBZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZSBZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3600\x20酷币','type':'ZSBZTTZCZ','title':'专升本\x20\x20真题拓展词组','code':'bb_wordbook_ZSBZTTZCZ_ios','price':'36\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZSBZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['TOEFLHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'TOEFLHXCZ','title':'托福\x20\x20真题核心词组','code':'bb_wordbook_TOEFLHXCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'TOEFLHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['TOEFLTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'TOEFLTZCZ','title':'托福\x20\x20真题拓展词组','code':'bb_wordbook_TOEFLTZCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'TOEFLTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['IELTSHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'IELTSHXCZ','title':'雅思\x20\x20真题核心词组','code':'bb_wordbook_IELTSHXCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'IELTSHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['IELTSTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3800\x20酷币','type':'IELTSTZCZ','title':'雅思\x20\x20真题拓展词组','code':'bb_wordbook_IELTSTZCZ_ios','price':'38\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'IELTSTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZKZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'ZKZTHXCZ','title':'中考\x20\x20真题核心词组','code':'bb_wordbook_ZKZTHXCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZKZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['ZKZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'ZKZTTZCZ','title':'中考\x20\x20真题拓展词组','code':'bb_wordbook_ZKZTTZCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'ZKZTTZCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['GKZTHXCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'GKZTHXCZ','title':'高考\x20\x20真题核心词组','code':'bb_wordbook_GKZTHXCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'GKZTHXCZ','original_price':'¥\x200','selected':0x0},{'extra':null,'book_codes':['GKZTTZCZ'],'cheaper':null,'disabled':0x0,'price_in_coin':'3200\x20酷币','type':'GKZTTZCZ','title':'高考\x20\x20真题拓展词组','code':'bb_wordbook_GKZTTZCZ_ios','price':'32\x20元','original_price_in_coin':'0\x20酷币','cheaper_in_coin':null,'purchased':0x0,'book_code':'GKZTTZCZ','original_price':'¥\x200','selected':0x0}]},'purchase':{'coin_value':1.88,'coin_shortage':0x73ac,'extra':null,'original_product_in_coin':null,'product_count':0x1,'purchase_price_in_coin':0x73ac,'current_price_in_coin':0x7468,'coupon_name':null,'original_products':null,'coupon_id':null,'original_product':null,'product_codes':['bb_bbvip_ios'],'coin_consumption':0xbc,'original_price_in_coin':0x7468,'coupon_price_in_coin':0x0,'purchase_price':296.12,'bbvip_product':0x1,'deduction_price':1.88,'original_price':0x12a,'current_price':0x12a,'pure_coin_purchase':0x0,'current_save_price':0x0,'current_save_price_in_coin':0x0,'coupon_price':0x0,'coin_available':0xbc}},'data_version':'dv'};$done({'body':JSON['stringify'](obj)});}$done({'body':body});
