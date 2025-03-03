(()=>{var t={46530:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var n=o(36758),r=o.n(n),i=o(40935),s=o.n(i)()(r());s.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{z-index:9999 !important}:host{width:240px;height:40px;position:fixed;right:-425px;top:65px}.pdf-hint-container{align-items:center;background-color:var(--wh-bg-base);border:2px solid var(--wh-primary-color);border-radius:5px;box-shadow:0 4px 2px 0px var(--wh-primary-color-transparent);color:var(--wh-text);display:flex;font-family:sans-serif;justify-content:space-between;padding:5px 10px}.pdf-hint-container .navigate-to-pdf-link{font-size:16px;color:var(--wh-text);text-decoration:none;cursor:pointer}.pdf-hint-container .navigate-to-pdf-link:hover{color:var(--wh-primary-light);text-decoration:underline}.pdf-hint-container .web-highlights-icon{height:24px;width:24px;fill:var(--wh-primary-light)}.pdf-hint-container .close-btn{fill:var(--wh-text);cursor:pointer;background:none;border:none;color:var(--wh-text);display:flex;align-items:center}.pdf-hint-container .close-btn:hover{transform:scale(1.1)}.slide-left{animation:slide-left .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;animation-delay:.2s}@keyframes slide-left{0%{transform:translateX(0)}100%{transform:translateX(-440px)}}",""]);const a=s},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},1625:(t,e,o)=>{var n=o(46530);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>i});var n=o(38085),r=o(93811);class i extends r.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),n=o(95665),r=o(30827),i=o(1625),s=o.n(i);const a=t.SHARED_COMPONENTS.PdfHint;class c extends r.y{constructor(){super(...arguments),this.closed=!1}onCloseClick(){this.closed=!0}onLinkClick(){t.chromeMessageService.sendRuntimeMessage({id:"navigateToPdfViewer",detail:location.href})}render(){return this.closed?e.html``:e.html`
          <div id="${t.PDF_HINT_ID}" class="pdf-hint-container slide-left">
            <svg
              class="icon web-highlights-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 544 512"
            >
              <path
                d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"
              />
            </svg>
            <a class="navigate-to-pdf-link" @click=${this.onLinkClick}
              >Highlight this PDF
            </a>
            <button class="close-btn" @click=${this.onCloseClick}>
              <svg
                class="close-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        `}}c.styles=e.css`
    ${(0,e.unsafeCSS)(s())}
  `,function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);i>3&&s&&Object.defineProperty(e,o,s)}([(0,n.property)()],c.prototype,"closed",void 0),(0,t.isPdfPage)(location.href)&&r.y.define(a.TAG,c)})()})();