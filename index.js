Animal.prototype.makeSound=function(){
    return `the aminal is ${this.name} and the sound is ${this.sound}.`
}

function Animal(name,sound){
    this.name=name;
    this.sound=sound;
}
let a1=new Animal('dog','brak')
console.log(a1);
console.log(a1.makeSound());



Object.setPrototypeOf(Dog.prototype,Animal.prototype)
Dog.prototype.fetch=function(){
    console.log(`${this.name} fetches the ball!`);
}
function Dog(name,sound,bread){
    Animal.call(this,name,sound)
    this.bread=bread;

}
let a2= new Dog('Buddy','Woof','Labrador')
console.log(a2);
console.log(a2.fetch());
console.log(a2.makeSound());