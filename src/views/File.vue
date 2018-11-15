<template>
  <div class="file">
    <h1>Upload a file</h1>
    <input type="file" @change="uploadFile">
   </div>
</template>
<script>

export default {
  name: "file",
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
  }
 
};
</script>