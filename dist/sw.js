if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-1409041e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@files-ui/react-BjM7iZ0W.js",revision:null},{url:"assets/axios-DmypytPv.js",revision:null},{url:"assets/ButtonLoading-FWEtvIlg.js",revision:null},{url:"assets/card-DVXZarFv.js",revision:null},{url:"assets/clock-COasWJFp.js",revision:null},{url:"assets/eye-zp0oVch6.js",revision:null},{url:"assets/FileUpload-BRfmYjBg.js",revision:null},{url:"assets/index-5RhJcgKW.js",revision:null},{url:"assets/index-B0f5DXkQ.js",revision:null},{url:"assets/index-B2PUZvn8.js",revision:null},{url:"assets/index-BapC-Uta.js",revision:null},{url:"assets/index-BbxVz_s_.js",revision:null},{url:"assets/index-BjtTakDP.js",revision:null},{url:"assets/index-BNiwTR_N.css",revision:null},{url:"assets/index-BzM8ZkuP.js",revision:null},{url:"assets/index-C18X23EY.js",revision:null},{url:"assets/index-CEfRBOAX.js",revision:null},{url:"assets/index-CF4cWIMx.js",revision:null},{url:"assets/index-CI8kXYbj.js",revision:null},{url:"assets/index-CoJVdVEQ.css",revision:null},{url:"assets/index-CQ9NwP_1.js",revision:null},{url:"assets/index-CrmpV7lb.js",revision:null},{url:"assets/index-CSvoLKbH.js",revision:null},{url:"assets/index-CZBesdjI.js",revision:null},{url:"assets/index-D_CSiGvq.js",revision:null},{url:"assets/index-D0HiWr7s.js",revision:null},{url:"assets/index-D5ShKIGI.js",revision:null},{url:"assets/index-DIH2l3Z6.js",revision:null},{url:"assets/index-DLrb6CLx.js",revision:null},{url:"assets/index-DtBoYNRZ.js",revision:null},{url:"assets/index-DVQmev5d.js",revision:null},{url:"assets/index-DwFvpT3w.js",revision:null},{url:"assets/index-DzJfQ_hR.js",revision:null},{url:"assets/index-h5VHpIk7.js",revision:null},{url:"assets/index-hu2KJtAj.js",revision:null},{url:"assets/index-P2Suib0b.js",revision:null},{url:"assets/index-sknVRSvG.js",revision:null},{url:"assets/index-uHiHYAp0.js",revision:null},{url:"assets/index-yGuL7n0r.js",revision:null},{url:"assets/input-C1690R0g.js",revision:null},{url:"assets/moment-BjLXg0w5.js",revision:null},{url:"assets/pencil-xM5GeoVf.js",revision:null},{url:"assets/react-BqE6rHzI.js",revision:null},{url:"assets/resizeImage-nNayW6hE.js",revision:null},{url:"assets/RHFPasswordField-BPMCXm0Z.js",revision:null},{url:"assets/RHFTextArea-DV_wYpWf.js",revision:null},{url:"assets/RHFTextField-BY2EefmP.js",revision:null},{url:"assets/router-Bu5b4_LN.js",revision:null},{url:"assets/select-BvijWda6.js",revision:null},{url:"assets/separator-Bm8N2Vsf.js",revision:null},{url:"assets/services-KQnp_8oA.js",revision:null},{url:"assets/share-DAa9OCUl.js",revision:null},{url:"assets/square-pen-CszWQdUS.js",revision:null},{url:"assets/table-DqzbnUom.js",revision:null},{url:"assets/tabs-DFxMZg6s.js",revision:null},{url:"assets/trash-DhaVNZCh.js",revision:null},{url:"assets/useTimer-B_7DHncw.js",revision:null},{url:"assets/yup-D4aY0Xxp.js",revision:null},{url:"index.html",revision:"99bc2cc328423e4afc518faa062b475c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c975cf1d2d6f2007cb887ecad31b57ed"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|json)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET")}));
