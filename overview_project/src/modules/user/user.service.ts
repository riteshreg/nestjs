import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    
    private readonly users = [{age:10}];

    getAllUsers(){
        return this.users;
    }

}
