import { inject, injectable } from "tsyringe";
import Plan from "../../../models/Plan";
import { PlanData } from "../Domain/PlanData";
import { PlanRepositoryInterface } from "../Domain/PlanRepositoryInterface";
import { PlanServiceInterface } from "../Domain/PlanServiceInterface";
import { PlanTypeEnum } from "../Domain/PlanTypeEnum";

@injectable()
export class PlanService implements PlanServiceInterface
{
    constructor(@inject(PlanTypeEnum.REPOSITORY) private repository: PlanRepositoryInterface) {}

    async create(planData: PlanData): Promise<Plan>
    {
        return await this.repository.create(planData.toObject());
    }
}