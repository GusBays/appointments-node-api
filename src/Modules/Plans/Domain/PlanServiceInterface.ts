import Plan from "../../../models/Plan";
import { PlanData } from "./PlanData";

export interface PlanServiceInterface
{
    create(planData: PlanData): Promise<Plan>
}