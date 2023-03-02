import { inject, injectable } from "tsyringe";
import Plan from "../../../models/Plan";
import { PlanData } from "../Domain/PlanData";
import { PlanRepositoryInterface } from "../Domain/PlanRepositoryInterface";
import { PlanTypeEnum } from "../Domain/PlanTypeEnum";

@injectable()
export class PlanRepository implements PlanRepositoryInterface
{
    constructor(@inject(PlanTypeEnum.MODEL) private model: Plan) {}

    async create(planData: PlanData): Promise<Plan> 
    {
        return this.model.save();
    }
}