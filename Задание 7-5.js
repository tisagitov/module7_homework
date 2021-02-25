// Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor(brand) {
    this.brand = brand;
    this.turnedOn = false;
    }

    turnOn() {
        if (!this.turnedOn) {
            this.turnedOn = true
        }
    }

    turnOff() {
        if (this.turnedOn) {
            this.turnedOn = false
        }
    }
    
    getWattageHour(wattage, hours) {
        return wattage * hours
    }
}

class Computer extends Device {
    constructor(brand, screenBrightness) {
    super(brand);
    this.turnedOn = false;
    this.screenBrightness = screenBrightness;
    }

    setScreenBrightness(percent) {
        this.screenBrightness = `${percent}%`
    }
}


class TelevisionSet extends Device {
    constructor(brand, currentChannel) {
    super(brand);
    this.turnedOn = false;
    this.currentChannel = currentChannel;
    }

    goToChannel(channelId) {
        if (this.turnedOn) {
            this.currentChannel = channelId
        } else {
            console.log('Сначала включите телевизор')
        }
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