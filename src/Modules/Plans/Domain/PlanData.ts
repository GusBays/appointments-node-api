export abstract class PlanData
{
    constructor(
        private name: string,
        private price: number,
        private id?: number,
        private appointments_limit?: number,
        private employees_limit?: number,
        private active?: boolean,
        private created_at?: Date,
        private updated_at?: Date
    ) {}

    getName() { return this.name };

    getPrice() { return this.price };

    getId() { return this.id };

    getAppointmentsLimit() { return this.appointments_limit };

    getEmployeesLimit() { return this.employees_limit };

    getActive() { return this.active };

    getCreatedAt() { return this.created_at };

    getUpdatedAt() { return this.updated_at };

    setName(name: string) { this.name = name }; 

    setPrice(price: number) { this.price = price };

    setAppointmentsLimit(appointmentsLimit: number) { this.appointments_limit = appointmentsLimit };

    setEmployeesLimit(employeesLimit: number) { this.employees_limit = employeesLimit };

    setActive(active: boolean) { this.active = active };

    toObject(): Object
    {
        return {
            id: this.getId(),
            name: this.getName(),
            price: this.getPrice(),
            appointments_limit: this.getAppointmentsLimit(),
            employees_limit: this.getEmployeesLimit(),
            active: this.getActive(),
            created_at: this.getCreatedAt(),
            updated_at: this.getUpdatedAt()
        }
    }
}