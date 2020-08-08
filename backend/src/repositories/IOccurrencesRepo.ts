import { CompleteOccurrence } from "../entities/CompleteOccurrence";

export interface IOccurrenceRepo{
    index(): Promise<CompleteOccurrence[]>;
    findByDL(dangerLevel: string): Promise<CompleteOccurrence[]>;
}