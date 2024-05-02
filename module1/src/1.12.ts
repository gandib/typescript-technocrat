{
    // nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log('searching');
        } else {
            console.log('there is nothing to search');
        }
    }
    searchName(null)



    // unknown type, typeof
    const getSpeedInMetrePerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
        } else {
            console.log('Wrong input');
        }
    }
    getSpeedInMetrePerSecond(111)


    // never type. kono type return na korle never use korte hobe
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError('error dekhlam')




}