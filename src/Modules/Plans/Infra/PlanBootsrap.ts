import { container } from "tsyringe";
import { BootstrapInterface } from "../../../contracts/BootstrapInterface";
import { PlanServiceInterface } from "../Domain/PlanServiceInterface";
import { PlanService } from "../Application/PlanService"
import { PlanTypeEnum } from "../Domain/PlanTypeEnum";
import { PlanRepositoryInterface } from "../Domain/PlanRepositoryInterface";
import { PlanRepository } from "../Application/PlanRepository";
import Plan from "../../../models/Plan";
import PlanController from "../../../controllers/PlanController";

export class PlanBootstrap implements BootstrapInterface
{
    async handler(): Promise<void> {
        container.registerSingleton<Plan>(PlanTypeEnum.MODEL, Plan)
        container.registerSingleton<PlanController>(PlanTypeEnum.CONTROLLER, PlanController)
        container.registerSingleton<PlanServiceInterface>(PlanTypeEnum.SERVICE, PlanService)
        container.registerSingleton<PlanRepositoryInterface>(PlanTypeEnum.REPOSITORY, PlanRepository)
    }
}