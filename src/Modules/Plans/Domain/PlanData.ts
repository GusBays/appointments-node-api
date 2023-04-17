import { DataInterface } from "../../../contracts/DataInterface"

export abstract class PlanData implements DataInterface
{
    constructor(
        private name: string,
        private price: number,
        private appointments_limit?: number,
        private employees_limit?: number,
        private active?: boolean,
    ) {}

    getName() { return this.name };

    getPrice() { return this.price };

    getAppointmentsLimit() { return this.appointments_limit };

    getEmployeesLimit() { return this.employees_limit };

    getActive() { return this.active };

    setName(name: string) { this.name = name }; 

    setPrice(price: number) { this.price = price };

    setAppointmentsLimit(appointmentsLimit: number) { this.appointments_limit = appointmentsLimit };

    setEmployeesLimit(employeesLimit: number) { this.employees_limit = employeesLimit };

    setActive(active: boolean) { this.active = active };

    toObject(): Object
    {
        return {
            name: this.getName(),
            price: this.getPrice(),
            appointments_limit: this.getAppointmentsLimit(),
            employees_limit: this.getEmployeesLimit(),
            active: this.getActive(),
        }
    }
}