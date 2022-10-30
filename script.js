let info_weather = {
    "api_key" : "0bc362bab4abc3f539e3e0bc8d80d01d",

    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city+"&units=imperial&appid="+this.api_key

        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity } = data.main;
        const {speed} = data.wind;
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp +"°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " +speed + " mph";
        document.querySelector(".Weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +name +"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

document
.querySelector(".searchBox button")
.addEventListener("click", function () {
    info_weather.search()

});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        info_weather.search()
    }
});

info_weather.fetchWeather("Buffalo");