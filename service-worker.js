if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,i,o)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const s={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return c;case"module":return s;default:return e(r)}})).then(e=>{const r=o(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-6cfeaca5"],(function(e){"use strict";importScripts("js/skip-waiting.js"),e.setCacheNameDetails({prefix:"input-recorder"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/recorder-public/css/about.bc30f474.css",revision:"79a74c311d8e816b835236f8d3e81898"},{url:"/recorder-public/css/app.f57ac41b.css",revision:"ef01a081a5da98e6ae1b4acee9aa6c78"},{url:"/recorder-public/css/recorder.840ccb03.css",revision:"7ab1de2d771890e31a2c72401810d853"},{url:"/recorder-public/css/replayer.28c91b42.css",revision:"86e38eb7f6c317dd946856c2d39a723f"},{url:"/recorder-public/css/upload.1c5f6272.css",revision:"366fae93b8fc55b54208ba8b5cbb7deb"},{url:"/recorder-public/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/recorder-public/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/recorder-public/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/recorder-public/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/recorder-public/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/recorder-public/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/recorder-public/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/recorder-public/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/recorder-public/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/recorder-public/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/recorder-public/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/recorder-public/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/recorder-public/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/recorder-public/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/recorder-public/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/recorder-public/img/icons/safari-pinned-tab.svg",revision:"f22d501a35a87d9f21701cb031f6ea17"},{url:"/recorder-public/index.html",revision:"6c54927fadd447e4f77b33bacab6c28e"},{url:"/recorder-public/js/about.df37a773.js",revision:"f30e75f8d22252d2ab56f3add1e30595"},{url:"/recorder-public/js/app.6fb42b3b.js",revision:"02b5033cb81b9ca77c98b03858989e83"},{url:"/recorder-public/js/chunk-vendors.85890064.js",revision:"056684beb232ca15475f569da850a141"},{url:"/recorder-public/js/recorder.0cd79d5f.js",revision:"3314f1a3bf7f2bc98b1bc24fd74fda87"},{url:"/recorder-public/js/replay.5f45349e.js",revision:"55a3c82d36a22536d0930b6e7e90028e"},{url:"/recorder-public/js/replayer.d8b67859.js",revision:"73fa03758435e31587c3ae3098052077"},{url:"/recorder-public/js/scenes.ea91600e.js",revision:"18660557f09e21cd39202b7acc1a7ea5"},{url:"/recorder-public/js/skip-waiting.js",revision:"f9429ef9ae0a075d62ad46995a899d89"},{url:"/recorder-public/js/upload.420353a7.js",revision:"ce28529abab89a3b2c783d921ac5555c"},{url:"/recorder-public/manifest.json",revision:"b236fc42961dc16025aa236390669948"},{url:"/recorder-public/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
