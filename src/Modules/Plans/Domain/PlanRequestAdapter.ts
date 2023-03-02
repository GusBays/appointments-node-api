import { PlanData } from "./PlanData";

export class PlanRequestAdapter extends PlanData
{
    constructor(requestBody) {
        super(
            requestBody.name,
            requestBody.price,
            requestBody.appointments_limit,
            requestBody.employees_limit,
            requestBody.active,
        )
    }
}