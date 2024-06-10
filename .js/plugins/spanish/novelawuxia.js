var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/defaultCover"),o=function(){function o(){this.id="reinowuxia",this.name="ReinoWuxia",this.icon="src/es/reinowuxia/icon.png",this.version="1.0.0",this.site="http://www.reinowuxia.com/"}return o.prototype.getNovelName=function(t){return null==t?void 0:t.replace(/-/g," ").replace(/(?:^|\s)\S/g,(function(t){return t.toUpperCase()}))},o.prototype.popularNovels=function(i,o){return t(this,void 0,void 0,(function(){var t,i,o,a,s=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"p/todas-las-novelas.html",[4,(0,n.fetchApi)(t,{method:"GET"})];case 1:return[4,e.sent().text()];case 2:return i=e.sent(),o=(0,r.load)(i),a=[],o(".post-body.entry-content").find("a").each((function(t,e){var n,r,i=null===(r=null===(n=o(e).attr("href"))||void 0===n?void 0:n.split("/").pop())||void 0===r?void 0:r.replace(".html","");i=s.getNovelName(i);var u=o(e).find("img").attr("src"),c=o(e).attr("href");if(i&&c){var l={name:i,cover:u,path:c.replace(s.site,"")};a.push(l)}})),[2,a]}}))}))},o.prototype.parseNovel=function(i){return t(this,void 0,void 0,(function(){var t,o,a,s,u,c=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),a=(0,r.load)(o),(s={path:i,name:a("h1.post-title").text().trim()}).cover=a("div.separator").find("a").attr("href"),s.status="",a("div > b").each((function(){var t=a(this).text(),e=a(this)[0].nextSibling;if(t&&e){var n=a(e).text();t.includes("Autor")&&(s.author=n.replace("Autor:","")),t.includes("Estatus")&&(s.status=n.replace("Estatus: ","")),t.includes("Géneros:")&&(s.genres=n.replace("Géneros: ","").replace(/,\s/g,","))}})),u=[],a("div").each((function(t,e){var n=a(e).text();n.includes("Sinopsis")&&(s.summary=""!==a(e).next().text()?a(e).next().text().replace("Sinopsis","").trim():a(e).next().next().text().replace("Sinopsis","").trim()),n.includes("Lista de Capítulos")&&a(e).find("a").each((function(t,e){var n,r=a(e).text(),i=null===(n=a(e).attr("href"))||void 0===n?void 0:n.replace(c.site,"");if(r&&i&&"/"!==i&&!u.some((function(t){return t.name===r}))){var o={name:r,releaseTime:null,path:i};u.push(o)}}))})),s.chapters=u,[2,s]}}))}))},o.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,o,a;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),a=(0,r.load)(o),[2,a(".post-body.entry-content").html()||""]}}))}))},o.prototype.searchNovels=function(o,a){return t(this,void 0,void 0,(function(){var t,a,s,u,c=this;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"search?q=").concat(o),[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),s=(0,r.load)(a),u=[],s(".date-outer").each((function(t,e){var n,r,o=null===(r=null===(n=s(e).find("a").attr("href"))||void 0===n?void 0:n.split("/").pop())||void 0===r?void 0:r.replace(/-capitulo(.*?).html/,""),a=o+".html/";o=c.getNovelName(o);var l=u.some((function(t){return t.name===o}));if(!l){var h=i.defaultCover;if(!a||!o)return;var p={name:o,cover:h,path:a.replace(c.site,"")};u.push(p)}})),[2,u]}}))}))},o}();exports.default=new o;