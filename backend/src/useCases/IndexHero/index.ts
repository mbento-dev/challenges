import { HeroRepo } from "../../repositories/implementations/HeroRepo";
import { IndexHeroUseCase } from "./IndexHeroUseCase";
import { IndexHeroController } from "./IndexHeroController";

const heroRepo = new HeroRepo();

const indexHeroUseCase = new IndexHeroUseCase(heroRepo);

const indexHeroController = new IndexHeroController(indexHeroUseCase);

export { indexHeroUseCase, indexHeroController}
