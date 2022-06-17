"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/main.js?{"page":"pages%2Fartist%2Ftest"} ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_artist_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/artist/test.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_artist_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_artist_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/artist/test'\n        _pages_artist_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_artist_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9hcnRpc3QvdGVzdC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9hcnRpc3QvdGVzdCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************************!*\
  !*** D:/Project/jk-music-uniapp/main.js?{"type":"appStyle"} ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/App.vue?vue&type=style&index=0&lang=scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/App.vue?vue&type=style&index=0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "": {
      "height": [
        100,
        0,
        0,
        19
      ],
      "display": [
        "flex",
        0,
        0,
        19
      ],
      "flexDirection": [
        "column",
        0,
        0,
        19
      ],
      "alignItems": [
        "center",
        0,
        0,
        19
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        19
      ],
      "paddingTop": [
        "200rpx",
        0,
        0,
        19
      ],
      "paddingRight": [
        0,
        0,
        0,
        19
      ],
      "paddingBottom": [
        "200rpx",
        0,
        0,
        19
      ],
      "paddingLeft": [
        0,
        0,
        0,
        19
      ],
      "boxSizing": [
        "border-box",
        0,
        0,
        19
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!*********************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/test.nvue?mpType=page ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.nvue?vue&type=template&id=01eea59d&mpType=page */ 6);\n/* harmony import */ var _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./test.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./test.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"923e92a0\",\n  false,\n  _test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/artist/test.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF5RDtBQUM3RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXlEO0FBQ2xIOztBQUVBOztBQUVBO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90ZXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDFlZWE1OWQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Rlc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Rlc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3Rlc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOTIzZTkyYTBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvYXJ0aXN0L3Rlc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/test.nvue?vue&type=template&id=01eea59d&mpType=page ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=template&id=01eea59d&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_01eea59d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/pages/artist/test.nvue?vue&type=template&id=01eea59d&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "list",
    {
      staticClass: ["page"],
      attrs: { id: _vm.pageId, bounce: false, fixFreezing: "true" }
    },
    [
      _vm._m(0),
      _c("cell", { appendAsTree: true, attrs: { append: "tree" } }, [
        _c(
          "view",
          { staticClass: ["tabs"], style: "height:" + _vm.pageHeight + "px" },
          [
            _c(
              "scroll-view",
              {
                ref: "tabbar1",
                staticClass: ["tab-bar"],
                attrs: {
                  id: "tab-bar",
                  scroll: false,
                  scrollX: true,
                  showScrollbar: false,
                  scrollIntoView: _vm.scrollInto
                }
              },
              [
                _c("view", { staticStyle: { flexDirection: "column" } }, [
                  _c(
                    "view",
                    { staticStyle: { flexDirection: "row" } },
                    _vm._l(_vm.tabList, function(tab, index) {
                      return _c(
                        "view",
                        {
                          key: tab.id,
                          ref: "tabitem" + index,
                          refInFor: true,
                          staticClass: ["uni-tab-item"],
                          attrs: {
                            id: tab.id,
                            dataId: index,
                            dataCurrent: index
                          },
                          on: { click: _vm.ontabtap }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["uni-tab-item-title"],
                              class:
                                _vm.tabIndex == index
                                  ? "uni-tab-item-title-active"
                                  : "",
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v(_vm._s(tab.name))]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _c("view", { staticClass: ["scroll-view-indicator"] }, [
                    _c("view", {
                      ref: "underline",
                      staticClass: ["scroll-view-underline"],
                      class: _vm.isTap ? "scroll-view-animation" : "",
                      style: {
                        left: _vm.indicatorLineLeft + "px",
                        width: _vm.indicatorLineWidth + "px"
                      }
                    })
                  ])
                ])
              ]
            ),
            _c("view", { staticClass: ["tab-bar-line"] }),
            _c(
              "swiper",
              {
                ref: "swiper1",
                staticClass: ["tab-view"],
                attrs: {
                  id: "tab-bar-view",
                  current: _vm.tabIndex,
                  duration: 300
                },
                on: {
                  change: _vm.onswiperchange,
                  transition: _vm.onswiperscroll,
                  animationfinish: _vm.animationfinish,
                  onAnimationEnd: _vm.animationfinish
                }
              },
              _vm._l(_vm.tabList, function(page, index) {
                return _c(
                  "swiper-item",
                  { key: index, staticClass: ["swiper-item"] },
                  [
                    _c("swiper-page", {
                      ref: "page",
                      refInFor: true,
                      staticClass: ["swiper-page"],
                      attrs: { pid: page.pageid, parentId: _vm.pageId }
                    })
                  ],
                  1
                )
              }),
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("cell", { appendAsTree: true, attrs: { append: "tree" } }, [
      _c("view", { staticClass: ["header"], attrs: { id: "head" } }, [
        _c(
          "u-text",
          {
            staticClass: ["header-title"],
            appendAsTree: true,
            attrs: { append: "tree" }
          },
          [_vm._v("header")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 8 */
/*!*********************************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLG9kQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rlc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/pages/artist/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _swiperPage = _interopRequireDefault(__webpack_require__(/*! ./swiper-page.nvue */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar dom = weex.requireModule('dom'); // 缓存每页最多\nvar MAX_CACHE_DATA = 100; // 缓存页签数量\nvar MAX_CACHE_PAGE = 3;var TAB_PRELOAD_OFFSET = 1;var _default = { components: { swiperPage: _swiperPage.default }, data: function data() {return { tabList: [], tabIndex: 0, cacheTab: [], scrollInto: \"\", indicatorLineLeft: 0, indicatorLineWidth: 0, isTap: false, showTitleView: true, pageHeight: 300, pageId: \"page\" };}, onLoad: function onLoad() {for (var i = 0; i < 6; i++) {this.tabList.push({ id: \"tab\" + i, name: 'Tab ' + (i + 1), pageid: i + 1 });}}, onReady: function onReady() {this.pageHeight = uni.getSystemInfoSync().windowHeight;this._lastTabIndex = 0;this.swiperWidth = 0;this.tabbarWidth = 0;this.tabListSize = {};this._touchTabIndex = 0;this._headHeight = 100;this.pageList = this.$refs.page;\n    this.selectorQuery();\n  },\n  methods: {\n    ontabtap: function ontabtap(e) {\n      var index = e.target.dataset.current || e.currentTarget.dataset.current;\n      //let offsetIndex = this._touchTabIndex = Math.abs(index - this._lastTabIndex) > 1;\n\n\n      this.isTap = true;\n      var currentSize = this.tabListSize[index];\n      this.updateIndicator(currentSize.left, currentSize.width);\n      this._touchTabIndex = index;\n\n\n      this.switchTab(index);\n    },\n    onswiperchange: function onswiperchange(e) {\n      // 注意：百度小程序会触发2次\n\n\n\n\n\n    },\n    onswiperscroll: function onswiperscroll(e) {\n      if (this.isTap) {\n        return;\n      }\n\n      var offsetX = e.detail.dx;\n      var preloadIndex = this._lastTabIndex;\n      if (offsetX > TAB_PRELOAD_OFFSET) {\n        preloadIndex++;\n      } else if (offsetX < -TAB_PRELOAD_OFFSET) {\n        preloadIndex--;\n      }\n      if (preloadIndex === this._lastTabIndex || preloadIndex < 0 || preloadIndex > this.pageList.length - 1) {\n        return;\n      }\n      if (this.pageList[preloadIndex].dataList.length === 0) {\n        this.loadTabData(preloadIndex);\n      }\n\n\n      var percentage = Math.abs(this.swiperWidth / offsetX);\n      var currentSize = this.tabListSize[this._lastTabIndex];\n      var preloadSize = this.tabListSize[preloadIndex];\n      var lineL = currentSize.left + (preloadSize.left - currentSize.left) / percentage;\n      var lineW = currentSize.width + (preloadSize.width - currentSize.width) / percentage;\n      this.updateIndicator(lineL, lineW);\n\n    },\n    animationfinish: function animationfinish(e) {\n\n      var index = e.detail.current;\n      if (this._touchTabIndex === index) {\n        this.isTap = false;\n      }\n      this._lastTabIndex = index;\n      this.switchTab(index);\n      this.updateIndicator(this.tabListSize[index].left, this.tabListSize[index].width);\n\n    },\n    selectorQuery: function selectorQuery() {var _this = this;\n\n      uni.createSelectorQuery().in(this).select('#head').boundingClientRect().exec(function (rect) {\n        _this._headHeight = rect[0].height;\n      });\n\n      // 查询 tabbar 宽度\n      uni.createSelectorQuery().in(this).select('#tab-bar').boundingClientRect().exec(function (rect) {\n        _this.tabbarWidth = rect[0].width;\n      });\n      // 查询 tabview 宽度\n      uni.createSelectorQuery().in(this).select('#tab-bar-view').boundingClientRect().exec(function (rect) {\n        _this.swiperWidth = rect[0].width;\n      });\n\n      // 因 nvue 暂不支持 class 查询\n      var queryTabSize = uni.createSelectorQuery().in(this);\n      for (var i = 0; i < this.tabList.length; i++) {\n        queryTabSize.select('#' + this.tabList[i].id).boundingClientRect();\n      }\n      queryTabSize.exec(function (rects) {\n        rects.forEach(function (rect) {\n          _this.tabListSize[rect.dataset.id] = rect;\n        });\n        _this.updateIndicator(_this.tabListSize[_this.tabIndex].left, _this.tabListSize[_this.tabIndex].width);\n        _this.switchTab(_this.tabIndex);\n      });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    updateIndicator: function updateIndicator(left, width) {\n      this.indicatorLineLeft = left;\n      this.indicatorLineWidth = width;\n    },\n    switchTab: function switchTab(index) {\n      if (this.pageList[index].dataList.length === 0) {\n        this.loadTabData(index);\n      }\n\n      this.pageList[index].setScrollRef(this._headHeight);\n\n      if (this.tabIndex === index) {\n        return;\n      }\n\n      // 缓存 tabId\n      if (this.pageList[this.tabIndex].dataList.length > MAX_CACHE_DATA) {\n        var isExist = this.cacheTab.indexOf(this.tabIndex);\n        if (isExist < 0) {\n          this.cacheTab.push(this.tabIndex);\n        }\n      }\n\n      this.tabIndex = index;\n\n\n      this.scrollTabTo(index);\n\n\n\n\n\n      // 释放 tabId\n      if (this.cacheTab.length > MAX_CACHE_PAGE) {\n        var cacheIndex = this.cacheTab[0];\n        this.clearTabData(cacheIndex);\n        this.cacheTab.splice(0, 1);\n      }\n    },\n    scrollTabTo: function scrollTabTo(index) {\n      var el = this.$refs['tabitem' + index][0];\n      var offset = 0;\n      // TODO fix ios offset\n      if (index > 0) {\n        offset = this.tabbarWidth / 2 - this.tabListSize[index].width / 2;\n        if (this.tabListSize[index].right < this.tabbarWidth / 2) {\n          offset = this.tabListSize[0].width;\n        }\n      }\n      dom.scrollToElement(el, {\n        offset: -offset });\n\n    },\n    loadTabData: function loadTabData(index) {\n      this.pageList[index].loadData();\n    },\n    clearTabData: function clearTabData(index) {\n      this.pageList[index].clear();\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYXJ0aXN0L3Rlc3QubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREEsNEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZBLG9DLENBR0E7QUFDQSx5QixDQUVBO0FBQ0EsdUJBQ0EsMkIsZUFJQSxFQUNBLGNBQ0EsK0JBREEsRUFEQSxFQUlBLElBSkEsa0JBSUEsQ0FDQSxTQUNBLFdBREEsRUFFQSxXQUZBLEVBR0EsWUFIQSxFQUlBLGNBSkEsRUFLQSxvQkFMQSxFQU1BLHFCQU5BLEVBT0EsWUFQQSxFQVFBLG1CQVJBLEVBU0EsZUFUQSxFQVVBLGNBVkEsR0FZQSxDQWpCQSxFQWtCQSxNQWxCQSxvQkFrQkEsQ0FDQSw2QkFDQSxvQkFDQSxhQURBLEVBRUEsc0JBRkEsRUFHQSxhQUhBLElBS0EsQ0FDQSxDQTFCQSxFQTJCQSxPQTNCQSxxQkEyQkEsQ0FDQSx1REFDQSx1QkFDQSxxQkFDQSxxQkFDQSxzQkFDQSx3QkFDQSx1QkFFQTtBQUNBO0FBQ0EsR0F0Q0E7QUF1Q0E7QUFDQSxZQURBLG9CQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEtBYkE7QUFjQSxrQkFkQSwwQkFjQSxDQWRBLEVBY0E7QUFDQTs7Ozs7O0FBTUEsS0FyQkE7QUFzQkEsa0JBdEJBLDBCQXNCQSxDQXRCQSxFQXNCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQWpEQTtBQWtEQSxtQkFsREEsMkJBa0RBLENBbERBLEVBa0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBNURBO0FBNkRBLGlCQTdEQSwyQkE2REE7O0FBRUE7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0EsT0FOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsS0F4R0E7QUF5R0EsbUJBekdBLDJCQXlHQSxJQXpHQSxFQXlHQSxLQXpHQSxFQXlHQTtBQUNBO0FBQ0E7QUFDQSxLQTVHQTtBQTZHQSxhQTdHQSxxQkE2R0EsS0E3R0EsRUE2R0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvSUE7QUFnSkEsZUFoSkEsdUJBZ0pBLEtBaEpBLEVBZ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTs7QUFHQSxLQTdKQTtBQThKQSxlQTlKQSx1QkE4SkEsS0E5SkEsRUE4SkE7QUFDQTtBQUNBLEtBaEtBO0FBaUtBLGdCQWpLQSx3QkFpS0EsS0FqS0EsRUFpS0E7QUFDQTtBQUNBLEtBbktBLEVBdkNBLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8bGlzdCA6aWQ9XCJwYWdlSWRcIiBjbGFzcz1cInBhZ2VcIiA6Ym91bmNlPVwiZmFsc2VcIiBmaXhGcmVlemluZz1cInRydWVcIj5cbiAgICAgICAgPGNlbGw+XG4gICAgICAgICAgICA8dmlldyBpZD1cImhlYWRcIiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+aGVhZGVyPC90ZXh0PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L2NlbGw+XG4gICAgICAgIDxjZWxsPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0YWJzXCIgOnN0eWxlPVwiJ2hlaWdodDonICsgcGFnZUhlaWdodCArICdweCdcIj5cbiAgICAgICAgICAgICAgICA8c2Nyb2xsLXZpZXcgcmVmPVwidGFiYmFyMVwiIGlkPVwidGFiLWJhclwiIGNsYXNzPVwidGFiLWJhclwiIDpzY3JvbGw9XCJmYWxzZVwiIDpzY3JvbGwteD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIDpzY3JvbGwtaW50by12aWV3PVwic2Nyb2xsSW50b1wiPlxuICAgICAgICAgICAgICAgICAgICA8dmlldyBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ1bmktdGFiLWl0ZW1cIiB2LWZvcj1cIih0YWIsaW5kZXgpIGluIHRhYkxpc3RcIiA6a2V5PVwidGFiLmlkXCIgOmlkPVwidGFiLmlkXCIgOnJlZj1cIid0YWJpdGVtJytpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLWlkPVwiaW5kZXhcIiA6ZGF0YS1jdXJyZW50PVwiaW5kZXhcIiBAY2xpY2s9XCJvbnRhYnRhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInVuaS10YWItaXRlbS10aXRsZVwiIDpjbGFzcz1cInRhYkluZGV4PT1pbmRleCA/ICd1bmktdGFiLWl0ZW0tdGl0bGUtYWN0aXZlJyA6ICcnXCI+e3t0YWIubmFtZX19PC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic2Nyb2xsLXZpZXctaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgcmVmPVwidW5kZXJsaW5lXCIgY2xhc3M9XCJzY3JvbGwtdmlldy11bmRlcmxpbmVcIiA6Y2xhc3M9XCJpc1RhcCA/ICdzY3JvbGwtdmlldy1hbmltYXRpb24nOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie2xlZnQ6IGluZGljYXRvckxpbmVMZWZ0ICsgJ3B4Jywgd2lkdGg6IGluZGljYXRvckxpbmVXaWR0aCArICdweCd9XCI+PC92aWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgICAgPC9zY3JvbGwtdmlldz5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInRhYi1iYXItbGluZVwiPjwvdmlldz5cbiAgICAgICAgICAgICAgICA8c3dpcGVyIGNsYXNzPVwidGFiLXZpZXdcIiByZWY9XCJzd2lwZXIxXCIgaWQ9XCJ0YWItYmFyLXZpZXdcIiA6Y3VycmVudD1cInRhYkluZGV4XCIgOmR1cmF0aW9uPVwiMzAwXCIgQGNoYW5nZT1cIm9uc3dpcGVyY2hhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgQHRyYW5zaXRpb249XCJvbnN3aXBlcnNjcm9sbFwiIEBhbmltYXRpb25maW5pc2g9XCJhbmltYXRpb25maW5pc2hcIiBAb25BbmltYXRpb25FbmQ9XCJhbmltYXRpb25maW5pc2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN3aXBlci1pdGVtIGNsYXNzPVwic3dpcGVyLWl0ZW1cIiB2LWZvcj1cIihwYWdlLCBpbmRleCkgaW4gdGFiTGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN3aXBlci1wYWdlIGNsYXNzPVwic3dpcGVyLXBhZ2VcIiA6cGlkPVwicGFnZS5wYWdlaWRcIiA6cGFyZW50SWQ9XCJwYWdlSWRcIiByZWY9XCJwYWdlXCI+PC9zd2lwZXItcGFnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zd2lwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3N3aXBlcj5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC9jZWxsPlxuICAgIDwvbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgLy8gI2lmZGVmIEFQUC1QTFVTXG4gICAgY29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcbiAgICAvLyAjZW5kaWZcblxuICAgIC8vIOe8k+WtmOavj+mhteacgOWkmlxuICAgIGNvbnN0IE1BWF9DQUNIRV9EQVRBID0gMTAwO1xuXG4gICAgLy8g57yT5a2Y6aG1562+5pWw6YePXG4gICAgY29uc3QgTUFYX0NBQ0hFX1BBR0UgPSAzO1xuICAgIGNvbnN0IFRBQl9QUkVMT0FEX09GRlNFVCA9IDE7XG5cbiAgICBpbXBvcnQgc3dpcGVyUGFnZSBmcm9tICcuL3N3aXBlci1wYWdlLm52dWUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBzd2lwZXJQYWdlXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhYkxpc3Q6IFtdLFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNhY2hlVGFiOiBbXSxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbnRvOiBcIlwiLFxuICAgICAgICAgICAgICAgIGluZGljYXRvckxpbmVMZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGluZGljYXRvckxpbmVXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBpc1RhcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1RpdGxlVmlldzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYWdlSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgICAgcGFnZUlkOiBcInBhZ2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGFiXCIgKyBpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGFiICcgKyAoaSArIDEpLFxuICAgICAgICAgICAgICAgICAgICBwYWdlaWQ6IGkgKyAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeSgpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUYWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnN3aXBlcldpZHRoID0gMDtcbiAgICAgICAgICAgIHRoaXMudGFiYmFyV2lkdGggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJMaXN0U2l6ZSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hUYWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9oZWFkSGVpZ2h0ID0gMTAwO1xuXG4gICAgICAgICAgICB0aGlzLnBhZ2VMaXN0ID0gdGhpcy4kcmVmcy5wYWdlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RvclF1ZXJ5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9udGFidGFwKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQgfHwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcbiAgICAgICAgICAgICAgICAvL2xldCBvZmZzZXRJbmRleCA9IHRoaXMuX3RvdWNoVGFiSW5kZXggPSBNYXRoLmFicyhpbmRleCAtIHRoaXMuX2xhc3RUYWJJbmRleCkgPiAxO1xuXG4gICAgICAgICAgICAgICAgLy8gI2lmZGVmIEFQUC1QTFVTIHx8IEg1IHx8IE1QLVdFSVhJTiB8fCBNUC1RUVxuICAgICAgICAgICAgICAgIHRoaXMuaXNUYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMudGFiTGlzdFNpemVbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRTaXplLmxlZnQsIGN1cnJlbnRTaXplLndpZHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90b3VjaFRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXG5cbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYihpbmRleCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25zd2lwZXJjaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIC8vIOazqOaEj++8mueZvuW6puWwj+eoi+W6j+S8muinpuWPkTLmrKFcblxuICAgICAgICAgICAgICAgIC8vICNpZm5kZWYgQVBQLVBMVVMgfHwgSDUgfHwgTVAtV0VJWElOIHx8IE1QLVFRXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuY3VycmVudCB8fCBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKGluZGV4KTtcbiAgICAgICAgICAgICAgICAvLyAjZW5kaWZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbnN3aXBlcnNjcm9sbChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUYXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRYID0gZS5kZXRhaWwuZHg7XG4gICAgICAgICAgICAgICAgdmFyIHByZWxvYWRJbmRleCA9IHRoaXMuX2xhc3RUYWJJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0WCA+IFRBQl9QUkVMT0FEX09GRlNFVCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldFggPCAtVEFCX1BSRUxPQURfT0ZGU0VUKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJlbG9hZEluZGV4ID09PSB0aGlzLl9sYXN0VGFiSW5kZXggfHwgcHJlbG9hZEluZGV4IDwgMCB8fCBwcmVsb2FkSW5kZXggPiB0aGlzLnBhZ2VMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlTGlzdFtwcmVsb2FkSW5kZXhdLmRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUYWJEYXRhKHByZWxvYWRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gI2lmZGVmIEFQUC1QTFVTIHx8IEg1IHx8IE1QLVdFSVhJTiB8fCBNUC1RUVxuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gTWF0aC5hYnModGhpcy5zd2lwZXJXaWR0aCAvIG9mZnNldFgpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMudGFiTGlzdFNpemVbdGhpcy5fbGFzdFRhYkluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlbG9hZFNpemUgPSB0aGlzLnRhYkxpc3RTaXplW3ByZWxvYWRJbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGxpbmVMID0gY3VycmVudFNpemUubGVmdCArIChwcmVsb2FkU2l6ZS5sZWZ0IC0gY3VycmVudFNpemUubGVmdCkgLyBwZXJjZW50YWdlO1xuICAgICAgICAgICAgICAgIHZhciBsaW5lVyA9IGN1cnJlbnRTaXplLndpZHRoICsgKHByZWxvYWRTaXplLndpZHRoIC0gY3VycmVudFNpemUud2lkdGgpIC8gcGVyY2VudGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUluZGljYXRvcihsaW5lTCwgbGluZVcpO1xuICAgICAgICAgICAgICAgIC8vICNlbmRpZlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbmZpbmlzaChlKSB7XG4gICAgICAgICAgICAgICAgLy8gI2lmZGVmIEFQUC1QTFVTIHx8IEg1IHx8IE1QLVdFSVhJTiB8fCBNUC1RUVxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvdWNoVGFiSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUYXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5kaWNhdG9yKHRoaXMudGFiTGlzdFNpemVbaW5kZXhdLmxlZnQsIHRoaXMudGFiTGlzdFNpemVbaW5kZXhdLndpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyAjZW5kaWZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RvclF1ZXJ5KCkge1xuICAgICAgICAgICAgICAgIC8vICNpZmRlZiBBUFAtTlZVRVxuICAgICAgICAgICAgICAgIHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcykuc2VsZWN0KCcjaGVhZCcpLmJvdW5kaW5nQ2xpZW50UmVjdCgpLmV4ZWMocmVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRIZWlnaHQgPSByZWN0WzBdLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIOafpeivoiB0YWJiYXIg5a695bqmXG4gICAgICAgICAgICAgICAgdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoJyN0YWItYmFyJykuYm91bmRpbmdDbGllbnRSZWN0KCkuZXhlYyhyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJiYXJXaWR0aCA9IHJlY3RbMF0ud2lkdGg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8g5p+l6K+iIHRhYnZpZXcg5a695bqmXG4gICAgICAgICAgICAgICAgdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoJyN0YWItYmFyLXZpZXcnKS5ib3VuZGluZ0NsaWVudFJlY3QoKS5leGVjKHJlY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlcldpZHRoID0gcmVjdFswXS53aWR0aDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIOWboCBudnVlIOaaguS4jeaUr+aMgSBjbGFzcyDmn6Xor6JcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlUYWJTaXplID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFiTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVRhYlNpemUuc2VsZWN0KCcjJyArIHRoaXMudGFiTGlzdFtpXS5pZCkuYm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFiU2l6ZS5leGVjKHJlY3RzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdHMuZm9yRWFjaCgocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJMaXN0U2l6ZVtyZWN0LmRhdGFzZXQuaWRdID0gcmVjdDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbmRpY2F0b3IodGhpcy50YWJMaXN0U2l6ZVt0aGlzLnRhYkluZGV4XS5sZWZ0LCB0aGlzLnRhYkxpc3RTaXplW3RoaXMudGFiSW5kZXhdLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIodGhpcy50YWJJbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXG5cbiAgICAgICAgICAgICAgICAvLyAjaWZkZWYgTVAtV0VJWElOIHx8IEg1IHx8IE1QLVFRXG4gICAgICAgICAgICAgICAgdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoJy50YWItdmlldycpLmZpZWxkcyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlcldpZHRoID0gcmVzLndpZHRoO1xuICAgICAgICAgICAgICAgIH0pLmV4ZWMoKTtcbiAgICAgICAgICAgICAgICB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpLnNlbGVjdEFsbCgnLnVuaS10YWItaXRlbScpLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdHMuZm9yRWFjaCgocmVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJMaXN0U2l6ZVtyZWN0LmRhdGFzZXQuaWRdID0gcmVjdDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbmRpY2F0b3IodGhpcy50YWJMaXN0U2l6ZVt0aGlzLnRhYkluZGV4XS5sZWZ0LCB0aGlzLnRhYkxpc3RTaXplW3RoaXMudGFiSW5kZXhdLndpZHRoKTtcbiAgICAgICAgICAgICAgICB9KS5leGVjKCk7XG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yKGxlZnQsIHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JMaW5lTGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JMaW5lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2l0Y2hUYWIoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlTGlzdFtpbmRleF0uZGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRhYkRhdGEoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxpc3RbaW5kZXhdLnNldFNjcm9sbFJlZih0aGlzLl9oZWFkSGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g57yT5a2YIHRhYklkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUxpc3RbdGhpcy50YWJJbmRleF0uZGF0YUxpc3QubGVuZ3RoID4gTUFYX0NBQ0hFX0RBVEEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRXhpc3QgPSB0aGlzLmNhY2hlVGFiLmluZGV4T2YodGhpcy50YWJJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0V4aXN0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVRhYi5wdXNoKHRoaXMudGFiSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgLy8gI2lmZGVmIEFQUC1OVlVFXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYWJUbyhpbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXG4gICAgICAgICAgICAgICAgLy8gI2lmbmRlZiBBUFAtTlZVRVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50byA9IHRoaXMudGFiTGlzdFtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXG5cbiAgICAgICAgICAgICAgICAvLyDph4rmlL4gdGFiSWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWNoZVRhYi5sZW5ndGggPiBNQVhfQ0FDSEVfUEFHRSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVJbmRleCA9IHRoaXMuY2FjaGVUYWJbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJUYWJEYXRhKGNhY2hlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlVGFiLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsVGFiVG8oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuJHJlZnNbJ3RhYml0ZW0nICsgaW5kZXhdWzBdO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIC8vIFRPRE8gZml4IGlvcyBvZmZzZXRcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMudGFiYmFyV2lkdGggLyAyIC0gdGhpcy50YWJMaXN0U2l6ZVtpbmRleF0ud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJMaXN0U2l6ZVtpbmRleF0ucmlnaHQgPCB0aGlzLnRhYmJhcldpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy50YWJMaXN0U2l6ZVswXS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLCB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogLW9mZnNldFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRUYWJEYXRhKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTGlzdFtpbmRleF0ubG9hZERhdGEoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhclRhYkRhdGEoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMaXN0W2luZGV4XS5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAvKiAjaWZuZGVmIEFQUC1QTFVTICovXG4gICAgcGFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC8qICNlbmRpZiAqL1xuXG4gICAgLnBhZ2Uge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgLmZsZXhpYmxlLXZpZXcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyM2ZmO1xuICAgIH1cblxuICAgIC5wYWdlLWhlYWQge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC50YWJzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgLyogI2lmZGVmIE1QLUFMSVBBWSB8fCBNUC1CQUlEVSAqL1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAvKiAjZW5kaWYgKi9cbiAgICB9XG5cbiAgICAudGFiLWJhciB7XG4gICAgICAgIHdpZHRoOiA3NTBycHg7XG4gICAgICAgIGhlaWdodDogODRycHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgLyogI2VuZGlmICovXG4gICAgfVxuXG4gICAgLyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuICAgIC50YWItYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAvKiAjZW5kaWYgKi9cblxuICAgIC5zY3JvbGwtdmlldy1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAuc2Nyb2xsLXZpZXctdW5kZXJsaW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XG4gICAgfVxuXG4gICAgLnNjcm9sbC12aWV3LWFuaW1hdGlvbiB7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XG4gICAgfVxuXG4gICAgLnRhYi1iYXItbGluZSB7XG4gICAgICAgIGhlaWdodDogMXJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICB9XG5cbiAgICAudGFiLXZpZXcge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC51bmktdGFiLWl0ZW0ge1xuICAgICAgICAvKiAjaWZuZGVmIEFQUC1QTFVTICovXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgLyogI2VuZGlmICovXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLnVuaS10YWItaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICBmb250LXNpemU6IDMwcnB4O1xuICAgICAgICBoZWlnaHQ6IDgwcnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogODBycHg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAvKiAjaWZuZGVmIEFQUC1QTFVTICovXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIC8qICNlbmRpZiAqL1xuICAgIH1cblxuICAgIC51bmktdGFiLWl0ZW0tdGl0bGUtYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMwMDdBRkY7XG4gICAgfVxuXG4gICAgLnN3aXBlci1pdGVtIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuc3dpcGVyLXBhZ2Uge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!****************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper-page.nvue?vue&type=template&id=28320f89&scoped=true& */ 11);\n/* harmony import */ var _swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper-page.nvue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./swiper-page.nvue?vue&type=style&index=0&id=28320f89&scoped=true&lang=css& */ 15).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./swiper-page.nvue?vue&type=style&index=0&id=28320f89&scoped=true&lang=css& */ 15).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"28320f89\",\n  \"e3ef42d4\",\n  false,\n  _swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/artist/swiper-page.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDZ0U7QUFDTDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFGQUE2RTtBQUNqSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUZBQTZFO0FBQ3RJOztBQUVBOztBQUVBO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc3dpcGVyLXBhZ2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODMyMGY4OSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N3aXBlci1wYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N3aXBlci1wYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zd2lwZXItcGFnZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjgzMjBmODkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3N3aXBlci1wYWdlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODMyMGY4OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyODMyMGY4OVwiLFxuICBcImUzZWY0MmQ0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2FydGlzdC9zd2lwZXItcGFnZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***********************************************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue?vue&type=template&id=28320f89&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-page.nvue?vue&type=template&id=28320f89&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_template_id_28320f89_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue?vue&type=template&id=28320f89&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: ["uni-swiper-page"] }, [
    _c(
      "list",
      {
        ref: "list",
        staticClass: ["list"],
        attrs: { offsetAccuracy: 5, bounce: false, fixFreezing: "true" }
      },
      [
        _vm._l(_vm.dataList, function(item, index) {
          return _c(
            "cell",
            {
              key: item.id,
              ref: "item" + index,
              refInFor: true,
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [
              _c("view", { staticClass: ["list-item"] }, [
                _c(
                  "u-text",
                  { appendAsTree: true, attrs: { append: "tree" } },
                  [_vm._v(_vm._s(item.name))]
                )
              ])
            ]
          )
        }),
        _c("cell", {
          staticClass: ["loading"],
          appendAsTree: true,
          attrs: { append: "tree" }
        })
      ],
      2
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!*****************************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-page.nvue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJhLENBQWdCLGdkQUFHLEVBQUMiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3dpcGVyLXBhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N3aXBlci1wYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    pid: {\n      type: [Number, String],\n      default: '' },\n\n    parentId: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      scrollable: true,\n      dataList: [] };\n\n  },\n  created: function created() {\n    for (var i = 0; i < 30; i++) {\n      this.dataList.push({\n        id: i,\n        name: i });\n\n    }\n  },\n  methods: {\n    setScrollRef: function setScrollRef(height) {\n      if (this.$refs['list'].setSpecialEffects) {\n        this.$refs['list'].setSpecialEffects({\n          id: this.parentId,\n          headerHeight: height });\n\n      }\n    },\n    loadData: function loadData() {\n      // 首次激活时被调用\n    },\n    clear: function clear() {\n      // 释放数据时被调用，参考 swiper-list 缓存配置\n      this.dataList.length = 0;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvYXJ0aXN0L3N3aXBlci1wYWdlLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBTEEsRUFEQTs7O0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxrQkFGQTs7QUFJQSxHQWhCQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLGVBRkE7O0FBSUE7QUFDQSxHQXhCQTtBQXlCQTtBQUNBLGdCQURBLHdCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDhCQUZBOztBQUlBO0FBQ0EsS0FSQTtBQVNBLFlBVEEsc0JBU0E7QUFDQTtBQUNBLEtBWEE7QUFZQSxTQVpBLG1CQVlBO0FBQ0E7QUFDQTtBQUNBLEtBZkEsRUF6QkEsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8dmlldyBjbGFzcz1cInVuaS1zd2lwZXItcGFnZVwiPlxuICAgICAgICA8bGlzdCByZWY9XCJsaXN0XCIgY2xhc3M9XCJsaXN0XCIgOm9mZnNldC1hY2N1cmFjeT1cIjVcIiA6Ym91bmNlPVwiZmFsc2VcIiBmaXhGcmVlemluZz1cInRydWVcIj5cbiAgICAgICAgICAgIDxjZWxsIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhTGlzdFwiIDprZXk9XCJpdGVtLmlkXCIgOnJlZj1cIidpdGVtJytpbmRleFwiPlxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pnt7aXRlbS5uYW1lfX08L3RleHQ+XG4gICAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPC9jZWxsPlxuICAgICAgICAgICAgPGNlbGwgY2xhc3M9XCJsb2FkaW5nXCI+PC9jZWxsPlxuICAgICAgICA8L2xpc3Q+XG4gICAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwaWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyZW50SWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhTGlzdDogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNldFNjcm9sbFJlZihoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmc1snbGlzdCddLnNldFNwZWNpYWxFZmZlY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2xpc3QnXS5zZXRTcGVjaWFsRWZmZWN0cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wYXJlbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgICAgICAgICAvLyDpppbmrKHmv4DmtLvml7booqvosIPnlKhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhcigpIHtcbiAgICAgICAgICAgICAgICAvLyDph4rmlL7mlbDmja7ml7booqvosIPnlKjvvIzlj4LogIMgc3dpcGVyLWxpc3Qg57yT5a2Y6YWN572uXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTGlzdC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnVuaS1zd2lwZXItcGFnZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICB9XG5cbiAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*************************************************************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue?vue&type=style&index=0&id=28320f89&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_style_index_0_id_28320f89_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swiper-page.nvue?vue&type=style&index=0&id=28320f89&scoped=true&lang=css& */ 16);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_style_index_0_id_28320f89_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_style_index_0_id_28320f89_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_style_index_0_id_28320f89_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_style_index_0_id_28320f89_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swiper_page_nvue_vue_type_style_index_0_id_28320f89_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/pages/artist/swiper-page.nvue?vue&type=style&index=0&id=28320f89&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-swiper-page": {
    "": {
      "flex": [
        1,
        0,
        0,
        0
      ],
      "position": [
        "absolute",
        0,
        0,
        0
      ],
      "left": [
        0,
        0,
        0,
        0
      ],
      "top": [
        0,
        0,
        0,
        0
      ],
      "right": [
        0,
        0,
        0,
        0
      ],
      "bottom": [
        0,
        0,
        0,
        0
      ]
    }
  },
  ".list": {
    "": {
      "flex": [
        1,
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#ebebeb",
        0,
        0,
        1
      ]
    }
  },
  ".list-item": {
    "": {
      "marginLeft": [
        "12",
        0,
        0,
        2
      ],
      "marginRight": [
        "12",
        0,
        0,
        2
      ],
      "marginTop": [
        "12",
        0,
        0,
        2
      ],
      "paddingTop": [
        "20",
        0,
        0,
        2
      ],
      "paddingRight": [
        "20",
        0,
        0,
        2
      ],
      "paddingBottom": [
        "20",
        0,
        0,
        2
      ],
      "paddingLeft": [
        "20",
        0,
        0,
        2
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        2
      ],
      "borderRadius": [
        "5",
        0,
        0,
        2
      ]
    }
  },
  ".loading": {
    "": {
      "height": [
        "20",
        0,
        0,
        3
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!*****************************************************************************************************!*\
  !*** D:/Project/jk-music-uniapp/pages/artist/test.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Project/jk-music-uniapp/pages/artist/test.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "flex": [
        1,
        0,
        0,
        0
      ]
    }
  },
  ".header": {
    "": {
      "height": [
        "160",
        0,
        0,
        1
      ],
      "flexDirection": [
        "row",
        0,
        0,
        1
      ],
      "alignItems": [
        "center",
        0,
        0,
        1
      ],
      "justifyContent": [
        "center",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#f4f4f4",
        0,
        0,
        1
      ]
    }
  },
  ".header-title": {
    "": {
      "fontSize": [
        "30",
        0,
        0,
        2
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        2
      ],
      "color": [
        "#444444",
        0,
        0,
        2
      ]
    }
  },
  ".flexible-view": {
    "": {
      "backgroundColor": [
        "#f823ff",
        0,
        0,
        3
      ]
    }
  },
  ".page-head": {
    "": {
      "height": [
        "200",
        0,
        0,
        4
      ],
      "flexDirection": [
        "column",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ],
      "justifyContent": [
        "center",
        0,
        0,
        4
      ],
      "backgroundColor": [
        "#FF0000",
        0,
        0,
        4
      ]
    }
  },
  ".tabs": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        5
      ],
      "overflow": [
        "hidden",
        0,
        0,
        5
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        5
      ]
    }
  },
  ".tab-bar": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        6
      ],
      "height": [
        "84rpx",
        0,
        0,
        6
      ],
      "flexDirection": [
        "row",
        0,
        0,
        6
      ]
    }
  },
  ".scroll-view-indicator": {
    "": {
      "position": [
        "relative",
        0,
        0,
        7
      ],
      "height": [
        "2",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        7
      ]
    }
  },
  ".scroll-view-underline": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        8
      ],
      "top": [
        0,
        0,
        0,
        8
      ],
      "bottom": [
        0,
        0,
        0,
        8
      ],
      "width": [
        0,
        0,
        0,
        8
      ],
      "backgroundColor": [
        "#007AFF",
        0,
        0,
        8
      ]
    }
  },
  ".scroll-view-animation": {
    "": {
      "transitionDuration": [
        200,
        0,
        0,
        9
      ],
      "transitionProperty": [
        "left",
        0,
        0,
        9
      ]
    }
  },
  ".tab-bar-line": {
    "": {
      "height": [
        "1rpx",
        0,
        0,
        10
      ],
      "backgroundColor": [
        "#cccccc",
        0,
        0,
        10
      ]
    }
  },
  ".tab-view": {
    "": {
      "flex": [
        1,
        0,
        0,
        11
      ]
    }
  },
  ".uni-tab-item": {
    "": {
      "flexWrap": [
        "nowrap",
        0,
        0,
        12
      ],
      "paddingLeft": [
        "25",
        0,
        0,
        12
      ],
      "paddingRight": [
        "25",
        0,
        0,
        12
      ]
    }
  },
  ".uni-tab-item-title": {
    "": {
      "color": [
        "#555555",
        0,
        0,
        13
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        13
      ],
      "height": [
        "80rpx",
        0,
        0,
        13
      ],
      "lineHeight": [
        "80rpx",
        0,
        0,
        13
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        13
      ]
    }
  },
  ".uni-tab-item-title-active": {
    "": {
      "color": [
        "#007AFF",
        0,
        0,
        14
      ]
    }
  },
  ".swiper-item": {
    "": {
      "flex": [
        1,
        0,
        0,
        15
      ],
      "flexDirection": [
        "column",
        0,
        0,
        15
      ]
    }
  },
  ".swiper-page": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ],
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "position": [
        "absolute",
        0,
        0,
        16
      ],
      "left": [
        0,
        0,
        0,
        16
      ],
      "top": [
        0,
        0,
        0,
        16
      ],
      "right": [
        0,
        0,
        0,
        16
      ],
      "bottom": [
        0,
        0,
        0,
        16
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);