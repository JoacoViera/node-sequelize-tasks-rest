import { Project } from '../models/Project.js';

export const getProjects = (req, res) => {
  res.send('getting project');
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  const newProject = await Project.create({
    name,
    description,
    priority,
  });
  console.log(newProject);
  res.send('creating project');
};
