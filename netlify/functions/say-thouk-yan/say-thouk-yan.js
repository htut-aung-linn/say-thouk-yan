const { schedule } = require('@netlify/functions')
import fetch from 'node-fetch';
// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func

module.exports.handler = schedule('*/5 * * * *', async (event) => {
  const eventBody = JSON.parse(event.body)
  //  http://test-project-h.000.pe/Update.php
  // Making an HTTP GET request using fetch
  console.log('init node fetch');
  const url = 'https://test-project-h.000.pe/Update.php';
  try {
    console.log('calling link');
    const response = await fetch(url);
    console.log(response);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  console.log(`Next function run at ${eventBody.next_run}.`)

  return {
    statusCode: 200,

  }
})

