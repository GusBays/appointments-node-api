import { inject, injectable } from "tsyringe";
import Plan from "../../../models/Plan";
import { PlanRepositoryInterface } from "../Domain/PlanRepositoryInterface";
import { PlanTypeEnum } from "../Domain/PlanTypeEnum";

@injectable()
export class PlanRepository implements PlanRepositoryInterface
{
    constructor(@inject(PlanTypeEnum.MODEL) private model: Plan) {}

    async create(plan: Object): Promise<Plan> 
    {
        return Plan.create(plan);
    }
}