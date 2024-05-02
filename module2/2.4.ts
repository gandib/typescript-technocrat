{
    // generic interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: X;
    }

    type SamsungWatch = {
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper: Developer<SamsungWatch> = {
        name: "proma",
        computer: {
            brand: 'Dell',
            model: 'a347',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Samsung',
            model: 'rrwerw777',
            display: 'Amoled'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YahamaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YahamaBike> = {
        name: "drima",
        computer: {
            brand: 'HP',
            model: 'a347',
            releaseYear: 2021
        },
        smartWatch: {
            brand: 'Apple',
            model: 'rrwerw777',
            display: 'OLED',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yahamaha',
            engineCapacity: '100 CC'
        }
    }








}