{
    // ternary operator
    const age = 25;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log(isAdult);



    // nullish coalescing operator
    // null / undefined er upor jodi decision make korte hoy. null or undefines er uopr bhitti kmore default value set korte hole nullish use korte hobe

    const isAuthenticated = null; // or undefined
    const result1 = isAuthenticated ?? 'Guest';
    console.log({ result1 });



    // optional chaining

    type User = {
        name: string,
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanetAddress?: string;
        }
    }

    const user: User = {
        name: "Gandib",
        address: {
            city: 'sunamganj',
            road: "raypara",
            presentAddress: 'raypara'
        }
    }
    const permanetAddress = user?.address?.permanetAddress ?? "No permanent Address";
    console.log({ permanetAddress });




}