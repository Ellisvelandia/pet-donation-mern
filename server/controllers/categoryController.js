const Category = require("../models/Category");

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const created = await Category.create({ name });
    res.json({ message: "success add category", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await Category.findByIdAndUpdate(id, { name }, {new: true});

    res.json({ message: "success update category", updated });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Category.findByIdAndRemove(id);

    res.json({ message: "success delete category", deleted });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
