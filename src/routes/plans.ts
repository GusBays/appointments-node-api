import { Router } from 'express'
import { container } from 'tsyringe'
import PlanController from '../controllers/PlanController'

const controller = container.resolve(PlanController);

const router = Router()

router.post('', controller.store)

router.get('', controller.index)

module.exports = router