import { LightningElement, track } from 'lwc';
import getWeather from '@salesforce/apex/WeatherController.getWeather';

export default class WeatherApp extends LightningElement {
    @track cityName = '';
    @track weatherData;
    @track error;
    weatherIcon;

    handleInputChange(event) {
        this.cityName = event.target.value;
    }

    fetchWeather() {
        if (this.cityName) {
            getWeather({ cityName: this.cityName })
                .then((result) => {
                    if (result) {
                        this.weatherData = result;
                        this.weatherIcon = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
                        this.error = null;
                    } else {
                        this.weatherData = null;
                        this.error = 'Weather data not found';
                    }
                })
                .catch((error) => {
                    this.weatherData = null;
                    this.error = 'Error fetching weather data';
                    console.error(error);
                });
        } else {
            this.error = 'Please enter a city name';
        }
    }
}