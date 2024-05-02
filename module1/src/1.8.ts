{
    // destructuring
    const user = {
        id: 23342,
        name: {
            firstName: "Gandib",
            lastName: 'Roy'
        },
        country: 'Bangladesh'
    }

    // name alias
    const { id, name: { firstName: fName }, country } = user; //firstName: fName alias kora, firstName: string ebhabe dewa jabe na. alias maane onyo naam dewa

    // array destructuring
    const myFriends = ['sham', 'ram', 'jodu', 'modhu', 'krishna'];
    const [, , bestFriend, ...rest] = myFriends; // jodhu ke jodi best friend banate chai ebong er aager name gulo ke kono variable e na rakhte chai.




}