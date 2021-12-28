/* 
Importera moduler
*/
import { getContries, getCitys } from './fetch.js';
getContries().then(contries => {
        console.log("länder", contries)     
});
getCitys().then(citys => {
        console.log("städer", citys)
});
