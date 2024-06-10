var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function i(e){try{s(r.next(e))}catch(e){l(e)}}function o(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,l,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,n=0,l=t.length;n<l;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),l=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=r(require("dayjs")),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function r(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),r=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",n=parseInt(r,10);if(!r)return e;if(u(e,["detik","segundo","second","วินาที"]))a.subtract(n,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a.subtract(n,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a.subtract(n,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a.subtract(n,"days");else if(u(e,["week","semana"]))a.subtract(n,"week");else if(u(e,["month","mes"]))a.subtract(n,"month");else{if(!u(e,["year","año"]))return e;a.subtract(n,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(1+a),this.options=e.options,this.filters=e.filters}return r.prototype.translateDragontea=function(e){if("dragontea"===this.id){var t=(0,l.load)(e.html()||""),r=t.html()||"";r=(r=r.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(r),e.find(":not(:has(*))").each((function(e,r){var n,l=t(r),i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=l.text().normalize("NFD").split(""),u=a([],s,!0).map((function(e){var t=e.normalize("NFC"),a=i.indexOf(t);return-1!==a?o[a]+e.slice(t.length):e})).join("");l.html((null===(n=l.html())||void 0===n?void 0:n.replace(l.text(),u).replace("\n","<br>"))||"")}))}return e},r.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},r.prototype.getCheerio=function(a,r){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=r)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=l.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),s=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},r.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,r){var n=e(r).find(".post-title").text().trim(),l=e(r).find(".post-title").find("a").attr("href")||"";if(n&&l){var i=e(r).find("img"),o={name:n,cover:i.attr("data-src")||i.attr("src")||i.attr("data-lazy-srcset"),path:l.replace(/https?:\/\/.*?\//,"/")};t.push(o)}})),t},r.prototype.popularNovels=function(a,r){var n=r.filters,l=r.showLatestNovels;return e(this,void 0,void 0,(function(){var e,r,i,o,s,u;return t(this,(function(t){switch(t.label){case 0:for(r in e=this.site+"/page/"+a+"/?s=&post_type=wp-manga",n||(n=this.filters||{}),l&&(e+="&m_orderby=latest"),n)if("object"==typeof n[r].value)for(i=0,o=n[r].value;i<o.length;i++)s=o[i],e+="&".concat(r,"=").concat(s);else n[r].value&&(e+="&".concat(r,"=").concat(n[r].value));return[4,this.getCheerio(e,!1)];case 1:return u=t.sent(),[2,this.parseNovels(u)]}}))}))},r.prototype.parseNovel=function(a){var r;return e(this,void 0,void 0,(function(){var e,u,c,h,p,v,d,f,b=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(u={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content").text().trim();switch(t){case"Genre(s)":case"Género(s)":case"التصنيفات":u.genres=a;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":u.author=a;break;case"Status":case"Estado":u.status=a.includes("OnGoing")||a.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),e("div.summary__content .code-block,script").remove(),c=e("div.summary__content")||e("#tab-manga-about")||e('.post-content_item h5:contains("Summary")').next(),u.summary=this.translateDragontea(c).text().trim(),h=[],p="",(null===(r=this.options)||void 0===r?void 0:r.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return p=t.sent(),[3,5];case 3:return v=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(d=new FormData).append("action","manga_get_chapters"),d.append("manga",v),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:d}).then((function(e){return e.text()}))];case 4:p=t.sent(),t.label=5;case 5:return"0"!==p&&(e=(0,l.load)(p)),f=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var r=e(a).find("a").text().trim(),n=e(a).find("span.chapter-release-date").text().trim();n=n?b.parseData(n):(0,s.default)().format("LL");var l=e(a).find("a").attr("href")||"";h.push({name:r,path:l.replace(/https?:\/\/.*?\//,"/"),releaseTime:n||null,chapterNumber:f-t})})),u.chapters=h.reverse(),[2,u]}}))}))},r.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),r=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&r.find('span[style*="opacity: 0; position: fixed;"]').remove(),r.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(r).html()||""]}}))}))},r.prototype.searchNovels=function(a,r){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+r+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return n=t.sent(),[2,this.parseNovels(n)]}}))}))},r}())({id:"azora",sourceSite:"https://azorago.com/",sourceName:"Azora",options:{useNewChapterEndpoint:!0,lang:"Arabic"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"أكشن",value:"أكشن"},{label:"إثارة",value:"إثارة"},{label:"إيسكاي",value:"إيسكاي"},{label:"الحياة اليومية",value:"الحياة-اليومية"},{label:"الحياة مدرسية",value:"الحياة-مدرسية"},{label:"انتقام",value:"انتقام"},{label:"تاريخي",value:"تاريخي"},{label:"تراجيدي",value:"تراجيدي"},{label:"جندر بندر",value:"جندر-بندر"},{label:"جوسي",value:"جوسي"},{label:"حريم",value:"حريم"},{label:"خارق للطبيعة",value:"خارق-للطبيعة"},{label:"خيال",value:"خيال"},{label:"خيال علمي",value:"خيال-علمي"},{label:"دراما",value:"دراما"},{label:"دموي",value:"دموي"},{label:"راشد",value:"راشد"},{label:"رعب",value:"رعب"},{label:"رومانسي",value:"رومانسي"},{label:"رياضة",value:"رياضة"},{label:"زمنكاني",value:"زمنكاني"},{label:"سينين",value:"سينين"},{label:"شريحة من الحياة",value:"شريحة-من-الحياة"},{label:"شوجو",value:"شوجو"},{label:"شونين",value:"شونين"},{label:"صداقة",value:"صداقة"},{label:"طبخ",value:"طبخ"},{label:"عائلي",value:"عائلي"},{label:"غموض",value:"غموض"},{label:"قتال",value:"قتال"},{label:"قوة خارقة",value:"قوة-خارقة"},{label:"كوميدي",value:"كوميدي"},{label:"مغامرات",value:"مغامرات"},{label:"نفسي",value:"نفسي"}]},op:{type:"Switch",label:"مع كل التصنيفات المحددة",value:!1},author:{type:"Text",label:"المؤلف",value:""},artist:{type:"Text",label:"الرسام",value:""},release:{type:"Text",label:"سنة الاصدار",value:""},adult:{type:"Picker",label:"محتوى للبالغين",value:"",options:[{label:"الكل",value:""},{label:"بدون محتوى للبالغين",value:"0"},{label:"محتوى للبالغين فقط",value:"1"}]},"status[]":{type:"Checkbox",label:"الحالة",value:[],options:[{label:"مستمرة",value:"on-going"},{label:"Completed",value:"end"},{label:"ألغيت",value:"canceled"},{label:"في الانتظار",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"ترتيب حسب :",value:"",options:[{label:"ملاءمة",value:""},{label:"أحدث",value:"latest"},{label:"أ-ي",value:"alphabet"},{label:"تقييم",value:"rating"},{label:"الشائع",value:"trending"},{label:"الأكثر مشاهدة",value:"views"},{label:"جديد",value:"new-manga"}]}}});exports.default=c;