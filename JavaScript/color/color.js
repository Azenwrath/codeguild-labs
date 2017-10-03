function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.blendAdd = function () {};

};


Color.prototype.blendAdd = function (newColor) {
    return new Color(
        ((this.r + newColor.r) / 2),
        ((this.g + newColor.g) / 2),
        ((this.b + newColor.b) / 2))
};


Color.prototype.toHex = function (){
    return "Test";}


test = new Color(255, 255, 255);
test2 = new Color(0, 0, 0);
console.log("Test: " + test.r + test.g + test.b);
console.log("Test2: " + test2.r + test2.g + test2.b);
test3 = test.blendAdd(test2);
console.log("Test3: " + test3.r + test3.g + test3.b);



var i = new Color(5, 5, 5);
i.blendAdd()