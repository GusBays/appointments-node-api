import { inject, injectable } from "tsyringe";
import { AppointmentData } from "../Domain/AppointmentData";
import { AppointmentServiceInterface } from "../Domain/AppointmentServiceInterface";
import { AppointmentTypeEnum } from "../Domain/AppointmentTypeEnum";
import { AppointmentRepositoryInterface } from "../Domain/AppointmentRepositoryInterface";

@injectable()
export class AppointmentService implements AppointmentServiceInterface
{
    constructor(
        @inject(AppointmentTypeEnum.REPOSITORY)
            private appointmentRepository: AppointmentRepositoryInterface,
        ) {}

    async create(request: AppointmentData): Promise<AppointmentData>
    {
        return this.appointmentRepository.create(request);
    }
}