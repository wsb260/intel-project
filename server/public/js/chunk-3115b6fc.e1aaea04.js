(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3115b6fc"],{"5d2c":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return i}));var n=a("0c6d"),r=function(t,e){return n["a"].post("/edit"+t,e)},o=function(t){return n["a"].post("/edit/create",{title:t})},s=function(t,e){return n["a"].post("/edit/save",{pid:t,dashBoard:JSON.stringify(e)})},i=function(t){return n["a"].post("/edit/findOne",{id:t})}},"6be2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-list"},[a("Card",{staticClass:"table-card",attrs:{bordered:!1}},[a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:8}},[a("label",[t._v("组件页名称：")]),a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"Enter something..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("Col",{attrs:{span:4,offset:"12"}},[a("Button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addDashboard}},[t._v("新建组件页")])],1)],1),a("Row",[a("filterTable",{attrs:{columns:t.columns,data:t.listData}})],1)],1),a("Modal",{attrs:{title:"添加仪表盘",width:400},model:{value:t.newDashboard,callback:function(e){t.newDashboard=e},expression:"newDashboard"}},[a("Form",{ref:"newDashboard",attrs:{"v-model":t.dashboardInfo,rules:t.rule}},[a("FormItem",{attrs:{prop:"name",label:"仪表盘名称"}},[a("Input",{attrs:{type:"text",placeholder:"以字母开头，字母下划线数字组成"},model:{value:t.dashboardInfo.name,callback:function(e){t.$set(t.dashboardInfo,"name",e)},expression:"dashboardInfo.name"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:t.addCancel}},[t._v("取消")]),a("Button",{staticStyle:{"margin-right":"0"},attrs:{type:"primary"},on:{click:t.addAction}},[t._v("确定")])],1)],1)],1)},r=[],o=(a("b0c0"),a("96cf"),a("1da1")),s=a("5d2c"),i={name:"list",data:function(){return{value:"",newDashboard:!1,dashboardInfo:{name:""},rule:{name:[{required:!0,message:"不能为空",trigger:"blur"}]},columns:[{title:"组件标识",key:"_id",align:"center"},{title:"组件名称",slot:"title",align:"center"},{title:"时间",key:"date",align:"center"},{title:"修改",slot:"modify",align:"center"}],listData:[]}},methods:{addDashboard:function(){this.newDashboard=!0},addAction:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])(t.dashboardInfo.name);case 2:a=e.sent,n=a._id,t.$router.push({path:"edit",query:{id:n}});case 5:case"end":return e.stop()}}),e)})))()},addCancel:function(){}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])("/getList");case 2:t.listData=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},c=i,d=a("2877"),l=Object(d["a"])(c,n,r,!1,null,"e6647e7e",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3115b6fc.e1aaea04.js.map