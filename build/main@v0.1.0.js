/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/main.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var platform=__etcpack__scope_args__.platform;

__etcpack__scope_args__=window.__etcpack__getBundle('3');
var normalize =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('4');
 // 引入主模块

__etcpack__scope_args__=window.__etcpack__getBundle('17');
var appModule =__etcpack__scope_args__.default;
 // 先获取平台实例

platform({
  // 框架管理的区域
  el: document.getElementById('root'),
  // 全局样式
  styles: [normalize]
}) // 然后启动主模块
.bootstrap(appModule);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');
var Nefbl =__etcpack__scope_args__.default;
 // 装饰器

__etcpack__scope_bundle__.Module = Nefbl.Module;
__etcpack__scope_bundle__.Component = Nefbl.Component;
__etcpack__scope_bundle__.Directive = Nefbl.Directive; // 核心方法

__etcpack__scope_bundle__.platform = Nefbl.platform;
__etcpack__scope_bundle__.mountComponent = Nefbl.mountComponent;
__etcpack__scope_bundle__.evalExpress = Nefbl.evalExpress;
__etcpack__scope_bundle__.getValue = Nefbl.getValue;
__etcpack__scope_bundle__.setValue = Nefbl.setValue; // 暴露的一些有用的方法

__etcpack__scope_bundle__.ref = Nefbl.ref;
__etcpack__scope_bundle__.reactive = Nefbl.reactive;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/nefbl/dist/nefbl.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
 * nefbl - 新一代前端框架
 *
 * git+https://github.com/nefbl/nefbl.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.6
 *
 * Copyright (c) 2021-2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Thu Dec 02 2021 16:51:00 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  var isObject = _isObject; // 基本类型

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  /**
   * 模块
   */

  function Module () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var component = {},
        directive = {};
    var bootstrapComponent = null;
    var exports = {
      component: {},
      directive: {}
    };

    if (isArray(config.declarations)) {
      // 分析出指令和组件
      var _iterator = _createForOfIteratorHelper(config.declarations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Item = _step.value;
          var needExports = false;

          if (isArray(config.exports)) {
            // 判断是否需要暴露

            /**
             * 为什么这里暴露出去的需要从declarations中取？
             * 因为考虑到后期改造的时候，可能新增一些需要在本模块实例化等，
             * 这样的好处是保罗出去的和内置使用的保持一致，不会乱。
             */
            var _iterator2 = _createForOfIteratorHelper(config.exports),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ExportItem = _step2.value;

                if (ExportItem === Item) {
                  needExports = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // 组件


          if (Item.prototype.__type__ == "Component") {
            component[Item.prototype.__selector__] = Item; // bootstrap用于标记启动组件

            if (config.bootstrap === Item) {
              bootstrapComponent = Item;
            }

            if (needExports) {
              exports.component[Item.prototype.__selector__] = Item;
            }
          } // 指令
          else if (Item.prototype.__type__ == "Directive") {
              directive[Item.prototype.__selector__] = Item;

              if (needExports) {
                exports.directive[Item.prototype.__selector__] = Item;
              }
            }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (isArray(config.imports)) {
      // 分析导入的模块
      var _iterator3 = _createForOfIteratorHelper(config.imports),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var module = _step3.value;

          // 组件
          for (var key in module.prototype.__exports__.component) {
            component[key] = module.prototype.__exports__.component[key];
          } // 指令


          for (var _key in module.prototype.__exports__.directive) {
            directive[_key] = module.prototype.__exports__.directive[_key];
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Module'; // 登记所有的指令、组件（包括依赖的模块的）

      target.prototype.__component__ = component;
      target.prototype.__directive__ = directive; // 暴露出去的

      target.prototype.__exports__ = exports; // 可能还有启动组件

      target.prototype.__bootstrapComponent__ = bootstrapComponent;
    };
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  var toString$1 = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType$1 (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString$1.call(value);
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType$1(value) === '[object String]';
  }

  var isString = _isString;
  var isArray$1 = function isArray(input) {
    return Array.isArray(input);
  };

  function analyseTag (attrString) {
    var attr = {},
        index = 0;
    attrString = attrString.trim();

    var getOneAttr = function getOneAttr() {
      // 属性名和属性值
      var attrName = "",
          attrValue = ""; // 先寻找属性名

      for (; index < attrString.length; index++) {
        // 寻找属性名的时候遇到空白或结尾的时候，肯定没有属性值
        if ($RegExp.blanksReg.test(attrString[index]) || index == attrString.length - 1) {
          attrName += attrString[index]; // 如果属性名是空白，就不需要记录了

          if (!$RegExp.blanksReg.test(attrName)) {
            attr[attrName.trim()] = "";
          }

          index += 1;
          break;
        } // 如果遇到等号，说明属性名寻找结束了
        else if (attrString[index] == '=') {
            // 接着寻找属性值
            index += 1; // 由于属性可能由引号包裹或直接暴露

            var preCode = null,
                preLeng = -1; // 如果是由'或者"包裹

            if (attrString.substr(index, 1) == '"' || attrString.substr(index, 1) == "'") {
              preCode = attrString.substr(index, 1);
              preLeng = 1;
              index += 1;
            } // 如果是由\'或\"包裹
            else if (attrString.substr(index, 2) == '\"' || attrString.substr(index, 2) == "\'") {
                preCode = attrString.substr(index, 2);
                preLeng = 2;
                index += 2;
              } // 开始正式寻找属性值
            // 如果没有包裹，是直接暴露在外面的
            // 我们寻找到空格或结尾即可


            if (preCode !== null) {
              for (; index < attrString.length; index++) {
                if (attrString.substr(index, preLeng) == preCode) {
                  attr[attrName.trim()] = attrValue.trim();
                  index += 2;
                  break;
                } else {
                  attrValue += attrString[index];
                }
              }
            } // 如果是包裹的
            // 我们确定寻找到对应的包裹闭合即可
            else {
                for (; index < attrString.length; index++) {
                  if ($RegExp.blanksReg.test(attrString[index])) {
                    attr[attrName.trim()] = attrValue.trim();
                    index += 1;
                    break;
                  } else {
                    attrValue += attrString[index];
                  }
                }
              }

            break;
          } else {
            attrName += attrString[index];
          }
      } // 如果还有字符串，继续解析


      if (index < attrString.length) {
        getOneAttr();
      }
    };

    getOneAttr();
    return attr;
  }

  function nextTagFun (template) {
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 如果前面是获取的js或css，还有pre等开始标签，比较特殊，直接寻址闭合的

    var preIsSpecial = false,
        specialCode = "";
    var specialTag = ['script', 'pre', 'style', 'code']; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < template.length - 1 ? template[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return template.substring(i, n + i > template.length ? template.length : n + i);
    };

    next(); // 剔除开头的空白

    while ($RegExp.blankReg.test(currentChar) && i < template.length - 1) {
      next();
    }
    /**
     * 一个Tag存在哪些类型？如下：
     * 1.<tag-name>       { tagName:'tag-name', type:'beginTag', attrs:{} }      开始标签
     * 2.</tag-name>      { tagName:'tag-name', type:'endTag'   }                结束标签
     * 3.<tag-name />     { tagName:'tag-name', type:'fullTag',  attrs:{} }      自闭合标签
     * 4.text             { tagName:'text',     type:'textcode' }                文本结点
     * 5.<!-- text -->    { tagName:'text',     type:'comment'  }                注释
     * 6.<!DOCTYPE text>  { tagName:'text',     type:'DOCTYPE'  }                声明
     *
     *
     */


    return function () {
      var tag = currentChar,
          tagObj = {};
      if (tag == null) return null;
      /**
       * 特殊标签内容获取
       * ========================================
       */
      // 如果是获取特殊标签里面的内容
      // 先不考虑里面包含'</XXX>'

      if (preIsSpecial) {
        tagObj.type = 'textcode';
        tagObj.tagName = tag;

        while (nextNValue(specialCode.length + 3) != '</' + specialCode + '>' && i < template.length) {
          tagObj.tagName += next();
        }

        tagObj.tagName = tagObj.tagName.replace(/<$/, '');
        preIsSpecial = false;
        return tagObj;
      }
      /**
       * 特殊标签获取
       * ========================================
       */
      // 针对特殊的comment


      if (nextNValue(4) == '<!--') {
        tagObj.type = 'comment';
        tagObj.tagName = tag;

        while (nextNValue(3) != '-->' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        next();
        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!--/, '').replace(/-$/, '');
        return tagObj;
      } // 针对特殊的doctype


      if (nextNValue(9) == '<!DOCTYPE') {
        tagObj.type = 'DOCTYPE';
        tagObj.tagName = tag;

        while (nextNValue(1) != '>' && i < template.length) {
          tagObj.tagName += next();
        }

        next();
        tagObj.tagName = tagObj.tagName.replace(/^<!DOCTYPE/, '').replace(/>$/, '');
        return tagObj;
      }
      /**
       * 普通的
       * ========================================
       */
      // 如果是期望归结非文本结点
      else if (tag == '<') {
          // 标记是否处于属性值是字符串包裹中
          var isAttrString = false,
              attrLeftValue = null,
              attrLeftLen = null; // 如果在包裹中或者没有遇到‘>’说明没有结束

          while ((isAttrString || currentChar != '>') && i < template.length) {
            tag += next(); // 如果是包裹里面，试探是否即将遇到了结束

            if (isAttrString) {
              var next23Value = nextNValue(attrLeftLen + 1).substring(1);

              if (next23Value == attrLeftValue) {
                isAttrString = false;
              }
            } // 如果在包裹外面，试探是否即将进入包裹
            else {
                var next23Value = nextNValue(2);

                if (next23Value == '="' || next23Value == "='") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 1;
                  isAttrString = true;
                }

                next23Value = nextNValue(3);

                if (next23Value == '=\"' || next23Value == "=\'") {
                  attrLeftValue = next23Value.replace('=', '');
                  attrLeftLen = 2;
                  isAttrString = true;
                }
              }
          } // 针对特殊的结束标签


          if (/^<\//.test(tag)) {
            tagObj.tagName = tag.replace(/^<\//, '').replace(/>$/, '');
            tagObj.type = 'endTag';
          } else {
            if (/\/>$/.test(tag)) {
              tagObj.type = 'fullTag';
              tag = tag.replace(/\/>$/, '');
            } else {
              tagObj.type = 'beginTag';
              tag = tag.replace(/>$/, '');
            }

            tag = tag.replace(/^</, '');
            tagObj.tagName = "";
            var j = 0;

            for (; j < tag.length; j++) {
              if (tag[j] == ' ') break;
              tagObj.tagName += tag[j];
            }

            var attrString = tag.substring(j);

            if ($RegExp.blanksReg.test(attrString)) {
              tagObj.attrs = {};
            } else {
              tagObj.attrs = analyseTag(attrString);
            }
          }
        } // 如果是归结文本结点
        // 如果文本中包含<的先忽略考虑
        else {
            tagObj.type = 'textcode';
            tagObj.tagName = currentChar;

            while (nextNValue(1) != '<' && i < template.length) {
              tagObj.tagName += next();
            }

            tagObj.tagName = tagObj.tagName.replace(/<$/, '');
            i -= 1;
          } // 如果遇到开始script或者style、pre等特殊标签，标记开始获取特殊文本


      if (tagObj.type == 'beginTag') {
        if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
          preIsSpecial = true;
          specialCode = tagObj.tagName;
        }
      } // 如果遇到结束script或者style、pre等特殊标签，标记结束获取特殊文本
      else if (tagObj.type == 'endTag') {
          if (specialTag.indexOf(tagObj.tagName.toLowerCase()) > -1) {
            preIsSpecial = false;
          }
        }

      next();
      return tagObj;
    };
  }

  // 分析deep
  // 我们会在这里校对那些没有结束标签的开始标签
  // 这步结束以后，每个都是一个单独的标签
  // 也就是不用再区分开始或闭合了
  function analyseDeep (tagArray) {
    // 闭合标签
    tagArray = closeTag(tagArray);
    var deep = 0,
        tagDeepArray = [];
    tagArray.forEach(function (tag) {
      if (tag.type == 'beginTag') {
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: ++deep,
          __tagType__: "double"
        });
      } else if (tag.type == 'endTag') {
        deep -= 1;
      } else if (tag.type == 'textcode') {
        // 如果是文本
        tagDeepArray.push({
          type: "text",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else if (tag.type == 'comment') {
        // 如果是注释
        tagDeepArray.push({
          type: "comment",
          content: tag.tagName,
          __deep__: deep + 1
        });
      } else {
        // 如果是自闭合结点
        tagDeepArray.push({
          type: "tag",
          name: tag.tagName,
          attrs: tag.attrs,
          __deep__: deep + 1,
          __tagType__: "single"
        });
      }
    });
    return tagDeepArray;
  }

  var closeTag = function closeTag(tagArray) {
    var needClose = [];
    tagArray.forEach(function (tag, i) {
      if (tag.type == 'beginTag') {
        needClose.push([i, tag.tagName]);
      } else if (tag.type == 'endTag') {
        while (needClose.length > 0) {
          var needCloseTag = needClose.pop();

          if (needCloseTag[1] == tag.tagName) {
            break;
          } else {
            tagArray[needCloseTag[0]].type = 'fullTag';
          }
        }
      }
    });
    return tagArray;
  };

  /*!
   * 🔪 - 解析xhtml为json对象返回
   * https://github.com/hai2007/algorithm.js/blob/master/xhtmlToJson.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  // noIgnore为true表示不忽略任何标签

  function xhtmlToJson (template, noIgnore) {
    if (!isString(template)) throw new Error("Template must be a String!"); // 获取读取下一个标签对象

    var nextTag = nextTagFun(template.trim());
    var tag = nextTag(),
        DomTree = [];

    while (tag != null) {
      if (tag.type == 'textcode' && $RegExp.blanksReg.test(tag.tagName)) ; else if (tag.type == 'DOCTYPE') ; else if (tag.type == 'comment') {
        // 注释目前也默认过滤掉，除非显示声明不忽略
        if (noIgnore) {
          DomTree.push(tag);
        }
      } else {
        tag.tagName = tag.tagName.trim();
        DomTree.push(tag);
      }

      tag = nextTag();
    } // 分析层次


    DomTree = analyseDeep(DomTree);
    /**
     * 模仿浏览器构建的一棵树,每个结点有如下属性：
     *
     * 1.parentNode index  父结点
     * 2.childNodes []     孩子结点
     * 3.preNode    index  前一个兄弟结点
     * 4.nextNode   index  后一个兄弟结点
     *
     * 5.attrs:{}          当前结点的属性
     * 6.name              节点名称
     * 7.type              节点类型（tag和text）
     * 8.content           文本结点内容
     *
     * 需要注意的是：如果一个文本结点内容只包含回车，tab，空格等空白字符，会直接被忽视
     */

    var presNode = [null],
        preDeep = 0;

    for (var i = 0; i < DomTree.length; i++) {
      // 当前结点
      var currentIndex = i,
          currentDeep = DomTree[i].__deep__;
      DomTree[i].childNodes = [];
      DomTree[i].preNode = null;
      DomTree[i].nextNode = null; // 前置三个结点

      var lastPre = presNode[presNode.length - 1];
      var last2Pre = presNode.length > 1 ? presNode[presNode.length - 2] : null; // 如果遇到的是兄弟结点

      if (currentDeep == preDeep) {
        // 修改兄弟关系
        DomTree[currentIndex].preNode = lastPre;
        DomTree[lastPre].nextNode = currentIndex; // 修改父子关系

        DomTree[currentIndex].parentNode = last2Pre;
        DomTree[last2Pre].childNodes.push(currentIndex); // 校对presNode

        presNode[presNode.length - 1] = currentIndex;
      } // 如果是遇到了孩子
      else if (currentDeep > preDeep) {
          // 修改兄弟关系
          // todo
          // 修改父子关系
          DomTree[currentIndex].parentNode = lastPre;
          if (lastPre != null) DomTree[lastPre].childNodes.push(currentIndex); // 校对presNode

          presNode.push(currentIndex);
        } // 如果是遇到了祖先
        else {
            var preTempIndex = presNode[presNode.length - 1 - (preDeep - currentDeep)];
            var preTemp2Index = presNode[presNode.length - 2 - (preDeep - currentDeep)]; // 修改兄弟关系

            DomTree[currentIndex].preNode = preTempIndex;
            if (preTempIndex != null) DomTree[preTempIndex].nextNode = currentIndex; // 修改父子关系

            DomTree[currentIndex].parentNode = preTemp2Index;
            if (preTemp2Index != null) DomTree[preTemp2Index].childNodes.push(currentIndex); // 校对presNode

            for (var j = 0; j < preDeep - currentDeep; j++) {
              presNode.pop();
            }

            presNode[presNode.length - 1] = currentIndex;
          }

      preDeep = currentDeep;
    }

    return DomTree;
  }

  // 在浏览器中利用style标签插入样式
  function addStylesClient(styles, uniqueId) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = styles.join(''); // 如果需要包裹

    if (uniqueId) {
      style = style.replace(/( {0,}){/g, "{");
      style = style.replace(/( {0,}),/g, ",");
      var temp = ""; // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash

      var isSpecial = false,
          isContent = false,
          hadComplete = false;

      for (var i = 0; i < style.length; i++) {
        if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
          hadComplete = true;
          temp += "[" + uniqueId + "]";
        } else if (style[i] == '{' && !isSpecial) {
          isContent = true;
          if (!hadComplete) temp += "[" + uniqueId + "]";
        } else if (style[i] == '}' && !isSpecial) {
          isContent = false;
          hadComplete = false;
        } else if (style[i] == '/' && style[i + 1] == '*') {
          isSpecial = true;
        } else if (style[i] == '*' && style[i + 1] == '/') {
          isSpecial = false;
        } else if (style[i] == ',' && !isSpecial && !isContent) {
          if (!hadComplete) temp += "[" + uniqueId + "]";
          hadComplete = false;
        }

        temp += style[i];
      }

      style = temp;
    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);
  }

  /**
   * 组件
   */

  var index = 0;
  function Component (config) {
    var uniqueId = null; // 加载css

    if (isArray(config.styles)) {
      uniqueId = "nefbl-scoped-" + index++;
      addStylesClient(config.styles, uniqueId);
    }

    var template = xhtmlToJson("<nefbl-component>" + config.template + "</nefbl-component>");
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Component'; // 登记选择器

      target.prototype.__selector__ = config.selector; // 登记模板对象

      target.prototype.__template__ = template; // 记录唯一标识

      target.prototype.__uniqueId__ = uniqueId;
    };
  }

  /**
   * 指令
   */
  function Directive (config) {
    return function (target) {
      // 对象类型标记
      target.prototype.__type__ = 'Directive'; // 登记选择器

      target.prototype.__selector__ = config.selector;
    };
  }

  // 判断是否是合法的方法或数据key
  function isValidKey (key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
      throw new Error('The beginning of _ or $ is not allowed：' + key);
    }
  }

  function watcher (component, data, key, doback) {
    // 记录值
    var value = data.value;
    var getter_setter = {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        value = newValue; // 回调通知组件更新

        doback();
      }
    }; // setter和getter添加监听

    Object.defineProperty(data, 'value', getter_setter); // 组件实例新增属性

    component[key] = value;
    Object.defineProperty(component, key, getter_setter);
  }

  function proxy (component, data, key, doback) {
    var proxy = new Proxy(data.value, {
      get: function get(_target, _key) {
        return _target[_key];
      },
      set: function set(_target, _key, _value) {
        var flag = Reflect.set(_target, _key, _value); // 回调通知组件更新

        doback();
        return flag;
      }
    });
    data.value = proxy;
    component[key] = proxy;
  }

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
              expressArray.push(currentChar);
              next();
            }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
          var temp = "",
              beginTag = currentChar;
          next(); // 如果没有遇到结束标签
          // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
          // 后续如果希望支持，优化这里即可

          while (currentChar != beginTag) {
            if (i >= express.length) {
              // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
              throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);
            } // 继续拼接


            temp += currentChar;
            next();
          }

          expressArray.push(temp + "@string");
          next();
        } // 如果是数字
        else if (/\d/.test(currentChar)) {
            var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

            var temp = currentChar;
            next();

            while (i < express.length) {
              if (/\d/.test(currentChar)) {
                temp += currentChar;
                if (dotFlag == 'error') dotFlag = 'yes';
              } else if ('.' == currentChar && dotFlag == 'no') {
                temp += currentChar;
                dotFlag = 'error';
              } else {
                break;
              }

              next();
            } // 如果小数点后面没有数字，辅助添加一个0


            if (dotFlag == 'error') temp += "0";
            expressArray.push(+temp);
          } // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                "null": null,
                "true": true
              }[nextNValue(4)]);
              i += 3;
              next();
            } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                'false': false
              }[nextNValue(5)]);
              i += 4;
              next();
            } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                "undefined": undefined
              }[nextNValue(9)]);
              i += 8;
              next();
            } // 如果是空格
            else if ($RegExp.blankReg.test(currentChar)) {
                do {
                  next();
                } while ($RegExp.blankReg.test(currentChar) && i < express.length);
              } else {
                var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
                // 这是为了和[key]进行区分，例如：
                // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
                // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
                // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

                if (currentChar == '.') {
                  dot = true;
                  next();
                } // 如果是标志符

                /**
                 *  命名一个标识符时需要遵守如下的规则：
                 *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
                 *  2.标识符不能以数字开头
                 */
                // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
                // 也就是类似flag等局部变量


                if ($RegExp.identifier.test(currentChar)) {
                  var len = 1;

                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
                    len += 1;
                  }

                  if (dot) {
                    expressArray.push('[');
                    expressArray.push(nextNValue(len - 1) + '@string');
                    expressArray.push(']');
                  } else {
                    var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

                    var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                    expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }

                  i += len - 2;
                  next();
                } // 都不是，那就是错误
                else {
                    throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
                  }
              }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var j = 0; j < expressArray.length; j++) {
      if (["+", "-"].indexOf(expressArray[j]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
        j += 1;
      } else {
        expressArray[length++] = expressArray[j];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
            hadMore = true; // 计算

            var tempValue = evalValue(temp);
            var _value = newExpressArray[newExpressArray.length - 1][tempValue];
            newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

            flag = false;
          } else {
            if (flag) {
              temp.push(expressArray[i]);
            } else {
              newExpressArray.push(expressArray[i]);
            }
          }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
        path = doit3(newExpressArray);
      } // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          var tempArray = newExpressArray.slice(lastIndex + 1);
          tempArray.unshift(calcValue(target, tempPath, scope));
          path = [evalValue(tempArray)];
        }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  /**
   * express举例子：
   *
   * [00]  ["a"].b[c]
   * [01]  a
   * [02]  [0]['value-index'][index+1]
   *
   * 如果是getValue,express还可以包含运算符：
   *  + - * / %  数值运算符
   *  && || !    逻辑运算符
   *
   * [03]  flag+10
   * [04]  a.b[index+1]-10
   * [05]  (a+b)/10-c[d]
   * [06]  [((a+b)-c)*f]+d
   *
   * [07]  !flag
   * [08]  (a>0 && b<=1) || !flag
   * [09]  '(flag)' == "("+temp+")"
   * [10]  a>10?"flag1":"flag2"
   *
   */
  // 解析一段表达式

  var evalExpress = function evalExpress(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope); // 如果不是表达式

    if (path.length > 1) throw new Error("Illegal expression : " + express + "\nstep='evalExpress',path=" + path + ",expressArray=" + expressArray);
    return path[0];
  }; // 获取

  var getValue = function getValue(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
  }; // 设置

  var setValue = function setValue(target, express, value, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    var _target = target;

    for (var i = 0; i < path.length - 1; i++) {
      // 如果需要补充
      if (!(path[i] in _target)) _target[path[i]] = isArray$1(_target) ? [] : {}; // 拼接下一个

      _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
  };

  function toNode(tagname) {
    if (['svg', 'circle', 'path', 'rect', 'ellipse', 'line', 'polyline', 'polygon', 'text'].indexOf(tagname) > -1) {
      return document.createElementNS('http://www.w3.org/2000/svg', tagname);
    } else {
      return document.createElement(tagname);
    }
  }

  function mountComponent(target, Component, module) {
    var component = new Component();
    var hadWillUpdate = false;

    var observeFunction = function observeFunction() {
      if (!hadWillUpdate) {
        hadWillUpdate = true;
        setTimeout(function () {
          if (isFunction(component.$beforeUpdate)) component.$beforeUpdate(); // 触发指令

          var _iterator = _createForOfIteratorHelper(component.__directives),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var directiveInstance = _step.value;

              if (isFunction(directiveInstance.instance.$update)) {
                directiveInstance.instance.$update(directiveInstance.el, {
                  type: directiveInstance.type,
                  exp: directiveInstance.exp,
                  value: directiveInstance.exp ? evalExpress(component, directiveInstance.exp) : undefined,
                  target: component
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (isFunction(component.$updated)) component.$updated();
          hadWillUpdate = false;
        }, 0);
      }
    };

    if (isFunction(component.$setup)) {
      // 获取当前组件需要双向绑定的数据、方法等
      var instance = component.$setup();

      for (var key in instance) {
        isValidKey(key); // ref

        if (instance[key].type == 'ref') {
          watcher(component, instance[key], key, observeFunction);
        } // reactive
        else if (instance[key].type == 'reactive') {
            proxy(component, instance[key], key, observeFunction);
          } // 方法
          else if (isFunction(instance[key])) {
              component[key] = instance[key];
            }
      }
    } // 记录子组件


    component.__children = []; // 记录指令

    component.__directives = [];
    var templateObj = component.__template__;

    (function createElement(index, pEl) {
      var vnode = templateObj[index],
          el = null;

      if (vnode.type == 'tag') {
        // 如果是组件
        if (vnode.name in module.__component__) {
          // 编译子组件并登记
          component.__children.push(mountComponent(pEl, module.__component__[vnode.name], module));
        } // 否则就是普通的标签
        else {
            el = toNode(vnode.name);

            for (var attrKey in vnode.attrs) {
              var attrKeys = (attrKey + ":").split(':'); // 指令

              if (attrKeys[0] in module.__directive__) {
                (function () {
                  var directiveInstance = new module.__directive__[attrKeys[0]]();
                  var type = attrKeys[1];
                  var exp = vnode.attrs[attrKey];

                  if (isFunction(directiveInstance.$inserted)) {
                    setTimeout(function () {
                      directiveInstance.$inserted(el, {
                        type: type,
                        exp: exp,
                        value: exp ? evalExpress(component, exp) : undefined,
                        target: component
                      });
                    });
                  }

                  component.__directives.push({
                    instance: directiveInstance,
                    el: el,
                    type: type,
                    exp: exp
                  });
                })();
              } // 普通属性
              else {
                  el.setAttribute(attrKey, vnode.attrs[attrKey]);
                }
            }

            if (component.__uniqueId__ != null) {
              // 配置唯一标识
              el.setAttribute(component.__uniqueId__, "");
            } // 追加孩子


            var _iterator2 = _createForOfIteratorHelper(vnode.childNodes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subVnode = _step2.value;
                createElement(subVnode, el);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
      } else if (vnode.type == 'text') {
        el = document.createTextNode("");
        el.textContent = vnode.content.replace(/↵/g, '\n') // 特殊转义字符进行校对
        .replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&amp;/g, '&');
      }

      if (el != null) {
        // 追加到父亲结点
        pEl.appendChild(el);
      }
    })(0, target);

    if (isFunction(component.$mounted)) component.$mounted();
    return component;
  }

  function platform (options) {
    // 样式生效
    addStylesClient(options.styles || []); // 记录根组件

    var rootComponent = null;
    return {
      bootstrap: function bootstrap(Module) {
        var module = new Module(); // 在所有的指令和组件中登记所在模块

        var allList = _objectSpread2(_objectSpread2({}, module.__component__), module.__directive__);

        for (var key in allList) {
          allList[key].prototype._module = module;
        } // 通过启动组件，启动


        rootComponent = mountComponent(options.el, module.__bootstrapComponent__, module);
        return {
          // 根组件
          rootComponent: rootComponent,
          // 当前模块对象
          module: module
        };
      }
    };
  }

  function ref (data) {
    // 如果是定义的数据，不好监听，嵌套一层壳
    return {
      value: data,
      type: 'ref'
    };
  }

  function reactive (data) {
    // 如果是对象
    if (isObject(data)) {
      return {
        value: data,
        type: 'reactive'
      };
    } // 否则，还是用ref
    else {
        return ref(data);
      }
  }

  /**
   * 整理好对象并对外暴露调用接口
   */

  var Nefbl = {
    // 装饰器
    Module: Module,
    Component: Component,
    Directive: Directive,
    // 核心方法
    platform: platform,
    mountComponent: mountComponent,
    evalExpress: evalExpress,
    getValue: getValue,
    setValue: setValue,
    // 暴露的一些有用的方法
    ref: ref,
    reactive: reactive
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Nefbl;
  } else {
    window.Nefbl = Nefbl;
  }

}());


        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n */\n\nhtml {\n    /* 防止iPhone在坚屏转向横屏时放大文字 */\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    /* 统一行高 */\n    line-height: 1.15;\n}\n\nbutton,\ninput {\n    /* 兼容部分手机下border不显示问题 */\n    border: 1px solid #b2b2bd;\n}\n\narticle,\nfooter,\nheader,\nnav,\nsection {\n    /* 修正旧浏览器未定义的块级元素 */\n    display: block;\n}\n\ncanvas,\nsvg {\n    /* 修正旧浏览器未定义的行内块元素 */\n    display: inline-block;\n}\n\n* {\n    /* 统一不同浏览器盒子尺寸计算方法 */\n    box-sizing: border-box;\n}\n\n::-ms-clear,\n::-ms-reveal {\n    /* 去掉IE浏览器输入框叉叉和眼睛 */\n    display: none;\n}\n\nimg {\n    /* 针对火狐浏览器在img标签没有src时候的差异修复 */\n    display: inline-block;\n}\n\nhtml {\n    /* 设置默认字体为统一的安全字体 */\n    font-family: sans-serif;\n}\n\na {\n    /* 默认去掉下划线 */\n    text-decoration: none;\n}\n\nli {\n    /* 去掉前置索引 */\n    list-style-type: none;\n}\n\nul,\nol,\nli,\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    /* 去掉不喜欢的间距 */\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    /* 去掉不喜欢的间距，针对火狐浏览器等 */\n    margin-block-end: 0;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    /* 修改IE和其它浏览器不一致问题 */\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    /* 去掉默认的8px */\n    margin: 0;\n}\n\ntable {\n    /* 设置默认表格边框合并为一个单一的边框 */\n    border-collapse: collapse;\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('16');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('7');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('8');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('7');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('15');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('9');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('6');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/app.module.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Module=__etcpack__scope_args__.Module;
 // 组件

__etcpack__scope_args__=window.__etcpack__getBundle('18');
var AppComponent =__etcpack__scope_args__.default;
 // 指令

__etcpack__scope_args__=window.__etcpack__getBundle('29');
var uiBind =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var uiModel =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('31');
var uiOn =__etcpack__scope_args__.default;


var _class = (_dec = Module({
  declarations: [AppComponent, uiBind, uiModel, uiOn],
  imports: [],
  exports: [],
  bootstrap: AppComponent
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;
var ref=__etcpack__scope_args__.ref;

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var image3D =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var viewHandler =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('23');
var vertexShader =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('24');
var fragmentShader =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('25');
var doResize =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('26');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('27');
var template =__etcpack__scope_args__.default;
 // 辅助网格数据

__etcpack__scope_args__=window.__etcpack__getBundle('28');
var boxModel =__etcpack__scope_args__.default;

var boxModelData = boxModel();
var resizeFlag = 0;

var _class = (_dec = Component({
  selector: "app-root",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "width", void 0);

    _defineProperty(this, "height", void 0);
  }

  _createClass(_class2, [{
    key: "$setup",
    value: function $setup() {
      return {
        width: ref(0),
        height: ref(0)
      };
    }
  }, {
    key: "$mounted",
    value: function $mounted() {
      var _this = this;

      var el = document.getElementById('canvas');
      doResize(el, function () {
        _this.width = el.clientWidth;
        _this.height = el.clientHeight;
        resizeFlag += 1;
        setTimeout(function () {
          _this.doit(resizeFlag);
        });
      });
    }
  }, {
    key: "resetEditor",
    value: function resetEditor() {
      alert('【新建】功能未完成，开发中，敬请期待！');
    }
  }, {
    key: "inputLocalFile",
    value: function inputLocalFile() {
      alert('【本地选择】功能未完成，开发中，敬请期待！');
    }
  }, {
    key: "inputXhrFile",
    value: function inputXhrFile() {
      alert('【XHR文件请求】功能未完成，开发中，敬请期待！');
    }
  }, {
    key: "exportFile",
    value: function exportFile() {
      alert('【导出】功能未完成，开发中，敬请期待！');
    }
  }, {
    key: "doit",
    value: function doit(_resizeFlag) {
      // 创建3D对象并配置好画布和着色器
      var image3d = new image3D(document.getElementsByTagName('canvas')[0], {
        "vertex-shader": vertexShader,
        "fragment-shader": fragmentShader,
        depth: true
      });
      var painter = image3d.Painter();
      var buffer = image3d.Buffer();
      var camera = image3d.Camera({
        size: 4,
        proof: true
      }).rotateBody(-0.4, 1, 0, 0);

      var doDraw = function doDraw() {
        if (_resizeFlag != resizeFlag) return;
        image3d.setUniformMatrix("u_matrix", camera.value());
        buffer.write(new Float32Array(boxModelData)).use('a_position', 3, 6, 0).use('a_color', 3, 6, 3);
        painter.drawLine(0, boxModelData.length / 6);
      };

      doDraw(); // 每次调整的弧度

      var deg = 0.1;
      var rateScale = 1;
      viewHandler(function (data) {
        /*
         * 修改相机
         */
        // 键盘控制
        if (data.type == 'lookUp') {
          camera.rotateBody(deg, 1, 0, 0);
        } else if (data.type == 'lookDown') {
          camera.rotateBody(deg, -1, 0, 0);
        } else if (data.type == 'lookLeft') {
          camera.rotateBody(deg, 0, 1, 0);
        } else if (data.type == 'lookRight') {
          camera.rotateBody(deg, 0, -1, 0);
        } // 鼠标拖动或手指控制
        else if (data.type == 'rotate') {
          camera.rotateBody.apply(camera, [deg * data.dist * 0.07].concat(_toConsumableArray(data.normal)));
        } // 滚轮控制
        else if (data.type == 'scale') {
          // 设置一个缩放上界
          if (data.kind == 'enlarge' && rateScale >= 1.5) {
            return;
          }

          var baseTimes = 0.899;
          var times = data.kind == 'enlarge' ? 2 - baseTimes : baseTimes;
          rateScale *= times;
          camera.scaleBody(times, times, times, 0, 0, 0);
        } // 重新绘制


        doDraw();
      });
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/image3d/build/image3D.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

        var module={
            exports:{}
        };
        var exports=module.exports;

        /*!
* image3D - 🍊 使用webGL绘制三维图片。Drawing three-dimensional images using webGL.
* git+https://github.com/hai2007/image3D.git
*
* author 你好2007
*
* version 3.3.1
*
* build Thu Apr 11 2019
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
* Date:Sun Jan 09 2022 16:12:35 GMT+0800 (GMT+08:00)
*/

"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};(function(){"use strict";var u=function r(t,n,e){var i=t.createShader(n);if(i==null)throw new Error("Unable to create shader!");t.shaderSource(i,e);t.compileShader(i);if(!t.getShaderParameter(i,t.COMPILE_STATUS))throw new Error("Failed to compile shader:"+t.getShaderInfoLog(i));return i};var o=function r(t,n,e){var i=u(t,t.VERTEX_SHADER,n),o=u(t,t.FRAGMENT_SHADER,e);var a=t.createProgram();t.attachShader(a,i);t.attachShader(a,o);t.linkProgram(a);if(!t.getProgramParameter(a,t.LINK_STATUS))throw new Error("Failed to link program: "+t.getProgramInfoLog(a));t.useProgram(a);return a};var a=function r(t,n){var e=t.createBuffer(),i=n?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bindBuffer(i,e);return e};var l=function r(t,n,e,i){var o=i?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bufferData(o,n,e)};var v=function r(t,n,e,i,o,a,u){t.vertexAttribPointer(n,e,i,u||false,o||0,a||0);t.enableVertexAttribArray(n)};var c=function r(t,n,e,i){var o=t.createTexture();if(i=="2d"){e=e||0;t.activeTexture(t["TEXTURE"+e])}t.bindTexture(n,o);return o};var m=function r(t,n,e,i,o,a){i={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[i]||t.RGBA;t.texImage2D(n,e||0,i,i,{}[o]||t.UNSIGNED_BYTE,a)};var g=function r(t,n,e,i,o,a,u,f,c){i={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[i]||t.RGBA;e=e||0;o={}[o]||t.UNSIGNED_BYTE;var s=[t.TEXTURE_CUBE_MAP_POSITIVE_X,t.TEXTURE_CUBE_MAP_NEGATIVE_X,t.TEXTURE_CUBE_MAP_POSITIVE_Y,t.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.TEXTURE_CUBE_MAP_POSITIVE_Z,t.TEXTURE_CUBE_MAP_NEGATIVE_Z],l=void 0,v=void 0;for(l=0;l<s.length;l++){v=s[l];t.texImage2D(v,e,i,u,f,0,i,o,null);t.bindTexture(n,c);t.texImage2D(v,e,i,i,o,a[l])}t.generateMipmap(n)};function f(u){return{setAttribute1f:function r(t,n){var e=u.getAttribLocation(u.program,t);u.vertexAttrib1f(e,n)},setAttribute2f:function r(t,n,e){var i=u.getAttribLocation(u.program,t);u.vertexAttrib2f(i,n,e)},setAttribute3f:function r(t,n,e,i){var o=u.getAttribLocation(u.program,t);u.vertexAttrib3f(o,n,e,i)},setAttribute4f:function r(t,n,e,i,o){var a=u.getAttribLocation(u.program,t);u.vertexAttrib4f(a,n,e,i,o)},setAttribute1i:function r(t,n){var e=u.getAttribLocation(u.program,t);u.vertexAttrib1i(e,n)},setAttribute2i:function r(t,n,e){var i=u.getAttribLocation(u.program,t);u.vertexAttrib2i(i,n,e)},setAttribute3i:function r(t,n,e,i){var o=u.getAttribLocation(u.program,t);u.vertexAttrib3i(o,n,e,i)},setAttribute4i:function r(t,n,e,i,o){var a=u.getAttribLocation(u.program,t);u.vertexAttrib4i(a,n,e,i,o)},setUniform1f:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniform1f(e,n)},setUniform2f:function r(t,n,e){var i=u.getUniformLocation(u.program,t);u.uniform2f(i,n,e)},setUniform3f:function r(t,n,e,i){var o=u.getUniformLocation(u.program,t);u.uniform3f(o,n,e,i)},setUniform4f:function r(t,n,e,i,o){var a=u.getUniformLocation(u.program,t);u.uniform4f(a,n,e,i,o)},setUniform1i:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniform1i(e,n)},setUniform2i:function r(t,n,e){var i=u.getUniformLocation(u.program,t);u.uniform2i(i,n,e)},setUniform3i:function r(t,n,e,i){var o=u.getUniformLocation(u.program,t);u.uniform3i(o,n,e,i)},setUniform4i:function r(t,n,e,i,o){var a=u.getUniformLocation(u.program,t);u.uniform4i(a,n,e,i,o)},setUniformMatrix2fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix2fv(e,false,n)},setUniformMatrix3fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix3fv(e,false,n)},setUniformMatrix4fv:function r(t,n){var e=u.getUniformLocation(u.program,t);u.uniformMatrix4fv(e,false,n)}}}function E(i){var o={byte:i.UNSIGNED_BYTE,short:i.UNSIGNED_SHORT};return{openDeep:function r(){i.enable(i.DEPTH_TEST);return this},points:function r(t,n,e){if(e){i.drawElements(i.POINTS,n,o[e],t)}else{i.drawArrays(i.POINTS,t,n)}return this},lines:function r(t,n,e){if(e){i.drawElements(i.LINES,n,o[e],t)}else{i.drawArrays(i.LINES,t,n)}return this},stripLines:function r(t,n,e){if(e){i.drawElements(i.LINE_STRIP,n,o[e],t)}else{i.drawArrays(i.LINE_STRIP,t,n)}return this},loopLines:function r(t,n,e){if(e){i.drawElements(i.LINE_LOOP,n,o[e],t)}else{i.drawArrays(i.LINE_LOOP,t,n)}return this},triangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLES,n,o[e],t)}else{i.drawArrays(i.TRIANGLES,t,n)}return this},stripTriangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLE_STRIP,n,o[e],t)}else{i.drawArrays(i.TRIANGLE_STRIP,t,n)}return this},fanTriangles:function r(t,n,e){if(e){i.drawElements(i.TRIANGLE_FAN,n,o[e],t)}else{i.drawArrays(i.TRIANGLE_FAN,t,n)}return this}}}var _=function r(t,n){var e=["webgl","experimental-webgl","webkit-3d","moz-webgl"],i=null,o=void 0;for(o=0;o<e.length;o++){try{i=t.getContext(e[o],n)}catch(r){}if(i)break}if(!i)throw new Error("Non canvas or browser does not support webgl.");return i};function s(r,t){var s=_(r,t),e={_gl_:s,painter:function r(){return E(s)},shader:function r(t,n){s.program=o(s,t,n);return e},buffer:function r(e){a(s,e);var f=void 0,c={write:function r(t,n){n=n||s.STATIC_DRAW;l(s,t,n,e);f=t;return c},use:function r(t,n,e,i,o,a){var u=f.BYTES_PER_ELEMENT;if(typeof t=="string")t=s.getAttribLocation(s.program,t);e=e||0;i=i||0;o=o||s.FLOAT;v(s,t,n,o,e*u,i*u,a);return c}};return c},texture:function u(r,t){var f={"2d":s.TEXTURE_2D,cube:s.TEXTURE_CUBE_MAP}[r];var u=c(s,f,t,r);s.texParameteri(f,s.TEXTURE_MIN_FILTER,s.NEAREST);s.texParameteri(f,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE);s.texParameteri(f,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);var o={useImage:function r(t,n,e,i){m(s,f,n,e,i,t);return o},useCube:function r(t,n,e,i,o,a){g(s,f,i,o,a,t,n,e,u)}};return o}};var n=f(s);for(var i in n){e[i]=n[i]}s.viewport(0,0,s.canvas.width,s.canvas.height);s.depthFunc(s.LEQUAL);return e}function p(r,t){for(var n in t){try{r[n]=t[n]}catch(r){throw new Error("Illegal property key : "+n)}}return r}function d(n,r){return function(t){return new function r(){var i=this;var o=n.buffer(t);this.write=function(r){o.write(r);return i};if(!t){this.use=function(r,t,n,e){o.use(r,t,n,e);return i}}}}}function A(r,t,n,e){e=e||0;var i=Math.sqrt(t*t+n*n+e*e);return[1,0,0,0,0,1,0,0,0,0,1,0,t*r/i,n*r/i,e*r/i,1]}function b(r){var t=Math.sin(r),n=Math.cos(r);return[n,t,0,0,-t,n,0,0,0,0,1,0,0,0,0,1]}function h(r,t,n,e,i,o){e=e||0;i=i||0;o=o||0;return[r,0,0,0,0,t,0,0,0,0,n,0,e-e*r,i-i*t,o-o*n,1]}function T(r,t,n,e,i,o){if(typeof r==="number"&&typeof t==="number"){if(typeof n!=="number"){n=0;e=r;i=t;o=1}else if(typeof e!=="number"||typeof i!=="number"||typeof o!=="number"){e=r;i=t;o=n;r=0;t=0;n=0}if(r==e&&t==i&&n==o)throw new Error("It's not a legitimate ray!");var a=Math.sqrt((e-r)*(e-r)+(i-t)*(i-t)),u=a!=0?(i-t)/a:1,f=a!=0?(e-r)/a:0,c=(e-r)*f+(i-t)*u,s=o-n,l=Math.sqrt(c*c+s*s),v=l!=0?s/l:1,m=l!=0?c/l:0;return[[u,v*f,f*m,0,-f,u*v,u*m,0,0,-m,v,0,t*f-r*u,n*m-r*f*v-t*u*v,-r*f*m-t*u*m-n*v,1],[u,-f,0,0,v*f,v*u,-m,0,f*m,u*m,v,0,r,t,n,1]]}else{throw new Error("a1 and b1 is required!")}}var y=function r(t,n){var e=[];for(var i=0;i<4;i++){for(var o=0;o<n.length/4;o++){e[o*4+i]=t[i]*n[o*4]+t[i+4]*n[o*4+1]+t[i+8]*n[o*4+2]+t[i+12]*n[o*4+3]}}return e};function w(r){var c=r||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var s={move:function r(t,n,e,i){c=y(A(t,n,e,i),c);return s},rotate:function r(t,n,e,i,o,a,u){var f=T(n,e,i,o,a,u);c=y(y(y(f[1],b(t)),f[0]),c);return s},scale:function r(t,n,e,i,o,a){c=y(h(t,n,e,i,o,a),c);return s},multiply:function r(t,n){c=n?y(c,t):y(t,c);return s},use:function r(t,n,e,i){e=e||0;i=i||1;var o=y(c,[t,n,e,i]);o[0]=+o[0].toFixed(7);o[1]=+o[1].toFixed(7);o[2]=+o[2].toFixed(7);o[3]=+o[3].toFixed(7);return o},value:function r(){return c}};return s}var L=function r(t){return Array.isArray(t)};function U(i,r){return function(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new function r(){var u=this;var e=i._gl_.canvas.clientWidth/i._gl_.canvas.clientHeight;if(L(n.size)){n.size=n.size[0];console.warn('"options.size" should be a number. The writing of array is out of date: https://hai2007.gitee.io/image3d/index.html#/api?fixed=camera-set')}var f=w();var t=n.proof?-1:1;f.multiply([1/n.size,0,0,0,0,1/n.size,0,0,0,0,t/n.size,0,0,0,0,1]);this.setProportion=function(r){e=r;return u};this.rotateEye=function(r,t,n,e,i,o,a){f.rotate(-r,t,n,e,i,o,a);return u};this.moveEye=function(r,t,n,e){f.move(-r,t,n,e);return u};this.rotateBody=function(r,t,n,e,i,o,a){f.rotate(r,t,n,e,i,o,a);return u};this.moveBody=function(r,t,n,e){f.move(r,t,n,e);return u};this.scaleBody=function(r,t,n,e,i,o){f.scale(r,t,n,e,i,o);return u};this.value=function(){var r=1;var t=1;if(e>1){t=e}else{r=1/e}var n=Math.max(r,t);return w(f.value()).multiply([r,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1]).value()}}}}function e(n,e){e.drawPoint=function(r,t){n.points(r,t);return e};e.drawLine=function(r,t){n.lines(r,t);return e};e.drawStripLine=function(r,t){n.stripLines(r,t);return e};e.drawLoopLine=function(r,t){n.loopLines(r,t);return e};e.drawTriangle=function(r,t){n.triangles(r,t);return e};e.drawStripTriangle=function(r,t){n.stripTriangles(r,t);return e};e.drawFanTriangle=function(r,t){n.fanTriangles(r,t);return e}}function i(e,i){i.elemPoint=function(r,t,n){n=n||"byte";e.points(r,t,n);return i};i.elemLine=function(r,t,n){n=n||"byte";e.lines(r,t,n);return i};i.elemStripLine=function(r,t,n){n=n||"byte";e.stripLines(r,t,n);return i};i.elemLoopLine=function(r,t,n){n=n||"byte";e.loopLines(r,t,n);return i};i.elemTriangle=function(r,t,n){n=n||"byte";e.triangles(r,t,n);return i};i.elemStripTriangle=function(r,t,n){n=n||"byte";e.stripTriangles(r,t,n);return i};i.elemFanTriangle=function(r,t,n){n=n||"byte";e.fanTriangles(r,t,n);return i}}function R(r,t){var n=r.painter();if(t.depth){n.openDeep()}return function(){return new function r(){e(n,this);i(n,this)}}}function x(i,r){return function(e){return new function r(){var t=this;var n=i.texture("2d",e);this.write=function(r){n.useImage(r);return t}}}}function I(t,r){return function(f,c){return new function r(){var a=this;var u=t.texture("cube");this.write=function(r,t,n,e,i,o){u.useCube([r,t,n,e,i,o],f,c);return a}}}}var t={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};var n={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function S(r){return{type_default:t,type_camera:n}["type_"+r]}var r=function r(t,n){var e=p({depth:false},n||{});var o=s(t);var i=e["vertex-shader"],a=e["fragment-shader"];if(!i||!a){var u=S(e.shader||"default");i=u.vs;a=u.fs}o.shader(i,a);r.fn=r.prototype;r.fn.Buffer=d(o);r.fn.Camera=U(o);r.fn.Painter=R(o,e);r.fn.Texture2D=x(o);r.fn.TextureCube=I(o);r.fn.setAttributeFloat=function(r,t,n,e,i){o["setAttribute"+(arguments.length-1)+"f"](r,t,n,e,i);return this};r.fn.setAttributeInt=function(r,t,n,e,i){o["setAttribute"+(arguments.length-1)+"i"](r,t,n,e,i);return this};r.fn.setUniformFloat=function(r,t,n,e,i){o["setUniform"+(arguments.length-1)+"f"](r,t,n,e,i);return this};r.fn.setUniformInt=function(r,t,n,e,i){o["setUniform"+(arguments.length-1)+"i"](r,t,n,e,i);return this};r.fn.setUniformMatrix=function(r,t){var n={4:2,9:3,16:4}[t.length];o["setUniformMatrix"+n+"fv"](r,t);return this}};r.core=s;if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){module.exports=r}else{var P=window.image3D;r.noConflict=function(){if(window.image3D===r){window.image3D=P}return r};window.image3D=r}})();

        __etcpack__scope_bundle__.default= module.exports;

        
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/viewHandler.js
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 屏幕3D控制信息捕获
 * https://github.com/hai2007/browser.js/blob/master/viewHandler.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var xhtml =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('22');
var getKeyString =__etcpack__scope_args__.default;


__etcpack__scope_bundle__.default= function (callback) {

    var el = document.getElementsByTagName('body')[0];

    // 键盘控制
    xhtml.bind(el, 'keydown', function (event) {
        var keyCode = getKeyString(event);

        // 视角向上
        if (keyCode == 'up') {
            callback({
                type: "lookUp"
            });
        }

        // 视角向下
        else if (keyCode == 'down') {
            callback({
                type: "lookDown"
            });
        }

        // 视角向左
        else if (keyCode == 'left') {
            callback({
                type: "lookLeft"
            });
        }

        // 视角向右
        else if (keyCode == 'right') {
            callback({
                type: "lookRight"
            });
        }

    });

    // 鼠标控制
    var mouseP = null;
    var doMove = function (event) {
        if (mouseP == null) return;

        var tempMouseP = xhtml.mousePosition(el, event);

        // 先求解出轨迹向量
        var normal = [tempMouseP.x - mouseP.x, mouseP.y - tempMouseP.y];

        // 方向向量旋转90deg得到选择向量
        var rotateNormal = [
            normal[1],
            normal[0] * -1,
            0
        ]

        // 非法射线忽略
        if (rotateNormal[0] == 0 && rotateNormal[1] == 0) return;

        callback({
            type: "rotate",
            normal: rotateNormal,
            dist: Math.abs(tempMouseP.x - mouseP.x) + Math.abs(tempMouseP.y - mouseP.y)
        });

        mouseP = tempMouseP;
    };

    xhtml.bind(el, 'mousedown', function (event) {
        mouseP = xhtml.mousePosition(el, event);
    });
    xhtml.bind(el, 'mouseup', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'mousemove', function (event) {
        doMove(event);
    });

    // 手指控制
    xhtml.bind(el, 'touchend', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'touchstart', function (event) {
        mouseP = xhtml.mousePosition(el, event.touches[0]);
    });
    xhtml.bind(el, 'touchmove', function (event) {
        doMove(event.touches[0]);
    });

    let doScale = function (value) {
        if (value == 0) return;

        callback({
            type: "scale",
            kind: value < 0 ? "reduce" : "enlarge",
            rate: Math.abs(value),
        });
    };

    // 滚轮控制
    xhtml.bind(el, 'mousewheel', function (event) {
        doScale(event.wheelDelta);
    });

    if (window.addEventListener) {

        // 针对火狐浏览器
        window.addEventListener('DOMMouseScroll', function (event) {
            doScale(-1 * event.detail);
        }, false);
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/xhtml.js
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 提供常用的DOM操作方法
 * https://github.com/hai2007/browser.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

// 命名空间路径
var namespace = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

/**
 * 结点操作补充
 */

__etcpack__scope_bundle__.default= {

    // 阻止冒泡
    "stopPropagation": function (event) {
        event = event || window.event;
        if (event.stopPropagation) { //这是其他非IE浏览器
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    // 阻止默认事件
    "preventDefault": function (event) {
        event = event || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 判断是否是结点
    "isNode": function (param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    },

    // 绑定事件
    "bind": function (dom, eventType, callback) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.bind(dom[i], eventType, callback);
            }
            return;
        }

        if (window.attachEvent)
            dom.attachEvent("on" + eventType, callback);
        else
            dom.addEventListener(eventType, callback, false);
    },
    // 去掉绑定事件
    "unbind": function (dom, eventType, handler) {

        if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
            for (var i = 0; i < dom.length; i++) {
                this.unbind(dom[i], eventType, handler);
            }
            return;
        }

        if (window.detachEvent)
            dom.detachEvent('on' + eventType, handler);
        else
            dom.removeEventListener(eventType, handler, false);

    },

    // 在当前上下文context上查找结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "find": function (context, selectFun, tagName) {
        if (!this.isNode(context)) return [];
        var nodes = context.getElementsByTagName(tagName || '*');
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 寻找当前结点的孩子结点
    // selectFun可选，返回boolean用以判断当前面对的结点是否保留
    "children": function (dom, selectFun) {
        var nodes = dom.childNodes;
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                result.push(nodes[i]);
        }
        return result;
    },

    // 判断结点是否有指定class
    // clazzs可以是字符串或数组字符串
    // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
    "hasClass": function (dom, clazzs, notStrict) {
        if (clazzs.constructor !== Array) clazzs = [clazzs];

        var class_str = " " + (dom.getAttribute('class') || "") + " ";
        for (var i = 0; i < clazzs.length; i++) {
            if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                if (notStrict) return true;
            } else {
                if (!notStrict) return false;
            }
        }
        return true;
    },

    // 删除指定class
    "removeClass": function (dom, clazz) {
        var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
        var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
        dom.setAttribute('class', newClazz.trim());
    },

    // 添加指定class
    "addClass": function (dom, clazz) {
        if (this.hasClass(dom, clazz)) return;
        var oldClazz = dom.getAttribute('class') || "";
        dom.setAttribute('class', oldClazz + " " + clazz);
    },

    // 字符串变成结点
    // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
    "toNode": function (template, isSvg) {
        var frame;

        // html和svg上下文不一样
        if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
        else {

            var frameTagName = 'div';

            // 大部分的标签可以直接使用div作为容器
            // 部分特殊的需要特殊的容器标签

            if (/^<tr[> ]/.test(template)) {

                frameTagName = "tbody";

            } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                frameTagName = "tr";

            } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                frameTagName = "table";

            }

            frame = document.createElement(frameTagName);
        }

        // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
        frame.innerHTML = template;

        var childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (this.isNode(childNodes[i])) return childNodes[i];
        }
    },

    // 主动触发事件
    "trigger": function (dom, eventType) {

        //创建event的对象实例。
        if (document.createEventObject) {
            // IE浏览器支持fireEvent方法
            dom.fireEvent('on' + eventType, document.createEventObject());
        }

        // 其他标准浏览器使用dispatchEvent方法
        else {
            var _event = document.createEvent('HTMLEvents');
            // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
            _event.initEvent(eventType, true, false);
            dom.dispatchEvent(_event);
        }

    },

    // 获取样式
    "getStyle": function (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    },

    // 获取元素位置
    "offsetPosition": function (dom) {
        var left = 0;
        var top = 0;
        top = dom.offsetTop;
        left = dom.offsetLeft;
        dom = dom.offsetParent;
        while (dom) {
            top += dom.offsetTop;
            left += dom.offsetLeft;
            dom = dom.offsetParent;
        }
        return {
            "left": left,
            "top": top
        };
    },

    // 获取鼠标相对元素位置
    "mousePosition": function (dom, event) {
        var bounding = dom.getBoundingClientRect();
        if (!event || !event.clientX)
            throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    },

    // 删除结点
    "remove": function (dom) {
        dom.parentNode.removeChild(dom);
    },

    // 设置多个样式
    "setStyles": function (dom, styles) {
        for (var key in styles)
            dom.style[key] = styles[key];
    },

    // 获取元素大小
    "size": function (dom, type) {
        var elemHeight, elemWidth;
        if (type == 'content') { //内容
            elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
            elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
        } else if (type == 'padding') { //内容+内边距
            elemWidth = dom.clientWidth;
            elemHeight = dom.clientHeight;
        } else if (type == 'border') { //内容+内边距+边框
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        } else if (type == 'scroll') { //滚动的宽（不包括border）
            elemWidth = dom.scrollWidth;
            elemHeight = dom.scrollHeight;
        } else {
            elemWidth = dom.offsetWidth;
            elemHeight = dom.offsetHeight;
        }
        return {
            width: elemWidth,
            height: elemHeight
        };
    },

    // 在被选元素内部的结尾插入内容
    "append": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.appendChild(node);
        return node;
    },

    // 在被选元素内部的开头插入内容
    "prepend": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.insertBefore(node, el.childNodes[0]);
        return node;
    },

    // 在被选元素之后插入内容
    "after": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el.nextSibling);
        return node;
    },

    // 在被选元素之前插入内容
    "before": function (el, template) {
        var node = this.isNode(template) ? template : this.toNode(template);
        el.parentNode.insertBefore(node, el);
        return node;
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/browser/getKeyString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * 🌐 - 获取键盘此时按下的键的组合结果
 * https://github.com/hai2007/browser.js/blob/master/getKeyString.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */
// 字典表
var dictionary = {

    // 数字
    48: [0, ')'], 49: [1, '!'], 50: [2, '@'], 51: [3, '#'], 52: [4, '$'], 53: [5, '%'], 54: [6, '^'], 55: [7, '&'], 56: [8, '*'], 57: [9, '('],
    96: [0, 0], 97: 1, 98: 2, 99: 3, 100: 4, 101: 5, 102: 6, 103: 7, 104: 8, 105: 9,
    106: "*", 107: "+", 109: "-", 110: ".", 111: "/",

    // 字母
    65: ["a", "A"], 66: ["b", "B"], 67: ["c", "C"], 68: ["d", "D"], 69: ["e", "E"], 70: ["f", "F"], 71: ["g", "G"],
    72: ["h", "H"], 73: ["i", "I"], 74: ["j", "J"], 75: ["k", "K"], 76: ["l", "L"], 77: ["m", "M"], 78: ["n", "N"],
    79: ["o", "O"], 80: ["p", "P"], 81: ["q", "Q"], 82: ["r", "R"], 83: ["s", "S"], 84: ["t", "T"],
    85: ["u", "U"], 86: ["v", "V"], 87: ["w", "W"], 88: ["x", "X"], 89: ["y", "Y"], 90: ["z", "Z"],

    // 方向
    37: "left", 38: "up", 39: "right", 40: "down",
    33: "page up", 34: "page down", 35: "end", 36: "home",

    // 控制键
    16: "shift", 17: "ctrl", 18: "alt", 91: "command", 92: "command", 93: "command", 9: "tab", 20: "caps lock", 32: "spacebar", 8: "backspace", 13: "enter", 27: "esc",
    46: "delete", 45: "insert", 144: "number lock", 145: "scroll lock", 12: "clear",
    19: "pause",

    // 功能键
    112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12",

    // 余下键
    189: ["-", "_"], 187: ["=", "+"], 219: ["[", "{"], 221: ["]", "}"], 220: ["\\", "|"], 186: [";", ":"], 222: ["'", '"'], 188: [",", "<"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"]

};

// 非独立键字典
var help_key = ["shift", "ctrl", "alt"];

/**
 * 键盘按键
 * 返回键盘此时按下的键的组合结果
 */
__etcpack__scope_bundle__.default= function (event) {
    event = event || window.event;

    var keycode = event.keyCode || event.which;
    var key = dictionary[keycode] || keycode;
    if (!key) return;
    if (key.constructor !== Array) key = [key, key];

    var _key=key[0];

    var shift = event.shiftKey ? "shift+" : "",
        alt = event.altKey ? "alt+" : "",
        ctrl = event.ctrlKey ? "ctrl+" : "";

    var resultKey = "", preKey = ctrl + shift + alt;

    if (help_key.indexOf(key[0]) >= 0) {
        key[0] = key[1] = "";
    }

    // 判断是否按下了caps lock
    var lockPress = event.code == "Key" + event.key && !shift;

    // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写
    resultKey = (preKey + ((preKey == '' && lockPress) ? key[1] : key[0]));

    if (key[0] == "") {
        resultKey = resultKey.replace(/\+$/, '');
    }

    return resultKey==''?_key:resultKey;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/shader-vertex.c
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "attribute vec4 a_position;\nattribute vec4 a_color;\n\nuniform mat4 u_matrix;\n\nvarying vec4 v_color;\n\nvoid main()\n{\n   vec4 temp=u_matrix * a_position;\n\n    // 表示眼睛距离vec4(0.0,0.0,1.0)的距离\n    float dist=2.0;\n\n    // 使用投影直接计算\n    // 此处要注意z轴承显示和实际的方向\n    gl_Position=vec4((dist+1.0)*temp.x/(dist+temp.z),(dist+1.0)*temp.y/(dist+temp.z),temp.z,1.0);\n\n    v_color = a_color;\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/shader-fragment.c
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main()\n{\n    gl_FragColor = v_color;\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/tool/ResizeObserver.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _support_ = true;
__etcpack__scope_bundle__.default= function (el, doback) {
  var observer = null;

  try {
    var _hadWilldo_ = false;
    var _hadNouse_ = false;
    observer = new ResizeObserver(function () {
      // 如果前置任务都完成了
      if (!_hadWilldo_) {
        _hadWilldo_ = true; // 既然前置任务已经没有了，那么就可以更新了？
        // 不是的，可能非常短的时间里，后续有改变
        // 因此延迟一点点来看看后续有没有改变
        // 如果改变了，就再延迟看看

        var interval = window.setInterval(function () {
          // 判断当前是否可以立刻更新
          if (!_hadNouse_) {
            window.clearInterval(interval);
            _hadWilldo_ = false;
            doback();
          }

          _hadNouse_ = false;
        }, 100);
      } else {
        _hadNouse_ = true;
      }
    });
    observer.observe(el);
  } catch (e) {
    // 如果浏览器不支持此接口
    if (_support_) {
      console.error('ResizeObserver undefined!'); // 不支持的话，提示一次就可以了

      _support_ = false;
    }
  }

  return function () {
    if (observer) {
      // 解除对画布大小改变的监听
      observer.disconnect();
    }
  };
}
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .model-editor{\n\nbackground-color: #eff2f2;\n\nwidth: 100vw;\n\nheight: 100vh;\n\n}\n\n .model-editor>div.menu{\n\nborder-bottom: 1px solid #cccccc;\n\nheight: 30px;\n\nheight: 30px;\n\nline-height: 30px;\n\n}\n\n .model-editor>div.menu>.logo{\n\nbackground-image: url('./image/logo-48.png');\n\npadding-left: 30px;\n\npadding-right: 10px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nbackground-size: auto 70%;\n\nbackground-repeat: no-repeat;\n\nbackground-position: 5px center;\n\nfont-size: 12px;\n\ncursor: pointer;\n\ncolor: rgb(0, 0, 0);\n\nfont-weight: 800;\n\n}\n\n .model-editor>div.menu>.logo:hover{\n\ntext-decoration: underline;\n\n}\n\n .model-editor>div.menu>.logo{\n\nborder-right:1px solid #cccccc;\n\n}\n\n .model-editor>div.menu>span{\n\nmargin-left: 20px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nfont-size: 12px;\n\ncursor: pointer;\n\nwhite-space: nowrap;\n\n}\n\n .model-editor>div.menu>span:hover{\n\ntext-decoration: underline;\n\nfont-weight: 800;\n\n}\n\n .model-editor>div.menu>span.more{\n\nposition: relative;\n\npadding-right: 10px;\n\n}\n\n .model-editor>div.menu>span.more:hover>div{\n\ndisplay: block;\n\n}\n\n .model-editor>div.menu>span.more::after{\n\nposition: absolute;\n\ntop: 13px;\n\nright: -3px;\n\nwidth: 0;\n\nheight: 0;\n\nborder-left: 4px solid transparent;\n\nborder-right: 4px solid transparent;\n\nborder-top: 5px solid #4f5959;\n\ncontent: \" \";\n\n}\n\n .model-editor>div.menu>span.more>div{\n\nposition: absolute;\n\nbackground-color: white;\n\nbox-shadow: 0 0 7px 0px #cccccc;\n\npadding: 5px 0;\n\nline-height: 1.8em;\n\ndisplay: none;\n\n}\n\n .model-editor>div.menu>span.more>div>span{\n\ndisplay: block;\n\npadding: 0 10px;\n\nfont-weight: 400;\n\n}\n\n .model-editor>div.menu>span.more>div>span:hover{\n\ntext-decoration: underline;\n\n}\n\n .model-editor>div.menu>span.more>div>span:not(:last-child){\n\nborder-bottom: 1px solid #cccccc;\n\n}\n\n .model-editor>div.content{\n\nwidth: 100vw;\n\nheight: calc(100vh - 30px);\n\noverflow: hidden;\n\ntext-align: center;\n\nbackground-color: #9fa2a3;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"model-editor\">\n    <div class=\"menu\">\n        <a class=\"logo\" target=\"_blank\" href='https://github.com/hai2007/model-editor'>\n            Model Editor\n        </a>\n        <span ui-on:click='resetEditor'>\n            新建\n        </span>\n        <span class=\"more\">\n            导入\n            <div>\n                <span ui-on:click='inputLocalFile'>\n                    本地选择\n                </span>\n                <span  ui-on:click='inputXhrFile'>\n                    XHR文件请求\n                </span>\n            </div>\n        </span>\n        <span ui-on:click='exportFile'>\n            导出\n        </span>\n        <span class='more'>\n            帮助\n            <div>\n                <span>\n                    <a href=\"https://github.com/hai2007/model-editor/issues\" target=\"_blank\">去留言</a>\n                </span>\n                <span>\n                    <a href=\"https://hai2007.gitee.io/image3d/\" target=\"_blank\">文档（image3D.js）</a>\n                </span>\n            </div>\n        </span>\n    </div>\n    <div class=\"content\" id='canvas'>\n\n        <!-- 画布 -->\n        <canvas ui-bind:width='width' ui-bind:height='height'></canvas>\n\n    </div>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/tool/box-model.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= (function () {
  var colors = [[0.5, 0.5, 0.5], [0.8, 0.8, 0.8]];
  var modelData = [];

  var pushColor = function pushColor(i) {
    var color = i % 5 == 0 ? colors[0] : colors[1];
    modelData.push(color[0]);
    modelData.push(color[1]);
    modelData.push(color[2]);
  };

  for (var i = 0; i <= 25; i++) {
    // 横
    // [-1,0,-1+(2/25)*i]
    modelData.push(-1);
    modelData.push(0);
    modelData.push(0.08 * i - 1);
    pushColor(i);
    modelData.push(1);
    modelData.push(0);
    modelData.push(0.08 * i - 1);
    pushColor(i); // 竖

    modelData.push(0.08 * i - 1);
    modelData.push(0);
    modelData.push(-1);
    pushColor(i);
    modelData.push(0.08 * i - 1);
    modelData.push(0);
    modelData.push(1);
    pushColor(i);
  }

  return modelData;
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-bind.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isString=__etcpack__scope_args__.isString;


var update = function update(el, binding) {
  // 如果有type表示给属性赋值
  if (isString(binding.type) && binding.type.length > 0) {
    if (el.getAttribute(binding.type) != binding.value) {
      el.setAttribute(binding.type, binding.value);
    }
  } // 否则是设置内容或值
  else {
    if (el.value != binding.value || el.textContent != binding.value) {
      el.value = el.textContent = binding.value;
    }
  }
};

var _class = (_dec = Directive({
  selector: "ui-bind"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      update(el, binding);
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      update(el, binding);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-model.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;
var setValue=__etcpack__scope_args__.setValue;

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var xhtml =__etcpack__scope_args__.default;


var _class = (_dec = Directive({
  selector: "ui-model"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      el.value = binding.value;
      xhtml.bind(el, 'input', function () {
        setValue(binding.target, "." + binding.exp, el.value);
      });
    }
  }, {
    key: "$update",
    value: function $update(el, binding) {
      el.value = binding.value;
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/sprout-ui/nefbl/directive/ui-on.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Directive=__etcpack__scope_args__.Directive;

__etcpack__scope_args__=window.__etcpack__getBundle('21');
var xhtml =__etcpack__scope_args__.default;

/**
 * [可以使用的修饰符]
 * .prevent 阻止默认事件
 * .stop    阻止冒泡
 * .once    只执行一次
 */

var _class = (_dec = Directive({
  selector: "ui-on"
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$inserted",
    value: function $inserted(el, binding) {
      var types = binding.type.split('.'),
          modifier = {
        "prevent": false,
        "stop": false,
        "once": false
      },
          callback = function callback(event) {
        if (modifier.stop) xhtml.stopPropagation(event);
        if (modifier.prevent) xhtml.preventDefault(event);
        binding.value.apply(binding.target, [event]);

        if (modifier.once) {
          xhtml.unbind(el, types[0], callback);
        }
      };

      for (var i = 1; i < types.length; i++) {
        modifier[types[i]] = true;
      }

      xhtml.bind(el, types[0], callback);
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();