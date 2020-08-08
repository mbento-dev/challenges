import { IHeroesRepo } from "../IHeroesRepo";
import { Hero } from "../../entities/Hero";
import { connection } from "../../database/connection";

export class HeroRepo implements IHeroesRepo{
    async findByName(name: string): Promise<import("../../entities/Hero").Hero> {
        return (await connection('heroes').select('*').where('name', name).from<Hero>('heroes')).pop()
    }

    async findById(id: string): Promise<Hero> {
        return (await connection('heroes').select('*').where('id', id).from<Hero>('heroes')).pop()
    }
    
    async findByHP(heroPower: number): Promise<Hero[]> {
        return await connection('heroes').select('*').where('heroPower', heroPower).from<Hero>('heroes')
    }
    
    async index(): Promise<Hero[]> {
        return await connection('heroes').select('*').from<Hero>('heroes')
    }

    async save(hero: Hero): Promise<string> {
        try {
            await connection('heroes').insert({
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

    async delete(heroId: string): Promise<void> {
        await connection('heroes').where('id', heroId).del()
    }
    
    async update(hero: Hero): Promise<void> {
        await connection('heroes').where('id', hero.id).update({
            name: hero.name,
            heroPower: hero.heroPower,
            lat: hero.lat,
            lng: hero.lng,
        })
    }

}