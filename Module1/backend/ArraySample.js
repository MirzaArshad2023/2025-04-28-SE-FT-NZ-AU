let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

console.log(mountains) //original array

mountains[1] = "Kilimanjaro"

console.log(mountains)

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
console.log(seas.length)
seas.push('Red Sea');
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
seas.push('Arabian Sea')
console.log(seas)
seas.unshift('Dead sea')
console.log(seas)
console.log(seas.length)

seas.pop()

console.log(seas)

seas.shift()

console.log(seas)

let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji' ];
let fujiIndex = volcanoes.indexOf('Mount Fuji');
console.log(fujiIndex); // 2 (indexes start at 0)