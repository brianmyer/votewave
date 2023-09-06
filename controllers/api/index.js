const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pollRoutes = require('./pollRoutes');
const questionRoutes = require('./questionRoutes')
const responseRoutes = require('./responseRoutes')

router.use('/users', userRoutes);
router.use('/polls', pollRoutes);
router.use('/questions', questionRoutes)
router.use('/responses', responseRoutes)

module.exports = router;
