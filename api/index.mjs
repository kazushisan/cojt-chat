import createApp from './app'

const main = async () => {
  const app = await createApp()

  app.listen(3000, () => {
    console.log('API server listening on port 3000!')
  })
}

main()
