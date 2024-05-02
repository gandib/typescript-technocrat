{
    // interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole = User1 & { role: string };
    interface UserWithRole2 extends User2 {
        role: string;
    }
    // interface UserWithRole2 extends User1 {
    //     role: string;
    // }


    // const user1: UserWithRole = {
    //     name: "Gandib",
    //     age: 28,
    //     role: 'manager'
    // }

    const user1: UserWithRole2 = {
        name: "Gandib",
        age: 28,
        role: 'manager'
    }


    // const user1: User1 = {
    //     name: 'Gandib',
    //     age: 28
    // }


    // const user1: User2 = {
    //     name: 'Gandib',
    //     age: 28
    // }


    type Roll1 = number[];
    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber: Roll1 = [1, 2, 3];
    const rollNumber2: Roll2 = [1, 2, 3];


    type Add1 = (num1: number, num2: number) => number;
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add1 = (num1, num2) => num1 + num2;
    const add2: Add2 = (num1, num2) => num1 + num2;






}