# CovidConnection

## Architecture and Technologies
* MongoDB
* Express
* React
* Node

## Background and Overview
In these uncertain times, we could all use a little help. CovidConnection connects those who need help with tasks that have become more difficult for them, with those happy to lend a helping hand.

## Authorization and Profile Page

User login is supported by backend authentication. When creating an account emails are validated and passwords are hashed using BCrypt to ensure the protection of password security even if one were able to view the user database. Each user has a profile page which can be accessed by the navbar user icon. Profile pages show all of the users accepted favors and favor requests; it is also where the user can create a new favor request.

![user-auth-gif](https://user-images.githubusercontent.com/62472030/105387522-a3476100-5be3-11eb-9474-a5b3376160fd.gif)

## Creating a Favor Request and Viewing the Newsfeed

Creating a favor request is done by press the "Ask Favor" button on the profile page. You can see this generate a favor request on the profile page, confirming that this favor request has been added to the database. Clicking the newspaper icon in the navbar brings us to the favor Newsfeed. Here we can see the favor request we just created, as well as favor requests from all other users.

![new-favor-gif](https://user-images.githubusercontent.com/62472030/105387656-c2de8980-5be3-11eb-8d94-08b400455f54.gif)

## Accepting a Favor

You can accept favor requests on the Newsfeed by clicking the accept favor button at the bottom of each favor. This you can see the favor update immediately to show that you have accepted it. You can now go back to your profile see the favor you have just taken in the "Taken Favors" portion of the profile page.

![accepting-a-favor-gif](https://user-images.githubusercontent.com/62472030/105387715-d2f66900-5be3-11eb-81a3-40677ae9ccf0.gif)

## Logging Your Favor as Complete

We can log out using the right-most icon in our navbar so that we can sign into the account that originally made the favor request for demonstration purposes. Here we can see that the favor request for this user has a button that allows for the user to mark the favor as complete. 

Currently this keeps the favor off of any favor lists on the site to increase focus on fulfilling new favors, but in the future we may add a seperate display of all the completed favors to show all the good that has been done for people who needed a helping hand.

![logging-favor-complete-gif](https://user-images.githubusercontent.com/62472030/105387782-e30e4880-5be3-11eb-9739-2c9a73ca09d8.gif)
