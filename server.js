const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/quiz'));

app.listen(process.env.PORT || 8080)

//pathLocationStrategy

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/quiz/index.html'));
})

console.log('Console Listening!');