{
    // utility type
    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>


    // omit
    type ContactInfo = Omit<Person, 'name' | 'age'>;

    // sobgulo type ke required banate hole
    type PersonRequired = Required<Person>;

    // sobgulo  type ke optional banate
    type PersonPartial = Partial<Person>;

    // readonly
    type PersonReadonly = Readonly<Person>;
    const person1: PersonReadonly = {
        name: 'Mr X',
        age: 200,
        contactNo: "0184"
    }


    // person1.name = 'Mr Y'; // change kora jabe na, error dekhabe


    // record

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>;

    const obj: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd',
    }

    const emptyObj: Record<string, unknown> = {
        name: "Gandib",
        age: 28,
    };



}