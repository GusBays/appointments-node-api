import { Model, QueryInterface } from "sequelize";
import { BaseRepositoryInterface } from "../contracts/BaseRepositoryInterface";

export class BaseRepository implements BaseRepositoryInterface
{
    public model: Model
    public query: QueryInterface
    public tableName: string

    constructor(
        model: Model,
        tableName: string
    ) {
        this.model = model;
        this.query = this.model.sequelize.getQueryInterface();
        this.tableName = tableName
    }

    async create(data: Object): Promise<Object>
    {
        this.model.setAttributes(data);

        return await this.query.insert(this.model, this.tableName, this.model.dataValues);
    }

    async getAll(): Promise<Object>
    {
        return await this.query.select(null, this.tableName);
    }
}