// categoryController.test.js
const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
  } = require('./CategoryController');
  const Category = require('../Schemas/Category');
  
  jest.mock('../Schemas/Category');
  
  describe('Category Controller', () => {
    let req, res;
  
    beforeEach(() => {
      req = {};
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should create a new category', async () => {
      req.body = { name: 'TestCategory', type: 'TestType', image: 'TestImage' };
      await createCategory(req, res);
      expect(Category.prototype.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Category created successfully', category: expect.any(Object) });
    });
  
    it('should get all categories', async () => {
      const categories = [{ name: 'Category 1' }, { name: 'Category 2' }];
      Category.find.mockResolvedValue(categories);
      await getCategories(req, res);
      expect(res.json).toHaveBeenCalledWith(categories);
    });
  
    it('should get a category by ID', async () => {
      const category = { name: 'TestCategory', type: 'TestType', image: 'TestImage' };
      Category.findById.mockResolvedValue(category);
      req.params = { id: 'testCategoryId' };
      await getCategoryById(req, res);
      expect(res.json).toHaveBeenCalledWith(category);
    });
  
    it('should update a category', async () => {
      const updatedCategory = { name: 'UpdatedCategory', type: 'UpdatedType', image: 'UpdatedImage' };
      Category.findByIdAndUpdate.mockResolvedValue(updatedCategory);
      req.params = { id: 'testCategoryId' };
      req.body = { name: 'UpdatedCategory', type: 'UpdatedType', image: 'UpdatedImage' };
      await updateCategory(req, res);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Category updated successfully' });
    });
  
    it('should delete a category', async () => {
      const deletedCategory = { name: 'DeletedCategory', type: 'DeletedType', image: 'DeletedImage' };
      Category.findByIdAndDelete.mockResolvedValue(deletedCategory);
      req.params = { id: 'testCategoryId' };
      await deleteCategory(req, res);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Category deleted successfully' });
    });
  });
  