import mongoose from 'mongoose'
import config from '../../../config/server.config'

// Use bluebird
mongoose.Promise = global.Promise

// Initialize our database
mongoose.connect(config.db.mongo)

const db = mongoose.connection
db.on('error', (err) => console.error('Mongodb error:', err))
db.once('open', () => console.info('Mongodb started on port 27017'))

// Initialize our models
export default db
export const Page = db.model('Page', require('../models/Page'))
