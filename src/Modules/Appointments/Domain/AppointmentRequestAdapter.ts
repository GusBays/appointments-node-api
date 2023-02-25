import { AppointmentData } from "./AppointmentData";

export class AppointmentRequestAdapter extends AppointmentData
{
    constructor(request)
    {
        super(
            request.shopId
        )
    }
}