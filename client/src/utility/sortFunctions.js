export function priceLowToHighFunction(arr) {
    return arr.sort((a, b) => a.price - b.price);
}

export function priceHighToLowFunction(arr) {
    return arr.sort((a, b) => b.price - a.price);
}

export function ratingLowToHighFunction(arr) {
    return arr.sort((a, b) => a.rating - b.rating);
}

export function ratingHighToLowFunction(arr) {
    return arr.sort((a, b) => b.rating - a.rating);
}
