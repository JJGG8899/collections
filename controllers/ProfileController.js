var Profile = require('../models/Profile');
var Promise = require('bluebird');

module.exports = {
  find: function(params){
    return new Promise(function(resolve, reject){
      // mongoose query callback function Style
      Profile.find(params, function(err, profiles){
        if(err){
          console.log('Nothing found')
          reject(err)
          return
        }
        console.log('something found')
        resolve(profiles)
      })
    })
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      Profile.findById(id, function(err, profile){
        if(err){
          reject(err)
          return
        }
        resolve(profile)
      })
    })
  },

  create: function(params){
    return new Promise(function(resolve, reject){
      Profile.create(params, function(err, profile){
        if(err){
          reject(err)
          return
        }
        resolve(profile)
      })
    })
  }
}
