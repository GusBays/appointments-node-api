export interface BaseRepositoryInterface
{
    create(data: Object): Promise<Object>
}