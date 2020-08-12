import { IHeroesRepo } from "../../repositories/IHeroesRepo";
import { IDeleteHeroRequestDTO } from "./DeleteHeroDTO";

export class DeleteHeroUseCase {
    constructor(
        private heroesRepo: IHeroesRepo
    ){

    }

    async execute(data: IDeleteHeroRequestDTO){
        console.log(data)
        const heroExists = await this.heroesRepo.findByName(data.name);

        if(!heroExists) throw new Error('Hero doesn\'t exist.');
        if(heroExists.id != data.id) throw new Error('Invalid Authentication ID.');

        return await this.heroesRepo.delete(data.id);
    }
}