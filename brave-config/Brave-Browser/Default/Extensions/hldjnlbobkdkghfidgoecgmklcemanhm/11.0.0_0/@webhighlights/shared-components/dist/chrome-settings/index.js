(()=>{var t={54900:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var i=o(36758),n=o.n(i),r=o(40935),a=o.n(r)()(n());a.push([t.id,".wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking}@keyframes loadingBlinking{0%{background:rgba(140,140,140,.15)}70%{background:rgba(67,79,86,.15)}100%{background:rgba(112,145,169,.15)}}.entry-container{width:100%;display:flex;flex-wrap:wrap;border-bottom:1px solid var(--wh-border-base);background:var(--wh-bg-base)}.entry{width:100%;display:flex;background:var(--wh-bg-base);opacity:1;justify-content:space-between;align-items:center;padding:12px 16px;box-sizing:border-box}.entry:hover{opacity:1;background:var(--wh-bg-base-hover)}.entry-header{margin-right:10px}.entry-header .entry-title{color:var(--wh-text-light);font-size:12px;margin:0 0 4px 0}.entry-header .entry-description{color:var(--wh-text-lighter);font-size:11px}.entry-title{display:flex;-moz-column-gap:6px;column-gap:6px}b{font-weight:600}.shortcut-link{text-decoration:none;font-weight:600;font-size:12px;color:var(--wh-primary-color);margin-top:6px;text-decoration:underline}.backup-interval-input{width:52px;margin:0 4px;background:var(--wh-bg-back-strong);border-radius:2px;color:var(--wh-text);border:none}.backup-interval-input:disabled{opacity:.4}",""]);const s=a},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",i=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),i&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),i&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,i,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var h=this[s][0];null!=h&&(a[h]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);i&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},35733:(t,e,o)=>{var i=o(54900);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},30827:(t,e,o)=>{"use strict";o.d(e,{y:()=>r});var i=o(38085),n=o(93811);class r extends n.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}static define(t,e,o){(0,i.defineWebHighlightsElement)(t,e,o)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=o(93811),e=o(95665),i=o(35733),n=o.n(i),r=o(38085),a=o(30827),s=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};r.SHARED_COMPONENTS.ChromeSettings;class h extends a.y{constructor(){super(...arguments),this.chromeSettings=r.fallbackChromeSettings,this.colorsPopupPosition="right",this.throttleInputChange=!1,this.components=[r.SHARED_COMPONENTS.ToggleButton.TAG,r.SHARED_COMPONENTS.ColorPicker.TAG]}goToShortcutSettings(t){(0,r.stopPropagation)(t),(0,r.goToShortcutSettings)()}toggleShowLeftSidebarWidget(t){const e={showLeftSidebarWidget:t};r.notifications.dispatch("chromeSettingsChanged",{detail:e}),this.dispatchCustomChangeEvent(e)}toggleShowMarker(t){const e={showMarkerPopup:t};r.notifications.dispatch("chromeSettingsChanged",{detail:e}),this.dispatchCustomChangeEvent(e)}toggleShowToolbox(t){const e={showToolboxAutomatically:t};r.notifications.dispatch("chromeSettingsChanged",{detail:e}),this.dispatchCustomChangeEvent(e)}dispatchColorChangeEvent(t){const e={defaultHighlightColor:t};r.notifications.dispatch("chromeSettingsChanged",{detail:e}),this.dispatchCustomChangeEvent(e)}dispatchCustomChangeEvent(t){this.dispatchEvent(new CustomEvent("settingsChanged",{detail:Object.assign(Object.assign({},this.chromeSettings),t)}))}updateColor(t){return e=this,o=arguments,n=function*({color:t,isDefaultChange:e}){this.chromeSettings=Object.assign(Object.assign({},this.chromeSettings),{defaultHighlightColor:t});const o={defaultHighlightColor:this.chromeSettings.defaultHighlightColor};this.throttleInputChange||(this.throttleInputChange=!0,setTimeout((()=>{this.throttleInputChange=!1,this.dispatchColorChangeEvent(o.defaultHighlightColor),this.dispatchCustomChangeEvent(o)}),200))},new((i=void 0)||(i=Promise))((function(t,r){function a(t){try{h(n.next(t))}catch(t){r(t)}}function s(t){try{h(n.throw(t))}catch(t){r(t)}}function h(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i((function(t){t(o)}))).then(a,s)}h((n=n.apply(e,o||[])).next())}));var e,o,i,n}onPdfHintClick(t){try{chrome.tabs.update({url:t})}catch(t){}}render(){var e,o,i,n;return t.html`
      <section class="entry-container" part="container">
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Show Highlighter Popup</h3>
            <span class="entry-description">
              You can disable the popup and highlight text by
              <b>right-clicking</b> or using
              <a
                @click=${this.goToShortcutSettings}
                href=${r.EXTENSION_SHORTCUT_URL}
                rel="nofollow"
                class="shortcut-link"
                >keyboard shortcuts</a
              >.</span
            >
          </div>
          <webhighlights-toggle-button
            .isEnabled=${null===(e=this.chromeSettings)||void 0===e?void 0:e.showMarkerPopup}
            inputId="showMarkerPopup"
            @changed="${t=>this.toggleShowMarker(t.detail)}"
          ></webhighlights-toggle-button>
        </div>
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Show Toolbox Automatically</h3>
            <span class="entry-description">
              If enabled, a popup appears automatically to enter tags and notes
              when creating highlights.</span
            >
          </div>
          <webhighlights-toggle-button
            .isEnabled=${null===(o=this.chromeSettings)||void 0===o?void 0:o.showToolboxAutomatically}
            inputId="showToolboxAutomatically"
            @changed="${t=>this.toggleShowToolbox(t.detail)}"
          ></webhighlights-toggle-button>
        </div>
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Show Sidebar Widget</h3>
            <span class="entry-description">
              If enabled, a widget to open the sidebar is shown on the left
              border of the screen.</span
            >
          </div>
          <webhighlights-toggle-button
            .isEnabled=${null===(i=this.chromeSettings)||void 0===i?void 0:i.showLeftSidebarWidget}
            inputId="showLeftSidebarWidget"
            @changed="${t=>this.toggleShowLeftSidebarWidget(t.detail)}"
          ></webhighlights-toggle-button>
        </div>
        <div class="entry">
          <div class="entry-header">
            <h3 class="entry-title">Default Highlight Color</h3>
            <span class="entry-description">
              Change the default highlight color. You can also modify each
              highlight's color in the popup.</span
            >
          </div>
          <!-- Edit color -->
          <webhighlights-color-picker
            @changeColor="${t=>this.updateColor(t.detail)}"
            .highlightColor=${this.chromeSettings.defaultHighlightColor}
            .defaultHighlightColor=${this.chromeSettings.defaultHighlightColor}
            .recentColors=${null!==(n=this.chromeSettings.recentColors)&&void 0!==n?n:[]}
            .httpFacade=${this.httpFacade}
            .chromeSettings=${this.chromeSettings}
            .showMakeDefaultButton=${!1}
            .popupPosition=${this.colorsPopupPosition}
          ></webhighlights-color-picker>
        </div>
      </section>
    `}}h.styles=t.css`
    ${(0,t.unsafeCSS)(n())}
  `,s([(0,e.property)()],h.prototype,"chromeSettings",void 0),s([(0,e.property)()],h.prototype,"httpFacade",void 0),s([(0,e.property)()],h.prototype,"colorsPopupPosition",void 0),a.y.define("webhighlights-chrome-settings",h)})()})();