webpackJsonp([1],{168:function(s,t,e){function n(s){e(215)}var a=e(219)(e(186),e(220),n,null,null);s.exports=a.exports},186:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(189),a=e.n(n),r=e(17),o=e.n(r),i=e(0),u=(e.n(i),e(18));e.n(u);t.default={name:"app",data:function(){return{persons:[],msg:"Teste TOPi",page:1,list:[],people:[],quantity:6,title:"RandomUser.me / Vue.js / Axios",dadosTeste:[{avatar_url:"https://avatars3.githubusercontent.com/u/36260787?v=4",full_name:"CyC2018/CS-Notes",stargazers_count:64689,forks_count:19816,html_url:"https://github.com/CyC2018/CS-Notes"},{avatar_url:"https://avatars1.githubusercontent.com/u/582346?v=4",full_name:"iluwatar/java-design-patterns",stargazers_count:48081,forks_count:15579,html_url:"https://github.com/iluwatar/java-design-patterns"},{avatar_url:"https://avatars0.githubusercontent.com/u/29880145?v=4",full_name:"Snailclimb/JavaGuide",stargazers_count:42293,forks_count:13365,html_url:"https://github.com/Snailclimb/JavaGuide"}]}},methods:{getInitialUsers:function(){for(var s=this,t=0;t<5;t++)console.log(t),o.a.get("https://randomuser.me/api/").then(function(t){s.persons.push(t.data.results[0])})},scroll:function(s){var t=this;window.onscroll=function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&o.a.get("https://randomuser.me/api/").then(function(s){t.persons.push(s.data.results[0])})}},infiniteHandler:function(s){var t=this;o.a.get("https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1",{params:{page:this.page}}).then(function(e){var n=e.data;if(n.incomplete_results){var r;t.page+=1,(r=t.list).push.apply(r,a()(n.items)),console.log("Puxou! -> ",n),s.loaded()}else s.complete()})},getPeople:function(){var s=this;o.a.get("https://randomuser.me/api/?results="+this.quantity).then(function(t){return s.people=t.data.results})}},beforeMount:function(){this.getInitialUsers(),console.log(this.persons)},mounted:function(){this.scroll(this.person)},created:function(){this.getPeople()}}},187:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(169),a=e(168),r=e.n(a),o=e(0),i=(e.n(o),e(18)),u=e.n(i);n.a.component("InfiniteLoading",u.a),new n.a({el:"#app",render:function(s){return s(r.a)}}),window.axios=e(17),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",n.a.prototype.$http=window.axios},215:function(s,t){},216:function(s,t,e){function n(s){return e(a(s))}function a(s){var t=r[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}var r={"./af":40,"./af.js":40,"./ar":47,"./ar-dz":41,"./ar-dz.js":41,"./ar-kw":42,"./ar-kw.js":42,"./ar-ly":43,"./ar-ly.js":43,"./ar-ma":44,"./ar-ma.js":44,"./ar-sa":45,"./ar-sa.js":45,"./ar-tn":46,"./ar-tn.js":46,"./ar.js":47,"./az":48,"./az.js":48,"./be":49,"./be.js":49,"./bg":50,"./bg.js":50,"./bm":51,"./bm.js":51,"./bn":52,"./bn.js":52,"./bo":53,"./bo.js":53,"./br":54,"./br.js":54,"./bs":55,"./bs.js":55,"./ca":56,"./ca.js":56,"./cs":57,"./cs.js":57,"./cv":58,"./cv.js":58,"./cy":59,"./cy.js":59,"./da":60,"./da.js":60,"./de":63,"./de-at":61,"./de-at.js":61,"./de-ch":62,"./de-ch.js":62,"./de.js":63,"./dv":64,"./dv.js":64,"./el":65,"./el.js":65,"./en-SG":66,"./en-SG.js":66,"./en-au":67,"./en-au.js":67,"./en-ca":68,"./en-ca.js":68,"./en-gb":69,"./en-gb.js":69,"./en-ie":70,"./en-ie.js":70,"./en-il":71,"./en-il.js":71,"./en-nz":72,"./en-nz.js":72,"./eo":73,"./eo.js":73,"./es":76,"./es-do":74,"./es-do.js":74,"./es-us":75,"./es-us.js":75,"./es.js":76,"./et":77,"./et.js":77,"./eu":78,"./eu.js":78,"./fa":79,"./fa.js":79,"./fi":80,"./fi.js":80,"./fo":81,"./fo.js":81,"./fr":84,"./fr-ca":82,"./fr-ca.js":82,"./fr-ch":83,"./fr-ch.js":83,"./fr.js":84,"./fy":85,"./fy.js":85,"./ga":86,"./ga.js":86,"./gd":87,"./gd.js":87,"./gl":88,"./gl.js":88,"./gom-latn":89,"./gom-latn.js":89,"./gu":90,"./gu.js":90,"./he":91,"./he.js":91,"./hi":92,"./hi.js":92,"./hr":93,"./hr.js":93,"./hu":94,"./hu.js":94,"./hy-am":95,"./hy-am.js":95,"./id":96,"./id.js":96,"./is":97,"./is.js":97,"./it":99,"./it-ch":98,"./it-ch.js":98,"./it.js":99,"./ja":100,"./ja.js":100,"./jv":101,"./jv.js":101,"./ka":102,"./ka.js":102,"./kk":103,"./kk.js":103,"./km":104,"./km.js":104,"./kn":105,"./kn.js":105,"./ko":106,"./ko.js":106,"./ku":107,"./ku.js":107,"./ky":108,"./ky.js":108,"./lb":109,"./lb.js":109,"./lo":110,"./lo.js":110,"./lt":111,"./lt.js":111,"./lv":112,"./lv.js":112,"./me":113,"./me.js":113,"./mi":114,"./mi.js":114,"./mk":115,"./mk.js":115,"./ml":116,"./ml.js":116,"./mn":117,"./mn.js":117,"./mr":118,"./mr.js":118,"./ms":120,"./ms-my":119,"./ms-my.js":119,"./ms.js":120,"./mt":121,"./mt.js":121,"./my":122,"./my.js":122,"./nb":123,"./nb.js":123,"./ne":124,"./ne.js":124,"./nl":126,"./nl-be":125,"./nl-be.js":125,"./nl.js":126,"./nn":127,"./nn.js":127,"./pa-in":128,"./pa-in.js":128,"./pl":129,"./pl.js":129,"./pt":131,"./pt-br":130,"./pt-br.js":130,"./pt.js":131,"./ro":132,"./ro.js":132,"./ru":133,"./ru.js":133,"./sd":134,"./sd.js":134,"./se":135,"./se.js":135,"./si":136,"./si.js":136,"./sk":137,"./sk.js":137,"./sl":138,"./sl.js":138,"./sq":139,"./sq.js":139,"./sr":141,"./sr-cyrl":140,"./sr-cyrl.js":140,"./sr.js":141,"./ss":142,"./ss.js":142,"./sv":143,"./sv.js":143,"./sw":144,"./sw.js":144,"./ta":145,"./ta.js":145,"./te":146,"./te.js":146,"./tet":147,"./tet.js":147,"./tg":148,"./tg.js":148,"./th":149,"./th.js":149,"./tl-ph":150,"./tl-ph.js":150,"./tlh":151,"./tlh.js":151,"./tr":152,"./tr.js":152,"./tzl":153,"./tzl.js":153,"./tzm":155,"./tzm-latn":154,"./tzm-latn.js":154,"./tzm.js":155,"./ug-cn":156,"./ug-cn.js":156,"./uk":157,"./uk.js":157,"./ur":158,"./ur.js":158,"./uz":160,"./uz-latn":159,"./uz-latn.js":159,"./uz.js":160,"./vi":161,"./vi.js":161,"./x-pseudo":162,"./x-pseudo.js":162,"./yo":163,"./yo.js":163,"./zh-cn":164,"./zh-cn.js":164,"./zh-hk":165,"./zh-hk.js":165,"./zh-tw":166,"./zh-tw.js":166};n.keys=function(){return Object.keys(r)},n.resolve=a,s.exports=n,n.id=216},220:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[s._v("Git Repositories Info ")]),s._v(" "),e("br"),e("br"),e("br"),e("br"),e("br"),s._v(" "),e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("transition-group",{staticClass:"row",attrs:{name:"fade",tag:"div"}},s._l(s.dadosTeste,function(t,n){return e("div",{key:n,staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"person"},[e("div",{staticClass:"person__header"},[e("img",{staticClass:"rounded img-thumbnail",attrs:{src:t.avatar_url,alt:s.person,height:"126px",width:"126px"}}),s._v(" "),e("br"),s._v(" "),e("a",{staticClass:"person__name",attrs:{href:t.html_url}},[s._v(s._s(t.full_name))])]),s._v(" "),e("div",{staticClass:"person__email"},[e("p",[e("b",[s._v("Current Stars: ")]),s._v(s._s(t.stargazers_count))]),s._v(" "),e("p",[e("b",[s._v("Current Forks: ")]),s._v(s._s(t.forks_count))])]),s._v(" "),e("br")])])}),0)],1)])])},staticRenderFns:[]}}},[187]);
//# sourceMappingURL=app.87c41875ebb01f44414a.js.map