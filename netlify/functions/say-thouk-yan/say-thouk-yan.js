const { schedule } = require('@netlify/functions')

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule('*/5 * * * *', async (event) => {
  const eventBody = JSON.parse(event.body)
  //  http://test-project-h.000.pe/Update.php

  // Making an HTTP GET request using fetch
const fetch = require('node-fetch'); // Making an HTTP GET request 
  fetch('http://test-project-h.000.pe/Update.php').then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.error('Error making GET request:', error); });

  console.log(`Next function run at ${eventBody.next_run}.`)

  return {
    statusCode: 200,
  }
})

