/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *   @author Bates, Howard [ hbates@northmen.org ]
	 *   @version 0.0.1
	 *   @summary http server: XX || Created: XX.XX.2016
	 *   @todo Everything!
	 */

	"use strict";

	const FADE = __webpack_require__(1);

	class main {
	     constructor() {
	          this.initials = [];
	          FADE.doFade('in', 'title');
	          document.getElementById('mainInfo').style.visibility = 'hidden';
	          document.getElementById('replacing').style.visibility = 'hidden';
	          document.getElementById('certified').style.visibility = 'hidden';
	          document.getElementById('certifyButton').style.visibility = 'hidden';
	          main.handleNew();
	          main.handleReplacement();
	          this.handleInitials();
	     }

	     static handleNew() {
	          document.getElementById('startNew').addEventListener('click', () => {
	               FADE.doFade('in', 'mainInfo');
	               FADE.doFade('out', 'buttons');
	          });
	     }

	     static handleReplacement() {
	          document.getElementById('replacement').addEventListener('click', () => {
	               if (document.getElementById('replacement').checked) {
	                    FADE.doFade('in', 'replacing');
	               } else {
	                    FADE.doFade('out', 'replacing');
	               }
	          });
	     }

	     handleInitials() {
	          document.getElementById('initialsLL').addEventListener('change', () => {
	               let initials = document.getElementById('initialsLL').value.toUpperCase();
	               if (initials === '') {
	                    this.initials[0] = null;
	               } else if (initials !== 'LL') {
	                    alert('Incorrect value. Please try again.');
	                    document.getElementById('initialsLL').value = null;
	               } else {
	                    this.initials[0] = initials;
	               }
	               console.log(this.initials[0]);
	          });
	     }
	}

	window.addEventListener('load', () => {
	     new main();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*  AUTHOR: hbates@northmen.org
	 *  VERSION: 1.0
	 *  CREATED: 12.01.2015
	 */

	"use strict";

	class FadeStuff {
	    constructor() {

	    }

	    static doFade(direction, fadeWhat) {
	        //http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
	        let div = document.getElementById(fadeWhat);
	        if (direction == "in") {
	            div.style.opacity = 0;
	            div.style.visibility = 'visible';
	            (function fade() {
	                let val = parseFloat(div.style.opacity);
	                if (!((val += .01) >= 1)) {
	                    div.style.opacity = val;
	                    requestAnimationFrame(fade);
	                }
	            })();
	        } else if (direction == "out") {
	            div.style.opacity = 1;
	            (function fade() {
	                if ((div.style.opacity -= .01) <= 0) {
	                    div.style.visibility = 'hidden';
	                } else {
	                    requestAnimationFrame(fade);
	                }
	            })();
	        }
	    }
	}

	module.exports = FadeStuff;

/***/ }
/******/ ]);