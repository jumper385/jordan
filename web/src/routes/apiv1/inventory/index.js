import { postCollection, queryCollection } from '../../../helpers/db/db'
import { Inventory } from '../../../helpers/db/schemas'

const comparator = (a,b) => {
    if (a.count < b.count) return 1
    else if (a.count > b.count) return -1
    else return 0
}

export const get = async (req, res) => {

    let inventory = await queryCollection(Inventory, req.query)

    res.json({
        count: inventory.length,
        timestamp: new Date(),
        inventory: inventory
    })
}

export const post = async (req,res) => {
    let newInventory = await postCollection(Inventory, req.body)
    res.json(newInventory);
}