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
    let marker = new google.maps.Marker({
        position: {lat: 47.070978, lng: 8.282165},
        icon: 'icon.png',
        map: this.map
    });
    const contentString = `<div>
      <h1>Mein Titel</h1>
      <div>Mein Text...</div> 
    </div>`
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', event => {
      infowindow.open(this.map, marker);
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
