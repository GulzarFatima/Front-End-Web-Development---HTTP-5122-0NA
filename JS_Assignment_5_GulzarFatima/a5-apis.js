// Assignment 05 - OPEN WEATHER MAP API - API data access
/// String concatination, functions, DOM, event listeners, AJAX, API DOC, Extract valus from JSON data set

// CURRENT WEATHER APPLICATION
// NOTES:
    // 1. user will see two city (Toronto & Kingston) buttons. 
    // 2. each button with the name of a city: Toronto, Kingston.
    // 3. There is a section. <section id="output">
    // 4. This section provides 'current weather data' for the selected city.  ✓
    // 5. Using XMLHttpRequest for point .4. ✓
    // 6. OUTPUT FOLLOWING on the webpage. 
    // 7. name of the city selected. ✓
    // 8. current temperature in 'celsius' (using API parameter) with text to indicate °C.✓
    // 9. current weather conditions.  ✓
    // 10. API 'icon' that represents current weather conditions.✓
    // 11. choose the 5th property (Humidity) with contextual text (%). ✓
    // 12. button interaction✓

window.onload = function() {

// Defining variables
var torontoButton = document.getElementById("Toronto");
var kingstonButton = document.getElementById("Kingston");
var cityOutput = document.getElementById("location");
var iconOutput = document.getElementById("icon");
var temperatureOutput = document.getElementById("temperature");
var conditionsOutput = document.getElementById("conditions");
var errorOutput = document.getElementById("error");
var output = document.getElementById("output");
var humidityOutput = document.getElementById("humidity");

//API KEY "cf13148a0a954dd3c5228cb952321ddb";

// clear previous data
function clear() {
    cityOutput.innerHTML = "";
        iconOutput.innerHTML = "";
        temperatureOutput.innerHTML = "";
        conditionsOutput.innerHTML = "";
        errorOutput.innerHTML = "";
        humidityOutput.innerHTML = "";
}

// function to call API for Toronto
function toronto() {

    clear();

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=cf13148a0a954dd3c5228cb952321ddb&units=metric";

    // call request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send(null);


    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4) { 
            if (xhr.status === 200) {
                var DATA = xhr.response;
                console.log(DATA);

                output.style.display = "block";

                //update page with weather data
                //icon setup
                var iconCode = DATA.weather[0].icon;
                var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            
                iconOutput.innerHTML = `<img src="${iconURL}">`;
                cityOutput.innerHTML = DATA.name;
                temperatureOutput.innerHTML = Math.round(DATA.main.temp) + "°C";
                humidityOutput.innerHTML = DATA.main.humidity + "%";
                conditionsOutput.innerHTML = DATA.weather[0].description;

                //capitalise initial letters

            }

            else {

                //error
                output.style.display = "block";
                errorOutput.innerHTML - "API call was unsuccessful";
                console.log(xhr.status);
            }

        }
    }
}

//function to call API for Kingston
function kingston() {

    clear();

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Kingston&appid=cf13148a0a954dd3c5228cb952321ddb&units=metric";

    // call request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send(null);

    xhr.onreadystatechange = function() {

        if (xhr.readyState === 4) { 
            if (xhr.status === 200)  {
                var DATA = xhr.response;
                console.log(DATA);

                output.style.display = "block";

                //update page with weather data 
                //icon setup
                var iconCode = DATA.weather[0].icon;
                var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
                iconOutput.innerHTML = `<img src="${iconURL}">`;

                cityOutput.innerHTML = DATA.name;
                temperatureOutput.innerHTML = Math.round(DATA.main.temp) + "°C";
                humidityOutput.innerHTML = DATA.main.humidity + "%";
                conditionsOutput.innerHTML = DATA.weather[0].description;

                //capitalise initial letters

            }

            else {

                //error
                output.style.display = "block";
                errorOutput.innerHTML - "Something went wrong!";
                console.log(xhr.status);
            }

        }
    }

}

torontoButton.onclick = toronto;
kingstonButton.onclick = kingston;

}
