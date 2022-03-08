import {Card} from './Card.js';

export class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        if( target instanceof Unit ) {
            target.res -= target.power;
            console.log(`${target.name}'s resilience was lower by ${target.power}. 
            Target's new status are: Name: ${target.name}, Cost: ${target.cost}, Power: ${target.power}, Resilience: ${target.res}`);
            return this;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }  
}