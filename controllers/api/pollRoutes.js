const router = require('express').Router();
const { Poll, Question, Response, User } = require('../../models');
const withAuth = require('../../utils/auth');



//Retrieve user-specific polls
router.get('/', withAuth, async (req, res) => {
  try {
    const pollData = await Poll.findAll( { 
      where: {user_id: req.session.user_id},
      include: [{ model: Question,  include: [{model: Response}]}   
      ]});
    res.status(200).json(pollData)
  } 
  catch (err) {
  res.status(500).json(err);
  }
});
//Retrieve ONE user-specific poll
router.get('/:id', withAuth, async (req, res) => {
  try {
    const pollData = await Poll.findOne( { 
      where: {user_id: req.session.user_id, id: req.params.id},
      include: [{ model: Question,  include: [{model: Response}]}   
      ]});
    res.status(200).json(pollData)
  } 
  catch (err) {
  res.status(500).json(err);
  }
});
//create new poll
router.post('/', withAuth, async (req, res) => {
  try {
    const newPoll = await Poll.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPoll);
  } catch (err) {
    res.status(400).json(err);
  }
});
//retrieve public poll (to respond)




router.delete('/:id', withAuth, async (req, res) => {
  try {
    const pollData = await Poll.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!pollData) {
      res.status(404).json({ message: 'No poll found with this id!' });
      return;
    }

    res.status(200).json(pollData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
