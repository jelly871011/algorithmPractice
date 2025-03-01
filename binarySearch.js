const numbers = [
    1,
    2,
    3,
    7,
    9,
    22,
    27,
    38,
    45,
    110
];

function binarySearch(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (target === arr[middle]) {
            console.log(`found the index is ${middle}`);

            return middle;
        }
        
        if (target < arr[middle]) max = middle - 1;
        if (target > arr[middle]) min = middle + 1;
    }

    console.log('did not find');

    return -1;
}

binarySearch(numbers, 110);