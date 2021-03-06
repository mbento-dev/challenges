import { IHeroesRepo } from "../../repositories/IHeroesRepo";
import { ICreateHeroRequestDTO } from "./CreateHeroDTO";
import { Hero } from "../../entities/Hero";

export class CreateHeroUseCase {
    constructor(
        private heroesRepo: IHeroesRepo
    ){

    }

    async execute(data: ICreateHeroRequestDTO){
        const heroAlreadyExists = await this.heroesRepo.findByName(data.name);

        if(heroAlreadyExists){
            throw new Error("Hero already exists.");
        }

        const hero = new Hero(data);

        return await this.heroesRepo.save(hero);
    }
}