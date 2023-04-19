import { QueryInterface } from "sequelize"
import Plan from "../../../models/Plan"

export interface PlanRepositoryInterface
{
    model: Plan
    query: QueryInterface
    tableName: string
    create(plan: Object): Promise<Object>
    getAll(): Promise<Object>
}