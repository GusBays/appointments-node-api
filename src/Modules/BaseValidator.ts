export class BaseValidator
{
    constructor(
        private shopId?: number
    ) {
        this.shopId = shopId;
    }

    validate() 
    {
        if (!this.getShopId()) { throw new Error('register_not_found_in_model_shop_with_id')}
    }

    getShopId() { return this.shopId }
}