import { DeployHeroRepo } from "../../repositories/implementations/DeployHeroRepo";
import { DeployHeroUseCase } from "./DeployHeroUseCase";
import { DeployHeroController } from "./DeployHeroController";

const deployHeroRepo = new DeployHeroRepo()

const deployHeroUseCase = new DeployHeroUseCase(deployHeroRepo);

const deployHeroController = new DeployHeroController(deployHeroUseCase);

export { deployHeroUseCase, deployHeroController }