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

class ChiefOrc extends Orc {
    constructor(name, age, strength) {
        super(name, age, strength, true);
        this.strength += 15;
        this.isChief = true;
    }
  
    saysomething() {
        console.log("Chief Orc sound");
    }
  
    identity() {
        console.log(`I am a Chief Orc named ${this.name}`);
    }
  
    giveOrder() {
        console.log("The Chief Orc gives an order.");
    }
}

const creature1 = new Creature("Mysterious Being", 1000, 5);
const creature2 = new Creature("Mystical Entity", 500, 8);

const orc1 = new Orc("Grommash", 35, 25, true);
const orc2 = new Orc("Thrall", 32, 22, false);

const urukhai1 = new Urukhai("Urukhai 1", 40, 30);
const urukhai2 = new Urukhai("Urukhai 2", 38, 28);

const chiefOrc1 = new ChiefOrc("Chief 1", 45, 35);
const chiefOrc2 = new ChiefOrc("Chief 2", 42, 33);

orc1.scream();
orc1.bite();
urukhai1.kill();
chiefOrc1.giveOrder();

creature1.saysomething();
creature2.identity();

orc1.saysomething();
orc2.identity();

urukhai1.saysomething();
chiefOrc1.identity();