(()=>{var e={45871:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(36758),o=r.n(i),n=r(40935),s=r.n(n)()(o());s.push([e.id,':host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--width: 36px;--height: 16px;--primary-color: #00b077;--primary-color-transparent: rgba(0,176,120,0.23137)}.switch{display:inline-block;width:var(--width);height:var(--height);padding:4px;border-radius:20px;background:#e8e8e8;vertical-align:middle;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:background 350ms ease;border:1px solid var(--wh-border-base-strong)}.switch:before,.switch:after{content:"";display:block;width:calc(var(--width)/2);height:var(--height);border-radius:50%;position:absolute;top:50%;transition:all 350ms cubic-bezier(0, 0.95, 0.38, 0.98),background 150ms ease}.switch:before{background:rgba(190,190,190,.075);transform:translate3d(0, -50%, 0) scale(0)}.switch:after{background:#bebebe;transform:translate3d(0, -50%, 0)}.switch:active:before{transform:translate3d(0, -50%, 0) scale(3)}input:checked+.switch{background:var(--wh-primary-color-transparent)}input:checked+.switch:before{background:rgba(var(--wh-primary-color), 0.075);transform:translate3d(100%, -50%, 0) scale(1)}input:checked+.switch:after{background:var(--wh-primary-color);transform:translate3d(100%, -50%, 0)}input:checked+.switch:active:before{background:rgba(var(--wh-primary-color), 0.075);transform:translate3d(100%, -50%, 0) scale(3)}',""]);const a=s},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",i=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),i&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),i&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,i,o,n){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&s[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},5422:(e,t,r)=>{var i=r(45871);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},30827:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var i=r(38085),o=r(93811);class n extends o.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}static define(e,t,r){(0,i.defineWebHighlightsElement)(e,t,r)}}},95665:e=>{"use strict";e.exports=LitDecoratorsExternal},93811:e=>{"use strict";e.exports=LitExternal},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={id:i,exports:{}};return e[i](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(93811),t=r(95665),i=r(38085),o=r(30827),n=r(5422),s=r.n(n),a=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};const c=i.SHARED_COMPONENTS.ToggleButton.TAG;class d extends o.y{constructor(){super(...arguments),this.isEnabled=!0,this.disabled=!1,this.disabledAlertMsg=""}emit(e){this.dispatchChangeEvent(e)}dispatchChangeEvent(e){this.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e}))}onChange(e){this.isEnabled=!this.isEnabled,this.emit(this.isEnabled)}onToggleClick(){this.disabled&&this.disabledAlertMsg&&alert(this.disabledAlertMsg)}render(){return e.html`
      <div class="center-xy" @click=${this.onToggleClick}>
        <input
          id="${this.inputId}-switch"
          type="checkbox"
          hidden
          .disabled=${this.disabled}
          .checked=${this.isEnabled}
          @change=${this.onChange}
        />
        <label for="${this.inputId}-switch" class="switch"></label>
      </div>
    `}}d.styles=e.css`
    ${(0,e.unsafeCSS)(s())}
  `,a([(0,t.property)()],d.prototype,"isEnabled",void 0),a([(0,t.property)()],d.prototype,"inputId",void 0),a([(0,t.property)()],d.prototype,"disabled",void 0),a([(0,t.property)()],d.prototype,"disabledAlertMsg",void 0),o.y.define(c,d)})()})();