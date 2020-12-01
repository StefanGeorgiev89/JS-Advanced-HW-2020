let Person = function(name, age){
    this.name = name;
    this.age = age;
    // this.greet = function() {
    //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`); 
    //  }
}
  // Person methods
  Person.prototype.greet = function(skillsetOrManagees) {
    this.skillsetOrManagees = skillsetOrManagees;
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`);
    
    console.log(skillsetOrManagees);
   
};
// Manager.prototype.greet = function(){
//     return Person.prototype.greet.call(this) + " car"
//   }
  // Manager constructor
  let Manager = function(name, age, skillset){
    this.name = name;
    this.age = age;
    this.skillset = skillset;
  }
  // Manager objects should inherit all methods from Person:
  Manager.prototype = Object.create(Person.prototype);
  Manager.prototype.constructor = Manager; 

  // Developer constructor
  let Developer = function(name, age, managees){
    this.name = name;
    this.age = age;
    this.managees = managees;
  }

  // Developer objects should inherit all methods from Person:
  Developer.prototype = Object.create(Person.prototype);
  Developer.prototype.constructor = Developer; 
  
  // Developer instance
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instance
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  // use the objects:
  maria.greet('I know Python,Machine Learning');
  pesho.greet('I know JavaScript,Angular,React,Vue');
  gates.greet('I manage Maria Popova,Petar Petrov');