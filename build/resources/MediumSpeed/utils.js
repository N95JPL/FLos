function bitwise(dec, bit) {
    // bit equal one of: 128, 64, 32, 16, 8, 4, 2, 1
    var hex = dec.toString(16);
    const arr = [128, 64, 32, 16, 8, 4, 2, 1];
    var bits = arr.indexOf(bit) + 1;
    var zero = "";
    var temp = parseInt(hex, 16).toString(2).padStart(8, "0");
    for (let i = 0; i < bits; i++) {
        zero += "0";
    }
    temp = zero + temp.substring(bits, temp.length);
    temp = temp.match(/.{4}/g).reduce(function (acc, i) {
        return acc + parseInt(i, 2).toString(16);
    }, '');
    dec = parseInt(temp, 16);
    return dec;
}
exports.bitwise = bitwise;
