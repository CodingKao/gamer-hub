# Project: Lab 14 -  Gamer-Hub Chat Application

## Author: Kao & Tim.

## Problem Domain

Gamer-Hub is a chat application designed to connect gamers and players, allowing them to chat live with each other. By employing a hub server, multiple clients, and network-based operations, the application ensures efficient and seamless communication between users, fostering a thriving gaming community.

## Links and Resources

- Code from previous lab, lab 13.


## Setup

### `.env` requirements

- `PORT` - Port Number
- `DATABASE_URL` - URL to the running Postgres instance/db
- `SECRET` - Secret for jwt tokens

### How to initialize/run your application (where applicable)

- Create repo
- Add starter code
- `npm install` to install dependencies.
- `npm run db:config` then edit the created config file.
- `npm run db:create` to create the database.
- `npm start` to start the application.

### Features / Routes

- Hub Server: Central server moderates events, connects clients, and routes messages.
- Multiple Clients: Supports multiple users to publish and subscribe, encouraging inclusive conversations.
- Live Chat: Real-time messaging enables dynamic interactions and instant feedback.
- Event Moderation: Hub server ensures safety by monitoring and controlling events.
- Network Operation: Connects users from different locations and devices, expanding community reach.

### UML

![Gamer Hub UML]()
