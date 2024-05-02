{
    // generic function
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }


    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');
    const resGeneric2 = createArrayWithGeneric<boolean>(true);

    interface User { id: number; name: string; };
    const resGenericObj = createArrayWithGeneric<User>({ id: 1, name: 'Gandib' });


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }


    const resGenericTuple = createArrayWithTuple<string, number>('Bangladesh', 1971);
    const resGenericTuple2 = createArrayWithTuple<boolean, string>(true, 'hh');

    interface User { id: number; name: string; };
    const resGenericTupleObj2 = createArrayWithTuple<string, User>('Developer', { id: 1, name: 'Gandib' });


    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Dev";
        return {
            ...student,
            course
        }
    }
    type Student1 = {
        name: string;
        email: string;
        devType: string;
    }

    const student1 = addCourseToStudent<Student1>({ name: 'X', email: 'a@bc.com', devType: 'Next Level' });
    const student2 = addCourseToStudent({ name: 'X', email: 'a@bc.com', hasWatch: 'Apple Watch' });



}