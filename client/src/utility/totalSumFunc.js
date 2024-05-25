export const totalSumFunc = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].price * arr[i].quantity;
    }
    return sum;
}