"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flights = /** @class */ (function () {
    function flights(debug) {
        if (debug === void 0) { debug = 2; }
        this.plan = {
            flights: 0,
            debug: 2,
            info: {},
            results: new Map(),
            ongoing: {
                destination: "",
            },
        };
        this.plan.debug = debug;
    }
    return flights;
}());
exports.default = flights;
