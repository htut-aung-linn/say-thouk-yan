const { schedule } = require('@netlify/functions')

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule('0 * * * *', async (event) => {
  const eventBody = JSON.parse(event.body)
  //  http://test-project-h.000.pe/Update.php

  // Making an HTTP GET request using fetch
fetch('http://test-project-h.000.pe/Update.php')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parsing the JSON data from the response
  })
  .then(data => {
    console.log(data); // Handling the data from the response
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  console.log(`Next function run at ${eventBody.next_run}.`)

  return {
    statusCode: 200,
  }
})

