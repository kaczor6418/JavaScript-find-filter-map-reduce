function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

Array.prototype.myMap = function(callbackFunction = false) {

    if (isFunction(callbackFunction) !== true) {
        console.error('You must provide an argument that is a callback function!');
        return 'You must provide an argument that is a callback function!';
    } else if (callbackFunction.length > 3) {
        console.error('Your callback function has too many parameters');
        return 'Your callback function has too many parameters';
    }

    const mapped = [];
    for (let i = 0; i < this.length; i++) {
        let result = callbackFunction(this[i], i);
        if (result) {
            mapped.push(result);
        }
    }
    return mapped;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onlyEvenNumbers = numbers.map( number => number * 2);
const myOnlyEvenNumbers = numbers.myMap( number => number * 2);
console.log('.map result: ',onlyEvenNumbers);
console.log('.myMap result: ', myOnlyEvenNumbers);
