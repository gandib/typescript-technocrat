{
    // type alias
    type Student = {
        name: string;
        age: number,
        gender: string,
        contactNo?: string,
        address: string,
    }


    const student1: Student = {
        name: 'Gandib',
        age: 28,
        gender: 'male',
        contactNo: '0183834',
        address: 'sunamganj'
    }
    const student2: Student = {
        name: 'Drima',
        age: 22,
        gender: 'female',
        address: 'sunamganj'
    }

    const student3: Student = {
        name: 'tanni',
        age: 26,
        gender: 'female',
        contactNo: '284842',
        address: 'Sunamganj'
    }

    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "Gandib";
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;


}