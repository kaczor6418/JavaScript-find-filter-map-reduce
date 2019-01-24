Array.prototype.myMap = function(callbackFunction = false) {
    const mapped = [];
    for (let i = 0; i < this.length; i++) {
        let result = callbackFunction(this[i], i, this);
        if (result) {
            mapped.push(result);
        }
    }
    return mapped;
};
