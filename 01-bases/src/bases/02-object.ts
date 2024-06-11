
export const person = {
    firstName: 'Stark',
    age: 34,
    address: {
        city: 'Barranquilla',
        zip: 688768,
        lat: 76.9980,
        lng: 34.2322
    }
}

const person2 = structuredClone(person);

person2.firstName = 'Perker';
person2.address.city = 'NY';

console.log(person);
console.log(person2);