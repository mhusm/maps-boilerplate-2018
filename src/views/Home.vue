<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Maria's Vue.js App"/>
    <div id="map"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import style from "@/styles.js";
import SnazzyInfoWindow from 'snazzy-info-window'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted: function(){
    const element = document.getElementById("map")
 
    const options = {
        zoom: 14,
        center: new google.maps.LatLng(47.071467, 8.277621),
        styles: style
    };

    this.map = new google.maps.Map(element, options);
    const plcoords = [
      {lat: 47.071978, lng: 8.262165 },
      {lat: 47.072978, lng: 8.292165 },
      {lat: 47.073978, lng: 8.292165 },
      {lat: 47.074978, lng: 8.282165 }
    ];
let polygon = new google.maps.Polygon({
  path: plcoords,
  strokeColor: '#4286f4',
  strokeOpacity: 1.0,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  map: this.map
});
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#map {
  height: 80vh;
  width: 80vw;
}
</style>
