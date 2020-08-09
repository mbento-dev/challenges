import { IOccurrenceRepo } from "../IOccurrencesRepo";
import { CompleteOccurrence } from "../../entities/CompleteOccurrence";


export class OccurrenceMockRepo implements IOccurrenceRepo{
    private occurrences:CompleteOccurrence[] = [
    {
        id: '0',
        name: ['mockingBirb', 'mockingJay'],
        monsterName: 'mockingBirb',
        dangerLevel: 'God',
        lat: 33,
        lng: 33
    },
    {
        id: '1',
        name: ['mockingBirb', 'mockingJay'],
        monsterName: 'mockingJay',
        dangerLevel: 'Tiger',
        lat: 33,
        lng: 33
    }
];
    async index(): Promise<CompleteOccurrence[]> {
        //select 
        return this.occurrences;
    }
    async findByDL(dangerLevel: string): Promise<CompleteOccurrence[]> {
        return this.occurrences.filter(occurrence => occurrence.dangerLevel === dangerLevel)
    }

}