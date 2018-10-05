# Techstack Setup for Studio Web/Mobile 2018
TODO add techstack figure here
This setup needs to be done once per group. The following instructions assume that you have a technical background. To see the instructions on how to use the projects that your team mate has created go here TODO.


## About this guide
Instructions starting with *$* should be typed into a command line. 
You can open a command window on Windows by pressing the windows key and typing *cmd*.

## Install Node.js or check your version

* Install Node.js from [https://nodejs.org/en/](https://nodejs.org/en/)
* If you have it installed already, check the version in the command line: $ node -v 
* Make sure you have at least version 8.11, if not update.

## Creating a Vue.js project

We are going to use the [Vue Command Line Interface (CLI)](https://cli.vuejs.org/guide/creating-a-project.html#vue-create).
Run the following commands in the command line.
* $ npm install -g @vue/cli
* $ vue ui
* In the UI choose a name and a location for the project.
* Choose manual presets.
* In addition to the defaults, also add the Router and CSS Preprocessors
* Pick Sass and ESlint + Prettier options

## Using the Vue CLI service

Dev server with Hot-Module-Replacement (HMR)
* $ npm run serve

Build production ready bundle
* $ npm run build


## Setting up your development environment
The goal of this step is to have an IDE setup so that you can work productively.

* Install [Visual Studio Code](https://code.visualstudio.com/) or use your favourite IDE
* Open your project folder
* Open the file *App.vue*
* Install a Vue.js Plugin
* Start the dev server from a terminal within VS Code
* Look at the folders *components* and *views*
* Update the message in the file home.vue and look at the change in the browser.

## Creating a simple HTTP-Server for the deployment
The goal of this step is to have a simple HTTP server for static files that we can use when we deploy the app.
We are going to use Node.js with the [Express framework](http://expressjs.com/).

* npm install express -save
* In the top level of your project folder create a file named *server.js*
* Add the following code to the file

```javascript
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

// serve the index.html as starting page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
});

// serve all files in dist
app.use(express.static('dist'));

http.listen(process.env.PORT || 8090, function(){
    console.log(`listening on *: ${http.address().port}`);
});
```

* $ node server.js
* Check in the browser that the website is served

## Adding Google maps
The goal of this step is to add Google Maps to your project.

* Go to the [Google Cloud platform console](https://console.cloud.google.com/)
* Create a new project
* Enable the Maps Javascript API
* Go to *Credentials* and create an API Key
* Restrict the API to *localhost* (later you will also need to add Heroku here). Only websites that are listed here can access Google Maps with your key. This step is needed to make sure that no one else can use your key and your free quota on their website.
