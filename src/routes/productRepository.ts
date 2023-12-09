import { DatabaseRepository, Id, Query } from "./declarations";
import { Product } from "../entities/product";
import database from "../config/database"
import { NotFound } from "http-errors";


export class productRepository implements DatabaseRepository<Product>{

    async create(data: Partial<Product>, _query?: Query | undefined): Promise<Product> {
        const repository = database.getRepository(Product);
        const product = repository.create(data);
        await repository.save(product);
        return product;
    }

    async list(_query?: Query | undefined): Promise<Product[]> {
        const repository = database.getRepository(Product);
        return repository.find();
    }

    async get(id: Id, _query?: Query | undefined): Promise<Product> {

        const repository = database.getRepository(Product);
        const product = await repository.findOneBy({id: id as any});
        if(!product){throw new NotFound("Product not found");} 
        return product;
    }

    async update(id: Id, data: Product, query?: Query | undefined): Promise<Product> {
        const repository = database.getRepository(Product);

        await repository.update(id, data)

        return this.get(id, query)
    }

    async remove(id: Id, query?: Query | undefined): Promise<Product> {
        const repository = database.getRepository(Product);
        const product = await this.get(id, query);
        repository.delete(id)
        return product
    }
    
}