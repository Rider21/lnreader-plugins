var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,i){function o(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,a,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),n=require("@libs/fetch"),a=require("@libs/novelStatus"),i=function(){function i(){this.id="truyenfull",this.name="Truyện Full",this.icon="src/vi/truyenfull/icon.png",this.site="https://truyenfull.vn",this.version="1.0.0"}return i.prototype.parseNovels=function(t){var e=this,r=[];return t(".list-truyen .row").each((function(n,a){var i=t(a).find("h3.truyen-title > a").text(),o=t(a).find("div[data-classname='cover']").attr("data-image"),s=t(a).find("h3.truyen-title > a").attr("href");s&&r.push({name:i,cover:o,path:s.replace(e.site,"")})})),r},i.prototype.parseChapters=function(t){var e=this;return t("ul.list-chapter > li > a").toArray().map((function(r){var n,a=r.attribs.href.replace(e.site,"");return{name:t(r).text().trim(),path:a,chapterNumber:Number(null===(n=a.match(/\/chuong-(\d+)\//))||void 0===n?void 0:n[1])}}))},i.prototype.popularNovels=function(a){return t(this,void 0,void 0,(function(){var t,i,o;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/danh-sach/truyen-hot/trang-").concat(a,"/"),[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return i=e.sent(),o=(0,r.load)(i),[2,this.parseNovels(o)]}}))}))},i.prototype.parseNovel=function(i){return t(this,void 0,void 0,(function(){var t,o,s,c,u;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),s=(0,r.load)(o),c=1,s("ul.pagination.pagination-sm > li > a").each((function(){var t,e=Number(null===(t=this.attribs.href.match(/\/trang-(\d+)\//))||void 0===t?void 0:t[1]);e&&e>c&&(c=e)})),(u={path:i,name:s("div.book > img").attr("alt")||"Không có tiêu đề",chapters:[],totalPages:c}).cover=s("div.book > img").attr("src"),u.summary=s("div.desc-text").text().trim(),u.author=s('h3:contains("Tác giả:")').parent().contents().text().replace("Tác giả:",""),u.genres=s('h3:contains("Thể loại")').siblings().map((function(t,e){return s(e).text()})).toArray().join(","),u.status=s('h3:contains("Trạng thái")').next().text(),"Full"===u.status?u.status=a.NovelStatus.Completed:"Đang ra"===u.status?u.status=a.NovelStatus.Ongoing:u.status=a.NovelStatus.Unknown,u.chapters=this.parseChapters(s),[2,u]}}))}))},i.prototype.parsePage=function(a,i){return t(this,void 0,void 0,(function(){var t,o,s;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site).concat(a,"trang-").concat(i,"/#list-chapter"),[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),s=(0,r.load)(o),[2,{chapters:this.parseChapters(s)}]}}))}))},i.prototype.parseChapter=function(a){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+a)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),i=(0,r.load)(t),[2,(i(".chapter-title").html()||"")+(i("#chapter-c").html()||"")]}}))}))},i.prototype.searchNovels=function(a,i){return t(this,void 0,void 0,(function(){var t,o,s;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/tim-kiem?tukhoa=").concat(a,"&page=").concat(i),[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),s=(0,r.load)(o),[2,this.parseNovels(s)]}}))}))},i}();exports.default=new i;