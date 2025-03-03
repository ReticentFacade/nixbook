/*! For license information please see index.js.LICENSE.txt */
(()=>{var __webpack_modules__={"../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/learning-session-card/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.wh-loading-skeleton {\n  color: transparent;\n  opacity: 0.8;\n  animation: 1.25s linear 0s infinite normal none running loadingBlinking;\n}\n\n@keyframes loadingBlinking {\n  0% {\n    background: hsla(0, 0%, 55%, 0.15);\n  }\n  70% {\n    background: hsla(202, 12%, 30%, 0.15);\n  }\n  100% {\n    background: hsla(205, 25%, 55%, 0.15);\n  }\n}\n.flex {\n  display: flex;\n}\n\n.flex-1 {\n  flex: 1;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n@media screen and (min-width: 768px) {\n  .sm\\\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .md\\\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .lg\\\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n.flex-center {\n  justify-content: center;\n  align-items: center;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.m-1 {\n  margin: 4px;\n}\n\n.m-2 {\n  margin: 8px;\n}\n\n.m-3 {\n  margin: 12px;\n}\n\n.m-4 {\n  margin: 16px;\n}\n\n.m-5 {\n  margin: 20px;\n}\n\n.mt-0 {\n  margin-top: 0;\n}\n\n.mt-0\\\\.5 {\n  margin-top: 2px;\n}\n\n.mt-1 {\n  margin-top: 4px;\n}\n\n.mt-2 {\n  margin-top: 8px;\n}\n\n.mt-3 {\n  margin-top: 12px;\n}\n\n.mt-4 {\n  margin-top: 16px;\n}\n\n.mt-5 {\n  margin-top: 20px;\n}\n\n.mt-8 {\n  margin-top: 32px;\n}\n\n.my-8 {\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n\n.mb-0 {\n  margin-bottom: 0;\n}\n\n.mb-1 {\n  margin-bottom: 4px;\n}\n\n.mb-2 {\n  margin-bottom: 8px;\n}\n\n.mb-3 {\n  margin-bottom: 12px;\n}\n\n.mb-4 {\n  margin-bottom: 16px;\n}\n\n.mb-5 {\n  margin-bottom: 20px;\n}\n\n.mb-8 {\n  margin-bottom: 32px;\n}\n\n.ml-0 {\n  margin-left: 0;\n}\n\n.ml-1 {\n  margin-left: 4px;\n}\n\n.ml-2 {\n  margin-left: 8px;\n}\n\n.ml-3 {\n  margin-left: 12px;\n}\n\n.ml-4 {\n  margin-left: 16px;\n}\n\n.ml-5 {\n  margin-left: 20px;\n}\n\n.mr-0 {\n  margin-right: 0;\n}\n\n.mr-1 {\n  margin-right: 4px;\n}\n\n.mr-2 {\n  margin-right: 8px;\n}\n\n.mr-3 {\n  margin-right: 12px;\n}\n\n.mr-4 {\n  margin-right: 16px;\n}\n\n.mr-5 {\n  margin-right: 20px;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.p-1 {\n  padding: 4px;\n}\n\n.p-2 {\n  padding: 8px;\n}\n\n.p-3 {\n  padding: 12px;\n}\n\n.p-4 {\n  padding: 16px;\n}\n\n.p-5 {\n  padding: 20px;\n}\n\n.pt-0 {\n  padding-top: 0;\n}\n\n.pt-1 {\n  padding-top: 4px;\n}\n\n.pt-2 {\n  padding-top: 8px;\n}\n\n.pt-3 {\n  padding-top: 12px;\n}\n\n.pt-4 {\n  padding-top: 16px;\n}\n\n.pt-5 {\n  padding-top: 20px;\n}\n\n.pb-0 {\n  padding-bottom: 0;\n}\n\n.pb-1 {\n  padding-bottom: 4px;\n}\n\n.pb-2 {\n  padding-bottom: 8px;\n}\n\n.pb-3 {\n  padding-bottom: 12px;\n}\n\n.pb-4 {\n  padding-bottom: 16px;\n}\n\n.pb-5 {\n  padding-bottom: 20px;\n}\n\n.pl-0 {\n  padding-left: 0;\n}\n\n.pl-1 {\n  padding-left: 4px;\n}\n\n.pl-2 {\n  padding-left: 8px;\n}\n\n.pl-3 {\n  padding-left: 12px;\n}\n\n.pl-4 {\n  padding-left: 16px;\n}\n\n.pl-5 {\n  padding-left: 20px;\n}\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.pr-1 {\n  padding-right: 4px;\n}\n\n.pr-2 {\n  padding-right: 8px;\n}\n\n.pr-3 {\n  padding-right: 12px;\n}\n\n.pr-4 {\n  padding-right: 16px;\n}\n\n.pr-5 {\n  padding-right: 20px;\n}\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.my-1 {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.my-2 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.my-3 {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\n.my-4 {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.my-5 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.mx-4 {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.mx-8 {\n  margin-left: 32px;\n  margin-right: 32px;\n}\n\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n.py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.py-5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.px-5 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.grid {\n  display: grid;\n}\n\n@media screen and (min-width: 768px) {\n  .sm-grid {\n    display: grid;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .md-grid {\n    display: grid;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .lg-grid {\n    display: grid;\n  }\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.grid-cols-3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.grid-cols-4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.grid-cols-6 {\n  grid-template-columns: repeat(6, 1fr);\n}\n\n.grid-cols-12 {\n  grid-template-columns: repeat(12, 1fr);\n}\n\n@media screen and (min-width: 768px) {\n  .sm-grid-cols-2 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sm-grid-cols-3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .sm-grid-cols-4 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .sm-grid-cols-6 {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  .sm-grid-cols-12 {\n    grid-template-columns: repeat(12, 1fr);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .md-grid-cols-2 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .md-grid-cols-3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .md-grid-cols-4 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .md-grid-cols-6 {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  .md-grid-cols-12 {\n    grid-template-columns: repeat(12, 1fr);\n  }\n}\n@media screen and (min-width: 1280px) {\n  .lg-grid-cols-2 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .lg-grid-cols-3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .lg-grid-cols-4 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .lg-grid-cols-6 {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  .lg-grid-cols-12 {\n    grid-template-columns: repeat(12, 1fr);\n  }\n}\n.gap-1 {\n  gap: 4px;\n}\n\n.gap-2 {\n  gap: 8px;\n}\n\n.gap-3 {\n  gap: 12px;\n}\n\n.gap-4 {\n  gap: 16px;\n}\n\n.gap-5 {\n  gap: 20px;\n}\n\n.gap-8 {\n  gap: 32px;\n}\n\n@media screen and (min-width: 768px) {\n  .sm-gap-1 {\n    gap: 4px;\n  }\n  .sm-gap-2 {\n    gap: 8px;\n  }\n  .sm-gap-3 {\n    gap: 12px;\n  }\n  .sm-gap-4 {\n    gap: 16px;\n  }\n  .sm-gap-5 {\n    gap: 20px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .md-gap-1 {\n    gap: 4px;\n  }\n  .md-gap-2 {\n    gap: 8px;\n  }\n  .md-gap-3 {\n    gap: 12px;\n  }\n  .md-gap-4 {\n    gap: 16px;\n  }\n  .md-gap-5 {\n    gap: 20px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .lg-gap-1 {\n    gap: 4px;\n  }\n  .lg-gap-2 {\n    gap: 8px;\n  }\n  .lg-gap-3 {\n    gap: 12px;\n  }\n  .lg-gap-4 {\n    gap: 16px;\n  }\n  .lg-gap-5 {\n    gap: 20px;\n  }\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n\n.col-span-1 {\n  grid-column: span 1/span 1;\n}\n\n.col-span-2 {\n  grid-column: span 2/span 2;\n}\n\n.col-span-3 {\n  grid-column: span 3/span 3;\n}\n\n.col-span-4 {\n  grid-column: span 4/span 4;\n}\n\n.col-span-6 {\n  grid-column: span 6/span 6;\n}\n\n.col-span-8 {\n  grid-column: span 8/span 8;\n}\n\n.col-span-12 {\n  grid-column: span 12/span 12;\n}\n\n@media screen and (min-width: 768px) {\n  .sm-col-span-1 {\n    grid-column: span 1/span 1;\n  }\n  .sm-col-span-2 {\n    grid-column: span 2/span 2;\n  }\n  .sm-col-span-3 {\n    grid-column: span 3/span 3;\n  }\n  .sm-col-span-4 {\n    grid-column: span 4/span 4;\n  }\n  .sm-col-span-6 {\n    grid-column: span 6/span 6;\n  }\n  .sm-col-span-8 {\n    grid-column: span 8/span 8;\n  }\n  .sm-col-span-12 {\n    grid-column: span 12/span 12;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .md-col-span-1 {\n    grid-column: span 1/span 1;\n  }\n  .md-col-span-2 {\n    grid-column: span 2/span 2;\n  }\n  .md-col-span-3 {\n    grid-column: span 3/span 3;\n  }\n  .md-col-span-4 {\n    grid-column: span 4/span 4;\n  }\n  .md-col-span-6 {\n    grid-column: span 6/span 6;\n  }\n  .md-col-span-8 {\n    grid-column: span 8/span 8;\n  }\n  .md-col-span-12 {\n    grid-column: span 12/span 12;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .lg-col-span-1 {\n    grid-column: span 1/span 1;\n  }\n  .lg-col-span-2 {\n    grid-column: span 2/span 2;\n  }\n  .lg-col-span-3 {\n    grid-column: span 3/span 3;\n  }\n  .lg-col-span-4 {\n    grid-column: span 4/span 4;\n  }\n  .lg-col-span-6 {\n    grid-column: span 6/span 6;\n  }\n  .lg-col-span-8 {\n    grid-column: span 8/span 8;\n  }\n  .lg-col-span-12 {\n    grid-column: span 12/span 12;\n  }\n}\n.text-xs {\n  font-size: 10px;\n}\n\n.text-sm {\n  font-size: 12px;\n}\n\n.text-md {\n  font-size: 16px;\n}\n\n.text-lg {\n  font-size: 20px;\n}\n\n.text-xl {\n  font-size: 24px;\n}\n\n.text-2xl {\n  font-size: 32px;\n}\n\n.text-light {\n  color: var(--wh-text-light);\n}\n\n.text-lighter {\n  color: var(--wh-text-lighter);\n}\n\n.text-lightest {\n  color: var(--wh-text-lightest);\n}\n\n.text-strong {\n  color: var(--wh-text-strong);\n}\n\n.text-stronger {\n  color: var(--wh-text-stronger);\n}\n\n.text-strongest {\n  color: var(--wh-text-strongest);\n}\n\n.text-hover {\n  color: var(--wh-text-hover);\n}\n\n.text {\n  color: var(--wh-text);\n}\n\n.w-full {\n  width: 100%;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n@media screen and (min-width: 768px) {\n  .sm-w-full {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .sm-w-fit {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n}\n\n[dir="ltr"] .text-start {\n  text-align: left;\n}\n\n[dir="rtl"] .text-start {\n  text-align: right;\n}\n\n[dir="ltr"] .text-end {\n  text-align: right;\n}\n\n[dir="rtl"] .text-end {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.shadow {\n  box-shadow: var(--wh-shadow);\n}\n\n.border {\n  border: 1px solid var(--wh-border-base);\n}\n.border:hover {\n  border-color: var(--wh-border-base-hover);\n}\n\n.border-strong {\n  border: 1px solid var(--wh-border-base-strong);\n}\n.border-strong:hover {\n  border-color: var(--wh-border-base-strong-hover);\n}\n\n.rounded {\n  border-radius: 4px;\n}\n\n.rounded-md {\n  border-radius: 8px;\n}\n\n.rounded-lg {\n  border-radius: 12px;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n@media (min-width: 600px) {\n  .overflow-auto::-webkit-scrollbar {\n    width: 6px;\n  }\n  .overflow-auto::-webkit-scrollbar-track {\n    background: var(--wh-bg-front-strong);\n  }\n  .overflow-auto::-webkit-scrollbar-thumb {\n    background: var(--wh-border-front-strong);\n    box-shadow: var(--wh-shadow);\n    border-radius: 10px;\n  }\n  .overflow-auto::-webkit-scrollbar-thumb:hover {\n    background: var(--wh-border-front-strong);\n  }\n}\n\n.btn-no-style {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n@media screen and (min-width: 768px) {\n  .sm\\\\:order-0 {\n    order: 0;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .sm\\\\:order-1 {\n    order: 1;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .sm\\\\:order-2 {\n    order: 2;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .md\\\\:order-0 {\n    order: 0;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .md\\\\:order-1 {\n    order: 1;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .md\\\\:order-2 {\n    order: 2;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .lg\\\\:order-0 {\n    order: 0;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .lg\\\\:order-1 {\n    order: 1;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .lg\\\\:order-2 {\n    order: 2;\n  }\n}\n\n.block {\n  display: block;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.font-bold {\n  font-weight: 600;\n}\n\n.font-semibold {\n  font-weight: 500;\n}\n\n.box-border {\n  box-sizing: border-box;\n}\n\n.relative {\n  position: relative;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n\n.max-w-screen-sm {\n  max-width: 640px;\n}\n\n.max-w-screen-md {\n  max-width: 768px;\n}\n\n.max-w-screen-lg {\n  max-width: 1024px;\n}\n\n.max-w-screen-xl {\n  max-width: 1280px;\n}\n\n.max-w-screen-2xl {\n  max-width: 1536px;\n}\n\n.wh-loading-skeleton {\n  color: transparent;\n  opacity: 0.8;\n  animation: 1.25s linear 0s infinite normal none running loadingBlinking;\n}\n\n@keyframes loadingBlinking {\n  0% {\n    background: hsla(0, 0%, 55%, 0.15);\n  }\n  70% {\n    background: hsla(202, 12%, 30%, 0.15);\n  }\n  100% {\n    background: hsla(205, 25%, 55%, 0.15);\n  }\n}\n:host {\n  font-family: var(--font-family);\n  display: flex;\n  flex-direction: column;\n  color: var(--wh-text);\n  width: 100%;\n  box-sizing: border-box;\n  line-height: 1;\n  --wh-font-size: 16px;\n  height: 100%;\n}\n\n.learning-session-card {\n  position: relative;\n  cursor: pointer;\n}\n.learning-session-card:hover {\n  color: var(--wh-text-strong);\n}\n@media screen and (max-width: 767px) {\n  .learning-session-card {\n    flex: 1;\n  }\n}\n@media screen and (min-width: 768px) {\n  .learning-session-card {\n    height: 300px;\n  }\n}\n\nheader {\n  border-bottom: 1px solid var(--wh-border-base);\n}\n\nmain {\n  padding: 8px 8px;\n}\n\n.bookmark-preview {\n  display: block;\n  padding-bottom: 8px;\n  min-height: 80px;\n}\n@media screen and (min-width: 768px) {\n  .bookmark-preview {\n    --wh-max-width-title: 400px;\n  }\n}\n\n.action-buttons {\n  padding: 12px 0 20px 0;\n  width: 100%;\n  display: flex;\n}\n@media screen and (min-width: 768px) {\n  .action-buttons {\n    gap: 8px;\n  }\n}\n.action-buttons button {\n  box-sizing: border-box;\n  background-color: var(--wh-bg-base);\n  color: var(--wh-text-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  cursor: pointer;\n  padding: 16px 4px;\n  flex: 1;\n  border: none;\n}\n.action-buttons button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media screen and (min-width: 768px) {\n  .action-buttons button {\n    transition: background-color 0.1s ease-in-out;\n    flex: none;\n    min-width: 130px;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: 10px 16px;\n    border-radius: 4px;\n    border: 1px solid var(--wh-border-base);\n  }\n}\n.action-buttons button.know-it-btn {\n  background-color: #08b474;\n  color: white;\n  fill: white;\n  order: 2;\n}\n@media screen and (min-width: 768px) {\n  .action-buttons button.know-it-btn {\n    order: 0;\n  }\n}\n.action-buttons button.know-it-btn:hover {\n  background-color: #079b64;\n}\n.action-buttons button.dont-know-it-btn {\n  background-color: #db4646;\n  color: var(--wh-gray-100);\n  order: 1;\n}\n.action-buttons button.dont-know-it-btn:hover {\n  color: white;\n  background-color: #c43f3f;\n}\n.action-buttons button.discard-btn {\n  background-color: transparent;\n  border: 1px solid var(--wh-border-base);\n  order: 0;\n}\n@media screen and (min-width: 768px) {\n  .action-buttons button.discard-btn {\n    order: 2;\n  }\n}\n.action-buttons button.discard-btn:hover {\n  background-color: var(--wh-bg-base-hover);\n}`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/components/learning-session-card/index.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js')},"../../node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://@webhighlights/shared-components/../../node_modules/css-loader/dist/runtime/api.js?')},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://@webhighlights/shared-components/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?")},"./src/components/learning-session-card/index.scss":(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n        var result = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/learning-session-card/index.scss");\n\n        if (result && result.__esModule) {\n            result = result.default;\n        }\n\n        if (typeof result === "string") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/components/learning-session-card/index.scss?')},"./src/components/learning-session-card/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "lit");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "lit/decorators.js");\n/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webhighlights/shared-lib */ "@webhighlights/shared-lib");\n/* harmony import */ var _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webhighlights_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webhighlights-element */ "./src/webhighlights-element/index.ts");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/components/learning-session-card/index.scss");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst TEST_PAGE = _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.TEST_PAGES.LearningSessionCard;\nconst CUSTOM_ELEMENT_NAME = \'webhighlights-learning-session-card\';\nclass LearningSessionCard extends _webhighlights_element__WEBPACK_IMPORTED_MODULE_3__.WebHighlightsElement {\n    constructor() {\n        super(...arguments);\n        this.bookmark = null;\n        this.learningItemNew = null;\n    }\n    get learningMark() {\n        return this.props.learningMark;\n    }\n    get bookmarkProps() {\n        return {\n            bookmark: this.bookmark,\n            loading: !!!this.bookmark,\n            hideAmountInfo: true,\n            type: \'list\',\n            size: \'large\',\n        };\n    }\n    get learningConfidenceProps() {\n        return {\n            confidence: (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.calculateConfidence)(this.learningMark.learningItem),\n            hideLabel: true,\n        };\n    }\n    updated(_changedProperties) {\n        var _a, _b, _c;\n        if (!this.props) {\n            throw new Error(`No \'props\' provided to \'${CUSTOM_ELEMENT_NAME}\' props`);\n        }\n        if (_changedProperties.has(\'props\') &&\n            ((_a = this.props.learningMark) === null || _a === void 0 ? void 0 : _a._id) !==\n                ((_c = (_b = _changedProperties.get(\'props\')) === null || _b === void 0 ? void 0 : _b.learningMark) === null || _c === void 0 ? void 0 : _c._id)) {\n            void this.loadData();\n        }\n    }\n    loadData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            // const now = Date.now();\n            this.learningItemNew = null;\n            this.bookmark = null;\n            this.bookmark = yield (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.useContext)().db.getBookmark({\n                _id: this.learningMark._bookmark,\n            });\n            if (!this.bookmark && this.learningMark._id) {\n                yield (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.deleteMark)({ _id: this.learningMark._id });\n                this.onNextItem({ action: \'know\' });\n            }\n            // console.log(`loaded in ${Date.now() - now}ms`);\n        });\n    }\n    onBookmarkPreviewClick() {\n        if (!this.bookmark) {\n            return;\n        }\n        const bookmarkDetailsProps = {\n            bookmark: this.bookmark,\n            appConfig: (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.useContext)().appConfig,\n            httpFacade: (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.useContext)().httpFacade,\n            focusedMarkId: this.learningMark._id,\n        };\n        _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.notifications.dispatch(\'togglePopoverInLearningDashboard\', {\n            detail: bookmarkDetailsProps,\n        });\n    }\n    onKnowItClick() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.onLearningItemRated(_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.PERFORMANCE_RATING.I_KNOW);\n        });\n    }\n    onDontKnowItClick() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.onLearningItemRated(_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.PERFORMANCE_RATING.DONT_KNOW);\n        });\n    }\n    onDisardClick() {\n        return __awaiter(this, void 0, void 0, function* () {\n            var _a, _b;\n            (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.showDiscardedLearningMarkToast)();\n            const newLearningItem = (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.resolveNewLearningItem)(this.learningMark, {\n                disableLearning: true,\n                lastLearned: Date.now(),\n                lastLearnedHistory: [\n                    ...((_b = (_a = this.learningMark.learningItem) === null || _a === void 0 ? void 0 : _a.lastLearnedHistory) !== null && _b !== void 0 ? _b : []),\n                    Date.now(),\n                ],\n            });\n            yield this.updateLearningItem(newLearningItem);\n            this.onNextItem({ delay: 0, action: \'discard\' });\n        });\n    }\n    onLearningItemRated(rating) {\n        return __awaiter(this, void 0, void 0, function* () {\n            var _a;\n            const newLearningItem = (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.calculateNewLearningItem)((_a = this.learningMark.learningItem) !== null && _a !== void 0 ? _a : _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.INITIAL_LEARNING_ITEM, rating);\n            if (!(0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.isMobile)()) {\n                // This will start the confidence animation\n                this.learningItemNew = newLearningItem;\n            }\n            else {\n                (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.showToast)({\n                    content: `Next review in ${(0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.daysBetweenTwoMilliDates)(newLearningItem.nextReviewInMillis, Date.now())} days 📆`,\n                    variant: rating === _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.PERFORMANCE_RATING.I_KNOW ? \'success\' : \'error\',\n                    uniqueId: \'next-review-on\',\n                });\n            }\n            yield this.updateLearningItem(newLearningItem);\n            this.onNextItem({\n                action: rating === _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.PERFORMANCE_RATING.I_KNOW ? \'know\' : \'dontKnow\',\n            });\n        });\n    }\n    updateLearningItem(learningItem) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.updateMark)({ _id: this.learningMark._id, learningItem }, { keepModifiedAtTheSame: true });\n        });\n    }\n    onNextItem({ action, delay = (0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.isMobile)() ? 0 : _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.LEARNING_TRANSITION_DURATION_IN_MS, }) {\n        setTimeout(() => {\n            const nextItemEvent = new CustomEvent(\'nextItem\', {\n                detail: {\n                    mark: this.learningMark,\n                    rating: _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.PERFORMANCE_RATING.I_KNOW,\n                    action,\n                },\n            });\n            this.dispatchEvent(nextItemEvent);\n        }, delay);\n    }\n    render() {\n        var _a;\n        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `\n      <section\n        part="card"\n        @click=${this.onBookmarkPreviewClick}\n        class="learning-session-card shadow p-2 rounded flex flex-col gap-2"\n      >\n        <div class="flex flex-col gap-2 overflow-hidden h-full">\n          <header class="flex">\n            ${this.bookmarkProps\n            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<webhighlights-bookmark-preview\n                  class="bookmark-preview flex-1"\n                  .props=${this.bookmarkProps}\n                ></webhighlights-bookmark-preview>`\n            : (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<div class="bookmark-skeleton">\n                  <div class="wh-loading-skeleton"></div>\n                </div>`}\n          </header>\n          <div class="flex items-center text-sm text-light p-1">\n            <webhighlights-learning-confidence-bar\n              class="fade-in"\n              .learningItem=${(_a = this.learningMark.learningItem) !== null && _a !== void 0 ? _a : _webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.INITIAL_LEARNING_ITEM}\n              .learningItemNew=${this.learningItemNew}\n            ></webhighlights-learning-confidence-bar>\n          </div>\n          <main class="overflow-auto flex flex-col gap-2">\n            <webhighlights-mark-element\n              .mark=${this.learningMark}\n              .readOnly=${true}\n            ></webhighlights-mark-element>\n          </main>\n        </div>\n      </section>\n      <div class="action-buttons">\n        <button\n          @click=${this.onKnowItClick}\n          class="know-it-btn"\n          data-testid=${TEST_PAGE.TEST_IDS.KNOW_IT_BTN}\n          ?disabled=${!!this.learningItemNew}\n        >\n          <webhighlights-icon\n            icon=${_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.ICON_NAMES[\'thumbs-up\']}\n            size="14"\n          ></webhighlights-icon>\n          Know it\n        </button>\n        <button\n          @click=${this.onDontKnowItClick}\n          class="dont-know-it-btn"\n          data-testid=${TEST_PAGE.TEST_IDS.DONT_KNOW_IT_BTN}\n          ?disabled=${!!this.learningItemNew}\n        >\n          <webhighlights-icon\n            icon=${_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.ICON_NAMES[\'thumbs-down\']}\n            size="14"\n          ></webhighlights-icon>\n          Don\'t know\n        </button>\n        <button\n          @click=${this.onDisardClick}\n          class="discard-btn"\n          data-testid=${TEST_PAGE.TEST_IDS.DISCARD_BTN}\n          ?disabled=${!!this.learningItemNew}\n        >\n          <webhighlights-icon\n            icon=${_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.ICON_NAMES[\'delete-x\']}\n            size="14"\n          ></webhighlights-icon>\n          Discard\n        </button>\n      </div>\n    `;\n    }\n}\nLearningSessionCard.styles = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `\n    ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)((_index_scss__WEBPACK_IMPORTED_MODULE_4___default()))}\n  `;\n__decorate([\n    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })\n], LearningSessionCard.prototype, "props", void 0);\n__decorate([\n    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()\n], LearningSessionCard.prototype, "bookmark", void 0);\n__decorate([\n    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()\n], LearningSessionCard.prototype, "learningItemNew", void 0);\nif (!(0,_webhighlights_shared_lib__WEBPACK_IMPORTED_MODULE_2__.customElementIsRegistered)(CUSTOM_ELEMENT_NAME)) {\n    customElements.define(CUSTOM_ELEMENT_NAME, LearningSessionCard);\n}\n\n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/components/learning-session-card/index.ts?')},"./src/webhighlights-element/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebHighlightsElement: () => (/* binding */ WebHighlightsElement)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "lit");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lit__WEBPACK_IMPORTED_MODULE_0__);\n\nclass WebHighlightsElement extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\n    constructor() {\n        super();\n    }\n}\n\n\n//# sourceURL=webpack://@webhighlights/shared-components/./src/webhighlights-element/index.ts?')},"lit/decorators.js":n=>{"use strict";n.exports=LitDecoratorsExternal},lit:n=>{"use strict";n.exports=LitExternal},"@webhighlights/shared-lib":n=>{"use strict";n.exports=WebHighlightsSharedLibExternal}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/components/learning-session-card/index.ts")})();