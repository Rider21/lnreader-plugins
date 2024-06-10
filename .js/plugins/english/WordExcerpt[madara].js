var t=this&&this.__awaiter||function(t,e,a,r){return new(a||(a=Promise))((function(n,i){function o(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(o,s)}l((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var a,r,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},a=this&&this.__spreadArray||function(t,e,a){if(a||2===arguments.length)for(var r,n=0,i=e.length;n<i;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),i=require("cheerio"),o=require("@libs/defaultCover"),s=require("@libs/novelStatus"),l=r(require("dayjs")),c=function(t,e){return new RegExp(e.join("|")).test(t)},u=new(function(){function r(t){var e;this.parseData=function(t){var e,a=(0,l.default)(),r=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",n=parseInt(r,10);if(!r)return t;if(c(t,["detik","segundo","second","วินาที"]))a.subtract(n,"second");else if(c(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a.subtract(n,"minute");else if(c(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a.subtract(n,"hours");else if(c(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a.subtract(n,"days");else if(c(t,["week","semana"]))a.subtract(n,"week");else if(c(t,["month","mes"]))a.subtract(n,"month");else{if(!c(t,["year","año"]))return t;a.subtract(n,"year")}return a.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var a=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+a),this.options=t.options,this.filters=t.filters}return r.prototype.translateDragontea=function(t){if("dragontea"===this.id){var e=(0,i.load)(t.html()||""),r=e.html()||"";r=(r=r.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),t.html(r),t.find(":not(:has(*))").each((function(t,r){var n,i=e(r),o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),s="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),l=i.text().normalize("NFD").split(""),c=a([],l,!0).map((function(t){var e=t.normalize("NFC"),a=o.indexOf(e);return-1!==a?s[a]+t.slice(e.length):t})).join("");i.html((null===(n=i.html())||void 0===n?void 0:n.replace(i.text(),c).replace("\n","<br>"))||"")}))}return t},r.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},r.prototype.getCheerio=function(a,r){return t(this,void 0,void 0,(function(){var t,o,s,l;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(a)];case 1:if(!(t=e.sent()).ok&&1!=r)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=i.load,[4,t.text()];case 2:if(o=s.apply(void 0,[e.sent()]),l=o("title").text().trim(),this.getHostname(a)!=this.getHostname(t.url)||"Bot Verification"==l||"You are being redirected..."==l||"Un instant..."==l||"Just a moment..."==l||"Redirecting..."==l)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},r.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(a,r){var n=t(r).find(".post-title").text().trim(),i=t(r).find(".post-title").find("a").attr("href")||"";if(n&&i){var o=t(r).find("img"),s={name:n,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset"),path:i.replace(/https?:\/\/.*?\//,"/")};e.push(s)}})),e},r.prototype.popularNovels=function(a,r){var n=r.filters,i=r.showLatestNovels;return t(this,void 0,void 0,(function(){var t,r,o,s,l,c;return e(this,(function(e){switch(e.label){case 0:for(r in t=this.site+"/page/"+a+"/?s=&post_type=wp-manga",n||(n=this.filters||{}),i&&(t+="&m_orderby=latest"),n)if("object"==typeof n[r].value)for(o=0,s=n[r].value;o<s.length;o++)l=s[o],t+="&".concat(r,"=").concat(l);else n[r].value&&(t+="&".concat(r,"=").concat(n[r].value));return[4,this.getCheerio(t,!1)];case 1:return c=e.sent(),[2,this.parseNovels(c)]}}))}))},r.prototype.parseNovel=function(a){var r;return t(this,void 0,void 0,(function(){var t,c,u,h,p,d,f,m,v=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(c={path:a,name:t(".post-title h1").text().trim()||t("#manga-title h1").text()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||o.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),a=t(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":c.genres=a;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":c.author=a;break;case"Status":case"Estado":c.status=a.includes("OnGoing")||a.includes("مستمرة")?s.NovelStatus.Ongoing:s.NovelStatus.Completed}})),t("div.summary__content .code-block,script").remove(),u=t("div.summary__content")||t("#tab-manga-about")||t('.post-content_item h5:contains("Summary")').next(),c.summary=this.translateDragontea(u).text().trim(),h=[],p="",(null===(r=this.options)||void 0===r?void 0:r.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(t){return t.text()}))]:[3,3];case 2:return p=e.sent(),[3,5];case 3:return d=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(f=new FormData).append("action","manga_get_chapters"),f.append("manga",d),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:f}).then((function(t){return t.text()}))];case 4:p=e.sent(),e.label=5;case 5:return"0"!==p&&(t=(0,i.load)(p)),m=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,a){var r=t(a).find("a").text().trim(),n=t(a).find("span.chapter-release-date").text().trim();n=n?v.parseData(n):(0,l.default)().format("LL");var i=t(a).find("a").attr("href")||"";h.push({name:r,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:n||null,chapterNumber:m-e})})),c.chapters=h.reverse(),[2,c]}}))}))},r.prototype.parseChapter=function(a){return t(this,void 0,void 0,(function(){var t,r;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return t=e.sent(),r=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&r.find('span[style*="opacity: 0; position: fixed;"]').remove(),r.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(r).html()||""]}}))}))},r.prototype.searchNovels=function(a,r){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+r+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return n=e.sent(),[2,this.parseNovels(n)]}}))}))},r}())({id:"wordexcerpt",sourceSite:"https://wordexcerpt.com/",sourceName:"WordExcerpt",options:{lang:"English"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[]},op:{type:"Switch",label:"Having ALL selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"",value:"",options:[]}}});exports.default=u;