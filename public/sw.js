if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5YUi2Q_ILeLBi3ek0EVXf/_buildManifest.js",revision:"9a7f5872eaa47ce89fac22a7d700ce4b"},{url:"/_next/static/5YUi2Q_ILeLBi3ek0EVXf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850-7abfc9e6366389e2.js",revision:"7abfc9e6366389e2"},{url:"/_next/static/chunks/545f34e4-c1a22c8b95d62358.js",revision:"c1a22c8b95d62358"},{url:"/_next/static/chunks/9a1974b2-3ba9132de6a2bfe7.js",revision:"3ba9132de6a2bfe7"},{url:"/_next/static/chunks/d64684d8-2b045010ffecac16.js",revision:"2b045010ffecac16"},{url:"/_next/static/chunks/framework-7dc8a65f4a0cda33.js",revision:"7dc8a65f4a0cda33"},{url:"/_next/static/chunks/main-b7722eee6611ceff.js",revision:"b7722eee6611ceff"},{url:"/_next/static/chunks/pages/404-82d0810eb962a703.js",revision:"82d0810eb962a703"},{url:"/_next/static/chunks/pages/_app-85692e9206836336.js",revision:"85692e9206836336"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/about-us-96f282e755733725.js",revision:"96f282e755733725"},{url:"/_next/static/chunks/pages/contact-745f22c8bf206328.js",revision:"745f22c8bf206328"},{url:"/_next/static/chunks/pages/index-0915742d230b99c9.js",revision:"0915742d230b99c9"},{url:"/_next/static/chunks/pages/result/%5B...search%5D-a3f522336c80e7b8.js",revision:"a3f522336c80e7b8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/2ed2c57991f7b553.css",revision:"2ed2c57991f7b553"},{url:"/_next/static/css/9a6300306637be29.css",revision:"9a6300306637be29"},{url:"/_next/static/css/cccc532763d9564a.css",revision:"cccc532763d9564a"},{url:"/_next/static/css/cd91880ef7d5784e.css",revision:"cd91880ef7d5784e"},{url:"/_next/static/css/f51b0224f6fc27d5.css",revision:"f51b0224f6fc27d5"},{url:"/_next/static/media/logo.8e295a42.svg",revision:"b2850dc139ca7516874c0fe5c9d14c15"},{url:"/bg-1.jpg",revision:"dca4b416f354df4fc4053f5207d0e335"},{url:"/bg-2.jpg",revision:"f52381639ddf6dbef286c7d5d359d43b"},{url:"/bg-3.jpg",revision:"da95c5e65895fb73757a03fdb9c57dd8"},{url:"/bg-4.jpg",revision:"41e39adf149147b4d43f730863b4ccdc"},{url:"/bg-5.jpg",revision:"636f894b56ed74956bfbabf21aee3dfa"},{url:"/bg-6.jpg",revision:"7ea0bf8eb905a5013e160d6e7e34111a"},{url:"/icon-192x192.png",revision:"626c4df6e7693a53ff83416e5f573643"},{url:"/icon-256x256.png",revision:"18c4872c356588b6ac99766586a54c26"},{url:"/icon-384x384.png",revision:"1d832c7848e9c46fe9e960a28a979a6f"},{url:"/icon-512x512.png",revision:"0e73c7d320de3546bcb371fadb5822c3"},{url:"/logo.svg",revision:"b2850dc139ca7516874c0fe5c9d14c15"},{url:"/manifest.json",revision:"976b55e478923022e095bb255367c8f3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));