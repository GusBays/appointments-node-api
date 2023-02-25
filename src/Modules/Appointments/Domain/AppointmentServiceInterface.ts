import { AppointmentData } from "./AppointmentData";

export interface AppointmentServiceInterface
{
    create(request: AppointmentData): Promise<AppointmentData | null>
    // update(request: AppointmentData): Promise<AppointmentData | null>
    // delete(request: AppointmentData): Promise<AppointmentData | null>
}