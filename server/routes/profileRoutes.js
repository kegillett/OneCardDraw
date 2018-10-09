const Profile = require('../models/profile');


module.exports = function(router) {

  router.route('/random')
      .get(function(req, res) {
        let tempProfile = {
          photoURL: undefined,
          firstName: undefined,
          lastName: undefined,
          age: undefined,
          sex: undefined,
          bio: undefined
        };
        Profile.countDocuments().exec(function (err, count){
          let random = Math.floor(Math.random() * count)
          Profile.findOne().skip(random).exec(
            function(err, profile){
              if (err)
                res.send(err)
              tempProfile.photoURL = profile.photoURL
            })
        })
        Profile.countDocuments().exec(function (err, count){
          let random = Math.floor(Math.random() * count)
          Profile.findOne().skip(random).exec(
            function(err, profile){
              if (err)
                res.send(err)
              tempProfile.firstName = profile.firstName
            })
        })
        Profile.countDocuments().exec(function (err, count){
          let random = Math.floor(Math.random() * count)
          Profile.findOne().skip(random).exec(
            function(err, profile){
              if (err)
                res.send(err)
              tempProfile.lastName = profile.lastName
            })
        })
        Profile.countDocuments().exec(function (err, count){
          let random = Math.floor(Math.random() * count)
          Profile.findOne().skip(random).exec(
            function(err, profile){
              if (err)
                res.send(err)
              tempProfile.age = profile.age
            })
        })
        Profile.countDocuments().exec(function (err, count){
          let random = Math.floor(Math.random() * count)
          Profile.findOne().skip(random).exec(
            function(err, profile){
              if (err)
                res.send(err)
              tempProfile.sex = profile.sex
            })
        })
        Profile.countDocuments().exec(function (err, count){
          let random = Math.floor(Math.random() * count)
          Profile.findOne().skip(random).exec(
            function(err, profile){
              if (err)
                res.send(err)
              tempProfile.bio = profile.bio
            })
        })
        setTimeout(function(){ res.json(tempProfile); }, 40);
      })

  router.route('/profile')
    .post(function(req, res) {
      const profile = new Profile();
      profile.photoURL = req.body.photoURL;
      profile.firstName = req.body.firstName;
      profile.lastName = req.body.lastName;
      profile.age = req.body.age;
      profile.sex = req.body.sex;
      profile.bio = req.body.bio;
      profile.save(function(err) {
        if (err)
          res.send(err)
        res.json({
          message: "Ur prof wuz made."
        })
      })
    })
    .get(function(req, res) {
      Profile.find(function(err, profile) {
        if (err)
          res.send(err)
        res.json(profile)
      })
    })

}
