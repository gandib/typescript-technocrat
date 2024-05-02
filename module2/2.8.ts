{
    // promise
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data = 'something';
            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data!');
            }
        })
    }

    // calling promise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        console.log(data);
        return data
    }

    showData();


    type Something = { something: string; }
    const createPromise2 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something...' };
            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data!');
            }
        })
    }

    // calling promise function
    const showData2 = async (): Promise<Something> => {
        const data: Something = await createPromise2();
        console.log(data);
        return data
    }

    showData2();

    type ToDo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async (): Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    }

    getToDo();


}