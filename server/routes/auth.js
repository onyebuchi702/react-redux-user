import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

let router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const hardusername = 'marvin@gb.com';
  const hardpassword = '123456'

  if (username == hardusername && password == hardpassword){
    const token = jwt.sign({
      username: username
    }, config.jwtSecret);
    res.json({ token });
  } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials '}});
  }
});

export default router;
