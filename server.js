let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');
let serveStatic = require('serve-static');

// serve the index.html as starting page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
});

// serve all files in dist
//app.use(express.static('dist'));
app.use(serveStatic(__dirname + "../dist"));

http.listen(process.env.PORT || 8090, function(){
    console.log(`listening on *: ${http.address().port}`);
});


