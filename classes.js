class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    describe() {
        return `${this.name} ${this.age} years old`
    }
}

const info = new Person("John", 25)

console.log(info.describe())


class Clock {
    constructor({template }) {
        this.template = template
    }


    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop = function () {
        // do nothing!
    };
    start = function () {
        this.render();
    };
}


let clock = new Clock({template: 'h:m:s'});
clock.start()






class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50
    }

    increaseVolume(number) {

        this.volume += number;
        (this.volume > 200) ? this.volume = 100 : this.volume = this.volume;
    }
    DecreaseVolume(number) {

        this.volume -= number;
        (this.volume < 0) ? this.volume = 0 : this.volume = this.volume;
    }

    randomly() {
       this.channel = Math.floor(Math.random()* 50) + 1 
    }

    reset() {
        this.channel = 1;
        this.volume = 50
    }

    status() {
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)
    }


}

const info1 = new TV("Panasonic")

// console.log(info1)
// info1.status()
// info1.increaseVolume(200)
// console.log(info1)
// info1.DecreaseVolume(50)
// console.log(info1)
// info1.randomly()
// console.log(info1)
// info1.reset()
// console.log(info1)



