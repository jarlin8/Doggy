const _0xaa7fd9=_0x6070;(function(_0x38a540,_0x321dd6){const _0x4e5fd8=_0x6070,_0x469fcd=_0x38a540();while(!![]){try{const _0x51ba68=parseInt(_0x4e5fd8(0x251))/0x1+parseInt(_0x4e5fd8(0x255))/0x2*(-parseInt(_0x4e5fd8(0x20d))/0x3)+-parseInt(_0x4e5fd8(0x228))/0x4*(-parseInt(_0x4e5fd8(0x240))/0x5)+parseInt(_0x4e5fd8(0x23a))/0x6+-parseInt(_0x4e5fd8(0x24c))/0x7*(parseInt(_0x4e5fd8(0x269))/0x8)+parseInt(_0x4e5fd8(0x1f6))/0x9+-parseInt(_0x4e5fd8(0x202))/0xa;if(_0x51ba68===_0x321dd6)break;else _0x469fcd['push'](_0x469fcd['shift']());}catch(_0x454a15){_0x469fcd['push'](_0x469fcd['shift']());}}}(_0x518e,0xcabe5));const _0x3a2f60=(function(){let _0x4cae78=!![];return function(_0x20b054,_0x382bd4){const _0x24c4d9=_0x4cae78?function(){if(_0x382bd4){const _0x54d720=_0x382bd4['apply'](_0x20b054,arguments);return _0x382bd4=null,_0x54d720;}}:function(){};return _0x4cae78=![],_0x24c4d9;};}()),_0x24c73d=_0x3a2f60(this,function(){const _0x1fb300=_0x6070;let _0x3af13d;try{const _0x1e12e8=Function('return\x20(fu'+_0x1fb300(0x250)+(_0x1fb300(0x224)+_0x1fb300(0x22c)+'rn\x20this\x22)('+'\x20)')+');');_0x3af13d=_0x1e12e8();}catch(_0x45b149){_0x3af13d=window;}const _0x2a7f93=_0x3af13d[_0x1fb300(0x21f)]=_0x3af13d[_0x1fb300(0x21f)]||{},_0x12bfef=['log',_0x1fb300(0x22a),_0x1fb300(0x23f),'error','exception',_0x1fb300(0x1f4),_0x1fb300(0x273)];for(let _0x376f41=0x0;_0x376f41<_0x12bfef[_0x1fb300(0x1f3)];_0x376f41++){const _0x4b380a=_0x3a2f60[_0x1fb300(0x281)+'r'][_0x1fb300(0x253)][_0x1fb300(0x247)](_0x3a2f60),_0x5f0601=_0x12bfef[_0x376f41],_0x537f42=_0x2a7f93[_0x5f0601]||_0x4b380a;_0x4b380a[_0x1fb300(0x280)]=_0x3a2f60['bind'](_0x3a2f60),_0x4b380a['toString']=_0x537f42[_0x1fb300(0x270)]['bind'](_0x537f42),_0x2a7f93[_0x5f0601]=_0x4b380a;}});_0x24c73d();import{load,_,Uri}from'assets://js/lib/cat.js';import{initAli,detailContent,playContent,detailContentVodPlayFrom,detailContentVodPlayUrl}from'https://fastly.jsdelivr.net/gh/jarlin8/OSS@main/catTV/js/lib/ali.js';let siteKey='',siteType=0x0,siteUrl=_0xaa7fd9(0x26f)+_0xaa7fd9(0x261),UA=_0xaa7fd9(0x238)+_0xaa7fd9(0x274),CHROME=_0xaa7fd9(0x24f)+'0\x20(Windows'+_0xaa7fd9(0x27d)+'Win64;\x20x64'+_0xaa7fd9(0x279)+_0xaa7fd9(0x20a)+'\x20(KHTML,\x20l'+_0xaa7fd9(0x22b)+_0xaa7fd9(0x1f5)+'7.0.0.0\x20Sa'+_0xaa7fd9(0x230)+'6',patternAli=/(https:\/\/www\.aliyundrive\.com\/s\/[^"]+)/g;async function init(_0xdc30ac){const _0x29fd58=_0xaa7fd9;let _0x1e3f6e='';typeof _0xdc30ac==_0x29fd58(0x20b)?(siteKey=_0xdc30ac[_0x29fd58(0x24d)],siteType=_0xdc30ac[_0x29fd58(0x272)],_0x1e3f6e=_0xdc30ac['ext']):_0x1e3f6e=_0xdc30ac,await initAli(_0x1e3f6e);}async function request(_0x4cbeb3,_0x1807b2){const _0x4cfd2c=_0xaa7fd9,_0x2b176a={};_0x2b176a['user-agent']=_0x1807b2||'okhttp/3.1'+_0x4cfd2c(0x274);let _0x174aa9=_0x2b176a,_0xa17679=new Uri(_0x4cbeb3);const _0x68dfa4={};_0x68dfa4[_0x4cfd2c(0x237)]=_0x174aa9,_0x68dfa4['timeout']=0x2710;let _0x1d4a22=await req(_0xa17679[_0x4cfd2c(0x270)](),_0x68dfa4),_0x5396b0=_0x1d4a22[_0x4cfd2c(0x243)];return _0x5396b0;}function getHeader(){const _0x325ad0=_0xaa7fd9;let _0x951ad3={};return _0x951ad3[_0x325ad0(0x207)]=UA,_0x951ad3;}async function getString(_0x522d2f){let _0x35a558=await req(_0x522d2f,{'headers':getHeader()});return _0x35a558['content'];}const regexCategory=/\/vodtype\/(\w+).html/,_0x4d4897={};_0x4d4897['n']='全部',_0x4d4897['v']='';const _0x5dbbde={};_0x5dbbde['n']='喜剧',_0x5dbbde['v']='喜剧';const _0x13417c={};_0x13417c['n']='爱情',_0x13417c['v']='爱情';const _0x457ff6={};_0x457ff6['n']='恐怖',_0x457ff6['v']='恐怖';const _0xcc5303={};_0xcc5303['n']='动作',_0xcc5303['v']='动作';const _0x3c5f79={};_0x3c5f79['n']='科幻',_0x3c5f79['v']='科幻';const _0x42d080={};_0x42d080['n']='剧情',_0x42d080['v']='剧情';const _0x1405c6={};_0x1405c6['n']='战争',_0x1405c6['v']='战争';const _0x1fe09d={};_0x1fe09d['n']='警匪',_0x1fe09d['v']='警匪';const _0x195272={};_0x195272['n']='犯罪',_0x195272['v']='犯罪';const _0x1dc56b={};_0x1dc56b['n']='动画',_0x1dc56b['v']='动画';const _0x2b1b13={};_0x2b1b13['n']='奇幻',_0x2b1b13['v']='奇幻';const _0x524361={};_0x524361['n']='武侠',_0x524361['v']='武侠';const _0x571d38={};_0x571d38['n']='冒险',_0x571d38['v']='冒险';const _0x3c0deb={};_0x3c0deb['n']='枪战',_0x3c0deb['v']='枪战';const _0x57c6c5={};_0x57c6c5['n']='恐怖',_0x57c6c5['v']='恐怖';const _0x210e5c={};_0x210e5c['n']='悬疑',_0x210e5c['v']='悬疑';const _0x5c0733={};_0x5c0733['n']='惊悚',_0x5c0733['v']='惊悚';const _0x513616={};_0x513616['n']='经典',_0x513616['v']='经典';const _0xd7582d={};_0xd7582d['n']='青春',_0xd7582d['v']='青春';const _0x4d15ba={};_0x4d15ba['n']='文艺',_0x4d15ba['v']='文艺';const _0x12d9ff={};_0x12d9ff['n']='古装',_0x12d9ff['v']='古装';const _0x4e8108={};_0x4e8108['n']='历史',_0x4e8108['v']='历史';const _0x44dbca={};_0x44dbca['n']=_0xaa7fd9(0x22d),_0x44dbca['v']=_0xaa7fd9(0x22d);const _0xd44c47={};_0xd44c47[_0xaa7fd9(0x276)]='3',_0xd44c47[_0xaa7fd9(0x20e)]='剧情',_0xd44c47[_0xaa7fd9(0x283)]=[_0x4d4897,_0x5dbbde,_0x13417c,_0x457ff6,_0xcc5303,_0x3c5f79,_0x42d080,_0x1405c6,_0x1fe09d,_0x195272,_0x1dc56b,_0x2b1b13,_0x524361,_0x571d38,_0x3c0deb,_0x57c6c5,_0x210e5c,_0x5c0733,_0x513616,_0xd7582d,_0x4d15ba,_0x12d9ff,_0x4e8108,_0x44dbca],_0xd44c47[_0xaa7fd9(0x277)]='';const _0x1d8c49={};_0x1d8c49['n']='全部',_0x1d8c49['v']='';const _0x2dc64f={};_0x2dc64f['n']='大陆',_0x2dc64f['v']='大陆';const _0xe513c1={};_0xe513c1['n']='香港',_0xe513c1['v']='香港';const _0x5bd391={};_0x5bd391['n']='台湾',_0x5bd391['v']='台湾';const _0x37c0ed={};_0x37c0ed['n']='美国',_0x37c0ed['v']='美国';const _0x411128={};_0x411128['n']='法国',_0x411128['v']='法国';const _0x19a81c={};_0x19a81c['n']='英国',_0x19a81c['v']='英国';const _0x33d381={};_0x33d381['n']='日本',_0x33d381['v']='日本';const _0x306550={};_0x306550['n']='韩国',_0x306550['v']='韩国';const _0x49641a={};_0x49641a['n']='德国',_0x49641a['v']='德国';const _0x433bcc={};_0x433bcc['n']='泰国',_0x433bcc['v']='泰国';const _0x428840={};_0x428840['n']='印度',_0x428840['v']='印度';const _0x113f50={};_0x113f50['n']=_0xaa7fd9(0x1ff),_0x113f50['v']=_0xaa7fd9(0x1ff);const _0x2b29a2={};_0x2b29a2['n']=_0xaa7fd9(0x234),_0x2b29a2['v']=_0xaa7fd9(0x234);const _0x5a1bb8={};_0x5a1bb8['n']='加拿大',_0x5a1bb8['v']='加拿大';const _0x52cffb={};_0x52cffb['n']='其他',_0x52cffb['v']='其他';const _0x16c68b={};_0x16c68b[_0xaa7fd9(0x276)]='1',_0x16c68b['name']='地区',_0x16c68b[_0xaa7fd9(0x283)]=[_0x1d8c49,_0x2dc64f,_0xe513c1,_0x5bd391,_0x37c0ed,_0x411128,_0x19a81c,_0x33d381,_0x306550,_0x49641a,_0x433bcc,_0x428840,_0x113f50,_0x2b29a2,_0x5a1bb8,_0x52cffb],_0x16c68b[_0xaa7fd9(0x277)]='';const _0x52c721={};_0x52c721['n']='全部',_0x52c721['v']='';const _0x368819={};_0x368819['n']=_0xaa7fd9(0x24e),_0x368819['v']=_0xaa7fd9(0x24e);const _0x578f3e={};_0x578f3e['n']=_0xaa7fd9(0x258),_0x578f3e['v']=_0xaa7fd9(0x258);const _0x97d4b7={};_0x97d4b7['n']=_0xaa7fd9(0x246),_0x97d4b7['v']='2021';const _0x28fbc5={};_0x28fbc5['n']=_0xaa7fd9(0x225),_0x28fbc5['v']=_0xaa7fd9(0x225);const _0x30299f={};_0x30299f['n']=_0xaa7fd9(0x205),_0x30299f['v']=_0xaa7fd9(0x205);const _0x175c9f={};_0x175c9f['n']=_0xaa7fd9(0x23e),_0x175c9f['v']=_0xaa7fd9(0x23e);const _0x3031a2={};_0x3031a2['n']='2017',_0x3031a2['v']=_0xaa7fd9(0x256);const _0x6901e9={};_0x6901e9['n']=_0xaa7fd9(0x266),_0x6901e9['v']=_0xaa7fd9(0x266);const _0x5c6d62={};_0x5c6d62['n']=_0xaa7fd9(0x23b),_0x5c6d62['v']=_0xaa7fd9(0x23b);const _0x5bc8f8={};_0x5bc8f8['n']=_0xaa7fd9(0x27c),_0x5bc8f8['v']=_0xaa7fd9(0x27c);const _0x59b967={};_0x59b967['n']='2013',_0x59b967['v']=_0xaa7fd9(0x209);const _0x3f99ed={};_0x3f99ed['n']='2012',_0x3f99ed['v']='2012';const _0x39c88f={};_0x39c88f['n']=_0xaa7fd9(0x259),_0x39c88f['v']=_0xaa7fd9(0x259);const _0x43a3c3={};_0x43a3c3['n']=_0xaa7fd9(0x1fa),_0x43a3c3['v']='2010';const _0x56f122={};_0x56f122[_0xaa7fd9(0x276)]='11',_0x56f122[_0xaa7fd9(0x20e)]='年份',_0x56f122[_0xaa7fd9(0x283)]=[_0x52c721,_0x368819,_0x578f3e,_0x97d4b7,_0x28fbc5,_0x30299f,_0x175c9f,_0x3031a2,_0x6901e9,_0x5c6d62,_0x5bc8f8,_0x59b967,_0x3f99ed,_0x39c88f,_0x43a3c3],_0x56f122[_0xaa7fd9(0x277)]='';const _0x5e0bd4={};_0x5e0bd4['n']='全部',_0x5e0bd4['v']='';const _0x58a4e0={};_0x58a4e0['n']='A',_0x58a4e0['v']='A';const _0x4dea31={};_0x4dea31['n']='B',_0x4dea31['v']='B';const _0x4a13f7={};_0x4a13f7['n']='C',_0x4a13f7['v']='C';const _0x114ecd={};_0x114ecd['n']='D',_0x114ecd['v']='D';const _0x1ebb2e={};_0x1ebb2e['n']='E',_0x1ebb2e['v']='E';const _0x54de2f={};_0x54de2f['n']='F',_0x54de2f['v']='F';const _0x569393={};_0x569393['n']='G',_0x569393['v']='G';const _0x395923={};_0x395923['n']='H',_0x395923['v']='H';const _0x13b9a8={};_0x13b9a8['n']='I',_0x13b9a8['v']='I';const _0x403641={};_0x403641['n']='J',_0x403641['v']='J';const _0x1a5bf1={};_0x1a5bf1['n']='K',_0x1a5bf1['v']='K';const _0x580051={};_0x580051['n']='L',_0x580051['v']='L';const _0x357396={};_0x357396['n']='M',_0x357396['v']='M';const _0xd713e5={};_0xd713e5['n']='N',_0xd713e5['v']='N';const _0x1a55f3={};_0x1a55f3['n']='O',_0x1a55f3['v']='O';const _0x1bc4c9={};_0x1bc4c9['n']='P',_0x1bc4c9['v']='P';const _0x58146e={};_0x58146e['n']='Q',_0x58146e['v']='Q';const _0x26626a={};_0x26626a['n']='R',_0x26626a['v']='R';const _0x395cec={};_0x395cec['n']='S',_0x395cec['v']='S';const _0x2d75d2={};_0x2d75d2['n']='T',_0x2d75d2['v']='T';const _0x540eeb={};_0x540eeb['n']='U',_0x540eeb['v']='U';const _0x251d1b={};_0x251d1b['n']='V',_0x251d1b['v']='V';const _0x563a86={};_0x563a86['n']='W',_0x563a86['v']='W';const _0x144075={};_0x144075['n']='X',_0x144075['v']='X';const _0x20f59b={};_0x20f59b['n']='Y',_0x20f59b['v']='Y';const _0x3a79c1={};_0x3a79c1['n']='Z',_0x3a79c1['v']='Z';const _0x2e6fda={};_0x2e6fda['n']='0-9',_0x2e6fda['v']=_0xaa7fd9(0x24a);const _0x220e8d={};_0x220e8d[_0xaa7fd9(0x276)]='5',_0x220e8d[_0xaa7fd9(0x20e)]='字母',_0x220e8d[_0xaa7fd9(0x283)]=[_0x5e0bd4,_0x58a4e0,_0x4dea31,_0x4a13f7,_0x114ecd,_0x1ebb2e,_0x54de2f,_0x569393,_0x395923,_0x13b9a8,_0x403641,_0x1a5bf1,_0x580051,_0x357396,_0xd713e5,_0x1a55f3,_0x1bc4c9,_0x58146e,_0x26626a,_0x395cec,_0x2d75d2,_0x540eeb,_0x251d1b,_0x563a86,_0x144075,_0x20f59b,_0x3a79c1,_0x2e6fda],_0x220e8d['init']='';const _0x3b14ac={};_0x3b14ac['n']='时间',_0x3b14ac['v']=_0xaa7fd9(0x242);const _0x36c5fd={};_0x36c5fd['n']='人气',_0x36c5fd['v']=_0xaa7fd9(0x263);const _0x1c1f4d={};_0x1c1f4d['n']='评分',_0x1c1f4d['v']=_0xaa7fd9(0x229);const _0x5894b9={};_0x5894b9[_0xaa7fd9(0x276)]='2',_0x5894b9[_0xaa7fd9(0x20e)]='排序',_0x5894b9[_0xaa7fd9(0x283)]=[_0x3b14ac,_0x36c5fd,_0x1c1f4d],_0x5894b9[_0xaa7fd9(0x277)]='time';const _0x35070c={};_0x35070c['n']='全部',_0x35070c['v']='';const _0xeef363={};_0xeef363['n']='大陆',_0xeef363['v']='大陆';const _0x35d20f={};_0x35d20f['n']='香港',_0x35d20f['v']='香港';const _0x57cafe={};_0x57cafe['n']='台湾',_0x57cafe['v']='台湾';const _0x1461f8={};_0x1461f8['n']='美国',_0x1461f8['v']='美国';const _0x31ed69={};_0x31ed69['n']='法国',_0x31ed69['v']='法国';const _0x2e3c9f={};_0x2e3c9f['n']='英国',_0x2e3c9f['v']='英国';const _0x3b48ef={};_0x3b48ef['n']='日本',_0x3b48ef['v']='日本';const _0x3fb42f={};_0x3fb42f['n']='韩国',_0x3fb42f['v']='韩国';const _0x414a27={};function _0x518e(){const _0x3c584c=['em-cover\x20.','.module-ro','加拿大','https://wo','toString','vod_pic','stype','trace','2.0','em-pic\x20>\x20i','key','init','tems\x20>\x20.mo',')\x20AppleWeb','text','contains(下','2014','\x20NT\x2010.0;\x20','list','.sqjj_a','__proto__','constructo','trim','value','闽南语','length','table','\x20Chrome/11','5018409aHzAOa','module-ite','push','arch-item','2010','item','find','attribs','\x20.page-tit','意大利','odule-item','s\x20.module-','6961190iJqaoz','vod_remark','.video-ser','2019','o-item','User-Agent','em-pic\x20img','2013','Kit/537.36','object','join','33dbhvHa','name','m-pic\x20a','last','o-item\x20a','data-src','/---------','.module-se','.nav-link','/vodsearch','search','includes','(3)\x20\x20.modu','detail','play','/vodshow/','ial','o-header\x20d','console','----.html?','ule-list\x20>','o-itemtitl','2012','{}.constru','2020','vod_direct','em-text','12WPqzhz','score','warn','ike\x20Gecko)','ctor(\x22retu','微电影','vod_id','oard-text','fari/537.3','.video-inf','/index.php','each','西班牙','vod_conten','iv.tag-lin','headers','okhttp/3.1','attr','3598488ymiLaD','2015','debug','match','2018','info','1371995DMifsK','(0)\x20>\x20.mod','time','content','stringify','o-items','2021','bind','.module-it','filters','0-9','vod_year','14ZlDLDa','skey','2023','Mozilla/5.','nction()\x20','897953KCWMjv','\x20.module-i','prototype','le-list\x20.m','198906qyDfIj','2017','.tag-link','2022','2011','.html','vod_actor','title','vod_name','o-header\x20a','isEmpty','href','gg.xyz','first','hits','m-pic\x20img','homeVod','2016','.module:eq','class','1031840stvpeO','w-text','category'];_0x518e=function(){return _0x3c584c;};return _0x518e();}_0x414a27['n']='德国',_0x414a27['v']='德国';const _0xcae356={};_0xcae356['n']='泰国',_0xcae356['v']='泰国';const _0x2846ce={};_0x2846ce['n']='印度',_0x2846ce['v']='印度';const _0x23c378={};_0x23c378['n']='意大利',_0x23c378['v']=_0xaa7fd9(0x1ff);const _0x2ecf33={};_0x2ecf33['n']='西班牙',_0x2ecf33['v']=_0xaa7fd9(0x234);const _0xb42109={};_0xb42109['n']=_0xaa7fd9(0x26e),_0xb42109['v']=_0xaa7fd9(0x26e);const _0x4e7fc7={};_0x4e7fc7['n']='其他',_0x4e7fc7['v']='其他';const _0x9b8089={};_0x9b8089[_0xaa7fd9(0x276)]='1',_0x9b8089['name']='地区',_0x9b8089[_0xaa7fd9(0x283)]=[_0x35070c,_0xeef363,_0x35d20f,_0x57cafe,_0x1461f8,_0x31ed69,_0x2e3c9f,_0x3b48ef,_0x3fb42f,_0x414a27,_0xcae356,_0x2846ce,_0x23c378,_0x2ecf33,_0xb42109,_0x4e7fc7],_0x9b8089[_0xaa7fd9(0x277)]='';const _0x2930a3={};_0x2930a3['n']='全部',_0x2930a3['v']='';const _0x430510={};_0x430510['n']='国语',_0x430510['v']='国语';const _0x316db5={};_0x316db5['n']='英语',_0x316db5['v']='英语';const _0x541a60={};_0x541a60['n']='粤语',_0x541a60['v']='粤语';const _0x26c9a4={};_0x26c9a4['n']=_0xaa7fd9(0x284),_0x26c9a4['v']=_0xaa7fd9(0x284);const _0x26d1d4={};_0x26d1d4['n']='韩语',_0x26d1d4['v']='韩语';const _0x27025e={};_0x27025e['n']='日语',_0x27025e['v']='日语';const _0x2db956={};_0x2db956['n']='法语',_0x2db956['v']='法语';const _0x21faa6={};_0x21faa6['n']='德语',_0x21faa6['v']='德语';const _0xaa25a4={};_0xaa25a4['n']='其它',_0xaa25a4['v']='其它';const _0x4e843b={};_0x4e843b[_0xaa7fd9(0x276)]='4',_0x4e843b[_0xaa7fd9(0x20e)]='语言',_0x4e843b[_0xaa7fd9(0x283)]=[_0x2930a3,_0x430510,_0x316db5,_0x541a60,_0x26c9a4,_0x26d1d4,_0x27025e,_0x2db956,_0x21faa6,_0xaa25a4],_0x4e843b['init']='';const _0x1b066f={};_0x1b066f['n']='全部',_0x1b066f['v']='';const _0xef7daf={};_0xef7daf['n']=_0xaa7fd9(0x24e),_0xef7daf['v']='2023';const _0x1915fc={};_0x1915fc['n']=_0xaa7fd9(0x258),_0x1915fc['v']=_0xaa7fd9(0x258);const _0xd8770b={};_0xd8770b['n']=_0xaa7fd9(0x246),_0xd8770b['v']=_0xaa7fd9(0x246);const _0x3ac04a={};_0x3ac04a['n']=_0xaa7fd9(0x225),_0x3ac04a['v']=_0xaa7fd9(0x225);const _0x3bb65e={};_0x3bb65e['n']='2019',_0x3bb65e['v']=_0xaa7fd9(0x205);const _0x5f5bda={};_0x5f5bda['n']=_0xaa7fd9(0x23e),_0x5f5bda['v']='2018';const _0x136e6b={};_0x136e6b['n']=_0xaa7fd9(0x256),_0x136e6b['v']=_0xaa7fd9(0x256);const _0x4dd890={};_0x4dd890['n']=_0xaa7fd9(0x266),_0x4dd890['v']='2016';const _0x327a3f={};_0x327a3f['n']=_0xaa7fd9(0x23b),_0x327a3f['v']='2015';const _0x1ca1a4={};_0x1ca1a4['n']=_0xaa7fd9(0x27c),_0x1ca1a4['v']=_0xaa7fd9(0x27c);const _0x7180f9={};_0x7180f9['n']=_0xaa7fd9(0x209),_0x7180f9['v']='2013';const _0x1efcbc={};_0x1efcbc['n']='2012',_0x1efcbc['v']=_0xaa7fd9(0x223);const _0x115438={};_0x115438['n']=_0xaa7fd9(0x259),_0x115438['v']=_0xaa7fd9(0x259);const _0x42d5d7={};_0x42d5d7['n']=_0xaa7fd9(0x1fa),_0x42d5d7['v']=_0xaa7fd9(0x1fa);const _0x43db2a={};_0x43db2a['key']='11',_0x43db2a[_0xaa7fd9(0x20e)]='年份',_0x43db2a[_0xaa7fd9(0x283)]=[_0x1b066f,_0xef7daf,_0x1915fc,_0xd8770b,_0x3ac04a,_0x3bb65e,_0x5f5bda,_0x136e6b,_0x4dd890,_0x327a3f,_0x1ca1a4,_0x7180f9,_0x1efcbc,_0x115438,_0x42d5d7],_0x43db2a[_0xaa7fd9(0x277)]='';const _0x311710={};_0x311710['n']='全部',_0x311710['v']='';const _0x1a044d={};_0x1a044d['n']='A',_0x1a044d['v']='A';const _0xdc3a02={};_0xdc3a02['n']='B',_0xdc3a02['v']='B';const _0x34dbb2={};_0x34dbb2['n']='C',_0x34dbb2['v']='C';const _0x1c00bd={};_0x1c00bd['n']='D',_0x1c00bd['v']='D';const _0x4ccb15={};_0x4ccb15['n']='E',_0x4ccb15['v']='E';const _0x4607c0={};_0x4607c0['n']='F',_0x4607c0['v']='F';const _0x53c81={};_0x53c81['n']='G',_0x53c81['v']='G';const _0x4df85f={};_0x4df85f['n']='H',_0x4df85f['v']='H';const _0x250a31={};_0x250a31['n']='I',_0x250a31['v']='I';const _0x24f39d={};_0x24f39d['n']='J',_0x24f39d['v']='J';const _0x177d8a={};_0x177d8a['n']='K',_0x177d8a['v']='K';const _0x2a87d0={};_0x2a87d0['n']='L',_0x2a87d0['v']='L';const _0x127838={};_0x127838['n']='M',_0x127838['v']='M';const _0x3c8da4={};_0x3c8da4['n']='N',_0x3c8da4['v']='N';const _0x88b3ab={};_0x88b3ab['n']='O',_0x88b3ab['v']='O';const _0x26333b={};_0x26333b['n']='P',_0x26333b['v']='P';const _0x25c9ec={};_0x25c9ec['n']='Q',_0x25c9ec['v']='Q';const _0x50678f={};_0x50678f['n']='R',_0x50678f['v']='R';const _0x210da2={};_0x210da2['n']='S',_0x210da2['v']='S';const _0x5af5ad={};_0x5af5ad['n']='T',_0x5af5ad['v']='T';const _0x404132={};_0x404132['n']='U',_0x404132['v']='U';const _0x4afdec={};_0x4afdec['n']='V',_0x4afdec['v']='V';const _0x2dce31={};_0x2dce31['n']='W',_0x2dce31['v']='W';const _0x1c966b={};_0x1c966b['n']='X',_0x1c966b['v']='X';const _0x261195={};_0x261195['n']='Y',_0x261195['v']='Y';const _0x989d1f={};_0x989d1f['n']='Z',_0x989d1f['v']='Z';const _0x84d31f={};_0x84d31f['n']=_0xaa7fd9(0x24a),_0x84d31f['v']=_0xaa7fd9(0x24a);const _0x1598a8={};_0x1598a8[_0xaa7fd9(0x276)]='5',_0x1598a8[_0xaa7fd9(0x20e)]='字母',_0x1598a8[_0xaa7fd9(0x283)]=[_0x311710,_0x1a044d,_0xdc3a02,_0x34dbb2,_0x1c00bd,_0x4ccb15,_0x4607c0,_0x53c81,_0x4df85f,_0x250a31,_0x24f39d,_0x177d8a,_0x2a87d0,_0x127838,_0x3c8da4,_0x88b3ab,_0x26333b,_0x25c9ec,_0x50678f,_0x210da2,_0x5af5ad,_0x404132,_0x4afdec,_0x2dce31,_0x1c966b,_0x261195,_0x989d1f,_0x84d31f],_0x1598a8['init']='';const _0x4b90ec={};_0x4b90ec['n']='时间',_0x4b90ec['v']=_0xaa7fd9(0x242);const _0x52c888={};_0x52c888['n']='人气',_0x52c888['v']=_0xaa7fd9(0x263);const _0x175112={};_0x175112['n']='评分',_0x175112['v']=_0xaa7fd9(0x229);const _0x370db0={};_0x370db0[_0xaa7fd9(0x276)]='2',_0x370db0[_0xaa7fd9(0x20e)]='排序',_0x370db0['value']=[_0x4b90ec,_0x52c888,_0x175112],_0x370db0['init']=_0xaa7fd9(0x242);const _0x6d665d={};_0x6d665d['n']='全部',_0x6d665d['v']='';const _0x1030df={};_0x1030df['n']='大陆',_0x1030df['v']='大陆';const _0x5b6c25={};_0x5b6c25['n']='香港',_0x5b6c25['v']='香港';const _0x5a77e4={};_0x5a77e4['n']='台湾',_0x5a77e4['v']='台湾';const _0x1548df={};_0x1548df['n']='美国',_0x1548df['v']='美国';const _0x54eac8={};_0x54eac8['n']='法国',_0x54eac8['v']='法国';const _0x2d15a0={};_0x2d15a0['n']='英国',_0x2d15a0['v']='英国';const _0x220620={};_0x220620['n']='日本',_0x220620['v']='日本';const _0x373277={};_0x373277['n']='韩国',_0x373277['v']='韩国';const _0x1faebf={};_0x1faebf['n']='德国',_0x1faebf['v']='德国';const _0x1dcca7={};_0x1dcca7['n']='泰国',_0x1dcca7['v']='泰国';const _0x5ca484={};_0x5ca484['n']='印度',_0x5ca484['v']='印度';const _0x3a8f95={};_0x3a8f95['n']=_0xaa7fd9(0x1ff),_0x3a8f95['v']='意大利';const _0x19770e={};_0x19770e['n']='西班牙',_0x19770e['v']=_0xaa7fd9(0x234);const _0x3b4ae3={};_0x3b4ae3['n']=_0xaa7fd9(0x26e),_0x3b4ae3['v']=_0xaa7fd9(0x26e);const _0x43c926={};_0x43c926['n']='其他',_0x43c926['v']='其他';const _0x381666={};_0x381666['key']='1',_0x381666[_0xaa7fd9(0x20e)]='地区',_0x381666[_0xaa7fd9(0x283)]=[_0x6d665d,_0x1030df,_0x5b6c25,_0x5a77e4,_0x1548df,_0x54eac8,_0x2d15a0,_0x220620,_0x373277,_0x1faebf,_0x1dcca7,_0x5ca484,_0x3a8f95,_0x19770e,_0x3b4ae3,_0x43c926],_0x381666[_0xaa7fd9(0x277)]='';const _0x2bd556={};function _0x6070(_0x1a1ec7,_0x229e7b){const _0x516e6c=_0x518e();return _0x6070=function(_0x24c73d,_0x3a2f60){_0x24c73d=_0x24c73d-0x1f3;let _0xb505e3=_0x516e6c[_0x24c73d];return _0xb505e3;},_0x6070(_0x1a1ec7,_0x229e7b);}_0x2bd556['n']='全部',_0x2bd556['v']='';const _0x278fa7={};_0x278fa7['n']='国语',_0x278fa7['v']='国语';const _0xab5dff={};_0xab5dff['n']='英语',_0xab5dff['v']='英语';const _0x3dbe22={};_0x3dbe22['n']='粤语',_0x3dbe22['v']='粤语';const _0x475ddf={};_0x475ddf['n']=_0xaa7fd9(0x284),_0x475ddf['v']=_0xaa7fd9(0x284);const _0x42e86e={};_0x42e86e['n']='韩语',_0x42e86e['v']='韩语';const _0xb97f9a={};_0xb97f9a['n']='日语',_0xb97f9a['v']='日语';const _0x3afc20={};_0x3afc20['n']='法语',_0x3afc20['v']='法语';const _0x552ebb={};_0x552ebb['n']='德语',_0x552ebb['v']='德语';const _0x5424ea={};_0x5424ea['n']='其它',_0x5424ea['v']='其它';const _0x2be867={};_0x2be867['key']='4',_0x2be867['name']='语言',_0x2be867[_0xaa7fd9(0x283)]=[_0x2bd556,_0x278fa7,_0xab5dff,_0x3dbe22,_0x475ddf,_0x42e86e,_0xb97f9a,_0x3afc20,_0x552ebb,_0x5424ea],_0x2be867[_0xaa7fd9(0x277)]='';const _0x5840c0={};_0x5840c0['n']='全部',_0x5840c0['v']='';const _0x1cac1c={};_0x1cac1c['n']='2023',_0x1cac1c['v']=_0xaa7fd9(0x24e);const _0x50791d={};_0x50791d['n']='2022',_0x50791d['v']=_0xaa7fd9(0x258);const _0x42a37a={};_0x42a37a['n']=_0xaa7fd9(0x246),_0x42a37a['v']=_0xaa7fd9(0x246);const _0x130b5b={};_0x130b5b['n']=_0xaa7fd9(0x225),_0x130b5b['v']=_0xaa7fd9(0x225);const _0x452b3c={};_0x452b3c['n']=_0xaa7fd9(0x205),_0x452b3c['v']=_0xaa7fd9(0x205);const _0x14bac5={};_0x14bac5['n']=_0xaa7fd9(0x23e),_0x14bac5['v']=_0xaa7fd9(0x23e);const _0x2430dc={};_0x2430dc['n']=_0xaa7fd9(0x256),_0x2430dc['v']=_0xaa7fd9(0x256);const _0x19c463={};_0x19c463['n']=_0xaa7fd9(0x266),_0x19c463['v']=_0xaa7fd9(0x266);const _0x3afd5b={};_0x3afd5b['n']=_0xaa7fd9(0x23b),_0x3afd5b['v']=_0xaa7fd9(0x23b);const _0x1b2fc6={};_0x1b2fc6['n']=_0xaa7fd9(0x27c),_0x1b2fc6['v']=_0xaa7fd9(0x27c);const _0x5873cd={};_0x5873cd['n']=_0xaa7fd9(0x209),_0x5873cd['v']=_0xaa7fd9(0x209);const _0x3f3915={};_0x3f3915['n']=_0xaa7fd9(0x223),_0x3f3915['v']='2012';const _0x12c634={};_0x12c634['n']=_0xaa7fd9(0x259),_0x12c634['v']=_0xaa7fd9(0x259);const _0x5554e={};_0x5554e['n']=_0xaa7fd9(0x1fa),_0x5554e['v']=_0xaa7fd9(0x1fa);const _0x5d1d56={};_0x5d1d56[_0xaa7fd9(0x276)]='11',_0x5d1d56[_0xaa7fd9(0x20e)]='年份',_0x5d1d56[_0xaa7fd9(0x283)]=[_0x5840c0,_0x1cac1c,_0x50791d,_0x42a37a,_0x130b5b,_0x452b3c,_0x14bac5,_0x2430dc,_0x19c463,_0x3afd5b,_0x1b2fc6,_0x5873cd,_0x3f3915,_0x12c634,_0x5554e],_0x5d1d56[_0xaa7fd9(0x277)]='';const _0x217171={};_0x217171['n']='全部',_0x217171['v']='';const _0x278497={};_0x278497['n']='A',_0x278497['v']='A';const _0x1229ab={};_0x1229ab['n']='B',_0x1229ab['v']='B';const _0x1781df={};_0x1781df['n']='C',_0x1781df['v']='C';const _0x451db8={};_0x451db8['n']='D',_0x451db8['v']='D';const _0x4a9869={};_0x4a9869['n']='E',_0x4a9869['v']='E';const _0x303424={};_0x303424['n']='F',_0x303424['v']='F';const _0x5309cd={};_0x5309cd['n']='G',_0x5309cd['v']='G';const _0x4251dd={};_0x4251dd['n']='H',_0x4251dd['v']='H';const _0x34a368={};_0x34a368['n']='I',_0x34a368['v']='I';const _0xa4362d={};_0xa4362d['n']='J',_0xa4362d['v']='J';const _0x5befa0={};_0x5befa0['n']='K',_0x5befa0['v']='K';const _0x374a56={};_0x374a56['n']='L',_0x374a56['v']='L';const _0x3f9a61={};_0x3f9a61['n']='M',_0x3f9a61['v']='M';const _0x59ef62={};_0x59ef62['n']='N',_0x59ef62['v']='N';const _0x1fbd6d={};_0x1fbd6d['n']='O',_0x1fbd6d['v']='O';const _0x3a2a5c={};_0x3a2a5c['n']='P',_0x3a2a5c['v']='P';const _0x22d61f={};_0x22d61f['n']='Q',_0x22d61f['v']='Q';const _0x5da11a={};_0x5da11a['n']='R',_0x5da11a['v']='R';const _0x34052c={};_0x34052c['n']='S',_0x34052c['v']='S';const _0x5f2915={};_0x5f2915['n']='T',_0x5f2915['v']='T';const _0x449f4c={};_0x449f4c['n']='U',_0x449f4c['v']='U';const _0xe3e35a={};_0xe3e35a['n']='V',_0xe3e35a['v']='V';const _0x5d0292={};_0x5d0292['n']='W',_0x5d0292['v']='W';const _0x33a629={};_0x33a629['n']='X',_0x33a629['v']='X';const _0x18968c={};_0x18968c['n']='Y',_0x18968c['v']='Y';const _0x2d403e={};_0x2d403e['n']='Z',_0x2d403e['v']='Z';const _0x371a14={};_0x371a14['n']=_0xaa7fd9(0x24a),_0x371a14['v']='0-9';const _0x59e9e3={};_0x59e9e3[_0xaa7fd9(0x276)]='5',_0x59e9e3[_0xaa7fd9(0x20e)]='字母',_0x59e9e3['value']=[_0x217171,_0x278497,_0x1229ab,_0x1781df,_0x451db8,_0x4a9869,_0x303424,_0x5309cd,_0x4251dd,_0x34a368,_0xa4362d,_0x5befa0,_0x374a56,_0x3f9a61,_0x59ef62,_0x1fbd6d,_0x3a2a5c,_0x22d61f,_0x5da11a,_0x34052c,_0x5f2915,_0x449f4c,_0xe3e35a,_0x5d0292,_0x33a629,_0x18968c,_0x2d403e,_0x371a14],_0x59e9e3[_0xaa7fd9(0x277)]='';const _0x1d688d={};_0x1d688d['n']='时间',_0x1d688d['v']='time';const _0x51816e={};_0x51816e['n']='人气',_0x51816e['v']=_0xaa7fd9(0x263);const _0x2fa00c={};_0x2fa00c['n']='评分',_0x2fa00c['v']=_0xaa7fd9(0x229);const _0x5702dc={};_0x5702dc[_0xaa7fd9(0x276)]='2',_0x5702dc[_0xaa7fd9(0x20e)]='排序',_0x5702dc['value']=[_0x1d688d,_0x51816e,_0x2fa00c],_0x5702dc['init']=_0xaa7fd9(0x242);const _0x138e6d={};_0x138e6d['n']='全部',_0x138e6d['v']='';const _0xee2c43={};_0xee2c43['n']='国产',_0xee2c43['v']='国产';const _0x364bd7={};_0x364bd7['n']='日韩',_0x364bd7['v']='日韩';const _0x595707={};_0x595707['n']='欧美',_0x595707['v']='欧美';const _0x4c4ff0={};_0x4c4ff0[_0xaa7fd9(0x276)]='1',_0x4c4ff0['name']='地区',_0x4c4ff0[_0xaa7fd9(0x283)]=[_0x138e6d,_0xee2c43,_0x364bd7,_0x595707],_0x4c4ff0[_0xaa7fd9(0x277)]='';const _0x73a428={};_0x73a428['n']='全部',_0x73a428['v']='';const _0x114d51={};_0x114d51['n']='2023',_0x114d51['v']=_0xaa7fd9(0x24e);const _0x3c4dd4={};_0x3c4dd4['n']=_0xaa7fd9(0x258),_0x3c4dd4['v']=_0xaa7fd9(0x258);const _0x4b3b8c={};_0x4b3b8c['n']=_0xaa7fd9(0x246),_0x4b3b8c['v']='2021';const _0x290b3f={};_0x290b3f['n']=_0xaa7fd9(0x225),_0x290b3f['v']='2020';const _0x3dd0fc={};_0x3dd0fc['n']=_0xaa7fd9(0x205),_0x3dd0fc['v']=_0xaa7fd9(0x205);const _0x179855={};_0x179855['n']=_0xaa7fd9(0x23e),_0x179855['v']='2018';const _0x441932={};_0x441932['n']='2017',_0x441932['v']=_0xaa7fd9(0x256);const _0x5e6e5e={};_0x5e6e5e['n']='2016',_0x5e6e5e['v']='2016';const _0x2652ae={};_0x2652ae['n']=_0xaa7fd9(0x23b),_0x2652ae['v']=_0xaa7fd9(0x23b);const _0x5dae81={};_0x5dae81['n']=_0xaa7fd9(0x27c),_0x5dae81['v']=_0xaa7fd9(0x27c);const _0x2b75d0={};_0x2b75d0['n']=_0xaa7fd9(0x209),_0x2b75d0['v']=_0xaa7fd9(0x209);const _0x4f8a59={};_0x4f8a59['n']=_0xaa7fd9(0x223),_0x4f8a59['v']=_0xaa7fd9(0x223);const _0x3faffd={};_0x3faffd['n']='2011',_0x3faffd['v']='2011';const _0x401159={};_0x401159['n']=_0xaa7fd9(0x1fa),_0x401159['v']=_0xaa7fd9(0x1fa);const _0x2cfdb1={};_0x2cfdb1[_0xaa7fd9(0x276)]='11',_0x2cfdb1[_0xaa7fd9(0x20e)]='年份',_0x2cfdb1[_0xaa7fd9(0x283)]=[_0x73a428,_0x114d51,_0x3c4dd4,_0x4b3b8c,_0x290b3f,_0x3dd0fc,_0x179855,_0x441932,_0x5e6e5e,_0x2652ae,_0x5dae81,_0x2b75d0,_0x4f8a59,_0x3faffd,_0x401159],_0x2cfdb1[_0xaa7fd9(0x277)]='';const _0x2b36af={};_0x2b36af['n']='全部',_0x2b36af['v']='';const _0x59f634={};_0x59f634['n']='A',_0x59f634['v']='A';const _0x1a65e4={};_0x1a65e4['n']='B',_0x1a65e4['v']='B';const _0x397a21={};_0x397a21['n']='C',_0x397a21['v']='C';const _0x19ce6b={};_0x19ce6b['n']='D',_0x19ce6b['v']='D';const _0x29f0d9={};_0x29f0d9['n']='E',_0x29f0d9['v']='E';const _0x49c2dd={};_0x49c2dd['n']='F',_0x49c2dd['v']='F';const _0x157ded={};_0x157ded['n']='G',_0x157ded['v']='G';const _0xa2c203={};_0xa2c203['n']='H',_0xa2c203['v']='H';const _0x118876={};_0x118876['n']='I',_0x118876['v']='I';const _0x1a1309={};_0x1a1309['n']='J',_0x1a1309['v']='J';const _0x55fdda={};_0x55fdda['n']='K',_0x55fdda['v']='K';const _0x51c83c={};_0x51c83c['n']='L',_0x51c83c['v']='L';const _0x5007ed={};_0x5007ed['n']='M',_0x5007ed['v']='M';const _0xfd92d={};_0xfd92d['n']='N',_0xfd92d['v']='N';const _0x1c8f3a={};_0x1c8f3a['n']='O',_0x1c8f3a['v']='O';const _0x2d35e0={};_0x2d35e0['n']='P',_0x2d35e0['v']='P';const _0x3706f9={};_0x3706f9['n']='Q',_0x3706f9['v']='Q';const _0x3a4c14={};_0x3a4c14['n']='R',_0x3a4c14['v']='R';const _0x455389={};_0x455389['n']='S',_0x455389['v']='S';const _0x3d3684={};_0x3d3684['n']='T',_0x3d3684['v']='T';const _0xfdbb89={};_0xfdbb89['n']='U',_0xfdbb89['v']='U';const _0x5a06ee={};_0x5a06ee['n']='V',_0x5a06ee['v']='V';const _0x3a1b8c={};_0x3a1b8c['n']='W',_0x3a1b8c['v']='W';const _0x2293ca={};_0x2293ca['n']='X',_0x2293ca['v']='X';const _0x11de3c={};_0x11de3c['n']='Y',_0x11de3c['v']='Y';const _0x2fb832={};_0x2fb832['n']='Z',_0x2fb832['v']='Z';const _0x5bbb85={};_0x5bbb85['n']=_0xaa7fd9(0x24a),_0x5bbb85['v']=_0xaa7fd9(0x24a);const _0x417603={};_0x417603[_0xaa7fd9(0x276)]='5',_0x417603[_0xaa7fd9(0x20e)]='字母',_0x417603[_0xaa7fd9(0x283)]=[_0x2b36af,_0x59f634,_0x1a65e4,_0x397a21,_0x19ce6b,_0x29f0d9,_0x49c2dd,_0x157ded,_0xa2c203,_0x118876,_0x1a1309,_0x55fdda,_0x51c83c,_0x5007ed,_0xfd92d,_0x1c8f3a,_0x2d35e0,_0x3706f9,_0x3a4c14,_0x455389,_0x3d3684,_0xfdbb89,_0x5a06ee,_0x3a1b8c,_0x2293ca,_0x11de3c,_0x2fb832,_0x5bbb85],_0x417603[_0xaa7fd9(0x277)]='';const _0x25b224={};_0x25b224['n']='时间',_0x25b224['v']='time';const _0x4c402d={};_0x4c402d['n']='人气',_0x4c402d['v']='hits';const _0x124cec={};_0x124cec['n']='评分',_0x124cec['v']=_0xaa7fd9(0x229);const _0xe7c034={};_0xe7c034[_0xaa7fd9(0x276)]='2',_0xe7c034['name']='排序',_0xe7c034[_0xaa7fd9(0x283)]=[_0x25b224,_0x4c402d,_0x124cec],_0xe7c034[_0xaa7fd9(0x277)]=_0xaa7fd9(0x242);const _0x38f26f={};_0x38f26f['n']='全部',_0x38f26f['v']='';const _0x33c837={};_0x33c837['n']='A',_0x33c837['v']='A';const _0x52f486={};_0x52f486['n']='B',_0x52f486['v']='B';const _0xfe23a3={};_0xfe23a3['n']='C',_0xfe23a3['v']='C';const _0x30d4e5={};_0x30d4e5['n']='D',_0x30d4e5['v']='D';const _0x54162b={};_0x54162b['n']='E',_0x54162b['v']='E';const _0xeccd08={};_0xeccd08['n']='F',_0xeccd08['v']='F';const _0x2fa729={};_0x2fa729['n']='G',_0x2fa729['v']='G';const _0x43fd19={};_0x43fd19['n']='H',_0x43fd19['v']='H';const _0xb75dd1={};_0xb75dd1['n']='I',_0xb75dd1['v']='I';const _0x58308e={};_0x58308e['n']='J',_0x58308e['v']='J';const _0x5ab63d={};_0x5ab63d['n']='K',_0x5ab63d['v']='K';const _0x20ab5d={};_0x20ab5d['n']='L',_0x20ab5d['v']='L';const _0x4fa735={};_0x4fa735['n']='M',_0x4fa735['v']='M';const _0x1665af={};_0x1665af['n']='N',_0x1665af['v']='N';const _0x4548f5={};_0x4548f5['n']='O',_0x4548f5['v']='O';const _0x20c29d={};_0x20c29d['n']='P',_0x20c29d['v']='P';const _0x1f3417={};_0x1f3417['n']='Q',_0x1f3417['v']='Q';const _0x410e63={};_0x410e63['n']='R',_0x410e63['v']='R';const _0x17e205={};_0x17e205['n']='S',_0x17e205['v']='S';const _0x88db68={};_0x88db68['n']='T',_0x88db68['v']='T';const _0x45a477={};_0x45a477['n']='U',_0x45a477['v']='U';const _0x4d61ae={};_0x4d61ae['n']='V',_0x4d61ae['v']='V';const _0x43c87b={};_0x43c87b['n']='W',_0x43c87b['v']='W';const _0x4e2b38={};_0x4e2b38['n']='X',_0x4e2b38['v']='X';const _0x1e599c={};_0x1e599c['n']='Y',_0x1e599c['v']='Y';const _0x5e54a0={};_0x5e54a0['n']='Z',_0x5e54a0['v']='Z';const _0x1b9284={};_0x1b9284['n']=_0xaa7fd9(0x24a),_0x1b9284['v']=_0xaa7fd9(0x24a);const _0x32b476={};_0x32b476[_0xaa7fd9(0x276)]='5',_0x32b476['name']='字母',_0x32b476['value']=[_0x38f26f,_0x33c837,_0x52f486,_0xfe23a3,_0x30d4e5,_0x54162b,_0xeccd08,_0x2fa729,_0x43fd19,_0xb75dd1,_0x58308e,_0x5ab63d,_0x20ab5d,_0x4fa735,_0x1665af,_0x4548f5,_0x20c29d,_0x1f3417,_0x410e63,_0x17e205,_0x88db68,_0x45a477,_0x4d61ae,_0x43c87b,_0x4e2b38,_0x1e599c,_0x5e54a0,_0x1b9284],_0x32b476[_0xaa7fd9(0x277)]='';const _0x359908={};_0x359908['n']='时间',_0x359908['v']=_0xaa7fd9(0x242);const _0x7e44be={};_0x7e44be['n']='人气',_0x7e44be['v']=_0xaa7fd9(0x263);const _0x46a4af={};_0x46a4af['n']='评分',_0x46a4af['v']=_0xaa7fd9(0x229);const _0x19915b={};_0x19915b['key']='2',_0x19915b[_0xaa7fd9(0x20e)]='排序',_0x19915b['value']=[_0x359908,_0x7e44be,_0x46a4af],_0x19915b['init']=_0xaa7fd9(0x242);const _0x54e8d9={};_0x54e8d9['1']=[_0xd44c47,_0x16c68b,_0x56f122,_0x220e8d,_0x5894b9],_0x54e8d9['2']=[_0x9b8089,_0x4e843b,_0x43db2a,_0x1598a8,_0x370db0],_0x54e8d9['3']=[_0x381666,_0x2be867,_0x5d1d56,_0x59e9e3,_0x5702dc],_0x54e8d9['4']=[_0x4c4ff0,_0x2cfdb1,_0x417603,_0xe7c034],_0x54e8d9['5']=[_0x32b476,_0x19915b];let filterObj=_0x54e8d9;async function home(_0xbc2142){const _0x374be0=_0xaa7fd9;let _0x39b756=[],_0x2d413c=siteUrl,_0x4380e4=await request(_0x2d413c,UA);const _0x1e1143=load(_0x4380e4);let _0x19812f=_0x1e1143(_0x374be0(0x215));for(var _0x4b9bb1 of _0x19812f){let _0x14257d=_0x1e1143(_0x4b9bb1),_0x1ab172=_0x14257d[_0x374be0(0x239)](_0x374be0(0x260)),_0x89ecf=_0x1ab172[_0x374be0(0x23d)](regexCategory);if(!_[_0x374be0(0x25f)](_0x89ecf)){let _0x3d35b8=_0x89ecf[0x1],_0x134f34={'type_id':_0x3d35b8,'type_name':_0x14257d[_0x374be0(0x27a)]()[_0x374be0(0x282)]()};_0x39b756[_0x374be0(0x1f8)](_0x134f34);}}const _0x3d773b={};return _0x3d773b[_0x374be0(0x268)]=_0x39b756,_0x3d773b[_0x374be0(0x249)]=filterObj,JSON[_0x374be0(0x244)](_0x3d773b);}async function homeVod(){const _0xfb9578=_0xaa7fd9;let _0x585058=siteUrl,_0x36ca87=await request(_0x585058,UA);const _0x27254a=load(_0x36ca87);let _0x233b46=_0x27254a('.module:lt'+_0xfb9578(0x219)+_0xfb9578(0x254)+_0xfb9578(0x200)+_0xfb9578(0x201)+_0xfb9578(0x1fb)),_0x16fc55=[];for(var _0x1ced01 of _0x233b46){let _0x3908e2=_0x27254a(_0x1ced01)['find'](_0xfb9578(0x248)+'em-cover\x20.'+_0xfb9578(0x1f7)+_0xfb9578(0x20f))[_0xfb9578(0x262)](),_0x4b6e39=_0x3908e2['attr'](_0xfb9578(0x260)),_0x1b8e7d=_0x3908e2[_0xfb9578(0x239)]('title'),_0x4db9c9=_0x27254a(_0x1ced01)[_0xfb9578(0x1fc)](_0xfb9578(0x248)+_0xfb9578(0x26c)+_0xfb9578(0x1f7)+_0xfb9578(0x264))[_0xfb9578(0x262)](),_0xfd33d5=_0x4db9c9[_0xfb9578(0x239)](_0xfb9578(0x212)),_0x39982c=_0x27254a(_0x1ced01)[_0xfb9578(0x1fc)](_0xfb9578(0x248)+'em-text')[_0xfb9578(0x262)]()[_0xfb9578(0x27a)]();const _0x24cbe2={};_0x24cbe2[_0xfb9578(0x22e)]=_0x4b6e39,_0x24cbe2['vod_name']=_0x1b8e7d,_0x24cbe2[_0xfb9578(0x271)]=_0xfd33d5,_0x24cbe2[_0xfb9578(0x203)+'s']=_0x39982c,_0x16fc55[_0xfb9578(0x1f8)](_0x24cbe2);}const _0x110465={};return _0x110465[_0xfb9578(0x27e)]=_0x16fc55,JSON['stringify'](_0x110465);}async function category(_0x47c132,_0x326b26,_0x5c3f22,_0x4d7cf4){const _0x2e23a6=_0xaa7fd9;let _0x4fc760=[_0x47c132,'','','','','','','',_0x326b26,'','',''];if(!_['isEmpty'](_0x4d7cf4))for(let _0x542ffb in _0x4d7cf4){_0x4fc760[parseInt(_0x542ffb)]=_0x4d7cf4[_0x542ffb];}const _0x31dc1a=_0x4fc760[_0x2e23a6(0x20c)]('-');let _0x14fbbe=siteUrl+(_0x2e23a6(0x232)+_0x2e23a6(0x21c))+_0x31dc1a+_0x2e23a6(0x25a);console[_0x2e23a6(0x23c)](_0x14fbbe);let _0x3e2a8a=await request(_0x14fbbe,UA);console['debug'](_0x3e2a8a);const _0x262da4=load(_0x3e2a8a);let _0xdf86be=_0x262da4(_0x2e23a6(0x267)+_0x2e23a6(0x241)+_0x2e23a6(0x221)+_0x2e23a6(0x252)+_0x2e23a6(0x278)+'dule-item'),_0x353535=[];for(var _0x35c146 of _0xdf86be){let _0x1a848d=_0x262da4(_0x35c146)[_0x2e23a6(0x1fc)](_0x2e23a6(0x248)+_0x2e23a6(0x26c)+'module-ite'+'m-pic\x20a')[_0x2e23a6(0x262)](),_0x3f6a7f=_0x1a848d[_0x2e23a6(0x239)]('href'),_0x4dbba9=_0x1a848d['attr'](_0x2e23a6(0x25c)),_0x5a5a23=_0x262da4(_0x35c146)[_0x2e23a6(0x1fc)](_0x2e23a6(0x248)+_0x2e23a6(0x26c)+_0x2e23a6(0x1f7)+_0x2e23a6(0x264))[_0x2e23a6(0x262)](),_0x5a13ca=_0x5a5a23[_0x2e23a6(0x239)](_0x2e23a6(0x212)),_0x1d721d=_0x262da4(_0x35c146)[_0x2e23a6(0x1fc)](_0x2e23a6(0x248)+_0x2e23a6(0x227))[_0x2e23a6(0x262)]()[_0x2e23a6(0x27a)]();const _0x5bc760={};_0x5bc760[_0x2e23a6(0x22e)]=_0x3f6a7f,_0x5bc760[_0x2e23a6(0x25d)]=_0x4dbba9,_0x5bc760[_0x2e23a6(0x271)]=_0x5a13ca,_0x5bc760[_0x2e23a6(0x203)+'s']=_0x1d721d,_0x353535[_0x2e23a6(0x1f8)](_0x5bc760);}const _0x4dbd8f=_0x262da4('#page\x20>\x20a:'+_0x2e23a6(0x27b)+'一页)')[_0x2e23a6(0x1f3)]>0x0,_0x5eabf4=_0x4dbd8f?parseInt(_0x326b26)+0x1:parseInt(_0x326b26);return JSON[_0x2e23a6(0x244)]({'page':parseInt(_0x326b26),'pagecount':_0x5eabf4,'limit':0x48,'total':0x48*_0x5eabf4,'list':_0x353535});}async function detail(_0x27d428){const _0x410c95=_0xaa7fd9;let _0x26f8d0=siteUrl+_0x27d428,_0x5a9657=await request(_0x26f8d0,UA);const _0x3e816d=load(_0x5a9657);let _0x4ea1a5=_0x3e816d(_0x410c95(0x26d)+_0x410c95(0x26a)),_0xe7d08=[];_0x4ea1a5[_0x410c95(0x233)](function(_0x3bd584,_0x293589){const _0x262b5e=_0x410c95;let _0x53489b=_0x3e816d(this)[_0x262b5e(0x239)]('data-clipb'+_0x262b5e(0x22f));_0xe7d08[_0x262b5e(0x1f8)](_0x53489b[_0x262b5e(0x282)]());});let _0x293887=await detailContentVodPlayUrl(_0xe7d08),_0x538586=detailContentVodPlayFrom(_0xe7d08),_0x3d3405=_0x3e816d('.video-inf'+_0x410c95(0x21e)+_0x410c95(0x236)+'k\x20a'),_0x5c8071=[];_0x3d3405[_0x410c95(0x233)](function(_0x95d915,_0x797039){const _0x4a1dad=_0x410c95;_0x5c8071['push'](_0x3e816d(this)[_0x4a1dad(0x27a)]());});let _0xeca8f1={'vod_id':_0x27d428,'vod_content':_0x27d428,'vod_pic':_0x3e816d(_0x410c95(0x248)+_0x410c95(0x208))[_0x410c95(0x262)]()[_0x410c95(0x239)]('data-src'),'vod_name':_0x3e816d(_0x410c95(0x231)+'o-header\x20>'+_0x410c95(0x1fe)+'le')[_0x410c95(0x262)]()['text'](),'vod_play_url':_0x293887,'vod_play_from':_0x538586,'type_name':_0x5c8071[_0x410c95(0x20c)](','),'vod_year':'','vod_area':_0x3e816d(_0x410c95(0x231)+_0x410c95(0x25e)+_0x410c95(0x257))[_0x410c95(0x210)]()['text']()[_0x410c95(0x282)](),'vod_remarks':'','vod_actor':'','vod_director':''},_0x368621=_0x3e816d('.video-inf'+_0x410c95(0x245));_0x368621[_0x410c95(0x233)](function(_0x157224,_0x362e70){const _0x527c9c=_0x410c95;let _0x44c861=_0x3e816d(this)[_0x527c9c(0x1fc)](_0x527c9c(0x231)+_0x527c9c(0x222)+'e')[_0x527c9c(0x262)]()['text']();if(_0x44c861[_0x527c9c(0x218)]('导演')){let _0x4b6c4b=_0x3e816d(this)[_0x527c9c(0x1fc)](_0x527c9c(0x231)+_0x527c9c(0x211)),_0x10a944=[];_0x4b6c4b['each'](function(_0x2f600f,_0x25a473){const _0x54c3b1=_0x527c9c;_0x10a944[_0x54c3b1(0x1f8)](_0x3e816d(this)[_0x54c3b1(0x27a)]());}),_0xeca8f1[_0x527c9c(0x226)+'or']=_0x10a944['join'](',');}else{if(_0x44c861[_0x527c9c(0x218)]('主演')){let _0x2c806b=_0x3e816d(this)['find']('.video-inf'+'o-item\x20a'),_0x4e8cb5=[];_0x2c806b[_0x527c9c(0x233)](function(_0x4f249d,_0x2fb0a3){_0x4e8cb5['push'](_0x3e816d(this)['text']());}),_0xeca8f1[_0x527c9c(0x25b)]=_0x4e8cb5[_0x527c9c(0x20c)](',');}else{if(_0x44c861[_0x527c9c(0x218)]('年代'))_0xeca8f1[_0x527c9c(0x24b)]=_0x3e816d(this)['find']('.video-inf'+_0x527c9c(0x206))[_0x527c9c(0x262)]()[_0x527c9c(0x27a)]()['trim']();else{if(_0x44c861[_0x527c9c(0x218)]('备注'))_0xeca8f1[_0x527c9c(0x203)+'s']=_0x3e816d(this)[_0x527c9c(0x1fc)]('.video-inf'+_0x527c9c(0x206))[_0x527c9c(0x262)]()[_0x527c9c(0x27a)]()['trim']();else _0x44c861[_0x527c9c(0x218)]('剧情')&&(_0xeca8f1[_0x527c9c(0x235)+'t']=_0x3e816d(this)[_0x527c9c(0x1fc)](_0x527c9c(0x27f))[_0x527c9c(0x262)]()['text']()[_0x527c9c(0x282)]());}}}});const _0x28fa7b={};_0x28fa7b[_0x410c95(0x27e)]=[_0xeca8f1];let _0x370790=JSON[_0x410c95(0x244)](_0x28fa7b);return _0x370790;}async function play(_0x90ab8d,_0x2eb1b2,_0xea6c9b){return await playContent(_0x90ab8d,_0x2eb1b2,_0xea6c9b);}async function search(_0x55caef,_0x5b01d2){const _0x30fb7a=_0xaa7fd9;let _0x3c245f=siteUrl+('/index.php'+_0x30fb7a(0x216)+_0x30fb7a(0x213)+_0x30fb7a(0x220)+'wd=')+_0x55caef,_0x5f41b2=await getString(_0x3c245f),_0x20ea8b=load(_0x5f41b2),_0xd6f6=_0x20ea8b(_0x30fb7a(0x214)+_0x30fb7a(0x1f9)),_0xc2a7a8=[];for(var _0x22484c of _0xd6f6){let _0x31edcc=_0x20ea8b(_0x22484c)[_0x30fb7a(0x1fc)]('.video-ser'+_0x30fb7a(0x21d))[0x0][_0x30fb7a(0x1fd)][_0x30fb7a(0x260)],_0x1b2359=_0x20ea8b(_0x22484c)['find'](_0x30fb7a(0x204)+_0x30fb7a(0x21d))[0x0]['attribs'][_0x30fb7a(0x25c)],_0x2f8fb8=_0x20ea8b(_0x22484c)[_0x30fb7a(0x1fc)](_0x30fb7a(0x248)+_0x30fb7a(0x275)+'mg')[0x0][_0x30fb7a(0x1fd)][_0x30fb7a(0x212)],_0xf1c411='';const _0x2c2bcf={};_0x2c2bcf['vod_id']=_0x31edcc,_0x2c2bcf['vod_name']=_0x1b2359,_0x2c2bcf['vod_pic']=_0x2f8fb8,_0x2c2bcf[_0x30fb7a(0x203)+'s']=_0xf1c411,_0xc2a7a8['push'](_0x2c2bcf);}const _0x5a90a4={};return _0x5a90a4[_0x30fb7a(0x27e)]=_0xc2a7a8,JSON[_0x30fb7a(0x244)](_0x5a90a4);}export function __jsEvalReturn(){const _0x13fc69=_0xaa7fd9,_0xb992ee={};return _0xb992ee['init']=init,_0xb992ee['home']=home,_0xb992ee[_0x13fc69(0x265)]=homeVod,_0xb992ee[_0x13fc69(0x26b)]=category,_0xb992ee[_0x13fc69(0x21a)]=detail,_0xb992ee[_0x13fc69(0x21b)]=play,_0xb992ee[_0x13fc69(0x217)]=search,_0xb992ee;}