{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        // child class e access dite hole private er jaygay protected hobe
        protected _balance: number;
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }


        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        get balance() {
            return this._balance;
        }

        // getBalance() {
        //     return this._balance;
        // }
    }



    const poorManAccount = new BankAccount(111, "Poor", 30);
    // poorManAccount._balance = 0;
    // poorManAccount.addDeposit(10); // function call kore
    // const myBalance = poorManAccount.getBalance(); // function call kore

    poorManAccount.deposit = 10; // property er moto call kore
    const myBalance = poorManAccount.balance; // property er moto call kore

    console.log(myBalance);









}