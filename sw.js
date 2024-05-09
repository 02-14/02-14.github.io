/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/08/index.html","326c19ebdfcdfc22fee0915971dbdb1b"],["/archives/2023/09/index.html","d4a7a2ca27fe8b9e0232690df83134e3"],["/archives/2023/10/index.html","3eeeb8c9a11bb0a61e7fd68452a12fe7"],["/archives/2023/11/index.html","11a06608ff2363cc99257cfcef47f36e"],["/archives/2023/12/index.html","99929c43a8771b4c461d3cfc40d2da6a"],["/archives/2023/index.html","fe082ad16058df5d498a35ac1903bd2c"],["/archives/2023/page/2/index.html","5f9eba838e64b0489c155f0a6cb296d8"],["/archives/2024/01/index.html","4d481d994b35e1a75ae3d0ed11e51d5e"],["/archives/2024/02/index.html","57878c58561f171dbb578fad3ae49eca"],["/archives/2024/03/index.html","c5ceee090cb00acd4d7445c6db8aafa3"],["/archives/2024/index.html","a362166262594a39668cc895fd1f2ce3"],["/archives/index.html","db6c7f2ae012f71fbcee4dc176ca9771"],["/archives/page/2/index.html","e7a319b471399d8eb4b2de9d3bb3bdaf"],["/categories/index.html","c76da07d529f7c47190f5ae7c868411f"],["/categories/图片/index.html","28cd6e5abc0470bc387e6ec960fc900c"],["/categories/地图/index.html","5a47e2ef13c59a62a354f5058308cfe0"],["/categories/视频/index.html","9443efb11d8c7954759e5a4b2b24c871"],["/categories/视频/page/2/index.html","21f3d983baba3eb5cf8858002c3ab360"],["/categories/视频/朗诵/index.html","d4e3dd620ea604accb1ad55fccd4b29f"],["/categories/视频/钢琴协奏曲/index.html","fca61936dd1d7d7881141befddfcd30d"],["/categories/视频/音乐/index.html","dbfb0f083c2637c41eef0f6d3a7f648b"],["/categories/诗词/index.html","ae63545a817cf99a342fb096045aab0d"],["/categories/诗词/元/index.html","2977b6080e191c894f802e59ecd21972"],["/categories/诗词/唐/index.html","9f1557d4dd489da4e5a7a6adef0d2fdc"],["/categories/诗词/宋/index.html","2732e008ae01155ee7fa5443b530fc95"],["/categories/谚语/index.html","2be20910c2130977b7af21adcd21f300"],["/categories/谚语/俗语/index.html","e199b0d2fa6052b6aaba06730779c2d3"],["/categories/谚语/俗语/民间故事/index.html","6ffd2d757efffe607083a97507804d03"],["/categories/谚语/俗语/民间故事/神话故事/index.html","3b0d9d3f94c264ba0c91e1ad3bb3d59f"],["/css/index.css","8a51541f6252830e76933f098be7e69f"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/mouse.css","a60886367992a4c04e0cd9f505ef1501"],["/css/toumi.css","7730009b98608e13cb4ff7ad5d831806"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","dd3e0c857855807b8489063e10e04fe8"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1b886916f432b8d611fb48cfd4f93013"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","ffc4f9ad8ed268442ac4a30dc4e44827"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","84ae37027ae8fed1da33bfb75bd1188b"],["/link/index.html","5666ad0d0b33d184781549cc2cc6c04e"],["/live2d-widget/README.html","cf97f9dcb4f5a59557bb99b2700ece6b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","9a7d7f0060ebc4174cb3d6a6eb14b690"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/page/2/index.html","3d04d32dce4a90dde6179928fd286af6"],["/post/00.html","873a6d7a50ffa5d5205871a09c36498f"],["/post/01.html","ab69937bdb710626e3e58ec809e8ab8b"],["/post/02.html","e96f09df0e98cd9567b4b2c495bcdbcc"],["/post/03.html","44c5f004b59bb6186ff7ddfdff3fb665"],["/post/04.html","bb76b5e6db802760f926f80dd5c67304"],["/post/05.html","bd2a20aca34cbf087273bb154e2782d4"],["/post/06.html","f030904efef64838922dade4cfbfc23f"],["/post/07.html","1de961355d1da046c8017b0f5226e5bb"],["/post/08.html","7a3050e9b1fe03d7f5b32ccd60062a3e"],["/post/09.html","ce56d60ae75126747159f32c66438257"],["/post/10.html","1f0da6895918b913c5a9e39db1fc0a7b"],["/post/11.html","f0da49e0ec36d81fc1e10580d3afff10"],["/post/12.html","40996db520fd7895d566f92d58f9a24d"],["/post/13.html","64734549d52347a7c51f20462898db4d"],["/post/14.html","14762f996517e60b78ebba2daecae599"],["/post/15.html","5d0f7ec0baa45d16fb7c4ada9c8182ed"],["/post/16.html","762625751ae94af126dc788b6f99a5ee"],["/sw-register.js","4205b7e0447155f39c23beb139c5a3af"],["/tags/index.html","470952cc0689401fd45deeb404cd2780"],["/tags/俗语/index.html","713b4dead2aead961be3d962cc2657c7"],["/tags/元/index.html","8de0e8ede353700e949261125bd1c321"],["/tags/唐/index.html","e00dfdb9312071b2cc63c57ccc0d72b1"],["/tags/图片/index.html","0e630ec02f9b6df5891df32abba675ad"],["/tags/地图/index.html","15eed9f7d7388de8f08e0d3d2d957e7d"],["/tags/宋/index.html","f294e3af40e19abd5511b6fe92ea3e4e"],["/tags/朗诵/index.html","507292db7496b12872200d303ee3f1c1"],["/tags/民间故事/index.html","8c3636c7213a8997266299d0ec9d8b88"],["/tags/神话故事/index.html","0f810fca21762909d99e03ebeb6c032c"],["/tags/视频/index.html","574782f14d174fbf7e17b661776e8f33"],["/tags/视频/page/2/index.html","44b41df4d392b35e61aafc07b01724e2"],["/tags/诗词/index.html","c0a3928cbddcf3e9d1e363f310c2dce9"],["/tags/谚语/index.html","e1ef7d4e992f4bba49df1d0ed4138098"],["/tags/钢琴协奏曲/index.html","48f1a5b81d5345f4e3982370660456c2"],["/tags/音乐/index.html","940f87a5eea63162a5d9c6b415b2c0fc"]];
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
