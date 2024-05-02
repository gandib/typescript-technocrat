{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship'; // manually
    type Owner2 = keyof Vehicle;


    const person: Owner2 = 'bike';

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user = {
        name: 'Gandib',
        age: 28,
        address: 'Sunamganj'
    };

    const car = {
        model: 'Toyota',
        Year: 2022
    };

    const result = getPropertyValue(user, 'name');
    const result2 = getPropertyValue(car, 'model');





}