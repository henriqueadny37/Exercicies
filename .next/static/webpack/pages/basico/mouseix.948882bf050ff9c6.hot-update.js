"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/basico/mouseix",{

/***/ "./pages/basico/mouseix.jsx":
/*!**********************************!*\
  !*** ./pages/basico/mouseix.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ mouseix; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction mouseix() {\n    var whereMove = function whereMove(ev) {\n        setX(ev.clientX);\n        alterarY(ev.clientY);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), X = ref[0], setX = ref[1];\n    var arrayY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    var y = arrayY[0];\n    var alterarY = arrayY[1];\n    var bords = {\n        backgroundColor: \"#000\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: bords,\n        onMouseMove: whereMove,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Eixo H: \",\n                    X\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adeny/projects/nextjs-blog/pages/basico/mouseix.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Eixo V: \",\n                    y\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adeny/projects/nextjs-blog/pages/basico/mouseix.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adeny/projects/nextjs-blog/pages/basico/mouseix.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n};\n_s(mouseix, \"CrZo3x2qJ7cYIc5/AIG19bhuucM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iYXNpY28vbW91c2VpeC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFFakIsU0FBU0MsT0FBTyxHQUFFO1FBWWhCQyxTQUFTLEdBQWxCLFNBQVNBLFNBQVMsQ0FBQ0MsRUFBRSxFQUFDO1FBQ2xCQyxJQUFJLENBQUNELEVBQUUsQ0FBQ0UsT0FBTyxDQUFDO1FBQ2hCQyxRQUFRLENBQUNILEVBQUUsQ0FBQ0ksT0FBTyxDQUFDO0tBQ3ZCOztJQWJMLElBQWtCUCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXRCUSxDQUFDLEdBQVVSLEdBQVcsR0FBckIsRUFBRUksSUFBSSxHQUFJSixHQUFXLEdBQWY7SUFFVixJQUFNUyxNQUFNLEdBQUdULCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUlVLENBQUMsR0FBR0QsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqQixJQUFNSCxRQUFRLEdBQUdHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFOUIsSUFBTUUsS0FBSyxHQUFHO1FBQ1hDLGVBQWUsRUFBQyxNQUFNO0tBQ3hCO0lBT0QscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFFSCxLQUFLO1FBQUVJLFdBQVcsRUFBRWIsU0FBUzs7MEJBQ3pDLDhEQUFDYyxNQUFJOztvQkFBQyxVQUFRO29CQUFDUixDQUFDOzs7Ozs7b0JBQVE7MEJBQ3hCLDhEQUFDUSxNQUFJOztvQkFBQyxVQUFRO29CQUFDTixDQUFDOzs7Ozs7b0JBQVE7Ozs7OztZQUNsQixDQUNUO0NBQ0o7R0F2QnVCVCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jhc2ljby9tb3VzZWl4LmpzeD9jNjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91c2VpeCgpe1xuXG4gICAgY29uc3QgW1gsIHNldFhdID0gdXNlU3RhdGUoMClcblxuICAgICAgICBjb25zdCBhcnJheVkgPSB1c2VTdGF0ZSgwKVxuICAgICAgICBsZXQgeSA9IGFycmF5WVswXVxuICAgICAgICBjb25zdCBhbHRlcmFyWSA9IGFycmF5WVsxXVxuXG4gICAgY29uc3QgYm9yZHMgPSB7XG4gICAgICAgYmFja2dyb3VuZENvbG9yOlwiIzAwMFwiLFxuICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3aGVyZU1vdmUoZXYpe1xuICAgICAgICAgICAgc2V0WChldi5jbGllbnRYKVxuICAgICAgICAgICAgYWx0ZXJhclkoZXYuY2xpZW50WSlcbiAgICAgICAgfVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17Ym9yZHN9IG9uTW91c2VNb3ZlPXt3aGVyZU1vdmV9PlxuICAgICAgICA8c3Bhbj5FaXhvIEg6IHtYfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+RWl4byBWOiB7eX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtb3VzZWl4Iiwid2hlcmVNb3ZlIiwiZXYiLCJzZXRYIiwiY2xpZW50WCIsImFsdGVyYXJZIiwiY2xpZW50WSIsIlgiLCJhcnJheVkiLCJ5IiwiYm9yZHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXYiLCJzdHlsZSIsIm9uTW91c2VNb3ZlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/basico/mouseix.jsx\n"));

/***/ })

});