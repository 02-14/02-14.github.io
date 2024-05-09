/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","46d245bdf6f16eef65bb75f182c5db0b"],["/archives/2023/09/index.html","c2303df8e502e65941f52b2adec9d874"],["/archives/2023/10/index.html","5078fe3b1d8c35735afd6b0a52c07727"],["/archives/2023/11/index.html","b9ce01191fbddcb5eea8d1ad2cae7863"],["/archives/2023/12/index.html","b45f036d86d73096cce3128f0aab6339"],["/archives/2023/index.html","95ad388af25e52303f2575f9e244f440"],["/archives/2023/page/2/index.html","356947da1c69dd1f1bace08c23927e53"],["/archives/2024/01/index.html","d8588a0cc36be385f40b0948207fd100"],["/archives/2024/02/index.html","adc044f0624eff698ed857dc788177bd"],["/archives/2024/03/index.html","78e3cc583ea4feae48a9e9d788c53cda"],["/archives/2024/index.html","1bf959500b7107f1e4241daa9268aece"],["/archives/index.html","44b99e14c918e3ff67a857d1fe82199d"],["/archives/page/2/index.html","f3532efdfe7469fc31c6490cf2783c01"],["/categories/index.html","cd2550713f940a49e8b126f37e1f5f0b"],["/categories/图片/index.html","31ec5cbc48e847aa8e0149ad9414e6b6"],["/categories/地图/index.html","a27af2d22734c48b2ccf2db9dd7955c1"],["/categories/视频/index.html","aeec1ef4082bb0608518eac52e019a52"],["/categories/视频/page/2/index.html","d884866d4d03204dd399136680ace7eb"],["/categories/视频/朗诵/index.html","fbf8f37cf3c98acc157a03bf297b352d"],["/categories/视频/钢琴协奏曲/index.html","2f1141c9275027a2174da81e0e037072"],["/categories/视频/音乐/index.html","4d344c0b902720459bb053fb700efc46"],["/categories/诗词/index.html","6b00f9e8b0a50ce26fc7190ec382c524"],["/categories/诗词/元/index.html","c9764e383182efa9b332c0550d4edddc"],["/categories/诗词/唐/index.html","04d9bf029d88cc88a12b114999fb8ba0"],["/categories/诗词/宋/index.html","d79fdae2650242c9062d521e2e807c4e"],["/categories/谚语/index.html","5493ea0e92f6b0848faf12d57a0ad552"],["/categories/谚语/俗语/index.html","b831db01d1ac13106f8b09ae8d7571f0"],["/categories/谚语/俗语/民间故事/index.html","92aeccc7b59a88a051d6a1d00f2af63f"],["/categories/谚语/俗语/民间故事/神话故事/index.html","d7940d3c00aa01aae6c3b72f2e1673be"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","06e5bc8ace9d95af3dc3afaead6e90ae"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","f272af093d52bd1907a9d244d9c6167d"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","7477d924bf6a1715b593fdee25ee5996"],["/post/00.html","873a6d7a50ffa5d5205871a09c36498f"],["/post/01.html","ab69937bdb710626e3e58ec809e8ab8b"],["/post/02.html","fda35934832a16817c08a8347255eb39"],["/post/03.html","a121616ec57138b1f5d078267aaf666c"],["/post/04.html","ffc0097f993dde28dc3957a9a94b2b22"],["/post/05.html","cc42be1a553007ae790103f759631685"],["/post/06.html","9c339be89a9607ee96d1f1e7c946191b"],["/post/07.html","c8eea315b5d1ba7f254c2929420265f0"],["/post/08.html","a7ca354faad9b636d15f4281eca17f84"],["/post/09.html","ce56d60ae75126747159f32c66438257"],["/post/10.html","1f0da6895918b913c5a9e39db1fc0a7b"],["/post/11.html","f0da49e0ec36d81fc1e10580d3afff10"],["/post/12.html","40996db520fd7895d566f92d58f9a24d"],["/post/13.html","64734549d52347a7c51f20462898db4d"],["/post/14.html","14762f996517e60b78ebba2daecae599"],["/post/15.html","5d0f7ec0baa45d16fb7c4ada9c8182ed"],["/post/16.html","762625751ae94af126dc788b6f99a5ee"],["/sw-register.js","c358644974d905e7c6484db2f4b3094b"],["/tags/index.html","4edceb8a6fb573f56390ee2299e8e015"],["/tags/俗语/index.html","c6a29e6f43925cd9ec2a2b2443011256"],["/tags/元/index.html","f415f9037cf638f8049bae53c70ea97e"],["/tags/唐/index.html","81d19af4dfe35615eda62a4119087ec2"],["/tags/图片/index.html","c05e6b6dd1d72053938a5c503019fe2b"],["/tags/地图/index.html","495f2e707ef90ecf9d42ae1efc7d6607"],["/tags/宋/index.html","cdb7e9482045c88f539fafd2266e1439"],["/tags/朗诵/index.html","7f01e5e1d694e4156936081d955af87f"],["/tags/民间故事/index.html","2b2aeb621ed11201b1bd5e2787e0e774"],["/tags/神话故事/index.html","9b3625670ea80c9eea2b95bcd9f2bbfb"],["/tags/视频/index.html","2bd7dc24fec1d6f7d3fd8c544df02bda"],["/tags/视频/page/2/index.html","7a45261a3555db38c1e83c81d6f01165"],["/tags/诗词/index.html","3ac116ecac1c5947475e0f58694f6251"],["/tags/谚语/index.html","c8545f1b06d46c059010ab79b804aefa"],["/tags/钢琴协奏曲/index.html","83e71d654b9fab559f5f7f7d74cbed24"],["/tags/音乐/index.html","ac994adbc35f7bb52680230aa4d864ca"]];
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
