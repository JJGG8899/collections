var Bookmark = require('../models/Bookmark');
var Promise = require('bluebird');

module.exports = {
  find: function(params){
    return new Promise(function(resolve, reject){
      // mongoose query callback function Style
      Bookmark.find(params, function(err, bookmarks){
        if(err){
          reject(err)
          return
        }
        resolve(bookmarks)
      })
    })
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      Bookmark.findById(id, function(err, bookmark){
        if(err){
          reject(err)
          return
        }
        resolve(bookmark)
      })
    })
  },

  create: function(params){
    return new Promise(function(resolve, reject){
      Bookmark.create(params, function(err, bookmark){
        if(err){
          reject(err)
          return
        }
        resolve(bookmark)
      })
    })
  }
}