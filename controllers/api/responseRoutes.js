const router = require('express').Router();
const { Response, Question, Poll } = require('../../models');
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
//retrieve a poll to respond to
router.get('/:id', async (req, res) => {
  try {
    const pollData = await Poll.findOne( { 
      where: {id: req.params.id},
      include: [{ model: Question,  include: [{model: Response}]}
      ]});
    res.status(200).json(pollData)
    console.log(pollData);
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