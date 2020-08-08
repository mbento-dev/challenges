import { HeroRepo } from "../../repositories/implementations/HeroRepo";
import { UpdateHeroUseCase } from "./UpdateHeroUseCase";
import { UpdateHeroController } from "./UpdateHeroController"

const heroRepo = new HeroRepo();

const updateHeroUseCase = new UpdateHeroUseCase(heroRepo);

const updateHeroController = new UpdateHeroController(updateHeroUseCase);

export { updateHeroUseCase, updateHeroController}
