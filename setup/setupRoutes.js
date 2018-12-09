module.exports = function(app) {
  app.use('/', require('../routes/index'))
  app.use('/cats', require('../routes/cats'))
}
