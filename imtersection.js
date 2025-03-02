const numbers1 = [
    1,
    3,
    11,
    51,
    6,
    77
];

const numbers2 = [
    4,
    5,
    77,
    82,
    6,
    9
];

const numbers3 = [
    5,
    99,
    64,
    90,
    8,
    65,
    81,
    999,
    158,
    77,
    61,
    0,
    17,
    38
];

function intersection(arr1, arr2) {
    const resultArr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                resultArr.push(arr1[i]);
            }
        }
    }

    console.log(resultArr);

    return resultArr;
}

function intersectionCounter(arr1, arr2) {
    const resultArr = [];
    const arr3 = arr1.concat(arr2);
    let counter = {};

    for (let i = 0; i < arr3.length; i++) {
        if (!counter[arr3[i]]) {
            counter[arr3[i]] = 1;
        } else {
            counter[arr3[i]]++;
        }
    }

    for (let property in counter) {
        if (counter[property] >= 2) {
            resultArr.push(property);
        }
    }

    console.log(resultArr);

    return resultArr;
}

intersection(numbers1, numbers3);
intersectionCounter(numbers2, numbers3);