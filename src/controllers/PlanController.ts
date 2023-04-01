import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe';
import { PlanRequestAdapter } from '../Modules/Plans/Domain/PlanRequestAdapter'
import { PlanServiceInterface } from '../Modules/Plans/Domain/PlanServiceInterface'
import { PlanTypeEnum } from '../Modules/Plans/Domain/PlanTypeEnum';

@injectable()
class PlanController
{
    constructor(
        @inject(PlanTypeEnum.SERVICE) private service: PlanServiceInterface
    ) {}

    async store(req: Request, res: Response)
    {
        return res.json(this.service.create(new PlanRequestAdapter(req)))
    }

    async index(req: Request, res: Response)
    {

    }
}

export default PlanController;