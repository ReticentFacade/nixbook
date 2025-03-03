/*! For license information please see index.js.LICENSE.txt */
(()=>{var __webpack_modules__={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/learning-reminder-toggle/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 6px;\n       column-gap: 6px;\n  font-size: 10px;\n  color: var(--wh-text-light);\n}\n\nwebhighlights-toggle-button {\n  --width: 9px;\n  --height: 4.5px;\n}\n\n.show-learning-teaser-checkbox {\n  margin: 0;\n}`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/components/learning-reminder-toggle/index.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js')},"../../node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://@webhighlights/shared-components/../../node_modules/css-loader/dist/runtime/api.js?')},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://@webhighlights/shared-components/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?")},"./src/components/learning-reminder-toggle/index.scss":(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n        var result = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/learning-reminder-toggle/index.scss");\n\n        if (result && result.__esModule) {\n            result = result.default;\n        }\n\n        if (typeof result === "string") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/components/learning-reminder-toggle/index.scss?')},"./src/components/learning-reminder-toggle/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "lit");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/learning-reminder-toggle/index.scss");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webhighlights/shared-lib */ "@webhighlights/shared-lib");\n/* harmony import */ var _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/decorators.js */ "lit/decorators.js");\n/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webhighlights_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webhighlights-element */ "./src/webhighlights-element/index.ts");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst TEST_PAGE = _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.TEST_PAGES.LearningReminderToggle;\nconst CUSTOM_ELEMENT_NAME = \'webhighlights-learning-reminder-toggle\';\nclass LearningReminderToggle extends _webhighlights_element__WEBPACK_IMPORTED_MODULE_4__.WebHighlightsElement {\n    firstUpdated() {\n        void this.loadData();\n    }\n    loadData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const chromeSettings = yield (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.useContext)().db.getChromeSettings();\n            this.showLearningTeaser = !!chromeSettings.showLearningTeaser;\n        });\n    }\n    onCheckboxChange(event) {\n        const newShowLearningTeaser = event.target.checked;\n        this.showLearningTeaser = newShowLearningTeaser;\n        _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.notifications.dispatch(\'chromeSettingsChanged\', {\n            detail: { showLearningTeaser: newShowLearningTeaser },\n        });\n        this.dispatchEvent(new CustomEvent(\'changed\', {\n            bubbles: true,\n            detail: newShowLearningTeaser,\n        }));\n    }\n    render() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `\n      <input\n        type="checkbox"\n        class="show-learning-teaser-checkbox"\n        id="show-learning-teaser-checkbox"\n        ?checked=${this.showLearningTeaser}\n        @change=${this.onCheckboxChange}\n      />\n      <span\n        ><webhighlights-icon\n          icon="${_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.ICON_NAMES.bell}"\n          size="14"\n        ></webhighlights-icon\n      ></span>\n    `;\n    }\n}\nLearningReminderToggle.styles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `\n    ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)((_index_scss__WEBPACK_IMPORTED_MODULE_1___default()))}\n  `;\n__decorate([\n    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()\n], LearningReminderToggle.prototype, "showLearningTeaser", void 0);\nif (!(0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.customElementIsRegistered)(CUSTOM_ELEMENT_NAME)) {\n    customElements.define(CUSTOM_ELEMENT_NAME, LearningReminderToggle);\n}\n\n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/components/learning-reminder-toggle/index.ts?')},"./src/webhighlights-element/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebHighlightsElement: () => (/* binding */ WebHighlightsElement)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "lit");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lit__WEBPACK_IMPORTED_MODULE_0__);\n\nclass WebHighlightsElement extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\n    constructor() {\n        super();\n    }\n}\n\n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/webhighlights-element/index.ts?')},"lit/decorators.js":e=>{"use strict";e.exports=LitDecoratorsExternal},lit:e=>{"use strict";e.exports=LitExternal},"@webhighlights/shared-lib":e=>{"use strict";e.exports=WebHighlightsSharedLibExternal}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/components/learning-reminder-toggle/index.ts")})();