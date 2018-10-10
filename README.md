# Welcome to our README

###  This link is a mock up of our vision.
https://xd.adobe.com/view/e2c260f7-f674-4487-6e85-d0fff05d84ef-94f3/?fullscreen
  - The link on the right is the full experience using outside APIs
    - We first used our own API
    - We then incorperatied Oblique Stratiges, FOASS and Advice slip to fill out the rest of the cards. Links below to those API sources
      - FOASS - http://www.foaas.com/
      - Oblique Stratiges - http://brianeno.needsyourhelp.org/info
      - Advice Slip -  http://api.adviceslip.com/

- The link on the left a mock up of the API we built out.
 - It displays the functionality we built into our back end.

### Back end info
To run server:
1. Clone our repo found here: https://github.com/kegillett/OneCardDraw
2. Be sure to `npm install` in the directory before you run the server to get dependencies
2. Start the sever using `npm run dev`
2. Test the routes with postman

  - We've got a test route at the bottom of index.js.
    - http://localhost:5432/api
  - We've got real routes, they live in the routes folder, in the profileRoutes.js file.
    -  http://localhost:5432/api/profile
      - on this route you can POST and GET
    - http://localhost:5432/api/random
      - on this route you can only GET

#### First things first.
###### PROFILE ROUTE
<br>
  Posting on `/profile` route.
  A large part of your job will be populating this with funny and interesting things for the random route to make use of. Without good things in here, this is useless and dumb. Please do cool things here...


  Posting in this doesn't work the same as other things we've done b/c we're using `form data` so we can have and store and serve images.


  When posting you need to select the option "body" as normal, then select the `form-data` option instead of the `x-www-form-urlencoded` option.
  You also need to set your photoURL key to `file` instead of `text` from a drop down on the right of the input box.

  When you complete a POST on this route a JSON object will be returned to you with a success message as well as the newly created profile object. This will be useful when you want to display the object after users create one.

  Using a GET on the `/profile` route will return a list of all created profile objects.

#### Second things second.
###### RANDOM ROUTE
<br>
  Using a GET on the `/random` route will return a temporarily created profile object made up of key value pairs of other profile objects existing in your database. Try it out, after you populate your DB. This will be useful for generating a random profile to humor your users by displaying.
