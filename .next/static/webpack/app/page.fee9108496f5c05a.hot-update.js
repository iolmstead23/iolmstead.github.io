"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/three/planet.tsx":
/*!*************************************!*\
  !*** ./components/three/planet.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Planets; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_cannon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/cannon */ \"(app-pages-browser)/./node_modules/@react-three/cannon/dist/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Planets(planet) {\n    _s();\n    const [colorMap] = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.D)(three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader, [\n        planet.texture\n    ]);\n    const [ref, api] = (0,_react_three_cannon__WEBPACK_IMPORTED_MODULE_4__.useSphere)(()=>({\n            mass: 1,\n            position: [\n                Math.random() - 0.5,\n                Math.random() * 20,\n                Math.random() - 0.5\n            ],\n            args: [\n                planet.size\n            ]\n        }));\n    const speed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(10);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            ref: ref,\n            onClick: ()=>api.angularVelocity.set(Math.sign(Math.random() - 0.5) * speed.current, 0, Math.sign(Math.random() - 0.5) * speed.current),\n            castShadow: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                    args: [\n                        planet.size\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Olmsteads\\\\Documents\\\\VS Projects\\\\ianolmstead.com\\\\components\\\\three\\\\planet.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                    map: colorMap\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Olmsteads\\\\Documents\\\\VS Projects\\\\ianolmstead.com\\\\components\\\\three\\\\planet.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Olmsteads\\\\Documents\\\\VS Projects\\\\ianolmstead.com\\\\components\\\\three\\\\planet.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Planets, \"CmkPCEB/YHcseOMcGRB+9kQ9CyE=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.D,\n        _react_three_cannon__WEBPACK_IMPORTED_MODULE_4__.useSphere\n    ];\n});\n_c = Planets;\nvar _c;\n$RefreshReg$(_c, \"Planets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGhyZWUvcGxhbmV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRjtBQUNHO0FBQ1o7QUFPdEIsU0FBU0ksUUFBUUMsTUFBYzs7SUFFMUMsTUFBTSxDQUFDQyxTQUFTLEdBQUdMLHFEQUFTQSxDQUFDRSxnREFBYUEsRUFBRTtRQUFDRSxPQUFPRSxPQUFPO0tBQUM7SUFFNUQsTUFBTSxDQUFDQyxLQUFLQyxJQUFJLEdBQVFULDhEQUFTQSxDQUFDLElBQU87WUFDckNVLE1BQU07WUFDTkMsVUFBVTtnQkFBQ0MsS0FBS0MsTUFBTSxLQUFLO2dCQUFLRCxLQUFLQyxNQUFNLEtBQUs7Z0JBQUlELEtBQUtDLE1BQU0sS0FBSzthQUFJO1lBQ3hFQyxNQUFNO2dCQUFDVCxPQUFPVSxJQUFJO2FBQUM7UUFDdkI7SUFFQSxNQUFNQyxRQUFrQ2QsNkNBQU1BLENBQUM7SUFFL0MscUJBQ0k7a0JBQ0ksNEVBQUNlO1lBQ0dULEtBQUtBO1lBQ0xVLFNBQVMsSUFBTVQsSUFBSVUsZUFBZSxDQUFDQyxHQUFHLENBQ2xDUixLQUFLUyxJQUFJLENBQUNULEtBQUtDLE1BQU0sS0FBRyxPQUFPRyxNQUFNTSxPQUFPLEVBQzVDLEdBQ0FWLEtBQUtTLElBQUksQ0FBQ1QsS0FBS0MsTUFBTSxLQUFHLE9BQU9HLE1BQU1NLE9BQU87WUFDaERDLFVBQVU7OzhCQUVWLDhEQUFDQztvQkFBZVYsTUFBTTt3QkFBRVQsT0FBT1UsSUFBSTtxQkFBQzs7Ozs7OzhCQUNwQyw4REFBQ1U7b0JBQXFCQyxLQUFLcEI7Ozs7Ozs7Ozs7Ozs7QUFJM0M7R0EzQndCRjs7UUFFREgsaURBQVNBO1FBRUpELDBEQUFTQTs7O0tBSmJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhyZWUvcGxhbmV0LnRzeD8wNzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNwaGVyZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvY2Fubm9uXCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIlxyXG5pbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gXCJ0aHJlZVwiXHJcblxyXG5pbnRlcmZhY2UgUGxhbmV0IHtcclxuICAgIHRleHR1cmU6IHN0cmluZztcclxuICAgIHNpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhbmV0cyhwbGFuZXQ6IFBsYW5ldCkge1xyXG5cclxuICAgIGNvbnN0IFtjb2xvck1hcF0gPSB1c2VMb2FkZXIoVGV4dHVyZUxvYWRlciwgW3BsYW5ldC50ZXh0dXJlXSlcclxuXHJcbiAgICBjb25zdCBbcmVmLCBhcGldOiBhbnkgPSB1c2VTcGhlcmUoKCkgPT4gKHtcclxuICAgICAgICBtYXNzOiAxLFxyXG4gICAgICAgIHBvc2l0aW9uOiBbTWF0aC5yYW5kb20oKSAtIDAuNSwgTWF0aC5yYW5kb20oKSAqIDIwLCBNYXRoLnJhbmRvbSgpIC0gMC41XSxcclxuICAgICAgICBhcmdzOiBbcGxhbmV0LnNpemVdXHJcbiAgICB9KSlcclxuXHJcbiAgICBjb25zdCBzcGVlZDogTXV0YWJsZVJlZk9iamVjdDxudW1iZXI+ID0gdXNlUmVmKDEwKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1lc2hcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBpLmFuZ3VsYXJWZWxvY2l0eS5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5zaWduKE1hdGgucmFuZG9tKCktMC41KSAqIHNwZWVkLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnNpZ24oTWF0aC5yYW5kb20oKS0wLjUpICogc3BlZWQuY3VycmVudCl9XHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbIHBsYW5ldC5zaXplXX0vPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17Y29sb3JNYXB9Lz5cclxuICAgICAgICAgICAgPC9tZXNoPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTcGhlcmUiLCJ1c2VMb2FkZXIiLCJ1c2VSZWYiLCJUZXh0dXJlTG9hZGVyIiwiUGxhbmV0cyIsInBsYW5ldCIsImNvbG9yTWFwIiwidGV4dHVyZSIsInJlZiIsImFwaSIsIm1hc3MiLCJwb3NpdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJhcmdzIiwic2l6ZSIsInNwZWVkIiwibWVzaCIsIm9uQ2xpY2siLCJhbmd1bGFyVmVsb2NpdHkiLCJzZXQiLCJzaWduIiwiY3VycmVudCIsImNhc3RTaGFkb3ciLCJzcGhlcmVHZW9tZXRyeSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/three/planet.tsx\n"));

/***/ })

});