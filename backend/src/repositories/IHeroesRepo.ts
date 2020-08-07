import { Hero } from "../entities/Hero";

export interface IHeroesRepo{
    findByName(name: string): Promise<Hero>;
    findByRank(rank: string): Promise<Hero>;

    save(hero: Hero): Promise<void>;
}