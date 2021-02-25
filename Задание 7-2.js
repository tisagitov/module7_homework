/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false. */

function objectHasKey(obj, string) {
    let result = false;
    for (let key in obj) {
        if (key == string) {
            result = true;
        }
    }
    return result;
}

const testObjectTrue = {
    a: 2,
    true: false,
    flooris: "lava",
    12: 13,
    "monday": "sunday"
}

const testObjectFalse = {
    a: 2,
    true: false,
    lavais: "lava",
    12: 13,
    "monday": "sunday"
}

console.log(objectHasKey(testObjectTrue, "flooris"));
console.log(objectHasKey(testObjectFalse, "flooris"));