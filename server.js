// Importing required modules
const http = require('http');
const app = require('./app');
const { connectToMysql } = require('./mysql');

const PORT = process.env.PORT || 8000;
// Creating a http server
const server = http.createServer(app);

async function startServer() {
  // await is used to wait for the database connection to be established before the server can be started
  await connectToMysql();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

// Starting the server
startServer();