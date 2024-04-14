// userController.test.js
const {
    register,
    readall,
    readbyid,
    readbyname,
    updatebyid,
    deletebyid,
    changePassword,
  } = require('./UserController');
  const User = require('../Schemas/User');
  const bcrypt = require('bcrypt');
  
  jest.mock('../Schemas/User');
  jest.mock('bcrypt');
  
  describe('User Controller', () => {
    let req, res, next;
  
    beforeEach(() => {
      req = {};
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        cookie: jest.fn(),
      };
      next = jest.fn();
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    describe('register', () => {
    //   it('should register a new user', async () => {
    //     const newUser = { username: 'testuser', password: 'testpassword', email: 'test@example.com', country: 'TestCountry', fullname: 'Test User', birthdate: '2000-01-01' };
    //     req.body = newUser;
    //     bcrypt.hash.mockResolvedValue('hashedpassword');
    //     User.findOne.mockResolvedValue(null);
    //     User.create.mockResolvedValue(newUser);
    //     await register(req, res);
  
    //     expect(res.cookie).toHaveBeenCalled();
    //     expect(res.status).toHaveBeenCalledWith(201);
    //     expect(res.json).toHaveBeenCalledWith(
    //     expect.objectContaining({ accessToken: expect.any(String), id: expect.any(String), data: newUser })
    //     );
    //     expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ accessToken: expect.any(String), id: expect.any(String), data: newUser }));
    //   });
     
      it('should return a 400 status if missing information', async () => {
        req.body = {};
        await register(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Please provide valid information' });
      });
  
      it('should return a 409 status if user already exists', async () => {
        User.findOne.mockResolvedValue({ username: 'existinguser' });
        req.body = { username: 'existinguser', password: 'testpassword', email: 'test@example.com', country: 'TestCountry', fullname: 'Test User', birthdate: '2000-01-01' };
        await register(req, res);
        expect(res.status).toHaveBeenCalledWith(409);
        expect(res.json).toHaveBeenCalledWith({ message: 'User already exists' });
      });
  
      it('should return a 500 status if an error occurs', async () => {
        User.findOne.mockRejectedValue(new Error('Database error'));
        await register(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    });
  
    describe('readall', () => {
      it('should return all users', async () => {
        const users = [{ username: 'user1' }, { username: 'user2' }];
        User.find.mockResolvedValue(users);
        await readall(req, res);
        expect(res.json).toHaveBeenCalledWith({ data: users });
      });
  
      it('should return a 500 status if an error occurs', async () => {
        User.find.mockRejectedValue(new Error('Database error'));
        await readall(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
      });
    });
  
    describe('readbyid', () => {
      it('should return a user by ID', async () => {
        const user = { username: 'testuser' };
        User.findById.mockResolvedValue(user);
        req.params = { id: 'testUserId' };
        await readbyid(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ user });
      });
  
      it('should return a 404 status if user not found', async () => {
        User.findById.mockResolvedValue(null);
        req.params = { id: 'nonexistentUserId' };
        await readbyid(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
      });
  
    //   it('should return a 500 status if an error occurs', async () => {
    //     User.findById.mockRejectedValue(new Error('Database error'));
    //     req.params = { id: 'testUserId' };
    //     await readbyid(req, res);
    //     expect(res.status).toHaveBeenCalledWith(500);
    //     expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
    //   });
    });
  
    describe('readbyname', () => {
      it('should return a user by username', async () => {
        const user = { username: 'testuser' };
        User.findOne.mockResolvedValue(user);
        req.query = { username: 'testuser' };
        await readbyname(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ user });
      });
  
      it('should return a 404 status if user not found', async () => {
        User.findOne.mockResolvedValue(null);
        req.query = { username: 'nonexistentuser' };
        await readbyname(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'No user found with the given username' });
      });
  
      it('should return a 500 status if an error occurs', async () => {
        User.findOne.mockRejectedValue(new Error('Database error'));
        req.query = { username: 'testuser' };
        await readbyname(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
      });
    });
  
    describe('updatebyid', () => {
    //   it('should update a user by ID', async () => {
    //     const updatedUser = { username: 'updateduser' };
    //     User.findById.mockResolvedValue(updatedUser);
    //     User.prototype.save.mockResolvedValue(updatedUser);
    //     req.params = { id: 'testUserId' };
    //     req.body = { username: 'updateduser' };
    //     await updatebyid(req, res);
    //     expect(res.status).toHaveBeenCalledWith(200);
    //     expect(res.json).toHaveBeenCalledWith({ message: 'User updated successfully', user: updatedUser });
    //   });
  
    //   it('should return a 404 status if user not found', async () => {
    //     User.findById.mockResolvedValue(null);
    //     req.params = { id: 'nonexistentUserId' };
    //     await updatebyid(req, res);
    //     expect(res.status).toHaveBeenCalledWith(404);
    //     expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
    //   });
  
    //   it('should return a 500 status if an error occurs', async () => {
    //     User.findById.mockRejectedValue(new Error('Database error'));
    //     req.params = { id: 'testUserId' };
    //     await updatebyid(req, res);
    //     expect(res.status).toHaveBeenCalledWith(500);
    //     expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
    //   });
    });
  
    describe('deletebyid', () => {
      it('should delete a user by ID', async () => {
        const deletedUser = { username: 'deleteduser' };
        User.findByIdAndDelete.mockResolvedValue(deletedUser);
        req.params = { id: 'testUserId' };
        await deletebyid(req, res);
        expect(res.json).toHaveBeenCalledWith({ message: 'User is deleted successfully', data: deletedUser });
      });
  
      it('should return a 404 status if user not found', async () => {
        User.findByIdAndDelete.mockResolvedValue(null);
        req.params = { id: 'nonexistentUserId' };
        await deletebyid(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
      });
  
      it('should return a 500 status if an error occurs', async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('Database error'));
        req.params = { id: 'testUserId' };
        await deletebyid(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred' });
      });
    });
  
    describe('changePassword', () => {
     
  
    //   it('should return a 404 status if user not found', async () => {
    //     User.findById.mockResolvedValue(null);
    //     req.params = { id: 'nonexistentUserId' };
    //     await changePassword(req, res);
    //     expect(res.status).toHaveBeenCalledWith(404);
    //     expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
    //   });
  
    //   it('should return a 401 status if old password is incorrect', async () => {
    //     const userId = 'testUserId';
    //     const oldPassword = 'wrongpassword';
    //     const user = { _id: userId, password: 'hashedpassword' };
    //     User.findById.mockResolvedValue(user);
    //     bcrypt.compare.mockResolvedValue(false);
    //     req.params = { id: userId };
    //     req.body = { oldPassword, newPassword: 'newpassword' };
    //     await changePassword(req, res);
    //     expect(res.status).toHaveBeenCalledWith(401);
    //     expect(res.json).toHaveBeenCalledWith({ message: 'Incorrect old password' });
    //   });
  
    //   it('should return a 500 status if an error occurs', async () => {
    //     User.findById.mockRejectedValue(new Error('Database error'));
    //     req.params = { id: 'testUserId' };
    //     await changePassword(req, res);
    //     expect(res.status).toHaveBeenCalledWith(500);
    //     expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    //   });
    });
  });
  