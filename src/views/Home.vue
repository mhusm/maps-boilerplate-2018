<template>
  <div class="home">
    <img alt="Vue logo" :src="logo">
    <HelloWorld msg="Welcome to Maria's Vue.js App"/>
    <div id="map"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import style from "@/styles.js";
import SnazzyInfoWindow from "snazzy-info-window";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      logo: require("../assets/logo.png")
    }
  },
  mounted: function() {
    const element = document.getElementById("map");
    const styles = [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#f39dde" }]
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [{ color: "#9e9e9e" }]
      }
    ];

    const options = {
      zoom: 14,
      center: new google.maps.LatLng(47.071467, 8.277621),
      styles: styles
    };

    this.map = new google.maps.Map(element, options);

    let marker = new google.maps.Marker({
      position: { lat: 47.070978, lng: 8.282165 },
      icon:
        "http://icons.iconarchive.com/icons/iconsmind/outline/64/Bicycle-icon.png",

      map: this.map
    });

    const contentString = `<div>
  <h1>Mein Titel</h1>
  <div>Mein Text...</div> 
</div>`;
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    
    marker.addListener('click', event => {
      infowindow.open(this.map, marker);
    }); 

    console.log(contentfulClient);
    /*
    const plcoords = [
      { lat: 47.071978, lng: 8.262165 },
      { lat: 47.072978, lng: 8.292165 },
      { lat: 47.073978, lng: 8.292165 },
      { lat: 47.074978, lng: 8.282165 }
    ];
    let polygon = new google.maps.Polygon({
      path: plcoords,
      strokeColor: "#4286f4",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: this.map
    });
    */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#map {
  height: 100vh;
  width: 100vw;
  top: 0;

}
</style>
