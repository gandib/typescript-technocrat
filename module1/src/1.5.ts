// rerference type Object

const user: {
    // readonly company: string; // type => readOnly dile value add kora jabe na
    company: 'Manab Enterprise'; // type => literal => ponyo kichu dewa jabe na
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isAdmin: boolean;
} = {
    company: 'Manab Enterprise',
    firstName: "Gandib",
    lastName: "Roy",
    isAdmin: true,
}

