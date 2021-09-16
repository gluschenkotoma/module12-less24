/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/card.scss */ \"./src/styles/card.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _js_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/functions */ \"./src/js/functions.js\");\n/* harmony import */ var _js_classicFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/classicFetch */ \"./src/js/classicFetch.js\");\n\n\n\n\n\n//# sourceURL=webpack://module-11/./src/index.js?");

/***/ }),

/***/ "./src/js/classicFetch.js":
/*!********************************!*\
  !*** ./src/js/classicFetch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ \"./src/js/refs.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\n\nvar loadMoreBtn = _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadMoreBtn,\n    list = _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].list,\n    form = _refs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form;\nvar BASE_URL = \"https://api.pexels.com/v1\";\nvar ednPoint = \"/search\";\nvar API_KEY = \"563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2\";\nvar options = {\n  headers: {\n    Authorization: API_KEY\n  }\n};\nvar myFetch = new _functions__WEBPACK_IMPORTED_MODULE_1__[\"default\"](BASE_URL, ednPoint, options);\nconsole.log(myFetch);\nmyFetch.getFetchBySubmit(form, list);\nmyFetch.getFetchByClick(loadMoreBtn, list); // form.addEventListener('submit', e => {\n//   e.preventDefault()\n//   console.log(e.target.elements.input.value)\n//   query = e.target.elements.input.value\n//   let params = `?query=${query}&per_page=5&page=${page}`\n//   let url = BASE_URL + ednPoint + params\n//   fetch(url, options)\n//     .then(response => {\n//       // console.log(response)\n//       return response.json()\n//     })\n//     .then(data => {\n//       console.log(data.page, data.photos)\n//       return data.photos\n//     })\n//     .then(array => {\n//       //   console.log(array)\n//       let result = array\n//         .map(elem => {\n//           //   console.log(elem) // src.original, src.tiny photographer\n//           const {\n//             photographer,\n//             src: { tiny, original },\n//           } = elem\n//           return `\n//         <li>\n//           <img src=\"${tiny}\" data-src=\"${original}\" alt=\"${photographer}\" />\n//         </li>\n//         `\n//         })\n//         .join('')\n//       //   console.log(result)\n//       list.insertAdjacentHTML('beforeend', result)\n//     })\n//     .catch(err => {\n//       console.log(err)\n//     })\n//     .finally(() => form.reset())\n// })\n// loadMoreBtn.addEventListener('click', () => {\n//   page += 1\n//   let params = `?query=${query}&per_page=5&page=${page}`\n//   let url = BASE_URL + ednPoint + params\n//   fetch(url, options)\n//     .then(response => {\n//       // console.log(response)\n//       return response.json()\n//     })\n//     .then(data => {\n//       console.log(data.page, data.photos)\n//       return data.photos\n//     })\n//     .then(array => {\n//       let result = array\n//         .map(elem => {\n//           //   console.log(elem) // src.original, src.tiny photographer\n//           const {\n//             photographer,\n//             src: { tiny, original },\n//           } = elem\n//           return `\n//         <li>\n//           <img src=\"${tiny}\" data-src=\"${original}\" alt=\"${photographer}\" />\n//         </li>\n//         `\n//         })\n//         .join('')\n//       //   console.log(result)\n//       list.insertAdjacentHTML('beforeend', result)\n//     })\n// })\n\n//# sourceURL=webpack://module-11/./src/js/classicFetch.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchObject)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FetchObject = /*#__PURE__*/function () {\n  function FetchObject(BASE_URL, ednPoint, options) {\n    _classCallCheck(this, FetchObject);\n\n    this.BASE_URL = BASE_URL;\n    this.ednPoint = ednPoint;\n    this.options = options;\n    this._query = '';\n    this._page = 1;\n    this.perPage = 5;\n  }\n\n  _createClass(FetchObject, [{\n    key: \"query\",\n    get: function get() {\n      return this._query;\n    },\n    set: function set(value) {\n      return this._query = value;\n    }\n  }, {\n    key: \"page\",\n    get: function get() {\n      return this._page;\n    },\n    set: function set(value) {\n      return this._page += value;\n    }\n  }, {\n    key: \"generateMarkup\",\n    value: function generateMarkup(array) {\n      return array.map(function (elem) {\n        var photographer = elem.photographer,\n            _elem$src = elem.src,\n            tiny = _elem$src.tiny,\n            original = _elem$src.original;\n        return \"\\n  <li>\\n    <img src=\\\"\".concat(tiny, \"\\\" data-src=\\\"\").concat(original, \"\\\" alt=\\\"\").concat(photographer, \"\\\" />\\n  </li>\\n  \");\n      }).join('');\n    }\n  }, {\n    key: \"getFetch\",\n    value: function getFetch(listRef) {\n      var _this = this;\n\n      var params = \"?query=\".concat(this._query, \"&per_page=\").concat(this.perPage, \"&page=\").concat(this._page);\n      var url = this.BASE_URL + this.ednPoint + params;\n      fetch(url, this.options).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        return data.photos;\n      }).then(function (array) {\n        var result = _this.generateMarkup(array);\n\n        listRef.insertAdjacentHTML('beforeend', result);\n        console.log(result);\n      })[\"catch\"](function (err) {\n        console.log(err);\n      }); //   .finally(() => formRef.reset())\n    }\n  }, {\n    key: \"getFetchBySubmit\",\n    value: function getFetchBySubmit(formRef, listRef) {\n      var _this2 = this;\n\n      formRef.addEventListener('submit', function (e) {\n        // console.log(e)\n        e.preventDefault();\n        console.dir(e.target.elements.input);\n        _this2.query = e.target.elements.input.value; // устанавливаем новое значение через setter\n\n        listRef.innerHTML = '';\n\n        if (_this2.query) {\n          _this2.getFetch(listRef);\n        } else {\n          e.target.elements.input.disabled = true;\n          alert(\"Enter the search value\");\n        }\n\n        formRef.reset();\n      });\n    }\n  }, {\n    key: \"getFetchByClick\",\n    value: function getFetchByClick(btnRef, listRef) {\n      var _this3 = this;\n\n      btnRef.addEventListener('click', function () {\n        _this3.page = 1; // сеттер номера страницы\n\n        _this3.getFetch(listRef);\n      });\n    }\n  }]);\n\n  return FetchObject;\n}();\n\n\n\n//# sourceURL=webpack://module-11/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/refs.js":
/*!************************!*\
  !*** ./src/js/refs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  loadMoreBtn: document.getElementById('loadMore'),\n  list: document.getElementById('list'),\n  form: document.getElementById('form')\n});\n\n//# sourceURL=webpack://module-11/./src/js/refs.js?");

/***/ }),

/***/ "./src/styles/card.scss":
/*!******************************!*\
  !*** ./src/styles/card.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://module-11/./src/styles/card.scss?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://module-11/./src/styles/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;