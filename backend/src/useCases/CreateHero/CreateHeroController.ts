import { CreateHeroUseCase } from "./CreateHeroUseCase";
import { Request, Response } from "express";

export class CreateHeroController{
    constructor (
        private createHeroUseCase: CreateHeroUseCase,
    ){

    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, heroPower, lat, lng} = request.body;

        try {
            const id = await this.createHeroUseCase.execute({
                name,
                heroPower,
                lat,
                lng
            })
            if(!id) throw new Error('Error while creating hero')
            
            return response.status(201).json({
                id: id
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}