import { IndexOccurrencesUseCase } from "./IndexOccurrencesUseCase";
import { Request, Response } from "express";
import { CompleteOccurrence } from "../../entities/CompleteOccurrence";

export class IndexOccurrencesController{
    constructor(
        private indexOccurrencesUseCase: IndexOccurrencesUseCase
    ){

    }

    async handle(request: Request, response: Response){
        const {dangerLevel} = request.headers;
        try {
            const occurrences:CompleteOccurrence[] = await this.indexOccurrencesUseCase.execute(dangerLevel)
            return response.status(200).json(occurrences)   
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected Error'
            })
        }
        
    }
}