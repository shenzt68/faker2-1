/*
 特务集卡
 脚本没有自动开卡，会尝试领取开卡奖励
cron "6 10,17 * * *" jd_superBrandJK.js
*/

const $ = new Env('特务集卡');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf5228=["\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x74\x6F\x4F\x62\x6A","\x0A\u6D3B\u52A8\u5730\u5740\uFF1A\u9996\u9875\u4E0B\u62C9\uFF0C\u9700\u8981\u5F00\u5361\u624D\u80FD\x31\x30\x30\x25\u96C6\u9F50\uFF0C\u6CA1\u6709\u5F00\u5361\u7684\u624B\u52A8\u5F00\uFF0C\u96C6\u9F50\u665A\u4E0A\x38\u70B9\u540E\u74DC\u5206\x0A","\x66\x6C\x61\x67","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x73\x65\x72","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\u4E92\u52A9\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x0A","\x6E\x65\x65\x64","\x6D\x61\x78","\u53BB\u52A9\u529B\x3A","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x44\x6F\x54\x61\x73\x6B","\x7B\x22\x73\x6F\x75\x72\x63\x65\x22\x3A\x22\x63\x61\x72\x64\x22\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x2C\x22\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64\x22\x3A\x22","\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64","\x22\x2C\x22\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64\x22\x3A\x22","\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64","\x22\x2C\x22\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x54\x79\x70\x65\x22\x3A\x32\x2C\x22\x69\x74\x65\x6D\x49\x64\x22\x3A\x22","\x69\x74\x65\x6D\x49\x64","\x22\x2C\x22\x61\x63\x74\x69\x6F\x6E\x54\x79\x70\x65\x22\x3A\x30\x7D","\x62\x69\x7A\x43\x6F\x64\x65","\x30","\u52A9\u529B\u6210\u529F","\x31\x30\x33","\u52A9\u529B\u5DF2\u6EE1","\x31\x30\x38","\u52A9\u529B\u6B21\u6570\u5DF2\u7528\u5B8C","\u52A9\u529B\u7ED3\u679C\uFF1A","\x62\x69\x7A\x4D\x73\x67","\x77\x61\x69\x74","\x73\x68\x6F\x77\x53\x65\x63\x6F\x6E\x64\x46\x6C\x6F\x6F\x72\x43\x61\x72\x64\x49\x6E\x66\x6F","\x7B\x22\x73\x6F\x75\x72\x63\x65\x22\x3A\x22\x63\x61\x72\x64\x22\x7D","\x7B\x7D","\x72\x65\x73\x75\x6C\x74","\x61\x63\x74\x69\x76\x69\x74\x79\x42\x61\x73\x65\x49\x6E\x66\x6F","\u672C\u671F\u6D3B\u52A8\u7ED3\u675F\uFF0C\u7B49\u5F85\u4E0B\u671F\u3002\u3002\u3002","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x54\x61\x73\x6B\x4C\x69\x73\x74","\x2C\x22\x61\x73\x73\x69\x73\x74\x49\x6E\x66\x6F\x46\x6C\x61\x67\x22\x3A\x31\x7D","\x2C\u83B7\u53D6\u6D3B\u52A8\u8BE6\u60C5\u5931\u8D25\x32","\x74\x61\x73\x6B\x4C\x69\x73\x74","\x2C\u9ED1\u53F7","\x2C\u83B7\u53D6\u6D3B\u52A8\u8BE6\u60C5\u6210\u529F","\x61\x63\x74\x69\x76\x69\x74\x79\x43\x61\x72\x64\x49\x6E\x66\x6F","\x64\x69\x76\x69\x64\x65\x54\x69\x6D\x65\x53\x74\x61\x74\x75\x73","\x64\x69\x76\x69\x64\x65\x53\x74\x61\x74\x75\x73","\x63\x61\x72\x64\x53\x74\x61\x74\x75\x73","\x2C\u53BB\u74DC\u5206","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x54\x61\x73\x6B\x4C\x6F\x74\x74\x65\x72\x79","\x22\x2C\x22\x74\x61\x67\x22\x3A\x22\x64\x69\x76\x69\x64\x65\x22\x7D","\u74DC\u5206\u7ED3\u679C\uFF1A","\x62\x65\x61\x6E\x4E\x75\x6D","\x75\x73\x65\x72\x41\x77\x61\x72\x64\x49\x6E\x66\x6F","\u8C46\x0A","\x2C\u5DF2\u74DC\u5206","\x2C\u672A\u96C6\u9F50\u6216\u8005\u672A\u5230\u74DC\u5206\u65F6\u95F4","\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x54\x79\x70\x65","\x63\x61\x72\x64\x41\x73\x73\x69\x73\x74\x42\x6F\x78\x52\x65\x73\x74","\x65\x78\x74","\u9886\u53D6\u52A9\u529B\u5956\u52B1","\x22\x7D","\u9886\u53D6\u7ED3\u679C\uFF1A","\x63\x6F\x6D\x70\x6C\x65\x74\x69\x6F\x6E\x46\x6C\x61\x67","\u4EFB\u52A1\uFF1A","\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x4E\x61\x6D\x65","\x2C\u5DF2\u5B8C\u6210","\u6D4F\u89C8\u70ED\u95E8\u5546\u54C1","\x2C\u53BB\u6267\u884C","\x70\x72\x6F\x64\x75\x63\x74\x73\x49\x6E\x66\x6F","\x2C\u4FE1\u606F\u5F02\u5E38","\x22\x2C\x22\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x54\x79\x70\x65\x22\x3A","\x2C\x22\x69\x74\x65\x6D\x49\x64\x22\x3A\x22","\u6267\u884C\u7ED3\u679C\uFF1A","\x73\x68\x6F\x70\x70\x69\x6E\x67\x41\x63\x74\x69\x76\x69\x74\x79","\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70","\x62\x72\x61\x6E\x64\x4D\x65\x6D\x62\x65\x72\x4C\x69\x73\x74","\x73\x69\x67\x6E\x32","\u9996\u9875\u9650\u65F6\u4E0B\u62C9","\x73\x74\x61\x74\x75\x73","\x22\x2C\x22\x61\x63\x74\x69\x6F\x6E\x54\x79\x70\x65\x22\x3A\x30\x2C\x22\x64\x72\x6F\x70\x44\x6F\x77\x6E\x43\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x31\x7D","\u5C0F\u6E38\u620F","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x68\x6F\x77\x53\x65\x63\x6F\x6E\x64\x46\x6C\x6F\x6F\x72\x47\x61\x6D\x65\x49\x6E\x66\x6F","\x73\x65\x63\x43\x6F\x64\x65","\x67\x61\x6D\x65\x43\x75\x72\x72\x65\x6E\x74\x52\x65\x77\x61\x72\x64\x49\x6E\x66\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x47\x61\x6D\x65\x49\x6E\x66\x6F","\x22\x2C\x22\x73\x65\x63\x43\x6F\x64\x65\x22\x3A\x22","\x61\x73\x73\x69\x73\x74\x54\x61\x73\x6B\x44\x65\x74\x61\x69\x6C","\x73\x75\x70\x65\x72\x42\x72\x61\x6E\x64\x53\x68\x6F\x77\x4D\x79\x41\x77\x61\x72\x64","\x7D","\x72\x65\x77\x61\x72\x64\x4C\x69\x73\x74","\x72\x65\x77\x61\x72\x64\x54\x79\x70\x65","\x72\x65\x77\x61\x72\x64\x56\x61\x6C\x75\x65","\x0A","\x72\x65\x77\x61\x72\x64\x4E\x61\x6D\x65","\x75\x73\x65\x52\x61\x6E\x67\x65","\x3B","\x0A\u5DF2\u83B7\u5F97\u5956\u52B1\uFF1A\x0A","\u7279\u52A1\u96C6\u5361","\u53EF\u80FD\u83B7\u5F97\u5B9E\u7269\u5956\u52B1\x0A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x3F\x75\x75\x69\x64\x3D\x26\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x61\x72\x65\x61\x3D\x26\x61\x70\x70\x69\x64\x3D\x50\x72\x6F\x64\x75\x63\x74\x5A\x34\x42\x72\x61\x6E\x64\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x26\x74\x3D","\x6E\x6F\x77","\x26\x62\x6F\x64\x79\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x61\x6C\x6C\x2F\x61\x63\x74\x69\x76\x65\x2F\x32\x58\x73\x69\x63\x51\x45\x64\x59\x31\x43\x59\x34\x74\x4C\x77\x39\x36\x48\x6D\x46\x43\x7A\x6E\x31\x4D\x4E\x6E\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x7A\x68\x2D\x63\x6E","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x70\x61\x72\x73\x65","\x64\x61\x74\x61","\x70\x6F\x73\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[];if($[__Oxf5228[0x0]]()){Object[__Oxf5228[0x3]](jdCookieNode)[__Oxf5228[0x2]]((_0xe64bx2)=>{cookiesArr[__Oxf5228[0x1]](jdCookieNode[_0xe64bx2])});if(process[__Oxf5228[0x5]][__Oxf5228[0x4]]&& process[__Oxf5228[0x5]][__Oxf5228[0x4]]=== __Oxf5228[0x6]){console[__Oxf5228[0x7]]= ()=>{}}}else {cookiesArr= [$[__Oxf5228[0xa]](__Oxf5228[0x9]),$[__Oxf5228[0xa]](__Oxf5228[0xb]),...$[__Oxf5228[0x10]]($[__Oxf5228[0xa]](__Oxf5228[0xe])|| __Oxf5228[0xf])[__Oxf5228[0xd]]((_0xe64bx2)=>{return _0xe64bx2[__Oxf5228[0xc]]})][__Oxf5228[0x8]]((_0xe64bx2)=>{return !!_0xe64bx2})};console[__Oxf5228[0x7]](__Oxf5228[0x11]);let shareList=[];$[__Oxf5228[0x12]]= false;!(async ()=>{if(!cookiesArr[0x0]){$[__Oxf5228[0x1d]]($[__Oxf5228[0x17]],__Oxf5228[0x1b],__Oxf5228[0x1c],{'\x6F\x70\x65\x6E\x2D\x75\x72\x6C':__Oxf5228[0x1c]});return};for(let _0xe64bx5=0;_0xe64bx5< cookiesArr[__Oxf5228[0x1e]];_0xe64bx5++){if(cookiesArr[_0xe64bx5]){$[__Oxf5228[0xc]]= cookiesArr[_0xe64bx5];$[__Oxf5228[0x1f]]= decodeURIComponent($[__Oxf5228[0xc]][__Oxf5228[0x20]](/pt_pin=([^; ]+)(?=;?)/)&& $[__Oxf5228[0xc]][__Oxf5228[0x20]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxf5228[0x21]]= (_0xe64bx5+ 1);$[__Oxf5228[0x22]]= true;$[__Oxf5228[0x23]]= __Oxf5228[0x15];console[__Oxf5228[0x7]](__Oxf5228[0x24]+ $[__Oxf5228[0x21]]+ __Oxf5228[0x25]+ ($[__Oxf5228[0x23]]|| $[__Oxf5228[0x1f]])+ __Oxf5228[0x26]);if(!$[__Oxf5228[0x22]]){$[__Oxf5228[0x1d]]($[__Oxf5228[0x17]],__Oxf5228[0x27],__Oxf5228[0x28]+ $[__Oxf5228[0x21]]+ __Oxf5228[0x29]+ ($[__Oxf5228[0x23]]|| $[__Oxf5228[0x1f]])+ __Oxf5228[0x2a],{'\x6F\x70\x65\x6E\x2D\x75\x72\x6C':__Oxf5228[0x1c]});if($[__Oxf5228[0x0]]()){ await notify[__Oxf5228[0x2d]]($[__Oxf5228[0x17]]+ __Oxf5228[0x2b]+ $[__Oxf5228[0x1f]],__Oxf5228[0x28]+ $[__Oxf5228[0x21]]+ __Oxf5228[0x29]+ $[__Oxf5228[0x1f]]+ __Oxf5228[0x2c])};continue};try{ await main($[__Oxf5228[0xc]]);if(_0xe64bx5== 0&& $[__Oxf5228[0x12]]){return}}catch(e){console[__Oxf5228[0x7]](JSON[__Oxf5228[0x2e]](e))}}};if(shareList[__Oxf5228[0x1e]]=== 0){return};let _0xe64bx6=[];for(let _0xe64bx5=0;_0xe64bx5< cookiesArr[__Oxf5228[0x1e]];_0xe64bx5++){let _0xe64bx7=cookiesArr[_0xe64bx5];let _0xe64bx8=decodeURIComponent(_0xe64bx7[__Oxf5228[0x20]](/pt_pin=(.+?);/)&& _0xe64bx7[__Oxf5228[0x20]](/pt_pin=(.+?);/)[0x1]);for(let _0xe64bx9=0;_0xe64bx9< shareList[__Oxf5228[0x1e]];_0xe64bx9++){if(shareList[_0xe64bx9][__Oxf5228[0x2f]]=== _0xe64bx8){_0xe64bx6[__Oxf5228[0x1]](shareList[_0xe64bx9]);break}}};console[__Oxf5228[0x7]](__Oxf5228[0x30]);for(let _0xe64bx5=0;_0xe64bx5< cookiesArr[__Oxf5228[0x1e]];_0xe64bx5++){let _0xe64bx7=cookiesArr[_0xe64bx5];let _0xe64bx8=decodeURIComponent(_0xe64bx7[__Oxf5228[0x20]](/pt_pin=(.+?);/)&& _0xe64bx7[__Oxf5228[0x20]](/pt_pin=(.+?);/)[0x1]);let _0xe64bxa=true;if(_0xe64bx6[__Oxf5228[0x1e]]>= 3){lll= 3}else {lll= _0xe64bx6[__Oxf5228[0x1e]]};for(let _0xe64bx9=0;(_0xe64bx9< lll)&& _0xe64bxa;_0xe64bx9++){let _0xe64bxb=_0xe64bx6[_0xe64bx9];if((_0xe64bxb[__Oxf5228[0x2f]]=== _0xe64bx8)|| (_0xe64bxb[__Oxf5228[0x31]]=== 0)|| _0xe64bxb[__Oxf5228[0x32]]){continue};console[__Oxf5228[0x7]](__Oxf5228[0x15]+ _0xe64bx8+ __Oxf5228[0x33]+ _0xe64bxb[__Oxf5228[0x2f]]);let _0xe64bxc= await takeRequest(_0xe64bx7,__Oxf5228[0x34],__Oxf5228[0x35]+ _0xe64bxb[__Oxf5228[0x36]]+ __Oxf5228[0x37]+ _0xe64bxb[__Oxf5228[0x38]]+ __Oxf5228[0x39]+ _0xe64bxb[__Oxf5228[0x3a]]+ __Oxf5228[0x3b]+ _0xe64bxb[__Oxf5228[0x3c]]+ __Oxf5228[0x3d]);if(_0xe64bxc[__Oxf5228[0x3e]]=== __Oxf5228[0x3f]){console[__Oxf5228[0x7]](__Oxf5228[0x40])}else {if(_0xe64bxc[__Oxf5228[0x3e]]=== __Oxf5228[0x41]){console[__Oxf5228[0x7]](__Oxf5228[0x42]);_0xe64bxb[__Oxf5228[0x32]]= true}else {if(_0xe64bxc[__Oxf5228[0x3e]]=== __Oxf5228[0x43]){console[__Oxf5228[0x7]](__Oxf5228[0x44]);_0xe64bxa= false}}};console[__Oxf5228[0x7]](__Oxf5228[0x45]+ _0xe64bxc[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](2000)}}})()[__Oxf5228[0x1a]]((_0xe64bx4)=>{$[__Oxf5228[0x7]](__Oxf5228[0x15],__Oxf5228[0x16]+ $[__Oxf5228[0x17]]+ __Oxf5228[0x18]+ _0xe64bx4+ __Oxf5228[0x19],__Oxf5228[0x15])})[__Oxf5228[0x14]](()=>{$[__Oxf5228[0x13]]()});async function main(_0xe64bxe){let _0xe64bxf=decodeURIComponent(_0xe64bxe[__Oxf5228[0x20]](/pt_pin=(.+?);/)&& _0xe64bxe[__Oxf5228[0x20]](/pt_pin=(.+?);/)[0x1]);let _0xe64bxc= await takeRequest(_0xe64bxe,__Oxf5228[0x48],__Oxf5228[0x49]);if(JSON[__Oxf5228[0x2e]](_0xe64bxc)=== __Oxf5228[0x4a]||  !_0xe64bxc||  !_0xe64bxc[__Oxf5228[0x4b]]||  !_0xe64bxc[__Oxf5228[0x4b]][__Oxf5228[0x4c]]){console[__Oxf5228[0x7]](__Oxf5228[0x4d]);$[__Oxf5228[0x12]]= true;return};let _0xe64bx10=_0xe64bxc[__Oxf5228[0x4b]][__Oxf5228[0x4c]];let _0xe64bx11=_0xe64bx10[__Oxf5228[0x36]];let _0xe64bx12= await takeRequest(_0xe64bxe,__Oxf5228[0x4e],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x4f]);if((JSON[__Oxf5228[0x2e]](_0xe64bx12)=== __Oxf5228[0x4a])|| (JSON[__Oxf5228[0x2e]](_0xe64bxc)=== __Oxf5228[0x4a])){console[__Oxf5228[0x7]](_0xe64bxf+ __Oxf5228[0x50]);return};if(!_0xe64bx12||  !_0xe64bx12[__Oxf5228[0x4b]] ||  !_0xe64bx12[__Oxf5228[0x4b]][__Oxf5228[0x51]]){console[__Oxf5228[0x7]](_0xe64bxf+ __Oxf5228[0x52]);return};let _0xe64bx13=_0xe64bx12[__Oxf5228[0x4b]][__Oxf5228[0x51]]|| [];console[__Oxf5228[0x7]](__Oxf5228[0x15]+ _0xe64bxf+ __Oxf5228[0x53]);let _0xe64bx14=_0xe64bx10[__Oxf5228[0x38]];let _0xe64bx15=_0xe64bxc[__Oxf5228[0x4b]][__Oxf5228[0x54]];if((_0xe64bx15[__Oxf5228[0x55]]=== 1)&& (_0xe64bx15[__Oxf5228[0x56]]=== 0)&& _0xe64bx15[__Oxf5228[0x57]]=== 1){console[__Oxf5228[0x7]](_0xe64bxf+ __Oxf5228[0x58]);let _0xe64bx12= await takeRequest(_0xe64bxe,__Oxf5228[0x59],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x5a]);console[__Oxf5228[0x7]](__Oxf5228[0x5b]+ _0xe64bx12[__Oxf5228[0x4b]][__Oxf5228[0x5d]][__Oxf5228[0x5c]]+ __Oxf5228[0x5e]);return}else {if(_0xe64bx15[__Oxf5228[0x55]]=== 1&& _0xe64bx15[__Oxf5228[0x56]]=== 1&& (_0xe64bx15[__Oxf5228[0x57]]=== 1)){console[__Oxf5228[0x7]](_0xe64bxf+ __Oxf5228[0x5f]);return}else {console[__Oxf5228[0x7]](_0xe64bxf+ __Oxf5228[0x60])}}; await $[__Oxf5228[0x47]](2000);for(let _0xe64bx16=0;_0xe64bx16< _0xe64bx13[__Oxf5228[0x1e]];_0xe64bx16++){let _0xe64bx17=_0xe64bx13[_0xe64bx16];if(_0xe64bx17[__Oxf5228[0x61]]=== 2){let _0xe64bx18=_0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x62]]|| __Oxf5228[0x3f];for(let _0xe64bx19=0;_0xe64bx19< _0xe64bx18;_0xe64bx19++){console[__Oxf5228[0x7]](__Oxf5228[0x64]);let _0xe64bx1a= await takeRequest(_0xe64bxe,__Oxf5228[0x59],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x65]);console[__Oxf5228[0x7]](__Oxf5228[0x66]+ _0xe64bx1a[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)}};if(_0xe64bx17[__Oxf5228[0x67]]){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6a]);continue};if(_0xe64bx17[__Oxf5228[0x61]]=== 1){if(_0xe64bx17[__Oxf5228[0x69]]== __Oxf5228[0x6b]){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6c]);for(let _0xe64bx1b of _0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x6d]]){let _0xe64bx1c=_0xe64bx1b[__Oxf5228[0x3c]];if(!_0xe64bx1c){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6e])};let _0xe64bx1d= await takeRequest(_0xe64bxe,__Oxf5228[0x34],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x39]+ _0xe64bx17[__Oxf5228[0x3a]]+ __Oxf5228[0x6f]+ _0xe64bx17[__Oxf5228[0x61]]+ __Oxf5228[0x70]+ _0xe64bx1c+ __Oxf5228[0x3d]);console[__Oxf5228[0x7]](__Oxf5228[0x71]+ _0xe64bx1d[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)}}else {console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6c]);let _0xe64bx1c=_0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x72]]&& _0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x72]][_0xe64bx5][__Oxf5228[0x3c]]|| _0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x6d]][_0xe64bx5][__Oxf5228[0x3c]]|| __Oxf5228[0x15];;;if(!_0xe64bx1c){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6e])};let _0xe64bx1d= await takeRequest(_0xe64bxe,__Oxf5228[0x34],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x39]+ _0xe64bx17[__Oxf5228[0x3a]]+ __Oxf5228[0x6f]+ _0xe64bx17[__Oxf5228[0x61]]+ __Oxf5228[0x70]+ _0xe64bx1c+ __Oxf5228[0x3d]);console[__Oxf5228[0x7]](__Oxf5228[0x71]+ _0xe64bx1d[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)}};if(_0xe64bx17[__Oxf5228[0x61]]=== 3){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6c]);let _0xe64bx1c=_0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x73]][0x0][__Oxf5228[0x3c]]|| __Oxf5228[0x15];if(!_0xe64bx1c){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6e])};let _0xe64bx1d= await takeRequest(_0xe64bxe,__Oxf5228[0x34],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x39]+ _0xe64bx17[__Oxf5228[0x3a]]+ __Oxf5228[0x6f]+ _0xe64bx17[__Oxf5228[0x61]]+ __Oxf5228[0x70]+ _0xe64bx1c+ __Oxf5228[0x3d]);console[__Oxf5228[0x7]](__Oxf5228[0x71]+ _0xe64bx1d[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)};if(_0xe64bx17[__Oxf5228[0x61]]=== 7){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6c]);let _0xe64bx1c=_0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x74]][0x0][__Oxf5228[0x3c]]|| __Oxf5228[0x15];if(!_0xe64bx1c){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6e])};let _0xe64bx1d= await takeRequest(_0xe64bxe,__Oxf5228[0x34],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x39]+ _0xe64bx17[__Oxf5228[0x3a]]+ __Oxf5228[0x6f]+ _0xe64bx17[__Oxf5228[0x61]]+ __Oxf5228[0x70]+ _0xe64bx1c+ __Oxf5228[0x3d]);console[__Oxf5228[0x7]](__Oxf5228[0x71]+ _0xe64bx1d[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)};if(_0xe64bx17[__Oxf5228[0x61]]=== 5){let _0xe64bx1e=_0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x75]]|| [];if(_0xe64bx1e[__Oxf5228[0x1e]]=== 0){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6e])};if(_0xe64bx17[__Oxf5228[0x69]]=== __Oxf5228[0x76]){for(let _0xe64bx19=0;_0xe64bx19< _0xe64bx1e[__Oxf5228[0x1e]];_0xe64bx19++){if(_0xe64bx1e[_0xe64bx19][__Oxf5228[0x77]]=== 1){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6c]);let _0xe64bx1c=_0xe64bx1e[_0xe64bx19][__Oxf5228[0x3c]];let _0xe64bx1d= await takeRequest(_0xe64bxe,__Oxf5228[0x34],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x39]+ _0xe64bx17[__Oxf5228[0x3a]]+ __Oxf5228[0x6f]+ _0xe64bx17[__Oxf5228[0x61]]+ __Oxf5228[0x70]+ _0xe64bx1c+ __Oxf5228[0x78]);console[__Oxf5228[0x7]](__Oxf5228[0x71]+ _0xe64bx1d[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)}}}else {if(_0xe64bx17[__Oxf5228[0x69]][__Oxf5228[0x7a]](__Oxf5228[0x79])!==  -1){for(let _0xe64bx19=0;_0xe64bx19< _0xe64bx1e[__Oxf5228[0x1e]];_0xe64bx19++){if(_0xe64bx1e[_0xe64bx19][__Oxf5228[0x77]]=== 1){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6c]);let _0xe64bx1f= await takeRequest(_0xe64bxe,__Oxf5228[0x7b],__Oxf5228[0x49]);let _0xe64bx20=_0xe64bx1f[__Oxf5228[0x4b]][__Oxf5228[0x7e]][__Oxf5228[0x7d]][__Oxf5228[0x7c]];let _0xe64bx21=_0xe64bx1f[__Oxf5228[0x4b]][__Oxf5228[0x7e]][__Oxf5228[0x7d]][__Oxf5228[0x3a]]; await $[__Oxf5228[0x47]](3000);let _0xe64bx1d= await takeRequest(_0xe64bxe,__Oxf5228[0x59],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x37]+ _0xe64bx14+ __Oxf5228[0x39]+ _0xe64bx21+ __Oxf5228[0x7f]+ _0xe64bx20+ __Oxf5228[0x65]);console[__Oxf5228[0x7]](__Oxf5228[0x71]+ _0xe64bx1d[__Oxf5228[0x46]]); await $[__Oxf5228[0x47]](3000)}}}}};if(_0xe64bx17[__Oxf5228[0x61]]=== 2){let _0xe64bx1c=_0xe64bx17[__Oxf5228[0x63]][__Oxf5228[0x80]][__Oxf5228[0x3c]]|| __Oxf5228[0x15];if(!_0xe64bx1c){console[__Oxf5228[0x7]](__Oxf5228[0x68]+ _0xe64bx17[__Oxf5228[0x69]]+ __Oxf5228[0x6e])};shareList[__Oxf5228[0x1]]({'\x75\x73\x65\x72':_0xe64bxf,'\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64':_0xe64bx11,'\x65\x6E\x63\x72\x79\x70\x74\x50\x72\x6F\x6A\x65\x63\x74\x49\x64':_0xe64bx14,'\x65\x6E\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x49\x64':_0xe64bx17[__Oxf5228[0x3a]],'\x69\x74\x65\x6D\x49\x64':_0xe64bx1c,'\x6D\x61\x78':false})}}; await $[__Oxf5228[0x47]](2000);let _0xe64bx22= await takeRequest(_0xe64bxe,__Oxf5228[0x81],__Oxf5228[0x35]+ _0xe64bx11+ __Oxf5228[0x82]);let _0xe64bx23=_0xe64bx22[__Oxf5228[0x4b]][__Oxf5228[0x83]];let _0xe64bx24=__Oxf5228[0x15];let _0xe64bx25=__Oxf5228[0x15];for(let _0xe64bx5=0;_0xe64bx5< _0xe64bx23[__Oxf5228[0x1e]];_0xe64bx5++){if(_0xe64bx23[_0xe64bx5][__Oxf5228[0x84]]=== 3){_0xe64bx25+= _0xe64bx23[_0xe64bx5][__Oxf5228[0x85]]+ __Oxf5228[0x86]}else {if(_0xe64bx23[_0xe64bx5][__Oxf5228[0x84]]=== 7){_0xe64bx25+= _0xe64bx23[_0xe64bx5][__Oxf5228[0x87]]+ __Oxf5228[0x29]+ _0xe64bx23[_0xe64bx5][__Oxf5228[0x88]]+ __Oxf5228[0x86]}else {_0xe64bx25+= _0xe64bx23[_0xe64bx5][__Oxf5228[0x85]]+ __Oxf5228[0x86];_0xe64bx24+= (_0xe64bx23[_0xe64bx5][__Oxf5228[0x85]]+ __Oxf5228[0x89])}}};if(_0xe64bx25){console[__Oxf5228[0x7]](__Oxf5228[0x8a]+ _0xe64bx25)};if(_0xe64bx24){ await notify[__Oxf5228[0x2d]](__Oxf5228[0x8b],__Oxf5228[0x28]+ _0xe64bxf+ __Oxf5228[0x8c]+ _0xe64bx24)}}async function takeRequest(_0xe64bxe,_0xe64bx27,_0xe64bx28){let _0xe64bx29=__Oxf5228[0x15];let _0xe64bx2a=__Oxf5228[0x8d]+ _0xe64bx27+ __Oxf5228[0x8e]+ Date[__Oxf5228[0x8f]]()+ __Oxf5228[0x90]+ encodeURIComponent(_0xe64bx28);const _0xe64bx2b={'\x4F\x72\x69\x67\x69\x6E':__Oxf5228[0x91],'\x43\x6F\x6F\x6B\x69\x65':_0xe64bxe,'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxf5228[0x92],'\x41\x63\x63\x65\x70\x74':__Oxf5228[0x93],'\x52\x65\x66\x65\x72\x65\x72':__Oxf5228[0x94],'\x48\x6F\x73\x74':__Oxf5228[0x95],'\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74':$[__Oxf5228[0x0]]()?process[__Oxf5228[0x5]][__Oxf5228[0x96]]?process[__Oxf5228[0x5]][__Oxf5228[0x96]]:require(__Oxf5228[0x98])[__Oxf5228[0x97]]:$[__Oxf5228[0xa]](__Oxf5228[0x99])?$[__Oxf5228[0xa]](__Oxf5228[0x99]):__Oxf5228[0x9a],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxf5228[0x9b],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxf5228[0x9c]};let _0xe64bx2c={'\x75\x72\x6C':_0xe64bx2a,'\x68\x65\x61\x64\x65\x72\x73':_0xe64bx2b,'\x62\x6F\x64\x79':_0xe64bx29};return  new Promise(async (_0xe64bx2d)=>{$[__Oxf5228[0x9f]](_0xe64bx2c,(_0xe64bx2e,_0xe64bx2f,_0xe64bx30)=>{try{if(_0xe64bx2e){console[__Oxf5228[0x7]](_0xe64bx2e)}else {_0xe64bx30= JSON[__Oxf5228[0x9d]](_0xe64bx30);if(_0xe64bx30&& _0xe64bx30[__Oxf5228[0x9e]]&& (JSON[__Oxf5228[0x2e]](_0xe64bx30[__Oxf5228[0x9e]])=== __Oxf5228[0x4a])){console[__Oxf5228[0x7]](JSON[__Oxf5228[0x2e]](_0xe64bx30))}}}catch(e){console[__Oxf5228[0x7]](_0xe64bx30)}finally{_0xe64bx2d(_0xe64bx30[__Oxf5228[0x9e]]|| {})}})})}(function(_0xe64bx31,_0xe64bx32,_0xe64bx33,_0xe64bx34,_0xe64bx35,_0xe64bx16){_0xe64bx16= __Oxf5228[0xa0];_0xe64bx34= function(_0xe64bx36){if( typeof alert!== _0xe64bx16){alert(_0xe64bx36)};if( typeof console!== _0xe64bx16){console[__Oxf5228[0x7]](_0xe64bx36)}};_0xe64bx33= function(_0xe64bx37,_0xe64bx31){return _0xe64bx37+ _0xe64bx31};_0xe64bx35= _0xe64bx33(__Oxf5228[0xa1],_0xe64bx33(_0xe64bx33(__Oxf5228[0xa2],__Oxf5228[0xa3]),__Oxf5228[0xa4]));try{_0xe64bx31= __encode;if(!( typeof _0xe64bx31!== _0xe64bx16&& _0xe64bx31=== _0xe64bx33(__Oxf5228[0xa5],__Oxf5228[0xa6]))){_0xe64bx34(_0xe64bx35)}}catch(e){_0xe64bx34(_0xe64bx35)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}