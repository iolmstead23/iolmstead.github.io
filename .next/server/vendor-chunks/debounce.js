"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/debounce";
exports.ids = ["vendor-chunks/debounce"];
exports.modules = {

/***/ "(ssr)/./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Returns a function, that, as long as it continues to be invoked, will not\n * be triggered. The function will be called after it stops being called for\n * N milliseconds. If `immediate` is passed, trigger the function on the\n * leading edge, instead of the trailing. The function also has a property 'clear' \n * that is a function which will clear the timer to prevent previously scheduled executions. \n *\n * @source underscore.js\n * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/\n * @param {Function} function to wrap\n * @param {Number} timeout in ms (`100`)\n * @param {Boolean} whether to execute at the beginning (`false`)\n * @api public\n */ \nfunction debounce(func, wait, immediate) {\n    var timeout, args, context, timestamp, result;\n    if (null == wait) wait = 100;\n    function later() {\n        var last = Date.now() - timestamp;\n        if (last < wait && last >= 0) {\n            timeout = setTimeout(later, wait - last);\n        } else {\n            timeout = null;\n            if (!immediate) {\n                result = func.apply(context, args);\n                context = args = null;\n            }\n        }\n    }\n    ;\n    var debounced = function() {\n        context = this;\n        args = arguments;\n        timestamp = Date.now();\n        var callNow = immediate && !timeout;\n        if (!timeout) timeout = setTimeout(later, wait);\n        if (callNow) {\n            result = func.apply(context, args);\n            context = args = null;\n        }\n        return result;\n    };\n    debounced.clear = function() {\n        if (timeout) {\n            clearTimeout(timeout);\n            timeout = null;\n        }\n    };\n    debounced.flush = function() {\n        if (timeout) {\n            result = func.apply(context, args);\n            context = args = null;\n            clearTimeout(timeout);\n            timeout = null;\n        }\n    };\n    return debounced;\n}\n// Adds compatibility for ES modules\ndebounce.debounce = debounce;\nmodule.exports = debounce;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVib3VuY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQztBQUNELFNBQVNBLFNBQVNDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxTQUFTO0lBQ3JDLElBQUlDLFNBQVNDLE1BQU1DLFNBQVNDLFdBQVdDO0lBQ3ZDLElBQUksUUFBUU4sTUFBTUEsT0FBTztJQUV6QixTQUFTTztRQUNQLElBQUlDLE9BQU9DLEtBQUtDLEdBQUcsS0FBS0w7UUFFeEIsSUFBSUcsT0FBT1IsUUFBUVEsUUFBUSxHQUFHO1lBQzVCTixVQUFVUyxXQUFXSixPQUFPUCxPQUFPUTtRQUNyQyxPQUFPO1lBQ0xOLFVBQVU7WUFDVixJQUFJLENBQUNELFdBQVc7Z0JBQ2RLLFNBQVNQLEtBQUthLEtBQUssQ0FBQ1IsU0FBU0Q7Z0JBQzdCQyxVQUFVRCxPQUFPO1lBQ25CO1FBQ0Y7SUFDRjs7SUFFQSxJQUFJVSxZQUFZO1FBQ2RULFVBQVUsSUFBSTtRQUNkRCxPQUFPVztRQUNQVCxZQUFZSSxLQUFLQyxHQUFHO1FBQ3BCLElBQUlLLFVBQVVkLGFBQWEsQ0FBQ0M7UUFDNUIsSUFBSSxDQUFDQSxTQUFTQSxVQUFVUyxXQUFXSixPQUFPUDtRQUMxQyxJQUFJZSxTQUFTO1lBQ1hULFNBQVNQLEtBQUthLEtBQUssQ0FBQ1IsU0FBU0Q7WUFDN0JDLFVBQVVELE9BQU87UUFDbkI7UUFFQSxPQUFPRztJQUNUO0lBRUFPLFVBQVVHLEtBQUssR0FBRztRQUNoQixJQUFJZCxTQUFTO1lBQ1hlLGFBQWFmO1lBQ2JBLFVBQVU7UUFDWjtJQUNGO0lBRUFXLFVBQVVLLEtBQUssR0FBRztRQUNoQixJQUFJaEIsU0FBUztZQUNYSSxTQUFTUCxLQUFLYSxLQUFLLENBQUNSLFNBQVNEO1lBQzdCQyxVQUFVRCxPQUFPO1lBRWpCYyxhQUFhZjtZQUNiQSxVQUFVO1FBQ1o7SUFDRjtJQUVBLE9BQU9XO0FBQ1Q7QUFFQSxvQ0FBb0M7QUFDcENmLFNBQVNBLFFBQVEsR0FBR0E7QUFFcEJxQixPQUFPQyxPQUFPLEdBQUd0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2lhbm9sbXN0ZWFkLmNvbS8uL25vZGVfbW9kdWxlcy9kZWJvdW5jZS9pbmRleC5qcz8wMWE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICogTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gKiBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLiBUaGUgZnVuY3Rpb24gYWxzbyBoYXMgYSBwcm9wZXJ0eSAnY2xlYXInIFxuICogdGhhdCBpcyBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgY2xlYXIgdGhlIHRpbWVyIHRvIHByZXZlbnQgcHJldmlvdXNseSBzY2hlZHVsZWQgZXhlY3V0aW9ucy4gXG4gKlxuICogQHNvdXJjZSB1bmRlcnNjb3JlLmpzXG4gKiBAc2VlIGh0dHA6Ly91bnNjcmlwdGFibGUuY29tLzIwMDkvMDMvMjAvZGVib3VuY2luZy1qYXZhc2NyaXB0LW1ldGhvZHMvXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvbiB0byB3cmFwXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZW91dCBpbiBtcyAoYDEwMGApXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdoZXRoZXIgdG8gZXhlY3V0ZSBhdCB0aGUgYmVnaW5uaW5nIChgZmFsc2VgKVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKXtcbiAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuICBpZiAobnVsbCA9PSB3YWl0KSB3YWl0ID0gMTAwO1xuXG4gIGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcblxuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID49IDApIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgZGVib3VuY2VkID0gZnVuY3Rpb24oKXtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgaWYgKCF0aW1lb3V0KSB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBkZWJvdW5jZWQuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9O1xuICBcbiAgZGVib3VuY2VkLmZsdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICBcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VkO1xufTtcblxuLy8gQWRkcyBjb21wYXRpYmlsaXR5IGZvciBFUyBtb2R1bGVzXG5kZWJvdW5jZS5kZWJvdW5jZSA9IGRlYm91bmNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIl0sIm5hbWVzIjpbImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiYXJncyIsImNvbnRleHQiLCJ0aW1lc3RhbXAiLCJyZXN1bHQiLCJsYXRlciIsImxhc3QiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImFwcGx5IiwiZGVib3VuY2VkIiwiYXJndW1lbnRzIiwiY2FsbE5vdyIsImNsZWFyIiwiY2xlYXJUaW1lb3V0IiwiZmx1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/debounce/index.js\n");

/***/ })

};
;