import Plan from "../../../models/Plan";
import { PlanData } from "./PlanData";

export interface PlanRepositoryInterface
{
    create(planData: PlanData): Promise<Plan>
}