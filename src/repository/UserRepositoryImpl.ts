import UserRepository from "../interfaces/UserRepository";
import User from "../models/User.model";

class UserRepositoryImpl implements UserRepository {
    save(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    retrieveAll(searchParams: { fname: string; lname: string; emailAddress: string; active: boolean; }): Promise<User[] | null> {
        throw new Error("Method not implemented.");
    }
    retrieveById(userId: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    retrieveByActiveIndicator(active: boolean): Promise<User[] | null> {
        throw new Error("Method not implemented.");
    }
    retrieveByDeletedIndicator(deleted: boolean): Promise<User[] | null> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<number> {
        throw new Error("Method not implemented.");
    }
    delete(userId: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deleteAll(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
}