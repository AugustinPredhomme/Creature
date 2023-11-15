class Creature {
    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }
  
    saysomething() {
      console.log("Creature sound");
    }
  
    identity() {
      console.log(`I am a creature named ${this.name}`);
    }
}

class Orc extends Creature {
    constructor(name, age, strength, hasRage) {
        super(name, age, strength);
        this.hasRage = hasRage;
    }
  
    saysomething() {
      console.log("Orc sound");
    }
  
    identity() {
      console.log(`I am an orc named ${this.name}`);
    }
  
    scream() {
      console.log("Ahhhhhhhhh!");
    }
  
    bite() {
      console.log("Orc biting");
    }
}

class Urukhai extends Orc {
    constructor(name, age, strength) {
        super(name, age, strength, true);
        this.strength += 10;
    }
  
    saysomething() {
      console.log("Urukhai sound");
    }
  
    identity() {
      console.log(`I am an Urukhai named ${this.name}`);
    }
  
    kill() {
        console.log("The Urukhai kills its enemies.");
    }
}