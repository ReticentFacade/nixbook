(()=>{var t={44937:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var n=o(36758),r=o.n(n),i=o(40935),s=o.n(i)()(r());s.push([t.id,".logo{margin:0;cursor:pointer;text-decoration:none;color:inherit;display:flex;-moz-column-gap:16px;column-gap:16px;display:flex;align-items:center;justify-content:center;width:-moz-fit-content;width:fit-content}.logo-icon{fill:var(--wh-primary-500);height:-moz-fit-content;height:fit-content;border-bottom:2px solid var(--wh-primary-500)}.logo-text{display:flex;flex-wrap:wrap;max-width:120px;line-height:1.1}.logo-headline{width:100%;font-weight:500;font-size:16px;color:var(--wh-text);white-space:nowrap}.logo-subline{width:100%;font-weight:400;font-size:11px;color:var(--wh-text-lighter);white-space:nowrap}",""]);const c=s},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var l=0;l<t.length;l++){var p=[].concat(t[l]);n&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},88346:(t,e,o)=>{var n=o(44937);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},27479:(t,e,o)=>{"use strict";o.d(e,{c:()=>n});const n=o(38085).productionEnvironment},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>i});var n=o(38085),r=o(93811);class i extends r.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(93811),e=o(95665),n=o(38085),r=o(27479),i=o(30827),s=o(88346),c=o.n(s),a=function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};n.SHARED_COMPONENTS.Logo;class l extends i.y{constructor(){super(...arguments),this.components=[n.SHARED_COMPONENTS.Icon.TAG],this.size="24"}render(){return t.html` <a
      class="logo"
      part="logo-link"
      title="Visit Web Highlights Home Page"
      href="${r.c.WEBSITE_URL}"
    >
      <webhighlights-icon
        icon="mark-icon"
        size="${this.size}"
        part="logo-icon"
        class="logo-icon"
      ></webhighlights-icon>
      <div class="logo-text" part="logo-text">
        <span part="logo-headline" class="logo-headline"
          >${this.headline||"Web Highlights"}</span
        >
        <span part="logo-subline" class="logo-subline"
          >${this.subline||"PDF & Web Highlighter"}</span
        >
      </div>
    </a>`}}l.styles=t.css`
    ${(0,t.unsafeCSS)(c())}
  `,a([(0,e.property)()],l.prototype,"size",void 0),a([(0,e.property)()],l.prototype,"headline",void 0),a([(0,e.property)()],l.prototype,"subline",void 0),i.y.define("webhighlights-logo",l)})()})();