import { Router } from "express";

const OccurrenceController = require('./controllers/OccurrenceController')

const router = Router()

router.post('/occurence', OccurrenceController.Create)

export { router }