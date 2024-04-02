const Income = require('../Schemas/Income');

const createIncome = async (req, res) => {
  try {
    const { amount, date, description } = req.body;

    const income = new Income({
      amount,
      date,
      description
    });

    await income.save();

    res.status(201).json({ msg: 'Income created successfully', income });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();

    res.json(incomes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getIncomeById = async (req, res) => {
  try {
    const id = req.params.id;

    const income = await Income.findById(id);

    if (!income) {
      return res.status(404).json({ msg: 'Income not found' });
    }

    res.json(income);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const getIncomeByName = async (req, res) => {
    try {
      const name = req.params.name;
  
      const income = await Income.findOne({ name });
  
      if (!income) {
        return res.status(404).json({ msg: 'Income not found' });
      }
  
      res.json(income);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  };
  

const updateIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const { amount, date, description } = req.body;

    const income = await Income.findByIdAndUpdate(id, {
      amount,
      date,
      description
    });

    if (!income) {
      return res.status(404).json({ msg: 'Income not found' });
    }

    res.json({ msg: 'Income updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const id = req.params.id;

    const income = await Income.findByIdAndDelete(id);

    if (!income) {
      return res.status(404).json({ msg: 'Income not found' });
    }

    res.json({ msg: 'Income deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports={createIncome,getIncomes,getIncomeById,updateIncome,deleteIncome,getIncomeByName}