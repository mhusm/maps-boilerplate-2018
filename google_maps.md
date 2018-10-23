# Styling Google Maps

## Custom Styles

You can change the colour of map elemens by passing a style option when you create the map. The following example changes the colour
of the water and its labels. Try this in your *Home.vue* file.

```javascript
  mounted: function(){
    const element = document.getElementById("map")
    const styles = [
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
