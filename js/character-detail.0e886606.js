(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["character-detail"],{"1f31":function(t,a,e){},"7db0":function(t,a,e){"use strict";var r=e("23e7"),c=e("b727").find,s=e("44d2"),i=e("ae40"),n="find",o=!0,d=i(n);n in[]&&Array(1)[n]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!d},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),s(n)},befe:function(t,a,e){"use strict";e("1f31")},e342:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.loading?e("Loader"):t._e(),t.loading?t._e():e("div",[e("div",{staticClass:"container",attrs:{id:"character-detail"}},[e("div",{staticClass:"row row-cols-1 row-cols-md-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header text-center"},[t._v(" "+t._s(t.character.type||t.character.gender)+" ")]),e("img",{staticClass:"card-img-top",attrs:{src:t.character.image,alt:t.character.name}}),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title"},[t._v(t._s(t.character.name))]),e("h5",{staticClass:"card-title"},[t._v(t._s(t.character.species)+" ("+t._s(t.character.status)+")")]),e("p",{staticClass:"card-text"},[e("svg",{staticClass:"bi bi-geo-alt-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v(" "),e("small",{staticClass:"text-muted"},[t._v(t._s(t.character.location.name))])])])])])])])])],1)},c=[],s=(e("7db0"),e("96cf"),e("1da1")),i=e("a6f4"),n=e("bc3a"),o=e.n(n),d=e("568c"),l=Object(i["a"])({name:"CharacterDetail",components:{Loader:d["a"]},data:function(){return{character:{}}},mounted:function(){this.getCharacterDetail()},computed:{currentCharacter:function(){return this.$store.state.currentCharacter},loading:function(){return this.$store.state.loading.characterDetail}},methods:{getCharacterDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,r,c,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t.$route.params,r=parseInt(e.id),c=t.$store.state.characters,t.character=c.find((function(t){return t.id===r})),t.character){a.next=10;break}return s="https://rickandmortyapi.com/api/character/".concat(r),a.next=8,o.a.get(s);case 8:i=a.sent,t.character=i.data;case 10:t.$store.commit("setLoading",{loadingKey:"characterDetail",value:!1});case 11:case"end":return a.stop()}}),a)})))()}}}),u=l,h=(e("befe"),e("2877")),f=Object(h["a"])(u,r,c,!1,null,"0a22331b",null);a["default"]=f.exports}}]);
//# sourceMappingURL=character-detail.0e886606.js.map