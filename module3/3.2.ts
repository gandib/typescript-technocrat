{
    // OOP => inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hour/s`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student1 = new Student("Mr X", 20, "Y");
    student1.getSleep(5);

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} class`);
        }
    }

    const teacher1 = new Teacher("Mr Teacher", 40, "BD", "Lecturer");
    teacher1.takeClass(4);





}