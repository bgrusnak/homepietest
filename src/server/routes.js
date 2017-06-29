var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Page = mongoose.model('Page');


exports.getAllHandler = function (req, res) {
  Page.find({}).sort({ 'order': 1 })
    .exec(function (err, array) {
      if (!err) {
        res.json(array);
      } else {
        res.json([])
      }
    })
};

exports.getOneHandler = function (req, res) {
  Page.findById(req.params.ITEMID)
    .exec(function (err, array) {
      if (!err) {
        res.json(array);
      } else {
        res.json([])
      }
    })
};

exports.postOneHandler = function (req, res) {
  var newRecord = new Page();
  newRecord.title = req.body.title ? req.body.title : "";
  newRecord.category = req.body.category ? req.body.category : "";
  newRecord.screen = req.body.screen ? req.body.screen : "";
  newRecord.questions = req.body.questions ? req.body.questions : []
  Page.findOne().sort('-order').exec(function (err, item) {
    newRecord.order = err ? 0 : item.order + 1;
    newRecord.save(function (err, savedUser) {
      if (err) {
        res.json(false);
      } else {
        res.json(savedUser);
      }
    });
  });
}

exports.updateOneHandler = function (req, res) {
  Page.update({ _id: req.params.ITEMID },
    {
      $set: {
        title: req.body.title ? req.body.title : "",
        category: req.body.category ? req.body.category : "",
        screen: req.body.screen ? req.body.screen : "",
        questions: req.body.questions ? req.body.questions : []
      }
    },
    { multi: false }, function (err, updatedRec) {
      if (err) {
        res.json(false);
      } else {
        res.json(updatedRec);
      }
    });
};

exports.deleteOneHandler = function (req, res) {
  Page.findById(req.params.ITEMID)
    .populate('questions')
    .exec(function (error, array) {
      array.map(question => {
        Question.findByIdAndRemove(question._id)
      })
    })
  Page.findByIdAndRemove(req.params.ITEMID, function (err, deletedRec) {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
    }
  });
}

exports.swapHandler = function (req, res) {
  Page.find({ 'order': { '$in': [req.body.first, req.body.second] } }, function (err, array) {
    let firstPage = array.find(page => page.order == req.body.first)
    let secondPage = array.find(page => page.order == req.body.second)
    firstPage.order = req.body.second
    firstPage.save(function () {
      secondPage.order = req.body.first
      secondPage.save(function () {
        Page.find({}).sort({ 'order': 1 })
          .exec(function (err, array) {
            if (!err) {
              res.json(array);
            } else {
              res.json([])
            }
          })
      })
    })
  })
};

