#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
            this.print = function (x) {
                console.log(`${this.width} ${this.height}`);
            };
        };
    }
}

module.exports = Rectangle;