var mongoose = require('mongoose')

let PageSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  category: { type: String },
  screen: { type: String },
  questions: [{
    question: { type: String },
    order: { type: Number, unique: true }
  }],
  order: { type: Number, unique: true }
}, { collection: 'pages' });

export default PageSchema