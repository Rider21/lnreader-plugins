var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:0};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:1}}([l,s])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:1});var n=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),l=a(require("dayjs")),s=function(e,t){return new RegExp(t.join("|")).test(e)},u=new(function(){function a(e){var t;this.fetchImage=n.fetchFile,this.parseData=function(e){var t,a=(0,l.default)(),n=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",r=parseInt(n,10);if(!n)return e;if(s(e,["detik","segundo","second","วินาที"]))a.subtract(r,"second");else if(s(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a.subtract(r,"minute");else if(s(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a.subtract(r,"hours");else if(s(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a.subtract(r,"days");else if(s(e,["week","semana"]))a.subtract(r,"week");else if(s(e,["month","mes"]))a.subtract(r,"month");else{if(!s(e,["year","año"]))return e;a.subtract(r,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(1+a),this.options=e.options,this.filters=e.filters}return a.prototype.getHostname=function(e){return e.split("/")[2]},a.prototype.getCheerio=function(a){return e(this,void 0,void 0,(function(){var e,i,o,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(a)];case 1:if(!(e=t.sent()).ok)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=r.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),l=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==l||"You are being redirected..."==l||"Un instant..."==l||"Just a moment..."==l||"Redirecting..."==l)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},a.prototype.parseNovels=function(e){var t=this,a=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(n,r){var i=e(r).find(".post-title").text().trim(),o=e(r).find(".post-title").find("a").attr("href")||"";if(i&&o){var l=e(r).find("img"),s={name:i,cover:l.attr("data-src")||l.attr("src"),path:o.replace(t.site,"")};a.push(s)}})),a},a.prototype.popularNovels=function(a,n){return e(this,arguments,void 0,(function(e,a){var n,r,i,o,l,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in n=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u={}),c&&(n+="&m_orderby=latest"),u)if("object"==typeof u[r].value)for(i=0,o=u[r].value;i<o.length;i++)l=o[i],n+="&".concat(r,"=").concat(l);else u[r].value&&(n+="&".concat(r,"=").concat(u[r].value));return[4,this.getCheerio(n)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,s,u,c,h,p,m,v,d,f=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=t.sent(),(s=(0,r.load)(e))(".manga-title-badges, #manga-title span").remove(),(u={path:a,name:s(".post-title h1").text().trim()||s("#manga-title h1").text()}).cover=s(".summary_image > a > img").attr("data-lazy-src")||s(".summary_image > a > img").attr("data-src")||s(".summary_image > a > img").attr("src")||s(".summary_image > a > img").attr("src")||i.defaultCover,s(".post-content_item, .post-content").each((function(){var e=s(this).find("h5").text().trim(),t=s(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":u.genres=t;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":u.author=t;break;case"Status":case"Estado":u.status=t.includes("OnGoing")||t.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),s("div.summary__content .code-block,script").remove(),u.summary=s("div.summary__content").text().trim()||s("#tab-manga-about").text().trim()||s('.post-content_item h5:contains("Summary")').next().text().trim(),c=[],h="",(null===(d=this.options)||void 0===d?void 0:d.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return h=t.sent(),[3,5];case 3:return p=s(".rating-post-id").attr("value")||s("#manga-chapters-holder").attr("data-id")||"",(m=new FormData).append("action","manga_get_chapters"),m.append("manga",p),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:m}).then((function(e){return e.text()}))];case 4:h=t.sent(),t.label=5;case 5:return"0"!==h&&(s=(0,r.load)(h)),v=s(".wp-manga-chapter").length,s(".wp-manga-chapter").each((function(e,t){var a=s(t).find("a").text().trim(),n=s(t).find("span.chapter-release-date").text().trim();n=n?f.parseData(n):(0,l.default)().format("LL");var r=s(t).find("a").attr("href")||"";c.push({name:a,path:r.replace(f.site,""),releaseTime:n||null,chapterNumber:v-e})})),u.chapters=c.reverse(),[2,u]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=t.sent(),i=(0,r.load)(e),[2,i(".text-left").html()||i(".text-right").html()||i(".entry-content").html()||i(".c-blog-post > div > div:nth-child(2)").html()||""]}}))}))},a.prototype.searchNovels=function(a,n){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+n+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},a}())({id:"mysticalmerries",sourceSite:"https://mysticalmerries.com/",sourceName:"MysticalSeries",options:{useNewChapterEndpoint:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"action",value:"action"},{label:"adventure",value:"adventure"},{label:"boys",value:"boys"},{label:"chinese",value:"chinese"},{label:"drama",value:"drama"},{label:"ecchi",value:"ecchi"},{label:"fighting",value:"fighting"},{label:"fun",value:"fun"},{label:"girl",value:"girl"},{label:"horrow",value:"horrow"},{label:"isekai",value:"isekai"},{label:"manhwa",value:"manhwa"},{label:"r19",value:"r19"},{label:"regression",value:"regression"},{label:"reincarnation",value:"reincarnation"},{label:"romance fantasy",value:"romance-fantasy"},{label:"time travel",value:"time-travel"}]},op:{type:"Switch",label:"having all selected genres",value:0},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}});exports.default=u;