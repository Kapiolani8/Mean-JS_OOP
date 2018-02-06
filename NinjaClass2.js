function Ninja(name, health){
    this.name = name; 
    this.health = 100; 

    var speed = 3; 
    var strength = 3; 

this.sayName = function(){
    console.log("My name is " + this.name + ".");
    return this;
}

this.showStats = function(){
    console.log("My name is " + this.name + ".")
    console.log("My health is " + this.health + ".") 
    console.log("Speed " + speed + ".")
    console.log("Strength " + strength + ".")
    return this;
}

this.drinkSake = function(){
    this.health += 10
    console.log("My name is " + this.name + " That sake was good my health is now " + this.health)
    return this; 
}

this.punch = function(ninja){
    this.health -= 5
    console.log(this.name + " lost 5 health points when " + ninja.name + " punched them.")
    return this;
}

this.kick = function(ninja){
    this.health -= 15
    console.log(this.name + " lost 15 health points when " + ninja.name + " kicked them.")
}
}

const ninja1 = new Ninja("Will");
const ninja2 = new Ninja("Ricardo")
const ninja3 = new Ninja("Tony")

ninja1.sayName();
ninja2.showStats();
ninja3.drinkSake();
ninja1.punch(ninja2);
ninja1.showStats();
ninja2.kick(ninja3); 
ninja2.showStats();
