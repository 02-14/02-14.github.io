/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","8cdd40f365938d79a77953e7e075ea37"],["/archives/2023/09/index.html","0e28c10627c4712405c6a0c5d79234fe"],["/archives/2023/10/index.html","690b3a937cfde5daad91cda4c4a0d98e"],["/archives/2023/11/index.html","168b66673b466a462ca60714ec6889c5"],["/archives/2023/12/index.html","c42e34e4c011a65ca72822b3b4df1686"],["/archives/2023/index.html","e10d08acec84fc587d9c6a9d823dc90a"],["/archives/2023/page/2/index.html","f81d940d15ec220cbd94ba93be90e107"],["/archives/2024/01/index.html","31be582abdee10585764b80e90b3e344"],["/archives/2024/02/index.html","2d4c5cf2ff752f9913964a7f575ef573"],["/archives/2024/03/index.html","235811907af54c4ee0b555ace59cf357"],["/archives/2024/index.html","5a965b0082da8c2dd6e5fdf48ec88475"],["/archives/index.html","68a4d4a0099bd20ed0f58521d06ce8b7"],["/archives/page/2/index.html","0dd637cbc9a421137f086b2d4f5ab814"],["/categories/index.html","390e26010c932adbf5dc9ab1ce0beab1"],["/categories/图片/index.html","09c7b530db98434ef6173300eb17b98b"],["/categories/地图/index.html","67b8e5caff545ee89b4d6fdf6a895053"],["/categories/视频/index.html","1692f09e6ff8badf1fe65a7cc14b7058"],["/categories/视频/page/2/index.html","3e74054f066ce176d99742afc66dc3a7"],["/categories/视频/朗诵/index.html","6b19cc13f08f3ffe61e52ba48fcd2bdd"],["/categories/视频/钢琴协奏曲/index.html","5451a6582f569bb486c52f954bfae29b"],["/categories/视频/音乐/index.html","b25f1bdb799a1d52214121b6b295d97b"],["/categories/诗词/index.html","31a2c3df70e3691c875a788392056134"],["/categories/诗词/元/index.html","31eb6c214357e0bede58af74a81c515b"],["/categories/诗词/唐/index.html","37fc5a752ae1aaf6e4e0c634d3d39855"],["/categories/诗词/宋/index.html","b74c3bbe7cbe51409721472a7395c1a0"],["/categories/谚语/index.html","427ba16dea7eaafe7f91df88e7fa48f4"],["/categories/谚语/俗语/index.html","a75d23535b2560ae9ebfae367c7e41fc"],["/categories/谚语/俗语/民间故事/index.html","b8528263d64a87fc7294656ddf067daf"],["/categories/谚语/俗语/民间故事/神话故事/index.html","37f5041d2a4e6c27c5e37298c2b1e92f"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5afe77027df056a57bd0b86ef63d46ff"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","0459b974aa13a8565558c138b25ed06c"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","7ad8f3b9f1c1a2a12ebfc6f59502fffb"],["/post/00.html","71b16c884bdc2d96040425029b145665"],["/post/01.html","a1da2aa46304be2e328c51e7bff62455"],["/post/02.html","73229db545ebc8ce6efd1cfb5a8b5ed0"],["/post/03.html","c72e1716f79ddceaeadba0faa4509b6f"],["/post/04.html","08d975ac6017727fedad9c5631d6a97b"],["/post/05.html","1195d41ef99452f40877f834ca89da82"],["/post/06.html","2bb88d4ca2f99de6d7b06b16b3f20e16"],["/post/07.html","202b53534d8c421d6dd41b48c7d3f5dd"],["/post/08.html","e8b1328e181b6bc48f1ad77b686dde40"],["/post/09.html","649346f70bdeaaa781945679141979d1"],["/post/10.html","a94634061974d17c6111fe800a876dd8"],["/post/11.html","1131166d9018727d2ff35f78847f6f57"],["/post/12.html","46d59ec5c31b4a9fafdc54df96750bfc"],["/post/13.html","205421369ed3e01e77a292ffa9a21261"],["/post/14.html","88de0f9e2535e8f9f16f8c0042a7f1c8"],["/post/15.html","ea877b5a737de70f465300e0361518e8"],["/post/16.html","d24898eb7b7ed66aabb7ae24a6bf879f"],["/sw-register.js","b8baa2bef2ad22c6ad7e4362a233cb96"],["/tags/index.html","6f176eebf3a269a79927e0a8c319d18d"],["/tags/俗语/index.html","78a55ddca82e4ba5928cbb6040d6a545"],["/tags/元/index.html","112c12e99e36b9a10c61db055707fa96"],["/tags/唐/index.html","22348741713d17b18e0511f3546069fa"],["/tags/图片/index.html","9109056a7153e671fce40e0a30125566"],["/tags/地图/index.html","0f420c2a9bf8e834841d56df517d439a"],["/tags/宋/index.html","e24da69d347a907c9fd4268dcfb83189"],["/tags/朗诵/index.html","0c024c0eae7b7c76f59b80f0444f069e"],["/tags/民间故事/index.html","aec417f103e1bc3e274b5d60bd54687b"],["/tags/神话故事/index.html","aa5489b8ec07d1c80db09aa29c06be20"],["/tags/视频/index.html","bf8b40fd727148b73bc0aea5cdc5e221"],["/tags/视频/page/2/index.html","34a1e003098632293564c80034ec55df"],["/tags/诗词/index.html","cf38b680b688786537afe3d0fae22bb0"],["/tags/谚语/index.html","f38d17bade39ec4504b4c7ff191e734c"],["/tags/钢琴协奏曲/index.html","b826da5dd50b6bc52eb75f1d57966fe7"],["/tags/音乐/index.html","c78a93967432d8e04092be5e9515a0c5"]];
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
