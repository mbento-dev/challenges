import { UpdateHeroUseCase } from "./UpdateHeroUseCase";
import { Request, Response } from "express";

export class UpdateHeroController{
    constructor(
        private updateHeroUseCase: UpdateHeroUseCase,
    ){

    }

    async handle(request:Request, response:Response){
        const {id, name, heroPower, lat, lng} = request.body;

        try {
            await this.updateHeroUseCase.execute({
                id,
                name,
                heroPower,
                lat,
                lng,
            })

            return response.status(200).send();
        } catch (error) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}