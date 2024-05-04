{
    // abstraction
    // interface diye abstraction
    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implememtation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("I am starting the car engine.");
        }
        stopEngine(): void {
            console.log("I am stoping the car engine.");
        }
        move(): void {
            console.log("I am moving the car engine.");
        }
        test() {
            console.log("I am testing.");
        }
    }

    const toyota = new Car1();
    console.log(toyota.test());



    // abstract class diye abstraction
    // idea
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log("I am testing.");
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("I am starting the car engine.");
        }
        stopEngine(): void {
            console.log("I am stoping the car engine.");
        }
        move(): void {
            console.log("I am moving the car engine.");
        }

    }






}





















