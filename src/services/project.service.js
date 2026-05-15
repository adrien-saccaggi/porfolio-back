import AppError from "../errors/AppError.js";
import * as projectModel from "../models/project.model.js";

export const getAllProjects = async () => {
  const projects = await projectModel.findAll();
  return projects;
};
export const getProjectById = async (id) => {
  const project = await projectModel.findById(id);
  if (!project) {
    throw new AppError("Projet introuvable", 404);
  }
};
export const createProject = async (data) => {
  const newProject = await projectModel.create(data);
  if (!newProject) {
    throw new AppError("Erreur lors de la creation du projet", 500);
  }
  return newProject;
};
export const updateProject = async (id, data) => {
  const existingProject = await projectModel.findById(id);
  if (!existingProject) {
    throw new AppError("Projet introuvable", 404);
  }
  const updProject = await projectModel.update(id, data);
  if (!updProject) {
    throw new AppError("Erreur lors de la modification du projet", 500);
  }
  return updProject;
};
export const deleteProject = async (id) => {
    const delProject = await projectModel.remove(id);
    if (delProject == false) {
      throw new AppError("Projet introuvable", 404);
    }
  return delProject;
  };