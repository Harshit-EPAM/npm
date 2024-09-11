function capitalize(str){
    let a = str.toLowerCase()
    let b = a.split(' ')
    let c = b.map(word=>word.charAt(0).toUpperCase()+word.slice(1));
    let d = c.join(' ')
    return d
}

module.exports = capitalize;