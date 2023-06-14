# NoSQL Blog API

[![license](https://camo.githubusercontent.com/029166d85f92969845201e59c3fcd8c8345556036155ff18140f6a9e796173a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e)](https://camo.githubusercontent.com/029166d85f92969845201e59c3fcd8c8345556036155ff18140f6a9e796173a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e)

## Table of Contents

* [Description](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/README.md#description)
* [Features](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/README.md#features)
* [Installation](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/README.md#installation)
* [Future Development](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/README.md#future-development)
* [License](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/README.md#license)

## Description

Node web application using Mongoose and Express to create a backend application for storing, organizing, and maintaining a basic User, Thought (post), and Reactions database.

## Features

* Provides an easy way to maintain a simple social media database
* Ability to add new Users, Thoughts, and Reactions
* Ability to update Users and Thoughts

## Installation

* Ensure Node and npm are installed
* Run `npm i` to install required dependencies
* Run `npm run dev` to start the server that will reload on file save
* Use Insomnia or other RESTful API tester to test the endpoints at `localhost:3001/api/`

## Usage

This program can be used to maintain a simple social media database. Be sure to follow the [Installation](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/README.md#installation) instructions above.

Upon installation, access the database using the following web addresses (assuming localhost:3001 or hosted location as root)

Demonstration of these api calls can be seen [here](https://youtu.be/46_ChDwiDhI)

###### Users

* `GET /api/users/` Returns all users
* `GET /api/users/:id` Returns the specified user
* `POST /api/users/` Adds a new user to the database ***body required***
* `PUT /api/users/:id` Allows you to update the specified user ***body required***
* `DELETE /api/users/:id` Removes the specified user from the database

###### Friends

* `POST /api/users/:userId/friends/:friendId` Adds the `friendId` to the `friends` list for the user matching `userId`
* `DELETE /api/users/:userId/friends/:friendId` Removes the `friendId` from the `friends` list for the user matching `userId`

###### Thoughts

* `GET /api/thoughts/` returns all thoughts
* `GET /api/thoughts/:id` returns the specified thought
* `POST /api/thoughts/` Adds a new thought to the database - ***body required***
* `PUT /api/thoughts/:id` Updates the specified thought - ***body required***
* `DELETE /api/thoughts/:id` Removes the specified thought from the database

###### Reactions

* `POST /api/thoughts/:thoughtId/reactions/` Adds a reaction to the `reactions` list for the thought matching `thoughtId` - ***body required***
* `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` Removes the `reactionId` from the `reactions` list for the thought matching `thoughtId`

## License

Please refer to the [LICENSE](https://github.com/eeast/E-Commerce-Back-End-Application/blob/main/LICENSE) in the repo.
