import { HeroRepo } from "../../repositories/implementations/HeroRepo";
import { DeleteHeroUseCase } from "./DeleteHeroUseCase";
import { DeleteHeroController } from "./DeleteHeroController"

const heroRepo = new HeroRepo();

const deleteHeroUseCase = new DeleteHeroUseCase(heroRepo);

const deleteHeroController = new DeleteHeroController(deleteHeroUseCase);

export { deleteHeroUseCase, deleteHeroController}
