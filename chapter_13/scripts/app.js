const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure properties

    const {cityDets, weather } = data;

    // update details template
    details.innerHTML = `
    
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>temp</span>
        <span>${weather.Temperature.Metric.Value}&deg;C</span>
    </div>

    `;

    // remove the d-none class if present

    if (card.classList.contains('d-none')){
    
        card.classList.remove('d-none');

    }
};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather};

};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ul with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});




