<template>
  <div class="file">
    <h1>Upload a file</h1>
    <input type="file" @change="uploadFile">
    <img :src="imgSrc">
    <button @click="upload">Upload</button>
   </div>
</template>
<script>

export default {
  name: "file",
  data: function() {
      return {
          imgSrc: "",
          file: {}
      }
  },
  methods: {
    uploadFile: function(event) {
      this.file = event.target.files[0];

      let urlReader = new FileReader();
      urlReader.onload = function(result) {
          console.log(urlReader.result);
          console.log(result);
          this.imgSrc  = urlReader.result;
      }.bind(this);
      urlReader.readAsDataURL(this.file)

    },
    upload: function(){
      let fileName = this.file.name;
      let contentType = this.file.type;
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
      reader.readAsArrayBuffer(this.file);

    }
  }
 
};
</script>

<style scoped>
    img {
        max-width: 60vw;
    }
</style>
