(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22142f79"],{"0237":function(t,e,i){t.exports=i.p+"img/banner-4.722a7fa7.png"},"0fc3":function(t,e,i){t.exports=i.p+"img/laptop-mobile.0ab9044c.png"},1834:function(t,e,i){t.exports=i.p+"img/strethoscope.25dccaaf.png"},"1e83":function(t,e,i){t.exports=i.p+"img/doctors-patients-1.c32f77cb.jpg"},"2a65":function(t,e,i){t.exports=i.p+"img/swati.5bf0f4f7.png"},"2cb3":function(t,e,i){t.exports=i.p+"img/vincent.412efdd4.png"},"2e57":function(t,e,i){t.exports=i.p+"img/banner-2.4ad68be4.png"},"351c":function(t,e,i){t.exports=i.p+"img/harvinder.fdd4c4e5.png"},"39bb":function(t,e,i){t.exports=i.p+"img/doctors-patients-2.6b68d6fc.png"},"3b22":function(t,e,i){t.exports=i.p+"img/fall-management.dc9a4247.png"},"3d09":function(t,e,i){t.exports=i.p+"img/background-red-green.4c162684.png"},4554:function(t,e,i){t.exports=i.p+"img/doctors-3.348e71a9.png"},"48aa":function(t,e,i){t.exports=i.p+"img/processor.6e259efd.png"},"51d8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.sections,(function(e,s){return n("v-parallax",{key:"section"+s,staticClass:"py-10",class:e.class,attrs:{height:t.$vuetify.breakpoint.mobile?"":e.height||"500",src:e.background&&i("7584")("./"+e.background)}},[n("v-row",{attrs:{align:e.align||"center",justify:"center"}},t._l(e.cols,(function(a,o){return n("v-col",{key:"section"+s+"col"+o,staticClass:"text-center",attrs:{cols:"12",sm:Math.floor(12/e.cols.length)}},[t._l(a,(function(e,a){return["div"==e.tag?n("div",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{src:e.src&&i("7584")("./"+e.src)},domProps:{innerHTML:t._s(e.text)}}):"v-img"==e.tag?n("v-img",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{"max-height":"400",height:e.height,src:e.src&&i("7584")("./"+e.src),contain:""}},[t._v(" "+t._s(e.text)+" ")]):"v-btn"==e.tag?n("v-btn",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{to:e.to,src:e.src&&i("7584")("./"+e.src),large:""}},[t._v(" "+t._s(e.text)+" "),n("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right")])],1):"v-icon"==e.tag?n("v-icon",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{src:e.src&&i("7584")("./"+e.src)}},[t._v(" "+t._s(e.text)+" ")]):"v-carousel"==e.tag?n("v-carousel",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{height:"400",src:e.src&&i("7584")("./"+e.src),cycle:"","show-arrows-on-hover":""}},t._l(e.items,(function(t,e){return n("v-carousel-item",{key:"section"+s+"col"+o+"element"+a+"carousel"+e,staticClass:"mx-12",attrs:{src:t&&i("7584")("./"+t),contain:""}})})),1):"v-tabs"==e.tag?n("v-tabs",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{src:e.src&&i("7584")("./"+e.src),vertical:!t.$vuetify.breakpoint.mobile,"show-arrows":""}},[t._l(e.tabs,(function(e,r){return[n("v-tab",{key:"section"+s+"col"+o+"element"+a+"tab"+r},[t._v(" "+t._s(e.tabTitle)+" ")]),n("v-tab-item",{key:"section"+s+"col"+o+"element"+a+"tab-item"+r},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-img",{staticClass:"ma-4",attrs:{src:e.src&&i("7584")("./"+e.src)}})],1),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-card",{staticClass:"text-left",attrs:{flat:""}},[n("v-card-title",[t._v(t._s(e.title))]),n("v-card-text",[t._v(t._s(e.text))])],1)],1)],1)],1)]}))],2):"v-card"==e.tag?n("v-card",{key:"section"+s+"col"+o+"element"+a,class:e.class,attrs:{height:t.$vuetify.breakpoint.mobile?void 0:"300",src:e.src&&i("7584")("./"+e.src)}},[n("v-card-title",{class:"text-left "+e.titleClass,domProps:{innerHTML:t._s(e.title)}}),n("v-card-text",{class:"text-left "+e.textClass,domProps:{innerHTML:t._s(e.text)}})],1):t._e()]}))],2)})),1)],1)})),1)},s=[],a={props:{sections:Array}},o=a,r=(i("c5ef"),i("2877")),c=i("6544"),l=i.n(c),d=i("8336"),p=i("b0af"),g=i("99d9"),h=i("5530"),u=(i("a9e3"),i("63b7"),i("f665")),m=i("afdd"),f=i("9d26"),A=i("37c6"),v=i("3860"),b=i("80d2"),x=i("d9bd"),w=u["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({},u["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(x["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:u["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(m["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(f["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(v["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(A["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=u["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(b["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),y=i("9d65"),k=i("4e82"),T=i("c3f0"),C=i("58df"),E=Object(C["a"])(y["a"],Object(k["a"])("windowGroup","v-window-item","v-window")),B=E.extend().extend().extend({name:"v-window-item",directives:{Touch:T["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(b["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(b["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),Q=i("adda"),D=i("1c87"),S=Object(C["a"])(B,D["a"]),I=S.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(Q["a"],{staticClass:"v-carousel__item",props:Object(h["a"])(Object(h["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(b["n"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),_=i("62ad"),U=i("132d"),j=(i("94aa"),i("2b0e")),H=j["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),O=Object(C["a"])(H),F=O.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},i=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),n=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[i,n])}}),G=i("0fd9"),M=i("71a3"),V=B.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=B.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),$=i("fe57"),P=Object(r["a"])(o,n,s,!1,null,"1fbaa9ea",null);e["a"]=P.exports;l()(P,{VBtn:d["a"],VCard:p["a"],VCardText:g["b"],VCardTitle:g["c"],VCarousel:w,VCarouselItem:I,VCol:_["a"],VIcon:U["a"],VImg:Q["a"],VParallax:F,VRow:G["a"],VTab:M["a"],VTabItem:V,VTabs:$["a"]})},"542a":function(t,e,i){t.exports=i.p+"img/doctors-1.16eb128d.jpg"},"56cb":function(t,e,i){t.exports=i.p+"img/desktop-descriptive-2.057708d2.png"},"579b":function(t,e,i){t.exports=i.p+"img/banner-3.c925e636.png"},"582f":function(t,e,i){t.exports=i.p+"img/harish.7828a1de.png"},"5f46":function(t,e,i){t.exports=i.p+"img/background-red.54cc3cc2.png"},"63b7":function(t,e,i){},6409:function(t,e,i){"use strict";i("dab2")},"666c":function(t,e,i){t.exports=i.p+"img/management-1.31a6f497.png"},"6b9a":function(t,e,i){},"6d92":function(t,e,i){t.exports=i.p+"img/subhra.358d2e89.png"},7584:function(t,e,i){var n={"./background-green.png":"5030","./background-red-green.png":"3d09","./background-red-red.png":"a8f5","./background-red.png":"5f46","./background-white.png":"d2dd","./banner-1.png":"8690","./banner-2.png":"2e57","./banner-3.png":"579b","./banner-4.png":"0237","./banner-5.png":"7bbd","./banner-invert.png":"f544","./department-and-committee.png":"ed25","./desktop-descriptive-2.png":"56cb","./desktop-descriptive.png":"7ae8","./desktop-overview.png":"e574","./doctor-globe.png":"ba2a","./doctors-1.jpg":"542a","./doctors-2.png":"efbf","./doctors-3.png":"4554","./doctors-4.png":"ff8a","./doctors-patients-1.jpg":"1e83","./doctors-patients-2.png":"39bb","./every-device.png":"de07","./fall-management.png":"3b22","./hand-hygiene.png":"d74f","./hospital-overview-2.png":"8887","./hospital-overview.png":"776d","./laptop-mobile.png":"0fc3","./management-1.png":"666c","./matrix.png":"f551","./mobile-forms-2.png":"ae5d","./mobile-forms.png":"837d","./needle-stick-injury.png":"dcd0","./processor.png":"48aa","./strethoscope.png":"1834","./team/andrey.png":"9913","./team/harish.png":"582f","./team/harvinder.png":"351c","./team/iqbal.png":"d05c","./team/noelani.png":"7909","./team/pavitra.png":"d884","./team/priyadarshini.png":"b32a","./team/subhra.png":"6d92","./team/swati.png":"2a65","./team/vincent.png":"2cb3"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="7584"},"776d":function(t,e,i){t.exports=i.p+"img/hospital-overview.197d123e.png"},7909:function(t,e,i){t.exports=i.p+"img/noelani.175f3240.png"},"7ae8":function(t,e,i){t.exports=i.p+"img/desktop-descriptive.3d56e739.png"},"7bbd":function(t,e,i){t.exports=i.p+"img/banner-5.51f65c11.png"},"837d":function(t,e,i){t.exports=i.p+"img/mobile-forms.c9edf223.png"},8690:function(t,e,i){t.exports=i.p+"img/banner-1.46ac9bae.png"},8887:function(t,e,i){t.exports=i.p+"img/hospital-overview-2.437dd5ed.png"},"94aa":function(t,e,i){},9913:function(t,e,i){t.exports=i.p+"img/andrey.935bffae.png"},a8f5:function(t,e,i){t.exports=i.p+"img/background-red-red.0307cbd3.png"},ae5d:function(t,e,i){t.exports=i.p+"img/mobile-forms-2.032918da.png"},b32a:function(t,e,i){t.exports=i.p+"img/priyadarshini.a5f59639.png"},ba2a:function(t,e,i){t.exports=i.p+"img/doctor-globe.dd738534.png"},bfd6:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ContentBuilder",{attrs:{sections:t.sections}}),i("Footer")],1)},s=[],a=i("51d8"),o=i("088a"),r={components:{ContentBuilder:a["a"],Footer:o["a"]},metaInfo:{meta:[{name:"description",content:"We use global accreditation standards in our SaaS software to improve Leadership and Governance, Patient Safety and Quality of Care in hospitals. We use Algorithms and Analytics to monitor and measure Performance Metrics for quality improvement."}]},data:function(){return{sections:[{background:"background-white.png",class:"px-8",cols:[[{tag:"v-icon",class:"text-h1 secondary--text font-weight-bold mb-8",text:"mdi-trophy"},{tag:"div",class:"primary--text text-left font-weight-bold mx-sm-8 mb-8",text:"Vision – All Hospitals adopt Data-Driven Decision Making (D3M) practices"},{tag:"div",class:"black--text text-left font-weight-bold mx-sm-8",text:"Hospitals need clear visibility of operations, to take the right action, at the right time, for the right reason"}],[{tag:"v-icon",class:"text-h1 secondary--text font-weight-bold mb-8",text:"mdi-bullseye-arrow"},{tag:"div",class:"primary--text text-left font-weight-bold mx-sm-8 mb-8",text:'Mission – Raising standards in Hospitals!<br><span class="transparent--text">_</span>'},{tag:"div",class:"black--text text-left font-weight-bold mx-sm-8",text:"Hospitals need clear visibility of operations, to take the right action, at the right time, for the right reason"}]]},{background:"background-red-red.png",class:"px-8",cols:[[{tag:"v-img",class:"ma-sm-10 ma-4",src:"hospital-overview.png"}],[{tag:"div",class:"text-h5 primary--text font-weight-bold text-left mb-8",text:"A SaaS company with a difference."},{tag:"div",class:"black--text text-left",text:"Pulse Data Technologies (PDT) is a tech startup with a multi-disciplinary team with proven industry expertise and knowhow in hospital operations, global accreditation standards, data sciences and software development.<br><br>We have developed our Pulse System with automated algorithms and global accreditation standards to drive your decision making to help hospitals achieve better leadership and governance, patient safety and quality of care!<br><br>We believe in providing Doctors, Nurses and Employees with validated data in daily operations to enable timely and effective action for a better outcome and patient experience."}]]},{background:"background-white.png",class:"px-8",cols:[[{tag:"div",class:"text-h5 primary--text font-weight-bold text-left mb-8",text:"We look to future proofing hospitals."},{tag:"div",class:"black--text text-left",text:"<ul><li>We support hospitals to gain good insight of what drives the operational standards.</li><li>We infuse these with data driven intelligence and data visualisation digital tools.</li><li>Collectively, these elements form the foundation for Digital Transformation of hospitals.</li></ul>"}],[{tag:"v-img",class:"ma-sm-10 ma-4",src:"doctors-2.png"}]]},{background:"background-red-green.png",class:"px-8",cols:[[{tag:"v-img",class:"ma-sm-10 ma-4",src:"management-1.png"}],[{tag:"div",class:"text-h5 primary--text font-weight-bold text-left mb-8",text:"We are here to help you on your digital transformation journey!"},{tag:"div",class:"black--text text-left mb-4",text:"Pulse Data Technologies is a long-term partner to hospitals by:"},{tag:"div",class:"black--text text-left mx-4",text:"<ul><li>improving clinical and non-clinical process efficiencies</li><li>integrating our Pulse System into your transformation strategies</li><li>helping you develop your digital culture</li><li>introducing data sciences and analytics into your operations</li></ul>"}]]},{background:"background-white.png",class:"px-8",cols:[[{tag:"div",class:"text-h4 secondary--text mb-8",text:"01."},{tag:"div",class:"text-h5 primary--text mb-8",text:"HOSPITAL ACCREDITATION & STANDARDS"},{tag:"div",class:"black--text mb-4",text:'Our deep knowledge and expertise of International Accreditation and regional Accreditation Standards, is the basis and foundation for Pulse.<br><span class="transparent--text">_</span>'}],[{tag:"div",class:"text-h4 secondary--text mb-8",text:"02."},{tag:"div",class:"text-h5 primary--text mb-8",text:"EXTENSIVE KNOWLEDGE OF HOSPITAL OPERATIONS"},{tag:"div",class:"black--text mb-4",text:"With extensive experience in hospital operations and a strong track-record in technology software adoption, we have incorporated hospital user perspectives for seamless adoption."}],[{tag:"div",class:"text-h4 secondary--text mb-8",text:"03."},{tag:"div",class:"text-h5 primary--text mb-8",text:"TECHNOLOGY AND DATA ANALYTICS IN HEALTHCARE"},{tag:"div",class:"black--text mb-4",text:'Technology and Data Analytics have been integrated into Pulse to support hospitals in their Digital Transformation strategies and beyond.<br><span class="transparent--text">_</span>'}]]}]}}},c=r,l=(i("6409"),i("2877")),d=Object(l["a"])(c,n,s,!1,null,"100fd3de",null);e["default"]=d.exports},c5ef:function(t,e,i){"use strict";i("6b9a")},d05c:function(t,e,i){t.exports=i.p+"img/iqbal.dca37e69.png"},d2dd:function(t,e){t.exports="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/CABEIAJYA4QMBIgACEQEDEQH/xAApAAEBAQEAAAAAAAAAAAAAAAAAAQIJAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADqkCUCwShKAJQlCUJQlCUJQiiKAJQSiLAsFCUJZSUJQlCKIsCwKAAABCkKAlCUJQQoBCoKQqCpSWUAAAAAAAAAAAAAJSWUAAAAAAAAAAAAAlCUEoAAAAAAAAAAAAlCUEoAAAAAAAAAAAKM2UiiKAAAAAAAAAAAAJZSWUAAAAAAAAAAAAAAgAKAAAAAAAAAAAD/xAAkEAACAgICAgICAwAAAAAAAAAAEQEQIUEgMDFRQIEScWGh8P/aAAgBAQABPwBjHkYxjGMYxkyRIxjHgYxjGTIyZGM/InkxjGMYx5GMYxjGMYxkyMY59Eksc1DMmTJkyZRkyOTPoyhz6NDn0SOSf0OSWOfRkcmRz6J81vjms1k8mzzeprxFPwZJM3kUkulJkyzIpEKRCFJkRDEZ9ikyKTIppTSkQprdb6917rU1oR6ESImBHkX8xxjhHFUqWBCFSpUhGamDZMEQb7NXN7rdvjFKlS565oQhCpGySI7dXN7rfDEGDBKI5rqVo2Kle638zZHfrj93/VTaIF0b+Aj1XmSLVKl2IQhCEffH76N8/voZJ6rZHFUujXCYEIQj/eTA7ji+G+HjpZgZPk3Bs8yQRnq8CpUqVKlS/R//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ABb/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/ABb/2Q=="},d74f:function(t,e,i){t.exports=i.p+"img/hand-hygiene.b0e134cd.png"},d884:function(t,e,i){t.exports=i.p+"img/pavitra.c0debad6.png"},dab2:function(t,e,i){},dcd0:function(t,e,i){t.exports=i.p+"img/needle-stick-injury.27312c40.png"},de07:function(t,e,i){t.exports=i.p+"img/every-device.421425e7.png"},e574:function(t,e,i){t.exports=i.p+"img/desktop-overview.e701e34a.png"},ed25:function(t,e,i){t.exports=i.p+"img/department-and-committee.36ef5609.png"},efbf:function(t,e,i){t.exports=i.p+"img/doctors-2.fe9cf86e.png"},f551:function(t,e,i){t.exports=i.p+"img/matrix.973bf6a2.png"},ff8a:function(t,e,i){t.exports=i.p+"img/doctors-4.ada6d3fb.png"}}]);
//# sourceMappingURL=chunk-22142f79.4ddb8a6f.js.map