/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение. */

function getOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
     }
}

const parentObject = {
    a: 1,
    b: 2,
    c: 3
}

const childObject = Object.create(parentObject);
childObject.d = 4;
childObject.e = 5;
childObject.f = 7;

getOwnProperties(childObject);