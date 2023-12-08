import { DatabaseRepository, Id, Query } from "./declarations";

import database from "../config/database"
import { NotFound } from "http-errors";
import { Purchase } from "../entities/purchase";


export class purchaseRepository implements DatabaseRepository<Purchase>{

    async create(data: Partial<Purchase>, _query?: Query | undefined): Promise<Purchase> {
        const repository = database.getRepository(Purchase);
        const purchase = repository.create(data);
        await repository.save(purchase);
        return purchase;
    }

    async list(_query?: Query | undefined): Promise<Purchase[]> {
        const repository = database.getRepository(Purchase);
        return repository.find();
    }

    async get(id: Id, _query?: Query | undefined): Promise<Purchase> {

        const repository = database.getRepository(Purchase);
        const purchase = await repository.findOneBy({ id: id as any });
        if(!purchase){throw new NotFound("Product not found");} 
        return purchase;
    }

    async update(id: Id, data: Purchase, query?: Query | undefined): Promise<Purchase> {
        const repository = database.getRepository(Purchase);

        await repository.update(id, data)

        return this.get(id, query)
    }

    async remove(id: Id, query?: Query | undefined): Promise<Purchase> {
        const repository = database.getRepository(Purchase);
        const purchase = await this.get(id, query);
        repository.delete(id)
        return purchase;
    }
    
}