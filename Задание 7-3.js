// Написать функцию, которая создает пустой объект, но без прототипа.

const createEmptyObject = () => {
    return Object.create(null);
}
 
const emptyObject = createEmptyObject();
 
console.log(emptyObject);
console.log(Object.getPrototypeOf(emptyObject));