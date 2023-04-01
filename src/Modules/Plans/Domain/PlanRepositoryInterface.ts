import Plan from "../../../models/Plan";

export interface PlanRepositoryInterface
{
    create(plan: Object): Promise<Plan>
}