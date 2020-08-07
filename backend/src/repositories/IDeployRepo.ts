import { Occurrence } from "../entities/Occurrence";
import { Hero } from "../entities/Hero";

export interface IDeployRepo{
    getOccurrence(): Promise<Occurrence>;
    getHeroes(heroPower: number, dangerLevelPower: number): Promise<string[]>;

    deploy(occurrence: Occurrence, heroIds:string[]): Promise<void>;
}