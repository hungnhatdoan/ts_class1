import { QuadraticEquation } from "./pt2";
let qe = new QuadraticEquation(1, 4, 1);
if (qe.getDiscriminant() > 0) {
    console.log(qe.getRoot1());
    console.log(qe.getRoot2());
} else if (qe.getDiscriminant() == 0) {
    console.log(qe.getRoot1());
} else {
    console.log('Phuong trinh vo nghiem');
}
