export class BaseData {
    private id?: number;
    private shopId: number;
    private createdAt?: Date;
    private updatedAt?: Date;

    constructor(
        shopId: number,
        id?: number,
        createdAt?: Date,
        updatedAt?: Date,
    ) {
        this.shopId = shopId;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getId() { return this.id };

    getShopId() { return this.shopId };

    getCreatedAt() { return this.createdAt };

    getUpdatedAt() { return this.updatedAt };

    setId(id: number) { this.id = id };
    
    setShopId(shopId: number) { this.shopId = shopId };

    setCreatedAt(createdAt: Date) { this.createdAt = createdAt };

    setUpdatedAt(updatedAt: Date) { this.updatedAt = updatedAt };
}