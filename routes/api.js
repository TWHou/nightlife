const router = require('express').Router();

/*  "/going"
 *    POST: toggles whether user is going to a venue.
 *  "/:venue"
 *    GET:  get details about a venue.
 */

const getVenue = (req, res, next) => {
  res.json({venue: {id: req.params.venue}});
}

const toggleGoing = (req, res, next) => {
  res.json({user: 'toggle going'});
}

router.get('/:venue', getVenue);
router.post('/going', toggleGoing);

module.exports = router;