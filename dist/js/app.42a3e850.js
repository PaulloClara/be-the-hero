(function(t){function e(e){for(var i,r,s=e[0],c=e[1],u=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"05c2":function(t,e,n){},"060e":function(t,e,n){"use strict";var i=n("d343"),a=n.n(i);a.a},"063e":function(t,e,n){"use strict";var i=n("1514"),a=n.n(i);a.a},"0f04":function(t,e,n){},"11f2":function(t,e,n){},"12bb":function(t,e,n){},"14bd":function(t,e,n){},1514:function(t,e,n){},"163c":function(t,e,n){"use strict";var i=n("2ce8"),a=n.n(i);a.a},"26b9":function(t,e,n){"use strict";var i=n("12bb"),a=n.n(i);a.a},"26c8":function(t,e,n){"use strict";var i=n("14bd"),a=n.n(i);a.a},"2b56":function(t,e,n){},"2ce8":function(t,e,n){},"305a":function(t,e,n){"use strict";var i=n("05c2"),a=n.n(i);a.a},4098:function(t,e,n){"use strict";var i=n("2b56"),a=n.n(i);a.a},"443b":function(t,e,n){"use strict";var i=n("11f2"),a=n.n(i);a.a},"44d8":function(t,e,n){"use strict";var i=n("fc8c"),a=n.n(i);a.a},"490f":function(t,e,n){"use strict";var i=n("98f0"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),a=n("62ad"),o=n.n(a),r=n("5886"),s=n("2f62"),c=n("bc3a"),u=n.n(c),l=u.a.create({baseURL:"https://api-bethehero-omnistack11.herokuapp.com",timeout:2e4}),d=n("5935"),m={state:{logged:!1,profile:{id:"",name:"",email:"",whatsapp:"",city:"",uf:"",created_at:"",token:""},login:{email:"",password:""},register:{name:"",email:"",whatsapp:"",city:"",uf:"",password:""}},getters:{getField:d["a"]},mutations:{updateSession(t,{token:e}){t.profile.token=e,localStorage.setItem("token",e),t.logged=""!==e},updateProfile(t,e){t.profile=e},updateRegisterForm(t,{name:e,email:n,password:i,whatsapp:a,city:o,uf:r}){t.register.name=e,t.register.email=n,t.register.password=i,t.register.whatsapp=a,t.register.city=o,t.register.uf=r},updateField:d["c"]},actions:{async getProfile({commit:t},{token:e}){try{const n=await l.get("/sessions",{headers:{Authorization:"Bearer "+e}});if(this.commit("updateStatus",n),200!==this.state.status.code)return;t("updateProfile",n.data)}catch({response:n}){this.commit("updateStatus",n)}},async login({commit:t},{email:e,password:n}){try{const i=await l.post("/sessions",{email:e,password:n});if(this.commit("updateStatus",i),200!==this.state.status.code)return;t("updateProfile",i.data.ong),t("updateSession",i.data)}catch({response:i}){this.commit("updateStatus",i)}},async register({commit:t},e){try{const n=await l.post("/ongs",e);if(this.commit("updateStatus",n),200!==this.state.status.code)return;t("updateProfile",n.data.ong),t("updateSession",n.data)}catch({response:n}){this.commit("updateStatus",n)}}},namespaced:!0},p=({totalPages:t,currentPage:e,totalButtonsLeft:n,totalButtonsRight:i})=>{const a=[],o=n+i,r=o>=t||e-n<=1?1:e+i>t?t-o:e-n,s=r+o>=t?t:r+o;for(let c=r;c<=s;c++)a.push(c);return a},f={state:{status:0,session:[],page:{incidents:[{id:1,title:"Iniciando...",description:"A API esta iniciando com dados falsos...",value:1,ong:{id:"683632de",name:"BeTheHero",city:"Teresina",email:"bethehero@ong.com",uf:"PI",whatsapp:"86999999999"},created_at:"2020-04-05 02:16:17"}],total:0,pages:0,limit:12,current:1,pagination:[]},register:{title:"",value:"",description:""}},getters:{getField:d["a"]},mutations:{updatePage(t,{incidents:e,current:n,limit:i,total:a}){t.page.limit=i,t.page.total=a,t.page.pages=(a/i).toFixed(),t.page.current=n,t.page.incidents=e},updatePagination(t){t.page.pagination=p({totalPages:t.page.pages,currentPage:t.page.current,totalButtonsLeft:this.state.pagination.buttonsLeft,totalButtonsRight:this.state.pagination.buttonsRight})},updateIncidents(t,{incidents:e}){t.session=e},updateForm(t,{title:e,value:n,description:i}){t.register.title=e,t.register.value=n,t.register.description=i},updateField:d["c"]},actions:{async getPage({commit:t},{page:e,limit:n=12}){try{const i=await l.get(`/incidents?page=${e}&limit=${n}`);if(this.commit("updateStatus",i),200!==this.state.status.code)return;t("updatePage",i.data),t("updatePagination")}catch({response:i}){this.commit("updateStatus",i)}},async getSessionIncidents({commit:t},{token:e}){try{const n=await l.get("/sessions/incidents",{headers:{Authorization:"Bearer "+e}});if(this.commit("updateStatus",n),200!==this.state.status.code)return;t("updateIncidents",{incidents:n.data})}catch({response:n}){this.commit("updateStatus",n)}},async register({state:t,commit:e,dispatch:n},{token:i,title:a,value:o,description:r}){try{const s=await l.post("/incidents",{title:a,value:o,description:r},{headers:{Authorization:"Bearer "+i}});if(this.commit("updateStatus",s),200!==this.state.status.code)return;n("getPage",{page:t.page.current});const c=[s.data,...t.session];e("updateIncidents",{incidents:c})}catch({response:s}){this.commit("updateStatus",s)}},async delete({state:t,commit:e,dispatch:n},{id:i,token:a}){try{const o=await l.delete("/incidents/"+i,{headers:{Authorization:"Bearer "+a}});if(this.commit("updateStatus",o),200!==this.state.status.code)return;await n("getPage",{page:t.page.current});const r=t.session.findIndex(t=>t.id===i),s=t.session.splice(r,1);e("updateIncidents",{incidents:s})}catch({response:o}){this.commit("updateStatus",o)}}},namespaced:!0},h={state:{loading:!0,window:{width:0,height:0},pagination:{buttonsLeft:4,buttonsRight:4},alert:{configs:{title:"",text:"",icon:"",confirmButtonText:"OK",confirmButtonColor:"#e02041"},show:!1},status:{code:200,error:"",message:"",validation:{source:"",keys:[]}}},getters:{xsWindow(t){return t.window.width<480},smWindow(t){return t.window.width<800},mdWindow(t){return t.window.width<1366},lgWindow(t){return t.window.width<1920},xlWindow(t){return t.window.width>1920}},mutations:{updateStatus(t,{status:e,data:n}){if(200===e||!n.statusCode)return t.status.code=e;n.code=n.statusCode,n.statusCode=void 0,t.status=n},updateLoading(t,{active:e}){t.loading=e},updateAlert(t,{title:e,text:n,icon:i}){t.alert.configs.text=n,t.alert.configs.icon=i,t.alert.configs.title=e},updateAlertStatus(t,{show:e}){t.alert.show=e},updatePaginationLength(t){const{xsWindow:e,smWindow:n,mdWindow:i,lgWindow:a}=this.getters;t.pagination.buttonsLeft=e?1:n?2:i?3:a?4:5,t.pagination.buttonsRight=t.pagination.buttonsLeft,this.commit("incident/updatePagination")},updateWindowSize(t){t.window.width=window.innerWidth,t.window.height=window.innerHeight,this.commit("updatePaginationLength")}},actions:{showAlert({commit:t},{title:e,text:n,icon:i}){t("updateAlert",{title:e,text:n,icon:i}),t("updateAlertStatus",{show:!0})}}};i["a"].use(s["a"]);var g=new s["a"].Store({...h,modules:{ong:m,incident:f}}),v=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[t.logged?n("m-profile"):n("m-login")],1)},b=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login"}},[i("section",[i("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),i("m-login-form")],1),t.mdWindow?t._e():i("img",{attrs:{src:n("81c7"),alt:"heroes"}})])},_=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("h1",[t._v("Faça seu login")]),n("m-input",{attrs:{type:"email",name:"email",required:"true",placeholder:"Seu Email"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),n("m-input",{attrs:{type:"password",name:"password",min:"8",required:"true",placeholder:"Sua Senha"},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}}),n("m-button",{attrs:{type:"submit"}},[t._v("Entrar")]),n("m-link",{attrs:{to:{name:"register"},icon:["log-in",16,"#e02041"]}},[t._v(" Não tenho cadastro ")])],1)},$=[];const k={title:"Aviso importante!",text:"Essa aplicação é um teste, os dados serão resetados em breve...",icon:"warning"};function S({code:t,error:e,message:n,validation:i}){return 400===t&&"running"===i.source?{title:"Email em uso!",text:"Esse email já esta cadastrado no banco de dados.",icon:"error"}:{title:e,text:n,icon:"error"}}function P({code:t,error:e,message:n}){return 401===t?{title:"Email e/ou Senha invalido(s)!",text:"Verifique com atenção se o Email e Senha estão corretos.",icon:"error"}:404===t?{title:"O Email não consta no banco de dados...",text:"Talvez a aplicação tenha reiniciado.",icon:"warning"}:{title:e,text:n,icon:"error"}}function O({code:t,error:e,message:n}){return 401===t?{title:"Operação invalida!",text:"",icon:"error"}:{title:e,text:n,icon:"error"}}function j({code:t,error:e,message:n}){return{title:e,text:n,icon:"error"}}var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"link",attrs:{to:t.to}},[n("feather",{attrs:{type:t.icon[0],size:t.icon[1],stroke:t.icon[2]}}),t._t("default")],2)},C=[],L={name:"Link",props:["icon","to"]},A=L,F=(n("85ed"),n("2877")),I=Object(F["a"])(A,E,C,!1,null,"749401a8",null),T=I.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"textarea"===t.type?n("textarea",{staticClass:"input",attrs:{name:t.name,required:t.required,maxlength:"number"!==t.type?t.max:"",placeholder:t.placeholder},on:{change:function(e){return t.emitInput(e)}}}):n("input",{staticClass:"input",attrs:{type:t.type,name:t.name,required:t.required,placeholder:t.placeholder,min:"number"===t.type?t.min:"",max:"number"===t.type?t.max:"",minlength:"number"!==t.type?t.min:"",maxlength:"number"!==t.type?t.max:""},on:{change:function(e){return t.emitInput(e)}}})},B=[],z={name:"Input",props:["type","name","min","max","required","placeholder"],methods:{emitInput(t){this.$emit("input",t.target.value)}}},q=z,W=(n("d52c"),Object(F["a"])(q,R,B,!1,null,"326fee70",null)),N=W.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"link"===t.type?n("a",{staticClass:"button",on:{click:function(e){return t.emitClick(e)}}},[t._t("default")],2):n("button",{staticClass:"button",attrs:{type:t.type},on:{click:function(e){return t.emitClick(e)}}},[t._t("default")],2)},H=[],D={name:"Button",props:["type"],methods:{emitClick(t){this.$emit("click",t)}}},V=D,M=(n("443b"),Object(F["a"])(V,G,H,!1,null,"87cebfb6",null)),J=M.exports,U={name:"LoginForm",components:{"m-link":T,"m-input":N,"m-button":J},computed:{...Object(d["b"])("ong",["login.email","login.password"])},methods:{async handleSubmit(){const{email:t,password:e}=this;this.$store.commit("updateLoading",{active:!0}),await this.$store.dispatch("ong/login",{email:t,password:e}),this.$store.commit("updateLoading",{active:!1});const{status:n}=this.$store.state;if(200!==n.code)return this.$store.dispatch("showAlert",P(n))}}},K=U,Q=(n("163c"),Object(F["a"])(K,x,$,!1,null,"8e9164b8",null)),X=Q.exports,Y={name:"Login",components:{"m-login-form":X},computed:{...Object(s["b"])(["mdWindow"])}},Z=Y,tt=(n("8c76"),Object(F["a"])(Z,y,_,!1,null,"e10746c4",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile"}},[n("m-profile-header"),n("h1",[t._v("Casos cadastrados")]),n("div",[n("m-pagination",{attrs:{totalPages:t.totalPages,currentPage:t.currentPage,pagination:t.pagination},on:{goTo:t.handleGoTo}}),n("m-profile-list"),n("m-pagination",{attrs:{totalPages:t.totalPages,currentPage:t.currentPage,pagination:t.pagination},on:{goTo:t.handleGoTo}})],1)],1)},it=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.incidents,(function(e){return n("li",{key:e.id},[n("m-card",{on:{remove:function(n){return t.handleRemove(e)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(e.title))]},proxy:!0},{key:"description",fn:function(){return[t._v(t._s(e.description))]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value))+" ")]},proxy:!0}],null,!0)})],1)})),0)},ot=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[n("strong",[t._v("CASO:")]),n("p",[t._t("title")],2)]),n("div",{staticClass:"description"},[n("strong",[t._v("DESCRIÇÂO:")]),n("p",[t._t("description")],2)]),n("div",{staticClass:"value"},[n("strong",[t._v("VALOR:")]),n("p",[t._t("value")],2)]),n("div",{staticClass:"icon",on:{click:function(e){return t.emitRemove(e)}}},[n("feather",{attrs:{type:"trash-2",size:"20",stroke:"#a8a8b3"}})],1)])},st=[],ct={name:"Card",methods:{emitRemove(t){this.$emit("remove",t)}}},ut=ct,lt=(n("4098"),Object(F["a"])(ut,rt,st,!1,null,"3999b3c6",null)),dt=lt.exports,mt={name:"ProfileList",components:{"m-card":dt},computed:{incidents(){return this.$store.state.incident.page.incidents}},methods:{async handleRemove(t){const{token:e}=this.$store.state.ong.profile;await this.$store.dispatch("incident/delete",{token:e,...t});const{status:n}=this.$store.state;200!==n.code&&this.$store.dispatch("showAlert",O(n))}}},pt=mt,ft=(n("8742"),Object(F["a"])(pt,at,ot,!1,null,"2a860d0a",null)),ht=ft.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),i("span",[t._v("Bem vindo, "+t._s(t.ongName))]),i("div",[i("m-button",{on:{click:function(e){return t.$router.push({name:"new-incident"})}}},[t._v(" Cadastrar novo caso ")]),i("div",{staticClass:"logout",on:{click:t.handleLogout}},[i("feather",{attrs:{type:"power",size:"18",stroke:"#e02041"}})],1)],1)])},vt=[],wt={name:"ProfileHeader",components:{"m-button":J},computed:{ongName(){return this.$store.state.ong.profile.name}},methods:{handleLogout(){this.$store.commit("ong/updateSession",{token:""})}}},bt=wt,yt=(n("efdc"),Object(F["a"])(bt,gt,vt,!1,null,"cf1b074a",null)),_t=yt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("feather",{attrs:{type:"arrow-left-circle",size:"44",stroke:"#e02041"},on:{click:function(e){return t.emitGoTo(t.currentPage-1)}}}),n("div",t._l(t.pagination,(function(e){return n("m-button",{key:e,class:e===t.currentPage?"selected":"",attrs:{type:"link"},on:{click:function(n){return t.emitGoTo(e)}}},[t._v(" "+t._s(e)+" ")])})),1),n("feather",{attrs:{type:"arrow-right-circle",size:"44",stroke:"#e02041"},on:{click:function(e){return t.emitGoTo(t.currentPage+1)}}})],1)},$t=[],kt={name:"Pagination",props:["totalPages","currentPage","pagination"],components:{"m-button":J},methods:{emitGoTo(t){t<1||t>this.totalPages||this.$emit("goTo",t)}}},St=kt,Pt=(n("9ddd"),Object(F["a"])(St,xt,$t,!1,null,"03fba05a",null)),Ot=Pt.exports,jt={name:"Profile",components:{"m-profile-list":ht,"m-pagination":Ot,"m-profile-header":_t},computed:{totalPages(){return this.$store.state.incident.page.pages},currentPage(){return this.$store.state.incident.page.current},pagination(){return this.$store.state.incident.page.pagination}},methods:{async handleGoTo(t){await this.$store.dispatch("incident/getPage",{page:t})}},mounted(){this.handleGoTo(1)}},Et=jt,Ct=(n("060e"),Object(F["a"])(Et,nt,it,!1,null,"2cb584da",null)),Lt=Ct.exports,At={name:"Home",components:{"m-login":et,"m-profile":Lt},computed:{logged(){return this.$store.state.ong.logged}}},Ft=At,It=Object(F["a"])(Ft,w,b,!1,null,"80a72f6c",null),Tt=It.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("div",[n("m-register-section"),n("m-register-form")],1)])},Bt=[],zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{ref:"registerOng",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("m-input",{attrs:{type:"text",name:"name",required:"true",placeholder:"Nome da ONG"},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}}),n("m-input",{attrs:{name:"email",type:"email",required:"true",placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),n("m-input",{attrs:{type:"password",name:"password",min:"8",required:"true",placeholder:"Senha"},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}}),n("m-input",{attrs:{type:"text",name:"whatsapp",min:"10",max:"17",required:"true",placeholder:"Whatsapp"},model:{value:t.whatsapp,callback:function(e){t.whatsapp="string"===typeof e?e.trim():e},expression:"whatsapp"}}),n("m-group",[n("m-input",{attrs:{type:"text",name:"city",required:"true",placeholder:"Cidade"},model:{value:t.city,callback:function(e){t.city="string"===typeof e?e.trim():e},expression:"city"}}),n("m-input",{attrs:{type:"text",name:"uf",max:"2",required:"true",placeholder:"UF"},model:{value:t.uf,callback:function(e){t.uf=e},expression:"uf"}})],1),n("m-button",{attrs:{type:"submit"}},[t._v("Cadastrar")])],1)},qt=[],Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group"},[t._t("default")],2)},Nt=[],Gt={name:"Group"},Ht=Gt,Dt=(n("d70f"),Object(F["a"])(Ht,Wt,Nt,!1,null,"811f288a",null)),Vt=Dt.exports,Mt={name:"RegisterForm",components:{"m-group":Vt,"m-input":N,"m-button":J},computed:{...Object(d["b"])("ong",["register.name","register.email","register.password","register.whatsapp","register.city","register.uf"])},methods:{async handleSubmit(){const{name:t,email:e,password:n,whatsapp:i,city:a,uf:o}=this;this.$store.commit("updateLoading",{active:!0}),await this.$store.dispatch("ong/register",{name:t,email:e,password:n,whatsapp:i,city:a,uf:o}),this.$store.commit("updateLoading",{active:!1});const{status:r}=this.$store.state;if(200!==r.code)return this.$store.dispatch("showAlert",S(r));this.resetForm(),this.$router.push({name:"home"}),this.$store.dispatch("showAlert",k)},resetForm(){this.$refs.registerOng.reset(),this.$store.commit("ong/updateRegisterForm",{name:"",email:"",password:"",whatsapp:"",city:"",uf:""})}}},Jt=Mt,Ut=(n("db2c"),Object(F["a"])(Jt,zt,qt,!1,null,"1ba4f921",null)),Kt=Ut.exports,Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),i("h1",[t._v("Cadastro")]),i("p",[t._v(" Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. ")]),i("m-link",{attrs:{to:{name:"home"},icon:["arrow-left",16,"#e02041"]}},[t._v(" Já tenho cadastro ")])],1)},Xt=[],Yt={name:"RegisterSection",components:{"m-link":T}},Zt=Yt,te=(n("44d8"),Object(F["a"])(Zt,Qt,Xt,!1,null,"522d9875",null)),ee=te.exports,ne={name:"Register",components:{"m-register-form":Kt,"m-register-section":ee}},ie=ne,ae=(n("063e"),Object(F["a"])(ie,Rt,Bt,!1,null,"5dca3854",null)),oe=ae.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"new-incident"}},[n("div",[n("m-new-incident-section"),n("m-new-incident-form")],1)])},se=[],ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{ref:"newIncident",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("m-input",{attrs:{type:"text",name:"title",required:"true",placeholder:"Titulo do caso"},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),n("m-input",{attrs:{type:"textarea",name:"description",required:"true",placeholder:"Descrição do caso"},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}}),n("m-input",{attrs:{type:"number",name:"value",required:"true",placeholder:"Valor em reais"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("m-button",{attrs:{type:"submit"}},[t._v("Cadastrar")])],1)},ue=[],le={name:"NewIncidentForm",components:{"m-input":N,"m-button":J},computed:{...Object(d["b"])("incident",["register.title","register.value","register.description"])},methods:{async handleSubmit(){const{title:t,value:e,description:n}=this;this.$store.commit("updateLoading",{active:!0}),await this.$store.dispatch("incident/register",{token:this.$store.state.ong.profile.token,title:t,value:e,description:n}),this.$store.commit("updateLoading",{active:!1});const{status:i}=this.$store.state;if(200!==i.code)return this.$store.dispatch("showAlert",j(i));this.resetForm(),this.$router.push({name:"home"})},resetForm(){this.$refs.newIncident.reset(),this.$store.commit("incident/updateForm",{title:"",value:"",description:""})}}},de=le,me=(n("490f"),Object(F["a"])(de,ce,ue,!1,null,"60d9d0b7",null)),pe=me.exports,fe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("img",{attrs:{src:n("9b19"),alt:"Be The Hero"}}),i("h1",[t._v("Cadastrar novo caso")]),i("p",[t._v(" Descreva o caso detalhadamente para encontrar um herói para resolver isso. ")]),i("m-link",{attrs:{to:{name:"home"},icon:["arrow-left",16,"#e02041"]}},[t._v(" Voltar para home ")])],1)},he=[],ge={name:"NewIncidentSection",components:{"m-link":T}},ve=ge,we=(n("26b9"),Object(F["a"])(ve,fe,he,!1,null,"30b08fe2",null)),be=we.exports,ye={name:"NewIncident",components:{"m-new-incident-form":pe,"m-new-incident-section":be}},_e=ye,xe=(n("26c8"),Object(F["a"])(_e,re,se,!1,null,"fed1df18",null)),$e=xe.exports,ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-not-found"}},[n("h1",[t._v("404")]),n("p",[t._v("Página não encontrada!")]),n("m-link",{attrs:{to:{name:"home"},icon:["arrow-left",12,"#e02041"]}},[t._v(" Voltar para Home ")])],1)},Se=[],Pe={name:"PageNotFound",components:{"m-link":T}},Oe=Pe,je=(n("5a04"),Object(F["a"])(Oe,ke,Se,!1,null,"312b18df",null)),Ee=je.exports;i["a"].use(v["a"]);var Ce=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Tt},{path:"/incidents/new",name:"new-incident",component:$e},{path:"/register",name:"register",component:oe},{path:"*",name:"page-not-found",component:Ee}]}),Le=n("9483");Object(Le["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[t.alert?n("m-alert"):t._e(),t.loading?n("m-loading"):t._e(),n("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]})],1)},Fe=[],Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"})},Te=[],Re={name:"Alert",methods:{async show(){await this.$swal(this.$store.state.alert.configs),this.$store.commit("updateAlertStatus",{show:!1})}},mounted(){this.show()}},Be=Re,ze=Object(F["a"])(Be,Ie,Te,!1,null,"730e91e2",null),qe=ze.exports,We=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ne=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])])}],Ge={name:"Loading"},He=Ge,De=(n("305a"),Object(F["a"])(He,We,Ne,!1,null,"60208de4",null)),Ve=De.exports,Me={name:"App",components:{"m-alert":qe,"m-loading":Ve},computed:{loading(){return this.$store.state.loading},alert(){return this.$store.state.alert.show}},methods:{async startSession(){const t=localStorage.getItem("token");await this.$store.dispatch("ong/getProfile",{token:t}),this.$store.commit("ong/updateSession",{token:200===this.$store.state.status.code?t:""}),this.$store.commit("updateLoading",{active:!1})},addResizeEvent(){window.addEventListener("resize",this.updateWindowSize),this.updateWindowSize()},...Object(s["c"])(["updateWindowSize"])},mounted(){if(this.addResizeEvent(),localStorage.getItem("token"))return this.startSession();this.$store.commit("updateLoading",{active:!1})},destroyed(){window.removeEventListener("resize",this.updateWindowSize)}},Je=Me,Ue=(n("034f"),Object(F["a"])(Je,Ae,Fe,!1,null,null,null)),Ke=Ue.exports;i["a"].use(o.a),i["a"].use(r["a"]),i["a"].config.productionTip=!1,new i["a"]({router:Ce,store:g,render:t=>t(Ke)}).$mount("#app")},"5a04":function(t,e,n){"use strict";var i=n("ebb9"),a=n.n(i);a.a},"63f1":function(t,e,n){},"81c7":function(t,e,n){t.exports=n.p+"img/heroes.1f4b5508.png"},"85ec":function(t,e,n){},"85ed":function(t,e,n){"use strict";var i=n("fecb"),a=n.n(i);a.a},8742:function(t,e,n){"use strict";var i=n("ec93"),a=n.n(i);a.a},8936:function(t,e,n){},"8c76":function(t,e,n){"use strict";var i=n("f498"),a=n.n(i);a.a},"8fe4":function(t,e,n){},"98f0":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.7eea718b.svg"},"9ddd":function(t,e,n){"use strict";var i=n("dc78"),a=n.n(i);a.a},d343:function(t,e,n){},d52c:function(t,e,n){"use strict";var i=n("0f04"),a=n.n(i);a.a},d70f:function(t,e,n){"use strict";var i=n("8936"),a=n.n(i);a.a},db2c:function(t,e,n){"use strict";var i=n("63f1"),a=n.n(i);a.a},dc78:function(t,e,n){},ebb9:function(t,e,n){},ec93:function(t,e,n){},efdc:function(t,e,n){"use strict";var i=n("8fe4"),a=n.n(i);a.a},f498:function(t,e,n){},fc8c:function(t,e,n){},fecb:function(t,e,n){}});
//# sourceMappingURL=app.42a3e850.js.map