const Profile = require('../models/profile');


module.exports = function(router) {

  router.route('/random')
      //get a randomly generated temporary profile.
      .get(function(req, res) {
        let tempProfile = {
          photoURL: undefined,
          firstName: undefined,
          lastName: undefined,
          age: undefined,
          sex: undefined,
          bio: undefined
        };
        //Counts number of objects in database then perfoms a function.
        Profile.countDocuments().exec(function (err, count){
          //Sets keyLength to number of keys in tempProfile. Counter set to 0.
          const keyLength = Object.keys(tempProfile).length
          let counter = 0
          //Allows for loop to work at its own pace without going further into the function until after the promise resolves.
          new Promise((resolve, reject) => {
            //loops through tempProfile
            for(let key in tempProfile) {
              //at each key in tempProfile we get a random profile from database and assign the appropriate key value to our tempProfile.
              const random = Math.floor(Math.random() * count)
              Profile.findOne().skip(random).exec(
                function(err, profile){
                  if (err) res.send(err)
                  tempProfile[key] = profile[key]
                  //ups counter by one for every loop until it equals keyLength then resolves the promise allowing the function to continue.
                  counter++
                  if (counter === keyLength) resolve()
                })
            }
          })
          //after promise is resolved the tempProfile is returned as a json object.
          .then(() => res.json(tempProfile));
        })
      })

  router.route('/profile')
    //create new profile.
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
    //get list of all profiles ever made.
    .get(function(req, res) {
      Profile.find(function(err, profile) {
        if (err)
          res.send(err)
        res.json(profile)
      })
    })

}
