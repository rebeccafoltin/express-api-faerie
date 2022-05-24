// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for waterfaeries
const Waterfaerie = require('../models/waterfaerie')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { waterfaerie: { title: '', text: 'foo' } } -> { waterfaerie: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /waterfaeries
router.get('/waterfaeries', requireToken, (req, res, next) => {
  Waterfaerie.find()
    .then(waterfaeries => {
      // `waterfaeries` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return waterfaeries.map(waterfaerie => waterfaerie.toObject())
    })
    // respond with status 200 and JSON of the waterfaeries
    .then(waterfaeries => res.status(200).json({ waterfaeries: waterfaeries }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /waterfaeries/5a7db6c74d55bc51bdf39793
router.get('/waterfaeries/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Waterfaerie.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "waterfaerie" JSON
    .then(waterfaerie => res.status(200).json({ waterfaerie: waterfaerie.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /waterfaeries
router.post('/waterfaeries', requireToken, (req, res, next) => {
  // set owner of new waterfaerie to be current user
  req.body.waterfaerie.owner = req.user.id

  Waterfaerie.create(req.body.waterfaerie)
    // respond to succesful `create` with status 201 and JSON of new "waterfaerie"
    .then(waterfaerie => {
      res.status(201).json({ waterfaerie: waterfaerie.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /waterfaeries/5a7db6c74d55bc51bdf39793
router.patch('/waterfaeries/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.waterfaerie.owner

  Waterfaerie.findById(req.params.id)
    .then(handle404)
    .then(waterfaerie => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, waterfaerie)

      // pass the result of Mongoose's `.update` to the next `.then`
      return waterfaerie.updateOne(req.body.waterfaerie)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /waterfaeries/5a7db6c74d55bc51bdf39793
router.delete('/waterfaeries/:id', requireToken, (req, res, next) => {
  Waterfaerie.findById(req.params.id)
    .then(handle404)
    .then(waterfaerie => {
      // throw an error if current user doesn't own `waterfaerie`
      requireOwnership(req, waterfaerie)
      // delete the waterfaerie ONLY IF the above didn't throw
      waterfaerie.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
