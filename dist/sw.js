if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-1409041e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@files-ui/react-BjM7iZ0W.js",revision:null},{url:"assets/axios-DmypytPv.js",revision:null},{url:"assets/ButtonLoading-B_WHVS-p.js",revision:null},{url:"assets/card-DPWDodGj.js",revision:null},{url:"assets/clock-DT6CpZEb.js",revision:null},{url:"assets/eye-BMSB5R-4.js",revision:null},{url:"assets/FileUpload-CwQy4bWk.js",revision:null},{url:"assets/index-B0F_hJyb.js",revision:null},{url:"assets/index-B4igjTwH.js",revision:null},{url:"assets/index-b99JaS6C.js",revision:null},{url:"assets/index-BI-MECRV.js",revision:null},{url:"assets/index-BNiwTR_N.css",revision:null},{url:"assets/index-BodrlHh3.js",revision:null},{url:"assets/index-Bp897OkX.js",revision:null},{url:"assets/index-Bz9V4I8V.js",revision:null},{url:"assets/index-C4PZhlmm.js",revision:null},{url:"assets/index-C5uchILL.js",revision:null},{url:"assets/index-C6AkrgL3.js",revision:null},{url:"assets/index-C9d5KN1f.js",revision:null},{url:"assets/index-CebYDiqQ.js",revision:null},{url:"assets/index-CF1Onpmc.js",revision:null},{url:"assets/index-CfjV3MjU.js",revision:null},{url:"assets/index-Cn45EtSu.js",revision:null},{url:"assets/index-CoJVdVEQ.css",revision:null},{url:"assets/index-CzcgtcC1.js",revision:null},{url:"assets/index-D9Ct-EuU.js",revision:null},{url:"assets/index-DaYfcLvr.js",revision:null},{url:"assets/index-DeZzKTfj.js",revision:null},{url:"assets/index-DpUliH2g.js",revision:null},{url:"assets/index-DPvHYD7b.js",revision:null},{url:"assets/index-DwRN2R5H.js",revision:null},{url:"assets/index-JD7nJyhB.js",revision:null},{url:"assets/index-LU09Bdun.js",revision:null},{url:"assets/index-M2Z4E-eZ.js",revision:null},{url:"assets/index-PHqrKN3T.js",revision:null},{url:"assets/index-qhjLkjHA.js",revision:null},{url:"assets/index-sR_aBcCf.js",revision:null},{url:"assets/index-xgBfWHSS.js",revision:null},{url:"assets/index-Z9ewVQ69.js",revision:null},{url:"assets/input-TM7mlVGU.js",revision:null},{url:"assets/moment-BjLXg0w5.js",revision:null},{url:"assets/pencil-Bq7AkEml.js",revision:null},{url:"assets/react-BqE6rHzI.js",revision:null},{url:"assets/resizeImage-nNayW6hE.js",revision:null},{url:"assets/RHFPasswordField-DWwvI_LA.js",revision:null},{url:"assets/RHFTextArea-CMT8vDwI.js",revision:null},{url:"assets/RHFTextField-BL_1-xbR.js",revision:null},{url:"assets/router-Bu5b4_LN.js",revision:null},{url:"assets/select-D9LPhT5u.js",revision:null},{url:"assets/separator-CaAKsijh.js",revision:null},{url:"assets/services-KQnp_8oA.js",revision:null},{url:"assets/share-DEM5Tvk_.js",revision:null},{url:"assets/square-pen-CNvH4-TY.js",revision:null},{url:"assets/table-DIEmJ8Vu.js",revision:null},{url:"assets/tabs-CbLG7iO1.js",revision:null},{url:"assets/trash-CG7SzPf1.js",revision:null},{url:"assets/useTimer-B_7DHncw.js",revision:null},{url:"assets/yup-CkPL97GY.js",revision:null},{url:"index.html",revision:"634378a818d42d8e5b40c94758e890a3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c975cf1d2d6f2007cb887ecad31b57ed"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|json)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET")}));
