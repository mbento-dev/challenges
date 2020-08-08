import { DeployHeroUseCase } from "./DeployHeroUseCase";

export class DeployHeroController{
    constructor (
        private deployHeroUseCase: DeployHeroUseCase,
    ){

    }

    async handle(): Promise<boolean>{
        return await this.deployHeroUseCase.execute()
    }
}