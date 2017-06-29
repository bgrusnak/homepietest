import express from 'express'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import config from '../../config/server.config'
import db,{ Page } from './helpers/database'
import routes from './routes'
const app = express()

app.disable('x-powered-by') // Disable useless headers
app.use(compression())

app.use(favicon(config.http.favicon))
app.use('/robots.txt', (req, res) => res.send(config.http.robots))

app.use(logger('dev'))

app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))


// Serve static files
if (config.http.static.length !== 0) {
    config.http.static.map(route => {
        app.use(route.url, express.static(route.path))
    })
}

app.get('/api/page', routes.getAllHandler);  
app.get('/api/page/:ITEMID', routes.getOneHandler);  
app.post('/api/page', routes.postOneHandler); 
app.post('/api/swap', routes.swapHandler); 
app.put('/api/page/:ITEMID', routes.updateOneHandler); 
app.delete('/api/page/:ITEMID', routes.deleteOneHandler); 

app.use('/*', require('./render.js'))
app.listen(config.http.port)
console.log("Launched ! Running on localhost:" + config.http.port)