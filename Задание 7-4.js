/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
4. Создать экземпляры каждого прибора;
5. Вывести в консоль и посмотреть результаты работы, гордиться собой :) */

function Device(brand) {
    this.brand = brand,
    this.turnedOn = false
}

Device.prototype.turnOn = function() {
    if (!this.turnedOn) {
        this.turnedOn = true
    }
}

Device.prototype.turnOff = function() {
    if (this.turnedOn) {
        this.turnedOn = false
    }
}

Device.prototype.getWattageHour = function(wattage, hours) {
    return wattage * hours
}

function Computer(brand, screenBrightness) {
  this.brand = brand,
  this.turnedOn = false,
  this.screenBrightness = screenBrightness
}

Computer.prototype = new Device()

Computer.prototype.setScreenBrightness = function(percent) {
    this.screenBrightness = `${percent}%`
}

function TelevisionSet(brand, currentChannel) {
    this.brand = brand,
    this.turnedOn = false,
    this.currentChannel = currentChannel
}

TelevisionSet.prototype = new Device()

TelevisionSet.prototype.goToChannel = function(channelId) {
    if (this.turnedOn) {
        this.currentChannel = channelId
    } else {
        console.log('Сначала включите телевизор')
    }
}

const laptop = new Computer('hp', '100%');

console.log(laptop.getWattageHour(100, 3));
laptop.turnOn();
console.log(laptop.turnedOn);
laptop.turnOff();
console.log(laptop.turnedOn);
laptop.setScreenBrightness(73);
console.log(laptop.screenBrightness);


const bedroomTV = new TelevisionSet('lg', 24)
console.log(bedroomTV.getWattageHour(200, 2));
console.log(bedroomTV.currentChannel);
bedroomTV.goToChannel(23)
bedroomTV.turnOn();
bedroomTV.goToChannel(23);
console.log(bedroomTV.currentChannel);