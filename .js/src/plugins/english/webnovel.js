var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function o(e){try{s(n.next(e))}catch(e){r(e)}}function i(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,l,r={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=i(0),o.throw=i(1),o.return=i(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(s){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(a=1,n&&(l=2&i[0]?n.return:i[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,i[1])).done)return l;switch(n=0,l&&(i=[2&i[0],l.value]),i[0]){case 0:case 1:l=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,n=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(l=r.trys,(l=l.length>0&&l[l.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!l||i[1]>l[0]&&i[1]<l[3])){r.label=i[1];break}if(6===i[0]&&r.label<l[1]){r.label=l[1],l=i;break}if(l&&r.label<l[2]){r.label=l[2],r.ops.push(i);break}l[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],n=0}finally{a=l=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("cheerio"),n=require("@libs/fetch"),l=require("@libs/filterInputs"),r=function(){function r(){this.id="webnovel",this.name="Webnovel",this.version="1.0.0",this.icon="src/en/webnovel/icon.png",this.site="https://www.webnovel.com",this.headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"},this.imageRequestInit={headers:{referrer:this.site}},this.filters={sort:{label:"Sort Results By",value:"1",options:[{label:"Popular",value:"1"},{label:"Recommended",value:"2"},{label:"Most Collections",value:"3"},{label:"Rating",value:"4"},{label:"Time Updated",value:"5"}],type:l.FilterTypes.Picker},status:{label:"Content Status",value:"0",options:[{label:"All",value:"0"},{label:"Completed",value:"2"},{label:"Ongoing",value:"1"}],type:l.FilterTypes.Picker},genres_gender:{label:"Genres (Male/Female)",value:"1",options:[{label:"Male",value:"1"},{label:"Female",value:"2"}],type:l.FilterTypes.Picker},genres_male:{label:"Male Genres",value:"1",options:[{label:"All",value:"1"},{label:"Action",value:"novel-action-male"},{label:"Animation, Comics, Games",value:"novel-acg-male"},{label:"Eastern",value:"novel-eastern-male"},{label:"Fantasy",value:"novel-fantasy-male"},{label:"Games",value:"novel-games-male"},{label:"History",value:"novel-history-male"},{label:"Horror",value:"novel-horror-male"},{label:"Realistic",value:"novel-realistic-male"},{label:"Sci-fi",value:"novel-scifi-male"},{label:"Sports",value:"novel-sports-male"},{label:"Urban",value:"novel-urban-male"},{label:"War",value:"novel-war-male"}],type:l.FilterTypes.Picker},genres_female:{label:"Female Genres",value:"2",options:[{label:"All",value:"2"},{label:"Fantasy",value:"novel-fantasy-female"},{label:"General",value:"novel-general-female"},{label:"History",value:"novel-history-female"},{label:"LGBT+",value:"novel-lgbt-female"},{label:"Sci-fi",value:"novel-scifi-female"},{label:"Teen",value:"novel-teen-female"},{label:"Urban",value:"novel-urban-female"}],type:l.FilterTypes.Picker},type:{label:"Content Type",value:"0",options:[{label:"All",value:"0"},{label:"Translate",value:"1"},{label:"Original",value:"2"},{label:"MTL (Machine Translation)",value:"3"}],type:l.FilterTypes.Picker}}}return r.prototype.parseNovels=function(a,n,l){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return e=n?"data-original":l?"src":"",[2,a("".concat(n?".j_category_wrapper":l?".j_list_container":""," li")).map((function(t,n){var l=a(n).find(".g_thumb").attr("title")||"No Title Found",r=a(n).find(".g_thumb > img").attr(e),o=a(n).find(".g_thumb").attr("href");return o?{name:l,cover:"https:"+r,path:o}:null})).get().filter((function(e){return null!==e}))]}))}))},r.prototype.popularNovels=function(l,r){return e(this,arguments,void 0,(function(e,l){var r,o,i,s,u=l.showLatestNovels,c=l.filters;return t(this,(function(t){switch(t.label){case 0:return r=this.site+"/stories/",o=new URLSearchParams,u?r+="novel?orderBy=5&pageIndex=".concat(e):c?("1"===c.genres_gender.value?"1"!==c.genres_male.value?r+=c.genres_male.value:(r+="novel",o.append("gender","1")):"2"===c.genres_gender.value&&("2"!==c.genres_female.value?r+=c.genres_female.value:(r+="novel",o.append("gender","2"))),"3"!==c.type.value?o.append("sourceType",c.type.value):(o.append("translateMode","3"),o.append("sourceType","1")),o.append("bookStatus",c.status.value),o.append("orderBy",c.sort.value),o.append("pageIndex",e.toString()),r+="?"+o.toString()):r+="novel?orderBy=1&pageIndex=".concat(e),[4,(0,n.fetchApi)(r,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return i=t.sent(),s=(0,a.load)(i),[2,this.parseNovels(s,!0,!1)]}}))}))},r.prototype.parseChapters=function(l){return e(this,void 0,void 0,(function(){var e,r,o,i;return t(this,(function(t){switch(t.label){case 0:return e=this.site+l+"/catalog",[4,(0,n.fetchApi)(e,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return r=t.sent(),o=(0,a.load)(r),i=[],o(".volume-item").each((function(e,t){var a=o(t).first().text().trim().match(/Volume\s(\d+)/),n=a?"Volume ".concat(a[1]):"Unknown Volume";o(t).find("li").each((function(e,t){var a,l="".concat(n,": ")+((null===(a=o(t).find("a").attr("title"))||void 0===a?void 0:a.trim())||"No Title Found"),r=o(t).find("a").attr("href");r&&i.push({name:o(t).find("svg").length?"".concat(l," 🔒"):l,path:r})}))})),[2,i]}}))}))},r.prototype.parseNovel=function(l){return e(this,void 0,void 0,(function(){var e,r,o,i;return t(this,(function(t){switch(t.label){case 0:return e=this.site+l,[4,(0,n.fetchApi)(e,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return r=t.sent(),o=(0,a.load)(r),i={path:l,name:o(".g_thumb > img").attr("alt")||"No Title Found",cover:"https:"+o(".g_thumb > img").attr("src"),genres:o(".det-hd-detail > .det-hd-tag").attr("title")||"",summary:o(".j_synopsis > p").find("br").replaceWith("\n").end().text().trim()||"No Summary Found",author:o(".det-info .c_s").filter((function(e,t){return"Author:"===o(t).text().trim()})).next().text().trim()||"No Author Found",status:o(".det-hd-detail svg").filter((function(e,t){return"Status"===o(t).attr("title")})).next().text().trim()||"Unknown Status"},[4,this.parseChapters(l)];case 3:return i.chapters=t.sent(),[2,i]}}))}))},r.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,r,o;return t(this,(function(t){switch(t.label){case 0:return e=this.site+l,[4,(0,n.fetchApi)(e,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return r=t.sent(),o=(0,a.load)(r),[".para-comment"].forEach((function(e){return o(e).remove()})),[2,o(".cha-tit").html()+o(".cha-words").html()]}}))}))},r.prototype.searchNovels=function(l,r){return e(this,void 0,void 0,(function(){var e,o,i;return t(this,(function(t){switch(t.label){case 0:return l=l.replace(/\s+/g,"+"),e="".concat(this.site,"/search?keywords=").concat(l,"&pageIndex=").concat(r),[4,(0,n.fetchApi)(e,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),i=(0,a.load)(o),[2,this.parseNovels(i,!1,!0)]}}))}))},r}();exports.default=new r;