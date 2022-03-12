import {Card} from './Card.js';
import {Unit} from './Unit.js';

export class Effect extends Card{
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play ( target ) {
        if( target instanceof Unit ) {
            if (this.magnitude < 0 || this.power <0) {
                if (this.stat === "resilience") {
                    target.res += this.magnitude;
                    console.log(`Decrease the target's ${this.stat} by ${Math.floor(this.magnitude)}.`);
                    
                    return this;
                }
            } else {
                if (this.stat === "resilience") {
                    target.res += this.magnitude;
                    console.log(`Increase the target's ${this.stat} by ${Math.floor(this.magnitude)}`);
                    return this;
                }
                else {
                    target.power += this.magnitude; 
                    console.log(`Increase the target's ${this.stat} by ${Math.floor(this.magnitude)}.`);
                    return this; 
                }
            }    
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }  
}

//Turn 1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
hardAlgorithm.play(redBeltNinja);
console.log(`Stats: Name: ${redBeltNinja.name}, Cost ${redBeltNinja.cost}, Power: ${redBeltNinja.power}, Resilience: ${redBeltNinja.res}`);

//Turn 2
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);
console.log(`Stats: Name: ${redBeltNinja.name}, Resilience: ${redBeltNinja.res}`);


//Turn 3
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
pairProgramming.play(redBeltNinja);
console.log(`Stats: Name: ${redBeltNinja.name}, Power: ${redBeltNinja.power}`);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
redBeltNinja.attack(blackBeltNinja);
console.log(`Stats: Name: ${blackBeltNinja.name}, Cost ${blackBeltNinja.cost}, Power: ${blackBeltNinja.power}, Resilience: ${blackBeltNinja.res}`);
