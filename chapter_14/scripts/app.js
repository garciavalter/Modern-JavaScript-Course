const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    //destructure properties

    const {cityDets, weather } = data;
    // console.log(weather);

       // update details template
    details.innerHTML = `
    
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>temp</span>
        <span>${weather.Temperature.Metric.Value}&deg;C</span>
    </div>

    `;

   // update the night/day && icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);
   
    // remove the d-none class if present

    if (card.classList.contains('d-none')){   
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {

    // check if already have data stored
    if (localStorage.length == 0) {
        localStorage.setItem('dataIndex', 0);
    }
    dataIndex = localStorage.getItem('dataIndex');
    
   //check if city is already stored
   let check = {};
   let storeCode = 0;

    for (let i = 1; i <= dataIndex; i++){
        check = JSON.parse(localStorage.getItem(i));
        let englishName = check.EnglishName;
        console.log(englishName);
        console.log('attempt: ' + i);
        if (city.toLowerCase() == englishName.toLowerCase()) {
            storeCode = i;
            cityDets = JSON.parse(localStorage.getItem(storeCode));
            weather =  JSON.parse(localStorage.getItem(cityDets.Key));
            console.log('the data is local')        
        
            return { cityDets, weather};    
        }
    }

    console.log(storeCode);
    if (storeCode === 0) {
        
    // download data from web
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    dataIndex++;
    localStorage.setItem(dataIndex, JSON.stringify(cityDets));
    localStorage.setItem(cityDets.Key, JSON.stringify(weather));
    localStorage.setItem('dataIndex', dataIndex);
    console.log('the data was fetched');
    
    return { cityDets, weather};
    
    } 
    
};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();
  
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ul with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});




