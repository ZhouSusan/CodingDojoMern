class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength; 
    }
    sayName() {
        console.log(`This Ninja's name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkShake() {
        this.health += 10;
        console.log(`Your health has been restored by 10 points, and your health is now ${this.health}`);
        return this;
    }
}

const brittany = new Ninja("Brittany", 100, 2, 3);
brittany.sayName();
brittany.showStats();
brittany.drinkShake();