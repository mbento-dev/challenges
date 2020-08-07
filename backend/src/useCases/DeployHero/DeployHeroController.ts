import { DeployHeroUseCase } from "./DeployHeroUseCase";
import { Request, Response } from "express";
import { Occurrence } from "../../entities/Occurrence";

export class DeployHeroController{
    constructor (
        private deployHeroUseCase: DeployHeroUseCase,
    ){

    }

    async handle(request: Request, response: Response): Promise<boolean>{
        const { id } = request.body
        return await this.deployHeroUseCase.execute(id)
    }
}