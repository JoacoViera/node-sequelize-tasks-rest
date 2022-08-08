import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const projects = await Task.findAll();
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Task.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Task not found' });
    return res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Task.create({
      name,
      description,
      priority,
    });
    return res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Task.findByPk(id);

    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();
    return res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    Task.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
