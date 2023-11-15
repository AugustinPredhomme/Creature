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