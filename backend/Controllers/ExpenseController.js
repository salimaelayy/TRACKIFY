const Expense = require('../Schemas/Expense')
const Category = require('../Schemas/Category');
// const User = require('../Schemas/user');



const createExpense = async (req, res) => {
  try {
    // const userId =req.params._id
    const { amount, date, description, account, categoryId} = req.body;

    // Check if categoryId is provided
    if (!categoryId) {
      return res.status(400).json({ msg: 'Category ID is required' });
    }

    // Check if the category exists
    
    // const user = await User.findById(userId);
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    // Create the expense
    const expense = new Expense({
      amount,
      date,
      account,
      description,
      category: category._id,
      // createdBy:user._id
    });

    await expense.save();

    res.status(201).json({ msg: 'Expense created successfully', expense });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const id = req.params.id;

    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
const getExpenseByName = async (req, res) => {
    try {
      const name = req.params.name;
  
      const expense = await Expense.findOne({ name });
  
      if (!expense) {
        return res.status(404).json({ msg: 'Expense not found' });
      }
  
      res.json(expense);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  };
  

const updateExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const { amount, date, description, account,categoryId } = req.body;

    const expense = await Expense.findByIdAndUpdate(id, {
      amount,
      date,
      description,
      account,
      category: categoryId
    });

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    res.json({ msg: 'Expense updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;

    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    res.json({ msg: 'Expense deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
module.exports={deleteExpense, updateExpense, getExpenseById, getExpenses, createExpense,getExpenseByName}