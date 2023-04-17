
import { BaseRepository } from "./BaseRepository";
import { DataInterface } from "../contracts/DataInterface";
import { BaseServiceInterface } from "../contracts/BaseServiceInterface";

export class BaseService implements BaseServiceInterface
{
    public repository: BaseRepository

    constructor(
        repository: BaseRepository
    ) {
        this.repository = repository
    }

    async create(data: DataInterface): Promise<Object>
    {
        return await this.repository.create(data.toObject());
    }
}