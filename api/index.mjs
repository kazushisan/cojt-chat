import createApp from './app'

createApp()
  .then(app => {
    app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log('API server listening on port 3000!')
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err)
  })
