{
    // type guard
    // typeof

    type AlphaNeumeric = string | number;
    const add = (num1: AlphaNeumeric, num2: AlphaNeumeric): AlphaNeumeric => {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        } else {
            return num1.toString() + num2.toString();
        }
    }

    const res1 = add(22, 2);
    console.log(res1);

    // in guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Normal user"
    }
    const adminUser: AdminUser = {
        name: 'Admin user',
        role: 'admin'
    }

    getUser(adminUser);





}