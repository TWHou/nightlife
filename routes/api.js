const router = require('express').Router();

const Yelp = require('../configs/yelp.js');

/*  "/venues"
 *    GET: get list of venues
 *  "/:venue"
 *    GET: get details about a venue.
 *  "/going"
 *    POST: toggles whether user is going to a venue.
 */

const getVenues = (req, res, next) => {
  res.json(req.venues);
}

const getVenue = (req, res, next) => {
  res.json(req.venue);
}

const toggleGoing = (req, res, next) => {
  res.json({user: 'toggle going'});
}

router.get('/venues/:location', Yelp.getToken, Yelp.search, getVenues);
router.get('/venue/:venue', Yelp.getToken, Yelp.getVenue, getVenue);
router.post('/going', toggleGoing);

module.exports = router;