<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="file" @change="uploadFile">
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
  name: "about",
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
  methods: {
    uploadFile: function(event) {
      let file = event.target.files[0];
      let fileName = file.name;
      let contentType = file.type;
      let reader = new FileReader();
      let spaceref;
      reader.onload = function(result) {
        manager
          .getSpace("7la5sjify8om")
          .then(space => {
            spaceref = space;
            return space.getEnvironment("master");
          })
          .then(environment =>
            environment.createUpload({ file: reader.result })
          )
          .then(upload => {
            console.log("creating asset...");
            return spaceref
              .createAsset({
                fields: {
                  title: {
                    "en-US": fileName
                  },
                  file: {
                    "en-US": {
                      fileName: fileName,
                      contentType: contentType,
                      uploadFrom: {
                        sys: {
                          type: "Link",
                          linkType: "Upload",
                          id: upload.sys.id
                        }
                      }
                    }
                  }
                }
              })
              .then(asset => {
                console.log("processing...");
                return asset.processForLocale("en-US", {
                  processingCheckWait: 2000
                });
              })
              .then(asset => {
                console.log("publishing...");
                return asset.publish();
              })
              .then(asset => {
                console.log(asset);
                return asset;
              });
          })
          .catch(err => {
            console.log(err);
          });
      };

      // Read in the image file as a data URL.
      //     reader.readAsDataURL(event.target.files[0]);
      reader.readAsArrayBuffer(event.target.files[0]);
    },
  },
  mounted: function() {
    /*
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
          console.log(entry);
          let bikespot = {
            image: entry.fields.portrait.fields.file.url,
            title: entry.fields.title
          };
          this.bikespots.push(bikespot);
          console.log(bikespot);
        });
      });
*/
    /*
    manager
      .getSpace("7la5sjify8om")
      .then(space => { 
        console.log(space);
        return space.getEnvironment('master')})
      .then((environment) => environment.createEntry("bikespot", {
          fields: {
            title: {
              "en-US": "new title" + Date.now()
            }
          }
        })
      )
      .then(entry => {
        console.log(entry)
        return entry.publish();
      })
      .catch(console.error);

      */
  }
};
</script>
<style scoped lang="scss">
img {
  max-width: 30vw;
}
</style>
