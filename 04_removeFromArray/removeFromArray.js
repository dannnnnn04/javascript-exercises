const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach(myFunction);

    function myFunction(item) {
        if(!args.includes(item)){ //if the current item in "array" doesn't match any of of the element in "args"
            newArray.push(item);  //... include it in our newArray
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
