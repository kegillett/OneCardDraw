const Profile = require('../models/profile');


module.exports = function(router) {

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
