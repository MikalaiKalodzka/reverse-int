module.exports = function reverse (n) {
    let str_n = String(n)
    return parseInt(str_n.split('').reverse().join(''))
}

