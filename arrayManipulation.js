function processArray(arr) {
    let finalResult = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 === 0) {
            finalResult.push(num * num);
        } else {
            finalResult.push(num * 3);
        }
    }
    return finalResult;
}