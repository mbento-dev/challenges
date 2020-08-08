import { IDeployRepo } from "../../repositories/IDeployRepo";
import { Occurrence } from "../../entities/Occurrence";

export class DeployHeroUseCase{
    constructor(
        private deployRepo: IDeployRepo
    ){

    }

    async execute(){
        let occurrence:Occurrence 
        let manageToDeploy: boolean;

        do {
            //Pega a primeira ocorrencia no banco
            occurrence = await this.deployRepo.getOccurrence();
            if(!occurrence) return false;
            let heroPowerNecessary: number;
            let assignedHeroes:string[];
            
            //Ajusta os níveis de perigo para níveis numéricos
            switch (occurrence.dangerLevel) {
                case 'God':
                    heroPowerNecessary = 60;
                    assignedHeroes = await this.deployRepo.getHeroes(8001, heroPowerNecessary, occurrence);
                   
                    if(+assignedHeroes.pop() <= 0) {
                        this.deployRepo.deploy(occurrence, assignedHeroes)
                        manageToDeploy = true;
                    }
                    else manageToDeploy = false;
                    break
                    
                case 'Dragon':
                    heroPowerNecessary = 12;
                    assignedHeroes = await this.deployRepo.getHeroes(15, heroPowerNecessary, occurrence);
                   
                    if(+assignedHeroes.pop() <= 0) {
                        this.deployRepo.deploy(occurrence, assignedHeroes)
                        manageToDeploy = true;
                    }
                    else manageToDeploy = false;
                    break
    
                case 'Tiger':
                    heroPowerNecessary = 3;
                    assignedHeroes = await this.deployRepo.getHeroes(4, heroPowerNecessary, occurrence);
                   
                    if(+assignedHeroes.pop() <= 0) {
                        this.deployRepo.deploy(occurrence, assignedHeroes)
                        manageToDeploy = true;
                    }
                    else manageToDeploy = false;
                    break
                    
                case 'Wolf':
                    heroPowerNecessary = 1;
                    assignedHeroes = await this.deployRepo.getHeroes(1, heroPowerNecessary, occurrence);
                    
                    if(+assignedHeroes.pop() <= 0) {
                        this.deployRepo.deploy(occurrence, assignedHeroes)
                        manageToDeploy = true;
                    }
                    else manageToDeploy = false;
                    break
            
                default:
                    break;
            }
        } while (occurrence);
        return manageToDeploy
    }
}

        /*
        let heroPowerNecessary: Number;
        */