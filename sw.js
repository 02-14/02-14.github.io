/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","db7d81f8a131e3f98c5ed1614e3bd607"],["/archives/2023/09/index.html","267c46c195153dea8d08a20c89091523"],["/archives/2023/10/index.html","e36c1c0ab229bb621b9953bab3e0147a"],["/archives/2023/11/index.html","724cf72889f58a798a0e9a96ad1b3cbe"],["/archives/2023/12/index.html","72bdf29531897043db10b0eeac565e46"],["/archives/2023/index.html","2a41d9450efc6eb3b17e8678d7ab4f0a"],["/archives/2023/page/2/index.html","2d04ea944cb48ce5321f656bd3e6546d"],["/archives/2024/01/index.html","22ef45a0af665ca28c1385571ec436dc"],["/archives/2024/02/index.html","7009c4412aee91060bf36f49fae98b3a"],["/archives/2024/03/index.html","12614b53c5bdcdce07a30cd5fdc72ceb"],["/archives/2024/index.html","5dd696624f0409e6ae4156f009f32b56"],["/archives/index.html","77b911956ede13944e7d760cc66e0fac"],["/archives/page/2/index.html","a98b1955ea29f24d8d0e5e96f160db65"],["/categories/index.html","6a79bedae1fe6f1fe0a075d7d169fc43"],["/categories/图片/index.html","9e9b8c23b58e11f25e9d0218c2fa18c8"],["/categories/地图/index.html","2b198840603670a68293050b4416759c"],["/categories/视频/index.html","2653af1a98c0dc290d6901845eefe17d"],["/categories/视频/page/2/index.html","e6711a46f37a599c88f5a9a719e2b261"],["/categories/视频/朗诵/index.html","fa092522139d8ae773a67b68a6e94a37"],["/categories/视频/钢琴协奏曲/index.html","b7d80f51cab74d39899c38b9ab581ef5"],["/categories/视频/音乐/index.html","6832c7564cdc9f151749cfc1aee2c259"],["/categories/诗词/index.html","983ccb49799a9bbd6b0f57b5e2e41eb4"],["/categories/诗词/元/index.html","a9fb588899cccebc96a1c1f818d65d07"],["/categories/诗词/唐/index.html","36ffab473169ee5ee134fc4d085a05d9"],["/categories/诗词/宋/index.html","18dfd5a17355e9814f4e3d8d983af768"],["/categories/谚语/index.html","37905ddf253fd431937afd18884d7a18"],["/categories/谚语/俗语/index.html","51eb0634e737e97e72dda92f324447d8"],["/categories/谚语/俗语/民间故事/index.html","950f89c38ed8d0fe714786c4d6d80871"],["/categories/谚语/俗语/民间故事/神话故事/index.html","c597d119c709ab9370501d05951caf2e"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b094c751d131642b4dda64aaf67924d4"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","fc820cc680742ac3218c41b5341ec1c4"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","bd0e7a5a1b89c8e5ee33c680ab348045"],["/post/00.html","c27857e53a5b512315841abc04e5db4e"],["/post/01.html","1d5e4bc3ca3ac5c5e9d35eacc15ccd07"],["/post/02.html","6b2fdf5ed5a9073b36a9ef832aa9bdd5"],["/post/03.html","eddf147e9dd79b1ace125041242e2a5f"],["/post/04.html","888f01c48f7a20d2a3eb4b57e8dcb30b"],["/post/05.html","e6102c191e7ed9f9170fd20c23066116"],["/post/06.html","ba4563546d1cca1c5ec5f48702856722"],["/post/07.html","506c9033980f8afee1bb775cb1088f62"],["/post/08.html","4c8163bba58d7132df0e2af367a4ae92"],["/post/09.html","6a9b8bbf38b38b350314f95db8083972"],["/post/10.html","3215a5c1f2f0138546ff890f424b86aa"],["/post/11.html","d278be8ed332adec59bf4aa9ed1d222b"],["/post/12.html","b62e4a72c9b682999c40050cd7e286bd"],["/post/13.html","c12d80ec234f4923ce984fb1ec38dcb5"],["/post/14.html","1787d5509db03c9ce37f98386017b782"],["/post/15.html","ea877b5a737de70f465300e0361518e8"],["/post/16.html","584b5a38bba991921b17a03243ba966e"],["/sw-register.js","5c4dbdd334d38397cdb20229f4dd72db"],["/tags/index.html","e28fb98cc1f2554515d5679dc0fb150e"],["/tags/俗语/index.html","dd519cf2697cee41f49e397e7de27da0"],["/tags/元/index.html","ec6548628514ea8852a19ff40713a400"],["/tags/唐/index.html","fd340848b8c4c3220225785915e2133f"],["/tags/图片/index.html","b0a8c2edf42742de55541cd9e6d8afd3"],["/tags/地图/index.html","78b2a4227074f6960577531d617e34d3"],["/tags/宋/index.html","20bdd40cb8182883400cc26d46f6e5e5"],["/tags/朗诵/index.html","a6928aa58208a09517748403b0305ddc"],["/tags/民间故事/index.html","1503deea9e3f3d3309512599b2c15270"],["/tags/神话故事/index.html","92977d37837247ebd03616133f617838"],["/tags/视频/index.html","85b99d774c1af16dfd804ebb1e5a6a46"],["/tags/视频/page/2/index.html","d91ec17d530e25dee01a40be90b8cae1"],["/tags/诗词/index.html","1365416086119af19e3a59b36926e47e"],["/tags/谚语/index.html","d286106da4973c9ccf996204cd882b35"],["/tags/钢琴协奏曲/index.html","a0b9d870b62cb523033e8ad0ed7652d9"],["/tags/音乐/index.html","b02565b8bb09fa3f9fe3e53137f29eeb"]];
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
