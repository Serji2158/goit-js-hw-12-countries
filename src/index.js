'use strict';

import './sass/main.scss';
import { refs } from './getrefs';
import countryCard from './templates/countryinfo.hbs';
import countryList from './templates/countrylist.hbs';
import debounce from 'lodash.debounce';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountry from './fetchCountries';
  
function onSearch (e){
    e.preventDefault();
  const input = e.target;

   const valueSearch = input => {
    fetchCountry(input)
        .then(country => {
           if(country.length === 1){
             return refs.countryListRef.innerHTML = countryCard(country);
           };
           if(country.length >=2 && country.length <= 10){
             return refs.countryListRef.innerHTML = countryList(country);
           }
            else{
              refs.countryListRef.innerHTML = '';
              return alert({
              text:'Too many matches found. Please, enter a more specific query!',
              delay: 500
              });
            };
        })
        .catch(error => {console.log(error)});
   }
    valueSearch(input.value);
}

refs.inputRef.addEventListener('input', debounce(onSearch, 500));