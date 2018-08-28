'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var HelloService = function () {
    function HelloService() {}
    HelloService.prototype.start = function () {
        console.log('HelloService.start()');
    };
    HelloService.prototype.stop = function () {
        console.log('HelloService.stop()');
    };
    HelloService.prototype.sayHello = function (name) {
        return 'Hello ' + name + ' from HelloService';
    };
    return HelloService;
}();

exports.HelloService = HelloService;
//# sourceMappingURL=bundle.server.js.map
