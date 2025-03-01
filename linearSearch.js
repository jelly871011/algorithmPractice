const numbers = [
    1,
    2,
    4,
    7,
    9,
    110,
    27,
    38,
    5,
    10
];

function linearSearch (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`found target ${target} in index ${i}`);

            return i;
        }
    }

    console.log('did not find');

    return -1;
}

linearSearch(numbers, 110);