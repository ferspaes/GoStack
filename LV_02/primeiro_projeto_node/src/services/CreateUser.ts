interface TechsObject {
    description: String,
    experience: Number,
}

export interface UserObject {
    name: String,
    email: String,
    password: String,
    techs: Array<TechsObject>
}

export default function createUser({ email, name, password, techs}: UserObject){
    const user = {
        name,
        email,
        password,
        techs
    };

    return user;
}