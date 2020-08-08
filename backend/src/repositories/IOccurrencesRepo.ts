import { Occurrence } from "../entities/Occurrence";

export interface IOccurrenceRepo{
    index(): Promise<Occurrence[]>;
    findByDL(dangerLevel: string): Promise<Occurrence[]>;
}