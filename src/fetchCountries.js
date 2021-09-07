export { fetchCountries }

const BASE_URL = ''


function fetchCountry(input){
    return fetch(`https://restcountries.eu/rest/v2/name/${input}`)
      .then(response => {
          return response.json();
      })
    }