import { IndexHeroUseCase } from "./IndexHeroUseCase";
import { Request, Response } from "express";
import { Hero } from "../../entities/Hero";

export class IndexHeroController{
    constructor(
        private indexHeroUseCase: IndexHeroUseCase,
    ){

    }

    async handle(request: Request, response: Response){
        const { id, name, heroPower} = request.body;

        try {
            const heroes:Hero[] = await this.indexHeroUseCase.execute(id, name, heroPower)
            return response.json(heroes)
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}