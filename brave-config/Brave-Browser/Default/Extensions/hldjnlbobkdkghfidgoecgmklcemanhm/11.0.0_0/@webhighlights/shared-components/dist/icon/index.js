(()=>{var t={92115:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var s=i(36758),r=i.n(s),o=i(40935),l=i.n(o)()(r());l.push([t.id,":host{display:flex;align-items:center}svg{width:var(--wh-icon-size);height:var(--wh-icon-size)}",""]);const h=l},40935:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,s,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var l={};if(s)for(var h=0;h<this.length;h++){var n=this[h][0];null!=n&&(l[n]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);s&&l[a[0]]||(void 0!==o&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=o),i&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=i):a[2]=i),r&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=r):a[4]="".concat(r)),e.push(a))}},e}},36758:t=>{"use strict";t.exports=function(t){return t[1]}},62784:(t,e,i)=>{var s=i(92115);s&&s.__esModule&&(s=s.default),t.exports="string"==typeof s?s:s.toString()},30827:(t,e,i)=>{"use strict";i.d(e,{y:()=>o});var s=i(38085),r=i(93811);class o extends r.LitElement{constructor(){super(...arguments),this.components=[]}connectedCallback(){super.connectedCallback(),(0,s.lazyDefine)(this.components)}static define(t,e,i){(0,s.defineWebHighlightsElement)(t,e,i)}}},95665:t=>{"use strict";t.exports=LitDecoratorsExternal},93811:t=>{"use strict";t.exports=LitExternal},38085:t=>{"use strict";t.exports=WebHighlightsSharedLibExternal}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={id:s,exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=i(93811),e=i(95665),s=i(62784),r=i.n(s),o=i(38085),l=i(30827),h=function(t,e,i,s){var r,o=arguments.length,l=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(l=(o<3?r(l):o>3?r(e,i,l):r(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l};const n=o.SHARED_COMPONENTS.Icon.TAG;class c extends l.y{constructor(){super(...arguments),this.size="24",this.strokeWidth=2,this.fill="none"}renderIcon(e){switch(e){case o.ICON_NAMES.blockquote:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            fill="currentColor"
            viewBox="0 0 1000 1004.1441"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m396 167.144h-292c-34 0-62 28-62 62v292c0 34 28 62 62 62h104v69c0 40-22 75-57 93l-98 49c-8 4-13 14-11 23 2 10 11 16 21 16h141c99 0 186-63 217-156 25-74 37-150 37-228v-220c0-34-28-62-62-62zm21 282c0 73-12 145-35 214-26 77-97 129-178 129h-53l18-10c50-25 81-75 81-130v-90c0-11-9-20-21-20h-125c-11 0-21-10-21-21v-292c0-11 10-21 21-21h292c11 0 21 10 21 21zm479-282h-292c-34 0-62 28-62 62v292c0 34 28 62 62 62h104v69c0 40-22 75-57 93l-98 49c-8 4-13 14-11 23 2 10 11 16 21 16h141c99 0 186-63 217-156 25-74 37-150 37-228v-220c0-34-28-62-62-62zm21 282c0 73-12 145-35 214-26 77-97 129-178 129h-53l18-10c50-25 81-75 81-130v-90c0-11-9-20-21-20h-125c-11 0-21-10-21-21v-292c0-11 10-21 21-21h292c11 0 21 10 21 21z"
            />
          </svg>
        `;case o.ICON_NAMES.trash:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        `;case o.ICON_NAMES["copy-file"]:return t.html`
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            style="enable-background:new 0 0 115.28 122.88; width: ${this.size}px; height: ${this.size}px; fill: var(--wh-text);"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
          >
            <g id="Text-files">
              <path
                d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
		C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
		c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
		h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
		C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
		c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
		c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
		 M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
		c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
		c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
		h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"
              />
              <path
                d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
		c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
		C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"
              />
              <path
                d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
		c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
		C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"
              />
              <path
                d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
		S39.16465,29.4603004,38.6031494,29.4603004z"
              />
              <path
                d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
		s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
		S29.0059509,37.5872993,28.4444485,37.5872993z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        `;case o.ICON_NAMES["file-pdf"]:return t.html`
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 115.28 122.88"
            style="enable-background:new 0 0 115.28 122.88; width: ${this.size}px; height: ${this.size}px; fill: var(--wh-text);"
            xml:space="preserve"
          >
            <style type="text/css">
              .st0 {
                fill-rule: evenodd;
                clip-rule: evenodd;
              }
            </style>
            <g>
              <path
                class="st0"
                d="M25.38,57h64.88V37.34H69.59c-2.17,0-5.19-1.17-6.62-2.6c-1.43-1.43-2.3-4.01-2.3-6.17V7.64l0,0H8.15 c-0.18,0-0.32,0.09-0.41,0.18C7.59,7.92,7.55,8.05,7.55,8.24v106.45c0,0.14,0.09,0.32,0.18,0.41c0.09,0.14,0.28,0.18,0.41,0.18 c22.78,0,58.09,0,81.51,0c0.18,0,0.17-0.09,0.27-0.18c0.14-0.09,0.33-0.28,0.33-0.41v-11.16H25.38c-4.14,0-7.56-3.4-7.56-7.56 V64.55C17.82,60.4,21.22,57,25.38,57L25.38,57z M29.5,67.4h13.19c2.87,0,5.02,0.68,6.46,2.05c1.43,1.37,2.14,3.31,2.14,5.84 c0,2.59-0.78,4.62-2.34,6.08c-1.56,1.46-3.94,2.19-7.14,2.19h-4.35v9.49H29.5V67.4L29.5,67.4z M37.45,78.37h1.95 c1.54,0,2.62-0.27,3.24-0.8c0.62-0.53,0.93-1.21,0.93-2.04c0-0.81-0.27-1.49-0.81-2.05c-0.54-0.56-1.55-0.84-3.05-0.84h-2.27V78.37 L37.45,78.37z M54.99,67.4h11.78c2.32,0,4.2,0.32,5.63,0.94c1.43,0.63,2.61,1.53,3.55,2.71c0.93,1.18,1.61,2.55,2.02,4.11 c0.42,1.56,0.63,3.22,0.63,4.97c0,2.74-0.31,4.87-0.94,6.38c-0.62,1.51-1.49,2.78-2.6,3.8c-1.11,1.02-2.3,1.7-3.57,2.04 c-1.74,0.47-3.31,0.7-4.72,0.7H54.99V67.4L54.99,67.4z M62.9,73.21v14.01h1.95c1.66,0,2.84-0.19,3.55-0.55 c0.7-0.37,1.25-1.01,1.65-1.92c0.4-0.92,0.6-2.4,0.6-4.45c0-2.72-0.44-4.57-1.33-5.58c-0.89-1-2.36-1.5-4.42-1.5H62.9L62.9,73.21z M82.25,67.4h19.6v5.52H90.21v4.48h9.96v5.2h-9.96v10.46h-7.95V67.4L82.25,67.4z M97.79,57h9.93c4.16,0,7.56,3.41,7.56,7.56v31.42 c0,4.15-3.41,7.56-7.56,7.56h-9.93v13.55c0,1.61-0.65,3.04-1.7,4.1c-1.06,1.06-2.49,1.7-4.1,1.7c-29.44,0-56.59,0-86.18,0 c-1.61,0-3.04-0.64-4.1-1.7c-1.06-1.06-1.7-2.49-1.7-4.1V5.85c0-1.61,0.65-3.04,1.7-4.1c1.06-1.06,2.53-1.7,4.1-1.7h58.72 C64.66,0,64.8,0,64.94,0c0.64,0,1.29,0.28,1.75,0.69h0.09c0.09,0.05,0.14,0.09,0.23,0.18l29.99,30.36c0.51,0.51,0.88,1.2,0.88,1.98 c0,0.23-0.05,0.41-0.09,0.65V57L97.79,57z M67.52,27.97V8.94l21.43,21.7H70.19c-0.74,0-1.38-0.32-1.89-0.78 C67.84,29.4,67.52,28.71,67.52,27.97L67.52,27.97z"
              />
            </g>
          </svg>
        `;case o.ICON_NAMES["file-html"]:return t.html`
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 115.28 122.88; width: ${this.size}px; height: ${this.size}px; fill: var(--wh-text);"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M464.372,214.326v-96.7L346.747,0H47.628v214.326H23.814v226.233h23.814V512h416.744v-71.442h23.814V214.326H464.372z
			 M357.209,60.979l46.184,46.184h-46.184V60.979z M83.349,35.721h238.14v107.163h107.163v71.442H83.349V35.721z M428.651,476.279
			H83.349v-35.721h345.302V476.279z M452.465,404.837H59.535V250.047h392.93V404.837z"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  points="153.874,287.077 153.874,316.547 123.549,316.547 123.549,287.077 105.975,287.077 105.975,363.163 
			123.549,363.163 123.549,331.978 153.874,331.978 153.874,363.163 171.451,363.163 171.451,287.077 		"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  points="185.381,287.077 185.381,302.509 208.636,302.509 208.636,363.163 226.21,363.163 226.21,302.509 
			249.357,302.509 249.357,287.077 		"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  points="321.905,287.077 302.079,326.835 282.362,287.077 263.287,287.077 263.287,363.163 280.862,363.163 
			280.862,317.619 297.365,350.732 306.795,350.732 323.298,317.619 323.298,363.163 340.873,363.163 340.873,287.077 		"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  points="378.378,347.731 378.378,287.077 360.803,287.077 360.803,363.163 415.242,363.163 415.242,347.731 		"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        `;case o.ICON_NAMES["delete-x"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;case o.ICON_NAMES.settings:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-settings"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            ></path>
          </svg>
          <slot></slot>
        `;case o.ICON_NAMES.star:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
        `;case o.ICON_NAMES.twitter:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        `;case o.ICON_NAMES.linkedin:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        `;case o.ICON_NAMES.facebook:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            ></path>
          </svg>
        `;case o.ICON_NAMES.clock:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clock"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        `;case o.ICON_NAMES.calendar:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        `;case o.ICON_NAMES["external-link"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-external-link"
          >
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            ></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        `;case o.ICON_NAMES.link:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-link"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            ></path>
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            ></path>
          </svg>
        `;case o.ICON_NAMES["cloud-off"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-cloud-off"
          >
            <path
              d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
            ></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;case o.ICON_NAMES["cloud-check"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="width: 100%; height: 100%;"
            viewBox="0 0 48 48"
            stroke-width="${this.strokeWidth}"
            style="width: ${this.size}px; height: ${this.size}px;"
          >
            <path fill="none" d="M0 0h48v48H0z" />
            <path
              d="M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM20 34l-7-7 2.83-2.83L20 28.34l10.35-10.35 2.83 2.83L20 34z"
            />
          </svg>
        `;case o.ICON_NAMES.info:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        `;case o.ICON_NAMES["x-circle"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        `;case o.ICON_NAMES["check-circle"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-circle"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        `;case o.ICON_NAMES["plus-circle"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        `;case o.ICON_NAMES["minus-circle"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            part="icon"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-minus-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        `;case o.ICON_NAMES["thumbs-up"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-thumbs-up"
          >
            <path
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
            ></path>
          </svg>
        `;case o.ICON_NAMES["thumbs-down"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-thumbs-down"
          >
            <path
              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
            ></path>
          </svg>
        `;case o.ICON_NAMES.brain:return t.html`
          <svg
            fill="none"
            viewBox="0 0 48 48"
            width="${this.size}"
            height="${this.size}"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="var(--wh-text)">
              <path
                clip-rule="evenodd"
                d="m37.2645 26.0759-.1657-.3532c-.7144-1.5234-.9231-3.1375-.9865-4.5694-.0319-.7216-.0277-1.4348-.0206-2.0905.001-.0901.002-.1789.003-.2664.0065-.5658.0125-1.0797.0009-1.5746-.049-1.9497-.6626-3.848-1.7725-5.4731-1.2642-1.5687-2.9158-2.80172-4.8036-3.58015l-.0328-.01353-.0323-.0147c-2.5553-1.16144-5.34-1.7611-8.1589-1.75565l-.0022.00001c-3.5472.0029-6.9406 1.38904-9.4356 3.84192-2.49378 2.4516-3.88617 5.767-3.88334 9.2147.00167 2.0443.59653 4.3755 1.63002 6.5322 1.03592 2.1618 2.43932 3.9964 3.91672 5.133l.7797.5998.0073 8.9155c.3252.402.9567.8982 1.9037 1.3283 1.1588.5263 2.3235.739 2.9974.6834l.0812-.0067.0815-.0001c1.9563-.0016 2.8713-.5551 3.265-.8917.1427-.122.2419-.2368.3084-.3272l-.0045-5.5354 2.4975.6433.0012.0004.001.0002.0013.0003.0121.003c.0155.0038.0422.0102.0793.0188.0742.0171.1897.0426.3405.0728.3023.0604.7423.1382 1.2726.2032 1.0767.132 2.4502.2014 3.7762.0058 1.3374-.1973 2.4518-.6373 3.2178-1.3715.7135-.6838 1.3411-1.8287 1.3393-3.9249l-.0014-1.7099 1.6812-.266.0013-.0002.0082-.0014c.0059-.0011.0145-.0026.0256-.0047.0109-.002.0243-.0046.04-.0077.0632-.0125.1611-.0332.2826-.0635.2488-.062.5668-.1567.8766-.2877.3218-.136.5532-.2772.6896-.3976.0275-.0242.0468-.0436.06-.0581-.0049-.0537-.0236-.1637-.0936-.3416-.1095-.2782-.2964-.5997-.5357-.9321-.2339-.325-.4827-.6119-.6764-.8198-.0954-.1024-.1738-.1818-.2255-.2329-.0132-.013-.0245-.0241-.0339-.0332-.009-.0087-.0162-.0157-.0215-.0207l-.0082-.0078-.0011-.001zm-12.3216 12.3775s.802.2066 2.0003.351c3.541.4268 10.5427.3109 10.5364-7.2823 0 0 3.3024-.5224 3.6354-2.4103.3329-1.8878-2.2054-4.2383-2.2054-4.2383-.864-1.8424-.8388-4.0128-.8151-6.0503.0066-.5633.013-1.1165.0005-1.6497-.059-2.3645-.8108-4.6623-2.1655-6.6184-1.4832-1.86191-3.4275-3.32006-5.6475-4.23552-2.8173-1.28051-5.8857-1.94091-8.9904-1.9349-4.0656.00333-7.9635 1.59169-10.836 4.41566-2.87257 2.82396-4.48451 6.65226-4.48124 10.64266.00393 4.8009 2.75739 10.5024 6.32724 13.2487l.007 8.494c1.014 2.1224 4.834 3.625 7.065 3.441 4.7382-.0038 5.5721-2.7401 5.5721-2.7401z"
                fill-rule="evenodd"
              />
              <path
                clip-rule="evenodd"
                d="m26.0678 21.1982c.7407 0 1.4643-.2278 2.076-.6538.6212.4252 1.3542.648 2.1022.6392l2.3761-.8819c.6696-.5629 1.1292-1.3433 1.302-2.2105.1729-.8672.0484-1.7687-.3526-2.5535s-1.0541-1.4053-1.8501-1.7577c-.1817-.8396-.6395-1.5906-1.2974-2.1283l-2.3193-.8279h-.2612c-.5158-.7677-1.2904-1.31528-2.1763-1.53869l-4.9727-.28511c-.8265.07004-1.6059.42165-2.2128.99824-.2867-.06894-.5802-.10468-.8748-.10652-.7133.00149-1.411.21348-2.0088.61048-.5977.397-1.07.9619-1.3599 1.6266l-1.8894 1.365c-.4701.6496-.7232 1.4361-.722 2.2436-.0046.3376.0393.6741.1306.9987-.4957.656-.7623 1.4621-.7573 2.2903-.0012.9605.3586 1.885 1.0054 2.5833.0521.6877.2878 1.3477.6813 1.9086.3936.561.93 1.0015 1.5514 1.2739.7159.4577 1.3222 1.0734 1.7741 1.8015.4519.7282.738 1.5505.8373 2.4063h4.8783v-3.9948c-.0009-.7093.1931-1.4046.5601-2.0071.3669-.6026.8921-1.0882 1.516-1.4017.3508-.1369.4371-.3212.5428-.547.0705-.1504.1496-.3193.3214-.505.1492.1039.2649.196.3651.2759.3109.2477.4744.3779 1.0345.3779zm2.8415-1.8277c.3407.2085.7335.3341 1.144.3587l1.952-.7244c.3564-.351.5828-.7862.6724-1.2359.1005-.5047.0312-1.035-.2124-1.5117-.2459-.4814-.6639-.8934-1.2095-1.135l-.6177-.2735-.1577-.729c-.0925-.427-.3143-.8396-.6593-1.1714l-1.9132-.6828h-.698l-.3835-.5707c-.304-.4524-.7728-.8092-1.3419-.9767l-4.767-.2733c-.5441.0621-1.0388.2999-1.4141.6565l-.4775.4536-.6098-.1466c-.1998-.048-.405-.0733-.6115-.0749-.492.0019-.9645.1491-1.3597.4116-.3957.2627-.688.6229-.8608 1.0194l-.1578.3617-1.9969 1.4427c-.2181.3619-.3254.7643-.3248 1.1618v.0126l-.0002.0125c-.0025.18.0209.3609.0707.5379l.2154.7665-.462.6114c-.305.4037-.4535.8763-.4507 1.3409l.0001.0059-.0001.0059c-.0006.5416.2011 1.0939.6097 1.5351l.3497.3776.0413.5448c.0299.3936.1654.7861.4091 1.1334.2447.3489.591.64 1.0122.8246l.0863.0379.0807.0515c.0934.0597.1854.1218.2759.186l-.0039.0034c1.7369 1.1991 2.474 2.9443 2.7241 3.8367h.391 1.2778.9185v-2.578c0-1.9533.9642-3.1521 1.4908-3.7197.4213-.4541 1.054-.8369 1.3177-.9715.0524-.1327.2311-.4772.5266-.7935s.6023-.6458.7187-.7709c.791.5114 1.4051 1.0251 1.4051 1.0251s.8186-.0509 1.1904-.2203c.2975-.1356.8161-.5121 1.0382-.6834z"
                fill-rule="evenodd"
                stroke="var(--wh-text)"
                stroke-width=".7"
              />
              <path d="m14.7816 20.4114 6.1156-.9577-3.9696-4.3959z" />
              <path
                d="m22.0859 12.4729-1.8105 3.3643 3.4276 1.7769 1.8106-3.3642z"
              />
              <path
                d="m33.978 23.9631c.0007.8284-.6703 1.5006-1.4987 1.5012-.8285.0007-1.5006-.6703-1.5013-1.4987-.0006-.8285.6704-1.5006 1.4988-1.5013.8284-.0006 1.5006.6704 1.5012 1.4988z"
              />
              <g clip-rule="evenodd" fill-rule="evenodd">
                <path d="m20.985 32.4738-4 .0033-.0016-2 4-.0033z" />
                <path d="m20.9883 36.4738-4 .0033-.0016-2 4-.0033z" />
                <path d="m20.9916 40.4738-4 .0033-.0016-2 4-.0033z" />
              </g>
            </g>
          </svg>
        `;case o.ICON_NAMES["arrow-right"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;case o.ICON_NAMES.eye:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="${this.size}"
            height="${this.size}"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;case o.ICON_NAMES["feather-edit-3"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-edit-3"
          >
            <path d="M12 20h9"></path>
            <path
              d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
            ></path>
          </svg>
        `;case o.ICON_NAMES.tag:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-tag"
          >
            <path
              d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
            ></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        `;case o.ICON_NAMES["mark-icon"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="${this.strokeWidth}"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 544 512"
            part="icon"
          >
            <path
              d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"
            />
          </svg>
        `;case o.ICON_NAMES.home:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        `;case o.ICON_NAMES.bookmark:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            part="icon"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bookmark"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        `;case o.ICON_NAMES["eye-off"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-eye-off"
          >
            <path
              d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
            ></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;case o.ICON_NAMES["align-right"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-right"
          >
            <line x1="21" y1="10" x2="7" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="7" y2="18"></line>
          </svg>
        `;case o.ICON_NAMES["align-left"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-left"
          >
            <line x1="17" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
        `;case o.ICON_NAMES["push-right"]:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="matrix(0 1 -1 0 17.5 3.5)"
            >
              <path
                d="m9.828 1.672v5.656h-5.656"
                transform="matrix(.70710678 -.70710678 -.70710678 -.70710678 5.232244 12.631756)"
              />
              <path d="m7 .5v11" />
              <path d="m0 14.5h14" />
            </g>
          </svg>
        `;case o.ICON_NAMES["sidebar-overlay"]:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="sidebar-overlay"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <clipPath id="a"><path d="m0 0h24v24h-24z" /></clipPath>
            <g>
              <path
                clip-rule="evenodd"
                d="m16 0c-1.1046 0-2 .895432-2 2v20c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-20c0-1.104569-.8954-2-2-2zm0 2h6v20h-6z"
                fill-rule="evenodd"
              />
              <path
                d="m2 1h10v2h-10v18h10v2h-10c-1.10457 0-2-.8954-2-2v-18c0-1.10457.89543-2 2-2z"
              />
              <path
                d="m5 5h7v2h-6v4h6v2h-7c-.55229 0-1-.4477-1-1v-6c0-.55228.44772-1 1-1z"
              />
              <path d="m5 16h7v2h-7c-.55228 0-1-.4477-1-1s.44772-1 1-1z" />
            </g>
          </svg>
        `;case o.ICON_NAMES["sidebar-expand"]:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="sidebar-overlay"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 19C21 20.1046 20.1046 21 19 21Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 21V3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.5 10L7.25 12L5.5 14"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        `;case o.ICON_NAMES.sun:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;case o.ICON_NAMES.moon:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;case o.ICON_NAMES.power:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-power"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
        `;case o.ICON_NAMES.image:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-image"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        `;case o.ICON_NAMES["book-open"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book-open"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        `;case o.ICON_NAMES.bell:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        `;case o.ICON_NAMES["minimize-2"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-minimize-2"
          >
            <polyline points="4 14 10 14 10 20"></polyline>
            <polyline points="20 10 14 10 14 4"></polyline>
            <line x1="14" y1="10" x2="21" y2="3"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        `;case o.ICON_NAMES["maximize-2"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-maximize-2"
          >
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        `;case o.ICON_NAMES.cloud:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-cloud"
          >
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
        `;case o.ICON_NAMES.box:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-box"
          >
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            ></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        `;case o.ICON_NAMES.rocket:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13.5 9c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"
            />
            <path
              d="m.5 20c-.13 0-.258-.051-.354-.146-.137-.137-.183-.342-.116-.524 1.539-4.231 3.157-6.377 4.808-6.377.545 0 1.054.234 1.515.694.728.728.754 1.453.648 1.933-.334 1.508-2.464 2.985-6.33 4.391-.056.02-.114.03-.171.03zm4.339-6.048c-.495 0-1.078.434-1.685 1.255-.597.807-1.197 1.957-1.788 3.427 1.335-.537 2.408-1.082 3.199-1.625 1.067-.733 1.383-1.3 1.46-1.646s-.047-.677-.379-1.009c-.27-.27-.534-.401-.808-.401z"
            />
            <path
              d="m19.5 0c-2.595 0-4.907.44-6.874 1.308-1.621.716-3.009 1.72-4.126 2.986-.208.236-.401.475-.58.715-.862.057-1.744.4-2.624 1.02-.745.524-1.493 1.25-2.225 2.157-1.23 1.524-1.986 3.027-2.018 3.09-.109.219-.044.485.154.628.088.064.191.095.293.095.128 0 .256-.049.353-.145.005-.005.483-.475 1.298-.936.672-.38 1.708-.827 2.961-.906.317.811 1.224 1.781 1.659 2.216s1.405 1.342 2.216 1.659c-.079 1.253-.526 2.289-.906 2.961-.462.816-.931 1.293-.935 1.297-.173.173-.195.447-.052.646.097.134.249.208.406.208.076 0 .152-.017.223-.053.063-.032 1.566-.788 3.09-2.018.907-.732 1.633-1.48 2.157-2.225.62-.881.962-1.762 1.02-2.624.239-.178.478-.371.715-.58 1.266-1.117 2.27-2.505 2.986-4.126.868-1.966 1.308-4.279 1.308-6.874v-.5h-.5zm-16.393 9.808c.953-1.383 2.41-3.098 4.052-3.637-.649 1.137-.985 2.181-1.106 2.843-1.159.071-2.158.408-2.946.794zm7.086 7.082c.386-.788.723-1.786.793-2.944.661-.121 1.706-.457 2.842-1.105-.54 1.639-2.254 3.096-3.636 4.049zm4.851-6.14c-2.08 1.835-4.234 2.25-4.544 2.25-.002 0-.207-.004-.759-.393-.385-.271-.834-.657-1.262-1.085s-.814-.877-1.085-1.262c-.389-.552-.393-.757-.393-.759 0-.31.415-2.464 2.25-4.544 2.196-2.488 5.557-3.849 9.744-3.95-.101 4.187-1.461 7.548-3.95 9.744z"
            />
          </svg>
        `;case o.ICON_NAMES["lock-icon"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="lock-icon"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-lock"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        `;case o.ICON_NAMES["unlock-icon"]:return t.html`
          <svg
            id="unlock-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-unlock"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
          </svg>
        `;case o.ICON_NAMES.menu:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;case o.ICON_NAMES.search:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        `;case o.ICON_NAMES.list:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M84 64a12 12 0 0 1 12-12h120a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m132 52H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24m0 64H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24M56 52H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"
            ></path>
          </svg>
        `;case o.ICON_NAMES.grid:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-grid"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        `;case o.ICON_NAMES.logout:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        `;case o.ICON_NAMES["chevron-right"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;case o.ICON_NAMES["chevron-left"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        `;case o.ICON_NAMES.history:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"
              class="ci-primary"
            />
            <polygon
              fill="currentColor"
              points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"
              class="ci-primary"
            />
          </svg>
        `;case o.ICON_NAMES.globe:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-globe"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            ></path>
          </svg>
        `;case o.ICON_NAMES["arrows-down-up"]:return t.html`
          <svg
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
          >
            <path
              d="M116.24219,187.75732a5.999,5.999,0,0,1,0,8.48536L84.24561,228.23926a6.032,6.032,0,0,1-.92579.75732c-.022.01416-.04443.02588-.0664.04a5.96758,5.96758,0,0,1-.97217.51172c-.02588.01025-.05176.01807-.07715.02832a5.92891,5.92891,0,0,1-1.0415.30859c-.01953.00391-.03955.00537-.05957.00928a5.82061,5.82061,0,0,1-2.20606,0c-.02-.00391-.04-.00537-.05957-.00928a5.92891,5.92891,0,0,1-1.0415-.30859c-.02539-.01025-.05127-.01807-.07715-.02832a5.96758,5.96758,0,0,1-.97217-.51172c-.022-.01416-.04443-.02588-.0664-.04a6.032,6.032,0,0,1-.92579-.75732L43.75781,196.24268a5.99971,5.99971,0,0,1,8.48438-8.48536L74,209.51465V32a6,6,0,0,1,12,0V209.51465l21.75781-21.75733A5.99871,5.99871,0,0,1,116.24219,187.75732Zm96-128-31.9961-31.99609a6.00612,6.00612,0,0,0-.92627-.75732c-.022-.01465-.04492-.02637-.06689-.041a6.00435,6.00435,0,0,0-.9707-.51074c-.02637-.01123-.05371-.019-.08057-.02979a5.98707,5.98707,0,0,0-1.03809-.30761c-.0205-.00391-.0415-.00538-.062-.00928A6.033,6.033,0,0,0,176.00293,26h-.00586a6.033,6.033,0,0,0-1.09863.10547c-.02051.0039-.04151.00537-.062.00928a5.98707,5.98707,0,0,0-1.03809.30761c-.02686.01075-.0542.01856-.08057.02979a6.00435,6.00435,0,0,0-.9707.51074c-.022.01465-.04492.02637-.06689.041a6.00612,6.00612,0,0,0-.92627.75732l-31.9961,31.99609a5.99971,5.99971,0,1,0,8.48438,8.48536L170,46.48535V224a6,6,0,0,0,12,0V46.48535l21.75781,21.75733a5.99971,5.99971,0,1,0,8.48438-8.48536Z"
            />
          </svg>
        `;case o.ICON_NAMES.filter:return t.html`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="${this.size}"
          height="${this.size}"
          part="icon"
          stroke-width="${this.strokeWidth}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-filter"
        >
          <polygon
            points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
          ></polygon>
        </svg>`;case o.ICON_NAMES["filter-2"]:return t.html`<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="${this.size}"
          height="${this.size}"
          part="icon"
          stroke-width="${this.strokeWidth}"
          stroke="currentColor"
          fill="none"
        >
          <line x1="50.69" y1="32" x2="56.32" y2="32" />
          <line x1="7.68" y1="32" x2="38.69" y2="32" />
          <line x1="26.54" y1="15.97" x2="56.32" y2="15.97" />
          <line x1="7.68" y1="15.97" x2="14.56" y2="15.97" />
          <line x1="35" y1="48.03" x2="56.32" y2="48.03" />
          <line x1="7.68" y1="48.03" x2="23" y2="48.03" />
          <circle cx="20.55" cy="15.66" r="6" />
          <circle cx="44.69" cy="32" r="6" />
          <circle cx="29" cy="48.03" r="6" />
        </svg>`;case o.ICON_NAMES.groups:return t.html`<svg
          fill="none"
          viewBox="0 0 20 20"
          width="${this.size}"
          height="${this.size}"
          part="icon"
          stroke-width="${this.strokeWidth}"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path
              d="m7.5 7.25c0 .41421-.33579.75-.75.75s-.75-.33579-.75-.75.33579-.75.75-.75.75.33579.75.75z"
            />
            <path
              d="m6.75 11c.41421 0 .75-.3358.75-.75 0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75c0 .4142.33579.75.75.75z"
            />
            <path
              d="m7.5 13.25c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75.33579-.75.75-.75.75.3358.75.75z"
            />
            <path
              d="m9.5 7c-.27614 0-.5.22386-.5.5s.22386.5.5.5h4c.2761 0 .5-.22386.5-.5s-.2239-.5-.5-.5z"
            />
            <path
              d="m9 10.5c0-.2761.22386-.5.5-.5h4c.2761 0 .5.2239.5.5s-.2239.5-.5.5h-4c-.27614 0-.5-.2239-.5-.5z"
            />
            <path
              d="m9.5 13c-.27614 0-.5.2239-.5.5s.22386.5.5.5h4c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5z"
            />
            <path
              d="m3 5c0-1.10457.89543-2 2-2h10c1.1046 0 2 .89543 2 2v10c0 1.1046-.8954 2-2 2h-10c-1.10457 0-2-.8954-2-2zm2-1c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1v-10c0-.55228-.4477-1-1-1z"
            />
          </g>
        </svg>`;case o.ICON_NAMES["size-small"]:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z"
              fill="currentColor"
            />
            <path d="M22.8412 7H8.84119V5H22.8412V7Z" fill="currentColor" />
            <path d="M22.8412 11H8.84119V9H22.8412V11Z" fill="currentColor" />
            <path d="M8.84119 15H22.8412V13H8.84119V15Z" fill="currentColor" />
            <path d="M22.8412 19H8.84119V17H22.8412V19Z" fill="currentColor" />
          </svg>
        `;case o.ICON_NAMES["size-medium"]:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.78235 2.21714C3.70734 2.14212 3.6056 2.09998 3.49951 2.09998C3.39342 2.09998 3.29168 2.14212 3.21667 2.21714L1.21667 4.21714C1.06046 4.37335 1.06046 4.62661 1.21667 4.78282C1.37288 4.93903 1.62614 4.93903 1.78235 4.78282L3.09951 3.46567L3.09951 11.5343L1.78235 10.2171C1.62614 10.0609 1.37288 10.0609 1.21667 10.2171C1.06046 10.3733 1.06046 10.6266 1.21667 10.7828L3.21667 12.7828C3.29168 12.8578 3.39342 12.9 3.49951 12.9C3.6056 12.9 3.70734 12.8578 3.78235 12.7828L5.78235 10.7828C5.93856 10.6266 5.93856 10.3733 5.78235 10.2171C5.62614 10.0609 5.37288 10.0609 5.21667 10.2171L3.89951 11.5343L3.89951 3.46567L5.21667 4.78282C5.37288 4.93903 5.62614 4.93903 5.78235 4.78282C5.93856 4.62661 5.93856 4.37335 5.78235 4.21714L3.78235 2.21714ZM8.5 3.99997C8.22386 3.99997 8 4.22383 8 4.49997C8 4.77611 8.22386 4.99997 8.5 4.99997H14.5C14.7761 4.99997 15 4.77611 15 4.49997C15 4.22383 14.7761 3.99997 14.5 3.99997H8.5ZM8 7.49997C8 7.22383 8.22386 6.99997 8.5 6.99997H14.5C14.7761 6.99997 15 7.22383 15 7.49997C15 7.77611 14.7761 7.99997 14.5 7.99997H8.5C8.22386 7.99997 8 7.77611 8 7.49997ZM8.5 9.99997C8.22386 9.99997 8 10.2238 8 10.5C8 10.7761 8.22386 11 8.5 11H14.5C14.7761 11 15 10.7761 15 10.5C15 10.2238 14.7761 9.99997 14.5 9.99997H8.5Z"
              fill="currentColor"
            />
          </svg>
        `;case o.ICON_NAMES["size-large"]:return t.html`
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
          >
            <path d="m20.439 4.062h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1z" />
            <path d="m20.439 9.686h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z" />
            <path d="m20.439 15.31h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z" />
            <path d="m20.439 20.934h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1z" />
            <path
              d="m3.208 18.8a.5.5 0 0 1 .71-.71l1.14 1.14v-14.455l-1.14 1.14a.513.513 0 0 1 -.71 0 .5.5 0 0 1 0-.71l2-2a.494.494 0 0 1 .34-.14.549.549 0 0 1 .37.14l2 2a.524.524 0 0 1 0 .71.5.5 0 0 1 -.71 0l-1.15-1.15v14.47l1.15-1.15a.5.5 0 1 1 .71.71l-2 2a.513.513 0 0 1 -.71 0z"
            />
          </svg>
        `;case o.ICON_NAMES["alert-circle"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-alert-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        `;case o.ICON_NAMES.save:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-save"
          >
            <path
              d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
            ></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        `;case o.ICON_NAMES.user:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        `;case o.ICON_NAMES["arrow-up-circle"]:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-up-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 12 12 8 8 12"></polyline>
            <line x1="12" y1="16" x2="12" y2="8"></line>
          </svg>
        `;case o.ICON_NAMES.compass:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-compass"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon
              points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            ></polygon>
          </svg>
        `;case o.ICON_NAMES.bulb:return t.html`
          <svg
            enable-background="new 0 0 113.01 122.88"
            viewBox="0 0 113.01 122.88"
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
          >
            <path
              d="m44.13 102.06c-1.14.03-2.14-.81-2.3-1.96-.17-1.2.64-2.31 1.82-2.54-1.3-7.37-4.85-11.43-8.6-15.72-2.92-3.34-5.95-6.81-8.34-11.92-2.35-5.03-3.64-10.23-3.6-15.63.05-5.4 1.42-10.96 4.4-16.71.02-.04.04-.07.06-.11 3.91-6.62 9.38-11.04 15.47-13.52 5.11-2.09 10.66-2.8 16.1-2.3 5.42.5 10.73 2.2 15.37 4.94 5.9 3.49 10.75 8.67 13.42 15.21 1.44 3.54 2.42 7.49 2.54 11.82.12 4.31-.62 8.96-2.61 13.88-2.66 6.59-6.18 10.68-9.47 14.51-3.03 3.53-5.85 6.81-7.42 11.84.89.21 1.59.94 1.73 1.9.17 1.24-.7 2.39-1.94 2.56l-.77.11c-.14 1.09-.23 2.26-.27 3.51l.25-.04c1.24-.17 2.39.7 2.56 1.94s-.7 2.39-1.94 2.56l-.78.11c.01.15.02.3.03.45.07.88.08 1.73.03 2.54l.13-.02c1.25-.15 2.38.74 2.54 1.98.15 1.25-.74 2.38-1.98 2.54l-1.68.21c-1.2 3.11-3.34 5.48-5.87 6.94-1.74 1.01-3.67 1.59-5.61 1.71-1.97.12-3.96-.25-5.78-1.13-2.08-1.02-3.94-2.71-5.29-5.14-.65-.33-1.13-.97-1.23-1.75-.04-.31-.01-.61.07-.89-.39-1.16-.68-2.43-.87-3.83l-.07.01c-1.24.17-2.39-.7-2.56-1.94s.7-2.39 1.94-2.56l.54-.08c.04-1.22.03-2.38-.02-3.48zm-41.95-43.2c-1.17.03-2.14-.88-2.18-2.05s.88-2.14 2.05-2.18l8.7-.3c1.17-.04 2.14.88 2.18 2.05s-.88 2.14-2.05 2.18zm108.5-8.61c1.16-.12 2.2.73 2.32 1.89s-.73 2.2-1.89 2.32l-8.66.91c-1.16.12-2.2-.73-2.32-1.89s.73-2.2 1.89-2.32zm-15.77-35.47c.65-.97 1.96-1.23 2.93-.58s1.23 1.96.58 2.93l-4.84 7.24c-.65.97-1.96 1.23-2.93.58s-1.23-1.96-.58-2.93zm-37.28-12.72c.03-1.17 1-2.09 2.16-2.06 1.17.03 2.09 1 2.06 2.16l-.22 8.7c-.03 1.17-1 2.09-2.16 2.06-1.17-.03-2.09-1-2.06-2.16zm-43.75 13.47c-.86-.8-.9-2.14-.11-2.99.8-.86 2.14-.9 2.99-.11l6.37 5.94c.86.8.9 2.14.11 2.99-.8.86-2.14.9-2.99.11zm34 81.42 18.49-2.63c1.59-6.7 5.05-10.73 8.8-15.08 3.08-3.58 6.36-7.4 8.76-13.34 1.76-4.35 2.41-8.43 2.31-12.19-.1-3.75-.96-7.21-2.24-10.34-2.3-5.63-6.51-10.11-11.65-13.15-4.11-2.43-8.8-3.94-13.59-4.37-4.77-.44-9.64.19-14.13 2.02-5.26 2.15-9.99 5.97-13.39 11.72-2.64 5.12-3.86 10.02-3.9 14.73-.04 4.74 1.11 9.33 3.2 13.8 2.13 4.56 4.97 7.8 7.69 10.92 4.24 4.86 8.25 9.45 9.65 17.91zm17.74 2.07-17.27 2.45c.05 1.1.07 2.25.05 3.47l17.05-2.42c.02-1.23.07-2.4.17-3.5zm-17.13 10.5c.12.92.3 1.76.53 2.54l16.55-2.04c.11-.86.13-1.77.05-2.74v-.02l-.01-.17zm2.88 6.84c.64.67 1.35 1.19 2.1 1.55 1.15.56 2.42.79 3.67.72 1.29-.08 2.57-.47 3.74-1.15 1.1-.64 2.09-1.53 2.88-2.65z"
            />
          </svg>
        `;case o.ICON_NAMES.zap:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-zap"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        `;case o.ICON_NAMES.smartphone:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-smartphone"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        `;case o.ICON_NAMES.notion:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
              fill="#fff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
              fill="#000"
            />
          </svg>
        `;case o.ICON_NAMES.capacities:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 group-active:text-blue-500 dark:group-active:text-blue-400"
          >
            <circle
              cx="38.8209"
              cy="39"
              r="13.45"
              transform="rotate(-15 38.8209 39)"
              fill="currentColor"
            ></circle>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54.7914 66.0811C54.6942 66.3374 54.5105 66.5518 54.271 66.6852C52.0346 67.9311 49.6099 68.9243 47.0245 69.617C30.1152 74.1478 12.7346 64.1131 8.20379 47.2038C3.67296 30.2946 13.7077 12.9139 30.6169 8.38311C33.2023 7.69037 35.7987 7.33813 38.3584 7.2989C38.6325 7.29469 38.8988 7.38849 39.1111 7.56192C41.8794 9.82347 44.4239 12.3787 46.6916 15.197C47.4731 16.1681 46.2983 17.5912 45.101 17.2444C41.2693 16.1343 37.0954 16.023 32.9609 17.1308C20.8828 20.3671 13.7152 32.7819 16.9515 44.8599C20.1878 56.938 32.6025 64.1056 44.6806 60.8693C48.8151 59.7615 52.3742 57.5781 55.1375 54.7009C56.001 53.8018 57.7299 54.4469 57.5387 55.6787C56.9839 59.2532 56.058 62.7384 54.7914 66.0811ZM65.4625 56.1737C64.7914 57.2153 63.3044 56.5354 63.4669 55.307C64.4343 47.9938 64.0074 40.3692 61.9779 32.7952C59.9484 25.2211 56.5058 18.4044 52.0114 12.5547C51.2565 11.5722 52.2043 10.2398 53.3063 10.8064C60.9824 14.7532 67.0278 21.8023 69.4377 30.7963C71.8476 39.7902 70.1368 48.9176 65.4625 56.1737Z"
              fill="currentColor"
            ></path>
          </svg>
        `;case o.ICON_NAMES.obsidian:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 512 512"
          >
            <radialGradient
              id="logo-bottom-left"
              cx="0"
              cy="0"
              gradientTransform="matrix(-59 -225 150 -39 161.4 470)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".4" />
              <stop offset="1" stop-opacity=".1" />
            </radialGradient>
            <radialGradient
              id="logo-top-right"
              cx="0"
              cy="0"
              gradientTransform="matrix(50 -379 280 37 360 374.2)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".6" />
              <stop offset="1" stop-color="#fff" stop-opacity=".1" />
            </radialGradient>
            <radialGradient
              id="logo-top-left"
              cx="0"
              cy="0"
              gradientTransform="matrix(69 -319 218 47 175.4 307)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".8" />
              <stop offset="1" stop-color="#fff" stop-opacity=".4" />
            </radialGradient>
            <radialGradient
              id="logo-bottom-right"
              cx="0"
              cy="0"
              gradientTransform="matrix(-96 -163 187 -111 335.3 512.2)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".3" />
              <stop offset="1" stop-opacity=".3" />
            </radialGradient>
            <radialGradient
              id="logo-top-edge"
              cx="0"
              cy="0"
              gradientTransform="matrix(-36 166 -112 -24 310 128.2)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity="0" />
              <stop offset="1" stop-color="#fff" stop-opacity=".2" />
            </radialGradient>
            <radialGradient
              id="logo-left-edge"
              cx="0"
              cy="0"
              gradientTransform="matrix(88 89 -190 187 111 220.2)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".2" />
              <stop offset="1" stop-color="#fff" stop-opacity=".4" />
            </radialGradient>
            <radialGradient
              id="logo-bottom-edge"
              cx="0"
              cy="0"
              gradientTransform="matrix(9 130 -276 20 215 284)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".2" />
              <stop offset="1" stop-color="#fff" stop-opacity=".3" />
            </radialGradient>
            <radialGradient
              id="logo-middle-edge"
              cx="0"
              cy="0"
              gradientTransform="matrix(-198 -104 327 -623 400 399.2)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              <stop offset="0" stop-color="#fff" stop-opacity=".2" />
              <stop offset=".5" stop-color="#fff" stop-opacity=".2" />
              <stop offset="1" stop-color="#fff" stop-opacity=".3" />
            </radialGradient>
            <clipPath id="clip">
              <path d="M.2.2h512v512H.2z" />
            </clipPath>
            <g clip-path="url(#clip)">
              <path
                d="M382.3 475.6c-3.1 23.4-26 41.6-48.7 35.3-32.4-8.9-69.9-22.8-103.6-25.4l-51.7-4a34 34 0 0 1-22-10.2l-89-91.7a34 34 0 0 1-6.7-37.7s55-121 57.1-127.3c2-6.3 9.6-61.2 14-90.6 1.2-7.9 5-15 11-20.3L248 8.9a34.1 34.1 0 0 1 49.6 4.3L386 125.6a37 37 0 0 1 7.6 22.4c0 21.3 1.8 65 13.6 93.2 11.5 27.3 32.5 57 43.5 71.5a17.3 17.3 0 0 1 1.3 19.2 1494 1494 0 0 1-44.8 70.6c-15 22.3-21.9 49.9-25 73.1z"
                fill="#6c31e3"
              />
              <path
                d="M165.9 478.3c41.4-84 40.2-144.2 22.6-187-16.2-39.6-46.3-64.5-70-80-.6 2.3-1.3 4.4-2.2 6.5L60.6 342a34 34 0 0 0 6.6 37.7l89.1 91.7a34 34 0 0 0 9.6 7z"
                fill="url(#logo-bottom-left)"
              />
              <path
                d="M278.4 307.8c11.2 1.2 22.2 3.6 32.8 7.6 34 12.7 65 41.2 90.5 96.3 1.8-3.1 3.6-6.2 5.6-9.2a1536 1536 0 0 0 44.8-70.6 17 17 0 0 0-1.3-19.2c-11-14.6-32-44.2-43.5-71.5-11.8-28.2-13.5-72-13.6-93.2 0-8.1-2.6-16-7.6-22.4L297.6 13.2a34 34 0 0 0-1.5-1.7 96 96 0 0 1 2 54 198.3 198.3 0 0 1-17.6 41.3l-7.2 14.2a171 171 0 0 0-19.4 71c-1.2 29.4 4.8 66.4 24.5 115.8z"
                fill="url(#logo-top-right)"
              />
              <path
                d="M278.4 307.8c-19.7-49.4-25.8-86.4-24.5-115.9a171 171 0 0 1 19.4-71c2.3-4.8 4.8-9.5 7.2-14.1 7.1-13.9 14-27 17.6-41.4a96 96 0 0 0-2-54A34.1 34.1 0 0 0 248 9l-105.4 94.8a34.1 34.1 0 0 0-10.9 20.3l-12.8 85-.5 2.3c23.8 15.5 54 40.4 70.1 80a147 147 0 0 1 7.8 24.8c28-6.8 55.7-11 82.1-8.3z"
                fill="url(#logo-top-left)"
              />
              <path
                d="M333.6 511c22.7 6.2 45.6-12 48.7-35.4a187 187 0 0 1 19.4-63.9c-25.6-55-56.5-83.6-90.4-96.3-36-13.4-75.2-9-115 .7 8.9 40.4 3.6 93.3-30.4 162.2 4 1.8 8.1 3 12.5 3.3 0 0 24.4 2 53.6 4.1 29 2 72.4 17.1 101.6 25.2z"
                fill="url(#logo-bottom-right)"
              />
              <g clip-rule="evenodd" fill-rule="evenodd">
                <path
                  d="M254.1 190c-1.3 29.2 2.4 62.8 22.1 112.1l-6.2-.5c-17.7-51.5-21.5-78-20.2-107.6a174.7 174.7 0 0 1 20.4-72c2.4-4.9 8-14.1 10.5-18.8 7.1-13.7 11.9-21 16-33.6 5.7-17.5 4.5-25.9 3.8-34.1 4.6 29.9-12.7 56-25.7 82.4a177.1 177.1 0 0 0-20.7 72z"
                  fill="url(#logo-top-edge)"
                />
                <path
                  d="M194.3 293.4c2.4 5.4 4.6 9.8 6 16.5L195 311c-2.1-7.8-3.8-13.4-6.8-20-17.8-42-46.3-63.6-69.7-79.5 28.2 15.2 57.2 39 75.7 81.9z"
                  fill="url(#logo-left-edge)"
                />
                <path
                  d="M200.6 315.1c9.8 46-1.2 104.2-33.6 160.9 27.1-56.2 40.2-110.1 29.3-160z"
                  fill="url(#logo-bottom-edge)"
                />
                <path
                  d="M312.5 311c53.1 19.9 73.6 63.6 88.9 100-19-38.1-45.2-80.3-90.8-96-34.8-11.8-64.1-10.4-114.3 1l-1.1-5c53.2-12.1 81-13.5 117.3 0z"
                  fill="url(#logo-middle-edge)"
                />
              </g>
            </g>
          </svg>
        `;case o.ICON_NAMES.book:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            ></path>
          </svg>
        `;case o.ICON_NAMES.colorPalette:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-color-swatch"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"
            />
            <path
              d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"
            />
            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
            <line x1="17" y1="17" x2="17" y2="17.01" />
          </svg>
        `;case o.ICON_NAMES.type:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-type"
          >
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
        `;case o.ICON_NAMES.crown:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            stroke-width="${this.strokeWidth}"
            part="icon"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 8l3 5.2l3-2.7l-.7 3.5H6.7L6 10.5l3 2.7zm0-4l-3.5 6L3 5l2 11h14l2-11l-5.5 5zm7 14H5v1c0 .6.4 1 1 1h12c.6 0 1-.4 1-1z"
            />
          </svg>
        `;case o.ICON_NAMES.command:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-command"
          >
            <path
              d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
            ></path>
          </svg>
        `;case o.ICON_NAMES.circle:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        `;case o.ICON_NAMES.dragDots:return t.html`
          <svg
            viewBox="0 0 256 256"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
          >
            <path
              fill="currentColor"
              d="M108 60a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-72 36a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-72 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
            ></path>
          </svg>
        `;case o.ICON_NAMES.weava:return t.html`
          <svg
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 484 359"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <polyline
                id="path-1"
                points="101.518388 0 0 0 90.2448058 359 191.763194 359"
              ></polyline>
              <polygon
                id="path-3"
                points="101.518388 0 0 0 90.2448058 359 191.763194 359"
              ></polygon>
            </defs>
            <g
              id="Testing-with-sidebar"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="W-Logo">
                <g
                  id="Rectangle-16-+-Rectangle-16-+-Rectangle-16-+-Rectangle-16-+-Rectangle-16-+-Rectangle-16-+-Rectangle-16-Mask"
                >
                  <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                  </mask>
                  <use id="Mask" fill="#FEE94E" xlink:href="#path-1"></use>
                  <polygon
                    id="Rectangle-16"
                    fill-opacity="0.5"
                    fill="#FF27A1"
                    points="381.886263 0 483.404651 0 393.159845 359 291.641457 359"
                  ></polygon>
                  <polygon
                    id="Rectangle-16"
                    fill-opacity="0.5"
                    fill="#FF27A1"
                    points="381.886263 0 483.404651 0 393.159845 359 291.641457 359"
                  ></polygon>
                  <polygon
                    id="Rectangle-16"
                    fill-opacity="0.5"
                    fill="#FF27A1"
                    points="381.886263 0 483.404651 0 393.159845 359 291.641457 359"
                  ></polygon>
                  <g id="Rectangle-16">
                    <use
                      fill="#FEE94E"
                      fill-rule="evenodd"
                      xlink:href="#path-3"
                    ></use>
                    <path
                      stroke="#FFD300"
                      stroke-width="8"
                      d="M98.3994552,4 L186.633235,355 L93.3637389,355 L5.12995939,4 L98.3994552,4 Z"
                    ></path>
                  </g>
                  <polyline
                    id="Rectangle-16"
                    fill="#FF4F95"
                    points="303.345412 90.2831683 201.827024 90.2831683 292.07183 359 393.590218 359"
                  ></polyline>
                  <polygon
                    id="Rectangle-16"
                    fill-opacity="0.636973505"
                    fill="#FF8700"
                    points="180.059239 90.2831683 281.577627 90.2831683 191.332821 359 89.814433 359"
                  ></polygon>
                  <polygon
                    id="Rectangle-16"
                    fill-opacity="0.636973505"
                    fill="#FF8700"
                    points="180.059239 90.2831683 281.577627 90.2831683 191.332821 359 89.814433 359"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        `;case o.ICON_NAMES.mail:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        `;case o.ICON_NAMES.repeat:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="${this.fill}"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-repeat"
          >
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        `;case o.ICON_NAMES.inbox:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-inbox"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
            ></path>
          </svg>
        `;case o.ICON_NAMES.flame:return t.html`
          <svg
            id="Layer_1"
            data-name="Layer 1"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 91.16 122.88"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: #f77d02;
                }
                .cls-1,
                .cls-2,
                .cls-3 {
                  fill-rule: evenodd;
                }
                .cls-2 {
                  fill: #ffc928;
                }
                .cls-3 {
                  fill: #fff073;
                }
              </style>
            </defs>
            <title>flames</title>
            <path
              class="cls-1"
              d="M14.45,35.35c1.82,14.45,4.65,25.4,9.44,29.45C24.48,30.87,43,27.4,38.18,0,53.52,3,67.77,33.33,71.36,66.15a37.5,37.5,0,0,0,6.53-19.46c13.76,15.72,21.31,56.82-.17,69.52-12.53,7.41-38.13,7.79-51.46,5.27a27.64,27.64,0,0,1-13.5-5.36c-19.2-14.66-15.17-62.25,1.69-80.77Z"
            />
            <path
              class="cls-2"
              d="M77.73,116.2h0c-8,4.74-21.42,6.61-33.51,6.67H42.45a95.69,95.69,0,0,1-16.19-1.39,27.64,27.64,0,0,1-13.5-5.36,2.43,2.43,0,0,0-.25-.2c-2.13-10.28,1.76-24,8.49-31.29a25.49,25.49,0,0,0,4.85,13.71C28.51,75.22,39.11,57,50.5,54.94c-3,19.1,11,24.21,10.62,42.45,3.56-2.85,5.66-10.57,7-20.75,9.12,9.49,13.59,26.32,9.59,39.56Z"
            />
            <path
              class="cls-3"
              d="M65.81,120.73a115,115,0,0,1-39.55.82l-1-.13c.06-5.73,2.21-12,5.47-15.73a17.18,17.18,0,0,0,2.93,8.84c1.61-14.91,8-26.63,14.88-28-1.79,12.32,6.65,15.61,6.4,27.37,2.15-1.84,3.42-6.82,4.23-13.38,4.47,5,7.09,12.84,6.63,20.19Z"
            />
          </svg>
        `;case o.ICON_NAMES.medal:return t.html`
          <?xml version="1.0" encoding="utf-8"?><svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 71.693 122.881"
            enable-background="new 0 0 71.693 122.881"
            xml:space="preserve"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#FAB62D"
                d="M1.189,0.021h25.908l23.339,42.446c0.5,0.9,1.229,1.609,2.06,2.06 H17.658L1.189,0V0.021L1.189,0.021L1.189,0.021z M35.847,66.335l5.989,14.619l15.769,1.189L45.536,92.383l3.75,15.339l-13.439-8.33 l-13.439,8.33l3.75-15.339L14.078,82.134l15.769-1.19L35.847,66.335L35.847,66.335L35.847,66.335L35.847,66.335z M35.847,51.186 c19.799,0,35.847,16.049,35.847,35.847s-16.048,35.848-35.847,35.848C16.048,122.87,0,106.821,0,87.022 C0,67.225,16.048,51.186,35.847,51.186L35.847,51.186L35.847,51.186z M39.026,0.021h30.317L57.146,32.998L39.026,0.021 L39.026,0.021L39.026,0.021z"
              />
            </g>
          </svg>
        `;case o.ICON_NAMES.check:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;case o.ICON_NAMES.dot:return t.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
          </svg>
        `;case o.ICON_NAMES["check-badge"]:return t.html`
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92.35 122.88"
            width="${this.size}"
            height="${this.size}"
            part="icon"
            stroke-width="${this.strokeWidth}"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: #f4ad20;
                }
                .cls-1,
                .cls-2,
                .cls-3,
                .cls-4 {
                  fill-rule: evenodd;
                }
                .cls-2 {
                  fill: #fac864;
                }
                .cls-3 {
                  fill: #fff;
                }
                .cls-4 {
                  fill: var(--wh-secondary-200);
                }
              </style>
            </defs>
            <title>guarantee</title>
            <path
              class="cls-1"
              d="M46.18,0a9.26,9.26,0,0,1,5.61,1.76C54,3.16,56.45,5.91,59.5,7.65c4.28,2.45,12.22-.93,16.29,5.11,2.37,3.52,2.48,6.28,2.66,9a15.84,15.84,0,0,0,3.72,9.64c5,6.59,6,11,3.45,15.55-1.75,3.12-5.44,4.86-6.29,6.83-1.82,4.21.19,7.37-2.3,12.27a13.05,13.05,0,0,1-7.93,6.78c-3,1-6-.43-8.39.58C56.5,75.19,53.39,79.3,50,80.34a13,13,0,0,1-7.73,0c-3.35-1-6.46-5.15-10.66-6.92-2.4-1-5.4.39-8.39-.58a13,13,0,0,1-7.94-6.78C12.83,61.16,14.84,58,13,53.79c-.86-2-4.55-3.71-6.3-6.83-2.57-4.57-1.53-9,3.46-15.55a16,16,0,0,0,3.72-9.64c.17-2.73.28-5.49,2.66-9,4.06-6,12-2.66,16.29-5.11,3-1.74,5.51-4.49,7.7-5.88A9.29,9.29,0,0,1,46.18,0Z"
            />
            <path
              class="cls-2"
              d="M79.12,25.79a17.93,17.93,0,0,0,3,5.61c5,6.6,6,11,3.45,15.56-1.75,3.12-5.44,4.86-6.29,6.83-1.82,4.21.19,7.37-2.3,12.27a13.05,13.05,0,0,1-7.93,6.78c-3,1-6-.43-8.39.58C56.5,75.19,53.39,79.3,50,80.34a13,13,0,0,1-7.73,0c-3.35-1-6.46-5.15-10.66-6.92-2.4-1-5.4.39-8.39-.58a13,13,0,0,1-7.94-6.78A11.94,11.94,0,0,1,14,61.47L79.12,25.79Z"
            />
            <path
              class="cls-3"
              d="M46.06,16.94A24.15,24.15,0,1,1,21.91,41.09,24.15,24.15,0,0,1,46.06,16.94Z"
            />
            <path
              class="cls-4"
              d="M39.52,36.27l4.72,4.46,9.49-9.65c.93-.95,1.52-1.71,2.68-.52l3.76,3.84c1.23,1.22,1.17,1.94,0,3.08L46.38,51c-2.45,2.41-2,2.56-4.51.09l-8.68-8.63a1.1,1.1,0,0,1,.1-1.7l4.36-4.52c.66-.68,1.19-.64,1.87,0Z"
            />
            <path
              class="cls-4"
              d="M3.39,113.07,15,111l5.73,10.25c4.15,5.15,6.79-3.31,8-6.26L39.78,94c-2.57-.89-5.66-3.47-8.85-6.35-6.35.13-12.27-1-16.62-6.51L1.5,105.85.38,108.23c-.87,3.08-.41,5.12,3,4.84Z"
            />
            <path
              class="cls-4"
              d="M89,113.07,77.41,111l-5.74,10.25c-4.15,5.15-6.79-3.31-8-6.26L52.57,94c2.57-.89,5.67-3.47,8.85-6.35,6.35.13,12.27-1,16.62-6.51l12.82,24.75L92,108.23c.87,3.08.41,5.12-3,4.84Z"
            />
          </svg>
        `;case o.ICON_NAMES["curved-arrow-left"]:return t.html`<svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          width="${this.size}"
          height="${this.size}"
          part="icon"
          stroke-width="${this.strokeWidth}"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 414.537"
        >
          <path
            fill-rule="nonzero"
            d="M239.328 307.707c-35.974 29.622-93.074 70.771-124.026 101.724-7.703 4.623-16.377 6.064-24.427 4.496-8.291-1.606-15.867-6.316-21.078-13.928l-1.587-2.598L0 262.585l23.27-11.733c6.285 12.42 46.017 93.326 61.794 123.347 8.421-113.201 50.941-202.355 119.111-265.333C279.447 39.322 385.727 2.089 511.589 0L512 26.017c-119.332 1.982-219.659 36.875-290.178 102.028-64.084 59.205-103.812 143.79-111.061 251.776l112.032-92.217 16.535 20.103z"
          />
        </svg>`;case o.ICON_NAMES["buyer-pay-icon"]:return t.html`<svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="${this.size}"
          height="${this.size}"
          part="icon"
          stroke-width="${this.strokeWidth}"
          x="0px"
          y="0px"
          viewBox="0 0 88.47 122.88"
          style="enable-background:new 0 0 88.47 122.88"
          xml:space="preserve"
        >
          <g>
            <path
              d="M11.86,68.08L7.62,92.09c-0.07,0.33-0.2,0.63-0.4,0.86c-1.51,1.95-2.46,3.62-2.74,4.97c-0.2,1,0,1.8,0.67,2.43l16.56,16.56 c1.05,1.01,2.28,1.65,3.74,1.91c1.6,0.3,3.46,0.13,5.6-0.45c0.03,0,0.08-0.02,0.12-0.02c0.81-0.22,1.88-0.48,2.89-0.73 c4.44-1.08,8.31-2.03,11.91-5.29l4.62-4.82c0.05-0.08,0.12-0.15,0.18-0.22c0.07-0.07,0.52-0.52,1.13-1.1 c3.16-3.09,7.07-6.9,4.69-10.24l-1.85-1.85c-0.9,0.86-1.85,1.71-2.76,2.53c-0.83,0.73-1.61,1.41-2.33,2.13 c-0.76,0.76-2,0.76-2.76,0c-0.76-0.77-0.76-2,0-2.76c0.71-0.72,1.6-1.5,2.51-2.31c3.13-2.76,6.72-5.92,4.79-8.68l-1.83-1.83 c-0.1-0.1-0.18-0.22-0.27-0.33c-1.05,1.08-2.21,2.11-3.34,3.11c-0.83,0.73-1.61,1.41-2.33,2.13c-0.77,0.77-2,0.77-2.76,0 c-0.77-0.76-0.77-2,0-2.76c0.71-0.71,1.6-1.5,2.51-2.31c3.13-2.76,6.72-5.92,4.79-8.68l-1.83-1.83c-0.13-0.13-0.23-0.27-0.32-0.42 l-5.37,5.37c-0.77,0.76-2,0.76-2.76,0c-0.76-0.77-0.76-2,0-2.76l10.07-10.07c2.41-2.41,2.96-4.92,2.33-6.82 c-0.23-0.7-0.62-1.31-1.1-1.8c-0.25-0.25-0.53-0.47-0.84-0.66l-0.01,0c-0.15,0.07-0.26-0.08-0.4-0.22 c-0.17-0.08-0.36-0.16-0.54-0.22c-1.67-0.55-3.84-0.16-6.04,1.69c-0.03,0.03-0.06,0.06-0.09,0.08c-0.24,0.2-0.48,0.42-0.72,0.66 L22.44,78.27c-0.76,0.76-2,0.76-2.76,0c-0.7-0.7-0.76-1.78-0.18-2.55L11.86,68.08L11.86,68.08z M25.08,70.11l0.67-0.67l13.79-13.79 c-1.43-0.66-2.76-1.59-3.94-2.77c-5.25-5.25-5.25-13.73,0-18.98c5.25-5.25,13.73-5.25,18.98,0c5.25,5.25,5.25,13.73,0,18.98 c-0.04,0.04-0.09,0.09-0.13,0.13c0.1,0.09,0.21,0.19,0.31,0.29c0.43,0.43,0.8,0.9,1.13,1.4l17.1-17.1c-2.62-2.62-2.62-6.9,0-9.53 L60.25,15.33c-2.62,2.62-6.9,2.62-9.53,0L15.28,50.77c2.62,2.62,2.62,6.9,0,9.53L25.08,70.11L25.08,70.11z M55.14,65.57 c-0.46,0.64-0.99,1.28-1.62,1.9l-2,2l-0.02-0.05c0.15,0.08,0.28,0.18,0.42,0.32l1.91,1.91c0.1,0.1,0.2,0.23,0.28,0.35 c2.15,2.94,1.81,5.57,0.35,7.97c0.27,0.1,0.52,0.25,0.71,0.45l1.91,1.91c0.1,0.1,0.2,0.23,0.28,0.35c2.31,3.18,1.73,5.95,0,8.48 c0.08,0.05,0.15,0.12,0.23,0.2l1.91,1.91c0.1,0.1,0.2,0.23,0.28,0.35c4.44,6.07-0.85,11.22-5.1,15.38l-1.1,1.1l-4.74,4.97 l-0.15,0.15c-4.34,3.94-8.65,4.99-13.62,6.2c-0.83,0.2-1.68,0.42-2.84,0.71c-0.03,0-0.05,0.02-0.08,0.02 c-2.69,0.73-5.14,0.91-7.33,0.52c-2.23-0.4-4.16-1.4-5.77-2.98L2.52,103.15c-1.68-1.61-2.24-3.61-1.78-5.97 c0.37-1.9,1.46-3.99,3.19-6.25l4.42-25.04v-0.1c0.04-0.31,0.1-0.66,0.17-1.04L0,56.23L56.23,0l32.24,32.24L55.14,65.57L55.14,65.57 z"
            />
          </g>
        </svg>`;case o.ICON_NAMES["save-plant"]:return t.html`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="${this.size}"
          height="${this.size}"
          part="icon"
          stroke-width="${this.strokeWidth}"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 401.74"
        >
          <path
            fill="#338032"
            d="m300.6 111.5.12-.7L407 68.91l-97.61 56.01c16.2 15.61 35.17 23.82 56.66 25.24 44.33 2.92 85.2-16.8 112.55-51.1 5.18-6.49 9.68-13.73 13.64-21.31 4.8-9.18 21.99-40.1 19.52-47.47-3.64-10.79-54.25-18.23-65.81-19.81-60.14-8.24-133.67 1.74-149.99 72.47-.79 3.45-.96 6.98-.68 10.53l-3.39 2.18-3.21-2.34c.6-2.47.92-4.97.86-7.5C288.05 24.83 229.2 4.2 178.3.83c-9.8-.64-52.71-3.08-57.52 5.19-3.29 5.65 5.65 34.01 8.04 42.38 1.98 6.9 4.46 13.63 7.63 19.85 16.72 32.85 47.06 56.01 84.04 61.07 17.93 2.46 34.93-1.1 50.92-11.21l-70.92-62.59 76.57 49.92-.01.54c5.78 20.18 5.14 41.58.08 65.68 9.43-4.27 21.02-4.34 25.52 1.18l.62-.16c-5.15-20.22-9.06-41.71-2.67-61.18z"
          />
          <path
            fill="#432A16"
            d="M398.87 223.11c-13.39-24-45.79-31.44-68.52-19.34 10.5-29.11-11.79-35.28-27.7-30.93-7.97-9.81-38.35-1.98-39.23 15.7-29.66-20.02-58.61-9.98-67.47 12.82 6.02 2.38 12.01 5.1 17.96 8.09 12.58 6.31 24.75 13.65 36.73 21.44l44.2 1.07c10.84.84 20.36 5.02 27.42 11.11 9.84 1.08 19.48 1.92 28.7 2.42l47.91-22.38z"
          />
          <path
            fill="#2E2D2D"
            part="hand"
            d="M0 196.11h84.3l-3.89 168.01H0V196.11zm99.61 154.44 3.25-139.45 62.72 1.46c26.48 5.39 52.74 20.42 78.94 37.78l48.72 1.14c22.02 1.84 33.05 24.46 11.28 38.65-17.38 12.12-39.9 10.89-62.95 8.28-15.91-1.15-17.1 20.24-.48 20.7 5.76.58 12.07-.62 17.55-.5 28.83.65 52.71-4.31 67.78-26.75l7.7-16.88 73.31-34.25c36.54-11.09 61.42 27.44 34.09 53.2-53.37 36.97-107.94 67.14-163.58 91.24-40.56 23.39-80.52 21.63-119.97-2.8l-58.36-31.82z"
          />
        </svg>`}}render(){return this.icon?this.renderIcon(this.icon):t.html``}}c.styles=t.css`
    ${(0,t.unsafeCSS)(r())}
  `,h([(0,e.property)()],c.prototype,"icon",void 0),h([(0,e.property)()],c.prototype,"size",void 0),h([(0,e.property)()],c.prototype,"strokeWidth",void 0),h([(0,e.property)()],c.prototype,"fill",void 0),l.y.define(n,c)})()})();