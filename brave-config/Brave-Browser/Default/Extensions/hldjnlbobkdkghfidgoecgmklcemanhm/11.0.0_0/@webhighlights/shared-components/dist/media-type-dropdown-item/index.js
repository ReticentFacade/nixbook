(()=>{var t={57411:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var r=o(36758),i=o.n(r),n=o(40935),s=o.n(n)()(i());s.push([t.id,".blocktype-dropdown-item{background-color:inherit;border:none;border-radius:4px;color:var(--wh-text);padding:6px 10px;display:flex;align-items:center;cursor:pointer;min-width:100%;width:-moz-max-content;width:max-content;-moz-column-gap:4px;column-gap:4px;transition:opacity .2s ease-in-out}.blocktype-dropdown-item.selected,.blocktype-dropdown-item:hover{background-color:var(--wh-bg-base-hover-strong);color:var(--wh-text-strongest);border:none}.blocktype-dropdown-item[disabled]{opacity:.2}.blocktype-dropdown-item[role=status]{cursor:progress}.blocktype-dropdown-item.with-dropdown-icon{padding-left:6px !important}.blocktype-dropdown-item .icon{width:14px;width:var(--media-type-dropdown-icon-size, 14px);height:14px;height:var(--media-type-dropdown-icon-size, 14px)}",""]);const c=s},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,r,i,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(s[l]=!0)}for(var p=0;p<t.length;p++){var a=[].concat(t[p]);r&&s[a[0]]||(void 0!==n&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=n),o&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=o):a[2]=o),i&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=i):a[4]="".concat(i)),e.push(a))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},5e4:(t,e,o)=>{var r=o(57411);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},28230:(t,e,o)=>{"use strict";o.d(e,{u:()=>c});var r=o(38085),i=o(93811);const n="15",s={[r.MARK_MEDIA_TYPE.PARAGRAPH]:i.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${n}
      width=${n}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 6V21H11V6H5V4H19V6H13Z"></path>
    </svg>`,[r.MARK_MEDIA_TYPE.BLOCKQUOTE]:i.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${n}
      width=${n}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.HEADING_1]:i.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${n}
      width=${n}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM21.0005 8V20H19.0005L19 10.204L17 10.74V8.67L19.5005 8H21.0005Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.HEADING_2]:i.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${n}
      width=${n}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4V11H11V4H13V20H11V13H4V20H2V4H4ZM18.5 8C20.5711 8 22.25 9.67893 22.25 11.75C22.25 12.6074 21.9623 13.3976 21.4781 14.0292L21.3302 14.2102L18.0343 18H22V20H15L14.9993 18.444L19.8207 12.8981C20.0881 12.5908 20.25 12.1893 20.25 11.75C20.25 10.7835 19.4665 10 18.5 10C17.5818 10 16.8288 10.7071 16.7558 11.6065L16.75 11.75H14.75C14.75 9.67893 16.4289 8 18.5 8Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.HEADING_3]:i.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${n}
      width=${n}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8L21.9984 10L19.4934 12.883C21.0823 13.3184 22.25 14.7728 22.25 16.5C22.25 18.5711 20.5711 20.25 18.5 20.25C16.674 20.25 15.1528 18.9449 14.8184 17.2166L16.7821 16.8352C16.9384 17.6413 17.6481 18.25 18.5 18.25C19.4665 18.25 20.25 17.4665 20.25 16.5C20.25 15.5335 19.4665 14.75 18.5 14.75C18.214 14.75 17.944 14.8186 17.7056 14.9403L16.3992 13.3932L19.3484 10H15V8H22ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.BULLET_LIST_ITEM]:i.html`<svg
      stroke="currentColor"
      fill="currentColor"
      part="icon"
      class="icon"
      stroke-width="0"
      viewBox="0 0 24 24"
      height=${n}
      width=${n}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"
      ></path>
    </svg>`,[r.MARK_MEDIA_TYPE.CODE]:i.html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height=${n}
        width=${n}
        viewBox="0 0 24 24"
        fill="none"
        part="icon"
        class="icon"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    `,[r.MARK_MEDIA_TYPE.IMAGE]:i.html`
      <webhighlights-icon
        icon=${r.ICON_NAMES.image}
        size=${n}
      ></webhighlights-icon>
    `},c=[{type:r.MARK_MEDIA_TYPE.PARAGRAPH,name:"Paragraph",icon:s[r.MARK_MEDIA_TYPE.PARAGRAPH]},{type:r.MARK_MEDIA_TYPE.BLOCKQUOTE,name:"Quote",icon:s[r.MARK_MEDIA_TYPE.BLOCKQUOTE]},{type:r.MARK_MEDIA_TYPE.HEADING_1,name:"Heading 1",icon:s[r.MARK_MEDIA_TYPE.HEADING_1]},{type:r.MARK_MEDIA_TYPE.HEADING_2,name:"Heading 2",icon:s[r.MARK_MEDIA_TYPE.HEADING_2]},{type:r.MARK_MEDIA_TYPE.HEADING_3,name:"Heading 3",icon:s[r.MARK_MEDIA_TYPE.HEADING_3]},{type:r.MARK_MEDIA_TYPE.BULLET_LIST_ITEM,name:"Bullet List",icon:s[r.MARK_MEDIA_TYPE.BULLET_LIST_ITEM]},{type:r.MARK_MEDIA_TYPE.CODE,name:"Code",icon:s[r.MARK_MEDIA_TYPE.CODE]}]},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>n});var r=o(38085),i=o(93811);class n extends i.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,r.lazyDefine)(this.components)}static define(t,e,o){(0,r.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={id:r,exports:{}};return t[r](n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),r=o(95665),i=o(30827),n=o(28230),s=o(5e4),c=o.n(s),l=function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s};const p=t.SHARED_COMPONENTS.MediaTypeDropdownItem,a=p.TAG;class d extends i.y{constructor(){super(...arguments),this.showDropdownIcon=!1,this.showIcon=!0,this.showLabel=!0,this.isSelected=!1}onItemSelected(e){e.preventDefault(),(0,t.stopPropagation)(e),this.dispatchEvent(new CustomEvent("itemSelected",{detail:this.item}))}render(){var t,o;const r=this.props;return r?(function(t){return!!t.activeMediaType}(r)&&(this.item=n.u.find((t=>t.type===r.activeMediaType))),function(t){return!!t.item}(r)&&(this.item=r.item),this.item?e.html`<button
      @click=${this.onItemSelected}
      data-testid=${p.TEST_IDS.HIGHLIGHT_BTN(this.item.type)}
      class="blocktype-dropdown-item ${this.item.name} ${this.isSelected?"selected":""} ${this.showDropdownIcon?"with-dropdown-icon":""}"
      part="blocktype-dropdown-item-btn"
      ?disabled=${null===(t=this.props)||void 0===t?void 0:t.isLoading}
      role="${(null===(o=this.props)||void 0===o?void 0:o.isLoading)?"status":"menuitem"}"
    >
      ${this.showIcon?this.item.icon:e.html``}
      ${this.showLabel?this.item.name:e.html``}
      ${this.showDropdownIcon?e.html`
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          `:e.html``}
    </button>`:(console.warn("No blocktype 'item' found in 'webhighlights-blocktype-dropdown-item'",r),e.html``)):(console.warn("No 'props' passed to 'webhighlights-blocktype-dropdown-item'"),e.html``)}}d.styles=[e.css`
      ${(0,e.unsafeCSS)(c())}
    `],l([(0,r.property)()],d.prototype,"props",void 0),l([(0,r.property)()],d.prototype,"showDropdownIcon",void 0),l([(0,r.property)()],d.prototype,"showIcon",void 0),l([(0,r.property)()],d.prototype,"showLabel",void 0),l([(0,r.property)()],d.prototype,"isSelected",void 0),l([(0,r.property)()],d.prototype,"item",void 0),i.y.define(a,d)})()})();