import { wikiApi } from './wikiApi.js';
import { weatherApi } from './weatherApi.js';
import { addVisitedCity } from "./addVisited.js";

export async function addCityInfoWrapper(cities) {
    
    let siteMain = document.getElementById("siteMain");

    //Selektar alla ellement med classen city (så alla städer)
    let listItems = document.querySelectorAll(".city");
    

    //Skapar en click event listener till varje selected element
    listItems.forEach(element => {
        element.addEventListener("click", (e) => {        
                     
            
            //Hämtar text innehållet från det man clickar på
            let userChoice = e.target.textContent;
            let selectedCity = localStorage.setItem("selectedCity", e.target.textContent);
            
            //Printar population
            for (var i in cities){ 
                let cityHeading = document.createElement("h2");
                    cityHeading.innerText = cities[i].stadname;
                let populationNumber = document.createElement("p");             
                    populationNumber.innerText = `Population: ${cities[i].population}`;
                let x = cities[i].stadname;
                let city = document.getElementById(x);
                
                if(city){
                    if (userChoice === city.id){                        
                        siteMain.innerHTML=""; 
                        siteMain.append(cityHeading, populationNumber);                     
                    }; 
                }               
            };

            //Wiki API
            fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + userChoice)
            .then((response) => response.json())
            .then((data) => wikiApi(data));
            

            //Väder API
            fetch("http://api.openweathermap.org/data/2.5/weather?q=" + userChoice + "&units=metric&appid=bee75b3917b784276ddbd6f1ae2a4057" )
            .then((response) => response.json())
            .then((data) => weatherApi(data));


            //Besökt knapp
            addVisitedCity(cities)

        })
    })
};
