import { OccurrenceRepo } from "../../repositories/implementations/OccurrencesRepo";
import { IndexOccurrencesUseCase } from "./IndexOccurrencesUseCase";
import { IndexOccurrencesController } from "./IndexOccurrencesController";

const occurrencesRepo = new OccurrenceRepo();

const indexOccurrencesUseCase = new IndexOccurrencesUseCase(occurrencesRepo);

const indexOccurrencesController = new IndexOccurrencesController(indexOccurrencesUseCase);

export { indexOccurrencesUseCase, indexOccurrencesController}
