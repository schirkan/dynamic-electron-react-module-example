System.register(['@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'react'], function (exports, module) {
    'use strict';
    var faThumbsUp, FontAwesomeIcon, createElement, Component;
    return {
        setters: [function (module) {
            faThumbsUp = module.faThumbsUp;
        }, function (module) {
            FontAwesomeIcon = module.FontAwesomeIcon;
        }, function (module) {
            createElement = module.createElement;
            Component = module.Component;
        }],
        execute: function () {

            function __extends(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            var HelloWorld = exports('HelloWorld', /** @class */ (function (_super) {
                __extends(HelloWorld, _super);
                function HelloWorld(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        inputValue: 'Service',
                        text: props.options.initialText
                    };
                    _this.onButtonClick = _this.onButtonClick.bind(_this);
                    _this.onChange = _this.onChange.bind(_this);
                    return _this;
                }
                HelloWorld.prototype.componentDidMount = function () {
                    var _this = this;
                    this.props.getService('HelloService')
                        .then(function (helloService) { return _this.setState({ helloService: helloService }); })
                        .catch(function (error) { return _this.setState({ error: error }); });
                };
                HelloWorld.prototype.onButtonClick = function () {
                    try {
                        this.setState({ text: this.state.helloService.sayHello(this.state.inputValue) });
                    }
                    catch (error) {
                        this.setState({ error: error });
                    }
                };
                HelloWorld.prototype.onChange = function (e) {
                    this.setState({ inputValue: e.currentTarget.value });
                };
                HelloWorld.prototype.render = function () {
                    return (createElement("section", { className: "HelloWorld" },
                        createElement("div", null,
                            createElement(FontAwesomeIcon, { icon: faThumbsUp }),
                            createElement("span", null, this.state.text)),
                        createElement("span", null, "Say Hello\u00A0"),
                        createElement("input", { value: this.state.inputValue, onChange: this.onChange }),
                        createElement("button", { disabled: !this.state.helloService, onClick: this.onButtonClick }, "from Service"),
                        this.state.error && createElement("div", { className: "error" },
                            "Error: ",
                            this.state.error)));
                };
                return HelloWorld;
            }(Component)));

            var components = exports('components', [{
                    component: HelloWorld,
                    description: 'Hello World Component with HelloService',
                    displayName: 'Hello World Component',
                    name: 'HelloWorld',
                    options: [{
                            description: 'Text to display',
                            displayName: 'Text',
                            name: 'text',
                            valueType: 'string'
                        }]
                }]);

        }
    };
});
//# sourceMappingURL=bundle.browser.js.map
