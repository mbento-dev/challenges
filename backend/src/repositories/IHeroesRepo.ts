import { Hero } from "../entities/Hero";

export interface IHeroesRepo{
    findByName(name: string): Promise<Hero>;
    findById(id: string): Promise<Hero>;
    findByHP(heroPower: number): Promise<Hero[]>;
    index(): Promise<Hero[]>;

    save(hero: Hero): Promise<string>;
    delete(heroId: string): Promise<void>;
    update(hero: Hero): Promise<void>;
}