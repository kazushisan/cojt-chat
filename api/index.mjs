import createApp from './app'

createApp()
  .then(app => {
    app.listen(3000, () => {
      console.log('API server listening on port 3000!')
    })
  })
  .catch(err => {
    console.error(err)
  })
