import { postCollection, queryCollection } from "../../../helpers/db/db"
import { Inventory, Project, Project_Inventory } from "../../../helpers/db/schemas"

export const get = async (req, res) => {

    let project_inventory = await queryCollection(Project_Inventory, req.query);

    let _project = queryCollection(Project, {id: project_inventory.map(e => e.project)})
    
    let _inventory = queryCollection(Inventory, {id: project_inventory.map(e => e.inventory)})

    let [project, inventory] = await Promise.all([_project, _inventory])

    res.json({
        count: project_inventory.length,
        timestamp: new Date(),
        project_inventory: project_inventory,
        project: project,
        inventory: inventory,
    })

}

export const post = async (req,res) => {
    let newProjectInventory = await postCollection(Project_Inventory, req.body)
    res.json(newProjectInventory);
}