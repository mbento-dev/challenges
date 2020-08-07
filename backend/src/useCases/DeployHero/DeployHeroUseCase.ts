import { IDeployHeroRequestDTO } from "./DeployHeroDTO";
import { IDeployRepo } from "../../repositories/IDeployRepo";
import { Occurrence } from "../../entities/Occurrence";
import { Hero } from "../../entities/Hero";

export class DeployHeroUseCase{
    constructor(
        private deployRepo: IDeployRepo
    ){

    }

    async execute(data: IDeployHeroRequestDTO){
        let occurrence:Occurrence = await this.deployRepo.getOccurrence();
        let heroPowerNecessary: number;

        switch (occurrence.dangerLevel) {
            case 'God':
                heroPowerNecessary = 60;
                let assignedHeroes:string[] = await this.deployRepo.getHeroes(8001, 60);
               
                if(heroPowerNecessary <= 0) {
                    this.deployRepo.deploy(occurrence, assignedHeroes)
                }
                else return false;

                break;
                
            case 'Dragon':
                heroPowerNecessary = 12;
                // busque por heróis com HP <= 15
                break;

            case 'Tiger':
                heroPowerNecessary = 3;
                // busque por heróis com HP <= 4
                break;
                
            case 'Wolf':
                heroPowerNecessary = 1;
                // busque por heróis com HP == 1
                break;
        
            default:
                break;
        }



        /* 
            tentar cumprir o heroPower com heróis S/A/B/C com heroPower equivalentes a 90/15/4/1
            um herói S só cumpre trabalhos com HP >= 60
            um herói A só cumpre trabalhos com HP >= 12
            um herói B só cumpre trabalhos com HP >= 3
            um herói C aceita qualquer trabalho
        */
    }
}

        /*
        let heroPowerNecessary: Number;
        */