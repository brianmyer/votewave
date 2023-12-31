const router = require('express').Router();
const { Question, Response } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const questionData = await Question.findAll({
      include: [{model: Response}]}
    );
    res.status(200).json(questionData)
  } 
  catch (err) {
  res.status(500).json(err);
  }
});

router.post('/:id',  async (req, res) => {
    try {
      const newQuestion = await Question.create({
        ...req.body,
        user_id: req.session.user_id,
        poll_id: req.params.id,
      });
  
      res.status(200).json(newQuestion);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;