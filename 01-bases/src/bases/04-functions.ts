//Forma Funcion No. 1
function greetPerson1 (name: string) {
    return `Hola ${name}`;
}
//Forma Funcion No. 2
const greetPerson2 = (name: string)=> {
    return `Hola ${name}`;
}
//Forma Funcion No. 3
const greetPerson3 = (name: string)=> `Hola ${name}`;

console.log(greetPerson1('SamirV2'));
console.log(greetPerson2('SaraV2'));
console.log(greetPerson3('SantiagoV2'));

//Forma Funcion No. 4
const getUser1 = ()=> {
    return {
        uuid: 'ABC-123',
        username: 'Tony001'
    }
}
//Forma Funcion No. 5
const getUser2 = ()=> ({
        uuid: 'DEF-567',
        username: 'Peter003'    
})

console.log(getUser1());
console.log(getUser2());

//Forma Funcion No. 6
const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Fuerza',
    },
]

const hero = heroes.find( (h) => h.id === 1);

console.log(hero?.name?.toUpperCase());