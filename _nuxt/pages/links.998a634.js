(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{362:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return d}));var n=r(363),l=r(0),o=Object(l.g)("v-card__actions"),c=Object(l.g)("v-card__subtitle"),h=Object(l.g)("v-card__text"),d=Object(l.g)("v-card__title");n.a},363:function(e,t,r){"use strict";r(11),r(8),r(7),r(4),r(9);var n=r(2),l=(r(13),r(365),r(132)),o=r(1),c=(r(87),r(366),r(134)),h=r(21),d=r(64),m=r(133),f=r(14),v=r(0),y=r(5);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var _=Object(y.a)(h.a,Object(d.b)(["absolute","fixed","top","bottom"]),m.a,f.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(v.f)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(v.f)(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(v.f)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(v.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),O=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(_,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),B=r(60);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(y.a)(O,B.a,l.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return C(C({"v-card":!0},B.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},l.a.options.computed.classes.call(this))},styles:function(){var style=C({},l.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=O.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},364:function(e,t,r){},365:function(e,t,r){},366:function(e,t,r){},368:function(e,t,r){"use strict";var n=r(364);r.n(n).a},370:function(e,t,r){"use strict";var n={name:"VoiceBtn",props:{emoji:{default:"💫",type:String},large:{default:!1,type:Boolean}},computed:{dark_text:function(){return{"grey--text text--lighten-2":this.$vuetify.theme.dark}}}},l=(r(368),r(45)),o=r(86),c=r.n(o),h=r(190),d=r(66),m=r(25),f=r(5),v=r(6),y=Object(f.a)(d.a,m.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(v.c)("v-hover should only contain a single element",this),element)):(Object(v.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-btn",{staticClass:"ma-1 pa-2 vo-btn",class:e.dark_text,style:{"--hover-content":"'"+e.emoji+"'"},attrs:{elevation:n?6:2,rounded:"",height:"max-content","min-height":"36px",large:e.large}},[r("div",[e._t("default")],2)])]}}],null,!0)})}),[],!1,null,"43005efa",null);t.a=component.exports;c()(component,{VBtn:h.a,VHover:y})},371:function(e,t,r){"use strict";r(130);var n=r(131);t.a=Object(n.a)("layout")},374:function(e,t,r){"use strict";r(130);var n=r(131);t.a=Object(n.a)("flex")},383:function(e,t,r){"use strict";r.r(t);var n={components:{VoiceBtn:r(370).a},data:function(){return{links:[{title:"myemie-bilibili-channel1",url:"https://space.bilibili.com/2080163552",tr:{zh:"Sakula小舞的Bilibili频道",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel2",url:"https://space.bilibili.com/2080163552",tr:{zh:"Sakula小舞的新浪微博",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel3",url:"https://space.bilibili.com/2080163552",tr:{zh:"兰笛Saku的Bilibili频道",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel4",url:"https://space.bilibili.com/2080163552",tr:{zh:"兰笛Saku的新浪微博",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel5",url:"https://space.bilibili.com/2080163552",tr:{zh:"鱼一YY的Bilibili频道",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel6",url:"https://space.bilibili.com/2080163552",tr:{zh:"小豆芽爱雪璃的Bilibili频道",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel7",url:"https://space.bilibili.com/2080163552",tr:{zh:"夏南柯Nicole的Bilibili频道",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel8",url:"https://space.bilibili.com/2080163552",tr:{zh:"夏南柯Nicole的新浪微博",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🐏"},{title:"myemie-bilibili-channel9",url:"https://space.bilibili.com/2080163552",tr:{zh:"Bambi的YouTube频道",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🦌"},{title:"myemie-bilibili-channel10",url:"https://space.bilibili.com/2080163552",tr:{zh:"Bambi的Twitter主页",en:"Myemie's Bilibili Channel",ja:"ひつじちゃんのビリビリチャンネル"},color:"light-blue",emoji:"🦌"}],loading:!0}},computed:{current_locale:function(){return this.$i18n.locale}},mounted:function(){},methods:{shuffle:function(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e}}},l=r(45),o=r(86),c=r.n(o),h=r(363),d=r(362),m=r(374),f=r(371),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-flex",[r("v-card",{attrs:{loading:e.loading}},[r("v-card-title",[e._v(e._s(e.$t("site.links")))]),e._v(" "),r("v-card-text",e._l(e.links,(function(t){return r("a",{key:t.title,attrs:{href:t.url,target:"_blank"}},[r("voice-btn",{staticClass:"link-button white--text",class:t.color,attrs:{large:!0,emoji:t.emoji}},[e._v("\n            "+e._s(t.tr[e.current_locale])+"\n          ")])],1)})),0)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:h.a,VCardText:d.b,VCardTitle:d.c,VFlex:m.a,VLayout:f.a})}}]);