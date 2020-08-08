import { IHeroesRepo } from "../../repositories/IHeroesRepo";
import { Hero } from "../../entities/Hero";

export class IndexHeroUseCase{
    constructor(
        private heroesRepo: IHeroesRepo,
    ){

    }

    async execute(id?:string, name?:string, heroPower?:number): Promise<Hero[]>{
        if(id) {
            let hero:Hero[] = [];
            hero.push(await this.heroesRepo.findById(id));
            return hero;
        } 
        if(name) {
            let hero:Hero[] = [];
            hero.push(await this.heroesRepo.findByName(name));
            return hero;
        } 
        if(heroPower) {
            return await this.heroesRepo.findByHP(heroPower);
        } 
        return await this.heroesRepo.index();
    }
}