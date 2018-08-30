'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

var HelloService = function () {
    function HelloService() {}
    HelloService.prototype.start = function (serviceLoader) {
        return __awaiter(this, void 0, Promise, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log('HelloService.start()');

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    };
    HelloService.prototype.stop = function () {
        return __awaiter(this, void 0, Promise, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log('HelloService.stop()');

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
    };
    HelloService.prototype.sayHello = function (name) {
        return 'Hello ' + name + ' from HelloService';
    };
    return HelloService;
}();

exports.HelloService = HelloService;
//# sourceMappingURL=bundle.server.js.map
