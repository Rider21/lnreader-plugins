var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:0};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:1});var n=require("cheerio"),r=require("@libs/fetch"),a=require("@libs/filterInputs"),i=function(){function i(){this.id="lnmtl",this.name="LnMTL",this.icon="src/en/lnmtl/icon.png",this.site="https://lnmtl.com/",this.version="1.0.1",this.filters={order:{value:"favourites",label:"Order by",options:[{label:"Favourites",value:"favourites"},{label:"Name",value:"name"},{label:"Addition Date",value:"date"}],type:a.FilterTypes.Picker},sort:{value:"desc",label:"Sort by",options:[{label:"Descending",value:"desc"},{label:"Ascending",value:"asc"}],type:a.FilterTypes.Picker},storyStatus:{value:"all",label:"Status",options:[{label:"All",value:"all"},{label:"Ongoing",value:"ongoing"},{label:"Finished",value:"finished"}],type:a.FilterTypes.Picker}}}return i.prototype.sleep=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,new Promise((function(e){return setTimeout(e,n)}))]}))}))},i.prototype.popularNovels=function(a,i){return e(this,arguments,void 0,(function(e,a){var i,o,s,c,l=this,u=a.filters;return t(this,(function(t){switch(t.label){case 0:return i=this.site+"novel?",i+="orderBy=".concat(u.order.value),i+="&order=".concat(u.sort.value),i+="&filter=".concat(u.storyStatus.value),i+="&page=".concat(e),[4,(0,r.fetchApi)(i).then((function(e){return e.text()}))];case 1:return o=t.sent(),s=(0,n.load)(o),c=[],s(".media").each((function(e,t){var n=s(t).find("h4").text(),r=s(t).find("img").attr("src"),a=s(t).find("h4 > a").attr("href");if(a){var i={name:n,cover:r,path:a.replace(l.site,"")};c.push(i)}})),[2,c]}}))}))},i.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,i,o,s,c,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+a)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),i=(0,n.load)(e),o=JSON.parse((null===(l=null===(c=i("main").next().html())||void 0===c?void 0:c.match(/lnmtl.volumes = \[(.*?)\]/)[0])||void 0===l?void 0:l.replace("lnmtl.volumes = ",""))||""),s={path:a,name:i(".novel-name").text()||"Untitled",cover:i("div.novel").find("img").attr("src"),summary:i("div.description").text().trim(),totalPages:o.length,chapters:[]},i(".panel-body > dl").each((function(){var e=i(this).find("dt").text().trim(),t=i(this).find("dd").text().trim();switch(e){case"Authors":s.author=t;break;case"Current status":s.status=t}})),s.genres=i('.panel-heading:contains(" Genres ")').next().find("a").map((function(e,t){return i(t).text()})).toArray().join(","),[2,s]}}))}))},i.prototype.parsePage=function(a,i){return e(this,void 0,void 0,(function(){var e,o,s,c,l,u,h,p,f,d,v;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+a)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),o=(0,n.load)(e),s=JSON.parse((null===(v=null===(d=o("main").next().html())||void 0===d?void 0:d.match(/lnmtl.volumes = \[(.*?)\]/)[0])||void 0===v?void 0:v.replace("lnmtl.volumes = ",""))||"")[+i-1],c=[],[4,this.sleep(1e3)];case 3:return t.sent(),[4,(0,r.fetchApi)("".concat(this.site,"chapter?volumeId=").concat(s.id))];case 4:return[4,t.sent().json()];case 5:l=t.sent(),u=l.data.map((function(e){return{name:"#".concat(e.number," - ").concat(e.title),path:"chapter/".concat(e.slug),releaseTime:new Date(e.created_at).toISOString()}})),c.push.apply(c,u),h=2,t.label=6;case 6:return h<=l.last_page?[4,this.sleep(1e3)]:[3,11];case 7:return t.sent(),[4,(0,r.fetchApi)("".concat(this.site,"chapter?page=").concat(h,"&volumeId=").concat(s.id))];case 8:return[4,t.sent().json()];case 9:p=t.sent(),f=p.data.map((function(e){return{name:"#".concat(e.number," ").concat(e.title),path:"chapter/".concat(e.slug),releaseTime:new Date(e.created_at).toISOString()}})),c.push.apply(c,f),t.label=10;case 10:return h++,[3,6];case 11:return[2,{chapters:c}]}}))}))},i.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+a)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),(i=(0,n.load)(e))(".original, script").remove(),i("sentence.translated").wrap("<p></p>"),(o=null===(s=i(".chapter-body").html())||void 0===s?void 0:s.replace(/„/g,"“"))||(o=i(".alert.alert-warning").text()),[2,o]}}))}))},i.prototype.searchNovels=function(a,i){return e(this,void 0,void 0,(function(){var e,i,o,s,c,l,u;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site).then((function(e){return e.text()}))];case 1:return e=t.sent(),i=(0,n.load)(e),o=null===(u=i("footer").next().next().html())||void 0===u?void 0:u.match(/prefetch: '\/(.*json)/)[1],[4,fetch("".concat(this.site).concat(o))];case 2:return[4,t.sent().json()];case 3:return s=t.sent(),c=s.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),l=[],c.map((function(e){var t=e.name,n={path:"novel/".concat(e.slug),name:t,cover:e.image};l.push(n)})),[2,l]}}))}))},i.prototype.fetchImage=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchFile)(n)];case 1:return[2,e.sent()]}}))}))},i}();exports.default=new i;