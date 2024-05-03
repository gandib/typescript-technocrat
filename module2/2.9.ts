{
    // conditional type
    type a1 = null;
    type b1 = string;

    type x = a1 extends null ? true : false; // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;



    // car, bike, ship, tractor ache kina check korbo
    type Rich = {
        car: string;
        bike: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends keyof Rich ? true : false;
    type HasBike = CheckVehicle<'bike'>;
    type HasTractor = CheckVehicle<'tractor'>;










}