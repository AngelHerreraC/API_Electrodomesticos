import { DatabaseRepository, Id, Query } from "./declarations";
import { Promotion } from "../entities/promotion";
import database from "../config/database"
import { NotFound } from "http-errors";


export class promoRepository implements DatabaseRepository<Promotion>{

    async create(data: Partial<Promotion>, _query?: Query | undefined): Promise<Promotion> {
        const repository = database.getRepository(Promotion);
        const product = repository.create(data);
        await repository.save(product);
        return product;
    }

    async list(_query?: Query | undefined): Promise<Promotion[]> {
        const repository = database.getRepository(Promotion);
        return repository.find();
    }

    async get(id: Id, _query?: Query | undefined): Promise<Promotion> {

        const repository = database.getRepository(Promotion);
        const product = await repository.findOneBy({id: id as any});
        if(!product){throw new NotFound("Product not found");} 
        return product;
    }

    async update(id: Id, data: Promotion, query?: Query | undefined): Promise<Promotion> {
        const repository = database.getRepository(Promotion);

        await repository.update(id, data)

        return this.get(id, query)
    }

    async remove(id: Id, query?: Query | undefined): Promise<Promotion> {
        const repository = database.getRepository(Promotion);
        const product = await this.get(id, query);
        repository.delete(id)
        return product
    }
    
}