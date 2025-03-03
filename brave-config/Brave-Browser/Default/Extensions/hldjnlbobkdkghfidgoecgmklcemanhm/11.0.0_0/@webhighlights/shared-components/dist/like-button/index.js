(()=>{var t={13090:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>l});var a=e(36758),r=e.n(a),i=e(40935),o=e.n(i)()(r());o.push([t.id,".wh-loading-skeleton{color:rgba(0,0,0,0);opacity:.8;animation:1.25s linear 0s infinite normal none running loadingBlinking}@keyframes loadingBlinking{0%{background:rgba(140,140,140,.15)}70%{background:rgba(67,79,86,.15)}100%{background:rgba(112,145,169,.15)}}:host{--like-btn-width: 40px;--fill-color: rgb(225, 232, 237)}@keyframes loadingBlinking{0%{fill:#e1e8ed}70%{fill:#cdd4d8}100%{fill:var(--fill-color)}}.container.loading #like-btn-checkbox:checked+label svg #heart,.container.loading #like-btn-checkbox+label svg #heart{fill:var(--fill-color);transform:scale(1);animation:1s linear 1s infinite normal none running loadingBlinking}svg{cursor:pointer;overflow:visible;width:var(--like-btn-width)}svg:hover{transform:scale(1.05)}svg #heart{transform-origin:center}svg #main-circ{transform-origin:29.5px 29.5px}.container:not(.loading) svg #heart{animation:animateHeartOut .3s linear forwards}#like-btn-checkbox{display:none}.container:not(.loading) #like-btn-checkbox:checked+label svg #heart{transform:scale(0.2);fill:#e2264d;animation:animateHeart .3s linear forwards .25s}.container:not(.loading) #like-btn-checkbox:checked+label svg #main-circ{transition:all 2s;animation:animateCircle .3s linear forwards;opacity:1}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp1{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp1 #oval1{transform:scale(0) translate(0, -30px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp1 #oval2{transform:scale(0) translate(10px, -50px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp2{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp2 #oval1{transform:scale(0) translate(30px, -15px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp2 #oval2{transform:scale(0) translate(var(--like-btn-width), -15px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp3{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp3 #oval1{transform:scale(0) translate(30px, 0px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp3 #oval2{transform:scale(0) translate(var(--like-btn-width), 10px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp4{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp4 #oval1{transform:scale(0) translate(30px, 15px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp4 #oval2{transform:scale(0) translate(40px, 50px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp5{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp5 #oval1{transform:scale(0) translate(-10px, 20px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp5 #oval2{transform:scale(0) translate(var(--like-btn-width), 30px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp6{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp6 #oval1{transform:scale(0) translate(-30px, 0px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp6 #oval2{transform:scale(0) translate(var(--like-btn-width), -5px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp7{opacity:1;transition:.1s all .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp7 #oval1{transform:scale(0) translate(-30px, -15px);transform-origin:0 0 0;transition:.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp7 #oval2{transform:scale(0) translate(calc(var(--like-btn-width) - 5px), -30px);transform-origin:0 0 0;transition:1.5s transform .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp2{opacity:1;transition:.1s opacity .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp3{opacity:1;transition:.1s opacity .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp4{opacity:1;transition:.1s opacity .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp5{opacity:1;transition:.1s opacity .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp6{opacity:1;transition:.1s opacity .3s}.container:not(.loading) #like-btn-checkbox:checked+label svg #grp7{opacity:1;transition:.1s opacity .3s}@keyframes animateCircle{40%{transform:scale(10);opacity:1;fill:#53e3a6}55%{transform:scale(11);opacity:1;fill:#00b077}65%{transform:scale(12);opacity:1;fill:#00b077}75%{transform:scale(13);opacity:1;fill:rgba(0,0,0,0);stroke:#00b077;stroke-width:.5}85%{transform:scale(17);opacity:1;fill:rgba(0,0,0,0);stroke:#007f4b;stroke-width:.2}95%{transform:scale(18);opacity:1;fill:rgba(0,0,0,0);stroke:#007f4b;stroke-width:.1}100%{transform:scale(19);opacity:1;fill:rgba(0,0,0,0);stroke:#00b077;stroke-width:0}}@keyframes animateHeart{0%{transform:scale(0.2)}40%{transform:scale(1.2)}100%{transform:scale(1)}}@keyframes animateHeartOut{0%{transform:scale(1.4)}100%{transform:scale(1)}}",""]);const l=o},40935:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",a=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),a&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),a&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,a,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(a)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(o[c]=!0)}for(var s=0;s<t.length;s++){var g=[].concat(t[s]);a&&o[g[0]]||(void 0!==i&&(void 0===g[5]||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=i),e&&(g[2]?(g[1]="@media ".concat(g[2]," {").concat(g[1],"}"),g[2]=e):g[2]=e),r&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=r):g[4]="".concat(r)),n.push(g))}},n}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},9291:(t,n,e)=>{var a=e(13090);a&&a.__esModule&&(a=a.default),t.exports="string"==typeof a?a:a.toString()},30827:(t,n,e)=>{"use strict";e.d(n,{y:()=>i});var a=e(38085),r=e(93811);class i extends r.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,a.lazyDefine)(this.components)}static define(t,n,e){(0,a.defineWebHighlightsElement)(t,n,e)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},n={};function e(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return t[a](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=e(38085),n=e(93811),a=e(95665),r=e(30827),i=e(9291),o=e.n(i),l=function(t,n,e,a){var r,i=arguments.length,o=i<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,a);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(i<3?r(o):i>3?r(n,e,o):r(n,e))||o);return i>3&&o&&Object.defineProperty(n,e,o),o};const c=t.SHARED_COMPONENTS.LikeButton,s=c.TAG;class g extends r.y{constructor(){super(...arguments),this.loading=!1,this.liked=!1}dispatchCustomEvent(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0}))}onChange(){this.liked=!this.liked,this.dispatchEvent(new CustomEvent(this.liked?"liked":"unliked",{bubbles:!0}))}preventClick(t){t.stopImmediatePropagation(),t.stopPropagation()}render(){return n.html`
      <div
        class="container ${this.loading?"loading":""}"
        @click=${this.preventClick}
      >
        <input
          type="checkbox"
          id="like-btn-checkbox"
          data-testid=${c.TEST_IDS.INPUT_CHECKBOX}
          ?checked=${this.liked}
          @change="${this.onChange}"
        />
        <label for="like-btn-checkbox">
          <svg
            id="heart-svg"
            viewBox="467 392 58 57"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Group"
              fill="none"
              fill-rule="evenodd"
              transform="translate(467 392)"
            >
              <path
                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                id="heart"
                fill="#AAB8C2"
              />
              <circle
                id="main-circ"
                fill="#E2264D"
                opacity="0"
                cx="29.5"
                cy="29.5"
                r="1.5"
              />

              <g id="grp7" opacity="0" transform="translate(7 6)">
                <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
              </g>

              <g id="grp6" opacity="0" transform="translate(0 28)">
                <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
              </g>

              <g id="grp3" opacity="0" transform="translate(52 28)">
                <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
              </g>

              <g id="grp2" opacity="0" transform="translate(44 6)">
                <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
              </g>

              <g id="grp5" opacity="0" transform="translate(14 50)">
                <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
              </g>

              <g id="grp4" opacity="0" transform="translate(35 50)">
                <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
              </g>

              <g id="grp1" opacity="0" transform="translate(24)">
                <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
              </g>
            </g>
          </svg>
        </label>
      </div>
    `}}g.styles=n.css`
    ${(0,n.unsafeCSS)(o())}
  `,l([(0,a.property)()],g.prototype,"loading",void 0),l([(0,a.property)()],g.prototype,"liked",void 0),r.y.define(s,g)})()})();