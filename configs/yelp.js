const axios = require('axios');
const querystring = require('querystring');

const Token = require('../models/token.js');

const yelp = {
  getToken: function(req, res, next) {
    // See if token in db
    Token.findOne({}, function(err, token) {
      if (token) {
        req.token = token.accessToken;
        next();
      } else {
        // get token from yelp
        axios.post('https://api.yelp.com/oauth2/token', querystring.stringify({
          'grant_type': 'client_credentials',
          'client_id': process.env.YELP_ID,
          'client_secret': process.env.YELP_SECRET
        })).then(function(resp){
          const token = resp.data;
          // save token to db
          const newToken = new Token({
            accessToken: token.access_token,
            tokenType: token.token_type,
            expiresIn: new Date(Date.now() + token.expires_in * 1000)
          });
          newToken.save(function(err, token) {
            if (err) {
              next(err);
            }
            req.token = token.accessToken;
            next();
          });
        }).catch(function(err){
          next(err);
        });
      }
    });
  },
  search: function(req, res, next) {
    const url = `https://api.yelp.com/v3/businesses/search?categories=bars&location=${req.params.location}`;
    axios.get(
      url,
      {headers: {'Authorization': `Bearer ${req.token}`}}
    ).then(function(resp) {
      const venues = resp.data.businesses.map(function(venue) {
        return {
          rating: venue.rating,
          price: venue.price,
          id: venue.id,
          name: venue.name,
          url: venue.url,
          image_url: venue.image_url
        }
      });
      req.venues = venues;
      next();
    }).catch(function(err) {
      next(err);
    });
  },
  getVenue: function(req, res, next) {
    const url = `https://api.yelp.com/v3/businesses/${req.params.venue}`;
    axios.get(
      url,
      {headers: {'Authorization': `Bearer ${req.token}`}}
    ).then(function(resp) {
      const data = resp.data;
      const venue = {
        id: data.id,
        name: data.name,
        image_url: data.image_url,
        url: data.url,
        price: data.price,
        rating: data.rating,
        photos: data.photos,
        address: data.location.display_address.join(" ")
      };
      req.venue = venue;
      next();
    }).catch(function(err) {
      next(err);
    });
  }
};

module.exports = yelp;
