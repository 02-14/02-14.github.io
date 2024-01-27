/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","3d02b72c00514d2ddd7640cfc33e4168"],["/archives/2023/09/index.html","6869b94466aee2b2a97f76a9967e30d9"],["/archives/2023/10/index.html","e672332a61f12212ae27a642cdf1e062"],["/archives/2023/11/index.html","8934d6bd65b9230b0d77d8f61e0cd89f"],["/archives/2023/12/index.html","004bf54cbdbb812a00f848b980a32e62"],["/archives/2023/index.html","a78371df834bda43f8644616f43122a5"],["/archives/2023/page/2/index.html","f11f0a1b5121b12bd966055bb2b58ead"],["/archives/2024/01/index.html","f768a3af84b7dbbe39a370db6c8065a8"],["/archives/2024/index.html","4c3924630a6650800ae93f01be4e076d"],["/archives/index.html","4176bdf937e420b9be35564f386b1d56"],["/archives/page/2/index.html","91d563a89b577a3737b4d6d9c32494d8"],["/categories/index.html","142dae3d0e2f8e3d960bad535605a6f2"],["/categories/图片/index.html","0eda4ecd10cf494c9ef9d4a89ea5ebb3"],["/categories/地图/index.html","1bdd7624c03f186a0e4ab65795510870"],["/categories/视频/index.html","0e8bb06cf920f01264856ca1d43c6060"],["/categories/视频/朗诵/index.html","ade12f5679f689ec5a468d6ea9ad6e93"],["/categories/视频/钢琴协奏曲/index.html","29fea65c5a940a01845a9f3c3e2d0ffe"],["/categories/视频/音乐/index.html","8345b705198203e6a419180c53fac34c"],["/categories/诗词/index.html","efd7e3f4ae3943807f3842ca15493df5"],["/categories/诗词/唐/index.html","81dfc9692c0a7b942044b10802075d1b"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","067fbaca768f2375929decc537b8b7b6"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","7ecb4241c03efbd8c3c0a0f045ec9dba"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget/demo/login.html","a3786e750803a5e2d2b583c6f74e048c"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","c7f532e2ee4237f6fc0a7a209b22de8c"],["/post/00.html","8d1133faa3d42a1cdff36ba905ccc374"],["/post/01.html","e74cad788761537d827730018475adac"],["/post/02.html","d81e71897a0afaf6ef661e49dc5a5a41"],["/post/03.html","3bacd149917122e0bae08a01ceebb35a"],["/post/04.html","5b3a8476ee467729d1182bd47f646d48"],["/post/05.html","06b810f2225e56e6fe1a83a59bef1d38"],["/post/06.html","9fd95308b4c120722e23d4a073805755"],["/post/07.html","7feb30cb5556021ab3195f39423c863a"],["/post/08.html","95db78f664c5c60852ba7f8ae72bb8e2"],["/post/09.html","c3a613605d383025eef78b498d1933ac"],["/post/10.html","19fa7b231a0f30750c5fdd1faa99bf7b"],["/post/11.html","13ecac68d0e4fe8fb1c050d2626aaba8"],["/post/12.html","c897411b42c5fc0ed0d804467a1ab355"],["/sw-register.js","f72b9e3b4c9b14bb6879999262609afc"],["/tags/index.html","0f065fa97c19cb549e647c5fee15486d"],["/tags/唐/index.html","266714feea797fd2a10c7da106f0e0ac"],["/tags/图片/index.html","b3312ce9e99d5aec0dd28d3231908b4d"],["/tags/地图/index.html","cc508592983777df51cc712135f82674"],["/tags/朗诵/index.html","ae2b4281231ce073207ad9aa9cccc32e"],["/tags/视频/index.html","49e88cee5653d82b29fd3f9658172cd4"],["/tags/诗词/index.html","1713c6a4f4f23f294824ae5597cac893"],["/tags/钢琴协奏曲/index.html","2f096e745c950403707a36e9241de187"],["/tags/音乐/index.html","d8eec50e2398f4094d58ba8aef2b084e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
