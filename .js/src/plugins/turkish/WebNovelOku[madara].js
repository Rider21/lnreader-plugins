var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(r,i){function l(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},l=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return l.next=o(0),l.throw=o(1),l.return=o(2),"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,r=0,i=t.length;r<i;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),i=require("cheerio"),l=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=n(require("dayjs")),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function n(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),n=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",r=parseInt(n,10);if(!n)return e;if(u(e,["detik","segundo","second","วินาที"]))a=a.subtract(r,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(r,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(r,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(r,"days");else if(u(e,["week","semana"]))a=a.subtract(r,"week");else if(u(e,["month","mes"]))a=a.subtract(r,"month");else{if(!u(e,["year","año"]))return"Invalid Date"!==(0,s.default)(e).format("LL")?(0,s.default)(e).format("LL"):e;a=a.subtract(r,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(5+a),this.options=e.options,this.filters=e.filters}return n.prototype.translateDragontea=function(e){if("dragontea"===this.id){var t=(0,i.load)(e.html()||""),n=t.html()||"";n=(n=n.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(n),e.find(":not(:has(*))").each((function(e,n){var r,i=t(n),l="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=i.text().normalize("NFD").split(""),u=a([],s,!0).map((function(e){var t=e.normalize("NFC"),a=l.indexOf(t);return-1!==a?o[a]+e.slice(t.length):e})).join("");i.html((null===(r=i.html())||void 0===r?void 0:r.replace(i.text(),u).replace("\n","<br>"))||"")}))}return e},n.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},n.prototype.getCheerio=function(a,n){return e(this,void 0,void 0,(function(){var e,l,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=n)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=i.load,[4,e.text()];case 2:if(l=o.apply(void 0,[t.sent()]),s=l("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,l]}}))}))},n.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,n){var r=e(n).find(".post-title").text().trim(),i=e(n).find(".post-title").find("a").attr("href")||"";if(r&&i){var o=e(n).find("img"),s={name:r,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset")||l.defaultCover,path:i.replace(/https?:\/\/.*?\//,"/")};t.push(s)}})),t},n.prototype.popularNovels=function(a,n){return e(this,arguments,void 0,(function(e,a){var n,r,i,l,o,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in n=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(n+="&m_orderby=latest"),u)if("object"==typeof u[r].value)for(i=0,l=u[r].value;i<l.length;i++)o=l[i],n+="&".concat(r,"=").concat(o);else u[r].value&&(n+="&".concat(r,"=").concat(u[r].value));return[4,this.getCheerio(n,1!=e)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},n.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,n,u,c,p,h,m,v,d=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(n={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text().trim()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||l.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content");switch(t){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":n.genres?n.genres+=", "+a.find("a").map((function(t,a){return e(a).text()})).get().join(", "):n.genres=a.find("a").map((function(t,a){return e(a).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":n.author=a.text().trim();break;case"Status":case"Novel":case"Estado":n.status=a.text().trim().includes("OnGoing")||a.text().trim().includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed;break;case"Artist(s)":n.artist=a.text().trim()}})),n.author||(n.author=e(".manga-authors").text().trim()),e("div.summary__content .code-block,script,noscript").remove(),n.summary=this.translateDragontea(e("div.summary__content")).text().trim()||e("#tab-manga-about").text().trim()||e('.post-content_item h5:contains("Summary")').next().find("span").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-summary p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-excerpt p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim(),u=[],c="",(null===(v=this.options)||void 0===v?void 0:v.useNewChapterEndpoint)?[4,(0,r.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return c=t.sent(),[3,5];case 3:return p=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(h=new FormData).append("action","manga_get_chapters"),h.append("manga",p),[4,(0,r.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:h}).then((function(e){return e.text()}))];case 4:c=t.sent(),t.label=5;case 5:return"0"!==c&&(e=(0,i.load)(c)),m=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var n=e(a).find("a").text().trim(),r=e(a).find("span.chapter-release-date").text().trim();r=r?d.parseData(r):(0,s.default)().format("LL");var i=e(a).find("a").attr("href")||"";i&&"#"!=i&&u.push({name:n,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:r||null,chapterNumber:m-t})})),n.chapters=u.reverse(),[2,n]}}))}))},n.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),n=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&n.find('span[style*="opacity: 0; position: fixed;"]').remove(),n.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(n).html()||""]}}))}))},n.prototype.searchNovels=function(a,n){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+n+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},n}())({id:"webnoveloku",sourceSite:"https://www.webnoveloku.com/",sourceName:"WebNovelOku",options:{lang:"Turkish"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"+ 18",value:"18"},{label:"Aksiyon",value:"aksiyon"},{label:"Bilim Kurgu",value:"bilim-kurgu"},{label:"Dövüş Sanatları",value:"dovus-sanatlari"},{label:"Dram",value:"dram"},{label:"Ecchi",value:"ecchi"},{label:"Fantastik",value:"fantastik"},{label:"Fantezi",value:"fantezi"},{label:"Gizem",value:"gizem"},{label:"Harem",value:"harem"},{label:"Kadın Başrol",value:"kadin-basrol"},{label:"Kentsel",value:"kentsel"},{label:"Komedi",value:"komedi"},{label:"Macera",value:"macera"},{label:"Manga Listesi",value:"manga"},{label:"Okul Yaşamı",value:"okul-yasami"},{label:"Olgun",value:"olgun"},{label:"Oyun",value:"oyun"},{label:"Popüler",value:"populer"},{label:"Reenkarnasyon",value:"reenkarnasyon"},{label:"Romantik",value:"romantik"},{label:"Seinen",value:"seinen"},{label:"Shounen",value:"shounen"},{label:"Simya",value:"simya"},{label:"Sistem",value:"sistem"},{label:"Süpergüç",value:"superguc"},{label:"Tamamlanmış",value:"tamamlanmis"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yeni",value:"yeni"},{label:"Yetişim",value:"yetisim"},{label:"Yüksek Kalitede Çevrilmiş",value:"yuksek-kalitede-cevrilmis"}]},op:{type:"Switch",label:"Having ALL selected genres",value:!1},author:{type:"Text",label:"Yazar",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Çıkış Yılı",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Durum",value:[],options:[{label:"Tamamlandı",value:"complete"},{label:"Devam Ediyor",value:"on-going"},{label:"İptal Edildi",value:"canceled"},{label:"Beklemede",value:"on-hold"}]},m_orderby:{type:"Picker",label:"Sırala",value:"",options:[{label:"En Son",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Reyting",value:"rating"},{label:"Popülarite",value:"trending"},{label:"Görüntülenme",value:"views"},{label:"Yeni",value:"new-manga"}]}}});exports.default=c;