const Category = require('../Schemas/Category');

const createCategory = async (req, res) => {
  try {
    const { name, type, image } = req.body;

    const category = new Category({
      name,
      type,
      image
    });

    await category.save();

    res.status(201).json({ msg: 'Category created successfully', category });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
 const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getCtegoryByName = async (req, res) => {
    try {
      const name = req.params.name;
  
      const category = await Category.findOne({ name });
  
      if (!category) {
        return res.status(404).json({ msg: 'category not found' });
      }
  
      res.json(category);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  };
  
const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, type, image } = req.body;

    const category = await Category.findByIdAndUpdate(id, {
      name,
      type,
      image
    });

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    res.json({ msg: 'Category updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    res.json({ msg: 'Category deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
module.exports={createCategory,
    getCategories,
    getCategoryById,
    getCtegoryByName,
    updateCategory,
    deleteCategory}