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
    }

    this.map = new google.maps.Map(element, options);
  }
```
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
Google Maps offers [a tool](https://mapstyle.withgoogle.com/) to help with styling. This will generate the styles for your. The code that is generated is quite long. We could just replace lines 12 to 22 in the example above with the generated code. However, this will make the code a bit hard to read. That is why we move that code to a separate file and import it.
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
    }

    this.map = new google.maps.Map(element, options);
  }
```

## Markers
