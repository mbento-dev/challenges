import { IHeroesRepo } from "../../repositories/IHeroesRepo";
import { IUpdateHeroRequestDTO } from "./UpdateHeroDTO";

export class UpdateHeroUseCase{
    constructor(
        private heroesRepo: IHeroesRepo
    ){

    }

    async execute(data: IUpdateHeroRequestDTO){
        const heroExists = await this.heroesRepo.findById(data.id);

        if(!heroExists) throw new Error('Hero doesn\'t exists.');

        return await this.heroesRepo.update(data);
    }
}