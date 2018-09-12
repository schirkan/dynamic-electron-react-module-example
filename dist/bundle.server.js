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

var HelloService = (function () {
    function HelloService() {
    }
    HelloService.prototype.start = function (serviceLoader) {
        return __awaiter(this, void 0, Promise, function* () {
            console.log('HelloService.start()');
        });
    };
    HelloService.prototype.stop = function () {
        return __awaiter(this, void 0, Promise, function* () {
            console.log('HelloService.stop()');
        });
    };
    HelloService.prototype.sayHello = function (name) {
        return 'Hello ' + name;
    };
    return HelloService;
}());

var services = [{
        description: 'Service for HelloWorld Component',
        displayName: 'HelloService',
        name: 'HelloService',
        service: HelloService
    }];

exports.services = services;
//# sourceMappingURL=bundle.server.js.map
