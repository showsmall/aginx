(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3718770a"],{"0167":function(t,e,a){"use strict";a("29a9")},"0ac3":function(t,e,a){"use strict";function i(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var a=Object(t),i=1;i<arguments.length;i++){var s=arguments[i];if(void 0!==s&&null!==s)for(var n=Object.keys(Object(s)),r=0,o=n.length;r<o;r++){var c=n[r],l=Object.getOwnPropertyDescriptor(s,c);void 0!==l&&l.enumerable&&(a[c]=s[c])}}return a}function s(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:i})}t.exports={assign:i,polyfill:s}},"29a9":function(t,e,a){},3938:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-title",{attrs:{title:"代理列表","title-class":"icons cui-puzzle"}},[a("router-link",{attrs:{to:"/admin/server/edit"}},[a("i",{staticClass:"fa fa-plus-circle"}),t._v(" 添加服务\n        ")])],1),a("div",{staticClass:"p-3"},[a("div",{staticClass:"form-group form-inline"},[a("div",{staticClass:"input-group"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchName,expression:"searchName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"域名"},domProps:{value:t.searchName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.queryServices(e)},input:function(e){e.target.composing||(t.searchName=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",on:{click:t.queryServices}},[a("i",{staticClass:"fa fa-search-plus"}),t._v(" 搜索\n                    ")])])])]),a("table",{staticClass:"table table-bordered table-hover"},[t._m(1),a("tbody",[t._l(t.services,(function(e,i){return[t.showPage(i)?a("tr",[a("td",[a("span",{staticClass:"badge badge-dark"},[t._v(t._s(e.protocol))]),t._l(e.domains,(function(e){return a("span",{staticClass:"text-success font-weight-bold ml-2"},[t._v("\n                            "+t._s(e)+"\n                        ")])})),e.commit?a("div",{staticClass:"text-black-50"},[t._v("\n                            "+t._s(e.commit)+"\n                        ")]):t._e()],2),a("td",t._l(e.listens,(function(e){return a("div",[a("span",[t._v(t._s(e.host)+":"+t._s(e.port))]),e.default?a("span",{staticClass:"badge badge-success ml-2"},[t._v("默认")]):t._e(),e.http2?a("span",{staticClass:"badge badge-info ml-2"},[t._v("http2")]):t._e(),e.ssl?a("span",{staticClass:"badge badge-danger ml-2"},[t._v("ssl")]):t._e()])})),0),a("td",["http"!==e.protocol?a("div",[t._v("\n                            转向负载：\n                            "),a("router-link",{staticClass:"text-primary font-weight-bold",attrs:{to:{path:"/admin/upstream/edit",query:{name:e.proxyPass}}}},[t._v("\n                                "+t._s(e.proxyPass)+"\n                            ")])],1):t._e(),t._l(e.locations,(function(i){return"http"===e.protocol?a("div",[a("div",{staticClass:"badge badge-light"},[t._v("\n                                "+t._s(i.path)+"\n                            ")]),"html"===i.type?[t._v("\n                                静态文件\n                                "),a("span",{staticClass:"text-success font-weight-bold"},[t._v("\n                                    "+t._s(i.html.model)+": "+t._s(i.html.path)+"\n                                ")])]:"upstream"===i.type?[t._v("\n                                负载均衡\n                                "),a("router-link",{staticClass:"text-primary font-weight-bold",attrs:{to:{path:"/admin/upstream/edit",query:{name:i.upstream.name}}}},[t._v("\n                                    "+t._s(i.upstream.name)+"\n                                ")]),t._v("\n                                "+t._s(i.upstream.path)+"\n                            ")]:"http"===i.type?[t._v("\n                                动态代理\n                                "),a("span",{staticClass:"text-primary font-weight-bold"},[t._v("\n                                    "+t._s(i.http.to)+"\n                                ")])]:[t._v("\n                                用户定义\n                            ")],i.commit?a("span",{staticClass:"text-secondary"},[t._v(t._s(i.commit))]):t._e()],2):t._e()}))],2),a("td",[a("div",{staticClass:"d-flex justify-content-around"},[a("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(a){return t.editServer(e)}}},[a("i",{staticClass:"fa fa-edit"}),t._v(" 编辑\n                            ")]),a("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(a){return t.deleteServer(e.queries)}}},[a("i",{staticClass:"fa fa-remove"}),t._v(" 删除\n                            ")])])])]):t._e()]}))],2),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"4"}},[a("x-page",{attrs:{items:t.page},on:{change:function(e){t.page.page=e}}})],1)])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("域名")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-wrap",staticStyle:{width:"240px"},attrs:{scope:"col"}},[t._v("协议/域名/描述")]),a("th",{staticStyle:{width:"100px"},attrs:{scope:"col"}},[t._v("监听")]),a("th",{attrs:{scope:"col"}},[t._v("代理地址")]),a("th",{staticStyle:{width:"160px"},attrs:{scope:"col"}},[t._v("操作")])])])}],n=a("c0cf"),r=a("7a47"),o=a.n(r),c=a("c9b1"),l=a("3dcf"),u={name:"Files",components:{XPage:l["a"],Delete:c["a"],VTitle:n["a"],VueInputAutowidth:o.a},data:function(){return{services:[],searchName:"",page:{page:1,total:0,limit:12}}},mounted:function(){this.queryServices()},methods:{showPage:function(t){return t>=(this.page.page-1)*this.page.limit&&t<this.page.page*this.page.limit},refresh:function(){this.queryServices()},queryServices:function(){this.startLoading(),this.page.page=1;var t=this,e="/admin/api/server";""!==this.searchName&&(e+="?name="+encodeURI(this.searchName)),this.$axios.get(e).then((function(e){t.services=e,t.page.total=t.services.length})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.finishLoading()}))},editServer:function(t){"http"!==t.protocol?this.$router.push({path:"/admin/server/edit",query:{name:t.proxyPass,protocol:t.protocol}}):this.$router.push({path:"/admin/server/edit",query:{name:t.domains[0],protocol:t.protocol}})},deleteServer:function(t){for(var e=this,a="/admin/api/directive",i=0;i<t.length;i++)a+=0===i?"?q="+encodeURI(t[i]):"&q="+encodeURI(t[i]);this.$axios.delete(a).then((function(t){e.$toast.success("删除成功！"),e.queryServices()})).catch((function(t){e.$toast.error(t.message)}))}}},d=u,p=(a("0167"),a("c701")),m=Object(p["a"])(d,i,s,!1,null,null,null);e["default"]=m.exports},"3dcf":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"navigation"}},[a("ul",{staticClass:"pagination pagination-sm justify-content-center mb-0"},[a("li",{staticClass:"page-item disabled"},[a("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("\n                共 "+t._s(t.total)+" 条\n            ")])]),a("li",{staticClass:"page-item",class:{disabled:t.start}},[a("button",{staticClass:"page-link",on:{click:function(e){return t.toPage(1)}}},[t._v("首页")])]),t._l(t.pages,(function(e){return a("li",{staticClass:"page-item",class:{active:e===t.page}},[a("button",{staticClass:"page-link",on:{click:function(a){return t.toPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.end}},[a("button",{staticClass:"page-link",on:{click:function(e){return t.toPage(t.pages.length)}}},[t._v("尾页")])]),a("li",{staticClass:"page-item disabled"},[a("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("\n                每页 "+t._s(t.limit)+" 条\n            ")])])],2)])},s=[],n={name:"XPage",props:{items:Object},methods:{toPage:function(t){this.$emit("change",t)}},computed:{start:function(){return 1===this.page||this.total<this.limit},end:function(){return this.page===this.pages.length||this.total<this.limit},total:function(){return this.items.total},page:function(){return this.items.page},limit:function(){return this.items.limit},pages:function(){for(var t=[],e=1;e<=Math.round(this.total/this.limit);e++)t.push(e);return t}}},r=n,o=a("c701"),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports},"7a47":function(t,e,a){"use strict";function i(t,e){var a=document.querySelector(".vue-input-autowidth-mirror-".concat(t.dataset.uuid)),i={maxWidth:"none",minWidth:"none",comfortZone:0},s=Object.assign({},i,e.value);t.style.maxWidth=s.maxWidth,t.style.minWidth=s.minWidth;var n=t.value;n||(n=t.placeholder||"");while(a.childNodes.length)a.removeChild(a.childNodes[0]);a.appendChild(document.createTextNode(n));var r=a.scrollWidth+s.comfortZone+2;r!=t.scrollWidth&&(t.style.width="".concat(r,"px"))}a("917f");var s={bind:function(t){if("INPUT"!==t.tagName.toLocaleUpperCase())throw new Error("v-input-autowidth can only be used on input elements.");t.dataset.uuid=Math.random().toString(36).slice(-5),t.style.boxSizing="content-box"},inserted:function(t,e){var a=window.getComputedStyle(t);t.mirror=document.createElement("span"),Object.assign(t.mirror.style,{position:"absolute",top:"0",left:"0",visibility:"hidden",height:"0",overflow:"hidden",whiteSpace:"pre",fontSize:a.fontSize,fontFamily:a.fontFamily,fontWeight:a.fontWeight,fontStyle:a.fontStyle,letterSpacing:a.letterSpacing,textTransform:a.textTransform}),t.mirror.classList.add("vue-input-autowidth-mirror-".concat(t.dataset.uuid)),t.mirror.setAttribute("aria-hidden","true"),document.body.appendChild(t.mirror),i(t,e)},componentUpdated:function(t,e){i(t,e)},unbind:function(t){document.body.removeChild(t.mirror)}},n=function(t){t.directive("autowidth",s)};"undefined"!==typeof window&&window.Vue&&window.Vue.use(n),s.install=n,t.exports=s},"917f":function(t,e,a){"use strict";a("0ac3").polyfill()},c0cf:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",{staticClass:"breadcrumb breadcrumb-fixed"},[a("li",{staticClass:"breadcrumb-item"},[a("i",{staticClass:"fa",class:t.titleClass}),t._v(" "+t._s(t.title)+"\n    ")]),a("li",{staticClass:"ml-auto"},[t._t("default")],2)])},s=[],n={name:"vTitle",props:{title:String,titleClass:{type:String,default:""}}},r=n,o=a("c701"),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports},c9b1:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{on:{click:t.confirm}},[t._t("default")],2)},s=[],n={name:"delete",props:{title:{type:String,default:"确定？"},message:{type:String,default:"确定删除"}},methods:{confirm:function(){var t=this;this.$confirm(t.message,{title:t.title}).then((function(e){t.$emit("ok")})).catch((function(t){}))}}},r=n,o=a("c701"),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-3718770a.7550561a.js.map