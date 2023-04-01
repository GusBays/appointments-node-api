import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import PlanController from '../controllers/PlanController'

const controller = container.resolve(PlanController);

const router = Router()

router.post('', (req, res) => {controller.store(req, res)});

router.get('', (req: Request, res: Response) => {controller.index(req, res)});

module.exports = router