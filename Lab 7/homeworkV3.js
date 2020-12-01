let Person = function(name, age){
    this.name = name;
    this.age = age;
    // this.greet = function() {
    //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`); 
    //  }
}
  // Person methods
  Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`);  
};
// Manager.prototype.greet = function(){
//     return Person.prototype.greet.call(this) + " car"
//   }
  // Manager constructor
  let Manager = function(name, age, managees){
    // this.name = name;
    // this.age = age;
    // this.skillset = skillset;
    Person.call(this, name, age);
    this.managees = managees;
  }
  // Manager objects should inherit all methods from Person:
  Manager.prototype = Object.create(Person.prototype);
  // Manager.prototype.constructor = Manager; 
  Manager.prototype.greet = function(){
    // reuse the Person.prototype.greet:
    Person.prototype.greet.call(this);
  
    // add some distinct Manager greeting actions:
  
    let greetMsg = `\tI manage `;
  
    for(let i=0; i<this.managees.length; i+=1){
      greetMsg += `${this.managees[i].name},`
    }
  
    console.log(`\t${greetMsg}`);
  }
  // Developer constructor
  let Developer = function(name, age, skillset){
    Person.call(this, name, age);
    this.skillset = skillset;
  }
  Developer.prototype.greet = function(){
    // reuse the Person.prototype.greet:
    Person.prototype.greet.call(this);
  
    // add some distinct Developer greeting actions:
    console.log(`\tI know ${this.skillset.join()}`);
  }
  // Developer objects should inherit all methods from Person:
  // Developer.prototype = Object.create(Person.prototype);
  // Developer.prototype.constructor = Developer; 
  
  // Developer instance
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instance
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  // use the objects:
  maria.greet();
  pesho.greet();
  gates.greet();