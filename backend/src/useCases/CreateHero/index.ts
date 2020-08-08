import { CreateHeroRepo } from "../../repositories/implementations/CreateHeroRepo";
import { CreateHeroUseCase } from "./CreateHeroUseCase";
import { CreateHeroController } from "./CreateHeroController"

const createHeroRepo = new CreateHeroRepo();

const createHeroUseCase = new CreateHeroUseCase(createHeroRepo);

const createHeroController = new CreateHeroController(createHeroUseCase);

export { createHeroUseCase, createHeroController}
