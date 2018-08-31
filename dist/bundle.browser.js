'use strict';

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
        this.state = { text: props.options.initialText };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    HelloWorld.prototype.componentDidMount = function () {
        var _this = this;
        this.props.backendService.getService('HelloService').then(function (helloService) {
            return _this.setState({ helloService: helloService });
        }).catch(function (error) {
            return _this.setState({ error: error });
        });
    };
    HelloWorld.prototype.onButtonClick = function () {
        try {
            this.setState({ text: this.state.helloService.sayHello('Martin') });
        } catch (error) {
            this.setState({ text: error });
        }
    };
    HelloWorld.prototype.render = function () {
        if (this.state.error) {
            return React.createElement(
                'div',
                { className: 'error' },
                'Error: ',
                this.state.error
            );
        }
        if (!this.state.helloService) {
            return React.createElement(
                'div',
                { className: 'loading' },
                'Loading HelloService'
            );
        }
        return React.createElement(
            'section',
            { className: 'HelloWorld' },
            React.createElement(
                'div',
                null,
                React.createElement(FontAwesome.FontAwesomeIcon, { icon: SvgIcons.faThumbsUp, size: '2x' }),
                this.state.text
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
