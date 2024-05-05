{
    // mapped type
    const arrayOfNumbers: number[] = [1, 4, 5];
    // const arrayOfStrings: string[] = ['1', '4', '5']; 
    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString());
    console.log(arrayOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    }
    type AreaString = {
        [key in keyof AreaNumber]: string;
    }
    type AreaGeneric<T> = {
        [key in keyof T]: T[key];
    }

    type Height = AreaNumber['height']; // look up type

    const area1: AreaGeneric<{ height: string; width: number }> = {
        height: '100',
        width: 40
    }
    console.log(area1);





}