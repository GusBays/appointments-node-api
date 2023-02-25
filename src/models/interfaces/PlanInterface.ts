import { Optional } from 'sequelize'

export interface PlanInterface
{
    id?: number
    name: string
    price: number
    appointments_limit?: number
    employees_limit?: number
    active?: boolean
    created_at?: Date
    updated_at?: Date
}

export interface PlanInput extends Optional<PlanInterface, 'id' | 'active'> {}
export interface PlanOutput extends Required<PlanInterface> {}