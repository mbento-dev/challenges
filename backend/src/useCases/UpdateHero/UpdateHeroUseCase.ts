import { IHeroesRepo } from "../../repositories/IHeroesRepo";
import { IUpdateHeroRequestDTO } from "./UpdateHeroDTO";

export class UpdateHeroUseCase{
    constructor(
        private heroesRepo: IHeroesRepo
    ){

    }

    async execute(data: IUpdateHeroRequestDTO){
        const heroExists = await this.heroesRepo.findByName(data.name);

        if(!heroExists) throw new Error('Hero doesn\'t exists.');
        if(heroExists.id != data.id) throw new Error('Invalid Authentication ID.');

        return await this.heroesRepo.update(data);
    }
}