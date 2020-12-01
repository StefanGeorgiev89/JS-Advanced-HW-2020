//Create a Person Constructor with following fields:
function  Person(name,age){
    // const obj = {};
    // obj.name = name;
    // obj.age = age;
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`);
    }
}
//Create a Developer Constructor with following fields:
function Developer(name,age,skillset){
    this.name = name;
    this.age = age;
    this.skillset = new Array(skillset);
}
//Create a Manager Constructor with following fields:
function Manager(name, age, managees) {
    this.name = name;
    this.age = age;
    this.managees = new Array(managees);
}

// person
let person1 = new Person("Ivan","22");
person1.greet()

//add new method in prototype
Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`);
};

//manager
let manager1 = new Manager("Mitko","24",["web developer","design"]);
console.log(manager1);

//developer
let developer1 = new Developer("Stefan","30",["web developer","design"]);
console.log(developer1);

//add new method in prototype
Developer.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} year old`);
};

var dev = new Developer('Dany', '24');
dev.greet();

//create new object from Developer
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

var devTwo = new Developer("Pepo","31");
devTwo.greet();
