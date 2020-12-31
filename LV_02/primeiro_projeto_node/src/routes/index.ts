import { Router } from 'express';
import createUser, { UserObject } from '../services/CreateUser';
const routes = Router();

const user = [{}];

routes.post('/users', (request, response) => {
    const newUser = createUser(request.body);
    
    user.push(newUser)
    
    return response.json(user);
});

routes.get('/', (request, response) => {
    return response.json(user);
});

export default  routes;