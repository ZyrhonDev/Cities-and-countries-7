/* 
Importera moduler
*/
import { getContries, getCitys } from './fetch.js';
getContries().then(contries => {
        console.log("länder", contries)     
});
getCitys().then(citys => {
        console.log("städer", citys)
        navBar.addEventListener ("click", function (evt) {
                console.log(evt.target.id);
                for (let i = 0; i < citys.length; i++) {
                        if (evt.target.id == citys[i].id) {
                                mainText.innerHTML = "";
                                mainText.innerText = "invånarantal: " + citys[i].population;
                        }
                }
        })
});

import { printCountries } from './nav.js';

const navBar = document.getElementById ("navBar");
const mainText = document.getElementById ("siteMain");

