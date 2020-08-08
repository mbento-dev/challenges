import { IOccurrenceRepo } from "../IOccurrencesRepo";
import { Occurrence } from "../../entities/Occurrence";
import { connection } from "../../database/connection";
import { CompleteOccurrence } from "../../entities/CompleteOccurrence";


export class OccurrenceRepo implements IOccurrenceRepo{
    async index(): Promise<CompleteOccurrence[]> {
        //select 
        return await connection('log_occurrences')
            .join('complete_occurrences', 'complete_occurrences.id', '=', 'log_occurrences.occurrenceId')
            .join('heroes', 'heroes.id', '=', 'log_occurrences.heroId')
            .select<CompleteOccurrence[]>(
                'heroes.name',
                'complete_occurrences.*')
    }
    async findByDL(dangerLevel: string): Promise<CompleteOccurrence[]> {
        return await connection('log_occurrences')
            .join('complete_occurrences', 'complete_occurrences.id', '=', 'log_occurrences.occurrenceId')
            .join('heroes', 'heroes.id', '=', 'log_occurrences.heroId')
            .select<CompleteOccurrence[]>(
                'heroes.name',
                'complete_occurrences.*')
            .where('complete_occurrences.dangerLevel', dangerLevel);
    }

}