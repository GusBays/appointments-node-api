import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe';
import Plan from '../models/Plan'
import { PlanRequestAdapter } from '../Modules/Plans/Domain/PlanRequestAdapter'
import { PlanServiceInterface } from '../Modules/Plans/Domain/PlanServiceInterface'
import { PlanTypeEnum } from '../Modules/Plans/Domain/PlanTypeEnum';

@injectable()
class PlanController
{
    constructor(
        @inject(PlanTypeEnum.MODEL) private model: Plan,
        @inject(PlanTypeEnum.SERVICE) private service: PlanServiceInterface
    ) {}

    async store(req: Request, res: Response)
    {
        return res.status(200).json(req.body);
        //await this.model.validate(req.body)

        // return res.json(this.service.create(new PlanRequestAdapter(req.body)))
    }

    async index(req: Request, res: Response)
    {

    }
}

export default PlanController;