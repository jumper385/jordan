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