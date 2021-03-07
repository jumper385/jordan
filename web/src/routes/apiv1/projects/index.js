import { postCollection, queryCollection } from "../../../helpers/db/db";
import { Project } from "../../../helpers/db/schemas";

const comparator = (a,b) => {
    if (a.title[0] > b.title[0]) return 1
    else if (a.title[0] < b.title[0]) return -1
    else return 0
}

export const get = async (req, res) => {

    const projects = await queryCollection(Project, req.query);
    const sortedProjects = projects.sort(comparator)

    res.json({
        count: projects.length,
        timestamp: new Date(),
        projects: sortedProjects,
    });

}

export const post = async (req, res) => {
    const newProjects = await postCollection(Project, req.body);
    res.json(newProjects);

}