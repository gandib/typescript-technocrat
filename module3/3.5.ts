{
    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        // private dile _ dite hoy, r ei class er baire access kora jay na, kintu onyo ekti class jeti ei class ke extends korbe maane tokhon child class e access dite hole private er jaygay protected dite hobe
        protected _balance: number;
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }
        public getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }

    const poorManAccount = new BankAccount(111, "Poor", 20);
    // poorManAccount._balance = 0;
    poorManAccount.addDeposit(10);
    const myBalance = poorManAccount.getBalance();
    console.log(myBalance);









}