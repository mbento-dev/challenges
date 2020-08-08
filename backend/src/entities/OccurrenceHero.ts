import { Occurrence } from "./Occurrence";
import { Hero } from "./Hero";

export class OccurrenceHero{
    public readonly id_occurence: string;
    public readonly id_hero: string[];

    constructor(props: OccurrenceHero){
        Object.assign(this, props);
    }
}