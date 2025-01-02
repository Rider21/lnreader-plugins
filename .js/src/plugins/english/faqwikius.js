var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function c(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/novelStatus"),o=function(){function o(){this.id="FWK.US",this.name="Faq Wiki",this.site="https://www.faqwiki.us/",this.version="2.0.0",this.icon="src/en/faqwikius/icon.png"}return o.prototype.parseNovels=function(t,e){var n=this,r=[];return t(".plt-page-item").each((function(e,i){var o,a,c,s=t(i).text().replace("Novel – All Chapters","").trim(),u=t(i).find("img").attr("data-ezsrc");u=u?u.replace(/\?ezimgfmt=.*$/,""):t(i).find("img").attr("src");var l=null===(c=null===(a=null===(o=t(i).find("a").attr("href"))||void 0===o?void 0:o.replace("tp:","tps:"))||void 0===a?void 0:a.replace(n.site,""))||void 0===c?void 0:c.replace(/\/+$/,"");l&&r.push({name:s,cover:u,path:l})})),e&&(r=r.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))),r},o.prototype.popularNovels=function(){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site).then((function(t){return t.text()}))];case 1:return t=e.sent(),i=(0,r.load)(t),[2,this.parseNovels(i)]}}))}))},o.prototype.parseNovel=function(o){return t(this,void 0,void 0,(function(){var t,a,c,s,u,l,p,h=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+o).then((function(t){return t.text()}))];case 1:return t=e.sent(),a=(0,r.load)(t),(c={path:o,name:""}).name=a(".entry-title").text().replace("Novel – All Chapters","").trim(),s=a(".wp-block-image img"),u=s.attr("data-ezsrc")||s.attr("src"),c.cover=null==u?void 0:u.replace(/\?ezimgfmt=.*$/,""),l=a("#lcp_instance_0 +:icontains('complete')").text(),c.status=l?i.NovelStatus.Completed:i.NovelStatus.Ongoing,a(".entry-content strong").each((function(t,e){var n=a(e).text().trim().toLowerCase(),r=a(e).parent(),i=[r.text().slice(n.length).trim()].concat(r.nextUntil("p:has(strong)").map((function(t,e){return a(e).text().trim()})).get()),o=i.join(" ").trim();["Slice of Life","School Life"].forEach((function(t){o=o.replace(new RegExp("\\b".concat(t,"\\b"),"g"),t.replace(/ /g,"_"))}));var s=o.split(/\s+/).map((function(t){return t.replace(/_/g," ")})).join(", ");switch(n){case"description:":c.summary=i.join("\n");break;case"author(s):":c.author=i[0];break;case"genre:":c.genres=s}})),p=[],a(".lcp_catlist li a").each((function(t,e){var n,r,i=a(e).text().replace(c.name+"","").replace("Novel","").trim(),o=null===(r=null===(n=a(e).attr("href"))||void 0===n?void 0:n.replace(h.site,""))||void 0===r?void 0:r.replace(/\/+$/,""),s=t+1;o&&p.push({name:i,path:o,chapterNumber:s})})),c.chapters=p,[2,c]}}))}))},o.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+i).then((function(t){return t.text()}))];case 1:return t=e.sent(),o=(0,r.load)(t),[".entry-content span",".entry-content div","script"].map((function(t){o(t).remove()})),[2,o(".entry-content").html()]}}))}))},o.prototype.searchNovels=function(i){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site).then((function(t){return t.text()}))];case 1:return t=e.sent(),o=(0,r.load)(t),[2,this.parseNovels(o,i)]}}))}))},o}();exports.default=new o;