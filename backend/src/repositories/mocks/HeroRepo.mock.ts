import { IHeroesRepo } from "../IHeroesRepo";
import { Hero } from "../../entities/Hero";

export class HeroMockRepo implements IHeroesRepo{
    private heroes:Hero[] = [
        {
            id: '0',
            name: 'mockingBirb',
            heroPower: 90,
            lat: 33,
            lng: 33
        },
        {
            id: '1',
            name: 'mockingJay',
            heroPower: 15,
            lat: 33,
            lng: 33
        }
    ];

    async findByName(name: string): Promise<Hero> {
        return this.heroes.find(hero => hero.name == name);
    }

    async findById(id: string): Promise<Hero> {
        return this.heroes.find(hero => hero.id == id);
    }
    
    async findByHP(heroPower: number): Promise<Hero[]> {
        return this.heroes.filter(hero => hero.heroPower == heroPower);
    }
    
    async index(): Promise<Hero[]> {
        return this.heroes;
    }

    async save(hero: Hero): Promise<string> {
        try {
            this.heroes.push(hero)
            return hero.id;
        } catch (error) {
            return null;
        }
    }

    async delete(heroId: string): Promise<void> {
        this.heroes.splice(this.heroes.findIndex(hero => hero.id == heroId), 1)
    }
    
    async update(hero: Hero): Promise<void> {
        const index = this.heroes.findIndex(temp => temp.id == hero.id);
        this.heroes[index] = hero;
    }

}