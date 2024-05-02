{
    // generic type
    // type GenericArray<param> = Array<param>;
    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [2, 4, 6];
    // const rollNumbers: Array<number> = [2, 4, 6];
    const rollNumbers: GenericArray<number> = [2, 4, 6];

    // const mentors: string[] = ['x', 'y', 'z'];
    const mentors: GenericArray<string> = ['x', 'y', 'z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];
    interface User {
        name: string;
        age: number;
    }

    // const user: GenericArray<{ name: string; age: number }> = [
    const user: GenericArray<User> = [
        {
            name: "Gandib",
            age: 28
        },
        {
            name: "Tanni",
            age: 26
        }
    ]

    // generic tupple
    type GenericTuple<X, Y> = [X, Y];
    const manush: GenericTuple<string, string> = ['x', 'y'];
    const userWithId: GenericTuple<number, { name: string, email: string }> = [123, { name: "Gandib", email: "a@b.com" }];





}