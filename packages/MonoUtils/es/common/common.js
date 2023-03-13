export const uuid = (length = 8, radix = 36) => {
    let uuidString = '';
    while (uuidString.length < length) {
        uuidString += Math.floor(Math.random() * radix).toString(radix);
    }
    return uuidString;
};
