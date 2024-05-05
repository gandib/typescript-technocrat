{
    // spread operator
    const bros1: string[] = ['gandib', 'gitisha'];
    const bros2: string[] = ['proma', 'drima'];

    // bros1.push(bros2); // wrong, because we want like ['gandib', 'gitisha','proma', 'drima'] but it be like ['gandib', 'gitisha',['proma', 'drima']], so this is  wrong. but spread operetor ... diye dewa jabe. karon ... dwara copy kora hoy element gulo ke
    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'mezba',
        redux: 'mir'
    }
    const mentors2 = {
        next: 'tonmaoy',
        cloud: 'nahid'
    }
    const allMentors = {
        ...mentors1,
        ...mentors2
    }



    // rest operator
    // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    // }
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: String) => console.log(`Hi ${friend}`));
    }
    greetFriends("abul", 'kabul', 'sabul', 'ubul')







}