# Techstack Setup for Studio Web/Mobile 2018
TODO add techstack figure here

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


## Setting up your IDE
* Install [Visual Studio Code](https://code.visualstudio.com/) or use your favourite IDE
* Install a Vue.js Plugin

## Creating a simple HTTP-Server for the deploymet
