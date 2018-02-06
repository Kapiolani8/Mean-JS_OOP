class Ninja{
    constructor(name, health, speed, strength){
        this.name = name; 
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}.`);
    }

    showStats(){
        console.log(`My name is ${this.name}.`)
        console.log(`My health = ${this.health}.`)
        console.log(`My speed = ${this.speed}.`)
        console.log(`My strength = ${this.strength}.`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10; 
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("You can do everything right and things will still go wrong. The key is to never stop doing right.");
        }
    }



let Kapiolani = new Ninja('Kapiolani');
Kapiolani.sayName();
Kapiolani.drinkSake()
Kapiolani.showStats();

let sensei = new Sensei('Ricardo');
sensei.speakWisdom();
sensei.showStats();
