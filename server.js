const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded())

app.set ("view engine", "ejs")
app.use(require('./server/pages/router'))


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})