/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage/home4-dark",{

/***/ "./src/components/Intro-with-slider/intro-with-slider.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Intro-with-slider/intro-with-slider.jsx ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/homepage/home4-dark.jsx":
/*!*******************************************!*\
  !*** ./src/pages/homepage/home4-dark.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _components_Team_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Team/team */ \"./src/components/Team/team.jsx\");\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer/footer */ \"./src/components/Footer/footer.jsx\");\n/* harmony import */ var _components_Clients2_clients2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Clients2/clients2 */ \"./src/components/Clients2/clients2.jsx\");\n/* harmony import */ var _components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/blogs/Blogs4/blogs4 */ \"./src/components/blogs/Blogs4/blogs4.jsx\");\n/* harmony import */ var _components_Services_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Services/services */ \"./src/components/Services/services.jsx\");\n/* harmony import */ var _components_About_us2_about_us2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/About-us2/about-us2 */ \"./src/components/About-us2/about-us2.jsx\");\n/* harmony import */ var _components_Portfolio_portfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Portfolio/portfolio */ \"./src/components/Portfolio/portfolio.jsx\");\n/* harmony import */ var _components_s_contact_form_s_contact_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/s-contact-form/s-contact-form */ \"./src/components/s-contact-form/s-contact-form.jsx\");\n/* harmony import */ var _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Intro-with-slider/intro-with-slider */ \"./src/components/Intro-with-slider/intro-with-slider.jsx\");\n/* harmony import */ var _components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Video-with-testimonials/video-with-testimonials */ \"./src/components/Video-with-testimonials/video-with-testimonials.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samsahotra/Desktop/Main_files/vie/src/pages/homepage/home4-dark.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Homepage4 = function Homepage4() {\n  _s();\n\n  var fixedSlider = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var MainContent = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    setInterval(function () {\n      if (fixedSlider.current) {\n        var slidHeight = fixedSlider.current.offsetHeight;\n      }\n\n      if (MainContent.current) {\n        MainContent.current.style.marginTop = slidHeight + \"px\";\n      }\n    }, 1000);\n    var navbar = navbarRef.current,\n        logo = logoRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add(\"nav-scroll\");\n    } else {\n      navbar.classList.remove(\"nav-scroll\");\n    }\n\n    window.addEventListener(\"scroll\", function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add(\"nav-scroll\");\n      } else {\n        navbar.classList.remove(\"nav-scroll\");\n      }\n    });\n  }, [fixedSlider, MainContent, navbarRef]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_components_Intro_with_slider_intro_with_slider__WEBPACK_IMPORTED_MODULE_11___default()), {\n      sliderRef: fixedSlider\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n      ref: MainContent,\n      className: \"main-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_About_us2_about_us2__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Services_services__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        lines: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Portfolio_portfolio__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        grid: 2,\n        filterPosition: \"left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Video_with_testimonials_video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Clients2_clients2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        theme: \"dark\",\n        length: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Team_team__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_s_contact_form_s_contact_form__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        hideBGCOLOR: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Homepage4, \"YcvxAMScyFYs9YZ0O46x4wgwCw8=\");\n\n_c = Homepage4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage4);\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage4\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UvaG9tZTQtZGFyay5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxXQUFXLEdBQUdkLG1EQUFBLENBQWEsSUFBYixDQUFwQjtBQUNBLE1BQU1nQixXQUFXLEdBQUdoQixtREFBQSxDQUFhLElBQWIsQ0FBcEI7QUFDQSxNQUFNaUIsU0FBUyxHQUFHakIsbURBQUEsQ0FBYSxJQUFiLENBQWxCO0FBQ0EsTUFBTWtCLE9BQU8sR0FBR2xCLG1EQUFBLENBQWEsSUFBYixDQUFoQjtBQUVBQSxFQUFBQSxzREFBQSxDQUFnQixZQUFNO0FBQ3BCb0IsSUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDaEIsVUFBSU4sV0FBVyxDQUFDTyxPQUFoQixFQUF5QjtBQUN2QixZQUFJQyxVQUFVLEdBQUdSLFdBQVcsQ0FBQ08sT0FBWixDQUFvQkUsWUFBckM7QUFDRDs7QUFDRCxVQUFJUCxXQUFXLENBQUNLLE9BQWhCLEVBQXlCO0FBQ3ZCTCxRQUFBQSxXQUFXLENBQUNLLE9BQVosQ0FBb0JHLEtBQXBCLENBQTBCQyxTQUExQixHQUFzQ0gsVUFBVSxHQUFHLElBQW5EO0FBQ0Q7QUFDRixLQVBVLEVBT1IsSUFQUSxDQUFYO0FBUUEsUUFBSUksTUFBTSxHQUFHVCxTQUFTLENBQUNJLE9BQXZCO0FBQUEsUUFDRU0sSUFBSSxHQUFHVCxPQUFPLENBQUNHLE9BRGpCOztBQUVBLFFBQUlPLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUF6QixFQUE4QjtBQUM1QkgsTUFBQUEsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixZQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMTCxNQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLFlBQXhCO0FBQ0Q7O0FBQ0RKLElBQUFBLE1BQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxVQUFJTCxNQUFNLENBQUNDLFdBQVAsR0FBcUIsR0FBekIsRUFBOEI7QUFDNUJILFFBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsWUFBckI7QUFDRCxPQUZELE1BRU87QUFDTEwsUUFBQUEsTUFBTSxDQUFDSSxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixZQUF4QjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBdkJELEVBdUJHLENBQUNsQixXQUFELEVBQWNFLFdBQWQsRUFBMkJDLFNBQTNCLENBdkJIO0FBeUJBLHNCQUNFLCtEQUFDLHFEQUFEO0FBQUEsNEJBQ0UsK0RBQUMsaUVBQUQ7QUFBUSxRQUFFLEVBQUVBLFNBQVo7QUFBdUIsUUFBRSxFQUFFQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSwrREFBQyx5RkFBRDtBQUFpQixlQUFTLEVBQUVKO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUssU0FBRyxFQUFFRSxXQUFWO0FBQXVCLGVBQVMsRUFBQyxjQUFqQztBQUFBLDhCQUNFLCtEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLCtEQUFDLHFFQUFEO0FBQVUsYUFBSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLCtEQUFDLHVFQUFEO0FBQVcsWUFBSSxFQUFFLENBQWpCO0FBQW9CLHNCQUFjLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsK0RBQUMsb0dBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UsK0RBQUMscUVBQUQ7QUFBVSxhQUFLLEVBQUMsTUFBaEI7QUFBdUIsY0FBTSxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FLCtEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FLCtEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFLCtEQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVNFLCtEQUFDLGlFQUFEO0FBQVEsbUJBQVc7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBaEREOztHQUFNSDs7S0FBQUE7QUFrRE4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWVwYWdlL2hvbWU0LWRhcmsuanN4P2Q1MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGFya1RoZW1lIGZyb20gXCIuLi8uLi9sYXlvdXRzL0RhcmtcIjtcclxuaW1wb3J0IFRlYW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVhbS90ZWFtXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IENsaWVudHMyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NsaWVudHMyL2NsaWVudHMyXCI7XHJcbmltcG9ydCBCbG9nczQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmxvZ3MvQmxvZ3M0L2Jsb2dzNFwiO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VydmljZXMvc2VydmljZXNcIjtcclxuaW1wb3J0IEFib3V0VXMyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Fib3V0LXVzMi9hYm91dC11czJcIjtcclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3J0Zm9saW8vcG9ydGZvbGlvXCI7XHJcbmltcG9ydCBTQ29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcy1jb250YWN0LWZvcm0vcy1jb250YWN0LWZvcm1cIjtcclxuaW1wb3J0IEludHJvV2l0aFNsaWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnRyby13aXRoLXNsaWRlci9pbnRyby13aXRoLXNsaWRlclwiO1xyXG5pbXBvcnQgVmlkZW9XaXRoVGVzdGltb25pYWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ZpZGVvLXdpdGgtdGVzdGltb25pYWxzL3ZpZGVvLXdpdGgtdGVzdGltb25pYWxzXCI7XHJcblxyXG5jb25zdCBIb21lcGFnZTQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZml4ZWRTbGlkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgTWFpbkNvbnRlbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChmaXhlZFNsaWRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgdmFyIHNsaWRIZWlnaHQgPSBmaXhlZFNsaWRlci5jdXJyZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTWFpbkNvbnRlbnQuY3VycmVudCkge1xyXG4gICAgICAgIE1haW5Db250ZW50LmN1cnJlbnQuc3R5bGUubWFyZ2luVG9wID0gc2xpZEhlaWdodCArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQsXHJcbiAgICAgIGxvZ28gPSBsb2dvUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtmaXhlZFNsaWRlciwgTWFpbkNvbnRlbnQsIG5hdmJhclJlZl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhcmtUaGVtZT5cclxuICAgICAgPE5hdmJhciBucj17bmF2YmFyUmVmfSBscj17bG9nb1JlZn0gLz5cclxuICAgICAgPEludHJvV2l0aFNsaWRlciBzbGlkZXJSZWY9e2ZpeGVkU2xpZGVyfSAvPlxyXG4gICAgICA8ZGl2IHJlZj17TWFpbkNvbnRlbnR9IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxBYm91dFVzMiAvPlxyXG4gICAgICAgIDxTZXJ2aWNlcyBsaW5lcyAvPlxyXG4gICAgICAgIDxQb3J0Zm9saW8gZ3JpZD17Mn0gZmlsdGVyUG9zaXRpb249XCJsZWZ0XCIgLz5cclxuICAgICAgICA8VmlkZW9XaXRoVGVzdGltb25pYWxzIC8+XHJcbiAgICAgICAgPENsaWVudHMyIHRoZW1lPVwiZGFya1wiIGxlbmd0aD17NH0gLz5cclxuICAgICAgICA8VGVhbSAvPlxyXG4gICAgICAgIDxCbG9nczQgLz5cclxuICAgICAgICA8U0NvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgPEZvb3RlciBoaWRlQkdDT0xPUiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRGFya1RoZW1lPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRhcmtUaGVtZSIsIlRlYW0iLCJOYXZiYXIiLCJGb290ZXIiLCJDbGllbnRzMiIsIkJsb2dzNCIsIlNlcnZpY2VzIiwiQWJvdXRVczIiLCJQb3J0Zm9saW8iLCJTQ29udGFjdEZvcm0iLCJJbnRyb1dpdGhTbGlkZXIiLCJWaWRlb1dpdGhUZXN0aW1vbmlhbHMiLCJIb21lcGFnZTQiLCJmaXhlZFNsaWRlciIsInVzZVJlZiIsIk1haW5Db250ZW50IiwibmF2YmFyUmVmIiwibG9nb1JlZiIsInVzZUVmZmVjdCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNsaWRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm5hdmJhciIsImxvZ28iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/homepage/home4-dark.jsx\n");

/***/ })

});