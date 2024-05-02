{

    // union type
    type FrontEndDeveloper = 'junior developer' | 'senior developer';
    type FullStackEndDeveloper = 'frontend developer' | 'expert developer';
    type Developer = FrontEndDeveloper | FullStackEndDeveloper;

    const newDeveloper: FrontEndDeveloper = "junior developer";
    const newDeveloper2: Developer = "expert developer";


    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
    }

    const user1: User = {
        name: "Gandib",
        email: "gandibroy11@gmail.com",
        gender: "male"
    }
    const user2: User = {
        name: "Tanni",
        email: "tannidas2022@gmail.com",
        gender: "female"
    }


    // intersection

    type FrontDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontDeveloper & BackendDeveloper;
    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['stml', 'css', 'node'],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }


}