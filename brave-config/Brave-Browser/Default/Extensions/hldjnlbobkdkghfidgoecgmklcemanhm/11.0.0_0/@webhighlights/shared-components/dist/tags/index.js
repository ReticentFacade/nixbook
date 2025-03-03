/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={5023:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var i=s(36758),n=s.n(i),o=s(40935),r=s.n(o)()(n());r.push([t.id,":host{font-family:var(--wh-font-family);box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host{--tags-font-color: var(--wh-text);--tags-suggestions-bg-color: var(--wh-bg-front);--tags-suggestions-bg-color-hover: var(--wh-bg-front-hover-strong);--tags-suggestions-color: var(--wh-text);font-family:var(--font-family)}.tags-container{color:var(--tags-font-color);display:flex;align-items:center;gap:4px;flex-wrap:wrap;position:relative}.tags-input-container-wrapper{transition:opacity .2s ease-in-out;cursor:pointer}.tags-input-container-wrapper:hover .tag-input-container,.tags-input-container-wrapper[focus-within] .tag-input-container{border:.5px solid var(--wh-border-front-strong)}.tags-input-container-wrapper:hover .tag-input-container,.tags-input-container-wrapper:focus-within .tag-input-container{border:.5px solid var(--wh-border-front-strong)}.tags-input-container-wrapper[role=status]{cursor:progress;opacity:.2}.tags-input-container-wrapper:not([role=status]) .tag-input-container{cursor:pointer}.tags-input-container-wrapper:not([role=status]) .tag-input-container .tag-input:not(:focus){cursor:pointer}.tag-input-container{border-radius:4px;padding-left:8px;padding-right:8px;display:inline-flex;-moz-column-gap:4px;column-gap:4px;align-items:center;box-sizing:content-box;border:.5px solid rgba(0,0,0,0)}.tag-input-container .tag-input{background:none;border:none;outline:none;color:var(--tags-font-color);font-size:14px;line-height:18px;width:90px}.tag-input-container .tag-input[disabled]{cursor:progress}.tag{border-radius:4px;padding:2px 8px;background-color:var(--wh-primary-color);color:#fff;font-size:12px;line-height:1.15}",""]);const a=r},84376:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var i=s(36758),n=s.n(i),o=s(40935),r=s.n(o)()(n());r.push([t.id,":host{font-family:var(--font-family);display:block;width:100%}.tag-suggestions-container{padding:4px;position:absolute;z-index:30;width:220px;left:0;top:100%;padding:4px;margin-top:4px;border-radius:4px;color:var(--tags-suggestions-color);background:var(--tags-suggestions-bg-color);box-shadow:var(--wh-shadow);z-index:2}header{padding-bottom:8px}header .tags-description{font-size:12px}.preview-tag::part(tag){box-shadow:var(--wh-shadow)}.select-tags-container{max-height:200px}.choose-tag-btn{width:100%;border:none;background:rgba(0,0,0,0);padding:4px;border-radius:4px;display:inline-flex;cursor:pointer;color:inherit;align-items:center;-moz-column-gap:8px;column-gap:8px;outline:none}.choose-tag-btn:hover,.choose-tag-btn:focus,.choose-tag-btn.selected{background:var(--tags-suggestions-bg-color-hover)}.choose-tag-btn:hover webhighlights-tag::part(tag),.choose-tag-btn:focus webhighlights-tag::part(tag),.choose-tag-btn.selected webhighlights-tag::part(tag){color:var(--wh-text)}.choose-tag-btn:hover webhighlights-tag::part(badge),.choose-tag-btn:focus webhighlights-tag::part(badge),.choose-tag-btn.selected webhighlights-tag::part(badge){color:var(--wh-text)}",""]);const a=r},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",i=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),i&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),i&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,i,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var h=0;h<t.length;h++){var c=[].concat(t[h]);i&&r[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),s&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=s):c[2]=s),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},68280:(t,e,s)=>{var i=s(5023);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},54483:(t,e,s)=>{var i=s(84376);i&&i.__esModule&&(i=i.default),t.exports="string"==typeof i?i:i.toString()},63057:(t,e,s)=>{"use strict";s.d(e,{i:()=>n});var i=s(93811);const n=t=>{var e,s,n,o;return i.html` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${null!==(e=null==t?void 0:t.width)&&void 0!==e?e:14}"
    height="${null!==(s=null==t?void 0:t.height)&&void 0!==s?s:14}"
    stroke-width="${null!==(n=null==t?void 0:t.strokeWidth)&&void 0!==n?n:1.5}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-tag tag-icon ${null!==(o=null==t?void 0:t.className)&&void 0!==o?o:""}"
    part="icon"
  >
    <path
      d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
    ></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>`}},42092:(t,e,s)=>{"use strict";var i=s(38085),n=s(93811),o=s(95665),r=s(30827),a=s(54483),l=s.n(a),h=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const c=i.SHARED_COMPONENTS_INTERNAL.TagSuggestions,g=c.TAG;class d extends r.y{constructor(){super(...arguments),this.existingTags=[],this.allTags=[],this.subscriptions=[],this.components=[i.SHARED_COMPONENTS.Tag.TAG]}get tagExistsForCurrentValue(){return this.currentValue&&!!this.allTags.find((t=>{var e;return t.name.toLowerCase()===(null===(e=this.currentValue)||void 0===e?void 0:e.toLowerCase())}))}get tagsToSelectFrom(){var t;const e=(null===(t=this.currentValue)||void 0===t?void 0:t.toLowerCase())||"",s=(0,i.getFilteredAndSortedTags)({allTags:this.allTags,existingTags:this.existingTags,searchValue:e}).slice(0,5);return!this.currentValue||this.tagExistsForCurrentValue?s:[...s,(0,i.stringToTagWithBadge)(this.currentValue)]}firstUpdated(t){(0,i.useContext)().db.getAllTags().then((t=>this.allTags=t)),this.subscriptions=[i.notifications.subscribe("tagInputEnter",this.onTagInputEnter.bind(this))]}disconnectedCallback(){this.unsubscribe(),super.disconnectedCallback()}unsubscribe(){this.subscriptions.forEach((t=>{t.unsubscribe()}))}onTagInputEnter(){this.onTagSelected(this.tagsToSelectFrom[this.selectedIndex%this.tagsToSelectFrom.length])}onTagSelected(t){(null==t?void 0:t.name)&&this.dispatchEvent(new CustomEvent("tagSelected",{detail:t.name}))}render(){return n.html`
      <div class="tag-suggestions-container">
        <header>
          <span class="tags-description"
            >Search for tags or create a new one</span
          >
        </header>
        <main>
          <div class="select-tags-container">
            ${this.tagsToSelectFrom.map(((t,e)=>{const s=this.selectedIndex%this.tagsToSelectFrom.length===e;return n.html`
                <button
                  @click=${()=>this.onTagSelected(t)}
                  class="choose-tag-btn ${s?"selected":""}"
                  aria-selected="${s}"
                >
                  ${t.name!==this.currentValue||this.tagExistsForCurrentValue?n.html`<webhighlights-tag
                        data-testId=${c.TEST_IDS.SUGGESTION_TAG}
                        badge=${t.count}
                        tag=${t.name}
                        >${t.name}</webhighlights-tag
                      >`:n.html`+ Create
                        <webhighlights-tag
                          data-testId=${c.TEST_IDS.PREVIEW_TAG}
                          class="preview-tag"
                          tag=${t.name}
                          >${this.currentValue}</webhighlights-tag
                        >`}
                </button>
              `}))}
          </div>
        </main>
      </div>
    `}}d.styles=n.css`
    ${(0,n.unsafeCSS)(l())}
  `,h([(0,o.property)()],d.prototype,"currentValue",void 0),h([(0,o.property)()],d.prototype,"selectedIndex",void 0),h([(0,o.property)()],d.prototype,"existingTags",void 0),h([(0,o.state)()],d.prototype,"allTags",void 0),r.y.define(g,d)},30827:(t,e,s)=>{"use strict";s.d(e,{y:()=>o});var i=s(38085),n=s(93811);class o extends n.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,i.lazyDefine)(this.components)}static define(t,e,s){(0,i.defineWebHighlightsElement)(t,e,s)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal},31006:(t,e,s)=>{"use strict";s.d(e,{J:()=>n});var i=s(80181);const n=t=>t??i.s6},80181:(t,e,s)=>{"use strict";s.d(e,{s6:()=>w});const i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r="$lit$",a=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+a,h=`<${l}>`,c=document,g=()=>c.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,$=/>/g,b=RegExp(`>|${u}(?:([^\\s"'>=/]+)(${u}*=${u}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,A=/"/g,_=/^(?:script|style|textarea|title)$/i,y=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),x=(y(1),y(2),y(3),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),T=new WeakMap,S=c.createTreeWalker(c,129);function E(t,e){if(!p(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}const I=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",l=v;for(let e=0;e<s;e++){const s=t[e];let c,g,d=-1,p=0;for(;p<s.length&&(l.lastIndex=p,g=l.exec(s),null!==g);)p=l.lastIndex,l===v?"!--"===g[1]?l=f:void 0!==g[1]?l=$:void 0!==g[2]?(_.test(g[2])&&(n=RegExp("</"+g[2],"g")),l=b):void 0!==g[3]&&(l=b):l===b?">"===g[0]?(l=n??v,d=-1):void 0===g[1]?d=-2:(d=l.lastIndex-g[2].length,c=g[1],l=void 0===g[3]?b:'"'===g[3]?A:m):l===A||l===m?l=b:l===f||l===$?l=v:(l=b,n=void 0);const u=l===b&&t[e+1].startsWith("/>")?" ":"";o+=l===v?s+h:d>=0?(i.push(c),s.slice(0,d)+r+s.slice(d)+a+u):s+a+(-2===d?e:u)}return[E(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,h=0;const c=t.length-1,d=this.parts,[p,u]=I(t,e);if(this.el=C.createElement(p,s),S.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=S.nextNode())&&d.length<c;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(r)){const e=u[h++],s=i.getAttribute(t).split(a),n=/([.?@])?(.*)/.exec(e);d.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?M:"?"===n[1]?V:"@"===n[1]?D:O}),i.removeAttribute(t)}else t.startsWith(a)&&(d.push({type:6,index:o}),i.removeAttribute(t));if(_.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],g()),S.nextNode(),d.push({type:2,index:++o});i.append(t[e],g())}}}else if(8===i.nodeType)if(i.data===l)d.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)d.push({type:7,index:o}),t+=a.length-1}o++}}static createElement(t,e){const s=c.createElement("template");return s.innerHTML=t,s}}function N(t,e,s=t,i){if(e===x)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=d(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=N(t,n._$AS(t,e.values),n,i)),e}class H{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??c).importNode(e,!0);S.currentNode=i;let n=S.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new k(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new R(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=S.nextNode(),o++)}return S.currentNode=c,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),d(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==x&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>p(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(c.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=C.createElement(E(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new H(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new C(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new k(this.O(g()),this.O(g()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class O{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=N(this,t,e,0),o=!d(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=N(this,i[s+r],e,r),a===x&&(a=this._$AH[r]),o||=!d(a)||a!==this._$AH[r],a===w?t=w:t!==w&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class M extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}class V extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class D extends O{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??w)===x)return;const s=this._$AH,i=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==w&&(s===w||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const P=i.litHtmlPolyfillSupport;P?.(C,k),(i.litHtmlVersions??=[]).push("3.2.1")},73764:(t,e,s)=>{"use strict";s.d(e,{J:()=>i.J});var i=s(31006)}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,s),o.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=s(38085),e=s(93811),i=s(95665),n=s(73764),o=s(30827),r=s(68280),a=s.n(r),l=s(63057),h=(s(42092),function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r});const c=t.SHARED_COMPONENTS.Tags,g=c.TAG;class d extends o.y{constructor(){super(...arguments),this.components=[t.SHARED_COMPONENTS.Tag.TAG],this.readOnly=!1,this.autofocus=!1,this.isLoading=!1,this.currentValue="",this.selectedIndex=0,this.showSuggestions=!1}firstUpdated(){setTimeout((()=>{var t;this.autofocus&&(null===(t=this.tagInputElement)||void 0===t||t.focus())}),0)}disconnectedCallback(){super.disconnectedCallback()}onInputKeyDown(e){(0,t.stopPropagation)(e),"Tab"===e.key&&(this.showSuggestions=!1)}onInputKeyUp(e){var s,i;(0,t.stopPropagation)(e),e.preventDefault();const n=null!==(s=e.target.value)&&void 0!==s?s:"";"Enter"!==e.key?"ArrowDown"!==e.key&&"Tab"!==e.key?"ArrowUp"!==e.key?("Backspace"===e.key&&!this.currentValue&&(null===(i=this.tags)||void 0===i?void 0:i.length)&&this.onTagDeleted(this.tags[this.tags.length-1]),this.currentValue=n,this.selectedIndex=0):this.selectedIndex=this.selectedIndex-1:this.selectedIndex=this.selectedIndex+1:t.notifications.dispatch("tagInputEnter",{detail:{}})}onInputFocus(){this.showSuggestions=!0}onInputBlur(e){var s;(null===(s=e.relatedTarget)||void 0===s?void 0:s.tagName)!==t.SHARED_COMPONENTS_INTERNAL.TagSuggestions.TAG.toUpperCase()&&(this.showSuggestions=!1,this.dispatchEvent(new CustomEvent("blurred")))}onTagDeleted(t){this.tags=this.tags.filter((e=>e.toLowerCase()!==t.toLowerCase())),this.fireTagsChanged()}onTagSelected(t){this.tags=[...new Set([...this.tags,t.detail])],this.fireTagsChanged(),this.resetInputElement()}resetInputElement(){var t;this.tagInputElement&&(this.tagInputElement.value="",this.currentValue="",null===(t=this.tagInputElement)||void 0===t||t.focus())}fireTagsChanged(){this.dispatchEvent(new CustomEvent("tagsChanged",{bubbles:!0,detail:{tags:this.tags}}))}onInputContainerClick(){var t;null===(t=this.tagInputElement)||void 0===t||t.focus()}onTagRemovedClick(t){this.onTagDeleted(t)}render(){const t=!this.readOnly;return e.html`
      <div part="tags-container" class="tags-container">
        ${this.tags.map((s=>e.html`<webhighlights-tag
              @removed=${()=>this.onTagRemovedClick(s)}
              .removable=${t}
              selectable
              tag=${s}
              .readOnly=${this.readOnly}
              data-testId=${c.TEST_IDS.EXISTING_TAG}
              >${s}</webhighlights-tag
            >`))}
        ${t?e.html`
                <div
                  class="tags-input-container-wrapper"
                  role="${(0,n.J)(this.isLoading?"status":void 0)}"
                >
                  <div
                    class="tag-input-container"
                    @click=${this.onInputContainerClick}
                  >
                    ${(0,l.i)()}
                    <input
                      @keyup=${this.onInputKeyUp}
                      @keydown=${this.onInputKeyDown}
                      @focus=${this.onInputFocus}
                      @blur=${this.onInputBlur}
                      part="input"
                      id="tag-input"
                      aria-label="Add Tag"
                      title="Add Tag"
                      placeholder="Tags"
                      class="tag-input"
                      autocomplete="off"
                      autocorrect="off"
                      ?disabled=${this.isLoading}
                      data-testid=${c.TEST_IDS.INPUT}
                    />
                  </div>
                  ${this.showSuggestions?e.html`
                        <webhighlights-tag-suggestions
                          .currentValue=${this.currentValue}
                          .selectedIndex=${this.selectedIndex}
                          .existingTags=${this.tags}
                          @tagSelected=${this.onTagSelected}
                        ></webhighlights-tag-suggestions>
                      `:e.html``}
                </div>
              `:e.html``}
        </div>
      </div>
    `}}d.styles=e.css`
    ${(0,e.unsafeCSS)(a())}
  `,h([(0,i.property)()],d.prototype,"tags",void 0),h([(0,i.property)()],d.prototype,"readOnly",void 0),h([(0,i.property)()],d.prototype,"autofocus",void 0),h([(0,i.property)()],d.prototype,"isLoading",void 0),h([(0,i.state)()],d.prototype,"currentValue",void 0),h([(0,i.state)()],d.prototype,"selectedIndex",void 0),h([(0,i.state)()],d.prototype,"showSuggestions",void 0),h([(0,i.query)("#tag-input")],d.prototype,"tagInputElement",void 0),o.y.define(g,d)})()})();