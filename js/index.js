// api url
const api_url = 
      "https://api.adviceslip.com/advice";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    const title = document.querySelector('.container__title');
    const advice = document.querySelector('.container__advice');
    if(response) {
        title.innerHTML = "ADVICE #" + data.slip.id;
        advice.innerHTML = '“' + data.slip.advice + '”'
    }

}
// Calling that async function
getapi(api_url);
  