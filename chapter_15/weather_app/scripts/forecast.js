class Forecast{
    constructor(){
        this.key = 'MfhY5eTMj4LwjJ3aN08Y0U1VcUNPJfFo';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather};
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
        return data[0];
    }
}
