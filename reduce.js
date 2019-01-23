function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

Array.prototype.myReduce = function(callbackFunction, initializationStructure) {

    if (isFunction(callbackFunction) !== true) {
        console.error('You must provide an argument that is a callback function!');
        return 'You must provide an argument that is a callback function!';
    } else if (callbackFunction.length > 4) {
        console.error('Your callback function has too many parameters');
        return 'Your callback function has too many parameters';
    } else if (!initializationStructure) {
        initializationStructure = this[0].constructor();
    }

    const paramNum = callbackFunction.length;
    for (let i = 0; i < this.length; i++) {
        switch (paramNum) {
            case 1:
                if (callbackFunction(initializationStructure)) {
                    initializationStructure = callbackFunction(initializationStructure);
                }
                break;
            case 2:
                if (callbackFunction(initializationStructure, this[i])) {
                    initializationStructure = callbackFunction(initializationStructure, this[i]);
                }
                break;
            case 3:
                if (callbackFunction(initializationStructure, this[i], i)) {
                    initializationStructure = callbackFunction(initializationStructure, this[i], i);
                }
                break;
            case 4:
                if (callbackFunction(initializationStructure, this[i], i, this)) {
                    initializationStructure = initializationStructure = callbackFunction(initializationStructure, this[i], i);
                }
        }
    }
    return initializationStructure;

};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfNumbers = numbers.reduce( (acc, cur) => {
    return acc + cur;
});
console.log(sumOfNumbers);

const mySumOfNumbers = numbers.myReduce( (acc, cur) => {
    return acc + cur;
});
console.log(mySumOfNumbers);
