import {IOccurrenceRepo} from '../../repositories/IOccurrencesRepo'

export class indexOccurrencesUseCase{
    constructor(
        private occurrencesRepo: IOccurrenceRepo
    ){

    }

    async execute(dangerLevel?: string){
        if(dangerLevel) return this.occurrencesRepo.findByDL(dangerLevel);
        return this.occurrencesRepo.index();
    }

}