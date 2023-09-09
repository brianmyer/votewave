const router = require('express').Router();
const sequelize = require('../config/connection');
const { Poll, User, Question, Response } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Poll.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const polls = projectData.map((project) => project.get({ plain: true }));

    // reverse polls so that the newest is at the top
    polls.reverse()

    // Pass serialized data and session flag into template
    res.render('homepage', {
      polls,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Poll }],
    });

    const user = userData.get({ plain: true });
    const pollData = await Poll.findAll({

      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    const polls = pollData.map((poll) => poll.get({ plain: true }));

    polls.reverse()

    res.render('dashboard', {
      ...user,
      polls,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create-poll', withAuth, async (req, res) => {
  try {

    res.render('create-poll', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.render('signup')
  }
});

router.get('/create-responses/:id', withAuth, async (req, res) => {
  try {

    res.render('create-responses', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.render('signup')
  }
});

router.get('/response/:id', async (req, res) => {
  try {
    const pollData = await Poll.findOne({
      where: { id: req.params.id },
      include: [{ model: Question }]
    }
    );
    const poll = pollData.get({ plain: true });
    console.log(poll)
    res.render('response', {
      ...poll,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/results/:id', async (req, res) => {
  try {
    const pollData = await Poll.findOne({
      where: { id: req.params.id },
      include: [{ model: Question, include: [{ model: Response }] }, { model: User }
      ]
    });
    const pollResult = pollData.get({ plain: true });

      const [results] = await sequelize.query(`SELECT response.question_id, index_number, COUNT(index_number) AS CountPerIndex, poll_id
      FROM response
      inner join question on question.id = response.question_id
      
      GROUP BY question_id, index_number
      ORDER BY poll_id; `)
    
    const filteredResults = results.filter(result => result.question_id === pollData.questions[0].id)

    const result = {
      pollData: pollResult,
      countedResults: filteredResults
    };
    // res.status(200).json(result)
    res.render('results', {
      ...result,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});
module.exports = router;
