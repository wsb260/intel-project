(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e92260c"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=n("ae40"),c=a("filter"),s=o("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return a}))},"5baf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Card",[n("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[t._v("基本信息")]),n("Form",{ref:"basicInfo",attrs:{"label-position":"left",model:t.basicInfo,"label-width":120,inline:""}},[n("FormItem",{attrs:{label:"组件名称：",prop:"widgetTitle"}},[n("Input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入组件名称"},model:{value:t.config.title,callback:function(e){t.$set(t.config,"title",e)},expression:"config.title"}})],1),n("FormItem",{attrs:{label:"组件类型：",prop:"widgetType"}},[n("Select",{staticStyle:{width:"180px"},model:{value:t.config.type,callback:function(e){t.$set(t.config,"type",e)},expression:"config.type"}},t._l(t.typeList,(function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1)],1)],1)],1),n("Row",{staticClass:"create-body"},[n("Card",{staticClass:"widget-setting"},[n("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[t._v(" 组件配置 ")]),n("div",{staticClass:"settting-list"},[n("Collapse",{model:{value:t.colValue,callback:function(e){t.colValue=e},expression:"colValue"}},[n("Panel",{attrs:{name:"1"}},[t._v(" 数据源配置： "),n("ul",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("li",[n("span",[t._v("请求地址")]),n("div",[n("Input",{model:{value:t.config.path,callback:function(e){t.$set(t.config,"path",e)},expression:"config.path"}})],1)]),n("li",[n("span",[t._v("请求方法")]),n("Select",{staticStyle:{width:"200px"},model:{value:t.config.method,callback:function(e){t.$set(t.config,"method",e)},expression:"config.method"}},t._l(t.requestType,(function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)],1),n("li",[n("span",[t._v("请求参数")]),n("div",[n("Input",{model:{value:t.config.params,callback:function(e){t.$set(t.config,"params",e)},expression:"config.params"}})],1)])])]),n("Panel",{attrs:{name:"2"}},[t._v(" 样式配置 "),n("ul",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[n("li",[n("span",[t._v("类型")]),n("Select",{staticStyle:{width:"200px"},model:{value:t.config.style,callback:function(e){t.$set(t.config,"style",e)},expression:"config.style"}},t._l(t.styleType,(function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)],1)])])],1)],1),n("div",{staticClass:"action-list"},[n("Button",{on:{click:t.cancel}},[t._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.saveWidget()}}},[t._v("提交")]),n("Button",{attrs:{type:"success"},on:{click:t.showPreview}},[t._v("预览")])],1)]),n("Card",{staticClass:"widget-view"},[t.preview?[n("ChartTrend",{attrs:{chartType:t.chartType}})]:[n("div",{staticClass:"no-preview"})]],2)],1)],1)},i=[],a=(n("4160"),n("159b"),n("96cf"),n("1da1")),o=n("5530"),c=n("2f62"),s=n("5d2c"),u={name:"",data:function(){return{basicInfo:{widgetTitle:"",widgetType:""},typeList:[{label:"趋势图",value:"mdtrend"},{label:"仪表图",value:"mdcircle"},{label:"面板",value:"billboard"},{label:"表格",value:"mdtable"},{label:"事件流图",value:"eventRiver"}],baseInfoValidate:{widgetTitle:[{required:!0,message:"请填写",trigger:"blur"}],widgetType:[{required:!0,message:"请选择",trigger:"change"}]},colValue:"1",requestTypeValue:"",requestType:[{value:"GET",label:"GET"},{value:"POST",label:"POST"}],styleType:[{value:"line",label:"折线图"},{value:"bar",label:"柱状图"}],config:{path:"",method:"",params:"",style:"",title:"",type:""},preview:!1,chartType:"",routerId:"",routerIndex:"",routerPid:"",dashBoardData:[]}},computed:Object(o["a"])({},Object(c["c"])("edit",{dashBoard:function(t){return t.dashBoard}})),methods:Object(o["a"])({},Object(c["b"])(["updateAppName"]),{},Object(c["b"])("edit",["setInfo"]),{cancel:function(){this.$router.go(-1)},showPreview:function(){this.chartType=this.config.style,this.preview=!0},saveWidget:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["b"])(t.routerPid);case 2:n=e.sent,r=n.dashBoard,t.dashBoardData=r,t.dashBoardData[t.routerIndex].forEach((function(e){e.id===t.routerId&&t.$set(e,"config",t.config)})),t.saveData(),t.$router.back();case 8:case"end":return e.stop()}}),e)})))()},saveData:function(){console.log(this.dashBoardData),Object(s["d"])(this.routerPid,this.dashBoardData)}}),mounted:function(){var t=this.$route.query,e=t.id,n=t.index,r=t.pid;this.routerId=e,this.routerIndex=n,this.routerPid=r}},l=u,f=(n("ab94"),n("2877")),d=Object(f["a"])(l,r,i,!1,null,"083331a4",null);e["default"]=d.exports},"5d2c":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n("0c6d"),i=function(t,e){return r["a"].post("/edit"+t,e)},a=function(t){return r["a"].post("/edit/create",{title:t})},o=function(t,e){return r["a"].post("/edit/save",{pid:t,dashBoard:JSON.stringify(e)})},c=function(t){return r["a"].post("/edit/findOne",{id:t})}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"86be":function(t,e,n){},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),b=n("825a"),v=n("7b0b"),g=n("fc6a"),h=n("c04e"),y=n("5c6c"),m=n("7c73"),w=n("df75"),O=n("241c"),j=n("057f"),P=n("7418"),S=n("06cf"),T=n("9bf2"),_=n("d1e7"),k=n("9112"),x=n("6eeb"),I=n("5692"),C=n("f772"),D=n("d012"),B=n("90e3"),$=n("b622"),E=n("e538"),N=n("746f"),q=n("d44e"),V=n("69f3"),F=n("b727").forEach,J=C("hidden"),R="Symbol",W="prototype",A=$("toPrimitive"),G=V.set,L=V.getterFor(R),Q=Object[W],z=i.Symbol,H=a("JSON","stringify"),K=S.f,M=T.f,U=j.f,X=_.f,Y=I("symbols"),Z=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),nt=I("wks"),rt=i.QObject,it=!rt||!rt[W]||!rt[W].findChild,at=c&&l((function(){return 7!=m(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(Q,e);r&&delete Q[e],M(t,e,n),r&&t!==Q&&M(Q,e,r)}:M,ot=function(t,e){var n=Y[t]=m(z[W]);return G(n,{type:R,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},st=function(t,e,n){t===Q&&st(Z,e,n),b(t);var r=h(e,!0);return b(n),f(Y,r)?(n.enumerable?(f(t,J)&&t[J][r]&&(t[J][r]=!1),n=m(n,{enumerable:y(0,!1)})):(f(t,J)||M(t,J,y(1,{})),t[J][r]=!0),at(t,r,n)):M(t,r,n)},ut=function(t,e){b(t);var n=g(e),r=w(n).concat(bt(n));return F(r,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},lt=function(t,e){return void 0===e?m(t):ut(m(t),e)},ft=function(t){var e=h(t,!0),n=X.call(this,e);return!(this===Q&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,J)&&this[J][e])||n)},dt=function(t,e){var n=g(t),r=h(e,!0);if(n!==Q||!f(Y,r)||f(Z,r)){var i=K(n,r);return!i||!f(Y,r)||f(n,J)&&n[J][r]||(i.enumerable=!0),i}},pt=function(t){var e=U(g(t)),n=[];return F(e,(function(t){f(Y,t)||f(D,t)||n.push(t)})),n},bt=function(t){var e=t===Q,n=U(e?Z:g(t)),r=[];return F(n,(function(t){!f(Y,t)||e&&!f(Q,t)||r.push(Y[t])})),r};if(s||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=B(t),n=function(t){this===Q&&n.call(Z,t),f(this,J)&&f(this[J],e)&&(this[J][e]=!1),at(this,e,y(1,t))};return c&&it&&at(Q,e,{configurable:!0,set:n}),ot(e,t)},x(z[W],"toString",(function(){return L(this).tag})),x(z,"withoutSetter",(function(t){return ot(B(t),t)})),_.f=ft,T.f=st,S.f=dt,O.f=j.f=pt,P.f=bt,E.f=function(t){return ot($(t),t)},c&&(M(z[W],"description",{configurable:!0,get:function(){return L(this).description}}),o||x(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:z}),F(w(nt),(function(t){N(t)})),r({target:R,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),r({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(v(t))}}),H){var vt=!s||l((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,H.apply(null,i)}})}z[W][A]||k(z[W],A,z[W].valueOf),q(z,R),D[J]=!0},ab94:function(t,e,n){"use strict";var r=n("86be"),i=n.n(r);i.a},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),a=n("56ef"),o=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=c.f,u=a(r),l={},f=0;while(u.length>f)n=i(r,e=u[f++]),void 0!==n&&s(l,e,n);return l}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),a=n("fc6a"),o=n("06cf").f,c=n("83ab"),s=i((function(){o(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-7e92260c.f90c6907.js.map