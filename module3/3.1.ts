{
    // OOP=> class
    class Animal {

        // parameter properties
        constructor(public name: string, public species: string, public sound: string) {
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard", "dog", "ghew ghew");
    const cat = new Animal("Mini", "cat", "mew mew");

    dog.makeSound();




}