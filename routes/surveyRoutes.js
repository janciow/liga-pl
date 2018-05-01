const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
  app.post('/app/surveys', requireLogin, requireCredits, (req, res) => {
    
  });
};
