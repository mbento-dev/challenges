import { HeroRepo } from "../../repositories/implementations/HeroRepo";
import { CreateHeroUseCase } from "./CreateHeroUseCase";
import { CreateHeroController } from "./CreateHeroController"

const heroRepo = new HeroRepo();

const createHeroUseCase = new CreateHeroUseCase(heroRepo);

const createHeroController = new CreateHeroController(createHeroUseCase);

export { createHeroUseCase, createHeroController}
