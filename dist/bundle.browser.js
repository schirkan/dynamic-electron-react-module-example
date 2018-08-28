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
    }
    HelloWorld.prototype.render = function () {
        return React.createElement(
            'section',
            { className: 'HelloWorld' },
            React.createElement(
                'div',
                null,
                React.createElement(FontAwesome.FontAwesomeIcon, { icon: SvgIcons.faThumbsUp, size: '2x' }),
                this.props.text,
                '!'
            )
        );
    };
    return HelloWorld;
}(React.Component);

exports.HelloWorld = HelloWorld;
//# sourceMappingURL=bundle.browser.js.map
