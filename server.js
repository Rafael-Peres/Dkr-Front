const express = require('express');

const PORT = process.env.PORT || 8080;
const path = require('path');
const serverStatic = require('serve-static');

const app = express();

app.use(serverStatic(path.resolve(__dirname, 'build')));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log('Web app running'));
