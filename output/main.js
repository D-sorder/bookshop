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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _style_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/fonts.scss */ \"./style/fonts.scss\");\n/* harmony import */ var _script_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/slider */ \"./script/slider.js\");\n/* harmony import */ var _script_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _script_books_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/books-load */ \"./script/books-load.js\");\n/* harmony import */ var _script_books_load__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_script_books_load__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _script_burber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/burber.js */ \"./script/burber.js\");\n/* harmony import */ var _script_burber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_script_burber_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./index.js?");

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

/***/ "./script/books-load.js":
/*!******************************!*\
  !*** ./script/books-load.js ***!
  \******************************/
/***/ (() => {

eval("const loadBtn = document.querySelector('.shop-list__load-btn');\r\nconst box = document.querySelector('.shop-list__grid');\r\nlet nav = document.querySelectorAll('.shop-list__nav-link');\r\nlet cat = \"Architecture\";\r\nlet localStorage = new Array;\r\nlet cart = 0;\r\n\r\nfor (let link of nav) {\r\n    link.addEventListener(\"click\", (e)=>{\r\n        e.preventDefault()\r\n        for (let all of nav) {\r\n            all.classList.remove('active');\r\n        }\r\n        link.classList.add('active');\r\n        cat = link.textContent;\r\n        box.innerHTML = \"\";\r\n        load();\r\n        \r\n    });\r\n}\r\n\r\nasync function load () {\r\n    try {\r\n        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${cat}\"&key=AIzaSyDPfo6wnwWu1DZ2bOHyhH3qHhEbqKUWKi8&printType=books&startIndex=0&maxResults=6&langRestrict=e`);\r\n        let data = await response.json();\r\n        const loadPromises = data.items.map((answer) => {\r\n            return new Promise(() => {\r\n                let img = (answer.volumeInfo.imageLinks.thumbnail != undefined) ? answer.volumeInfo.imageLinks.thumbnail : \"https://placehold.co/600x400\";\r\n                let author = (answer.volumeInfo.authors != undefined) ? answer.volumeInfo.authors.join(', ') : \"\";\r\n                let name = (answer.volumeInfo.title != undefined) ? answer.volumeInfo.title : \"\";\r\n                let ratingNum = (answer.volumeInfo.ratingsCount != undefined) ? answer.volumeInfo.ratingsCount + \" review\" : \"\";\r\n                let description = (answer.volumeInfo.description != undefined) ? answer.volumeInfo.description : \"\";\r\n                let currencyCode = (answer.saleInfo.retailPrice != undefined) ? answer.saleInfo.retailPrice.currencyCode : \"\";\r\n                let amount = (answer.saleInfo.retailPrice != undefined) ? answer.saleInfo.retailPrice.amount : \"\";\r\n\r\n                //будто этот спагеттиКод можно сделать проще\r\n                box.insertAdjacentHTML('beforeend', `\r\n                    <div class=\"shop-list__item\">\r\n                        <div class=\"shop-list__img\">\r\n                            <img src=\"${img}\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"shop-list__info\">\r\n                            <span class=\"shop-list__author\">${author}</span>\r\n                            <h4 class=\"shop-list__name\">${name}</h4>\r\n                            <div class=\"shop-list__review\">\r\n                                <div class=\"shop-list__stars\">\r\n                                    \r\n                                </div>\r\n                                <span class=\"shop-list__rev-num\">${ratingNum}</span>\r\n                            </div>\r\n                            <p class=\"shop-list__text\">${description}</p>\r\n                            <span class=\"shop-list__price\">${currencyCode} ${amount}</span>\r\n                            <button class=\"shop-list__buy-btn\">buy now</button>\r\n                        </div>\r\n                    </div>    \r\n                `);\r\n\r\n                let list = document.querySelectorAll('.shop-list__stars');\r\n                let starCount = answer.volumeInfo.averageRating;\r\n                \r\n                for (let i = 0; i < 5; i++) {\r\n                    let stars = list[list.length-1];\r\n                    let star = document.createElement(\"img\");\r\n                    star.setAttribute('width', '12');\r\n                    star.setAttribute('height', '12');\r\n                    star.classList.add('shop-list__star');\r\n                    if (i < starCount) {\r\n                        star.setAttribute('src', '../images/svg/StarYellow.svg');\r\n                    } else {\r\n                        star.setAttribute('src', '../images/svg/StarGray.svg');\r\n                    }\r\n                    stars.appendChild(star);\r\n                }; \r\n                let btn = document.querySelectorAll('.shop-list__buy-btn');\r\n                btn[btn.length-1].addEventListener(\"click\", ()=>{\r\n                    localStorage.push(answer);\r\n                    cartChange();\r\n                })\r\n            });\r\n        });\r\n\r\n        await Promise.all(loadPromises);\r\n\r\n    } catch (err) {\r\n        console.error(err);\r\n    } finally {\r\n        \r\n    }\r\n};\r\n\r\nfunction cartChange () {\r\n    let count = document.querySelector('.counter')\r\n    if (cart == 0) {\r\n        count.style.display = 'block';\r\n    }\r\n    cart+=1;\r\n    count.innerHTML = cart;\r\n}\r\n\r\nwindow.onload = ()=>{\r\n    load();\r\n};\r\n\r\nloadBtn.addEventListener(\"click\", ()=>{\r\n    load();\r\n});\n\n//# sourceURL=webpack://bookshop/./script/books-load.js?");

/***/ }),

/***/ "./script/burber.js":
/*!**************************!*\
  !*** ./script/burber.js ***!
  \**************************/
/***/ (() => {

eval("let burb = document.querySelector('.burger');\r\n\r\nburb.addEventListener('click', ()=>{\r\n    document.querySelector('.header__mobile-nav').classList.toggle('active');\r\n});\n\n//# sourceURL=webpack://bookshop/./script/burber.js?");

/***/ }),

/***/ "./script/slider.js":
/*!**************************!*\
  !*** ./script/slider.js ***!
  \**************************/
/***/ (() => {

eval("const slider = document.querySelector(\".slider\");\r\nconst dotBox = slider.querySelector(\".slider__dots\");\r\nconst img = slider.querySelector(\".slider__img\");;\r\nconst currentSlide = slider.querySelector(\".slider__img\")\r\n\r\n\r\nlet slides = [\"images/jpg/hero1.png\", \"images/jpg/hero2.png\", \"images/jpg/hero3.png\"]\r\n\r\nlet counter = 0;\r\n\r\nfor(let i = 0; i < slides.length; i++ ) {\r\n    let dot = document.createElement(\"li\");\r\n    dot.classList.add(\"slider__dot\");\r\n    dot.setAttribute(\"data-navid\", i);\r\n    if (i==0) {\r\n        dot.classList.add(\"active\");\r\n    }\r\n    dotBox.append(dot);\r\n}\r\n\r\nconst dots = slider.querySelectorAll(\".slider__dot\");\r\nconst nav = slider.querySelectorAll(\"[data-navid]\");\r\n\r\nfor (let elem of nav) {\r\n    elem.addEventListener(\"click\", ()=>{\r\n        counter = elem.dataset.navid;\r\n        change(counter);\r\n    })\r\n}\r\n\r\nfunction change (num) {\r\n    currentSlide.src = slides[num];\r\n\r\n    for(let elem of nav) {\r\n        elem.classList.remove(\"active\");\r\n    }\r\n    \r\n    let activate = slider.querySelectorAll(`[data-navid = \"${num}\"]`);\r\n    for(let a of activate) {\r\n        a.classList.add(\"active\");\r\n    }\r\n}\r\n\r\nfunction autoslide () {\r\n    if (counter > slides.length-1) {\r\n        counter = 0;\r\n    }\r\n    change(counter);\r\n    counter++;\r\n}\r\n\r\nsetInterval(()=>{\r\n    autoslide();\r\n},5000);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./script/slider.js?");

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