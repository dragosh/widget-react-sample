!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n=t("object"==typeof exports?require("react"):e.react);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(__WEBPACK_EXTERNAL_MODULE_2__){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/scripts/",t(0)}([function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };\n\nvar _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\n\nvar _React = __webpack_require__(2);\n\nvar _React2 = _interopRequireWildcard(_React);\n\nvar PropTypes = _React2['default'].PropTypes;\n\nvar styles = {\n    container: {\n        backgroundColor: '#F5FCFF',\n        paddingLeft: 20,\n        paddingRight: 20,\n        paddingBottom: 20,\n        paddingTop: 20\n    }\n};\n\nvar WidgetDemo = (function (_React$Component) {\n    function WidgetDemo(props) {\n        _classCallCheck(this, WidgetDemo);\n\n        _get(Object.getPrototypeOf(WidgetDemo.prototype), 'constructor', this).call(this, props);\n        this.state = {\n            count: props.initialCount\n        };\n    }\n\n    _inherits(WidgetDemo, _React$Component);\n\n    _createClass(WidgetDemo, [{\n        key: 'update',\n        value: function update() {\n            this.setState({ count: this.state.count + 1 });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _React2['default'].createElement(\n                'div',\n                { style: styles.container },\n                _React2['default'].createElement(\n                    'h1',\n                    null,\n                    'Hello, ',\n                    this.props.name,\n                    '!'\n                ),\n                _React2['default'].createElement(\n                    'button',\n                    { onClick: this.update.bind(this) },\n                    this.state.count\n                )\n            );\n        }\n    }]);\n\n    return WidgetDemo;\n})(_React2['default'].Component);\n\nexports['default'] = WidgetDemo;\n\nWidgetDemo.propTypes = {\n    name: PropTypes.string,\n    initialCount: PropTypes.number\n};\nWidgetDemo.defaultProps = {\n    name: 'Guest',\n    initialCount: 5\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./scripts/main.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./scripts/main.js?")},function(module,exports,__webpack_require__){eval('module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external "react"\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react%22?')}])});