"use strict";
exports.__esModule = true;
var pt2_1 = require("./pt2");
var qe = new pt2_1.QuadraticEquation(1, 4, 1);
if (qe.getDiscriminant() > 0) {
    console.log(qe.getRoot1());
    console.log(qe.getRoot2());
}
else if (qe.getDiscriminant() == 0) {
    console.log(qe.getRoot1());
}
else {
    console.log('Phuong trinh vo nghiem');
}
