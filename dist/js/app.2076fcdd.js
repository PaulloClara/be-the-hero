(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"06b3":function(t,e,n){"use strict";var a=n("7e59"),i=n.n(a);i.a},"08c9":function(t,e,n){"use strict";var a=n("4490"),i=n.n(a);i.a},"125a":function(t,e,n){},2702:function(t,e,n){},3439:function(t,e,n){"use strict";var a=n("125a"),i=n.n(a);i.a},"3db0":function(t,e,n){"use strict";var a=n("768e"),i=n.n(a);i.a},4466:function(t,e,n){"use strict";var a=n("8ff1"),i=n.n(a);i.a},4490:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=n("62ad"),o=n.n(i),r=n("5886"),s=n("2f62"),c=n("bc3a"),u=n.n(c),l=u.a.create({baseURL:"http://localhost:3000",timeout:2e4}),d=n("5935"),p={state:{logged:!1,profile:{id:"",name:"",email:"",whatsapp:"",city:"",uf:"",created_at:"",token:""},login:{email:"",password:""},register:{name:"",email:"",whatsapp:"",city:"",uf:"",password:""}},getters:{getField:d["a"]},mutations:{updateSession(t,{token:e}){t.profile.token=e,localStorage.setItem("token",e),t.logged=""!==e},updateProfile(t,e){t.profile=e},updateRegisterForm(t,{name:e,email:n,password:a,whatsapp:i,city:o,uf:r}){t.register.name=e,t.register.email=n,t.register.password=a,t.register.whatsapp=i,t.register.city=o,t.register.uf=r},updateField:d["c"]},actions:{async getProfile({commit:t},{token:e}){try{const n=await l.get("/sessions",{headers:{Authorization:"Bearer "+e}});if(this.commit("updateStatus",n),200!==this.state.status.code)return;t("updateProfile",n.data)}catch({response:n}){this.commit("updateStatus",n)}},async login({commit:t},{email:e,password:n}){try{const a=await l.post("/sessions",{email:e,password:n});if(this.commit("updateStatus",a),200!==this.state.status.code)return;t("updateProfile",a.data.ong),t("updateSession",a.data)}catch({response:a}){this.commit("updateStatus",a)}},async register({commit:t},e){try{const n=await l.post("/ongs",e);if(this.commit("updateStatus",n),200!==this.state.status.code)return;t("updateProfile",n.data.ong),t("updateSession",n.data)}catch({response:n}){this.commit("updateStatus",n)}}},namespaced:!0},m=({totalPages:t,currentPage:e,totalButtonsLeft:n,totalButtonsRight:a})=>{const i=[],o=n+a,r=o>=t||e-n<=1?1:e+a>t?t-o:e-n,s=r+o>=t?t:r+o;for(let c=r;c<=s;c++)i.push(c);return i},h={state:{status:0,session:[],page:{incidents:[{id:1,title:"Iniciando...",description:"A API esta iniciando com dados falsos...",value:1,ong:{id:"683632de",name:"BeTheHero",city:"Teresina",email:"bethehero@ong.com",uf:"PI",whatsapp:"86999999999"},created_at:"2020-04-05 02:16:17"}],total:0,pages:0,limit:12,current:1,pagination:[]},register:{title:"",value:"",description:""}},getters:{getField:d["a"]},mutations:{updatePage(t,{incidents:e,current:n,limit:a,total:i}){t.page.limit=a,t.page.total=i,t.page.pages=(i/a).toFixed(),t.page.current=n,t.page.incidents=e},updatePagination(t){t.page.pagination=m({totalPages:t.page.pages,currentPage:t.page.current,totalButtonsLeft:this.state.pagination.buttonsLeft,totalButtonsRight:this.state.pagination.buttonsRight})},updateIncidents(t,{incidents:e}){t.session=e},updateForm(t,{title:e,value:n,description:a}){t.register.title=e,t.register.value=n,t.register.description=a},updateField:d["c"]},actions:{async getPage({commit:t},{page:e,limit:n=12}){try{const a=await l.get(`/incidents?page=${e}&limit=${n}`);if(this.commit("updateStatus",a),200!==this.state.status.code)return;t("updatePage",a.data),t("updatePagination")}catch({response:a}){this.commit("updateStatus",a)}},async getSessionIncidents({commit:t},{token:e}){try{const n=await l.get("/sessions/incidents",{headers:{Authorization:"Bearer "+e}});if(this.commit("updateStatus",n),200!==this.state.status.code)return;t("updateIncidents",{incidents:n.data})}catch({response:n}){this.commit("updateStatus",n)}},async register({state:t,commit:e,dispatch:n},{token:a,title:i,value:o,description:r}){try{const s=await l.post("/incidents",{title:i,value:o,description:r},{headers:{Authorization:"Bearer "+a}});if(this.commit("updateStatus",s),200!==this.state.status.code)return;n("getPage",{page:t.page.current});const c=[s.data,...t.session];e("updateIncidents",{incidents:c})}catch({response:s}){this.commit("updateStatus",s)}},async delete({state:t,commit:e,dispatch:n},{id:a,token:i}){try{const o=await l.delete("/incidents/"+a,{headers:{Authorization:"Bearer "+i}});if(this.commit("updateStatus",o),200!==this.state.status.code)return;await n("getPage",{page:t.page.current});const r=t.session.findIndex(t=>t.id===a),s=t.session.splice(r,1);e("updateIncidents",{incidents:s})}catch({response:o}){this.commit("updateStatus",o)}}},namespaced:!0};a["a"].use(s["a"]);var g=new s["a"].Store({state:{loading:!0,window:{width:0,height:0},pagination:{buttonsLeft:4,buttonsRight:4},alert:{configs:{title:"",text:"",icon:"",confirmButtonText:"OK",confirmButtonColor:"#e02041"},show:!1},status:{code:200,error:"",message:"",validation:{source:"",keys:[]}}},getters:{xsWindow(t){return t.window.width<480},smWindow(t){return t.window.width<800},mdWindow(t){return t.window.width<1366},lgWindow(t){return t.window.width<1920},xlWindow(t){return t.window.width>1920}},mutations:{updateStatus(t,{status:e,data:n}){if(200===e||!n.statusCode)return t.status.code=e;n.code=n.statusCode,n.statusCode=void 0,t.status=n},updateLoading(t,{loading:e}){t.loading=e},updateAlert(t,{title:e,text:n,icon:a}){t.alert.configs.text=n,t.alert.configs.icon=a,t.alert.configs.title=e},updateAlertStatus(t,{show:e}){t.alert.show=e},updatePaginationLength(t){const{xsWindow:e,smWindow:n,mdWindow:a,lgWindow:i}=this.getters;t.pagination.buttonsLeft=e?1:n?2:a?3:i?4:5,t.pagination.buttonsRight=t.pagination.buttonsLeft,this.commit("incident/updatePagination")},updateWindowSize(t){t.window.width=window.innerWidth,t.window.height=window.innerHeight,this.commit("updatePaginationLength")}},actions:{showAlert({commit:t},{title:e,text:n,icon:a}){t("updateAlert",{title:e,text:n,icon:a}),t("updateAlertStatus",{show:!0})}},modules:{ong:p,incident:h}}),f=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[t.logged?n("m-profile"):n("m-login")],1)},w=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("section",[a("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),a("form",{ref:"formLogin",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("h1",[t._v("Faça seu login")]),a("m-input",{attrs:{type:"email",name:"email",required:"true",placeholder:"Seu Email"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),a("m-input",{attrs:{type:"password",name:"password",min:"8",required:"true",placeholder:"Sua Senha"},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}}),a("m-button",{attrs:{type:"submit"}},[t._v("Entrar")]),a("m-link",{attrs:{to:{name:"register"},icon:["log-in",16,"#e02041"]}},[t._v(" Não tenho cadastro ")])],1)]),a("img",{attrs:{src:n("81c7"),alt:"heroes"}})])},y=[];const _={title:"Aviso importante!",text:"Essa aplicação é um teste, os dados serão resetados em breve...",icon:"warning"};function x({code:t,error:e,message:n,validation:a}){return 400===t&&"running"===a.source?{title:"Email em uso!",text:"Esse email já esta cadastrado no banco de dados.",icon:"error"}:{title:e,text:n,icon:"error"}}function k({code:t,error:e,message:n}){return 401===t?{title:"Email e/ou Senha invalido(s)!",text:"Verifique com atenção se o Email e Senha estão corretos.",icon:"error"}:404===t?{title:"O Email não consta no banco de dados...",text:"Talvez a aplicação tenha reiniciado.",icon:"warning"}:{title:e,text:n,icon:"error"}}function $({code:t,error:e,message:n}){return 401===t?{title:"Operação invalida!",text:"",icon:"error"}:{title:e,text:n,icon:"error"}}function S({code:t,error:e,message:n}){return{title:e,text:n,icon:"error"}}var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:t.to}},[n("feather",{attrs:{type:t.icon[0],size:t.icon[1],stroke:t.icon[2]}}),t._t("default")],2)},O=[],j={name:"Link",props:["icon","to"]},E=j,L=(n("d753"),n("2877")),A=Object(L["a"])(E,P,O,!1,null,"15b572d1",null),C=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"textarea"===t.type?n("textarea",{attrs:{name:t.name,required:t.required,maxlength:"number"!==t.type?t.max:"",placeholder:t.placeholder},on:{change:function(e){return t.emitInput(e)}}}):n("input",{attrs:{type:t.type,name:t.name,required:t.required,placeholder:t.placeholder,min:"number"===t.type?t.min:"",max:"number"===t.type?t.max:"",minlength:"number"!==t.type?t.min:"",maxlength:"number"!==t.type?t.max:""},on:{change:function(e){return t.emitInput(e)}}})},I=[],B={name:"Input",props:["type","name","min","max","required","placeholder"],methods:{emitInput(t){this.$emit("input",t.target.value)}}},F=B,q=(n("3439"),Object(L["a"])(F,T,I,!1,null,"4af70830",null)),z=q.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"link"===t.type?n("a",{on:{click:function(e){return t.emitClick(e)}}},[t._t("default")],2):n("button",{attrs:{type:t.type},on:{click:function(e){return t.emitClick(e)}}},[t._t("default")],2)},W=[],G={name:"Button",props:["type"],methods:{emitClick(t){this.$emit("click",t)}}},N=G,H=(n("06b3"),Object(L["a"])(N,R,W,!1,null,"ff6ef822",null)),D=H.exports,V={name:"Login",components:{"m-link":C,"m-input":z,"m-button":D},computed:{...Object(d["b"])("ong",["login.email","login.password"])},methods:{async handleSubmit(){const{email:t,password:e}=this;this.$store.commit("updateLoading",{loading:!0}),await this.$store.dispatch("ong/login",{email:t,password:e}),this.$store.commit("updateLoading",{loading:!1});const{status:n}=this.$store.state;if(200!==n.code)return this.$store.dispatch("showAlert",k(n))}}},M=V,J=(n("08c9"),Object(L["a"])(M,b,y,!1,null,"25d30106",null)),U=J.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"profile"}},[a("header",[a("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),a("span",[t._v("Bem vindo, "+t._s(t.ong.name))]),a("m-button",{on:{click:function(e){return t.$router.push({name:"new-incident"})}}},[t._v(" Cadastrar novo caso ")]),a("div",{staticClass:"icon",on:{click:t.handleLogout}},[a("feather",{attrs:{type:"power",size:"18",stroke:"#e02041"}})],1)],1),a("h1",[t._v("Casos cadastrados")]),a("div",{staticClass:"incident-list"},[a("m-pagination",{attrs:{totalPages:t.page.pages,currentPage:t.page.current,pagination:t.pagination},on:{goTo:t.handleGoTo}}),a("ul",t._l(t.page.incidents,(function(e){return a("li",{key:e.id},[a("m-card",{on:{remove:function(n){return t.handleRemove(e)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(e.title))]},proxy:!0},{key:"description",fn:function(){return[t._v(t._s(e.description))]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value))+" ")]},proxy:!0}],null,!0)})],1)})),0),a("m-pagination",{attrs:{totalPages:t.page.pages,currentPage:t.page.current,pagination:t.pagination},on:{goTo:t.handleGoTo}})],1)])},Q=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",[n("strong",[t._v("CASO:")]),n("p",[t._t("title")],2)]),n("div",[n("strong",[t._v("DESCRIÇÂO:")]),n("p",[t._t("description")],2)]),n("div",{staticClass:"value"},[n("strong",[t._v("VALOR:")]),n("p",[t._t("value")],2)]),n("div",{staticClass:"icon",on:{click:function(e){return t.emitRemove(e)}}},[n("feather",{attrs:{type:"trash-2",size:"20",stroke:"#a8a8b3"}})],1)])},Y=[],Z={name:"Card",methods:{emitRemove(t){this.$emit("remove",t)}}},tt=Z,et=(n("c6c1"),Object(L["a"])(tt,X,Y,!1,null,"877e6028",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("feather",{attrs:{type:"arrow-left-circle",size:"44",stroke:"#e02041"},on:{click:function(e){return t.emitGoTo(t.currentPage-1)}}}),n("div",t._l(t.pagination,(function(e){return n("m-button",{key:e,class:e===t.currentPage?"selected":"",attrs:{type:"link"},on:{click:function(n){return t.emitGoTo(e)}}},[t._v(" "+t._s(e)+" ")])})),1),n("feather",{attrs:{type:"arrow-right-circle",size:"44",stroke:"#e02041"},on:{click:function(e){return t.emitGoTo(t.currentPage+1)}}})],1)},it=[],ot={name:"Pagination",props:["totalPages","currentPage","pagination"],components:{"m-button":D},methods:{emitGoTo(t){t<1||t>this.totalPages||this.$emit("goTo",t)}}},rt=ot,st=(n("fbf8"),Object(L["a"])(rt,at,it,!1,null,"0895fb5a",null)),ct=st.exports,ut={name:"Profile",components:{"m-card":nt,"m-button":D,"m-pagination":ct},computed:{ong(){return this.$store.state.ong.profile},page(){return this.$store.state.incident.page},pagination(){return this.$store.state.incident.page.pagination}},methods:{handleLogout(){this.$store.commit("ong/updateSession",{token:""})},async handleGoTo(t){await this.$store.dispatch("incident/getPage",{page:t})},async handleRemove(t){const{token:e}=this.$store.state.ong.profile;await this.$store.dispatch("incident/delete",{token:e,...t});const{status:n}=this.$store.state;200!==this.$store.state.status.code&&this.$store.dispatch("showAlert",$(n))}},mounted(){1===this.$store.state.incident.page.incidents.length&&this.handleGoTo(1)}},lt=ut,dt=(n("6df5"),Object(L["a"])(lt,K,Q,!1,null,"9ee41452",null)),pt=dt.exports,mt={name:"Home",components:{"m-login":U,"m-profile":pt},computed:{logged(){return this.$store.state.ong.logged}}},ht=mt,gt=Object(L["a"])(ht,v,w,!1,null,"e6a7c69c",null),ft=gt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"register"}},[a("div",[a("section",[a("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),a("h1",[t._v("Cadastro")]),a("p",[t._v(" Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. ")]),a("m-link",{attrs:{to:{name:"home"},icon:["arrow-left",16,"#e02041"]}},[t._v(" Já tenho cadastro ")])],1),a("form",{ref:"registerOng",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("m-input",{attrs:{type:"text",name:"name",required:"true",placeholder:"Nome da ONG"},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}}),a("m-input",{attrs:{name:"email",type:"email",required:"true",placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),a("m-input",{attrs:{type:"password",name:"password",min:"8",required:"true",placeholder:"Senha"},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}}),a("m-input",{attrs:{type:"text",name:"whatsapp",min:"10",max:"17",required:"true",placeholder:"Whatsapp"},model:{value:t.whatsapp,callback:function(e){t.whatsapp="string"===typeof e?e.trim():e},expression:"whatsapp"}}),a("m-group",[a("m-input",{attrs:{type:"text",name:"city",required:"true",placeholder:"Cidade"},model:{value:t.city,callback:function(e){t.city="string"===typeof e?e.trim():e},expression:"city"}}),a("m-input",{attrs:{type:"text",name:"uf",max:"2",required:"true",placeholder:"UF"},model:{value:t.uf,callback:function(e){t.uf=e},expression:"uf"}})],1),a("m-button",{attrs:{type:"submit"}},[t._v("Cadastrar")])],1)])])},wt=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},yt=[],_t={name:"Group"},xt=_t,kt=(n("c3ef"),Object(L["a"])(xt,bt,yt,!1,null,"77fca7e8",null)),$t=kt.exports,St={name:"Register",components:{"m-link":C,"m-group":$t,"m-input":z,"m-button":D},computed:{...Object(d["b"])("ong",["register.name","register.email","register.password","register.whatsapp","register.city","register.uf"])},methods:{async handleSubmit(){const{name:t,email:e,password:n,whatsapp:a,city:i,uf:o}=this;this.$store.commit("updateLoading",{loading:!0}),await this.$store.dispatch("ong/register",{name:t,email:e,password:n,whatsapp:a,city:i,uf:o}),this.$store.commit("updateLoading",{loading:!1});const{status:r}=this.$store.state;if(200!==r.code)return this.$store.dispatch("showAlert",x(r));this.resetForm(),this.$router.push({name:"home"}),this.$store.dispatch("showAlert",_)},resetForm(){this.$refs.registerOng.reset(),this.$store.commit("ong/updateRegisterForm",{name:"",email:"",password:"",whatsapp:"",city:"",uf:""})}}},Pt=St,Ot=(n("3db0"),Object(L["a"])(Pt,vt,wt,!1,null,"8165c2d2",null)),jt=Ot.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-incident"}},[a("div",[a("section",[a("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),a("h1",[t._v("Cadastrar novo caso")]),a("p",[t._v(" Descreva o caso detalhadamente para encontrar um herói para resolver isso. ")]),a("m-link",{attrs:{to:{name:"home"},icon:["arrow-left",16,"#e02041"]}},[t._v(" Voltar para home ")])],1),a("form",{ref:"newIncident",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("m-input",{attrs:{type:"text",name:"title",required:"true",placeholder:"Titulo do caso"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),a("m-input",{attrs:{type:"textarea",name:"description",required:"true",placeholder:"Descrição do caso"},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}}),a("m-input",{attrs:{type:"number",name:"value",required:"true",placeholder:"Valor em reais"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("m-button",{attrs:{type:"submit"}},[t._v("Cadastrar")])],1)])])},Lt=[],At={name:"NewIncident",components:{"m-link":C,"m-input":z,"m-button":D},computed:{...Object(d["b"])("incident",["register.title","register.value","register.description"])},methods:{async handleSubmit(){const{title:t,value:e,description:n}=this;this.$store.commit("updateLoading",{loading:!0}),await this.$store.dispatch("incident/register",{token:this.$store.state.ong.profile.token,title:t,value:e,description:n}),this.$store.commit("updateLoading",{loading:!1});const{status:a}=this.$store.state;if(200!==a.code)return this.$store.dispatch("showAlert",S(a));this.resetForm(),this.$router.push({name:"home"})},resetForm(){this.$refs.newIncident.reset(),this.$store.commit("incident/updateForm",{title:"",value:"",description:""})}}},Ct=At,Tt=(n("7503"),Object(L["a"])(Ct,Et,Lt,!1,null,"afc1f75c",null)),It=Tt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-not-found"}},[n("h1",[t._v("404")]),n("p",[t._v("Página não encontrada!")]),n("m-link",{attrs:{to:{name:"home"},icon:["arrow-left",12,"#e02041"]}},[t._v(" Voltar para Home ")])],1)},Ft=[],qt={name:"PageNotFound",components:{"m-link":C}},zt=qt,Rt=(n("4466"),Object(L["a"])(zt,Bt,Ft,!1,null,"5bcc4cc2",null)),Wt=Rt.exports;a["a"].use(f["a"]);var Gt=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ft},{path:"/incidents/new",name:"new-incident",component:It},{path:"/register",name:"register",component:jt},{path:"*",name:"page-not-found",component:Wt}]}),Nt=n("9483");Object(Nt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[t.alert?n("m-alert"):t._e(),t.loading?n("m-loading"):t._e(),n("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]})],1)},Dt=[],Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"alert"}})},Mt=[],Jt={name:"Alert",methods:{async show(){await this.$swal(this.$store.state.alert.configs),this.$store.commit("updateAlertStatus",{show:!1})}},mounted(){this.show()}},Ut=Jt,Kt=Object(L["a"])(Ut,Vt,Mt,!1,null,"2ca3f206",null),Qt=Kt.exports,Xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loading"}},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],Zt={name:"Loading"},te=Zt,ee=(n("ca2b"),Object(L["a"])(te,Xt,Yt,!1,null,"0543c118",null)),ne=ee.exports,ae={name:"App",components:{"m-alert":Qt,"m-loading":ne},computed:{loading(){return this.$store.state.loading},alert(){return this.$store.state.alert.show}},methods:{async startSession(){const t=localStorage.getItem("token");await this.$store.dispatch("ong/getProfile",{token:t}),this.$store.commit("ong/updateSession",{token:200===this.$store.state.status.code?t:""}),this.$store.commit("updateLoading",{loading:!1})},...Object(s["b"])(["updateWindowSize"])},mounted(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize(),localStorage.getItem("token")?this.startSession():this.$store.commit("updateLoading",{loading:!1})},destroyed(){window.removeEventListener("resize",this.updateWindowSize)}},ie=ae,oe=(n("034f"),Object(L["a"])(ie,Ht,Dt,!1,null,null,null)),re=oe.exports;a["a"].use(o.a),a["a"].use(r["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Gt,store:g,render:t=>t(re)}).$mount("#app")},"6df5":function(t,e,n){"use strict";var a=n("a77d"),i=n.n(a);i.a},7109:function(t,e,n){},7503:function(t,e,n){"use strict";var a=n("2702"),i=n.n(a);i.a},"768e":function(t,e,n){},"7e59":function(t,e,n){},"81c7":function(t,e,n){t.exports=n.p+"img/heroes.1f4b5508.png"},"85ec":function(t,e,n){},8866:function(t,e,n){},"8ff1":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.7eea718b.svg"},a77d:function(t,e,n){},c3ef:function(t,e,n){"use strict";var a=n("d7ce"),i=n.n(a);i.a},c6c1:function(t,e,n){"use strict";var a=n("d6b2"),i=n.n(a);i.a},ca2b:function(t,e,n){"use strict";var a=n("7109"),i=n.n(a);i.a},d6b2:function(t,e,n){},d753:function(t,e,n){"use strict";var a=n("f9fb"),i=n.n(a);i.a},d7ce:function(t,e,n){},f9fb:function(t,e,n){},fbf8:function(t,e,n){"use strict";var a=n("8866"),i=n.n(a);i.a}});
//# sourceMappingURL=app.2076fcdd.js.map