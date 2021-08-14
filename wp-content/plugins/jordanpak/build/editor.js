/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/editor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/components/file-control/index.css":
/*!******************************************************!*\
  !*** ./src/assets/components/file-control/index.css ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/components/file-control/index.js":
/*!*****************************************************!*\
  !*** ./src/assets/components/file-control/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/assets/components/file-control/index.css");


/**
 * Media InspectorControls handler for files
 *
 * @since 1.0.0
 */






const FileControl = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])((select, {
  attachmentID
}) => {
  return {
    attachmentPost: select('core').getEntityRecord('postType', 'attachment', attachmentID)
  };
})(({
  label,
  attachmentID,
  onSelect,
  onClear,
  attachmentPost
}) => {
  var _attachmentPost$descr;

  const description = attachmentPost === null || attachmentPost === void 0 ? void 0 : (_attachmentPost$descr = attachmentPost.description) === null || _attachmentPost$descr === void 0 ? void 0 : _attachmentPost$descr.rendered;
  return (// eslint-disable-next-line @wordpress/no-base-control-with-label-without-id
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
      label: label
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelect,
      value: attachmentID,
      render: ({
        open
      }) => {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "components-base-control__field"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          isSecondary: true,
          onClick: open
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select File', 'jordanpak')), attachmentID > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, '\u00A0\u00A0', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          isDestructive: true,
          isSecondary: true,
          onClick: onClear
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove', 'jordanpak'))));
      }
    }), attachmentID > 0 && attachmentPost && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "jordanpak-attachment-description",
      dangerouslySetInnerHTML: {
        __html: description
      }
    }))
  );
});
/* harmony default export */ __webpack_exports__["default"] = (FileControl);

/***/ }),

/***/ "./src/assets/editor/index.js":
/*!************************************!*\
  !*** ./src/assets/editor/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ "./src/assets/editor/plugins/index.js");
/**
 * Block editor plugins + blocks
 *
 * @since 2.0.0
 */


/***/ }),

/***/ "./src/assets/editor/plugins/index.js":
/*!********************************************!*\
  !*** ./src/assets/editor/plugins/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screenshots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenshots */ "./src/assets/editor/plugins/screenshots/index.js");
/**
 * Block editor sidebar plugins
 *
 * @since 2.0.0
 */


/***/ }),

/***/ "./src/assets/editor/plugins/screenshots/index.js":
/*!********************************************************!*\
  !*** ./src/assets/editor/plugins/screenshots/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_plugin_meta_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/plugin-meta-handler */ "./src/assets/util/plugin-meta-handler.js");
/* harmony import */ var _components_file_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/file-control */ "./src/assets/components/file-control/index.js");


/**
 * Post screenshots
 *
 * @since 1.0.0
 */





const render = Object(_util_plugin_meta_handler__WEBPACK_IMPORTED_MODULE_4__["default"])({
  mobile: {
    key: 'screenshot_mobile'
  }
})(({
  postType,
  mobile,
  setMobile
}) => {
  // sanity check for event
  if (postType !== 'jpk_project') {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__["PluginDocumentSettingPanel"], {
    className: "jordanpak-screenshots",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Screenshots', 'jordanpak')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_file_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'jordanpak'),
    attachmentID: mobile,
    onSelect: media => setMobile(Number(media.id)),
    onClear: () => setMobile(0)
  }));
}); // register the sidebar plugin

Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__["registerPlugin"])('jordanpak-screenshots', {
  render,
  icon: 'laptop'
});

/***/ }),

/***/ "./src/assets/util/plugin-meta-handler.js":
/*!************************************************!*\
  !*** ./src/assets/util/plugin-meta-handler.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pluginMetaHandler; });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Create a meta getter and setter for a sidebar plugin
 *
 * @since 2.0.0
 */



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * Compose a meta selector and dispatcher for the provided meta keys and types
 *
 * @param {Object} meta Meta names/keys/types to select and create dispatchers for
 */


function pluginMetaHandler(meta) {
  /**
   * Get post meta values for each of the provided meta keys
   */
  const selector = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(select => {
    // get all registered post meta
    const postMeta = Object.assign({}, select('core/editor').getEditedPostAttribute('meta')); // init new meta object with postType

    const selected = {
      postType: select('core/editor').getCurrentPostType()
    }; // get meta value for reach of the keys

    for (const [key, props] of Object.entries(meta)) {
      selected[key] = postMeta[props.key];
      /**
       * Add extra %key%Post prop if postId type
       */

      if (props.type === 'postId' && selected[key]) {
        selected[`${key}Post`] = select('core').getEntityRecord('postType', props.postType, selected[key]);
        /**
         * Add extra %key%Users and %key%IsRequesting prop if userId
         *
         * @see https://wordpress.stackexchange.com/questions/363285/how-to-use-getentityrecords-for-user-data
         */
      } else if (props.type === 'userId') {
        const {
          isResolving
        } = select('core/data');
        const query = {
          per_page: 5
        }; // get some users

        selected[`${key}Users`] = select('core').getEntityRecords('root', 'user', query); // see if we're still requesting users

        selected[`${key}IsRequesting`] = isResolving('core', 'getEntityRecords', ['root', 'user', query]);
      }
    }

    return selected;
  });
  /**
   * Create post meta setting functions for each of the provided keys
   */

  const dispatcher = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(dispatch => {
    /**
     * Dispatch an edit for the actual meta value
     *
     * @param {string}                key    registered post meta name/key
     * @param {string|number|boolean} value  new meta value
     * @param {string}                type   value type
     */
    const setMeta = (key, value, type = 'string') => {
      const postMeta = {};

      switch (type) {
        case 'number':
        case 'postId':
          value = Number(value);
          break;

        case 'boolean':
          value = Boolean(value);
          break;
      }

      postMeta[key] = value;
      dispatch('core/editor').editPost({
        meta: postMeta
      });
    };

    const dispatchers = {}; // Add a setWhatever "dispatcher" for each of the provided keys. If the
    // property isFeatured is passed in, a new property in this dispatchers
    // object would be setIsFeatured.

    for (const [key, props] of Object.entries(meta)) {
      dispatchers[`set${capitalizeFirstLetter(key)}`] = value => setMeta(props.key, value, props.type);
    }

    return dispatchers;
  });
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(selector, dispatcher);
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map