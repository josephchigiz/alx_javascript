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
    };

    rotate() {
        if (this.width && this.height) {
            for (let i = 0; i < this.width; i++) {
                let row = "";
                for (let j = 0; j < this.height; j++) {
                    row += "X";
                }
                console.log(row);
            }
        }
    };

    double() {
        if (this.width && this.height) {
            for (let i = 0; i < (2*this.width); i++) {
                let row = "";
                for (let j = 0; j < (2*this.height); j++) {
                    row += "X";
                }
                console.log(row);
            }
        }
    };
}

module.exports = Rectangle;