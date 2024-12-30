var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(n,r){function i(e){try{u(l.next(e))}catch(e){r(e)}}function o(e){try{u(l.throw(e))}catch(e){r(e)}}function u(e){var a;e.done?n(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(i,o)}u((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,n,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=o(0),i.throw=o(1),i.return=o(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(r=0)),r;)try{if(t=1,l&&(n=2&o[0]?l.return:o[0]?l.throw||((n=l.return)&&n.call(l),0):l.next)&&!(n=n.call(l,o[1])).done)return n;switch(l=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,l=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(n=r.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(6===o[0]&&r.label<n[1]){r.label=n[1],n=o;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(o);break}n[2]&&r.ops.pop(),r.trys.pop();continue}o=a.call(e,r)}catch(e){o=[6,e],l=0}finally{t=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("cheerio"),l=require("@libs/fetch"),n=require("@libs/filterInputs"),r=function(){function r(){this.id="novelbin",this.name="Novel Bin",this.icon="src/en/novelbin/icon.png",this.site="https://novelbin.com/",this.version="1.1.0",this.imageRequestInit={headers:{referrer:this.site}},this.filters={sort:{value:"popular-novels",label:"Sort by",options:[{label:"Latest Release",value:"update"},{label:"Hot Novel",value:"hot-novels"},{label:"Completed Novel",value:"c"},{label:"Most Popular",value:"popular-novels"}],type:n.FilterTypes.Picker},genre:{value:"",label:"Genres (Cancels out 'Sort by')",options:[{label:"None",value:""},{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Anime",value:"anime"},{label:"Arts",value:"arts"},{label:"Comedy",value:"comedy"},{label:"Drama",value:"drama"},{label:"Eastern",value:"eastern"},{label:"Ecchi",value:"ecchi"},{label:"Fan-fiction",value:"fan-fiction"},{label:"Fanfiction",value:"fanfiction"},{label:"Fantas",value:"fantas"},{label:"Fantasy",value:"fantasy"},{label:"Game",value:"game"},{label:"Gender bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Hentai",value:"hentai"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"Lgbt+",value:"lgbt+"},{label:"Litrpg",value:"litrpg"},{label:"Magic",value:"magic"},{label:"Magical realism",value:"magical-realism"},{label:"Manhua",value:"manhua"},{label:"Martial arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Military",value:"military"},{label:"Modern life",value:"modern-life"},{label:"Movies",value:"movies"},{label:"Mystery",value:"mystery"},{label:"Portal fantasy",value:"portal-fantasy"},{label:"Psychological",value:"psychological"},{label:"Realistic fiction",value:"realistic-fiction"},{label:"Reincarnation",value:"reincarnation"},{label:"Romance",value:"romance"},{label:"School life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shoujo ai",value:"shoujo-ai"},{label:"Shounen",value:"shounen"},{label:"Shounen ai",value:"shounen-ai"},{label:"Slice of life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"System",value:"system"},{label:"Tragedy",value:"tragedy"},{label:"Urban life",value:"urban-life"},{label:"Video games",value:"video-games"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}],type:n.FilterTypes.Picker},complete:{value:!1,label:"Show Completed Novels Only",type:n.FilterTypes.Switch}}}return r.prototype.parseNovels=function(e){var a=this,t=[];return e(".col-novel-main .list-novel .row").each((function(l,n){var r,i=e(n).find("h3.novel-title > a").text(),o=null===(r=e(n).find("img.cover").attr("data-src"))||void 0===r?void 0:r.replace("_200_89",""),u=e(n).find("h3.novel-title > a").attr("href");if(u){var s={name:i,cover:o,path:u.replace(a.site,"")};t.push(s)}})),t},r.prototype.popularNovels=function(n,r){return e(this,arguments,void 0,(function(e,n){var r,i,o,u=n.showLatestNovels,s=n.filters;return a(this,(function(a){switch(a.label){case 0:return r=this.site,u?r+="sort/latest":""!==s.genre.value?r+="genre/".concat(s.genre.value):r+="sort/".concat(s.sort.value),s.complete.value&&(r+="/completed"),r+="?page=".concat(e),[4,(0,l.fetchApi)(r).then((function(e){return e.text()}))];case 1:return i=a.sent(),o=(0,t.load)(i),[2,this.parseNovels(o)]}}))}))},r.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var r,i,o,u,s,c,v=this;return a(this,(function(h){switch(h.label){case 0:return[4,(0,l.fetchApi)(this.site+n).then((function(e){return e.text()}))];case 1:return r=h.sent(),i=(0,t.load)(r),o={path:n,name:i("div.book > img").attr("alt")||"Untitled",cover:i("div.book > img").attr("data-src"),summary:i("div.desc-text").text().trim(),chapters:[]},i("ul.info > li > h3").each((function(){var e=i(this).text(),a=i(this).siblings().map((function(e,a){return i(a).text()})).toArray().join(",");switch(e){case"Author:":o.author=a;break;case"Status:":o.status=a;break;case"Genre:":o.genres=a}})),u=i("#rating").attr("data-novel-id"),s=function(n){return e(v,void 0,void 0,(function(){var e,r,o,u=this;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"ajax/chapter-archive?novelId="+n,[4,(0,l.fetchApi)(e)];case 1:return[4,a.sent().text()];case 2:return r=a.sent(),i=(0,t.load)(r),o=[],i("ul.list-chapter > li").each((function(e,a){var t=i(a).find("a").attr("title"),l=i(a).find("a").attr("href");t&&l&&o.push({name:t,path:l.replace(u.site,"")})})),[2,o]}}))}))},u?(c=o,[4,s(u)]):[3,3];case 2:c.chapters=h.sent(),h.label=3;case 3:return[2,o]}}))}))},r.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,r;return a(this,(function(a){switch(a.label){case 0:return[4,(0,l.fetchApi)(this.site+n).then((function(e){return e.text()}))];case 1:return e=a.sent(),(r=(0,t.load)(e))('#chr-content > div,h6,p[style="display: none;"]').remove(),[2,r("#chr-content").html()||""]}}))}))},r.prototype.searchNovels=function(n){return e(this,void 0,void 0,(function(){var e,r,i;return a(this,(function(a){switch(a.label){case 0:return e="".concat(this.site,"search/?keyword=").concat(n),[4,(0,l.fetchApi)(e).then((function(e){return e.text()}))];case 1:return r=a.sent(),i=(0,t.load)(r),[2,this.parseNovels(i)]}}))}))},r}();exports.default=new r;