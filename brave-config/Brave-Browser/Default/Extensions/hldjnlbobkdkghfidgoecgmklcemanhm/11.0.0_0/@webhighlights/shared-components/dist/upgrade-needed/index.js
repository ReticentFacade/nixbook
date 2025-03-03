(()=>{var t={61400:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var n=o(36758),r=o.n(n),i=o(40935),s=o.n(i)()(r());s.push([t.id,":host{width:100%;text-align:left;font-family:var(--wh-font-family)}.main{display:flex;flex-wrap:wrap;width:100%;justify-content:center}.expiry-info{margin:32px 0 24px 0}@media(min-width: 481px){.expiry-info{width:80%}}.headline{margin:32px 0 24px 0;font-size:18px;font-weight:600}.cta-btn{margin:24px 0 24px 0;display:flex;align-items:center;-moz-column-gap:12px;column-gap:12px;background:var(--wh-primary-700);color:#fff;fill:#fff;border:.5px solid var(--wh-primary-800);padding:12px 32px;cursor:pointer;border-radius:8px;font-size:18px;z-index:2}.cta-btn:hover{background:var(--wh-primary-600)}",""]);const a=s},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var p=0;p<t.length;p++){var l=[].concat(t[p]);n&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},81511:(t,e,o)=>{var n=o(61400);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},27479:(t,e,o)=>{"use strict";o.d(e,{c:()=>n});const n=o(38085).productionEnvironment},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>i});var n=o(38085),r=o(93811);class i extends r.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,n.lazyDefine)(this.components)}static define(t,e,o){(0,n.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(38085),e=o(93811),n=o(95665),r=o(27479),i=o(30827),s=o(81511),a=o.n(s),c=function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s};const p=t.SHARED_COMPONENTS.UpgradeNeeded,l=p.TAG;class h extends i.y{constructor(){super(...arguments),this.components=[t.SHARED_COMPONENTS.PremiumBenefits.TAG,t.SHARED_COMPONENTS.ExpiryInfo.TAG,t.SHARED_COMPONENTS.Icon.TAG,t.SHARED_COMPONENTS.Logo.TAG],this.props={}}get benefitsProps(){return Object.assign(Object.assign({},this.props.benefitsProps),{rotationIntervalMillis:5e3})}firstUpdated(e){t.chromeJwtService.getJwtPayload().then((t=>{this.loggedUser=t}))}onCtaClick(){return e=this,o=void 0,i=function*(){"function"==typeof this.props.onCtaClick?this.props.onCtaClick():(yield t.chromeJwtService.isLoggedIn())?window.open((0,t.isWebAppUrl)(location.href)?"/pricing":`${r.c.FRONTEND_URL}/pricing`,(0,t.isWebAppUrl)(location.href)?"_self":"_blank"):t.notifications.dispatch("loginNeeded",{detail:{authType:"signUp"}})},new((n=void 0)||(n=Promise))((function(t,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n((function(t){t(o)}))).then(s,a)}c((i=i.apply(e,o||[])).next())}));var e,o,n,i}render(){return e.html`<section class="container" part="container">
      ${this.props.showLogo?e.html`
            <header part="header" class="header">
              <webhighlights-logo></webhighlights-logo>
            </header>
          `:e.html``}
      <main part="main" class="main">
        ${this.props.headline?e.html` <h2 class="headline">${this.props.headline}</h2> `:e.html``}
        ${this.props.hideExpiryInfo?e.html``:e.html`
              <webhighlights-expiry-info
                class="expiry-info"
                subInfo="${this.props.subInfo||"Upgrade now to enjoy all features."}"
                .loggedUser=${this.loggedUser}
              ></webhighlights-expiry-info>
            `}
        <webhighlights-premium-benefits
          .props=${this.benefitsProps}
        ></webhighlights-premium-benefits>
        <button
          class="cta-btn"
          part="cta-btn"
          @click=${this.onCtaClick}
          data-testid=${p.TEST_IDS.CTA_BTN}
        >
          <webhighlights-icon icon="rocket" size="16"></webhighlights-icon
          >Upgrade now
        </button>
      </main>
      <footer part="footer" class="footer"></footer>
    </section>`}}h.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,c([(0,n.property)()],h.prototype,"props",void 0),c([(0,n.state)()],h.prototype,"loggedUser",void 0),i.y.define(l,h)})()})();