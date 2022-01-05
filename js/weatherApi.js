// http://api.openweathermap.org/data/2.5/weather?q=J%C3%B6nk%C3%B6ping&units=metric&appid=bee75b3917b784276ddbd6f1ae2a4057
//Dokumentation:  https://openweathermap.org/current
//                https://openweathermap.org/weather-conditions


export async function weatherApi(weatherObject) {
    let siteMain = document.getElementById("siteMain");
    let weatherContainer = document.createElement("div");
        weatherContainer.id = "weatherContainer";

    let descriptionText = document.createElement("p");
        descriptionText.innerText = weatherObject.weather[0].description;
        descriptionText.className = "weather-description"; 

    let tempText = document.createElement("p");
        tempText.innerText = `Temperatur: ${weatherObject.main.temp} °C`;
        tempText.className = "temp-text";

    let tempFeelsLikeText = document.createElement("p");
        tempFeelsLikeText.innerText = `Känns som: ${weatherObject.main.feels_like} °C`;
        tempFeelsLikeText.className = "temp-text";

    let windText = document.createElement("p");
        windText.innerText = `Vindhastighet: ${weatherObject.wind.speed} m/s`;
        windText.className = "wind-text";

    let iconCode = weatherObject.weather[0].icon;
    let weatherIcon = new Image();
        weatherIcon.src = " http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
        weatherIcon.className = "weather-icon";

        
    weatherContainer.append(descriptionText, weatherIcon, tempText, tempFeelsLikeText, windText);
    siteMain.append(weatherContainer);
}
