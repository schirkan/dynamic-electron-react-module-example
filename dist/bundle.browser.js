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

            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }

            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0: case 1: t = op; break;
                            case 4: _.label++; return { value: op[1], done: false };
                            case 5: _.label++; y = op[1]; op = [0]; continue;
                            case 7: op = _.ops.pop(); _.trys.pop(); continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                if (t[2]) _.ops.pop();
                                _.trys.pop(); continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                }
            }

            function styleInject(css, ref) {
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

            var css = ".HelloWorld_HelloWorld__3Xza0 {\n  background-color: green; }\n";
            var style = {"HelloWorld":"HelloWorld_HelloWorld__3Xza0"};
            styleInject(css);

            var HelloWorld = /** @class */ (function (_super) {
                __extends(HelloWorld, _super);
                function HelloWorld(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        inputValue: 'Service',
                        text: props.initialText
                    };
                    _this.onButtonClick = _this.onButtonClick.bind(_this);
                    _this.onChange = _this.onChange.bind(_this);
                    return _this;
                }
                HelloWorld.prototype.onButtonClick = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var helloService, text, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.context.getService('HelloService')];
                                case 1:
                                    helloService = _a.sent();
                                    if (!helloService) {
                                        return [2 /*return*/];
                                    }
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, helloService.sayHello(this.state.inputValue)];
                                case 3:
                                    text = _a.sent();
                                    this.setState({ text: text });
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _a.sent();
                                    this.setState({ error: error_1 });
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                HelloWorld.prototype.onChange = function (e) {
                    this.setState({ inputValue: e.currentTarget.value });
                };
                HelloWorld.prototype.render = function () {
                    return (createElement("section", { className: style["HelloWorld"] },
                        createElement("div", null,
                            createElement(FontAwesomeIcon, { icon: faThumbsUp }),
                            createElement("span", null,
                                " ",
                                this.state.text)),
                        createElement("span", null, "Say Hello\u00A0"),
                        createElement("input", { value: this.state.inputValue, onChange: this.onChange }),
                        createElement("button", { onClick: this.onButtonClick }, "from Service"),
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
