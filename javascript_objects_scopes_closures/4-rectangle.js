#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        };
    }

    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                let row = "";
                for (let j = 0; j < this.width; j++) {
                    row += "X";
                }
                console.log(row);
            }
        }
    }

    rotate() {
        if (this.width && this.height) {
            const tempValue = this.width;
            this.width = this.height;
            this.height = tempValue;
        }
    }

    double() {
        if (this.width && this.height) {
            this.width *= 2;
            this.height *= 2;
        }
    }
}

module.exports = Rectangle;