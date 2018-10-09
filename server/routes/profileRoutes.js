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
          const keyLength = Object.keys(tempProfile).length
          let counter = 0
          new Promise((resolve, reject) => {
            for(let key in tempProfile) {
              const random = Math.floor(Math.random() * count)
              Profile.findOne().skip(random).exec(
                function(err, profile){
                  if (err) res.send(err)
                  tempProfile[key] = profile[key]
                  counter++
                  if (counter === keyLength) resolve()
                })
            }
          })
          .then(() => res.json(tempProfile));
        })
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
