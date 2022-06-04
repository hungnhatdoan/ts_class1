"use strict";
exports.__esModule = true;
exports.QuadraticEquation = void 0;
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.getDiscriminant = function () {
        return this.b * this.b - 4 * this.a * this.c;
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    };
    return QuadraticEquation;
}());
exports.QuadraticEquation = QuadraticEquation;
