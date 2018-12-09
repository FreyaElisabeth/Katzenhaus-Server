var express = require('express')
var router = express.Router()
var Cat = require('../models/Cat')

router.get('/', (req, res) => {
  Cat.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Cat.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Cat.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Cat.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

/* router.patch('/toggle/:id', (req, res) => {
  Cat.findById(req.params.id)
    .then(todo => {
      todo.done = !todo.done
      return todo.save()
    })
    .then(result => res.json(result._id))
    .catch(err => res.json(err))
}) */

router.get('/clear', (req, res) => {
  Cat.deleteMany()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
