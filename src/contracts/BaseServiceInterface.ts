import { BaseRepository } from "../Modules/BaseRepository";

export interface BaseServiceInterface
{
    repository: BaseRepository

    create(data: Object): Promise<Object>
}