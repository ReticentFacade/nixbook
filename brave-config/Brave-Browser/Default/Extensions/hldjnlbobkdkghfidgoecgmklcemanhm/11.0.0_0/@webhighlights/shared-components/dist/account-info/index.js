(()=>{var t={55656:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var n=o(36758),a=o.n(n),r=o(40935),i=o.n(r)()(a());i.push([t.id,":host{font-family:var(--wh-font-family);display:block}.account-info{display:flex;align-items:center;-moz-column-gap:8px;column-gap:8px;overflow:hidden;text-overflow:ellipsis}.account-info .avatar{display:flex;align-items:center;--avatar-size: 24px}.account-info .avatar::part(image){margin-right:0}.account-info .user-name-and-email{overflow:hidden;text-overflow:ellipsis}.account-info .user-name-and-email span{display:block;line-height:1;overflow:hidden;text-overflow:ellipsis}.account-info .user-name-and-email .user-name{font-weight:600;font-size:12.5px;color:var(--wh-text-light)}.account-info .user-name-and-email .email{font-weight:500;font-size:11px;color:var(--wh-text-lighter)}",""]);const s=i},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},2463:(t,e,o)=>{var n=o(55656);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>r});var n=o(38085),a=o(93811);class r extends a.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),n=o(95665),a=o(30827),r=o(2463),i=o.n(r);const s=t.SHARED_COMPONENTS.AccountInfo,c="webhighlights-account-info";class l extends a.y{constructor(){super(...arguments),this.components=[t.SHARED_COMPONENTS.Avatar.TAG]}render(){var t,o,n;if(!this.props)throw new Error(`'props' missing in ${c}`);const a=(null===(t=this.props.userInfo)||void 0===t?void 0:t.displayName)||"You",r=(null===(o=this.props.jwtPayload)||void 0===o?void 0:o.email)||"No account created";return e.html` <div
      class="account-info"
      data-testid=${s.TEST_IDS.ACCOUNT_INFO}
    >
      <webhighlights-avatar
        class="avatar"
        data-testid=${s.TEST_IDS.AVATAR}
        .loading=${!this.props.loaded}
        .userInfo=${null!==(n=this.props.userInfo)&&void 0!==n?n:null}
      ></webhighlights-avatar>
      <div class="user-name-and-email">
        <span
          class="user-name"
          title="${a}"
          data-testid=${s.TEST_IDS.USER_NAME}
          >${a}</span
        >
        <span
          class="email"
          title="${r}"
          data-testid=${s.TEST_IDS.EMAIL}
          >${r}</span
        >
      </div>
    </div>`}}l.styles=e.css`
    ${(0,e.unsafeCSS)(i())}
  `,function(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);r>3&&i&&Object.defineProperty(e,o,i)}([(0,n.property)()],l.prototype,"props",void 0),a.y.define(c,l)})()})();