"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/basico/mouseix";
exports.ids = ["pages/basico/mouseix"];
exports.modules = {

/***/ "./pages/basico/mouseix.jsx":
/*!**********************************!*\
  !*** ./pages/basico/mouseix.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mouseix)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction mouseix() {\n    const { 0: X , 1: setx  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const arrayY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let Y = arrayY[0];\n    const alterarY = arrayY[1];\n    const belt = {\n        backgroundColor: \"#222\",\n        color: \"#fafafa\",\n        height: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        fontSize: \"3rem\",\n        fontFamily: \"monospace\"\n    };\n    function whereMove(ev) {\n        setx(ev.clientX);\n        alterarY(ev.clientY);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseMove: whereMove,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Eixo X: \",\n                    X\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adeny/projects/nextjs-blog/pages/basico/mouseix.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Eixo Y: \",\n                    Y\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adeny/projects/nextjs-blog/pages/basico/mouseix.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adeny/projects/nextjs-blog/pages/basico/mouseix.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iYXNpY28vbW91c2VpeC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQztBQUVsQixTQUFTQyxPQUFPLEdBQUU7SUFDN0IsTUFBTSxLQUFDQyxDQUFDLE1BQUVDLElBQUksTUFBSUgsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFN0IsTUFBTUksTUFBTSxHQUFHSiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJSyxDQUFDLEdBQUdELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakIsTUFBTUUsUUFBUSxHQUFHRixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRTFCLE1BQU1HLElBQUksR0FBRztRQUNUQyxlQUFlLEVBQUMsTUFBTTtRQUN0QkMsS0FBSyxFQUFDLFNBQVM7UUFDZkMsTUFBTSxFQUFDLE9BQU87UUFDZEMsVUFBVSxFQUFDLFFBQVE7UUFDbkJDLGNBQWMsRUFBQyxRQUFRO1FBQ3ZCQyxPQUFPLEVBQUMsTUFBTTtRQUNkQyxhQUFhLEVBQUMsUUFBUTtRQUN0QkMsUUFBUSxFQUFDLE1BQU07UUFDZkMsVUFBVSxFQUFDLFdBQVc7S0FFekI7SUFFRCxTQUFTQyxTQUFTLENBQUNDLEVBQUUsRUFBQztRQUNsQmYsSUFBSSxDQUFDZSxFQUFFLENBQUVDLE9BQU8sQ0FBQztRQUNqQmIsUUFBUSxDQUFDWSxFQUFFLENBQUNFLE9BQU8sQ0FBQztLQUN2QjtJQUVELHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFdBQVcsRUFBRUwsU0FBUzs7MEJBQ3ZCLDhEQUFDTSxNQUFJOztvQkFBQyxVQUFRO29CQUFDckIsQ0FBQzs7Ozs7O29CQUFROzBCQUN4Qiw4REFBQ3FCLE1BQUk7O29CQUFDLFVBQVE7b0JBQUNsQixDQUFDOzs7Ozs7b0JBQVE7Ozs7OztZQUN0QixDQUNUO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9iYXNpY28vbW91c2VpeC5qc3g/YzY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3VzZWl4KCl7XG4gICAgY29uc3QgW1gsIHNldHhdID0gdXNlU3RhdGUoMClcblxuICAgIGNvbnN0IGFycmF5WSA9IHVzZVN0YXRlKDApXG4gICAgbGV0IFkgPSBhcnJheVlbMF1cbiAgICBjb25zdCBhbHRlcmFyWSA9IGFycmF5WVsxXVxuXG4gICAgY29uc3QgYmVsdCA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiIzIyMlwiLFxuICAgICAgICBjb2xvcjpcIiNmYWZhZmFcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwdmhcIixcbiAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgIGZvbnRTaXplOlwiM3JlbVwiLFxuICAgICAgICBmb250RmFtaWx5OlwibW9ub3NwYWNlXCIsXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdoZXJlTW92ZShldil7XG4gICAgICAgIHNldHgoZXYuIGNsaWVudFgpXG4gICAgICAgIGFsdGVyYXJZKGV2LmNsaWVudFkpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IG9uTW91c2VNb3ZlPXt3aGVyZU1vdmV9PlxuICAgICAgICAgICAgPHNwYW4+RWl4byBYOiB7WH08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5FaXhvIFk6IHtZfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1vdXNlaXgiLCJYIiwic2V0eCIsImFycmF5WSIsIlkiLCJhbHRlcmFyWSIsImJlbHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFNpemUiLCJmb250RmFtaWx5Iiwid2hlcmVNb3ZlIiwiZXYiLCJjbGllbnRYIiwiY2xpZW50WSIsImRpdiIsIm9uTW91c2VNb3ZlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/basico/mouseix.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/basico/mouseix.jsx"));
module.exports = __webpack_exports__;

})();