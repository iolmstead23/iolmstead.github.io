"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use-measure";
exports.ids = ["vendor-chunks/react-use-measure"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-use-measure/dist/web.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use-measure/dist/web.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMeasure)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ \"(ssr)/./node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useMeasure(_temp) {\n    let { debounce, scroll, polyfill, offsetSize } = _temp === void 0 ? {\n        debounce: 0,\n        scroll: false,\n        offsetSize: false\n    } : _temp;\n    const ResizeObserver = polyfill || ( true ? class ResizeObserver {\n    } : 0);\n    if (!ResizeObserver) {\n        throw new Error(\"This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills\");\n    }\n    const [bounds, set] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        left: 0,\n        top: 0,\n        width: 0,\n        height: 0,\n        bottom: 0,\n        right: 0,\n        x: 0,\n        y: 0\n    }); // keep all state in a ref\n    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        element: null,\n        scrollContainers: null,\n        resizeObserver: null,\n        lastBounds: bounds\n    }); // set actual debounce values early, so effects know if they should react accordingly\n    const scrollDebounce = debounce ? typeof debounce === \"number\" ? debounce : debounce.scroll : null;\n    const resizeDebounce = debounce ? typeof debounce === \"number\" ? debounce : debounce.resize : null; // make sure to update state only as long as the component is truly mounted\n    const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        mounted.current = true;\n        return ()=>void (mounted.current = false);\n    }); // memoize handlers, so event-listeners know when they should update\n    const [forceRefresh, resizeChange, scrollChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        const callback = ()=>{\n            if (!state.current.element) return;\n            const { left, top, width, height, bottom, right, x, y } = state.current.element.getBoundingClientRect();\n            const size = {\n                left,\n                top,\n                width,\n                height,\n                bottom,\n                right,\n                x,\n                y\n            };\n            if (state.current.element instanceof HTMLElement && offsetSize) {\n                size.height = state.current.element.offsetHeight;\n                size.width = state.current.element.offsetWidth;\n            }\n            Object.freeze(size);\n            if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);\n        };\n        return [\n            callback,\n            resizeDebounce ? debounce__WEBPACK_IMPORTED_MODULE_1___default()(callback, resizeDebounce) : callback,\n            scrollDebounce ? debounce__WEBPACK_IMPORTED_MODULE_1___default()(callback, scrollDebounce) : callback\n        ];\n    }, [\n        set,\n        offsetSize,\n        scrollDebounce,\n        resizeDebounce\n    ]); // cleanup current scroll-listeners / observers\n    function removeListeners() {\n        if (state.current.scrollContainers) {\n            state.current.scrollContainers.forEach((element)=>element.removeEventListener(\"scroll\", scrollChange, true));\n            state.current.scrollContainers = null;\n        }\n        if (state.current.resizeObserver) {\n            state.current.resizeObserver.disconnect();\n            state.current.resizeObserver = null;\n        }\n    } // add scroll-listeners / observers\n    function addListeners() {\n        if (!state.current.element) return;\n        state.current.resizeObserver = new ResizeObserver(scrollChange);\n        state.current.resizeObserver.observe(state.current.element);\n        if (scroll && state.current.scrollContainers) {\n            state.current.scrollContainers.forEach((scrollContainer)=>scrollContainer.addEventListener(\"scroll\", scrollChange, {\n                    capture: true,\n                    passive: true\n                }));\n        }\n    } // the ref we expose to the user\n    const ref = (node)=>{\n        if (!node || node === state.current.element) return;\n        removeListeners();\n        state.current.element = node;\n        state.current.scrollContainers = findScrollContainers(node);\n        addListeners();\n    }; // add general event listeners\n    useOnWindowScroll(scrollChange, Boolean(scroll));\n    useOnWindowResize(resizeChange); // respond to changes that are relevant for the listeners\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        removeListeners();\n        addListeners();\n    }, [\n        scroll,\n        scrollChange,\n        resizeChange\n    ]); // remove all listeners when the components unmounts\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>removeListeners, []);\n    return [\n        ref,\n        bounds,\n        forceRefresh\n    ];\n} // Adds native resize listener to window\nfunction useOnWindowResize(onWindowResize) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const cb = onWindowResize;\n        window.addEventListener(\"resize\", cb);\n        return ()=>void window.removeEventListener(\"resize\", cb);\n    }, [\n        onWindowResize\n    ]);\n}\nfunction useOnWindowScroll(onScroll, enabled) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (enabled) {\n            const cb = onScroll;\n            window.addEventListener(\"scroll\", cb, {\n                capture: true,\n                passive: true\n            });\n            return ()=>void window.removeEventListener(\"scroll\", cb, true);\n        }\n    }, [\n        onScroll,\n        enabled\n    ]);\n} // Returns a list of scroll offsets\nfunction findScrollContainers(element) {\n    const result = [];\n    if (!element || element === document.body) return result;\n    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);\n    if ([\n        overflow,\n        overflowX,\n        overflowY\n    ].some((prop)=>prop === \"auto\" || prop === \"scroll\")) result.push(element);\n    return [\n        ...result,\n        ...findScrollContainers(element.parentElement)\n    ];\n} // Checks if element boundaries are equal\nconst keys = [\n    \"x\",\n    \"y\",\n    \"top\",\n    \"bottom\",\n    \"left\",\n    \"right\",\n    \"width\",\n    \"height\"\n];\nconst areBoundsEqual = (a, b)=>keys.every((key)=>a[key] === b[key]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlLW1lYXN1cmUvZGlzdC93ZWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFDdkI7QUFFdEMsU0FBU0ssV0FBV0MsS0FBSztJQUN2QixJQUFJLEVBQ0ZDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLFVBQVUsRUFDWCxHQUFHSixVQUFVLEtBQUssSUFBSTtRQUNyQkMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JFLFlBQVk7SUFDZCxJQUFJSjtJQUNKLE1BQU1LLGlCQUFpQkYsWUFBYSxNQUFrQixHQUFjLE1BQU1FO0lBQWdCLElBQUlDLENBQXFCO0lBRW5ILElBQUksQ0FBQ0QsZ0JBQWdCO1FBQ25CLE1BQU0sSUFBSUUsTUFBTTtJQUNsQjtJQUVBLE1BQU0sQ0FBQ0MsUUFBUUMsSUFBSSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUM3QmdCLE1BQU07UUFDTkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLEdBQUc7UUFDSEMsR0FBRztJQUNMLElBQUksMEJBQTBCO0lBRTlCLE1BQU1DLFFBQVF2Qiw2Q0FBTUEsQ0FBQztRQUNuQndCLFNBQVM7UUFDVEMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7UUFDaEJDLFlBQVlkO0lBQ2QsSUFBSSxxRkFBcUY7SUFFekYsTUFBTWUsaUJBQWlCdEIsV0FBVyxPQUFPQSxhQUFhLFdBQVdBLFdBQVdBLFNBQVNDLE1BQU0sR0FBRztJQUM5RixNQUFNc0IsaUJBQWlCdkIsV0FBVyxPQUFPQSxhQUFhLFdBQVdBLFdBQVdBLFNBQVN3QixNQUFNLEdBQUcsTUFBTSwyRUFBMkU7SUFFL0ssTUFBTUMsVUFBVS9CLDZDQUFNQSxDQUFDO0lBQ3ZCQyxnREFBU0EsQ0FBQztRQUNSOEIsUUFBUUMsT0FBTyxHQUFHO1FBQ2xCLE9BQU8sSUFBTSxLQUFNRCxDQUFBQSxRQUFRQyxPQUFPLEdBQUcsS0FBSTtJQUMzQyxJQUFJLG9FQUFv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YTtLQUFFO0FBQ3BFLEVBQUUseUNBQXlDO0FBRzNDLE1BQU1DLE9BQU87SUFBQztJQUFLO0lBQUs7SUFBTztJQUFVO0lBQVE7SUFBUztJQUFTO0NBQVM7QUFFNUUsTUFBTWhDLGlCQUFpQixDQUFDaUMsR0FBR0MsSUFBTUYsS0FBS0csS0FBSyxDQUFDQyxDQUFBQSxNQUFPSCxDQUFDLENBQUNHLElBQUksS0FBS0YsQ0FBQyxDQUFDRSxJQUFJO0FBRW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWFub2xtc3RlYWQuY29tLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS1tZWFzdXJlL2Rpc3Qvd2ViLmpzPzZkZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZURlYm91bmNlIGZyb20gJ2RlYm91bmNlJztcblxuZnVuY3Rpb24gdXNlTWVhc3VyZShfdGVtcCkge1xuICBsZXQge1xuICAgIGRlYm91bmNlLFxuICAgIHNjcm9sbCxcbiAgICBwb2x5ZmlsbCxcbiAgICBvZmZzZXRTaXplXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge1xuICAgIGRlYm91bmNlOiAwLFxuICAgIHNjcm9sbDogZmFsc2UsXG4gICAgb2Zmc2V0U2l6ZTogZmFsc2VcbiAgfSA6IF90ZW1wO1xuICBjb25zdCBSZXNpemVPYnNlcnZlciA9IHBvbHlmaWxsIHx8ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGNsYXNzIFJlc2l6ZU9ic2VydmVyIHt9IDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcblxuICBpZiAoIVJlc2l6ZU9ic2VydmVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBSZXNpemVPYnNlcnZlciBvdXQgb2YgdGhlIGJveC4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Qtc3ByaW5nL3JlYWN0LXVzZS1tZWFzdXJlLyNyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGxzJyk7XG4gIH1cblxuICBjb25zdCBbYm91bmRzLCBzZXRdID0gdXNlU3RhdGUoe1xuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0pOyAvLyBrZWVwIGFsbCBzdGF0ZSBpbiBhIHJlZlxuXG4gIGNvbnN0IHN0YXRlID0gdXNlUmVmKHtcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHNjcm9sbENvbnRhaW5lcnM6IG51bGwsXG4gICAgcmVzaXplT2JzZXJ2ZXI6IG51bGwsXG4gICAgbGFzdEJvdW5kczogYm91bmRzXG4gIH0pOyAvLyBzZXQgYWN0dWFsIGRlYm91bmNlIHZhbHVlcyBlYXJseSwgc28gZWZmZWN0cyBrbm93IGlmIHRoZXkgc2hvdWxkIHJlYWN0IGFjY29yZGluZ2x5XG5cbiAgY29uc3Qgc2Nyb2xsRGVib3VuY2UgPSBkZWJvdW5jZSA/IHR5cGVvZiBkZWJvdW5jZSA9PT0gJ251bWJlcicgPyBkZWJvdW5jZSA6IGRlYm91bmNlLnNjcm9sbCA6IG51bGw7XG4gIGNvbnN0IHJlc2l6ZURlYm91bmNlID0gZGVib3VuY2UgPyB0eXBlb2YgZGVib3VuY2UgPT09ICdudW1iZXInID8gZGVib3VuY2UgOiBkZWJvdW5jZS5yZXNpemUgOiBudWxsOyAvLyBtYWtlIHN1cmUgdG8gdXBkYXRlIHN0YXRlIG9ubHkgYXMgbG9uZyBhcyB0aGUgY29tcG9uZW50IGlzIHRydWx5IG1vdW50ZWRcblxuICBjb25zdCBtb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB2b2lkIChtb3VudGVkLmN1cnJlbnQgPSBmYWxzZSk7XG4gIH0pOyAvLyBtZW1vaXplIGhhbmRsZXJzLCBzbyBldmVudC1saXN0ZW5lcnMga25vdyB3aGVuIHRoZXkgc2hvdWxkIHVwZGF0ZVxuXG4gIGNvbnN0IFtmb3JjZVJlZnJlc2gsIHJlc2l6ZUNoYW5nZSwgc2Nyb2xsQ2hhbmdlXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCFzdGF0ZS5jdXJyZW50LmVsZW1lbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbGVmdCxcbiAgICAgICAgdG9wLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBib3R0b20sXG4gICAgICAgIHJpZ2h0LFxuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gc3RhdGUuY3VycmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgbGVmdCxcbiAgICAgICAgdG9wLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBib3R0b20sXG4gICAgICAgIHJpZ2h0LFxuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9O1xuXG4gICAgICBpZiAoc3RhdGUuY3VycmVudC5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgb2Zmc2V0U2l6ZSkge1xuICAgICAgICBzaXplLmhlaWdodCA9IHN0YXRlLmN1cnJlbnQuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHNpemUud2lkdGggPSBzdGF0ZS5jdXJyZW50LmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5mcmVlemUoc2l6ZSk7XG4gICAgICBpZiAobW91bnRlZC5jdXJyZW50ICYmICFhcmVCb3VuZHNFcXVhbChzdGF0ZS5jdXJyZW50Lmxhc3RCb3VuZHMsIHNpemUpKSBzZXQoc3RhdGUuY3VycmVudC5sYXN0Qm91bmRzID0gc2l6ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBbY2FsbGJhY2ssIHJlc2l6ZURlYm91bmNlID8gY3JlYXRlRGVib3VuY2UoY2FsbGJhY2ssIHJlc2l6ZURlYm91bmNlKSA6IGNhbGxiYWNrLCBzY3JvbGxEZWJvdW5jZSA/IGNyZWF0ZURlYm91bmNlKGNhbGxiYWNrLCBzY3JvbGxEZWJvdW5jZSkgOiBjYWxsYmFja107XG4gIH0sIFtzZXQsIG9mZnNldFNpemUsIHNjcm9sbERlYm91bmNlLCByZXNpemVEZWJvdW5jZV0pOyAvLyBjbGVhbnVwIGN1cnJlbnQgc2Nyb2xsLWxpc3RlbmVycyAvIG9ic2VydmVyc1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoc3RhdGUuY3VycmVudC5zY3JvbGxDb250YWluZXJzKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQ2hhbmdlLCB0cnVlKSk7XG4gICAgICBzdGF0ZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50LnJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50LnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHN0YXRlLmN1cnJlbnQucmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgfSAvLyBhZGQgc2Nyb2xsLWxpc3RlbmVycyAvIG9ic2VydmVyc1xuXG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuY3VycmVudC5lbGVtZW50KSByZXR1cm47XG4gICAgc3RhdGUuY3VycmVudC5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihzY3JvbGxDaGFuZ2UpO1xuICAgIHN0YXRlLmN1cnJlbnQucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShzdGF0ZS5jdXJyZW50LmVsZW1lbnQpO1xuXG4gICAgaWYgKHNjcm9sbCAmJiBzdGF0ZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnQuc2Nyb2xsQ29udGFpbmVycy5mb3JFYWNoKHNjcm9sbENvbnRhaW5lciA9PiBzY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQ2hhbmdlLCB7XG4gICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0gLy8gdGhlIHJlZiB3ZSBleHBvc2UgdG8gdGhlIHVzZXJcblxuXG4gIGNvbnN0IHJlZiA9IG5vZGUgPT4ge1xuICAgIGlmICghbm9kZSB8fCBub2RlID09PSBzdGF0ZS5jdXJyZW50LmVsZW1lbnQpIHJldHVybjtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBzdGF0ZS5jdXJyZW50LmVsZW1lbnQgPSBub2RlO1xuICAgIHN0YXRlLmN1cnJlbnQuc2Nyb2xsQ29udGFpbmVycyA9IGZpbmRTY3JvbGxDb250YWluZXJzKG5vZGUpO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9OyAvLyBhZGQgZ2VuZXJhbCBldmVudCBsaXN0ZW5lcnNcblxuXG4gIHVzZU9uV2luZG93U2Nyb2xsKHNjcm9sbENoYW5nZSwgQm9vbGVhbihzY3JvbGwpKTtcbiAgdXNlT25XaW5kb3dSZXNpemUocmVzaXplQ2hhbmdlKTsgLy8gcmVzcG9uZCB0byBjaGFuZ2VzIHRoYXQgYXJlIHJlbGV2YW50IGZvciB0aGUgbGlzdGVuZXJzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfSwgW3Njcm9sbCwgc2Nyb2xsQ2hhbmdlLCByZXNpemVDaGFuZ2VdKTsgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgd2hlbiB0aGUgY29tcG9uZW50cyB1bm1vdW50c1xuXG4gIHVzZUVmZmVjdCgoKSA9PiByZW1vdmVMaXN0ZW5lcnMsIFtdKTtcbiAgcmV0dXJuIFtyZWYsIGJvdW5kcywgZm9yY2VSZWZyZXNoXTtcbn0gLy8gQWRkcyBuYXRpdmUgcmVzaXplIGxpc3RlbmVyIHRvIHdpbmRvd1xuXG5cbmZ1bmN0aW9uIHVzZU9uV2luZG93UmVzaXplKG9uV2luZG93UmVzaXplKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2IgPSBvbldpbmRvd1Jlc2l6ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2IpO1xuICAgIHJldHVybiAoKSA9PiB2b2lkIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjYik7XG4gIH0sIFtvbldpbmRvd1Jlc2l6ZV0pO1xufVxuXG5mdW5jdGlvbiB1c2VPbldpbmRvd1Njcm9sbChvblNjcm9sbCwgZW5hYmxlZCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBjb25zdCBjYiA9IG9uU2Nyb2xsO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNiLCB7XG4gICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICgpID0+IHZvaWQgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNiLCB0cnVlKTtcbiAgICB9XG4gIH0sIFtvblNjcm9sbCwgZW5hYmxlZF0pO1xufSAvLyBSZXR1cm5zIGEgbGlzdCBvZiBzY3JvbGwgb2Zmc2V0c1xuXG5cbmZ1bmN0aW9uIGZpbmRTY3JvbGxDb250YWluZXJzKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSByZXR1cm4gcmVzdWx0O1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WVxuICB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGlmIChbb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZXS5zb21lKHByb3AgPT4gcHJvcCA9PT0gJ2F1dG8nIHx8IHByb3AgPT09ICdzY3JvbGwnKSkgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gIHJldHVybiBbLi4ucmVzdWx0LCAuLi5maW5kU2Nyb2xsQ29udGFpbmVycyhlbGVtZW50LnBhcmVudEVsZW1lbnQpXTtcbn0gLy8gQ2hlY2tzIGlmIGVsZW1lbnQgYm91bmRhcmllcyBhcmUgZXF1YWxcblxuXG5jb25zdCBrZXlzID0gWyd4JywgJ3knLCAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ3dpZHRoJywgJ2hlaWdodCddO1xuXG5jb25zdCBhcmVCb3VuZHNFcXVhbCA9IChhLCBiKSA9PiBrZXlzLmV2ZXJ5KGtleSA9PiBhW2tleV0gPT09IGJba2V5XSk7XG5cbmV4cG9ydCB7IHVzZU1lYXN1cmUgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsImNyZWF0ZURlYm91bmNlIiwidXNlTWVhc3VyZSIsIl90ZW1wIiwiZGVib3VuY2UiLCJzY3JvbGwiLCJwb2x5ZmlsbCIsIm9mZnNldFNpemUiLCJSZXNpemVPYnNlcnZlciIsIndpbmRvdyIsIkVycm9yIiwiYm91bmRzIiwic2V0IiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJ4IiwieSIsInN0YXRlIiwiZWxlbWVudCIsInNjcm9sbENvbnRhaW5lcnMiLCJyZXNpemVPYnNlcnZlciIsImxhc3RCb3VuZHMiLCJzY3JvbGxEZWJvdW5jZSIsInJlc2l6ZURlYm91bmNlIiwicmVzaXplIiwibW91bnRlZCIsImN1cnJlbnQiLCJmb3JjZVJlZnJlc2giLCJyZXNpemVDaGFuZ2UiLCJzY3JvbGxDaGFuZ2UiLCJjYWxsYmFjayIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNpemUiLCJIVE1MRWxlbWVudCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwiT2JqZWN0IiwiZnJlZXplIiwiYXJlQm91bmRzRXF1YWwiLCJyZW1vdmVMaXN0ZW5lcnMiLCJmb3JFYWNoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJhZGRMaXN0ZW5lcnMiLCJvYnNlcnZlIiwic2Nyb2xsQ29udGFpbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJwYXNzaXZlIiwicmVmIiwibm9kZSIsImZpbmRTY3JvbGxDb250YWluZXJzIiwidXNlT25XaW5kb3dTY3JvbGwiLCJCb29sZWFuIiwidXNlT25XaW5kb3dSZXNpemUiLCJvbldpbmRvd1Jlc2l6ZSIsImNiIiwib25TY3JvbGwiLCJlbmFibGVkIiwicmVzdWx0IiwiZG9jdW1lbnQiLCJib2R5Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRDb21wdXRlZFN0eWxlIiwic29tZSIsInByb3AiLCJwdXNoIiwicGFyZW50RWxlbWVudCIsImtleXMiLCJhIiwiYiIsImV2ZXJ5Iiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use-measure/dist/web.js\n");

/***/ })

};
;