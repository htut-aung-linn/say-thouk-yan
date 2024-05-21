const { schedule } = require('@netlify/functions')

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule('*/5 * * * *', async (event) => {
  const eventBody = JSON.parse(event.body)
  //  http://test-project-h.000.pe/Update.php

  // Making an HTTP GET request using fetch
const https = require('https');

// Making an HTTP GET request
const url = 'http://test-project-h.000.pe/Update.php';

https.get(url, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

  console.log(`Next function run at ${eventBody.next_run}.`)

  return {
    statusCode: 200,
  }
})

