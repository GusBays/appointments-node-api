import { Request } from "express";
import { PlanData } from "./PlanData";

export class PlanRequestAdapter extends PlanData
{
    constructor(request: Request) {
        super(
            request.body.name,
            request.body.price,
            request.body.appointments_limit,
            request.body.employees_limit,
            request.body.active,
        )
    }
}