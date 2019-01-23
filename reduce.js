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

    for (let i = 0; i < this.length; i++) {
        initializationStructure = callbackFunction(initializationStructure, this[i], i, this);
    }
    return initializationStructure;

};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfNumbers = numbers.reduce( (acc, cur) => {
    return acc + cur;
});
console.log('.reduce result: ', sumOfNumbers);

const mySumOfNumbers = numbers.myReduce( (acc, cur) => {
    return acc + cur;
});
console.log('.myReduce result: ',mySumOfNumbers);
