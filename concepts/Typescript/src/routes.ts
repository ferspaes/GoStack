import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {

    const user = createUser({
        email: 'fernando.js8@outlook.com',
        password: '12345678',
        name: 'Fernando de Jesus dos Santos',
        techs: [
            'React', 
            'Node', 
            '.Net', 
            'Typescript', 
            'React Native',
            {
                title: 'Javascript',
                experience: 100
            }
        ]
    });

    console.log(user.name);

    return response.json({ user });
};