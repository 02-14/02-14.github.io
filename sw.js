/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","158b9b0efe21401d9a97df108ad38ee3"],["/archives/2023/09/index.html","a7eac3a859c3bc3db228ff690b75289d"],["/archives/2023/10/index.html","911fda2b709f3a2e2047b2c21186cc38"],["/archives/2023/11/index.html","3acc882e0b4cc89bc34e119326095bbf"],["/archives/2023/12/index.html","75a7822f14a0f741e00a391d1397ae9f"],["/archives/2023/index.html","8f0be5167a49ae0e369e771035931c93"],["/archives/2023/page/2/index.html","77bed764fb370e99a896aebc90811807"],["/archives/2024/01/index.html","aa04f099c1ba0f491a22009ee2a3a58e"],["/archives/2024/02/index.html","f231562209614043af44e1f566a63b60"],["/archives/2024/03/index.html","f2c04789e5d8d0a65015c19fa8e9c937"],["/archives/2024/index.html","b479882e8fda0222e69b9088facd0717"],["/archives/index.html","8381f0775e89af8a1ba0f7a63804acf8"],["/archives/page/2/index.html","cdf2132fe5fc30e82869289b27899dcc"],["/categories/index.html","3a62b4e6cbb618ecfd33b362e83c546d"],["/categories/图片/index.html","2af8882bbc4cde036b4f9ed2c7d518e0"],["/categories/地图/index.html","a6122b21aff34dabbe01115d094fb354"],["/categories/视频/index.html","bc4c695ea1f7da995ce380b42734645b"],["/categories/视频/朗诵/index.html","5127bfd6ced9e4d907ecae54cea9ea6b"],["/categories/视频/钢琴协奏曲/index.html","7afe34a83579c4c1eb2575c0b47519be"],["/categories/视频/音乐/index.html","dd6982f02170c56cf69a9c4070f9465e"],["/categories/诗词/index.html","72e9fe4fa0de196c9fdf589ffc72c0a3"],["/categories/诗词/元/index.html","4d6ec5c7afb4244def80ef51cc7c2fb4"],["/categories/诗词/唐/index.html","1801b8ce40063a3f3c2cfd220b740a30"],["/categories/诗词/宋/index.html","e9af3fb4ca1d81f16f6b3bcc71589106"],["/categories/谚语/index.html","165bbfa3e75844b36d4e9e2afbc72ed1"],["/categories/谚语/俗语/index.html","de4b766c71a6d541ff1da5e38941093d"],["/categories/谚语/俗语/民间故事/index.html","09847c1bec15f20aa7895c76812ca75a"],["/categories/谚语/俗语/民间故事/神话故事/index.html","40797cee8e1312cac31e2bad8e16a4b5"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","71b5d885e08f559cd42953be3c446a12"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","e7a11399e567fe796f257de2c94832ae"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","84ce32bd9b54a0d16893d884218d7e38"],["/post/00.html","d57f73dcd858417ccb890bfab78bf5c9"],["/post/01.html","e632b284fd85701f0d48a7d3fbe21b3a"],["/post/02.html","9363cd191eb64853e49792360037dd7c"],["/post/03.html","6c2089be301b3b96db4b227ab62df0e7"],["/post/04.html","5583fdb5cd10cdd077a3bce809b3726c"],["/post/05.html","5bcb6892b319a6e309a6f74c5c47fba3"],["/post/06.html","310888eaf214af9cf623dadb4257ead3"],["/post/07.html","17b7aede3d9dc8a5690fed10739ec09b"],["/post/08.html","4ba31670148bf4addd1d7172fae1dfce"],["/post/09.html","e6427f7489fdd727fa3fdbaf088df556"],["/post/10.html","c539db91449fa92d44771fc43e4c137d"],["/post/11.html","b149c9ece00dc5241e5b4b8ac1382284"],["/post/12.html","d8ce416630fbce9053b2c7e040a029bf"],["/post/13.html","a124920f6a50fdc7240e6793c97bf31c"],["/post/14.html","129b0d285d474355d0cabd2d1e441443"],["/post/15.html","bd09281a846e83532b7e1aca56ca1a81"],["/sw-register.js","14b2db8dce10040806d5632f088dc6e7"],["/tags/index.html","b7cbe76bb89986d8a678f0bfd2959bfb"],["/tags/俗语/index.html","ca5c6a86232075028b471a61956f466a"],["/tags/元/index.html","6411a43106583ec86dd5065a94bd7124"],["/tags/唐/index.html","44116a59db66d016c2a92da9ad514538"],["/tags/图片/index.html","675c5825854c2b0ab104c2e9f60904f0"],["/tags/地图/index.html","e4884e3509dc2b7fea4ff66880dc9cd5"],["/tags/宋/index.html","1f28bf51f87854c983a853cfce93928a"],["/tags/朗诵/index.html","01a089538bc0f29b86a5567a78825897"],["/tags/民间故事/index.html","b29cbce960362c53d603283e8b203c63"],["/tags/神话故事/index.html","9a9cc41246be9f344b0ae7283ae2c085"],["/tags/视频/index.html","da4e7fdbb97c8d7e4156ecdf684f2181"],["/tags/诗词/index.html","0318146c57d534ebfd3d63ce60b7b22a"],["/tags/谚语/index.html","57b7b0261ec82b86fa3cb16757815ef9"],["/tags/钢琴协奏曲/index.html","111a7d5a1ca0909338d62b95a53c9e47"],["/tags/音乐/index.html","d8fe16bcf423edffd90f8b51c84455e3"]];
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
