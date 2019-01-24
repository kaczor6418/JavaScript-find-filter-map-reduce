Array.prototype.myFind = function(callbackFunction = false) {

    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            return this[i];
        }
    }
};
