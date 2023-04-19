
import { DataInterface } from "../contracts/DataInterface";
import { BaseServiceInterface } from "../contracts/BaseServiceInterface";
import { BaseRepositoryInterface } from "../contracts/BaseRepositoryInterface";

export class BaseService implements BaseServiceInterface
{
    public repository: BaseRepositoryInterface

    constructor(
        repository: BaseRepositoryInterface
    ) {
        this.repository = repository
    }

    async create(data: DataInterface): Promise<Object>
    {
        return await this.repository.create(data.toObject());
    }

    async index(): Promise<Object>
    {
        return await this.repository.getAll();
    }
}