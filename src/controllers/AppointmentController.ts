import { inject, injectable } from "tsyringe";
import { AppointmentRequestAdapter } from "../Modules/Appointments/Domain/AppointmentRequestAdapter";
import { AppointmentServiceInterface } from "../Modules/Appointments/Domain/AppointmentServiceInterface";
import { AppointmentTypeEnum } from "../Modules/Appointments/Domain/AppointmentTypeEnum";

@injectable()
export class AppointmentController
{
    private service: AppointmentServiceInterface
    private model: Appointment
    constructor(
        @inject(AppointmentTypeEnum.SERVICE)
            service: AppointmentServiceInterface,
        model: Appointment
    ) {
        this.service = service
        this.model = model
    }

    async create(request)
    {
        this.model.validate();

        return this.appointmentService.create(new AppointmentRequestAdapter(request));
    }
}