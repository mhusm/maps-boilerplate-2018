# How to do \*things\* in the project

## Changing the content
You can add, remove or change text and images directly in the soure code by editing the HTML templates in the .vue files.
This okay if you just want to experiment. Otherwise I recommend going through the CMS. If you use the CMS you can change content independent from the source code. When you change the source code, you have to re-deploy it for the changes to take effect. This means you have to push the changes to Github from where they get pulled into Heroku. Heroku then has to restart the server. With the CMS, you can get all changes immediately without restarting the server.

To get started with Contentful use [this guide](https://www.contentful.com/r/knowledgebase/contentful-101/). 

When you introduce new content types that are not yet shown in the application, work together with the technical person in the team to set this up.

## Adding a location to the map
link to the other file

## Using the location of a (mobile) device
You can access the geolocation of your users. They have to give you permission to do that.
Use [this guide](https://developers.google.com/maps/documentation/javascript/geolocation) to learn how you can access the location from the browser. You can find further resources on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Testing the project on a mobile device
### Device emulation on the desktop
* Emulating the location
### Connecting a real device
### Debugging with a real device


