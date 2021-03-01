
exports.min = function min(array) {

    if (array === undefined || array.length == 0) {
        return 0;
    }

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        min = Math.min(min, array[i]);
    }

    return min;
}

exports.max = function max(array) {

    if (array === undefined || array.length == 0) {
        return 0;
    }

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        max = Math.max(max, array[i]);
    }

    return max;
}

exports.avg = function avg(array) {

    if (array === undefined || array.length == 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }


    let avg = sum / array.length;

    return avg;
}
