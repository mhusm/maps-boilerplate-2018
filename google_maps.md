# Styling Google Maps

## Custom Styles

You can change the colour of map elemens by passing a style option when you create the map. The following example changes the colour
of the water and its labels. Try this in your *Home.vue* file inside the *mounted* function which should be there already.

```javascript
  mounted: function(){
    const element = document.getElementById("map")
    const styles = 
    [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#f39dde'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text',
      stylers: [{color: '#9e9e9e'}]
    }
    ];

    const options = {
        zoom: 14,
        center: new google.maps.LatLng(47.071467, 8.277621),
        styles: styles
    };

    this.map = new google.maps.Map(element, options);
  }
```
![styled map](/public/styles.png)

The colours in this example are set in hexadecimal format, indicated by the #. You can use a tool to help find the colour codes, for example [this one by Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool). But there are many others that you can find with a quick search.

Possible features that you can style are
* all
* administrative
* poi
* road
* transit
* water

Possible elements to style are 
* all (default)
* geometry
  * geometry.fill
  * geometry.stroke
* labels
  * labels.text
    * labels.text.fill
    * labels.text.stroke
  * labels.icon


You can find more details in [the maps documentation](https://developers.google.com/maps/documentation/javascript/style-reference).

## Using a tool and a separate file for the styles
Google Maps offers [a tool](https://mapstyle.withgoogle.com/) to help with styling.

![map styling tool](/public/tool.png)

This will generate the styles for your. The code that is generated is quite long. We could just replace lines 12 to 22 in the example above with the generated code. However, this will make the code a bit hard to read. That is why we move that code to a separate file and import it.
* In the folder *src* create a file named *style.js*
* Copy the code from the tool into a variable named *mystyle* so that it looks like this.
```javascript
let mystyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
...
    }
  ];
```
* Export the *mystyle* variable by adding the following line to the file
```javascript
export default mystyle;
```
* Import the new file in *Home.vue*
```javascript
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import mystyle from "@/styles.js";
```
* Use the new style
```javascript
   mounted: function(){
    const element = document.getElementById("map")
 
    const options = {
        zoom: 14,
        center: new google.maps.LatLng(47.071467, 8.277621),
        styles: mystyle
    };

    this.map = new google.maps.Map(element, options);
  }
```

## Markers
Markers are documente [here](https://developers.google.com/maps/documentation/javascript/markers).
To add a default marker use the following code inside the *mounted* function, but after you have created the map.
```javascript
    let marker = new google.maps.Marker({
        position: {lat: 47.070978, lng: 8.282165},
        map: this.map
    });
```

![marker](/public/marker.png)

You can add your own custom icon to a marker by providing a URL for an image.
```javascript
    let marker = new google.maps.Marker({
        position: {lat: 47.070978, lng: 8.282165},
        icon: 'http://icons.iconarchive.com/icons/iconsmind/outline/64/Bicycle-icon.png',
        map: this.map
    });
```

![custom marker](/public/custom.png)

You can also create your own icon and store in the *public* folder. Then, you don't need to provide the full path.
```javascript
    let marker = new google.maps.Marker({
        position: {lat: 47.070978, lng: 8.282165},
        icon: 'myicon.png',
        map: this.map
    });
```



### Adding an removing markers dynamically
Use the `setMap` function to add a marker to a map dynamically.
```javascript
marker.setMap(this.map);
```
To remove the marker, pass in `null` as an argument.
```javascript
marker.setMap(null);
```

### Adding multiple markers in one go
You can add multiple markers with different locations like this:
```javascript
const locations = [
  {lat: 47.071978, lng: 8.262165 },
  {lat: 47.072978, lng: 8.292165 },
  {lat: 47.073978, lng: 8.292165 },
  {lat: 47.074978, lng: 8.282165 }
];
let markers = [];
  locations.map(loc => {
  markers.push(new google.maps.Marker({
     position: {lat: loc.lat, lng: loc.lng},
     map: this.map
  }));
});
```

## Finding coordinates
To find the coordinate of a location, open Google Maps. Right click on the location and choose *What's here?* from the menu.
![Finding coordinates on a map](/public/coordinates.PNG)

## Info windows
Info windows can show more information on a location, for example, after a marker has been clicked. They are documented [here](https://developers.google.com/maps/documentation/javascript/infowindows).

![Info window](/public/infowindow.png)

Define the content of an info window.
```javascript
const contentString = `<div>
  <h1>Mein Titel</h1>
  <div>Mein Text...</div> 
</div>`
let infowindow = new google.maps.InfoWindow({
  content: contentString
});
```
Tie it to a marker so that it opens when the marker is clicked.
```javascript
    marker.addListener('click', event => {
      infowindow.open(this.map, marker);
    }); 
```
