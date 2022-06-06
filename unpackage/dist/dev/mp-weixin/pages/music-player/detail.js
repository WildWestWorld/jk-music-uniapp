(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/music-player/detail"],{

/***/ 199:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue?vue&type=template&id=4b58372e&filter-modules=eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=4b58372e&filter-modules=eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19& */ 200);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 200:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue?vue&type=template&id=4b58372e&filter-modules=eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 85:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/test002/miniprogram02_uni/main.js?{"page":"pages%2Fmusic-player%2Fdetail"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/music-player/detail.vue */ 86));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 86:
/*!**********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=4b58372e&filter-modules=eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19& */ 199);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 89);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=scss& */ 91);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 27);
/* harmony import */ var _map_wxs_vue_type_custom_index_0_blockType_script_issuerPath_C_3A_5CUsers_5CAdministrator_5CDesktop_5Ctest002_5Cminiprogram02_uni_5Cpages_5Cmusic_player_5Cdetail_vue_module_map_lang_wxs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.wxs?vue&type=custom&index=0&blockType=script&issuerPath=C%3A%5CUsers%5CAdministrator%5CDesktop%5Ctest002%5Cminiprogram02_uni%5Cpages%5Cmusic-player%5Cdetail.vue&module=map&lang=wxs */ 93);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_4b58372e_filter_modules_eyJtYXAiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MTAyMjAsImF0dHJzIjp7Im1vZHVsZSI6Im1hcCIsImxhbmciOiJ3eHMiLCJzcmMiOiIuL21hcC53eHMifSwiZW5kIjoxMDIyMH19___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* custom blocks */

if (typeof _map_wxs_vue_type_custom_index_0_blockType_script_issuerPath_C_3A_5CUsers_5CAdministrator_5CDesktop_5Ctest002_5Cminiprogram02_uni_5Cpages_5Cmusic_player_5Cdetail_vue_module_map_lang_wxs__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_map_wxs_vue_type_custom_index_0_blockType_script_issuerPath_C_3A_5CUsers_5CAdministrator_5CDesktop_5Ctest002_5Cminiprogram02_uni_5Cpages_5Cmusic_player_5Cdetail_vue_module_map_lang_wxs__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

component.options.__file = "pages/music-player/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 90);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 90:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














































































































































































































var _request = __webpack_require__(/*! ../../api/request */ 20);
var _music = __webpack_require__(/*! ../../api/music */ 19);
var _index = __webpack_require__(/*! ../../store/index */ 13);
var _moment = _interopRequireDefault(__webpack_require__(/*! @/miniprogram_npm/moment */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var JKNavigator = function JKNavigator() {__webpack_require__.e(/*! require.ensure | components/common/JKNavigator/index */ "components/common/JKNavigator/index").then((function () {return resolve(__webpack_require__(/*! ../../components/common/JKNavigator/index */ 164));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var JKNavigatorV2 = function JKNavigatorV2() {__webpack_require__.e(/*! require.ensure | components/common/JKNavigatorV2/index */ "components/common/JKNavigatorV2/index").then((function () {return resolve(__webpack_require__(/*! ../../components/common/JKNavigatorV2/index */ 187));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
var app = getApp();
var playModeNames = ['order', 'repeat', 'random']; //！！！！！！！！！！！
// 该页面的大部分的逻辑代码都转移到了store/plaer-store了，留下来的都是原稿
var _default =
{
  components: {
    JKNavigator: JKNavigator,
    JKNavigatorV2: JKNavigatorV2 },

  data: function data() {
    return {
      value: 0,
      music: null,
      isPlay: false,
      totalTime: 0,
      formatTime: '00:00',
      currentTime: '00:00',
      canPlay: false,
      percent: 0,
      showLrc: false,
      lycArray: [],
      currentLycIndex: 0,
      lycScrollTop: 0,
      musicSrc: null,
      musicName: null,
      musicId: null,
      toLyc: '',
      showMusicList: false,
      contentHeight: 0,

      //需要下移的高度
      contentTop: 0,

      deviceRadio: 0,
      isSliderDrag: false,
      playModeIndex: 0,
      playModeName: 'order',
      playSongList: [],
      playSongIndex: 0,
      toCurrentMusic: '',
      toView: '',
      id: '',
      url: '',
      showNavigator: false,


      navBoxHeight: 0,

      //导航栏的盒子高度
      statusBarHeight: 0,

      // 状态栏高度
      navMarginTop: 0,

      // 导航栏上边距/胶囊按钮的上边距
      navHeight: 0,

      // 导航栏高度
      navWidth: 0,

      // 导航栏宽度
      menuButtonRightPadding: 0,

      //进度条滑块的大小
      blockSize: 0 };

  },
  /**
      * 生命周期函数--监听页面加载
      */
  // 整体的业务逻辑已经转移到store里面的player-store文件里面去了
  onLoad: function onLoad(options) {
    // 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度

    this.calculateMenuAndStatusBar();


    // 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度











    // this.calculateMenuAndStatusBar()
    //获取播放模式
    var playModeIndex = uni.getStorageSync('playModeIndex');

    if (playModeIndex) {
      this.setData({
        playModeIndex: playModeIndex });

    } else {
      this.setData({
        playModeIndex: 0 });

      uni.setStorageSync('playModeIndex', 0);
      _index.playerStore.setState('playModeIndex', 0);
    } //监听和获取歌曲的信息


    this.watchPlayerStoreListener(); //计算页面容器的高度

    var info = uni.getSystemInfoSync(); //整个屏幕的高度

    var sreenHeight = app.globalData.sreenHeight || info.screenHeight; // 状态栏 + 胶囊按钮边距

    var navMarginTop = app.globalData.navMarginTop; //胶囊按钮的高度

    var navHeight = app.globalData.navHeight; //页面的高度

    var contentHeight = sreenHeight - navMarginTop - navHeight; //页面排除胶囊按钮后的高度

    var contentTop = navMarginTop + navHeight; //像素比

    var deviceRadio = app.globalData.deviceRadio;
    console.log(contentHeight, sreenHeight, navMarginTop, navHeight);
    this.setData({
      contentHeight: contentHeight,
      contentTop: contentTop,
      deviceRadio: deviceRadio });









    console.log(this.deviceRadio);
    console.log(options);
    var isNowPlayMusic = this.musicIsNowPlayMusic(options.id);
    console.log(isNowPlayMusic);

    if (isNowPlayMusic) {
      this.changeMusicIsPlay(true);
    }

    if (options.id) {
      console.log("/music/".concat(options.id)); // getMusicById(options.id).then(res=>{
      //   console.log(res)
      //   this.setData({
      //     music:res.data
      //   })

      console.log(this.music); //创建一个可以后台播放的audio 并且绑定到this上，这样我们就可以在任意位置调用该audio的方法和属性
      //上面的是我们以前使用的方法，现在我们使用Store里面的文件来引入一个backgroundAudioManager
      //这样就不用this.backgroundAudioManager 而是直接使用
      //修改：现在引入的方法并不好用该为原来的方法
      // this.backgroundAudioManager= wx.getBackgroundAudioManager()
      // this.backgroundAudioManager.stop();
      // this.backgroundAudioManager.src=this.data.music.file.url;
      // this.backgroundAudioManager.title=this.data.music.name
      //为了处理组件运行了一个歌曲，再运行时显示的长度是上一首歌曲的时间长度
      // if(appInstance.globalData.musicTotalTime=this.data.totalTime){
      //   this.loadDuration()
      // }
      //设置音乐的访问地址和名字和id
      // this.setData({
      //   musicSrc:this.data.music.file.url,
      //   musicName:this.data.music.name,
      //   musicId:this.data.music.id
      // })

      console.log(this.totalTime); //判断此时的页面是是否是我们之前播放的页面
      //音乐播放进度条的更新
      // this.musicProcessTimeUpdate()
      //音乐的更新状态函数
      // this.watchMusic()
      // this.musicOnEnd()
      //请求歌词数据
      // console.log(this.data.music.lyc.url)
      // getDIY(this.data.music.lyc.url).then((res)=>{
      //   let lyc=res.data
      //   lyc=parseLyric(lyc)
      //   console.log(lyc)
      //   this.setData({
      //     lycArray:lyc
      //   })
      // })
      // })
    } //用于掩饰进度条
    // setTimeout(()=>{
    //   setInterval(()=>{
    //     this.setData({
    //       value:this.data.value+1
    //     })
    //     // if(innerAudioContext.currentTime){
    //     // console.log(innerAudioContext.currentTime)
    //     // }
    //   },100)
    // },1000);
  },
  /**
      * 生命周期函数--监听页面初次渲染完成
      */
  onReady: function onReady() {},
  /**
                                   * 生命周期函数--监听页面显示
                                   */
  onShow: function onShow() {
    _index.playerStore.dispatch('saveMusicListIntoStorage');
  },
  /**
      * 生命周期函数--监听页面隐藏
      */
  onHide: function onHide() {},
  /**
                                 * 生命周期函数--监听页面卸载
                                 */
  onUnload: function onUnload() {
    //停止监听
    //     playerStore.offStates(["formatTime","lycArray","totalTime","currentLycIndex","lycScrollTop","toLyc","currentTime"],
    // //封装好的函数，就在watchPlayerStoreListener上面
    //     this.musicStateWatchFunciton
    //     );
    // playerStore.dispatch('saveMusicListIntoStorage')
  },
  /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
  onPullDownRefresh: function onPullDownRefresh() {},
  /**
                                                       * 页面上拉触底事件的处理函数
                                                       */
  onReachBottom: function onReachBottom() {},
  /**
                                               * 用户点击右上角分享
                                               */
  onShareAppMessage: function onShareAppMessage() {},
  methods: {


    // 自定义函数区

    //calculateMenuAndStatusBar用于获取和计算头部导航栏的宽度和高度的函数
    calculateMenuAndStatusBar: function calculateMenuAndStatusBar() {var _this = this;
      //利用 wx.getMenuButtonBoundingClientRect 得到胶囊按钮的坐标和高宽等信息
      var menuButtonInfo = uni.getMenuButtonBoundingClientRect(); //top是胶囊按钮的上坐标，right是胶囊按钮的下坐标
      //width,height是胶囊按钮的宽度和高度
      var
      top = menuButtonInfo.top,right = menuButtonInfo.right,width = menuButtonInfo.width,height = menuButtonInfo.height; // console.log(menuButtonInfo)
      //利用 wx.getSystemInfo方法获取到状态栏的高度，状态栏就是右上角的电池

      uni.getSystemInfo({
        success: function success(res) {
          //statusBarHeight就是状态栏的高度
          var statusBarHeight = res.statusBarHeight,screenWidth = res.screenWidth; //top:胶囊按钮的上坐标，上坐标是从页面顶部到胶囊按钮的顶部的距离
          console.log(res);
          //statusBarHeight就是状态栏的高度
          //两值相减就能得到他们的间距，也就是margin

          var margin = top - statusBarHeight; //getWindowInfo用于获取窗口的宽度，注意：需要小程序基础库版本不低于 2.21.3



          _this.setData({
            //statusBarHeight就是状态栏的高度
            statusBarHeight: statusBarHeight,
            //navHeight导航栏的总体高度，胶囊按钮高度+状态栏的高度+胶囊按钮边距
            navBoxHeight: height + statusBarHeight + margin * 2,
            //导航栏的margintop，就是状态栏的高度+状态栏和胶囊按钮的间距，其实就是胶囊按钮的上边距
            navMarginTop: statusBarHeight + margin,
            // 状态栏 + 胶囊按钮边距
            //导航栏文字和图标的高度
            navHeight: height,
            // 与胶囊按钮同高
            //right:胶囊按钮右边坐标
            //width:胶囊按钮宽度
            //这里计算的是胶囊按钮左边部分的可用宽度
            navWidth: right - width,
            // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
            //胶囊按钮的右边距
            menuButtonRightPadding: res.screenWidth - menuButtonInfo.right });



          var app = getApp();
          app.globalData.navMarginTop = _this.navMarginTop;
          app.globalData.navHeight = _this.navHeight;
          console.log(app.globalData.navMarginTop);

        } });

    },
    //改变播放状态的函数
    changePlayState: function changePlayState() {
      var isPlay = !this.isPlay;
      _index.playerStore.dispatch('changeMusicPlayState', isPlay);
      this.setData({
        isPlay: isPlay });
      // this.changeMusicPlayState(isPlay);
      // console.log(this.data.isPlay)
    },

    //改变音乐播放状态
    changeMusicPlayState: function changeMusicPlayState(isPlay) {
      if (isPlay) {
        _index.backgroundAudioManager.play();
      } else {
        _index.backgroundAudioManager.pause();
      }
    },

    //设置用于图标显示isPlay变量的函数，只是个封装函数跟this.setData一样的，只是这样写更美观
    changeMusicIsPlay: function changeMusicIsPlay(isPlay) {
      this.setData({
        isPlay: isPlay });

    },

    //改变歌词的显示状态(页面绑定)
    changeLrcState: function changeLrcState() {
      this.setData({
        showLrc: !this.showLrc });

    },

    //改变随机播放图标的显示状态(页面绑定)
    changePlayModeIndexToRadom: function changePlayModeIndexToRadom() {
      this.setData({
        playModeIndex: 2 });

      _index.playerStore.setState('playModeIndex', 2);
      uni.setStorageSync('playModeIndex', 2);
      uni.showToast({
        title: '随机播放',
        icon: 'none',
        duration: 1000 });

    },

    changePlayModeIndexToSingleCricle: function changePlayModeIndexToSingleCricle() {
      this.setData({
        playModeIndex: 1 });

      _index.playerStore.setState('playModeIndex', 1);
      uni.setStorageSync('playModeIndex', 1);
      uni.showToast({
        title: '单曲循环',
        icon: 'none',
        duration: 1000 });

    },

    changePlayModeIndexToListCricle: function changePlayModeIndexToListCricle() {
      this.setData({
        playModeIndex: 0 });

      _index.playerStore.setState('playModeIndex', 0);
      uni.setStorageSync('playModeIndex', 0);
      uni.showToast({
        title: '列表循环',
        icon: 'none',
        duration: 1000 });

    },

    //切换下一首(页面绑定)
    changePlayMusicToNextMusic: function changePlayMusicToNextMusic() {
      //重置歌词状态，不重置会导致歌词还保留上一首歌曲的歌曲的位置
      this.setData({
        currentLycIndex: 0 });

      _index.playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic', true);
    },

    //切换上一首(页面绑定)
    changePlayMusicToPreMusic: function changePlayMusicToPreMusic() {
      this.setData({
        currentLycIndex: 0 });

      _index.playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic', false);
    },

    //快进30s(页面绑定)
    changePlayMusicToQuick30s: function changePlayMusicToQuick30s() {
      _index.playerStore.dispatch('changePlayMusicToQuickOrSlow30s', true);
    },

    //后退30s(页面绑定)
    changePlayMusicToSlow30s: function changePlayMusicToSlow30s() {
      _index.playerStore.dispatch('changePlayMusicToQuickOrSlow30s', false);
    },

    //点击歌曲改变歌曲播放(页面绑定)(已经转移到compenent组件)
    changeCurrentMusic: function changeCurrentMusic(event) {
      var newMusicIndex = event.currentTarget.dataset.index; //必须是不等于undefined 不然为0的时候他就工作了

      if (newMusicIndex !== undefined) {
        _index.playerStore.dispatch('changeCurrentMusic', newMusicIndex);
      }
    },

    //点击歌曲删除歌曲列表中当前元素(页面绑定)
    deleteMusicListCurrentMusic: function deleteMusicListCurrentMusic(event) {
      var newMusicIndex = event.currentTarget.dataset.index;
      _index.playerStore.dispatch('deleteMusicListCurrentMusic', newMusicIndex); // //必须是不等于undefined 不然为0的时候他就工作了
      // let playSongList=this.data.playSongList
      // playSongList.splice(newMusicIndex,1)
      // if(newMusicIndex !== undefined){
      // this.setData({playSongList})
      // playerStore.setState('playSongList',playSongList)
      // }
    },

    //用于修复微信小程序无法正确获取到音频长度的BUG
    loadDuration: function loadDuration() {var _this2 = this;
      setTimeout(function () {
        if (_index.backgroundAudioManager.duration > 0) {
          // 获取到正确的duration
          console.log(_index.backgroundAudioManager.duration);
          var time = _index.backgroundAudioManager.duration.toString().split('.');
          var timeMs = parseInt(time) * 1000;
          var min = _this2.transformMsToMin(timeMs);
          var sec = _this2.transformMsToSec(timeMs).toString().slice(0, 2);
          var formatTime = _this2.formatTime.split(':');
          formatTime[0] = min.toString();
          formatTime[1] = sec.toString();
          formatTime = formatTime.join(':').toString();
          _this2.setData({
            totalTime: _index.backgroundAudioManager.duration,
            // canPlay:true,
            formatTime: formatTime });

          app.globalData.musicTotalTime = _this2.totalTime;

          if (_this2.canPlay) {
            // innerAudioContext.play();
          }
        } else {
          _this2.loadDuration();
        }
      }, 10);
    },

    //用于转换ms与s之间的转换
    transformMsToSec: function transformMsToSec(totalMs) {
      var min = parseInt(totalMs / 60000);
      var remainSec = parseInt(totalMs / 1000 - min * 60);

      if (remainSec < 10) {
        return '0' + remainSec;
      } else {
        return remainSec;
      }
    },

    //用于转化ms与分钟之间的关系
    transformMsToMin: function transformMsToMin(totalMs) {
      var min = Math.floor(parseInt(totalMs) / 60000 * 10) / 10;

      if (parseInt(min) < 10) {
        return '0' + parseInt(min);
      } else {
        return parseInt(min);
      }
    },

    //用于更新歌曲的进度条/当前时间(废弃，已经和watchMusic合并)
    musicProcessTimeUpdate: function musicProcessTimeUpdate() {var _this3 = this;
      _index.backgroundAudioManager.onTimeUpdate(function () {
        var procent = Math.floor(_index.backgroundAudioManager.currentTime / _index.backgroundAudioManager.duration * 1000) / 10;

        if (procent === 100) {
          console.log('成功');
        } //当前时间的从s转化为min
        // let time=backgroundAudioManager.currentTime.toString().split('.')
        // let timeMs=parseInt(time)*1000
        // let min=this.transformMsToMin(timeMs)
        // let sec=this.transformMsToSec(timeMs).toString().slice(0,2)
        // // console.log(this.transformMsToSec(timeMs))
        // let currentTime=this.data.formatTime.split(':')
        // currentTime[0]=min.toString();
        // currentTime[1]=sec.toString();
        // currentTime=currentTime.join(':').toString()

        var currentTime = (0, _moment.default)(_index.backgroundAudioManager.currentTime * 1000).format('mm:ss'); //歌词根据当前时间进行滚动

        var musicCurrentTime = _index.backgroundAudioManager.currentTime;
        var lycArray = _this3.lycArray; //判断是否是最后一行，因为我们在最后一行的时候无法再比较下下句和当前句的时间了，所以我们得进行特殊的判断

        if (_this3.currentLycIndex === lycArray.length - 2) {
          console.log(_this3.currentLycIndex); //在唱最后一句

          if (musicCurrentTime >= lycArray[lycArray.length - 1][0]) {
            _this3.setData({
              currentLycIndex: lycArray.length - 1 });

          }
        } else if (_this3.currentLycIndex <= lycArray.length - 2) {
          for (var i = 0; i < lycArray.length; i++) {
            if (musicCurrentTime >= lycArray[i][0] && musicCurrentTime < lycArray[i + 1][0]) {
              _this3.setData({
                currentLycIndex: i });

            }
          }
        }

        if (_this3.currentLycIndex >= 0) {
          _this3.setData({
            //设置滚动距离，
            //为什么减6？因为我们是从第7个开始滚动的，也就是中间的这个位置
            toView: 'cate' + _this3.currentLycIndex,
            lycScrollTop: (_this3.currentLycIndex - 0) * 24.8 * 2 });

        } //不是在slider滑动状态，我们就设置data，如果在滑动我们就不设置data

        console.log(!_this3.isSliderDrag);

        if (!_this3.isSliderDrag) {
          _this3.setData({
            value: procent,
            currentTime: currentTime });

        }
      });
    },

    //判断此时的页面是是否是我们之前播放的页面(废弃)
    musicIsNowPlayMusic: function musicIsNowPlayMusic(musicId) {
      //如果此时的全局变量isMusicPlay为true和musicID与当前的msuicID相同
      //也就是当前music在播放，而且新打开的页面与之前的页面相同
      if (app.globalData.isMusicPlay && app.globalData.musicId === musicId) {
        console.log(app.globalData.isMusicPlay);
        console.log(app.globalData.musicId === musicId);
        this.setData({
          isPlay: true });

        return true;
      } else {
        return false;
      }
    },

    //防抖（已经迁移，迁移位置在顶部）
    debounce: function debounce(fun, delay) {var _arguments = arguments,_this4 = this;
      var run;
      return function () {
        var that = _this4;
        var args = _arguments;
        clearTimeout(run);
        run = setTimeout(function () {
          fun.apply(that, args);
        }, delay);
      };
    },

    // 处理歌词（废弃，改用store下面parse-lyric函数）
    dealLyric: function dealLyric(lyc) {var _this5 = this;
      var lycResult = []; //处理歌词我们需要把他转化成数组形式

      var lycArray = lyc.split('\r\n');

      if (lycArray.length <= 2) {
        lycArray = lyc.split('\n');
      } //删除数组中的最后一个元素，因为大多数情况下他都是空的

      if (lycArray[lycArray.length - 1] === '') {
        lycArray.pop();
      } //使用正则表达式匹配歌词前面的时间
      // \d 匹配数字 \d{2} 匹配两位
      // \[ \用于转义，说明你这个[使用来搜索的  \. 也是用于转义
      // .原来的意思是匹配除了换行符以外的任意单个字符

      var pattern = /\[\d{2}:\d{2}\.\d{2,3}\]/; //利用map函数替换每一个带有时间标记的元素

      lycArray.map(function (item) {
        var realLyc = item.replace(pattern, '');
        var lycTime = item.match(pattern); //去除括号

        if (lycTime !== null) {
          lycTime = lycTime[0].slice(1, -1);
          var timeArray = lycTime.split(':');
          var realTime = parseInt(timeArray[0]) * 60 + parseFloat(timeArray[1]);
          var realTimeStr = parseFloat(realTime.toFixed(3)); //把时间和歌词放进一个数组中

          lycResult.push([realTimeStr, realLyc]);
          lycResult = _this5.dealLyricIsEmpty(lycResult);
        } // console.log(lycTime)
      });
      return lycResult;
    },

    //处理歌词是空的情况，属于处理歌词的子函数（废弃）
    dealLyricIsEmpty: function dealLyricIsEmpty(lycArray) {
      var resultLycArray = [];
      lycArray.map(function (item) {
        if (item[1] !== '') {
          resultLycArray.push(item);
        }
      });
      return resultLycArray;
    },

    //显示音乐数组（理应保留）(现在已转移到component)
    changeShowMusicListState: function changeShowMusicListState() {
      var showMusicList = !this.showMusicList;
      this.setData({
        showMusicList: showMusicList });

    },

    // ------------------------------监听专区---------------------
    //用于监听Slider值变动后使用的函数(理应保留)
    handleSliderChange: function handleSliderChange(event) {
      console.log(event); //获取滑动后变化的值

      var valueAfterSlider = event.detail.value;
      console.log(valueAfterSlider); //转化为百分比

      var percentAfterSlider = valueAfterSlider / 100; //当前的时间 百分比*总时间
      //此时的总时间是Ms 我们需要s，所以除以1000

      var currentTimeAfterSlider = percentAfterSlider * this.totalTime; //调用backgroundAudioManager的seek函数让他跳转到指定的位置

      _index.backgroundAudioManager.pause();
      _index.backgroundAudioManager.seek(currentTimeAfterSlider);
      _index.backgroundAudioManager.play();
      _index.playerStore.setState('value', valueAfterSlider);
      var currentTime = (0, _moment.default)(currentTimeAfterSlider * 1000).format('mm:ss');
      _index.playerStore.setState('currentTime', currentTime); //设置最新的进度条状态

      this.setData({
        value: valueAfterSlider,
        // 结束拖动事件，结束拖动状态
        isSliderDrag: false,
        currentTime: currentTime });

      _index.playerStore.setState('isSliderDrag', false);
    },

    //用于监听页面的拖动状态(理应保留)
    handleSliderDrag: function handleSliderDrag(event) {
      this.setData({
        isSliderDrag: true });

      _index.playerStore.setState('isSliderDrag', true); //获取滑动正在拖动的位置当前值

      var valueAfterDrag = event.detail.value;
      console.log(valueAfterDrag); //转化为百分比

      var percentAfterDrag = valueAfterDrag / 100;
      var currentTimeAfterDrag = percentAfterDrag * this.totalTime; //时间格式化
      // let time=currentTimeAfterDrag.toString().split('.')
      // let timeMs=parseInt(time)*1000
      // let min=this.transformMsToMin(timeMs)
      // let sec=this.transformMsToSec(timeMs).toString().slice(0,2)
      // // console.log(this.transformMsToSec(timeMs))
      // let currentTime=this.data.formatTime.split(':')
      // currentTime[0]=min.toString();
      // currentTime[1]=sec.toString();
      // currentTime=currentTime.join(':').toString()

      var currentTime = (0, _moment.default)(currentTimeAfterDrag * 1000).format('mm:ss');
      _index.playerStore.setState('isSliderDrag', true);
      _index.playerStore.setState('currentTime', currentTime);
      this.setData({
        isSliderDrag: true,
        currentTime: currentTime });

      console.log(currentTime);
    },

    //监听歌曲播放(重要)（已经迁移，迁移位置在顶部）
    watchMusic: function watchMusic() {var _this6 = this;
      _index.backgroundAudioManager.onPlay(function () {
        _this6.changeMusicIsPlay(true); //设置全局变量isMusicPlay，isMusicPlay用于检验我们退出当前界面后我们是否点击了相同的音乐

        app.globalData.isMusicPlay = true;
        app.globalData.musicId = _this6.musicId;
      });
      _index.backgroundAudioManager.onPause(function () {
        _this6.changeMusicIsPlay(false); //当我们进行播放的时候我们就已经

        app.globalData.isMusicPlay = false;
      });
      _index.backgroundAudioManager.onStop(function () {
        _this6.changeMusicIsPlay(false);
        app.globalData.isMusicPlay = false;
      });
      _index.backgroundAudioManager.onTimeUpdate(
      this.debounce(function () {
        var procent = Math.floor(_index.backgroundAudioManager.currentTime / _index.backgroundAudioManager.duration * 1000) / 10;

        if (procent === 100) {
          console.log('成功');
        } //当前时间的从s转化为min

        var currentTime = (0, _moment.default)(_index.backgroundAudioManager.currentTime * 1000).format('mm:ss'); // let time=backgroundAudioManager.currentTime.toString().split('.')
        // let timeMs=parseInt(time)*1000
        // let min=this.transformMsToMin(timeMs)
        // let sec=this.transformMsToSec(timeMs).toString().slice(0,2)
        // // console.log(this.transformMsToSec(timeMs))
        // let currentTime=this.data.formatTime.split(':')
        // currentTime[0]=min.toString();
        // currentTime[1]=sec.toString();
        // currentTime=currentTime.join(':').toString()
        //歌词根据当前时间进行滚动
        //为什么乘1000因为我们在parse-lyric里面把以ms为单位，currentTime返回的是s，所以乘以1000

        var musicCurrentTime = _index.backgroundAudioManager.currentTime * 1000;
        var lycArray = _this6.lycArray; //该方法废弃，废弃原因：会造成歌词显示慢，改用下面的方法
        //判断是否是最后一行，因为我们在最后一行的时候无法再比较下下句和当前句的时间了，所以我们得进行特殊的判断
        // if(this.data.currentLycIndex === lycArray.length-2){
        //   console.log(this.data.currentLycIndex)
        //   //在唱最后一句
        //   if(musicCurrentTime>=lycArray[lycArray.length-1][0]){
        //     this.setData({
        //       currentLycIndex:lycArray.length-1
        //     })
        //   }
        // }else if(this.data.currentLycIndex <= lycArray.length-2){
        //   for( let  i=0;i<lycArray.length;i++){
        //     if(musicCurrentTime>=lycArray[i][0]&&musicCurrentTime<lycArray[i+1][0]){
        //       this.setData({
        //         currentLycIndex:i
        //       })
        //     }
        //   }
        // }
        //原理：找出比当前时间大的一些的歌词的位置，找到了，当前歌词的位置就在到歌词的下面
        //如果lycArray的长度没有值的话就直接跳过

        if (!_this6.lycArray.length) {
          return;
        }

        var i = 0;

        for (; i < lycArray.length; i++) {
          var lycTime = lycArray[i][0];

          if (musicCurrentTime < lycTime) {
            break;
          }
        }

        var currentIndex = i - 1;

        if (_this6.currentLycIndex !== currentIndex) {
          _this6.setData({
            currentLycIndex: currentIndex });

        }

        if (_this6.currentLycIndex >= 0) {
          _this6.setData({
            //设置滚动距离，
            //为什么减6？因为我们是从第7个开始滚动的，也就是中间的这个位置
            lycScrollTop: (_this6.currentLycIndex - 0) * 24.8 * 2,
            toLyc: 'Lyc' + _this6.currentLycIndex });

        } //不是在slider滑动状态，我们就设置data，如果在滑动我们就不设置data

        console.log(_this6.isSliderDrag);

        if (!_this6.isSliderDrag) {
          _this6.setData({
            value: procent,
            currentTime: currentTime });

        }
      }, 200));

    },

    // 歌词相关的变量监听 函数抽离
    musicStateWatchFunciton: function musicStateWatchFunciton(_ref) {var formatTime = _ref.formatTime,lycArray = _ref.lycArray,totalTime = _ref.totalTime,currentLycIndex = _ref.currentLycIndex,lycScrollTop = _ref.lycScrollTop,toLyc = _ref.toLyc,currentTime = _ref.currentTime;
      if (formatTime) {
        this.setData({
          formatTime: formatTime });

      }

      if (lycArray) {
        this.setData({
          lycArray: lycArray });

      }

      if (totalTime) {
        console.log(totalTime);
        this.setData({
          totalTime: totalTime });

      }

      if (currentLycIndex !== undefined && currentLycIndex !== null) {
        this.setData({
          currentLycIndex: currentLycIndex });

      }

      if (lycScrollTop) {
        console.log(lycScrollTop);
        this.setData({
          lycScrollTop: lycScrollTop });

      }

      if (toLyc) {
        this.setData({
          toLyc: toLyc });

      } //时间变化

      if (currentTime && !this.isSliderDrag) {
        this.setData({
          currentTime: currentTime });

        console.log(currentTime);
      }
    },

    //用于监听store下面的player-store player-store放着我们需要的歌曲/歌词信息
    //注意异步请求，会有一段时间的null，所以建议发过来的值就是直接是异步请求后的
    //(重要)
    watchPlayerStoreListener: function watchPlayerStoreListener() {var _this7 = this;
      // onStates可以监听多个数值
      //若只有最右边的括号里只有个值，就返回的是对象，若是有多个值加个中括号就是对象里面的值了
      //播放相关的变量监听
      _index.playerStore.onStates(['music', 'id', 'isPlay'], function (_ref2) {var music = _ref2.music,id = _ref2.id,isPlay = _ref2.isPlay;
        if (music) {
          _this7.setData({
            music: music });

        }

        if (id) {
          _this7.setData({
            id: id });

        }

        if (isPlay) {
          _this7.setData({
            isPlay: isPlay });

        }
      }); //歌词相关的变量监听

      _index.playerStore.onStates(
      ['formatTime', 'lycArray', 'totalTime', 'currentLycIndex', 'lycScrollTop', 'toLyc', 'currentTime'], //封装好的函数，就在watchPlayerStoreListener上面
      this.musicStateWatchFunciton);
      //进度条相关变量监听

      _index.playerStore.onStates(['value'], function (_ref3) {var value = _ref3.value;
        if (value !== undefined && value !== null) {
          _this7.setData({
            value: value });

        } //  const  fun =()=>{
        //   console.log(value)
        //   if(value){   this.setData({value:value})
        //  }
        //   }
        // throttle(()=>{
        // console.log(value)
        // if(value){   this.setData({value:value})}
        // },10)
      }); //播放模式相关变量监听

      _index.playerStore.onStates(['playModeIndex'], function (_ref4) {var playModeIndex = _ref4.playModeIndex;
        if (playModeIndex) {
          _this7.setData({
            playModeIndex: playModeIndex,
            playModeName: playModeNames[playModeIndex] });

        }
      }); //歌单相关变量监听

      _index.playerStore.onStates(['playSongList', 'playSongIndex'], function (_ref5) {var playSongList = _ref5.playSongList,playSongIndex = _ref5.playSongIndex;
        if (playSongList !== undefined && playSongList !== null) {
          _this7.setData({
            playSongList: playSongList });

        }

        if (playSongIndex !== undefined && playSongIndex !== null) {
          _this7.setData({
            playSongIndex: playSongIndex });

        }
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 91:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=scss& */ 92);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 93:
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/map.wxs?vue&type=custom&index=0&blockType=script&issuerPath=C%3A%5CUsers%5CAdministrator%5CDesktop%5Ctest002%5Cminiprogram02_uni%5Cpages%5Cmusic-player%5Cdetail.vue&module=map&lang=wxs ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_map_wxs_vue_type_custom_index_0_blockType_script_issuerPath_C_3A_5CUsers_5CAdministrator_5CDesktop_5Ctest002_5Cminiprogram02_uni_5Cpages_5Cmusic_player_5Cdetail_vue_module_map_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./map.wxs?vue&type=custom&index=0&blockType=script&issuerPath=C%3A%5CUsers%5CAdministrator%5CDesktop%5Ctest002%5Cminiprogram02_uni%5Cpages%5Cmusic-player%5Cdetail.vue&module=map&lang=wxs */ 94);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_map_wxs_vue_type_custom_index_0_blockType_script_issuerPath_C_3A_5CUsers_5CAdministrator_5CDesktop_5Ctest002_5Cminiprogram02_uni_5Cpages_5Cmusic_player_5Cdetail_vue_module_map_lang_wxs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 94:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!C:/Users/Administrator/Desktop/test002/miniprogram02_uni/pages/music-player/map.wxs?vue&type=custom&index=0&blockType=script&issuerPath=C%3A%5CUsers%5CAdministrator%5CDesktop%5Ctest002%5Cminiprogram02_uni%5Cpages%5Cmusic-player%5Cdetail.vue&module=map&lang=wxs ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
       if(!Component.options.wxsCallMethods){
         Component.options.wxsCallMethods = []
       }
       
     });

/***/ })

},[[85,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/music-player/detail.js.map