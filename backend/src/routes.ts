import { Router, request, response } from "express";
import { createHeroController } from "./useCases/CreateHero";
import { deleteHeroController } from "./useCases/DeleteHero";
import { updateHeroController } from "./useCases/UpdateHero";
import { indexHeroController } from "./useCases/IndexHero";

const router = Router()

router.get('/heroes', (request, response) => indexHeroController.handle(request, response))
router.post('/heroes', (request, response) => createHeroController.handle(request, response))
router.delete('/heroes', (request, response) => deleteHeroController.handle(request, response))
router.put('/heroes', (request, response) => updateHeroController.handle(request, response))

export { router }