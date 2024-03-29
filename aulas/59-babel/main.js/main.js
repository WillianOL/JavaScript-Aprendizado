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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_descricao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/descricao.js */ \"./js/modules/descricao.js\");\n/* harmony import */ var _modules_mostrarInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mostrarInfo.js */ \"./js/modules/mostrarInfo.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tolltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tolltip.js */ \"./js/modules/tolltip.js\");\n/* harmony import */ var _modules_dropDawnMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropDawnMenu.js */ \"./js/modules/dropDawnMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/animation-scroll.js */ \"./js/modules/animation-scroll.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_initFetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/initFetchAnimais.js */ \"./js/modules/initFetchAnimais.js\");\n/* harmony import */ var _modules_fethBitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fethBitcoin.js */ \"./js/modules/fethBitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_descricao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_mostrarInfo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tolltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_dropDawnMenu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_initFetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fethBitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://57-animais-eslint/./js/index.js?");

/***/ }),

/***/ "./js/modules/animaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/animaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  var numeros = document.querySelectorAll('[data-numero]');\n  function animaNumeros() {\n    numeros.forEach(function (numero) {\n      var total = +numero.innerHTML;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerHTML = start;\n        if (start > total) {\n          numero.innerHTML = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('animationSection')) {\n      // Vai desconectar o observador, fazendo ele parar de observar a section\n      observador.disconnect();\n      animaNumeros();\n    }\n  }\n  var observeTarget = document.querySelector('.numeros');\n  var observador = new MutationObserver(handleMutation);\n  observador.observe(observeTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/animaNumeros.js?");

/***/ }),

/***/ "./js/modules/animation-scroll.js":
/*!****************************************!*\
  !*** ./js/modules/animation-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nvar descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');\ndescricaoAnimais[0].classList.add('ativado'); // Adiciona o conteúdo para não ficar sem nada inicialmente\nfunction initAnimationScroll() {\n  var sections = document.querySelectorAll('section'); // Selecionando tudas as sections\n  sections[0].classList.add('animationSection');\n  function animationScroll() {\n    sections.forEach(function (section) {\n      // Pegando o topo de cada section -500 para aumentar a distancia de contato\n      var topSection = section.getBoundingClientRect().top - 500;\n      if (topSection < 0) {\n        // Se topo for < que 0, adicionar a classe da animação\n        section.classList.add('animationSection');\n      } else if (section.classList.contains('animationSection')) {\n        section.classList.remove('animationSection');\n      }\n    });\n  }\n  window.addEventListener('scroll', animationScroll);\n}\ninitAnimationScroll();\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/animation-scroll.js?");

/***/ }),

/***/ "./js/modules/descricao.js":
/*!*********************************!*\
  !*** ./js/modules/descricao.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDescricao)\n/* harmony export */ });\nvar menuClick = document.querySelectorAll('.js-listaAnimais img');\nvar descricaoAnimais = document.querySelectorAll('.js-descricao-tabs section');\ndescricaoAnimais[0].classList.add('ativado'); // Adiciona o conteúdo para não ficar sem nada inicialmente\n\nfunction mostrarInfo(index) {\n  descricaoAnimais.forEach(function (itens) {\n    itens.classList.remove('ativado');\n  });\n  descricaoAnimais[index].classList.add('ativado');\n}\nfunction initDescricao() {\n  if (menuClick.length && descricaoAnimais.length) {\n    // Só vai executar se os dois elementos existirem na tela.\n    // função recebendo o index do forEach para adicionar a classe a section de acordo com a img.\n    menuClick.forEach(function (imgs, index) {\n      // Criando a função de click para todas as imagens.\n      imgs.addEventListener('click', function () {\n        mostrarInfo(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/descricao.js?");

/***/ }),

/***/ "./js/modules/dropDawnMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropDawnMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDawnMenu)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modules/outSideClick.js\");\n\nfunction handleClick(event) {\n  var _this = this;\n  event.preventDefault();\n  this.classList.add('ativo');\n  (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, function () {\n    _this.classList.remove('ativo');\n  });\n}\nfunction initDropDawnMenu() {\n  var allDropMenus = document.querySelectorAll('[data-dropDawn]');\n  allDropMenus.forEach(function (menu) {\n    // Forma de adicionar varios eventos a uma função\n    ['click', 'touchstart'].forEach(function (startEvent) {\n      menu.addEventListener(startEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/dropDawnMenu.js?");

/***/ }),

/***/ "./js/modules/fethBitcoin.js":
/*!***********************************!*\
  !*** ./js/modules/fethBitcoin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction initFetchBitcoin() {\n  return _initFetchBitcoin.apply(this, arguments);\n}\nfunction _initFetchBitcoin() {\n  _initFetchBitcoin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var spanBitcoin, response, json, bitcoin;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          spanBitcoin = document.querySelector('.bitcoinPreco');\n          _context.next = 4;\n          return fetch('https://www.blockchain.com/pt/ticker');\n        case 4:\n          response = _context.sent;\n          _context.next = 7;\n          return response.json();\n        case 7:\n          json = _context.sent;\n          bitcoin = (10000 / json.BRL.sell).toFixed(4);\n          spanBitcoin.innerText = bitcoin;\n          _context.next = 15;\n          break;\n        case 12:\n          _context.prev = 12;\n          _context.t0 = _context[\"catch\"](0);\n          console.log(_context.t0);\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 12]]);\n  }));\n  return _initFetchBitcoin.apply(this, arguments);\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/fethBitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/initFetchAnimais.js":
/*!****************************************!*\
  !*** ./js/modules/initFetchAnimais.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/modules/animaNumeros.js\");\n\n\n\nfunction criarAnimal(animal) {\n  var div = document.createElement('div');\n  div.classList.add('numero-animais');\n  div.innerHTML = \"<h3>\".concat(animal.especie, \"</h3> <span data-numero>\").concat(animal.numero, \"</span>\");\n  return div;\n}\nfunction initFetchAnimais() {\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var response, animaisJSON, conteiner;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n          case 5:\n            animaisJSON = _context.sent;\n            conteiner = document.querySelector('.numeros-grid');\n            animaisJSON.forEach(function (animal) {\n              var animaisDiv = criarAnimal(animal);\n              conteiner.appendChild(animaisDiv);\n            });\n            (0,_animaNumeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  fetchAnimais('./animaisApi.json');\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/initFetchAnimais.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMObile)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modules/outSideClick.js\");\n\nfunction initMenuMObile() {\n  var menuBotton = document.querySelector(\"[data-menu='button']\");\n  var menuList = document.querySelector(\"[data-menu='list']\");\n  var eventos = ['click', 'touchstart'];\n  function openMenu() {\n    menuBotton.classList.add('ativo');\n    menuList.classList.add('ativo');\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      menuBotton.classList.remove('ativo');\n      menuList.classList.remove('ativo');\n    });\n  }\n  eventos.forEach(function (event) {\n    menuBotton.addEventListener(event, openMenu);\n  });\n  menuBotton.addEventListener('click', openMenu);\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var containerModal = document.querySelector('[data-modal=\"conteiner\"]');\n  var btnAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  var btnFechar = document.querySelector('[data-modal=\"fechar\"]');\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n  function fecharClickForaModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  if (containerModal && btnAbrir && btnFechar) {\n    btnFechar.addEventListener('click', toggleModal);\n    btnAbrir.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', fecharClickForaModal);\n  }\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/mostrarInfo.js":
/*!***********************************!*\
  !*** ./js/modules/mostrarInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initInfo)\n/* harmony export */ });\nfunction initInfo() {\n  var faqBtns = document.querySelectorAll('.js-showAnimais h2');\n  var showP = 'showP'; // Definindo a classe CSS em uma constante para uma futura modificação\n\n  faqBtns[0].nextElementSibling.classList.add(showP); // Deixa o primeiro item visível na tela.\n\n  function mostrarInfoFaq() {\n    // função para clicar e adicionar a classe ao item abaixo do clicado.\n    this.nextElementSibling.classList.toggle(showP);\n  }\n  faqBtns.forEach(function (item) {\n    // Crianco a função com evento de click a todos os h2\n    item.addEventListener('click', mostrarInfoFaq);\n  });\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/mostrarInfo.js?");

/***/ }),

/***/ "./js/modules/outSideClick.js":
/*!************************************!*\
  !*** ./js/modules/outSideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutSide)\n/* harmony export */ });\nfunction clickOutSide(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutSideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      html.removeEventListener('click', handleOutSideClick);\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutSideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/outSideClick.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iniScrollSuave)\n/* harmony export */ });\nfunction iniScrollSuave() {\n  var menuLinks = document.querySelectorAll('.menu-js a[href^=\"#\"]'); // Selecionando todos os links internos.\n\n  function scrollParaSection(event) {\n    event.preventDefault(); // Desabilitando o comportamento padrão do link interno.\n    var link = event.target.getAttribute('href'); // Pegando o atributo href dos links.\n    var section = document.querySelector(link); // Selecionando a section atravéz de seu href\n\n    section.scrollIntoView({\n      // Vai dar o scroll até a section relacionada com o link interno, dando um scroll suave.\n      behavior: 'smooth'\n    });\n  }\n  menuLinks.forEach(function (links) {\n    // Adicionando a função de click em casa a.\n    links.addEventListener('click', scrollParaSection);\n  });\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/tolltip.js":
/*!*******************************!*\
  !*** ./js/modules/tolltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  var todasAsTooltips = document.querySelectorAll('[data-tooltip]');\n  var onMouseMove = {\n    tooltipBox: '',\n    handleEvent: function handleEvent(event) {\n      this.tooltipBox.style.top = \"\".concat(event.pageY + 20, \"px'\");\n      this.tooltipBox.style.left = \"\".concat(event.pageX + 20, \"px'\");\n    }\n  };\n  var onMouseLeave = {\n    tooltipBox: '',\n    element: '',\n    handleEvent: function handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n    }\n  };\n  function criarTooltipBox(element) {\n    var tooltipBox = document.createElement('div');\n    var text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltipBox');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n  function onMouseOver() {\n    var tooltipBox = criarTooltipBox(this);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mouseleave', onMouseLeave);\n    this.addEventListener('mousemove', onMouseMove);\n  }\n  todasAsTooltips.forEach(function (item) {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n//# sourceURL=webpack://57-animais-eslint/./js/modules/tolltip.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return e;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var t,\n    e = {},\n    r = Object.prototype,\n    n = r.hasOwnProperty,\n    o = Object.defineProperty || function (t, e, r) {\n      t[e] = r.value;\n    },\n    i = \"function\" == typeof Symbol ? Symbol : {},\n    a = i.iterator || \"@@iterator\",\n    c = i.asyncIterator || \"@@asyncIterator\",\n    u = i.toStringTag || \"@@toStringTag\";\n  function define(t, e, r) {\n    return Object.defineProperty(t, e, {\n      value: r,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), t[e];\n  }\n  try {\n    define({}, \"\");\n  } catch (t) {\n    define = function define(t, e, r) {\n      return t[e] = r;\n    };\n  }\n  function wrap(t, e, r, n) {\n    var i = e && e.prototype instanceof Generator ? e : Generator,\n      a = Object.create(i.prototype),\n      c = new Context(n || []);\n    return o(a, \"_invoke\", {\n      value: makeInvokeMethod(t, r, c)\n    }), a;\n  }\n  function tryCatch(t, e, r) {\n    try {\n      return {\n        type: \"normal\",\n        arg: t.call(e, r)\n      };\n    } catch (t) {\n      return {\n        type: \"throw\",\n        arg: t\n      };\n    }\n  }\n  e.wrap = wrap;\n  var h = \"suspendedStart\",\n    l = \"suspendedYield\",\n    f = \"executing\",\n    s = \"completed\",\n    y = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var p = {};\n  define(p, a, function () {\n    return this;\n  });\n  var d = Object.getPrototypeOf,\n    v = d && d(d(values([])));\n  v && v !== r && n.call(v, a) && (p = v);\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\n  function defineIteratorMethods(t) {\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\n      define(t, e, function (t) {\n        return this._invoke(e, t);\n      });\n    });\n  }\n  function AsyncIterator(t, e) {\n    function invoke(r, o, i, a) {\n      var c = tryCatch(t[r], t, o);\n      if (\"throw\" !== c.type) {\n        var u = c.arg,\n          h = u.value;\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\n          invoke(\"next\", t, i, a);\n        }, function (t) {\n          invoke(\"throw\", t, i, a);\n        }) : e.resolve(h).then(function (t) {\n          u.value = t, i(u);\n        }, function (t) {\n          return invoke(\"throw\", t, i, a);\n        });\n      }\n      a(c.arg);\n    }\n    var r;\n    o(this, \"_invoke\", {\n      value: function value(t, n) {\n        function callInvokeWithMethodAndArg() {\n          return new e(function (e, r) {\n            invoke(t, n, e, r);\n          });\n        }\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(e, r, n) {\n    var o = h;\n    return function (i, a) {\n      if (o === f) throw new Error(\"Generator is already running\");\n      if (o === s) {\n        if (\"throw\" === i) throw a;\n        return {\n          value: t,\n          done: !0\n        };\n      }\n      for (n.method = i, n.arg = a;;) {\n        var c = n.delegate;\n        if (c) {\n          var u = maybeInvokeDelegate(c, n);\n          if (u) {\n            if (u === y) continue;\n            return u;\n          }\n        }\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\n          if (o === h) throw o = s, n.arg;\n          n.dispatchException(n.arg);\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\n        o = f;\n        var p = tryCatch(e, r, n);\n        if (\"normal\" === p.type) {\n          if (o = n.done ? s : l, p.arg === y) continue;\n          return {\n            value: p.arg,\n            done: n.done\n          };\n        }\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(e, r) {\n    var n = r.method,\n      o = e.iterator[n];\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\n    var i = tryCatch(o, e.iterator, r.arg);\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\n    var a = i.arg;\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\n  }\n  function pushTryEntry(t) {\n    var e = {\n      tryLoc: t[0]\n    };\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\n  }\n  function resetTryEntry(t) {\n    var e = t.completion || {};\n    e.type = \"normal\", delete e.arg, t.completion = e;\n  }\n  function Context(t) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(e) {\n    if (e || \"\" === e) {\n      var r = e[a];\n      if (r) return r.call(e);\n      if (\"function\" == typeof e.next) return e;\n      if (!isNaN(e.length)) {\n        var o = -1,\n          i = function next() {\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\n            return next.value = t, next.done = !0, next;\n          };\n        return i.next = i;\n      }\n    }\n    throw new TypeError(_typeof(e) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\n    var e = \"function\" == typeof t && t.constructor;\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\n  }, e.mark = function (t) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\n  }, e.awrap = function (t) {\n    return {\n      __await: t\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\n    return this;\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\n    void 0 === i && (i = Promise);\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\n      return t.done ? t.value : a.next();\n    });\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\n    return this;\n  }), define(g, \"toString\", function () {\n    return \"[object Generator]\";\n  }), e.keys = function (t) {\n    var e = Object(t),\n      r = [];\n    for (var n in e) r.push(n);\n    return r.reverse(), function next() {\n      for (; r.length;) {\n        var t = r.pop();\n        if (t in e) return next.value = t, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, e.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(e) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var t = this.tryEntries[0].completion;\n      if (\"throw\" === t.type) throw t.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(e) {\n      if (this.done) throw e;\n      var r = this;\n      function handle(n, o) {\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\n      }\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\n        var i = this.tryEntries[o],\n          a = i.completion;\n        if (\"root\" === i.tryLoc) return handle(\"end\");\n        if (i.tryLoc <= this.prev) {\n          var c = n.call(i, \"catchLoc\"),\n            u = n.call(i, \"finallyLoc\");\n          if (c && u) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          } else if (c) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n          } else {\n            if (!u) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(t, e) {\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n        var o = this.tryEntries[r];\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\n          var i = o;\n          break;\n        }\n      }\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\n      var a = i ? i.completion : {};\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\n    },\n    complete: function complete(t, e) {\n      if (\"throw\" === t.type) throw t.arg;\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\n    },\n    finish: function finish(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\n      }\n    },\n    \"catch\": function _catch(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.tryLoc === t) {\n          var n = r.completion;\n          if (\"throw\" === n.type) {\n            var o = n.arg;\n            resetTryEntry(r);\n          }\n          return o;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(e, r, n) {\n      return this.delegate = {\n        iterator: values(e),\n        resultName: r,\n        nextLoc: n\n      }, \"next\" === this.method && (this.arg = t), y;\n    }\n  }, e;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://57-animais-eslint/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://57-animais-eslint/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://57-animais-eslint/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://57-animais-eslint/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;