function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

Array.prototype.myFind = function(callbackFunction = false) {

    if (callbackFunction === false) {
        console.error('Invalid parameters!');
        return 'Invalid parameters!';
    }
    else if (isFunction(callbackFunction) !== true) {
        console.error('You must provide an argument that is a callback function!');
        return 'You must provide an argument that is a callback function!';
    } else if (callbackFunction.length > 1) {
        console.error('Your callback function has too many parameters');
        return 'Your callback function has too many parameters';
    }

    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            return this[i];
        }
    }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = numbers.find( number => number % 2 === 0 );
const myEvenNumber = numbers.myFind(number => number % 2 === 0);
console.log('.find result: ',evenNumber);
console.log('.myFind result: ',myEvenNumber);
