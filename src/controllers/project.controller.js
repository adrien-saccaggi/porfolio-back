import * as projectService from "../services/project.service.js";

export const getAllProjects = async (req, res,next) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};
export const getOneProject = async (req, res,next) => {
  const project = await projectService.getProjectById(req.params.id);
  res.json(project);
};
export const createOneProject = async (req,res,next) => {
    const id = await projectService.createProject({ ...req.body });
    res.status(201).json(id);
};
export const updateOneProject = async (req,res,next) => {
  const project = await projectService.updateProject(req.params.id, req.body);
  res.status(200).json(project);
}
export const deleteOneProject = async(req,res,next) => {
  const project = await projectService.deleteProject(req.params.id);
  res.status(204).send(project)
}
