import { DatabaseRepository, Id, Query } from "./declarations";
import { User } from "../entities/user";
import database from "../config/database"
import { NotFound } from "http-errors";


export class userRepository implements DatabaseRepository<User>{

    async create(data: Partial<User>, _query?: Query | undefined): Promise<User> {
        const repository = database.getRepository(User);
        const user = repository.create(data);
        await repository.save(user);
        return user;
    }

    async list(_query?: Query | undefined): Promise<User[]> {
        const repository = database.getRepository(User);
        return repository.find();
    }

    async get(id: Id, _query?: Query | undefined): Promise<User> {

        const repository = database.getRepository(User);
        const user = await repository.findOneBy({id: id as any});
        if(!user){throw new NotFound("User not found");} 
        return user;
    }

    update(_id: Id, _data: User, _query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }

    remove(_id: Id, _query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
}