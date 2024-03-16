/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","376ea06c71b03a5cfde0a71679f6cd26"],["/archives/2023/09/index.html","f784a35af01f5a7ec9dde7d4e199ae66"],["/archives/2023/10/index.html","97f1a1364628d859f05f27a9c1a6a272"],["/archives/2023/11/index.html","3f681467cb61d33764c5805e2603dd7e"],["/archives/2023/12/index.html","3fcf8566b0561587666b2fba536d2e0c"],["/archives/2023/index.html","f9657fcaf54e48806606e318e839c9e9"],["/archives/2023/page/2/index.html","478ebda4ee3e81dd369522fedba02d80"],["/archives/2024/01/index.html","580a25abd43a71132e0fcfa2cb77ef6c"],["/archives/2024/02/index.html","a844ea0c4ef5f840290cc51039882a20"],["/archives/2024/03/index.html","10ca027c87b14cd0cc956475dff85fa3"],["/archives/2024/index.html","d4f92da9126bf43eb8ad991ba016df30"],["/archives/index.html","498bcb4e1cb6049345ecfd706d15cd81"],["/archives/page/2/index.html","cac6bf4f17b7eb827495352c59f2ad48"],["/categories/index.html","e3da98a5b4e89892949e1e9a8468a775"],["/categories/图片/index.html","f970b47aaac1d5ea05c4482eb77e3451"],["/categories/地图/index.html","eb7fde257f8fa2da917b1d76620fd908"],["/categories/视频/index.html","d6a066d003054730a0d41f610a0714f7"],["/categories/视频/page/2/index.html","0b6093719ead7225cb2448be983326fc"],["/categories/视频/朗诵/index.html","428836702679a4cda716a2a772fff4d7"],["/categories/视频/钢琴协奏曲/index.html","3248bad1dcf07ad2b9a79d53b73ada8b"],["/categories/视频/音乐/index.html","67a086b0e785a8d40cc46b9f7a897172"],["/categories/诗词/index.html","af49b74dd49d4cfa9cb066e526ecfdf4"],["/categories/诗词/元/index.html","3e1d6544e5901e115ae7cfe8c76e9d46"],["/categories/诗词/唐/index.html","ea97b0dcca895d74085690c22af0f8de"],["/categories/诗词/宋/index.html","1b6fb204c7b883b3b9ca122db5a380a4"],["/categories/谚语/index.html","cd179775fcea141e3650434dd6fdf28d"],["/categories/谚语/俗语/index.html","65cf446b087070f8723bd80227c132c4"],["/categories/谚语/俗语/民间故事/index.html","d0a9f1008efeedfff9694b1e66395ebb"],["/categories/谚语/俗语/民间故事/神话故事/index.html","842b9a68c931d64777c1e59c91837d3e"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b91132b3b9bedb48219a4fa8b1a8100b"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","53ecc5775cb82150a44f92fea7528a3e"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","72adab91b43a7c94b2f4706f931ee3e8"],["/post/00.html","603af00cc0277076e712cb5ab04500e6"],["/post/01.html","4696abf6b0874b20cdfe26b96f8ebb35"],["/post/02.html","d5f400b074ee55936d29e99dc07aee18"],["/post/03.html","12a30b51394fae06ac820687f310f9db"],["/post/04.html","65f018118d4c9a258a9318e4c2e1d5fa"],["/post/05.html","be79be6bd69783cbeada3acb2ba3d8f1"],["/post/06.html","abf702d6ecd3aaa536e9833f1375ac8f"],["/post/07.html","5b96fdd3c68b23d31618ccb2c096e49f"],["/post/08.html","ddced663c02c8913e12c6442479a48f7"],["/post/09.html","9ed3298a0e0556d1f4514b3489fc3f5f"],["/post/10.html","5d4a02ab4efba4695c5c29f1954394c0"],["/post/11.html","489ebfe71f7b8910f0004f8f4b178dfd"],["/post/12.html","742c785a406ddad369c2616440edf50f"],["/post/13.html","494723d4f381c02f56cf7119aab8f5bd"],["/post/14.html","1cc49cf9dd32579d1a372d5ce642dec9"],["/post/15.html","ea877b5a737de70f465300e0361518e8"],["/post/16.html","b28985a56c63f8bc4da67263b17d5c63"],["/sw-register.js","5d429043962ba64a3d6d739f4b37dc4e"],["/tags/index.html","66b7fd11fbf72ca3e35d3e71e0415ee8"],["/tags/俗语/index.html","a09d2d3bdeab6a17cb4c18078072b1a5"],["/tags/元/index.html","9ac4a3275571f665a1529a45c25f832b"],["/tags/唐/index.html","87265c894eca4f48c22bf46534a5e703"],["/tags/图片/index.html","3048d31dce57a41482912bf710a56cac"],["/tags/地图/index.html","67c18abd64213bfc9acca77f78581a36"],["/tags/宋/index.html","e8eec99ac62809470d46f2c19f46e078"],["/tags/朗诵/index.html","90c53cfeaca5e4795bc591d7fba36804"],["/tags/民间故事/index.html","4443ec729bf2f79d3746e573b2b4b0d6"],["/tags/神话故事/index.html","3883b0ae64b2abed2eb65b4ad78ade54"],["/tags/视频/index.html","9db28e333831bcfb2a4718a3c7457f41"],["/tags/视频/page/2/index.html","381442294116ae56612da64f59d63bce"],["/tags/诗词/index.html","01dc225936f8d555bfd77f17318ef3c2"],["/tags/谚语/index.html","bbdacf34849924758b740cc427d571c0"],["/tags/钢琴协奏曲/index.html","51a6ed44e19cd75437fd7c0747e5e48a"],["/tags/音乐/index.html","52d5158c659af86a3134a40cff56b3a6"]];
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
