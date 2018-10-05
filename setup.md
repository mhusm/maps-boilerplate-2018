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

### Getting an API key
* Go to the [Google Cloud platform console](https://console.cloud.google.com/)
* Create a new project
* Enable the Maps Javascript API
* Go to *Credentials* and create an API Key
* Restrict the API to *localhost* (later you will also need to add Heroku here). Only websites that are listed here can access Google Maps with your key. This step is needed to make sure that no one else can use your key and your free quota on their website.
* In the file *index.html* add the following line inside the `head`: `<script src="https://maps.googleapis.com/maps/api/js?key=API-Key"></script>` 
* Replace `API-Key` with your API key from Google.

### Adding a map to your Vue application
* In the file *home.vue* add a `<div id="map"></div>`. This is where the map will be displayed.
* Give the map a height and a width using CSS 
```html
<style scoped lang="scss">
#map {
  height: 80vh;
  width: 80vw;
}
</style>
```
* Initialize the map and set it to a location
```javascript
export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted: function(){
    const element = document.getElementById("map")
    const options = {
        zoom: 14,
        center: new google.maps.LatLng(47.071467, 8.277621)
    }
    this.map = new google.maps.Map(element, options);
  }
};
```
* Check in the browser, if the map is showing up

## Integrating the Contentful CMS
The goal of this step is to have the Contentful CMS integrated in your project. With a CMS, content (images, texts) can be created independent from the code. This way, you don't have to re-deploy the project whenever the content changes. We are going to use [Contentful](https://www.contentful.com/) as a cloud-based, headless CMS. In headless CMS, no templates are used in the CMS, instead the data is sent over a Rest-API to our Vue.js client.

### Creating an account and a project
* Go to the [Contentful website](https://www.contentful.com/) 
* Create an account
* Create an organization
* A sample project is created for you

### Integrating Contentful in your Vue application
* $ npm install contentful --save
* Import the contenful library in *main.js*
```javascript
import {createClient} from 'contentful'
```
* Configure the client with your access key and space token. We add the contentfulClient to the window Object to make it available globally in our application.
```javascript
window.contentfulClient = createClient({
    accessToken: '64d6a750c7ae5a7c93603911e56166b198ce5ab94be05261848e8a280ba8972c',
    space: '7la5sjify8om'
});
```
* Get data from Contenful and print it to the console.
```javascript
contentfulClient.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);
```
* Open the console in the browser and look at the ouptut.



