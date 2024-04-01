const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);
}
//prints 0 1 2 3 4

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    //console.log(key);
}
// It will not print anything