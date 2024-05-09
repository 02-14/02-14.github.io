/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","02d0a6b3a6abb958cdbe1cb60e87818f"],["/archives/2023/09/index.html","dc7a45bd979e30f23e43581f22aea4fe"],["/archives/2023/10/index.html","b8654014637930494ddd8dfd3fea7033"],["/archives/2023/11/index.html","abc2a30852772b9c8d4d087f0c3b844f"],["/archives/2023/12/index.html","6130f7bd1c5252c459e871452ed5f1ee"],["/archives/2023/index.html","2bf1eb74874f22ed505105fc6dda26d1"],["/archives/2023/page/2/index.html","437421df691a207fec3cef32e09ae845"],["/archives/2024/01/index.html","ab1a734d6fcd17d55ae7e796931b5f4e"],["/archives/2024/02/index.html","81cd790b8e0f19e52c7c304d054be776"],["/archives/2024/03/index.html","f16c171af6b39d27e367125029a9e846"],["/archives/2024/index.html","f793ddf14d368a86a4b52885892d4ff0"],["/archives/index.html","74ba2e9917688ab3c370c9d56556e570"],["/archives/page/2/index.html","b96eff7b4dc36e879e38981cf3891991"],["/categories/index.html","3c271863319ebe3f2456ee3a1585178a"],["/categories/图片/index.html","abffddaf74cd8694e801774d4a026c90"],["/categories/地图/index.html","e8f9e3fb443ef2b7f8869e2fb88da994"],["/categories/视频/index.html","afd72c694ed0270e2d91d050cd059bb2"],["/categories/视频/page/2/index.html","d734c4586c824215e4cd01d52297d6c7"],["/categories/视频/朗诵/index.html","9b716992287aa4618e0f0167b2655e46"],["/categories/视频/钢琴协奏曲/index.html","2ae319e1dedf38b44af527f0b35bbd62"],["/categories/视频/音乐/index.html","47fac468737bf7ea578caff1bfcadcae"],["/categories/诗词/index.html","f2eb911d2ebf7e6cb1260302cdadd1ce"],["/categories/诗词/元/index.html","0abec5e90006d0f9fe29c5ccf69133eb"],["/categories/诗词/唐/index.html","a7071cc42f000b3f04886ef4b2830516"],["/categories/诗词/宋/index.html","0114764acb629f8e2683ddca0e7450fc"],["/categories/谚语/index.html","23f513b88b1dd82d3cb096040f342712"],["/categories/谚语/俗语/index.html","2423e59a177f37eeab9c526ea1be2e79"],["/categories/谚语/俗语/民间故事/index.html","f957c0426cc5ecd1e372160db3851d07"],["/categories/谚语/俗语/民间故事/神话故事/index.html","11d7038b77db020836f876e91cd024f9"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","94920d06ebb9ef0b26d261d5b12faf39"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","a843c9ca015411c56e85345b780699d4"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","5de61388136874c1f5454e2eb82f4485"],["/post/00.html","e4e15201e9f564a09fb669a0f950e62a"],["/post/01.html","a1da2aa46304be2e328c51e7bff62455"],["/post/02.html","14835852b2038330226f884e6ff32d58"],["/post/03.html","a42fd682e0a182d46b5547894dc651bd"],["/post/04.html","92fea7ee1bf9add2ca8c5297e6cc45a0"],["/post/05.html","4748a3202244d09053afc14d0adfa50a"],["/post/06.html","5bd82c7e3b9f260fb9837ba4a9f96cd4"],["/post/07.html","d4d67d22727a3537a2256c90bb686c87"],["/post/08.html","b0ff3d5d3789b20b1f35f771c638ffa5"],["/post/09.html","de66e09713eb7cd6f203fc352d800d99"],["/post/10.html","30d6d40787abe3dd527bac29444661b0"],["/post/11.html","53214a847c5a315b8fd4025cba961e86"],["/post/12.html","469f82420b63f5cbd3bf8bdf2bd34200"],["/post/13.html","205421369ed3e01e77a292ffa9a21261"],["/post/14.html","88de0f9e2535e8f9f16f8c0042a7f1c8"],["/post/15.html","ea263681464f17d1159656c201e3d5ef"],["/post/16.html","de1ce9788cc55f3ea2b926ca5aa3e628"],["/sw-register.js","8e2cdfa0b3fc8052861faa9923defb40"],["/tags/index.html","3dc1f8fc45341fa8082f39e89608764d"],["/tags/俗语/index.html","2f2bcafa8a23317fd092324e13e7dd6a"],["/tags/元/index.html","83c08fe695a830de7bc8d3d617b1c701"],["/tags/唐/index.html","b50b7727b4c96a585284d3ca91820e37"],["/tags/图片/index.html","09a7df2d62c546f38f667562085762b4"],["/tags/地图/index.html","89214213fd7a599b5a1b64055dcb155e"],["/tags/宋/index.html","1308292ff88630d96529001d2d4694c2"],["/tags/朗诵/index.html","79802dfdbbe9500a6683167ef2e76272"],["/tags/民间故事/index.html","1909c40b1fc7e48f56bc60aaf18e7104"],["/tags/神话故事/index.html","b08c04a63bbc6e6b991c2026d8c34330"],["/tags/视频/index.html","6c01ff7c9519aa2eb391887d84cab43f"],["/tags/视频/page/2/index.html","342e73e02177c0ae1449dfef57fed247"],["/tags/诗词/index.html","71e1d69d7f3ee130ec826853cb9f01aa"],["/tags/谚语/index.html","4df4b26c66897ce86b910db6fb239299"],["/tags/钢琴协奏曲/index.html","0ed272f6a4676a53dd570a4b632ee95a"],["/tags/音乐/index.html","0dc69373c2dcdf7a4626f94491b2dcf4"]];
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
