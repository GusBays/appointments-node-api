import { DataInterface } from "../../../contracts/DataInterface";

export class AppointmentData implements DataInterface
{
    private employeeId?: number;
    private customerId?: number
    private startsAt: Date;
    private endsAt: Date;

    constructor(
        shopId: number,
        startsAt: Date,
        endsAt: Date,
        id?: number,
        employeeId?: number,
        customerId?: number,
        createdAt?: Date,
        updatedAt?: Date
    ) {
    }

    getEmployeeId() { return this.employeeId };

    getCustomerId() { return this.customerId };

    getStartsAt() { return this.startsAt };

    getEndsAt() { return this.endsAt };

    setEmployeeId(employeeId: number) { this.employeeId = employeeId };

    setCustomerId(customerId: number) { this.customerId = customerId }; 

    setStartsAt(startsAt: Date) { this.startsAt = startsAt };

    setEndsAt(endsAt: Date) { this.endsAt = endsAt };

    toObject(): Object 
    {
        return {};
    }
}