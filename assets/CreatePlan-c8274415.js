import{u as Z,g as ee,d as te,n as B,e as V,f as se,w as L,h as ne,i as ie,s as oe,j as le,_ as $,o as h,c as m,b as S,t as u,a as i,k as N,l as J,m as ae,T as ce,p as q,q as re,v as ue,x as de,H as pe,F as O,r as T,y as he,z as F}from"./index-4a0b83d3.js";const me=[{id:0,selectionTitle:"How do you drink your coffee?",selectionType:"how",selections:[{id:0,isSelected:!1,selectionName:"Capsule",selectionDescription:"Compatible with Nespresso systems and similar brewers"},{id:1,isSelected:!1,selectionName:"Filter",selectionDescription:"For pour over or drip methods like Aeropress, Chemex, and V60"},{id:2,isSelected:!1,selectionName:"Espresso",selectionDescription:"Dense and finely ground beans for an intense, flavorful experience"}]},{id:1,selectionTitle:"What type of coffee?",selectionType:"type",selections:[{id:0,isSelected:!1,selectionName:"Single Origin",selectionDescription:"Distinct, high quality coffee from a specific family-owned farm"},{id:1,isSelected:!1,selectionName:"Decaf",selectionDescription:"Just like regular coffee, except the caffeine has been removed"},{id:2,isSelected:!1,selectionName:"Blended",selectionDescription:"Combination of two or three dark roasted beans of organic coffees"}]},{id:2,selectionTitle:"How much would you like?",selectionType:"size",selections:[{id:0,isSelected:!1,selectionName:"250g",selectionDescription:"Perfect for the solo drinker. Yields about 12 delicious cups."},{id:1,isSelected:!1,selectionName:"500g",selectionDescription:"Perfect option for a couple. Yields about 40 delectable cups."},{id:2,isSelected:!1,selectionName:"1000g",selectionDescription:"Perfect for offices and events. Yields about 90 delightful cups."}]},{id:3,selectionTitle:"Want us to grind them?",selectionType:"grind",selections:[{id:0,isSelected:!1,selectionName:"Wholebean",selectionDescription:"Best choice if you cherish the full sensory experience"},{id:1,isSelected:!1,selectionName:"Filter",selectionDescription:"For drip or pour-over coffee methods such as V60 or Aeropress"},{id:2,isSelected:!1,selectionName:"Cafetiére",selectionDescription:"Course ground beans specially suited for french press coffee"}]},{id:4,selectionTitle:"How often should we deliver?",selectionType:"frequency",selections:[{id:0,isSelected:!1,selectionName:"Every Week",selectionDescription:" per shipment. Includes free first-class shipping."},{id:1,isSelected:!1,selectionName:"Every 2 Weeks",selectionDescription:" per shipment. Includes free priority shipping."},{id:2,isSelected:!1,selectionName:"Every Month",selectionDescription:" per shipment. Includes free priority shipping."}]}];class fe{constructor(t){this.el=t,this.summary=t.querySelector("summary"),this.content=t.querySelector(".content-wrapper"),this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",s=>this.onClick(s))}onClick(t){t.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.open():(this.isExpanding||this.el.open)&&this.shrink()}shrink(){this.isClosing=!0;const t=`${this.el.offsetHeight}px`,s=`${this.summary.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[t,s]},{duration:300,easing:"ease-in-out"}),this.animation.onfinish=()=>this.onAnimationFinish(!1),this.animation.oncancel=()=>this.isClosing=!1}open(){this.el.style.height=`${this.el.offsetHeight}px`,this.el.open=!0,window.requestAnimationFrame(()=>this.expand())}expand(){this.isExpanding=!0;const t=`${this.el.offsetHeight}px`,s=`${this.summary.offsetHeight+this.content.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[t,s]},{duration:300,easing:"ease-in-out"}),this.animation.onfinish=()=>this.onAnimationFinish(!0),this.animation.oncancel=()=>this.isExpanding=!1}onAnimationFinish(t){this.el.open=t,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}}function _e(e){return ne()?(ie(e),!0):!1}function j(e){return typeof e=="function"?e():Z(e)}const ye=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ge=Object.prototype.toString,we=e=>ge.call(e)==="[object Object]",be=()=>{};function ve(e,t){function s(...a){return new Promise((n,r)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(n).catch(r)})}return s}const G=e=>e();function Se(e=G){const t=V(!0);function s(){t.value=!1}function a(){t.value=!0}const n=(...r)=>{t.value&&e(...r)};return{isActive:se(t),pause:s,resume:a,eventFilter:n}}function ke(e,t,s={}){const{eventFilter:a=G,...n}=s;return L(e,ve(a,t),n)}function Ce(e,t,s={}){const{eventFilter:a,...n}=s,{eventFilter:r,pause:f,resume:_,isActive:g}=Se(a);return{stop:ke(e,t,{...n,eventFilter:r}),pause:f,resume:_,isActive:g}}function Pe(e,t=!0){ee()?te(e):t?e():B(e)}function De(e){var t;const s=j(e);return(t=s==null?void 0:s.$el)!=null?t:s}const A=ye?window:void 0;function H(...e){let t,s,a,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,a,n]=e,t=A):[t,s,a,n]=e,!t)return be;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const r=[],f=()=>{r.forEach(c=>c()),r.length=0},_=(c,d,k,y)=>(c.addEventListener(d,k,y),()=>c.removeEventListener(d,k,y)),g=L(()=>[De(t),j(n)],([c,d])=>{if(f(),!c)return;const k=we(d)?{...d}:d;r.push(...s.flatMap(y=>a.map(P=>_(c,y,P,k))))},{immediate:!0,flush:"post"}),o=()=>{g(),f()};return _e(o),o}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E="__vueuse_ssr_handlers__",xe=Ee();function Ee(){return E in x||(x[E]=x[E]||{}),x[E]}function Ne(e,t){return xe[e]||t}function qe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Ae={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function Oe(e,t,s,a={}){var n;const{flush:r="pre",deep:f=!0,listenToStorageChanges:_=!0,writeDefaults:g=!0,mergeDefaults:o=!1,shallow:c,window:d=A,eventFilter:k,onError:y=l=>{console.error(l)},initOnMounted:P}=a,w=(c?oe:V)(typeof t=="function"?t():t);if(!s)try{s=Ne("getDefaultStorage",()=>{var l;return(l=A)==null?void 0:l.localStorage})()}catch(l){y(l)}if(!s)return w;const b=j(t),M=qe(b),C=(n=a.serializer)!=null?n:Ae[M],{pause:Q,resume:z}=Ce(w,()=>K(w.value),{flush:r,deep:f,eventFilter:k});return d&&_&&Pe(()=>{H(d,"storage",D),H(d,W,X),P&&D()}),P||D(),w;function K(l){try{if(l==null)s.removeItem(e);else{const p=C.write(l),v=s.getItem(e);v!==p&&(s.setItem(e,p),d&&d.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:v,newValue:p,storageArea:s}})))}}catch(p){y(p)}}function U(l){const p=l?l.newValue:s.getItem(e);if(p==null)return g&&b!==null&&s.setItem(e,C.write(b)),b;if(!l&&o){const v=C.read(p);return typeof o=="function"?o(v,b):M==="object"&&!Array.isArray(v)?{...b,...v}:v}else return typeof p!="string"?p:C.read(p)}function X(l){D(l.detail)}function D(l){if(!(l&&l.storageArea!==s)){if(l&&l.key==null){w.value=b;return}if(!(l&&l.key!==e)){Q();try{(l==null?void 0:l.newValue)!==C.write(w.value)&&(w.value=U(l))}catch(p){y(p)}finally{l?B(z):z()}}}}}function Te(e,t,s={}){const{window:a=A}=s;return Oe(e,t,a==null?void 0:a.localStorage,s)}const I=le("customerPlan",{state:()=>({plan:Te("customerPlan",{how:"",type:"",size:"",grind:"",delivery:"",frequency:"",costs:[],totalCost:0})}),getters:{weeklyCost:e=>{e.plan.size==="250g"?(e.plan.costs[0]=7.2,e.plan.costs[1]=9.6,e.plan.costs[2]=12):e.plan.size==="500g"?(e.plan.costs[0]=13,e.plan.costs[1]=17.5,e.plan.costs[2]=22):e.plan.size==="1000g"?(e.plan.costs[0]=22,e.plan.costs[1]=32,e.plan.costs[2]=42):(e.plan.costs[0]=0,e.plan.costs[1]=0,e.plan.costs[2]=0)},totalCost:e=>{e.plan.frequency==="Every Week"?e.plan.totalCost=e.plan.costs[0]*4:e.plan.frequency==="Every 2 Weeks"?e.plan.totalCost=e.plan.costs[1]*2:e.plan.frequency==="Every Month"&&(e.plan.totalCost=e.plan.costs[2])}},actions:{setPlan(e,t){if(Object.hasOwn(this.plan,e))this.plan[e]=t;else throw new Error(`Invalid plan property: ${e}`)}}});const Fe={name:"OrderSummary",data(){return{customerPlan:I()}}},$e={class:"summary-copy"},je={class:"summary-highlight"},Ie={class:"summary-highlight"},Me={class:"summary-highlight"},ze={class:"summary-highlight"},He={class:"summary-highlight"};function We(e,t,s,a,n,r){return h(),m("p",$e,[S(" “I drink my coffee "+u(n.customerPlan.plan.how==="Capsule"?"using":"as")+" ",1),i("span",je,u(n.customerPlan.plan.how?n.customerPlan.plan.how==="Capsule"?"Capsules":n.customerPlan.plan.how:"____"),1),S(", with a "),i("span",Ie,u(n.customerPlan.plan.type?n.customerPlan.plan.type:"____"),1),S(" type of bean. "),i("span",Me,u(n.customerPlan.plan.size?n.customerPlan.plan.size:"____"),1),S(u(n.customerPlan.plan.how==="Capsule"?"":" ground ala "),1),i("span",ze,u(n.customerPlan.plan.how==="Capsule"?"":n.customerPlan.plan.grind?n.customerPlan.plan.grind:"____"),1),S(", sent to me "),i("span",He,u(n.customerPlan.plan.frequency?n.customerPlan.plan.frequency:"____"),1),S(".” ")])}const R=$(Fe,[["render",We],["__scopeId","data-v-84b80ffd"]]);const Be={name:"CheckoutModal",components:{OrderSummary:R},data(){return{customerPlan:I()}},props:{show:Boolean}},Y=e=>(ue("data-v-a682c5e3"),e=e(),de(),e),Ve={key:0,class:"modal-mask"},Le={class:"modal-container"},Je=Y(()=>i("h1",{class:"modal-header"},"Order Summary",-1)),Ge=[Je],Re={class:"modal-body"},Ye=Y(()=>i("p",{class:"info-text-copy"}," Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. ",-1)),Qe={class:"modal-checkout-button-container"},Ke={class:"modal-checkout-container"},Ue={class:"total-cost"};function Xe(e,t,s,a,n,r){const f=N("OrderSummary");return h(),J(ce,{name:"modal"},{default:ae(()=>[s.show?(h(),m("div",Ve,[i("div",Le,[i("div",{class:"modal-header-container",onClick:t[0]||(t[0]=_=>e.$emit("close"))},Ge),i("div",Re,[q(f,{class:"modal-order-summary"}),Ye]),i("div",Qe,[i("button",{onClick:t[1]||(t[1]=_=>e.$emit("close")),class:"app-button modal-checkout-button"},u(`Checkout - $${n.customerPlan.plan.totalCost.toFixed(2)} / mo`),1),i("div",Ke,[i("p",Ue," $"+u(n.customerPlan.plan.totalCost.toFixed(2))+" / mo ",1),i("button",{class:"app-button",onClick:t[2]||(t[2]=_=>e.$emit("close"))},"Checkout")])])])])):re("",!0)]),_:1})}const Ze=$(Be,[["render",Xe],["__scopeId","data-v-a682c5e3"]]);const et={name:"CreatePlan",components:{HowItWorksCards:pe,OrderSummary:R,CheckoutModal:Ze},data(){return{planSelections:me,customerPlan:I(),checkoutBtnDisabled:!0,showModal:!1,questionIndicator:Object.freeze([{id:"qiPref",link:"how",numb:"01",title:"Prefereneces"},{id:"qiType",link:"type",numb:"02",title:"Bean Type"},{id:"qiSize",link:"size",numb:"03",title:"Quantity"},{id:"qiGrind",link:"grind",numb:"04",title:"Grind Option"},{id:"qiFreq",link:"frequency",numb:"05",title:"Deliveries"}])}},methods:{toggleActiveSelect(e,t){this.planSelections[e].selections.map(s=>{s.isSelected=!1}),this.planSelections[e].selections[t].isSelected=!0},toggleDisabled(){this.customerPlan.plan.how==="Capsule"&&this.customerPlan.plan.type&&this.customerPlan.plan.size&&this.customerPlan.plan.frequency?this.checkoutBtnDisabled=!1:this.customerPlan.plan.how&&this.customerPlan.plan.type&&this.customerPlan.plan.size&&this.customerPlan.plan.grind&&this.customerPlan.plan.frequency?this.checkoutBtnDisabled=!1:this.checkoutBtnDisabled=!0},jumpToLink(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}},watch:{"customerPlan.plan.how":{handler(){const e=document.getElementById("grind"),t=document.getElementById("qiGrind");this.customerPlan.plan.how==="Capsule"?(e.classList.add("disableSelection"),t.classList.add("qiDisabled"),e.hasAttribute("open")&&e.removeAttribute("open"),this.customerPlan.plan.grind&&(this.customerPlan.plan.grind="",this.planSelections[3].selections.map(s=>{s.isSelected=!1}))):(e.classList.remove("disableSelection"),t.classList.remove("qiDisabled"))}},customerPlan:{handler(){this.toggleDisabled()},deep:!0}},mounted(){document.querySelectorAll("details").forEach(e=>{new fe(e)}),this.toggleDisabled()}},tt={class:"create-plan-container"},st={class:"hero-container plan-hero-conatiner"},nt=["srcset"],it=["srcset"],ot=["srcset"],lt=["src"],at=i("div",{class:"hero-content-container"},[i("h1",{class:"main-plans-heading"},"Create a plan"),i("p",{class:"main-plans-copy"}," Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door. ")],-1),ct={class:"steps-container"},rt={class:"select-plan-container"},ut={class:"question-container"},dt={class:"question-sticky-container"},pt=["id","onClick"],ht={class:"selection-accordian-container"},mt=["id"],ft={class:"select-plan-summary"},_t={class:"question-title"},yt={class:"arrow-container"},gt=["src"],wt=["id"],bt=["value","onClick"],vt={class:"select-plan-title"},St={key:0},kt={key:1,class:"select-plan-copy"},Ct={class:"summary-container"},Pt=i("h2",{class:"summary-title"},"ORDER SUMMARY",-1),Dt={class:"checkout-btn-container"},xt=["disabled"];function Et(e,t,s,a,n,r){const f=N("HowItWorksCards"),_=N("OrderSummary"),g=N("CheckoutModal");return h(),m("div",tt,[i("section",st,[i("picture",null,[i("source",{srcset:"./img/plan/mobile/image-hero-blackcup.jpg",media:"(max-width: 600px)",type:"image/jpg"},null,8,nt),i("source",{srcset:"./img/plan/tablet/image-hero-blackcup.jpg",media:"(max-width: 1199px)",type:"image/jpg"},null,8,it),i("source",{srcset:"./img/plan/desktop/image-hero-blackcup.jpg",media:"(min-width: 1200px)",type:"image/jpg"},null,8,ot),i("img",{src:"./img/plan/desktop/image-hero-blackcup.jpg",alt:"decorative image of coffee",class:"hero-img"},null,8,lt)]),at]),i("section",ct,[q(f)]),i("section",rt,[i("div",ut,[i("div",dt,[(h(!0),m(O,null,T(n.questionIndicator,o=>(h(),m("div",{key:o.id,class:"question-indicator-content",id:o.id,onClick:c=>r.jumpToLink(o.link),title:"jump to selection choice"},[i("span",{class:F(["question-numb-menu",{questionSelected:o.isSelected}])},u(o.numb),3),S("  "),i("span",{class:F(["question-title-menu",{questionSelected:o.isSelected}])},u(o.title),3)],8,pt))),128))])]),i("div",ht,[(h(!0),m(O,null,T(n.planSelections,o=>(h(),m("div",{key:o.id,class:"selection-container"},[i("details",{class:"select-plan-details",id:o.selectionType},[i("summary",ft,[i("h3",_t,u(o.selectionTitle),1),i("div",yt,[i("img",{class:"arrow-icon",src:"./img/plan/desktop/icon-arrow.svg",alt:"arrow icon indicating selection open or close"},null,8,gt)])]),i("div",{class:"content-wrapper",id:`planDetails${o.id}`},[(h(!0),m(O,null,T(o.selections,c=>(h(),m("div",{key:c.id,class:F(["select-plan-selection-container",{activeChoice:c.isSelected}]),value:c.cost,onClick:d=>(n.customerPlan.setPlan(o.selectionType,c.selectionName),r.toggleActiveSelect(o.id,c.id))},[i("h4",vt,u(c.selectionName),1),o.selectionType==="frequency"?(h(),m("p",St," $"+u(n.customerPlan.plan.costs[c.id].toFixed(2))+u(c.selectionDescription),1)):(h(),m("p",kt,u(c.selectionDescription),1))],10,bt))),128))],8,wt)],8,mt)]))),128)),i("section",Ct,[Pt,q(_)]),i("p",Dt,[i("button",{class:"app-button checkout-btn",id:"CheckoutBtn",disabled:n.checkoutBtnDisabled,onClick:t[0]||(t[0]=o=>n.showModal=!0)}," Create My Plan! ",8,xt),(h(),J(he,{to:"body"},[q(g,{show:n.showModal,onClose:t[1]||(t[1]=o=>n.showModal=!n.showModal)},null,8,["show"])]))])])])])}const qt=$(et,[["render",Et]]);export{qt as default};
