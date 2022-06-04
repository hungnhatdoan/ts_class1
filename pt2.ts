export class QuadraticEquation {
    a : number;
    b : number;
    c : number;
    constructor(a : number, b : number, c : number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant() : number {
        return this.b * this.b - 4 * this.a * this.c;
    }
    getRoot1(): number {
        return (-this.b + Math.sqrt (this.getDiscriminant())) / (2 * this.a);
    }
    getRoot2() : number {
        return (-this.b - Math.sqrt (this.getDiscriminant())) / (2 * this.a);
    }
    
                
                 
        


    

}