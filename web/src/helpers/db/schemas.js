import mongoose from "mongoose";

export const Inventory = mongoose.model('inventory', {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    count: { type: Number, required: true, default: 0 }
});

export const Project = mongoose.model('project', {
    id: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
});

export const Project_Inventory = mongoose.model('project_inventory', {
    project: { type: String, required: true },
    inventory: { type: String, required: true },
    count: { type: Number, required: true },
})

export const Inventory_PartNumber = mongoose.model('inventory_partnumber', {
    inventory: { type: String, required: true },
    partnumber: { type: String, required: true }
})

export const PartNumber = mongoose.model('partnumber', {
    id: { type: String, required: true},
    pn: {type: String, required: true},
    supplier: {type: String, required: true},
    cost: {type: String, required: true},
})