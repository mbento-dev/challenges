import { DeleteHeroUseCase } from "./DeleteHeroUseCase";
import { Request, Response } from "express";

export class DeleteHeroController{
    constructor(
        private deleteHeroUseCase:DeleteHeroUseCase
    ){

    }

    async handle(request:Request, response:Response){
        const {id, name} = request.body;

        try {
            await this.deleteHeroUseCase.execute({
                id,
                name,
            })
            return response.status(200).send();
        } catch (error) {
            return response.status(401).json({
                message: error.message || 'Unexpected authentication error'
            });
        }
    }
}