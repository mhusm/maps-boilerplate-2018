<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div >{{title}}</div>
    <img :src="image"/>
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
  data: function () {
    return {
      title: "",
      image: "",
    }
  },
  mounted: function() {
    contentfulClient.getEntry("6BVJUl5RuMyU48W2MIuAsc").then(entry => {
      this.title = entry.fields.title;
      console.log(entry.fields.portrait.fields.file.url);
      this.image = entry.fields.portrait.fields.file.url;
    });
  }
};
</script>
