var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(r,i){function n(e){try{o(l.next(e))}catch(e){i(e)}}function s(e){try{o(l.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}o((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,r,i,n={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(o){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(n=0)),n;)try{if(a=1,l&&(r=2&s[0]?l.return:s[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,s[1])).done)return r;switch(l=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return n.label++,{value:s[1],done:0};case 5:n.label++,l=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(!(r=n.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){n=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(6===s[0]&&n.label<r[1]){n.label=r[1],r=s;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(s);break}r[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],l=0}finally{a=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,o])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("cheerio"),l=require("@libs/fetch"),r=require("@libs/novelStatus"),i=require("@libs/defaultCover"),n=new(function(){function n(e){var t;this.fetchImage=l.fetchFile,this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(4+a),this.options=e.options,this.filters=e.filters}return n.prototype.getHostname=function(e){return e.split("/")[2]},n.prototype.getCheerio=function(r,i){return e(this,void 0,void 0,(function(){var e,n,s,o;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(r)];case 1:if(!(e=t.sent()).ok&&1!=i)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return s=a.load,[4,e.text()];case 2:if(n=s.apply(void 0,[t.sent()]),o=n("title").text().trim(),this.getHostname(r)!=this.getHostname(e.url)||"Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o)throw new Error("Captcha error, please open in webview");return[2,n]}}))}))},n.prototype.parseNovels=function(e){var t=this,a=[];return e("div.listupd > article").each((function(l,r){var n=e(r).find("h2").text(),s=e(r).find("img"),o=e(r).find("a").attr("href");o&&a.push({name:n,cover:s.attr("data-src")||s.attr("src")||i.defaultCover,path:o.replace(t.site,"")})})),a},n.prototype.popularNovels=function(a,l){return e(this,arguments,void 0,(function(e,a){var l,r,i,n,s,o,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(r in l=this.site+"/series/?page="+e,u||(u={}),c&&(l+="&order=latest"),u)if("object"==typeof u[r].value)for(i=0,n=u[r].value;i<n.length;i++)s=n[i],l+="&".concat(r,"=").concat(s);else u[r].value&&(l+="&".concat(r,"=").concat(u[r].value));return[4,this.getCheerio(l,0)];case 1:return o=t.sent(),[2,this.parseNovels(o)]}}))}))},n.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,l,n,s,o,u,c,v,h,p=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,0)];case 1:switch(e=t.sent(),(l={path:a.replace(this.site,""),name:"Untitled"}).name=e("h1.entry-title").text().trim(),n=e("img.wp-post-image"),l.cover=n.attr("data-src")||n.attr("src")||i.defaultCover,(null===(v=e("div.sertostat > span").attr("class"))||void 0===v?void 0:v.toLowerCase())||""){case"completed":l.status=r.NovelStatus.Completed;break;case"ongoing":l.status=r.NovelStatus.Ongoing;break;case"hiatus":l.status=r.NovelStatus.OnHiatus;break;default:l.status=r.NovelStatus.Unknown}return(s=e("div.serl")).length||(s=e("div.spe > span")),s.each((function(){var t=e(this).contents().first().text().replace(":","").trim().toLowerCase(),a=e(this).contents().last().text().trim().toLowerCase();switch(t){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":l.author=a;break;case"الحالة":case"status":case"statut":case"estado":case"durum":switch(a){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":l.status=r.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":l.status=r.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":l.status=r.NovelStatus.OnHiatus;break;default:l.status=r.NovelStatus.Unknown}break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":l.artist=a}})),(o=e(".sertogenre")).length||(o=e(".genxed")),l.genres=o.children("a").map((function(t,a){return e(a).text()})).toArray().join(","),(u=e(".sersys > p").map((function(t,a){return e(a).text().trim()})).toArray()).length||(u=e(".entry-content > p").map((function(t,a){return e(a).text().trim()})).toArray()),l.summary=u.join("\n"),c=[],e(".eplister li").each((function(t,a){var l,r=e(a).find(".epl-num").text()+" "+e(a).find(".epl-title").text(),i=e(a).find("a").attr("href")||"",n=e(a).find(".epl-date").text().trim();switch(e(a).find(".epl-price").text().trim().toLowerCase()){case"free":case"gratuit":case"مجاني":case"livre":case"":l=1;break;default:l=0}l&&c.push({name:r,path:i.replace(p.site,""),releaseTime:n})})),(null===(h=this.options)||void 0===h?void 0:h.reverseChapters)&&c.length&&c.reverse(),l.chapters=c,[2,l]}}))}))},n.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,l,r;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,0)];case 1:return e=t.sent(),"kolnovel"==this.id&&((l=e("article > style").text().trim().split(",")).push.apply(l,(null===(r=l.pop())||void 0===r?void 0:r.match(/^\.\w+/))||[]),l.map((function(t){return e("p".concat(t)).remove()}))),[2,e(".epcontent p").map((function(t,a){return e(a)})).toArray().join("\n")||""]}}))}))},n.prototype.searchNovels=function(a,l){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+l+"/?s="+a,[4,this.getCheerio(e,1)];case 1:return r=t.sent(),[2,this.parseNovels(r)]}}))}))},n}())({id:"noveltr",sourceSite:"https://noveltr.com/",sourceName:"NovelTR",options:{lang:"Turkish",reverseChapters:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Aksiyon",value:"aksiyon"},{label:"Bilim Kurgu",value:"bilim-kurgu"},{label:"Büyü",value:"buyu"},{label:"Comedy",value:"comedy"},{label:"Doğaüstü",value:"dogaustu"},{label:"dövüş sanatları",value:"dovus-sanatlari"},{label:"Dram",value:"dram"},{label:"Drama",value:"drama"},{label:"ecchi",value:"ecchi"},{label:"fantastik",value:"fantastik"},{label:"Fantasy",value:"fantasy"},{label:"gizem",value:"gizem"},{label:"Harem",value:"harem"},{label:"isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"Komedi",value:"komedi"},{label:"korku",value:"korku"},{label:"macera",value:"macera"},{label:"Mecha",value:"mecha"},{label:"okul",value:"okul"},{label:"oyun",value:"oyun"},{label:"psikoloji",value:"psikoloji"},{label:"Psychological",value:"psychological"},{label:"reenkarnasyon",value:"reenkarnasyon"},{label:"Romance",value:"romance"},{label:"Romantik",value:"romantik"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"süper kahraman",value:"super-kahraman"},{label:"Supernatural",value:"supernatural"},{label:"tarih",value:"tarih"},{label:"trajedi",value:"trajedi"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"yetişkin",value:"yetiskin"},{label:"Yuri",value:"yuri"}]},"type[]":{type:"Checkbox",label:"Tür",value:[],options:[{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Durum",value:"",options:[{label:"Hepsi",value:""},{label:"Devam Ediyor",value:"ongoing"},{label:"Askıda",value:"hiatus"},{label:"Tamamlanmış",value:"completed"}]},order:{type:"Picker",label:"Sıralama",value:"",options:[{label:"Varsayılan",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=n;