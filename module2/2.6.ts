{
    // constraint => roles force kora.
    // ami je type ta recieve korbo ta extends korbe sei typegulo ke jegulo ke ami chaibo je ekjon student er thaktei hobe.jemon jodi boli jekono object dilei hobe na, sekhane id, name r email thaktei hobe.

    const addCourseToStudent = <T extends { id: number; name: string; email: string; }>(student: T) => {
        const course = "Next Level Web Dev";
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({ id: 1, name: 'X', email: 'a@bc.com', devType: 'Next Level' });
    const student2 = addCourseToStudent({ id: 2, name: 'X', email: 'a@bc.com', hasWatch: 'Apple Watch' });









}