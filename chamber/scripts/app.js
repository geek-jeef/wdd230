const currentYear = (new Date).getFullYear();
let yearParagraph = document.querySelector("#year");
yearParagraph.innerHTML = "" + currentYear;
let lastUpdated = document.querySelector("#lastModification");
lastUpdated.innerHTML = "Last Updated : " + document.lastModified;
const mainnav = document.querySelector("nav"),
    hambutton = document.querySelector("#hamburger"),
    navbar = document.querySelector("nav");
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show"), hambutton.classList.toggle("show"), navbar.classList.toggle("navigation-hidden")
});
const modeButton = document.querySelector("#mode"),
    html = document.querySelector("html");
modeButton.addEventListener("click", () => {
    modeButton.textContent.includes("🌙") ? (html.classList.toggle("dark"), modeButton.textContent = "☀️") : (html.classList.toggle("dark"), modeButton.textContent = "🌙")
}), document.addEventListener("DOMContentLoaded", (function () {
    if (document.getElementById("weather_temp")) {
        const weatherApiURL = "https://api.open-meteo.com/v1/forecast?latitude=6.136629&longitude=1.222186&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,pressure_msl,visibility";
        async function getWeatherData() {
            try {
                const response = await fetch(weatherApiURL);
                if (!response.ok) throw Error(await response.text()); {
                    const data = void 0;
                    getWeatherTranslator(await response.json())
                }
            } catch (error) {
                console.log(error)
            }
        }

        function isDay(time) {
            const hours = new Date(time).getHours();
            return hours >= 6 && hours < 18
        }

        function getWeatherTranslator(data) {
            httpRequest = new XMLHttpRequest, httpRequest.responseType = "json", httpRequest.open("GET", "./data/descriptions.json"), httpRequest.onreadystatechange = function () {
                httpRequest.readyState === XMLHttpRequest.DONE && (200 === httpRequest.status ? (translator = httpRequest.response, parseWeatherData(data, translator)) : alert("There was a problem with the request."))
            }, httpRequest.send()
        }

        function parseWeatherData(data, translator) {
            let values = data.current,
                units = data.current_units,
                weather_temp, weather_precipitation_probability, weather_code_image, weather_code_description;
            document.getElementById("weather_temp").textContent = `${values.temperature_2m} ${units.temperature_2m}`, document.getElementById("weather_precipitation_probability").textContent = `${values.precipitation_probability} ${units.precipitation_probability}`, document.getElementById("weather_code_image").src = isDay(values.time) ? translator[values.weather_code].day.image + " " : translator[values.weather_code].night.image + " ", document.getElementById("weather_code_description").textContent = isDay(values.time) ? translator[values.weather_code].day.description + " " : translator[values.weather_code].night.description + " "
        }
        getWeatherData()
    }
}));
const welcMsg = document.querySelector("#welc-msg");
if (welcMsg) {
    let lastLogStored = Number(localStorage.getItem("theLastLog")) || 0;
    const currentDate = Date.now();
    if (0 == lastLogStored) welcMsg.textContent = "Welcome! Let us know if you have any questions";
    else {
        const msToDays = void 0;
        let daysElapsed = (currentDate - lastLogStored) / 846e5;
        welcMsg.textContent = 0 !== daysElapsed && daysElapsed < 1 ? "Back so soon! Awesome!" : `You last visited ${daysElapsed.toFixed(0)} days ago `
    }
    localStorage.setItem("theLastLog", currentDate)
}
if (document.querySelector(".discover-page")) {
    const images = document.querySelectorAll(".discover-page img[data-src]");

    function preloadImage(img) {
        const src = img.getAttribute("data-src");
        src && (img.src = src, img.removeAttribute("data-src"), img.classList.toggle("preloaded"))
    }
    const imgOptions = undefined,
        imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                entry.isIntersecting && preloadImage(entry.target)
            })
        }, {
            threshold: 0,
            rootMargin: "0px 0px -200px 0px"
        });
    images.forEach(image => {
        imgObserver.observe(image)
    })
}