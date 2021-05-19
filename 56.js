(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56,59],{tJYo:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return U}));var r,o=s("9og8"),n=s("PpiC"),a=s("k1fw"),i=s("WmNS"),c=s.n(i),u=s("tJVT"),l=s("uUT0"),h=s("Qyje"),d=s.n(h);(function(e){e["Json"]="application/json",e["Form"]="application/x-www-form-urlencoded"})(r||(r={}));var f={mode:"cors",method:"GET",cache:"default",credentials:"omit",responseType:"json",headers:{"Content-Type":r.Json},timeout:5e3},p={timeout:"\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6","The user aborted a request":"\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6","Network Error":"\u8bf7\u6c42\u5730\u5740\u9519\u8bef","Failed to fetch":"\u8bf7\u6c42\u5730\u5740\u9519\u8bef","request:fail":"\u8bf7\u6c42\u5730\u5740\u9519\u8bef"},g={request:"color: #0089E5;",success:"color: #2DB700;",fail:"color: #F41900;"},v=["status","code"],b=["msg","message","Message"],m=[0,"0",200,201,"0000","1000",1e3,1001,1002,1003,1004,1005,2e3,8e4],T=s("yCs7"),q={[r.Json]:JSON.stringify,[r.Form]:d.a.stringify},j=e=>{if("GET"===e.method){var t=d.a.stringify(e.data);t&&(e.url+="?".concat(t))}else{var s,r=q[null===(s=e.headers)||void 0===s?void 0:s["Content-Type"]],o=e.data;e.body=r?r(o):o instanceof FormData?o:Object(l["serialize"])(o)}return e},w=(e,t)=>{for(var s="object"===typeof t&&t.message||t,r=0,o=Object.entries(e);r<o.length;r++){var n=o[r],a=Object(u["default"])(n,2),i=a[0],c=a[1];if(new RegExp(i).test(s))return c}return"\u5176\u4ed6\u9519\u8bef"},y=/^http/,O=e=>y.test(e),x=()=>{var e=new Date;return()=>{var t=new Date;return{start:e.toTimeString(),end:t.toTimeString(),total:"".concat((+t-+e)/1e3,"\u79d2")}}},C=e=>"string"===typeof e?{label:e}:e,R=e=>e,k=(e,t)=>e,E=e=>{e=j(e);var t=new AbortController;e.signal=t.signal;var s=new Promise(((s,r)=>setTimeout((()=>{t.abort(),r("request timeout")}),e.timeout)));return Promise.race([fetch(e.url,e),s]).then((t=>{if(t instanceof Response){var s=e,r=s.responseType;return"json"!==r&&r&&t[r]?{[r]:t[r](),response:t}:t.json()}return t}))},P=Object(T["default"])(g),F=P.request,J=P.success,L=P.fail,S={request:e=>{F.group("Request: ".concat(e.label||e.url," \u21c5"),(()=>{console.log("\u8bf7\u6c42\u7c7b\u578b\uff1a",e.method),console.log("\u8bf7\u6c42\u5730\u5740\uff1a",e.url),console.log("\u8bf7\u6c42\u6570\u636e\uff1a",e.data||"\u65e0"),console.log("\u8bf7\u6c42\u914d\u7f6e\uff1a",e)}))},response:(e,t,s)=>{var r,o=t.label,n=t.url,a="Response: ".concat(o||n," ").concat(s?"\u221a":"\xd7");null!==(r=e.time)&&void 0!==r&&r.total&&(a+=" \u7528\u65f6\uff1a".concat(e.time.total)),(s?J:L).group(a,(()=>{console.log("\u54cd\u5e94\u6570\u636e\uff1a",e),s||(console.log("\u54cd\u5e94\u5f02\u5e38\uff1a",e.error||"\u65e0"),console.log("\u5f02\u5e38\u89e3\u6790\uff1a",e.errorText))}))}},D=s("d8FT"),K=s.n(D);class U{get baseURL(){return this.host+this.apiPath}constructor(e){var t=this;this.host="",this.apiPath="",this.console=!0,this.defaultConfig=f,this.errorTexts=p,this.statusCodeKeys=v,this.messageKeys=b,this.successCodes=m,this.interceptorsRequest=R,this.interceptorsResponse=k,this.requestFunction=E,this.config=void 0,this.clone=e=>new U(Object(a["default"])(Object(a["default"])({},this.config),e)),this.init=e=>{var t=e.defaultConfig,s=e.errorTexts,r=Object(n["a"])(e,["defaultConfig","errorTexts"]);Object.assign(this.defaultConfig,t),Object.assign(this.errorTexts,s),Object.assign(this,K()(r,(e=>void 0!==e))),this.config=e},this.request=e=>{var t=e.url,s=void 0===t?"":t,r=Object(n["a"])(e,["url"]);O(s)||(s=this.baseURL+s),r=this.interceptorsRequest(Object(a["default"])(Object(a["default"])({url:s},this.defaultConfig),r)),this.console&&S.request(r);var o=x();return this.requestFunction(r).catch((e=>({error:e,errorText:w(this.errorTexts,e)}))).then((e=>{if(!e.errorText&&"json"===r.responseType){var t=this.statusCodeKeys.reduce(((t,s)=>{var r;return null!==(r=e[s])&&void 0!==r?r:t}),"");this.successCodes.includes(t)||(e.error=t,e.errorText=this.messageKeys.reduce(((t,s)=>e[s]||t),"\u8bf7\u6c42\u5f02\u5e38"))}return e.ok=!e.errorText,e=this.interceptorsResponse(Object(a["default"])({time:o()},e),r),this.console&&S.response(e,r,e.ok),e}))},this.caches={},this.requestLoadings={},this.createRequest=(e,s)=>function(r,n){for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var l=Object.assign({method:e,url:r,data:n},s,...i.map((e=>C(e)))),h=l.cacheKey;if(!h)return t.request(l);var d=function(){var e=Object(o["default"])(c.a.mark((function e(){var s,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.requestLoadings[h]){e.next=7;break}return e.next=3,new Promise((e=>setTimeout(e,500)));case 3:return e.next=5,d();case 5:return s=e.sent,e.abrupt("return",s);case 7:if(t.requestLoadings[h]=!0,e.t0=t.caches[h],e.t0){e.next=13;break}return e.next=12,t.request(l);case 12:e.t0=e.sent;case 13:return r=e.t0,r.ok&&(t.caches[h]=r),t.requestLoadings[h]=!1,e.abrupt("return",r);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d()},this.get=this.createRequest("GET"),this.post=this.createRequest("POST"),this.put=this.createRequest("PUT"),this.patch=this.createRequest("PATCH"),this.del=this.createRequest("DELETE"),this.upload=this.createRequest("POST",{headers:{}}),e&&this.init(e)}}},yCs7:function(e,t,s){"use strict";s.r(t);var r=e=>{var t=t=>{console.log("%c".concat(t),e)},s=(t,s)=>{console.groupCollapsed("%c".concat(t),e),null===s||void 0===s||s(),console.groupEnd()};return{log:t,group:s}},o=e=>{var t={},s=Object.keys(e);return s.forEach((s=>{t[s]=r(e[s])})),t};t["default"]=o}}]);