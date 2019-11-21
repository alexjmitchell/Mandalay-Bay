###### MVP Tickets

# Registration

#### As a user, I want to be able to create a username and password and email combo so that I can log into the chat application.

- we need a form that has a user name, password, and email with validation.
- the form needs to interact with the backend (mysql)
- the user input is posted to a table for that information(db.insert)
- Backend database needs to be implemented/created

#### As a user, I want to be able to put in my username , password, and email then be sent to the chat screen of my choice.

- we need a way to login and validate the correct username and password with (salt) + sha512(db.get)

- needs to get the username and password from the backend to confirm(db.get)

- when we submit the form it takes us to a (home) screen

- add a security question for the user to make resetting the password more straightforward(list of options for security question and an input box for the users answer)
- store security question on backend

#### As a user, I want to have a button that will allow me to reset my password through email in case I forget it.

- need to make a way for the user to reset their password if they forget it(forgot password button)
- take the user to their security question and validate their answer against what is stored on the database

- It will then replace the password in the database for the new user password(UPDATE database)

## Channels

#### As a user, I want to be able to see multiple channels so that I can choose topics

- we need to display all the chatrooms that are available to that user(get all the info from the database)
- have a way to store the different channels that are available to each user in the database
- link the displayed channels so that it will open the chat window when clicked (link the displayed channels to a specific route)

#### As a user, I want to create or remove a new channel so that I have only the channels I want

- We need a button to click to be able to create a new channel with (channel name, creator username, description)
- keep the name(username) of the person who created the channel in the database(INSERT)
- have a button that will allow a user to delete(unsubscribe from) a channel that is on their menu(UPDATE database)
-

#### As a user, I want to be able to rename the channel

- have button for the user to edit the name of a channel that they created(bring up a small form when clicked?)
- also has to change in the database

#### As a user, I want to see who is in the channel.

- we need a way to list out the people that are connected with each specific channel(get info from database)
- add a user counter for the number of people in each channel(users.length)

## Profile

#### As a user, I want to be be able to edit my username, email, profile pic

- we need a way to edit the username, email, and picture that will also update the database(button that brings up a submit form)
- we need a way for the user to upload a picture for their profiles (to be stored in the database)

## Messaging

#### As a user, I want to be able to send messages to a single person, multiple a group, in a channel

- we need a way for the two users to send messages between only two people(two user ids in one chat window)
- we need a way for the users to send a message to a group of people(list of users in chat window)
- we need a way for the users to send messages in a channel(POST or whateve socket io uses)
- we need to store the messages that are in each channel somewhere so that they are not lost(database or socks)

## Chat Window

#### As a user, I want to display all the messages

- we need a way to display all the messages in the chat window
- we need an input box for the users to type messages to be sent to the window
- we need a button to submit the message
- we need to display the usernames of the users paried with their messages
