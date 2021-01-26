# CovidConnection

## Architecture and Technologies
* Mongoose (5.10.19)
* Express (4.17.1)
* React (17.0.1)
* Node (10.13.0)

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

``` JavaScript
    updateFavor: (favor) => dispatch(updateFavor(favor))
``` 
Accepting a favor will trigger the update Favor route on the frontend. Depending on the current status of the favor, the status will change accordingly and will mark the username and id of the person who accepts the favor depending on its status so that it can properly render on the frontend. 

```JavaScript
        if (req.body.favor_status === "Request") {
        update = { favor_status: "Doing", favor_by_user_id: req.user.id, favor_by_username: req.user.username};
     } else if (req.body.favor_status === "Doing" && req.user.id === req.body.favor_by_user_id) {
        update = { favor_status: "Request", favor_by_user_id: null, favor_by_username: null};
     } else {
        update = { favor_status: "Done" };
     }      
```

## Logging Your Favor as Complete

We can log out using the right-most icon in our navbar so that we can sign into the account that originally made the favor request for demonstration purposes. Here we can see that the favor request for this user has a button that allows for the user to mark the favor as complete. Currently this keeps the favor off of any favor lists on the site to increase focus on fulfilling new favors, but in the future we may add a display of all the completed favors to show all the good that has been done for people who needed a helping hand.

![logging-favor-complete-gif](https://user-images.githubusercontent.com/62472030/105387782-e30e4880-5be3-11eb-9739-2c9a73ca09d8.gif)

## Favor Button Logic

The logic what changes a particular user can make to any particular favor is regulated mainly by which onClick property is assigned to the button at the bottom of each favor. This button element is determined by the conditional logic presented in the code snippet below.

This logic starts by checking if there is any user signed in, if not, there will be no button since a sign in is required for any favor actions to be performed. From there the conditionals use logic determined by the comparing the user ID of those associated with the favor against the current user's ID, along with the current status of the favor.

For example, if the favor.status is equal to "Doing", we know the favor has been accepted, and if the favor_for_user_id property is equal to the currentUser.id, we should present the option to "log favor as complete", since we only want the user who requested the favor to be able to mark the favor as being completed and no longer requiring assistance.

```javascript
handleFavorButton(favor) {
    if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
      return null
    } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.status === "Request") {
      return (
        <button className="favor-button" onClick={() => this.props.deleteFavor(favor)}>
          Delete
        </button>
      )
    } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.status === "Doing") {
      return ( 
        <button className="favor-button" onClick={() => this.props.updateFavor(favor)}>
          Click here to log favor as complete.
        </button>
      )
    } else if (favor.favor_by_user_id === this.props.currentUser.id && favor.status === "Doing") {
      return (
        <button className="favor-button" onClick={() => this.props.updateFavor(favor)}>
          Click here to undo accepting this favor.
        </button>
      )
    } else if (favor.favor_by_username) {
      return null
    }
     else {
      return (
        <button className="favor-button" onClick={() => this.props.updateFavor(favor)}>
          Click here to accept favor
        </button>
      )
    }
  }
```

## Searching for Favors 

We can search for favors on the newsfeed by using the search bar. This search filters the favors on the frontend only so that no requests to the backend need to be sent. Typing into the bar will trigger a state change and will also track what the user types into state, which will be used to filter the favors accordingly. In the future, the search can be edited to allow partial searches, and searchs that are not caps sensitive.

```JavaScript 
this.state = { myFavors: false, favorRequests: false, userSearch: false, forUser: ''}
``` 
```JavaScript
       updateName() {
        
        return e=> {
            this.setState( { 'forUser' : e.currentTarget.value })
            if ( this.state.forUser !== '') {
                this.setState( { 'userSearch' : true })
            }
        }
    }
```
```JavaScript 
favors.filter( favor => {
            const length = this.state.forUser.length; 

            return favor.favor_for_username.slice(0,length) === this.state.forUser
```

