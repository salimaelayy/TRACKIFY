// incomeController.test.js
const {
    createIncome,
    getIncomes,
    getIncomeById,
    getIncomeByName,
    updateIncome,
    deleteIncome,
  } = require('./IncomeController');
  const Income = require('../Schemas/Income');
  const Category = require('../Schemas/Category');
  
  jest.mock('../Schemas/Income');
  jest.mock('../Schemas/Category');
  
  describe('Income Controller', () => {
    let req, res;
  
    beforeEach(() => {
      req = {};
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should create a new income', async () => {
      req.body = {
        amount: 100,
        date: '2024-04-15',
        description: 'Test income',
        account: 'Test account',
        categoryId: 'testCategoryId',
        createdBy: 'testUserId',
      };
      Category.findById.mockResolvedValue({ _id: 'testCategoryId' });
      await createIncome(req, res);
      expect(Income.prototype.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Income created successfully', income: expect.any(Object) });
    });
  
    it('should get all incomes', async () => {
      const incomes = [{ amount: 100, date: '2024-04-15', description: 'Test income', account: 'Test account' }];
      Income.find.mockResolvedValue(incomes);
      await getIncomes(req, res);
      expect(res.json).toHaveBeenCalledWith(incomes);
    });
  
    it('should get an income by ID', async () => {
      const income = { amount: 100, date: '2024-04-15', description: 'Test income', account: 'Test account' };
      Income.findById.mockResolvedValue(income);
      req.params = { id: 'testIncomeId' };
      await getIncomeById(req, res);
      expect(res.json).toHaveBeenCalledWith(income);
    });
  
    it('should update an income', async () => {
      const updatedIncome = { amount: 200, date: '2024-04-16', description: 'Updated income', account: 'Updated account' };
      Income.findByIdAndUpdate.mockResolvedValue(updatedIncome);
      req.params = { id: 'testIncomeId' };
      req.body = { amount: 200, date: '2024-04-16', description: 'Updated income', account: 'Updated account' };
      await updateIncome(req, res);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Income updated successfully' });
    });
  
    it('should delete an income', async () => {
      const deletedIncome = { amount: 100, date: '2024-04-15', description: 'Test income', account: 'Test account' };
      Income.findByIdAndDelete.mockResolvedValue(deletedIncome);
      req.params = { id: 'testIncomeId' };
      await deleteIncome(req, res);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Income deleted successfully' });
    });
  });
  