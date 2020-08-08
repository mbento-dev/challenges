import { Router, request, response } from "express";
import { createHeroController } from "./useCases/CreateHero";

const router = Router()

router.post('/heroes', (request, response) => {
    return createHeroController.handle(request, response)
})

export { router }