# How to do \*things\* in the project

## Changing the content
You can add, remove or change text and images directly in the soure code by editing the HTML templates in the .vue files.
This okay if you just want to experiment. Otherwise I recommend going through the CMS. If you use the CMS you can change content independent from the source code. When you change the source code, you have to re-deploy it for the changes to take effect. This means you have to push the changes to Github from where they get pulled into Heroku. Heroku then has to restart the server. With the CMS, you can get all changes immediately without restarting the server.

To get started with Contentful use [this guide](https://www.contentful.com/r/knowledgebase/contentful-101/). 

When you introduce new content types that are not yet shown in the application, work together with the technical person in the team to set this up.

## Adding a location to the map
You can use the Location type in Contentful to store coordinates.

## Using the location of a (mobile) device
You can access the geolocation of your users. They have to give you permission to do that.
Use [this guide](https://developers.google.com/maps/documentation/javascript/geolocation) to learn how you can access the location from the browser. You can find further resources on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Testing the project on a mobile device
If you are developing your project for a mobile device, you should do most of your testing on a mobile device. You have several options.

### Device emulation on the desktop
Your browser can emulate a mobile device.
* In Chrome press ctrl/cmd + shift + i to open the developer tools
* Toggle the mobile device emulation mode with the little device icon in the toolbar
* In the device mode you can choose a predefined device or choose an arbitrary screen size.
* You can also emulate geolocations.
* Read more about it in [the documentation](https://developers.google.com/web/tools/chrome-devtools/device-mode/)

### Connecting a real device
### Debugging with a real device


