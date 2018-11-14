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

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            var HelloWorld = /** @class */ (function (_super) {
                __extends(HelloWorld, _super);
                function HelloWorld(props) {
                    var _this = _super.call(this, props) || this;
                    _this.helloService = _this.props.context.getService('HelloService');
                    _this.state = {
                        inputValue: 'Service',
                        text: props.options.initialText
                    };
                    _this.onButtonClick = _this.onButtonClick.bind(_this);
                    _this.onChange = _this.onChange.bind(_this);
                    return _this;
                }
                HelloWorld.prototype.onButtonClick = function () {
                    if (!this.helloService) {
                        return;
                    }
                    try {
                        this.setState({ text: this.helloService.sayHello(this.state.inputValue) });
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
                        createElement("button", { disabled: !this.helloService, onClick: this.onButtonClick }, "from Service"),
                        this.state.error && createElement("div", { className: "error" },
                            "Error: ",
                            this.state.error)));
                };
                return HelloWorld;
            }(Component));

            var components = exports('components', [{
                    component: HelloWorld,
                    description: 'Hello World Component with HelloService',
                    displayName: 'Hello World Component',
                    name: 'HelloWorld',
                    fields: [{
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
