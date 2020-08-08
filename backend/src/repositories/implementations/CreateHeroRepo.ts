import { IHeroesRepo } from "../IHeroesRepo";
import { Hero } from "../../entities/Hero";
import { connection } from "../../database/connection";

export class CreateHeroRepo implements IHeroesRepo{
    async findByName(name: string): Promise<import("../../entities/Hero").Hero> {
        return (await connection('heroes').select('*').where('name', name).from<Hero>('heroes')).pop()
    }

    async save(hero: Hero): Promise<string> {
        try {
            connection('heroes').insert({
                 id: hero.id, 
                 name: hero.name,
                 heroPower: hero.heroPower,
                 lat: hero.lat,
                 lng: hero.lng,
            })
            return hero.id;
        } catch (error) {
            return null;
        }
    }

}