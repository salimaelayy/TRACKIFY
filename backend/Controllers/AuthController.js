const userModel = require('../Schemas/User')
const bcrypt = require('bcrypt')
const {CreateToken} = require('../MiddleWares/CreateToken')

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: 'Invalid information' });
    }

    const userLoggedIn = await userModel.findOne({ username });
    if (!userLoggedIn) {
      console.log('User does not exist');
      return res.status(404).json({ message: 'User does not exist' });
    }

    const match = await bcrypt.compare(password, userLoggedIn.password);
    if (!match) {
      return res.status(400).json({ message: 'Username or password is incorrect' });
    }

    const accessToken = CreateToken(userLoggedIn._id);

    res.cookie("access-token", accessToken, {
      maxAge: 2 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'lax',
      secure: false
    });

    const { password: pwd, ...userData } = userLoggedIn._doc;

    return res.json({ id: userLoggedIn._id, accessToken, user: userData });

  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Error during login' });
  }
}


const profile = async (req, res, next) => {
  console.log('you are in the profile');
  return res.json('profile');
}

const logout = async (req, res) => {
  console.log('you are logged out');
  res.clearCookie('access-token').send('Logout successful');
}

module.exports = { login, logout, profile };