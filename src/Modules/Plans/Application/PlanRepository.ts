import { inject, injectable } from "tsyringe";
import Plan from "../../../models/Plan";
import { PlanRepositoryInterface } from "../Domain/PlanRepositoryInterface";
import { PlanTypeEnum } from "../Domain/PlanTypeEnum";
import { BaseRepository } from "../../BaseRepository";

@injectable()
export class PlanRepository extends BaseRepository implements PlanRepositoryInterface
{   
    constructor(
        @inject(PlanTypeEnum.MODEL)
        public model: Plan
    ) {
        super(model, Plan.tableName)
    }
}