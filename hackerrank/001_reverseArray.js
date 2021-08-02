function reverseArray(a) {
    let len = a.length;
    let result = new Array(len);
    for (let i = 0, j = len - 1; i < len; i++, j--) {
        result[j] = a[i];
    }
    return result;
}
