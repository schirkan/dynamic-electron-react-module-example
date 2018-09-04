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
        this.state = {
            inputValue: 'Service',
            text: props.options.initialText
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    HelloWorld.prototype.componentDidMount = function () {
        var _this = this;
        this.props.getService('HelloService').then(function (helloService) {
            return _this.setState({ helloService: helloService });
        }).catch(function (error) {
            return _this.setState({ error: error });
        });
    };
    HelloWorld.prototype.onButtonClick = function () {
        try {
            this.setState({ text: this.state.helloService.sayHello(this.state.inputValue) });
        } catch (error) {
            this.setState({ error: error });
        }
    };
    HelloWorld.prototype.onChange = function (e) {
        this.setState({ inputValue: e.currentTarget.value });
    };
    HelloWorld.prototype.render = function () {
        return React.createElement(
            'section',
            { className: 'HelloWorld' },
            React.createElement(
                'div',
                null,
                React.createElement(FontAwesome.FontAwesomeIcon, { icon: SvgIcons.faThumbsUp }),
                React.createElement(
                    'span',
                    null,
                    this.state.text
                )
            ),
            React.createElement(
                'span',
                null,
                'Say Hello\xA0'
            ),
            React.createElement('input', { value: this.state.inputValue, onChange: this.onChange }),
            React.createElement(
                'button',
                { disabled: !this.state.helloService, onClick: this.onButtonClick },
                'from Service'
            ),
            this.state.error && React.createElement(
                'div',
                { className: 'error' },
                'Error: ',
                this.state.error
            )
        );
    };
    return HelloWorld;
}(React.Component);

exports.HelloWorld = HelloWorld;
//# sourceMappingURL=bundle.browser.js.map
