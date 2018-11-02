(function(t){function e(e){for(var n,a,i=e[0],l=e[1],s=e[2],u=0,f=[];u<i.length;u++)a=i[u],d[a]&&f.push(d[a][0]),d[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==d[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},d={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"4e3a":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),d=o("bb71");o("da64");n["a"].use(d["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[o("v-card",[o("v-card-title",{attrs:{"primary-title":""}},[o("div",[o("h3",{staticClass:"headline mb-0"},[t._v("To do:")])])]),o("v-card-text",[t._l(t.todos,function(t,e){return o("TodoItem",{key:e,attrs:{todo:t}})}),o("v-form",[o("v-text-field",{attrs:{label:"What do you need to do?"},model:{value:t.newItem,callback:function(e){t.newItem=e},expression:"newItem"}})],1)],2),o("v-card-actions",[o("v-spacer"),o("v-btn",{on:{click:t.addTodo}},[t._v("Save Item")])],1)],1)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",staticStyle:{display:"flex","justify-content":"space-between"}},[o("v-text-field",{ref:"text",class:[t.todo.done?"is-done":""],attrs:{value:t.todo.title},on:{blur:function(e){t.editTodo({todo:t.todo,title:t.title})},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editTodo({todo:t.todo,title:t.title})}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.toggleTodo(t.todo)}}},[o("v-icon",[t._v("done")])],1),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.deleteTodo(t.todo)}}},[o("v-icon",[t._v("delete_forever")])],1)],1)},l=[],s=o("2f62"),c={name:"TodoItem",props:["todo"],data(){return{title:this.todo.title}},methods:{...Object(s["b"])(["editTodo","toggleTodo","deleteTodo"])}},u=c,f=(o("6959"),o("2877")),p=o("6544"),v=o.n(p),m=o("8336"),b=o("132d"),T=o("2677"),g=Object(f["a"])(u,i,l,!1,null,null,null);g.options.__file="TodoItem.vue";var h=g.exports;v()(g,{VBtn:m["a"],VIcon:b["a"],VTextField:T["a"]});var y={name:"App",components:{TodoItem:h},data(){return{newItem:""}},computed:{todos(){return this.$store.state.todos}},methods:{addTodo(t){this.$store.dispatch("addTodo",this.newItem)}}},x=y,w=o("b0af"),_=o("99d9"),O=o("12b2"),k=o("0e8f"),I=o("4bd4"),S=o("a722"),V=o("9910"),j=Object(f["a"])(x,r,a,!1,null,null,null);j.options.__file="App.vue";var C=j.exports;v()(j,{VBtn:m["a"],VCard:w["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:O["a"],VFlex:k["a"],VForm:I["a"],VLayout:S["a"],VSpacer:V["a"],VTextField:T["a"]}),n["a"].use(s["a"]);const P="todoKey";var $=new s["a"].Store({state:{todos:JSON.parse(window.localStorage.getItem(P)||"[]")},actions:{addTodo({commit:t},e){t("addTodo",{title:e,done:!1})},toggleTodo({commit:t},e){t("toggleTodo",{todo:e,done:!e.done})},editTodo({commit:t},{todo:e,title:o}){t("editTodo",{todo:e,title:o}),console.log("title",o)},deleteTodo({commit:t},e){t("deleteTodo",{todo:e})}},mutations:{toggleTodo(t,{todo:e,done:o}){console.log(t.todos.indexOf(e)),e.done=o},editTodo(t,{todo:e,title:o}){e.title=o},deleteTodo(t,{todo:e}){const o=t.todos.indexOf(e);t.todos.splice(o,1)},addTodo(t,e){t.todos.push(e)}},plugins:[t=>{t.subscribe((t,{todos:e})=>{window.localStorage.setItem(P,JSON.stringify(e))})}]});n["a"].config.productionTip=!1,new n["a"]({store:$,render:t=>t(C)}).$mount("#app")},6959:function(t,e,o){"use strict";var n=o("4e3a"),d=o.n(n);d.a}});
//# sourceMappingURL=app.83a6dbd3.js.map