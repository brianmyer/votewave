const router = require('express').Router();
const { Question } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const questionData = await Question.findAll();
    res.status(200).json(questionData)
  } 
  catch (err) {
  res.status(500).json(err);
  }
});


router.post('/',  async (req, res) => {
    try {
      const newQuestion = await Question.create(req.body);
  
      res.status(200).json(newQuestion);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;