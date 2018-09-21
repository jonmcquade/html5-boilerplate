"use strict";var precacheConfig=[["/.editorconfig","01317bd26fd91208d1fafbe16a0fca46"],["/.gitattributes","8b2921ddfcb50aba5ab385362ae83974"],["/.gitignore","c202db847d8dfce4ea055c64274d4928"],["/app.js","811495023f82e064bb1b7a25546918cd"],["/browserconfig.xml","f8565d3cc02b4492808684372de33ec6"],["/css/home.css","0f23f47e87ea80ccba2af087c97b0163"],["/css/large.css","7d722c7928dc16eb6f02ca8e6e9aaabc"],["/css/main.css","5ab6aa56ab19b6dcb3e6ed6e931a6ef3"],["/css/medium.css","a5c3226019bf38031b709461a436bfed"],["/css/small.css","ef2c9e4441136cd4142ba830b8e22da0"],["/css/xlarge.css","037f78570bb78ab514a8dd39a3f42517"],["/doc/TOC.md","5462e83808a12e5713004091ff8a7084"],["/doc/css.md","5247089bac7ef04c304b2e50fa167022"],["/doc/extend.md","0e0f154ce48f84cde867718204fca78f"],["/doc/faq.md","887efd42e685ffec6eeed71b104cfc82"],["/doc/html.md","883b261c6f530094758613af0946768c"],["/doc/jonathan-mcquade.pdf","249aa329167caac111234839d35b359a"],["/doc/js.md","d92b0516235dd1f3b78b52eac3ef64b2"],["/doc/misc.md","7a25e772253ee2e1d51f20ce0e7fcf08"],["/doc/usage.md","e24b058980817a667fe7de288a11de04"],["/error.html","642bdcbcfccf774e10d8a5e6ea1d544c"],["/favicon.ico","1c16a02b518b92e9735adb9623d23f7f"],["/humans.txt","be182910e506699752e397429cdc7156"],["/icon-apple.jpg","67a5dce07dc266cec8e23fcb007d4d6f"],["/icon.jpg","0037df02c4253d1c396df7bd2e18f726"],["/icon.png","7676155efec287aaaa1b78ea9a79120d"],["/icon32.jpg","089e67963886612747372cf87e60f6ce"],["/img/.gitignore","d41d8cd98f00b204e9800998ecf8427e"],["/img/bugle.jpg","54feaa133ef7423ae00971dd62f5af73"],["/img/evilkitteh.jpg","a9f5fe742a025093def506cebb8f1405"],["/img/iwc-color-models.jpg","67a16ef471b53650987cd92d6f1b5df8"],["/img/iwc-home-concept.jpg","802b49969fd6a9b1cd70cfdffa6f82fb"],["/img/shockedandapplaud.jpg","69148a2a73f83b00e17bbc6b801eeab9"],["/img/tacoma-dome.jpg","7ec61f3bf7e5a18b458f422df9de44c9"],["/index.html","8c6887d39ac442102d29c55a91ab89c9"],["/js/main.js","1ae6dea5c47520e28a9509535c581654"],["/js/plugins.js","9baec86da49af9bae5ba6b3b5b6f5eca"],["/js/vendor/modernizr.min.js","0d81cec35b577f788c78ddbf209660e1"],["/robots.txt","00733c197e59662cf705a2ec6d881d44"],["/site.webmanifest","ad1b9ad76675efcae61048be1115dcfa"],["/tile-wide.png","8eec2319b4adbc36c1874f0ccaabc958"],["/tile.png","9bee3f492c17e9fecc3949397ba0e022"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});