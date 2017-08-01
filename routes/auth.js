const router = require('express').Router();
const passport = require('passport');

/*  "/twitter"
 *    GET: Redirect the user to Twitter for authentication.
 *  "/twitter/callback"
 *    GET:  Finish the authentication process.
 */

router.get('/twitter', passport.authenticate('twitter', { scope : 'email' }));
router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect : '/profile',
  failureRedirect : '/'
}));

module.exports = router;
