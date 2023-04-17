import { inject, injectable } from "tsyringe";
import { PlanRepositoryInterface } from "../Domain/PlanRepositoryInterface";
import { PlanServiceInterface } from "../Domain/PlanServiceInterface";
import { PlanTypeEnum } from "../Domain/PlanTypeEnum";
import { BaseService } from "../../BaseService";

@injectable()
export class PlanService extends BaseService implements PlanServiceInterface
{
    constructor(
        @inject(PlanTypeEnum.REPOSITORY) 
        public repository: PlanRepositoryInterface
    ) {
        super(repository);
    }
}