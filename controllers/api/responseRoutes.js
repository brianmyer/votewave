const router = require('express').Router();
const { Response } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const responseData = await Response.findAll();
    res.status(200).json(responseData)
  } 
  catch (err) {
  res.status(500).json(err);
  }
});

router.post('/',  async (req, res) => {
    try {
      const newResponse = await Response.create(req.body);
  
      res.status(200).json(newResponse);
    } catch (err) {
      res.status(400).json(err);
    }
  });
module.exports = router;