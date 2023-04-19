export interface BaseRepositoryInterface
{
    create(data: Object): Promise<Object>
    getAll(): Promise<Object>
}