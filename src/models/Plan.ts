import { Model, NOW } from 'sequelize'
import { DataTypes } from 'sequelize'
import { PlanInterface, PlanInput } from './interfaces/PlanInterface'
import { sequelize } from '../database/sequelize'
class Plan extends Model<PlanInterface, PlanInput> implements PlanInterface
{
    public readonly id: number

    public name: string
    public price: number
    public appointments_limit: number
    public employees_limit: number
    public active: boolean

    public readonly created_at: Date
    public readonly updated_at: Date
}

Plan.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    appointments_limit: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    employees_limit: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    active: {
        type: DataTypes.TINYINT,
        defaultValue: true,
        allowNull: false
    },
    created_at: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: NOW
    },
    updated_at: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: NOW
    }
}, {
    sequelize: sequelize,
    tableName: 'plans',
    timestamps: true,
})

export default Plan