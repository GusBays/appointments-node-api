import { PlanData } from "./PlanData";

export interface PlanServiceInterface
{
    create(planData: PlanData): Promise<Object>
}