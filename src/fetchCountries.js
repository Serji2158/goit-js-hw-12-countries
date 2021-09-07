const BASE_URL = 'https://restcountries.eu/rest/v2/name';


function fetchCountry(input){
    return fetch(`${BASE_URL}/${input}`)
      .then(response => {
          return response.json();
      })
    }

export default fetchCountry