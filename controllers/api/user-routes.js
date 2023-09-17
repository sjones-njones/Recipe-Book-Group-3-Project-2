const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const UserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.logged_In = true;
      req.session.userId = UserData.id;
      res.status(200).json({ user: UserData, message: 'You have signed up!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const UserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!UserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = UserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_In = true;
      req.session.userId = UserData.id;

      res
        .status(200)
        .json({ user: UserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout route
router.post('/logout', (req, res) => {
  console.log('route reached');
  if (req.session.logged_In) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// makes router available in other files
module.exports = router;
