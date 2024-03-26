var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(r,n){function i(e){try{o(l.next(e))}catch(e){n(e)}}function u(e){try{o(l.throw(e))}catch(e){n(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,u)}o((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,r,n,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function u(u){return function(o){return function(u){if(a)throw new TypeError("Generator is already executing.");for(;n&&(n=0,u[0]&&(i=0)),i;)try{if(a=1,l&&(r=2&u[0]?l.return:u[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,u[1])).done)return r;switch(l=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:0};case 5:i.label++,l=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],l=0}finally{a=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:1}}([u,o])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("cheerio"),l=require("@libs/fetch"),r=require("@libs/filterInputs"),n=function(){function n(){this.id="pawread",this.name="PawRead",this.version="2.0.0",this.icon="src/en/pawread/icon.png",this.site="https://m.pawread.com/",this.filters={status:{value:"",label:"Status",options:[{label:"All",value:""},{label:"Completed",value:"wanjie"},{label:"Ongoing",value:"lianzai"},{label:"Hiatus",value:"hiatus"}],type:r.FilterTypes.Picker},lang:{value:"",label:"Languages",options:[{label:"All",value:""},{label:"Chinese",value:"chinese"},{label:"Korean",value:"korean"},{label:"Japanese",value:"japanese"}],type:r.FilterTypes.Picker},genre:{value:"",label:"Genres",options:[{label:"All",value:""},{label:"Fantasy",value:"Fantasy"},{label:"Action",value:"Action"},{label:"Xuanhuan",value:"Xuanhuan"},{label:"Romance",value:"Romance"},{label:"Comedy",value:"Comedy"},{label:"Mystery",value:"Mystery"},{label:"Mature",value:"Mature"},{label:"Harem",value:"Harem"},{label:"Wuxia",value:"Wuxia"},{label:"Xianxia",value:"Xianxia"},{label:"Tragedy",value:"Tragedy"},{label:"Sci-fi",value:"Scifi"},{label:"Historical",value:"Historical"},{label:"Ecchi",value:"Ecchi"},{label:"Adventure",value:"Adventure"},{label:"Adult",value:"Adult"},{label:"Supernatural",value:"Supernatural"},{label:"Psychological",value:"Psychological"},{label:"Drama",value:"Drama"},{label:"Horror",value:"Horror"},{label:"Josei",value:"Josei"},{label:"Mecha",value:"Mecha"},{label:"Seinen",value:"Seinen"},{label:"Shoujo",value:"Shoujo"},{label:"Shounen",value:"Shounen"},{label:"Smut",value:"Smut"},{label:"Yaoi",value:"Yaoi"},{label:"Yuri",value:"Yuri"},{label:"Martial Arts",value:"MartialArts"},{label:"School Life",value:"SchoolLife"},{label:"Shoujo Ai",value:"ShoujoAi"},{label:"Shounen Ai",value:"ShounenAi"},{label:"Slice of Life",value:"SliceofLife"},{label:"Gender Bender",value:"GenderBender"},{label:"Sports",value:"Sports"},{label:"Urban",value:"Urban"},{label:"Adventurer",value:"Adventurer"}],type:r.FilterTypes.Picker},sort:{value:"click",label:"Sort By",options:[{label:"Time Updated",value:"update"},{label:"Time Posted",value:"post"},{label:"Clicks",value:"click"}],type:r.FilterTypes.Picker},order:{value:0,label:"Order ↑ ↓",type:r.FilterTypes.Switch}}}return n.prototype.parseNovels=function(e){var t=[];return e(".list-comic, .itemBox").each((function(a,l){var r;e(l).find(".serialise").remove();var n=e(l).find("a").text().trim(),i=e(l).find("img").attr("src"),u=null===(r=e(l).find("a").attr("href"))||void 0===r?void 0:r.slice(1);if(u){var o={name:n,cover:i,path:u};t.push(o)}})),t},n.prototype.popularNovels=function(r,n){return e(this,arguments,void 0,(function(e,r){var n,i,u,o,s=r.filters;return t(this,(function(t){switch(t.label){case 0:return n="".concat(this.site,"list/"),i=[s.status.value,s.lang.value,s.genre.value],n+=i.filter((function(e){return""!==e})).join("-"),i.some((function(e){return""!==e}))&&(n+="/"),s.order.value&&(n+="-"),n+=s.sort.value,n+="/?page=".concat(e),[4,(0,l.fetchApi)(n).then((function(e){return e.text()}))];case 1:return u=t.sent(),o=(0,a.load)(u),[2,this.parseNovels(o)]}}))}))},n.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var e,n,i,u;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(this.site+r)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),n=(0,a.load)(e),(i={path:r,name:n("#Cover img").attr("title")||"Untitled",cover:n("#Cover img").attr("src"),author:n(".icon01 <").text().trim(),status:n(".txtItme:first").text().trim(),chapters:[]}).summary=n("#full-des").find("br").replaceWith("\n").end().text().trim(),i.genres=n("a.btn-default").map((function(e,t){return n(t).text().trim()})).toArray().join(","),u=[],n(".item-box").each((function(e,t){var a,l=n(t).find("span:last").text().trim();if("Advanced Chapter"!==l){var i=l.split(".").map((function(e){return Number(e)})),o=n(t).find("span:first").text().trim(),s=null===(a=n(t).attr("onclick"))||void 0===a?void 0:a.match(/\d+/)[0];s&&u.push({name:o,path:"".concat(r).concat(s,".html"),releaseTime:new Date(i[0],i[1],i[2]).toISOString()})}})),i.chapters=u,[2,i]}}))}))},n.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(this.site+r)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),n=(0,a.load)(e),["bit.ly","tinyurl","pawread"].map((function(e){return n("p:icontains(".concat(e,")")).remove()})),[2,n(".main").html()||""]}}))}))},n.prototype.searchNovels=function(r,n){return e(this,void 0,void 0,(function(){var e,i,u;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site,"search/?keywords=").concat(r,"&page=").concat(n),[4,(0,l.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return i=t.sent(),u=(0,a.load)(i),[2,this.parseNovels(u)]}}))}))},n.prototype.fetchImage=function(a){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,(0,l.fetchFile)(a)]}))}))},n}();exports.default=new n;