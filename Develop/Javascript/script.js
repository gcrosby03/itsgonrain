var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.7626119&lon=-88.1263791&appid=bbdea218b6860389efe69d124a71b340", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));