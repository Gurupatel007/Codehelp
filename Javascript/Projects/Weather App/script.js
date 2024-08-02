const buttons = document.querySelectorAll('.btn');
const currentWeatherBtn = document.getElementById("currentWeatherBtn");
const searchWeatherBtn = document.getElementById("searchWeatherBtn");
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherType = document.getElementById('weatherType');
const weatherTypeIcon = document.getElementById('weatherTypeIcon');
const windSpeed = document.getElementById('windSpeed');
const humidity = document.getElementById('humidity');
const clouds = document.getElementById('clouds');
const result = document.querySelector('.result');
const searchDiv = document.querySelector('.searchDiv');
const searchBtn = document.getElementById('searchBtn');
const otherParams = document.querySelector('.otherParams');

const API_KEY = '7b1f2e7f4c8de982ca29571bd3429ef5';
let currentBtn = 'currentWeatherBtn';

function showUserWeatherBtn() {
    searchDiv.classList.add("hidden");
    result.classList.remove("hidden");
    otherParams.classList.remove("hidden");
    document.querySelector('hr').classList.remove("hidden");
    currentWeatherBtn.classList.add("active");
    searchWeatherBtn.classList.remove("active");

    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                cityName.textContent = data.name;
                temperature.textContent = Math.round(data.main.temp - 273.15) + '°C';
                weatherType.textContent = data.weather[0].description;
                windSpeed.textContent = data.wind.speed + 'm/s';
                humidity.textContent = data.main.humidity + '%';
                clouds.textContent = data.clouds.all + '%';
                weatherTypeIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`;
                result.classList.remove("hidden");
            })
            .catch(err => console.log(err));
    });

}

function showsearchWeatherBtn() {
    // searchDiv.style.display = 'block';
    searchDiv.classList.remove("hidden");
    result.classList.add("hidden");
    searchWeatherBtn.classList.add("active");
    currentWeatherBtn.classList.remove("active");

    searchBtn.addEventListener('click', () => {
        let inputCity = document.getElementById('searchInput').value;
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                cityName.textContent = data.name;
                temperature.textContent = Math.round(data.main.temp - 273.15) + '°C';
                weatherType.textContent = data.weather[0].description;
                windSpeed.textContent = data.wind.speed + 'm/s';
                humidity.textContent = data.main.humidity + '%';
                clouds.textContent = data.clouds.all + '%';
                weatherTypeIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`;
                document.getElementById('searchInput').value = '';
                result.classList.remove("hidden");
                otherParams.classList.remove("hidden");
            })
            .catch(err => {
                console.log(err);
                cityName.textContent = '';
                temperature.textContent = 'City Not Found';
                weatherType.textContent = '';
                windSpeed.textContent = '';
                humidity.textContent = '';
                clouds.textContent = '';
            weatherTypeIcon.innerHTML = `<img src="./assets/not-found.png" width=100px height=100px/>`;
                otherParams.classList.add("hidden");
                document.querySelector('hr').style.display = 'none';
                result.classList.remove("hidden");
                document.getElementById('searchInput').value = '';
            });
    });

}



function manageContent(currentBtn) {
    if (currentBtn === "currentWeatherBtn") {
        showUserWeatherBtn();
    }
    else {
        showsearchWeatherBtn();
    }
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentBtn = button.id;
        manageContent(currentBtn);
    })
})

function init() {
    currentWeatherBtn.classList.add("active");
    showUserWeatherBtn();
}
init();