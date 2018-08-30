'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

Object.defineProperty(exports, '__esModule', { value: true });

var SvgIcons = require('@fortawesome/free-solid-svg-icons');
var FontAwesome = require('@fortawesome/react-fontawesome');
var React = require('react');

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var HelloWorld = function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        _super.call(this, props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    HelloWorld.prototype.onButtonClick = function () {
        try {
            var helloService = this.props.backendService.serviceManager.get('HelloService', 'dynamic-electron-react-module-example');
            this.setState({ text: helloService.sayHello('Martin') });
        } catch (error) {
            console.log(error);
        }
    };
    HelloWorld.prototype.render = function () {
        return React.createElement(
            'section',
            { className: 'HelloWorld' },
            React.createElement(
                'div',
                null,
                React.createElement(FontAwesome.FontAwesomeIcon, { icon: SvgIcons.faThumbsUp, size: '2x' }),
                this.props.options.text,
                '!'
            ),
            React.createElement(
                'button',
                { onClick: this.onButtonClick },
                'Say Hello from Server'
            )
        );
    };
    return HelloWorld;
}(React.Component);

exports.HelloWorld = HelloWorld;
//# sourceMappingURL=bundle.browser.js.map
