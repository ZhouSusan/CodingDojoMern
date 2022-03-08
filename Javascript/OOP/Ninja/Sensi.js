import {Ninja} from './Ninja.js';

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.strength = 10;
        this.health = 100;
        this.speed = 5;
        this.wisdom = 70;
    }
    speakWisdom() {
        console.log(`What one programmer can do in one month, two programmers can do in two months.`);
    }
    ChildFunction() {
        const msg = super.showStats();
        console.log(msg); 
        console.log(`Wisdom: ${this.wisdom}`)
    }
}

const blackPanther = new Sensei("Black Panther");
blackPanther.speakWisdom();
blackPanther.ChildFunction();
