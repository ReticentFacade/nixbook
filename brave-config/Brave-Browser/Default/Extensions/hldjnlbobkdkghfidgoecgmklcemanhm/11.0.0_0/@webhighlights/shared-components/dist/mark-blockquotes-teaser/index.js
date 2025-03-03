(()=>{var t={42191:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var r=o(36758),i=o.n(r),s=o(40935),n=o.n(s)()(i());n.push([t.id,".wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking}@keyframes loadingBlinking{0%{background:rgba(140,140,140,.15)}70%{background:rgba(67,79,86,.15)}100%{background:rgba(112,145,169,.15)}}:host{display:flex;flex-wrap:wrap;--primary-color: #00b077;width:100%;padding:4px 8px}webhighlights-blockquote{width:100%}webhighlights-blockquote.preview-highlight{margin-bottom:20px}.highlights-container{display:flex;flex-wrap:wrap;max-height:120px;overflow:hidden;transition:all .35s ease-in;margin-bottom:5px;width:100%}.highlights-container.show{max-height:400px;overflow:auto;margin-bottom:10px}webhighlights-blockquote{transition:all .35s ease-in}webhighlights-blockquote.show{max-height:100%;margin-bottom:20px}webhighlights-blockquote.hidden{max-height:0}.show-more-less-btn{background:none;color:var(--wh-primary-color);border:none;cursor:pointer;font-size:12px}.show-more-less-btn:hover{text-decoration:underline}",""]);const a=n},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,r,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var n={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(n[l]=!0)}for(var h=0;h<t.length;h++){var c=[].concat(t[h]);r&&n[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},61898:(t,e,o)=>{var r=o(42191);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>s});var r=o(38085),i=o(93811);class s extends i.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}static define(t,e,o){(0,r.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),r=o(95665),i=o(30827),s=o(61898),n=o.n(s),a=function(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const l=t.SHARED_COMPONENTS.MarkBlockQuotesTeaser.TAG;class h extends i.y{constructor(){super(...arguments),this.showAllMarks=!1,this.components=[t.SHARED_COMPONENTS.MarkMediaItem.TAG]}get previewMarks(){return this.marks.slice(0,1)}get hiddenMarks(){return this.marks.slice(1,this.marks.length)}onToogle(){var t,e;this.showAllMarks&&(null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#scroll-container"))||void 0===e||e.scroll({top:0})),this.showAllMarks=!this.showAllMarks}render(){return this.marks.length?e.html`
      <div
        id="scroll-container"
        class="highlights-container ${this.showAllMarks?"show":"hidden"}"
      >
        ${this.previewMarks.map((t=>e.html`
            <webhighlights-mark-media-item
              class="preview-highlight"
              .mark=${t}
              .showCopyToClipboard=${!1}
              .hideFullText=${!0}
            ></webhighlights-mark-media-item>
          `))}
        ${this.hiddenMarks.map((t=>e.html`
            <webhighlights-mark-media-item
              class="${this.showAllMarks?"show":"hidden"}"
              .mark=${t}
              .showCopyToClipboard=${!1}
              .hideFullText=${!0}
            ></webhighlights-mark-media-item>
          `))}
      </div>
      ${this.hiddenMarks.length?e.html`
            <button class="show-more-less-btn" @click="${this.onToogle}">
              ${this.showAllMarks?"Show less":this.marks.length-this.previewMarks.length+" more highlights"}
            </button>
          `:e.html``}
    `:e.html``}}h.styles=e.css`
    ${(0,e.unsafeCSS)(n())}
  `,a([(0,r.property)()],h.prototype,"marks",void 0),a([(0,r.property)()],h.prototype,"showAllMarks",void 0),i.y.define(l,h)})()})();