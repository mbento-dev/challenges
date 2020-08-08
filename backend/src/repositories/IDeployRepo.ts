import { Occurrence } from "../entities/Occurrence";

export interface IDeployRepo{
    getOccurrence(id?:string): Promise<Occurrence[]>;
    getHeroes(heroPower: number, dangerLevelPower: number, occurrence: Occurrence): Promise<string[]>;

    deploy(occurrence: Occurrence, heroIds:string[]): Promise<void>;
}