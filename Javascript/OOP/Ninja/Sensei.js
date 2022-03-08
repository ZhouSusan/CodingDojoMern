import {Ninja} from './Ninja.js';

class Sensei extends Ninja {
    constructor(name) {
        super(name, 10, 100, 5);
        this.wisdom = 70;
    }
    speakWisdom() {
        console.log(`What one programmer can do in one month, two programmers can do in two months.`);
    }
    ChildFunction() {
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`)
    }
}

const blackPanther = new Sensei("Black Panther");
blackPanther.speakWisdom();
blackPanther.ChildFunction();
