import { Router, request, response } from "express";
import { createHeroController } from "./useCases/CreateHero";
import { deleteHeroController } from "./useCases/DeleteHero";

const router = Router()

router.post('/heroes', (request, response) => createHeroController.handle(request, response))
router.delete('/heroes', (request, response) => deleteHeroController.handle(request, response))


export { router }