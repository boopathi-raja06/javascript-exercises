const palindromes = function (string) {
    allchar='bcdefghijklmnopqrstuvwxyz1234567890'
    let dup=string.toLowerCase().split('').filter((character)=>allchar.includes(character)).join('')
    if(dup ==dup.split('').reverse().join(''))
        return true
    else
    return false

};

// Do not edit below this line
module.exports = palindromes;
