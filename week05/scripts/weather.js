const currentTemp = document.querySelector('#current-temp'); 
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption');

let key = "3db2edada16f354eb60ea743298dee3d" ;
let lat = "6.138" ;
let lon = "1.212";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch (url); 
        if (response.ok) {
            const data = await response.json (); 
            displayResults (data);
        }else {
            throw Error (await response.text());
        } 
    }catch (error) {
        console.log(error);
    }   
}


function displayResults(data) { 
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc); 
    captionDesc.textContent = `${desc}`;
}
apiFetch();