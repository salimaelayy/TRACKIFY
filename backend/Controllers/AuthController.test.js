// authController.test.js
const { login, logout, profile } = require('./AuthController');
const userModel = require('../Schemas/User');
const { CreateToken } = require('../MiddleWares/CreateToken');

jest.mock('../Schemas/User');
jest.mock('../MiddleWares/CreateToken');

describe('Login Controller', () => {
    let req, res;

    beforeEach(() => {
      req = {
        body: {
          username: 'testuser',
          password: 'testpassword',
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        cookie: jest.fn(),
      };
    });

  it('should return 400 if username or password is missing', async () => {
    req.body = {};
    await login(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid information' });
  });

  it('should return 404 if user does not exist', async () => {
    userModel.findOne.mockResolvedValue(null);
    await login(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'User does not exist' });
  });

  it('should return 400 if password is incorrect', async () => {
    userModel.findOne.mockResolvedValue({ username: 'testuser', password: 'hashedpassword' });
    await login(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Username or password is incorrect' });
  });

});

describe('Logout Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      clearCookie: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should clear the access-token cookie and send a success message', async () => {
    await logout(req, res);
    expect(res.clearCookie).toHaveBeenCalledWith('access-token');
    expect(res.send).toHaveBeenCalledWith('Logout successful');
  });
});

describe('Profile Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
    };
  });

  it('should return a success message', async () => {
    await profile(req, res);
    expect(res.json).toHaveBeenCalledWith('profile');
  });
});
