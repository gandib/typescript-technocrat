{ // {} dite hobe, ta na hole ony file same name e kono kichu likhle error asbe, eta practice er jonyo.
    // function

    // normal function, chaile defaulty value o dewa jabe
    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }

    // add(2, true);

    // arrow function
    const add2 = (num1: number, num2: number): number => num1 + num2;

    // object er bhetor function ke method bole
    const poorUser = {
        name: 'Gandib',
        balance: 0,
        // addBalance(balance: number): number {
        //     return this.balance + balance;
        // }
        // return type string dile
        addBalance(balance: number): string {
            return `My new balance is: ${this.balance + balance}`;
        }
    }

    const arr: number[] = [1, 2, 4];
    const newArray: number[] = arr.map((elem: number): number => elem * elem);

}