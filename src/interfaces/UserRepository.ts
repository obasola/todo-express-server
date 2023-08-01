import User from '../models/User.model';

interface UserRepository {
    save(user: User): Promise<User>;
    retrieveAll(searchParams: {fname: string, lname: string, emailAddress: string, active: boolean}): Promise<User[] | null>;
    retrieveById(userId: number) : Promise<User | null>;
    retrieveByActiveIndicator(active: boolean) : Promise<User[] | null>
    retrieveByDeletedIndicator(deleted: boolean) : Promise<User[] | null> 
    update(user: User) : Promise<number>;
    delete(userId: number) : Promise<number>;
    deleteAll() : Promise<number>;
}

export default UserRepository;