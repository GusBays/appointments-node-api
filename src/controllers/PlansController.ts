import Plan from '../models/Plan'

export class PlansController
{
    constructor(
        private model: Plan
        //private service: PlanService
    ) {
    }

    async create(request, res)
    {
        return res.json(request.body)
        // return res.json(this.model.save(request));
    }
}