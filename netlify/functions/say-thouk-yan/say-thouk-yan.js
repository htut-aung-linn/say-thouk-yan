const { schedule } = require('@netlify/functions')
// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func

module.exports.handler = schedule('*/10 * * * *', async (event) => {
  const eventBody = JSON.parse(event.body)
  //  http://test-project-h.000.pe/Update.php
  // Making an HTTP GET request using fetch
  console.log('init node fetch');
  const url = 'https://mega-h-tesk.000webhostapp.com/doSchedule.php';
  try {
    console.log('calling link');
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }else{
      console.log("Request successful!");
    }
    
  } catch (error) {
    console.log('Error fetching data:', error);
  }
  console.log(`Next function run at ${eventBody.next_run}.`)

  return {
    statusCode: 200,

  }
})
