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
        return res
            .status(201)
            .json(await this.service.create(new PlanRequestAdapter(req)));
    }

    async index(req: Request, res: Response)
    {
        return res
            .status(200)
            .json(await this.service.index());
    }
}

export default PlanController;