/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _style_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/fonts.scss */ \"./style/fonts.scss\");\n/* harmony import */ var _script_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/slider */ \"./script/slider.js\");\n/* harmony import */ var _script_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script_slider__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./index.js?");

/***/ }),

/***/ "./style/fonts.scss":
/*!**************************!*\
  !*** ./style/fonts.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./style/fonts.scss?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./style/style.scss?");

/***/ }),

/***/ "./script/slider.js":
/*!**************************!*\
  !*** ./script/slider.js ***!
  \**************************/
/***/ (() => {

eval("const slider = document.querySelector(\".slider\");\r\nconst dotBox = slider.querySelector(\".slider__dots\");\r\nconst img = slider.querySelector(\".slider__img\");;\r\nconst currentSlide = slider.querySelector(\".slider__img\")\r\n\r\n\r\nlet slides = [\"images/jpg/hero1.png\", \"images/jpg/hero2.png\", \"images/jpg/hero3.png\"]\r\n\r\nlet counter = 0;\r\n\r\nfor(let i = 0; i < slides.length; i++ ) {\r\n    let dot = document.createElement(\"li\");\r\n    dot.classList.add(\"slider__dot\");\r\n    dot.setAttribute(\"data-navid\", i);\r\n    if (i==0) {\r\n        dot.classList.add(\"active\");\r\n    }\r\n    dotBox.append(dot);\r\n}\r\n\r\nconst dots = slider.querySelectorAll(\".slider__dot\");\r\nconst nav = slider.querySelectorAll(\"[data-navid]\");\r\n\r\nfor (let elem of nav) {\r\n    elem.addEventListener(\"click\", ()=>{\r\n        counter = elem.dataset.navid;\r\n        change(counter);\r\n    })\r\n}\r\n\r\nasync function change (num) {\r\n    currentSlide.src = slides[num];\r\n\r\n    for(let elem of nav) {\r\n        elem.classList.remove(\"active\");\r\n    }\r\n    \r\n    let activate = slider.querySelectorAll(`[data-navid = \"${num}\"]`);\r\n    for(let a of activate) {\r\n        a.classList.add(\"active\");\r\n    }\r\n    console.log('123');\r\n}\r\n\r\nfunction autoslide () {\r\n    change(counter);\r\n    counter++;\r\n}\r\n\r\nwindow.onload = function() {\r\n    setInterval(autoslide(),5000);\r\n    console.log(counter);\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./script/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;