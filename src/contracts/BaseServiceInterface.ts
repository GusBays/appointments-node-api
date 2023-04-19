import { BaseRepositoryInterface } from "./BaseRepositoryInterface";

export interface BaseServiceInterface
{
    repository: BaseRepositoryInterface

    create(data: Object): Promise<Object>
    index(): Promise<Object>
}