{
    // static
    class Counter {
        // count: number = 0;
        static count: number = 0;
        static increament() {
            // return this.count = this.count + 1;
            return Counter.count = Counter.count + 1;
        }
        static decreament() {
            // return this.count = this.count - 1;
            return Counter.count = Counter.count - 1;
        }
    }

    // const instance1 = new Counter();
    // console.log(instance1.increament()); // 1 => different memory

    // const instance2 = new Counter();
    // console.log(instance2.increament()); // 1 => different memory. ei instance e r aager increament theke barbe na, karon eta alada instance. kintu static dile onyo instance e o increament hobe. tahole 2 hobe ekhane. abar method ke o static dile instnce diye call kora jabe na, class diye call korte hobe

    const instance1 = Counter.increament();
    const instance2 = Counter.increament();
    const instance3 = Counter.decreament();
    console.log(instance1);
    console.log(instance2);
    console.log(instance3);











}