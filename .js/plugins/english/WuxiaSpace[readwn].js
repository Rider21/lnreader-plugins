var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),i=require("@libs/novelStatus"),a=require("cheerio"),o=n(require("dayjs")),s=n(require("qs")),u=new(function(){function n(t){var e;this.id=t.id,this.name=t.sourceName,this.icon="multisrc/readwn/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var n=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+n),this.filters=t.filters}return n.prototype.popularNovels=function(n,i){var o,s,u,l,c=i.filters,h=i.showLatestNovels;return t(this,void 0,void 0,(function(){var t,i,d,f=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/list/",t+=((null===(o=null==c?void 0:c.genres)||void 0===o?void 0:o.value)||"all")+"/",t+=((null===(s=null==c?void 0:c.status)||void 0===s?void 0:s.value)||"all")+"-",t+=h?"lastdotime":(null===(u=null==c?void 0:c.sort)||void 0===u?void 0:u.value)||"newstime",t+="-"+(n-1)+".html",(null===(l=null==c?void 0:c.tags)||void 0===l?void 0:l.value)&&(t=this.site+"/tags/"+c.tags.value+"-0.html"),[4,(0,r.fetchApi)(t).then((function(t){return t.text()}))];case 1:return i=e.sent(),d=(0,a.load)(i),[2,d("li.novel-item").map((function(t,e){return{name:d(e).find("h4").text()||"",cover:f.site+d(e).find(".novel-cover > img").attr("data-src"),path:d(e).find("a").attr("href")||""}})).get().filter((function(t){return t.name&&t.path}))]}}))}))},n.prototype.parseNovel=function(n){var s;return t(this,void 0,void 0,(function(){var t,u,l,c,h,d,f;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+n).then((function(t){return t.text()}))];case 1:if(t=e.sent(),u=(0,a.load)(t),(l={path:n,name:u("h1.novel-title").text()||""}).author=u("span[itemprop=author]").text(),l.cover=this.site+u("figure.cover > img").attr("data-src"),l.summary=u(".summary").text().replace("Summary","").trim(),l.genres=u("div.categories > ul > li").map((function(t,e){var n;return null===(n=u(e).text())||void 0===n?void 0:n.trim()})).get().join(","),u("div.header-stats > span").each((function(){"Status"===u(this).find("small").text()&&(l.status="Ongoing"===u(this).find("strong").text()?i.NovelStatus.Ongoing:i.NovelStatus.Completed)})),c=parseInt(u(".header-stats").find("span > strong").first().text().trim()),h=u(".chapter-list li").map((function(t,e){var n,r,i,a=u(e).find("a .chapter-title").text().trim(),s=null===(n=u(e).find("a").attr("href"))||void 0===n?void 0:n.trim();if(!a||!s)return null;var l=u(e).find("a .chapter-update").text().trim();if(null===(r=null==l?void 0:l.includes)||void 0===r?void 0:r.call(l,"ago")){var c=(null===(i=l.match(/\d+/))||void 0===i?void 0:i[0])||"0",h=parseInt(c,10);if(h){var d=(0,o.default)();(l.includes("hours ago")||l.includes("hour ago"))&&d.subtract(h,"hours"),(l.includes("days ago")||l.includes("day ago"))&&d.subtract(h,"days"),(l.includes("months ago")||l.includes("month ago"))&&d.subtract(h,"months"),l=d.format("LL")}}return{name:a,path:s,releaseTime:l,chapterNumber:t+1}})).get().filter((function(t){return t})),c>h.length)for(d=parseInt((null===(s=h[h.length-1].path.match(/_(\d+)\.html/))||void 0===s?void 0:s[1])||"",10),f=(d||h.length)+1;f<=c;f++)h.push({name:"Chapter "+f,path:n.replace(".html","_"+f+".html"),releaseTime:null,chapterNumber:f});return l.chapters=h,[2,l]}}))}))},n.prototype.parseChapter=function(n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+n).then((function(t){return t.text()}))];case 1:return t=e.sent(),i=(0,a.load)(t),[2,i(".chapter-content").html()||""]}}))}))},n.prototype.searchNovels=function(n){return t(this,void 0,void 0,(function(){var t,i,o=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+"/e/search/index.php",{headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:this.site+"/search.html",Origin:this.site},method:"POST",body:s.default.stringify({show:"title",tempid:1,tbname:"news",keyboard:n})}).then((function(t){return t.text()}))];case 1:return t=e.sent(),i=(0,a.load)(t),[2,i("li.novel-item").map((function(t,e){return{name:i(e).find("h4").text()||"",cover:o.site+i(e).find("img").attr("data-src"),path:i(e).find("a").attr("href")||""}})).get().filter((function(t){return t.name&&t.path}))]}}))}))},n}())({id:"wuxiaspace",sourceSite:"https://www.wuxiaspace.com",sourceName:"Wuxia Space"});exports.default=u;