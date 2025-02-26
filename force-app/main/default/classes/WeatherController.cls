public with sharing class WeatherController {
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getWeather(String cityName) {
        String apiKey = '9b3b0b0293663de269f8b62268db1cc5'; 
        String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + EncodingUtil.urlEncode(cityName, 'UTF-8') + '&appid=' + apiKey + '&units=metric';

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        }
        return null;
    }
}