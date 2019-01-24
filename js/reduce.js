Array.prototype.myReduce = function(callbackFunction, initializationStructure) {

    if (!initializationStructure) {
        initializationStructure = this[0].constructor();
    }

    for (let i = 0; i < this.length; i++) {
        initializationStructure = callbackFunction(initializationStructure, this[i], i, this);
    }
    return initializationStructure;

};
