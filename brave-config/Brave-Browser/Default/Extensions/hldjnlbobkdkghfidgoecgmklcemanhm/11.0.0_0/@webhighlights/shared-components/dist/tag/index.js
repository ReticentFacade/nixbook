(()=>{var e={22888:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var r=o(36758),a=o.n(r),n=o(40935),i=o.n(n)()(a());i.push([e.id,'[dir="ltr"] :host{text-align:left}[dir="rtl"] :host{text-align:right}:host{--tag-size: 12px;--tag-remove-bg-color-hover: rgba(234, 234, 234, 0.2);display:flex;align-items:center;font-family:var(--wh-font-family)}.tag{border-radius:4px;padding:2.5px 5px;background-color:var(--wh-bg-tags);color:var(--wh-text-light);font-size:12px;font-size:var(--tag-size, 12px);line-height:1;display:inline-flex;-moz-column-gap:4px;column-gap:4px;align-items:center;transition:.1s all ease-in-out;opacity:1;border:.1px solid var(--wh-subtle-gray)}.tag:hover{color:var(--wh-text)}.tag:hover .tag-badge{color:var(--wh-text)}.tag.selectable{cursor:pointer}.tag.selectable:hover{background-color:var(--wh-bg-tags-hover)}.tag-badge{font-size:8px;border-radius:9999px;background-color:var(--wh-subtle-gray);color:var(--wh-text-lighter);display:inline-flex;text-align:center;align-items:center;padding:0 5px;box-sizing:border-box;justify-content:center;height:12px;height:var(--tag-size, 12px)}.removable-x{cursor:pointer;border:none;background:rgba(0,0,0,0);display:inline-flex;text-align:center;align-items:center;box-sizing:border-box;padding:0;justify-content:center;transition:all .1s ease-in;color:var(--wh-text-lighter);border-radius:4px;outline:none}.removable-x:hover,.removable-x:focus{color:var(--wh-text-strong);background:var(--wh-subtle-gray)}',""]);const s=i},40935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var g=[].concat(e[c]);r&&i[g[0]]||(void 0!==n&&(void 0===g[5]||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=n),o&&(g[2]?(g[1]="@media ".concat(g[2]," {").concat(g[1],"}"),g[2]=o):g[2]=o),a&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=a):g[4]="".concat(a)),t.push(g))}},t}},36758:e=>{"use strict";e.exports=function(e){return e[1]}},49925:(e,t,o)=>{var r=o(22888);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()},30827:(e,t,o)=>{"use strict";o.d(t,{y:()=>n});var r=o(38085),a=o(93811);class n extends a.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}static define(e,t,o){(0,r.defineWebHighlightsElement)(e,t,o)}}},95665:e=>{"use strict";e.exports=LitDecoratorsExternal},93811:e=>{"use strict";e.exports=LitExternal},38085:e=>{"use strict";e.exports=WebHighlightsSharedLibExternal}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=o(38085),t=o(93811),r=o(95665),a=o(30827),n=o(49925),i=o.n(n),s=function(e,t,o,r){var a,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};const l=e.SHARED_COMPONENTS.Tag,c=l.TAG;class g extends a.y{constructor(){super(...arguments),this.badge=null,this.readOnly=!1,this.removable=!1,this.selectable=!1}get showRemoveIcon(){return!1!==this.removable}get isSelectable(){return!1!==this.selectable}get showBadge(){return!(!this.badge||!Number(this.badge))&&"number"==typeof+this.badge&&+this.badge>1}onRemoveIconClick(t){(0,e.stopPropagation)(t),this.dispatchEvent(new CustomEvent("removed"))}onTagSelected(t){this.readOnly&&t&&(0,e.stopPropagation)(t),"function"!=typeof this.onSelect?this.isSelectable&&e.notifications.dispatch("selectedTag",{detail:{tag:this.tag}}):this.onSelect()}onKeyUp(t){(0,e.isEnterKeyUp)(t)&&this.selectable&&this.onTagSelected()}render(){return"string"!=typeof this.tag?(console.error("[webhighlights-tag] Please pass a 'tag'"),t.html``):t.html` <span
      part="tag"
      class="tag ${this.isSelectable?"selectable":""}"
      data-testId=${l.TEST_IDS.SELECT_BTN}
      tabindex="0"
      @click=${this.onTagSelected}
      @keyup=${this.onKeyUp}
      ><slot></slot>
      ${this.showBadge?t.html`<span
            part="badge"
            class="tag-badge"
            data-testId=${l.TEST_IDS.BADGE}
            >${this.badge}</span
          >`:t.html``}
      ${this.showRemoveIcon?t.html`<button
            class="removable-x"
            title="Remove tag"
            part="remove-btn"
            @click=${this.onRemoveIconClick}
            data-testId=${l.TEST_IDS.DELETE_BTN}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button> `:t.html``}
    </span>`}}g.styles=t.css`
    ${(0,t.unsafeCSS)(i())}
  `,s([(0,r.property)()],g.prototype,"tag",void 0),s([(0,r.property)()],g.prototype,"badge",void 0),s([(0,r.property)()],g.prototype,"readOnly",void 0),s([(0,r.property)()],g.prototype,"removable",void 0),s([(0,r.property)()],g.prototype,"selectable",void 0),s([(0,r.property)()],g.prototype,"onSelect",void 0),a.y.define(c,g)})()})();