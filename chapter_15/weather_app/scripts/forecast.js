class Forecast{
    constructor(){
        this.key = 'MfhY5eTMj4LwjJ3aN08Y0U1VcUNPJfFo';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.city = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    }
}



// get weather information

const  getWeather = async (id) => {
    
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}

// get city information 

const getCity = async (city) => {

    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

};

