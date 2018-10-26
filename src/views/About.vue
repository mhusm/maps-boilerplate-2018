<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(spot, index) in bikespots" :key="index">
        <div >{{index+1}}. {{spot.title}}</div>
        <img :src="spot.image"/>
      </li>
    </ul>
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
      title: "",
      image: "",
      bikespots: []
    };
  },
  mounted: function() {
    contentfulClient.getEntry("6BVJUl5RuMyU48W2MIuAsc").then(entry => {
      this.title = entry.fields.title;
      console.log(entry.fields.portrait.fields.file.url);
      this.image = entry.fields.portrait.fields.file.url;
    });

    contentfulClient
      .getEntries({
        content_type: "bikespot"
    })
    .then(entries => {
        console.log(JSON.stringify(entries));
        entries.items.forEach(entry => {
          console.log(entry)
          let bikespot = {image: entry.fields.portrait.fields.file.url, title: entry.fields.title};
          this.bikespots.push(bikespot);
          console.log(bikespot);
        });
    });
  }
};
</script>
<style scoped lang="scss">
img {
  max-width: 30vw;
}

</style>
