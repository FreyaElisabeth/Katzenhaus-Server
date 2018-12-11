module.exports = function(app) {
  var cors = require('cors')

  // @see https://www.npmjs.com/package/cors#configuration-options
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'https://master--katzenhaus-digital.netlify.com',
        'https://create-new-dataset--katzenhaus-digital.netlify.com',
        'https://katzenhaus-digital.netlify.com'
      ],
      methods: ['OPTIONS', 'GET', 'POST', 'PATCH', 'DELETE']
    })
  )
}
