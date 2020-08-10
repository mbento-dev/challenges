import { IndexHeroUseCase } from "./IndexHeroUseCase";
import { Request, Response } from "express";
import { Hero } from "../../entities/Hero";

export class IndexHeroController{
    constructor(
        private indexHeroUseCase: IndexHeroUseCase,
    ){

    }

    async handle(request: Request, response: Response){
        const { id, name, heropower} = request.headers;

        try {
            const heroes:Hero[] = await this.indexHeroUseCase.execute(id, name, +heropower)
            return response.json(heroes)
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}