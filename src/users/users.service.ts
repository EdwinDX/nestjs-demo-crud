/* eslint-disable prettier/prettier */
import { Get, HttpException, Injectable } from '@nestjs/common';
import { USERS } from './users.mock';

@Injectable()
export class UsersService {
    users = USERS;
    getUsers(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.users)
        })
    }
    getUser(userId: number): Promise<any> {
        const id = Number(userId);
        return new Promise(resolve => {
            const user = this.users.find(user => user.id === id);
            if (!user) {
                throw new HttpException('User does not exist', 404)
            }
            resolve(user)
        })
    }
    addUser(user: { id: number; name: string; }): Promise<any> {
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        })
    }
}
