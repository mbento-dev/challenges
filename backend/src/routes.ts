import { Router, request, response } from "express";
import { createHeroController } from "./useCases/CreateHero";
import { deleteHeroController } from "./useCases/DeleteHero";
import { updateHeroController } from "./useCases/UpdateHero";

const router = Router()

router.post('/heroes', (request, response) => createHeroController.handle(request, response))
router.delete('/heroes', (request, response) => deleteHeroController.handle(request, response))
router.put('/heroes', (request, response) => updateHeroController.handle(request, response))

export { router }