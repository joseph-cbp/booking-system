import app from './app'

const port = process.env.APP_PORT || 3001;

const server = app.listen(port, () => {
    console.log(`Port ${port}`)
})

export default server;