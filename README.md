# 🌤️ LWC Weather App  

## 🎥 Component Demo
https://github.com/user-attachments/assets/cc63cf2c-9fd1-4614-8c04-018c5754432f


## 📖 Overview  
LWC Weather App is a **Lightning Web Component (LWC)** that integrates with the **OpenWeather API** to fetch and display real-time weather data for any city. It provides **current temperature, weather conditions, humidity, and a weather icon** to give users instant weather updates within Salesforce.  

---

## 🎯 Scenario  
A **Salesforce-based organization** requires a **real-time weather widget** on their dashboard to assist **field service agents, sales reps, or logistics teams** in planning their activities based on current weather conditions.  
The app enables users to **enter a city name** and fetch **real-time weather details**, ensuring a better decision-making process.  

---

## 🚀 Use Cases  

### **1️⃣ Field Service & Logistics**  
- Field agents can check weather conditions before traveling.  
- Logistics teams can plan deliveries while considering weather disruptions.  
- Example: A delivery service can avoid scheduling deliveries during heavy rain.  

### **2️⃣ Customer Engagement for Sales Teams**  
- Sales representatives can **personalize conversations** by referencing local weather.  
- Example: *"I see it's sunny in Los Angeles today. Hope you're having a great day!"*  

### **3️⃣ Travel & Tourism Services**  
- Travel agencies can provide **instant weather updates** for destinations.  
- Customers can plan their trips based on weather conditions.  
- Example: Tourists visiting a city can check if they need an umbrella before heading out.  

---

## 🎨 Features  
✔ **Search Weather by City** – Enter a city name and get live weather updates.  
✔ **Current Weather Data** – Shows temperature, humidity, and wind speed.  
✔ **Real-Time API Integration** – Uses OpenWeather API for instant data retrieval.  
✔ **SLDS Styling** – Styled using Salesforce Lightning Design System for a clean UI.  
✔ **Error Handling** – Displays meaningful error messages for invalid city names.  
✔ **Responsive UI** – Works seamlessly on desktop and mobile devices.  

---

## 🛠️ Installation Steps  

### **🔹 Step 1: Clone the Repository**  
```sh
git clone https://github.com/HarshalGaurkar/lwc-component-weatherApp
cd LWC-Weather-App
```

### **🔹 Step 2: Authenticate Salesforce Org**  
Log in to your Salesforce Developer Org using CLI:  
```sh
sfdx auth:web:login -d -a WeatherAppOrg
```

### **🔹 Step 3: Deploy Apex Controller**  
Deploy the **WeatherController.cls** to Salesforce:  
```sh
sfdx force:source:deploy -p force-app/main/default/classes/WeatherController.cls
```

### **🔹 Step 4: Deploy the LWC Component**  
Push the LWC component to your Salesforce org:  
```sh
sfdx force:source:push
```

### **🔹 Step 5: Assign Permissions**  
- Ensure that API access is enabled for the OpenWeather API.  
- Assign the component to a **Lightning Record Page**, **Home Page**, or **App Page**.  

---

## 🔑 API Configuration  
1. Sign up for an API key at [OpenWeather API](https://openweathermap.org/api).  
2. Replace `YOUR_OPENWEATHER_API_KEY` in **WeatherController.cls**.  
3. Save and deploy the updated Apex class.  

---

## 🏗️ Component Breakdown  

### **🔹 Apex Controller (`WeatherController.cls`)**  
Handles **API callouts** to OpenWeather API for fetching **current weather data**.  

### **🔹 LWC (`weatherApp.js, weatherApp.html, weatherApp.css`)**  
- **weatherApp.html** – UI for searching and displaying weather.  
- **weatherApp.js** – Calls Apex to fetch weather data & updates UI dynamically.  
- **weatherApp.css** – Stylish UI with SLDS for a clean and responsive layout.  

---

## ✅ **Unit Test Coverage**  
To ensure **high code quality**, a **unit test class** for the Apex Controller is provided.  

### **🧪 WeatherControllerTest.cls (Test Class)**
```apex
@isTest
private class WeatherControllerTest {
    @isTest
    static void testGetWeather() {
        Test.startTest();
        Map<String, Object> response = WeatherController.getWeather('New York');
        System.assertNotEquals(response, null, 'Weather data should not be null');
        Test.stopTest();
    }
}
```
✅ **Run tests** with:  
```sh
sfdx force:apex:test:run --classnames WeatherControllerTest --resultformat human --codecoverage
```
✅ **Expected Coverage**: 90%+  

---

## 📝 Future Enhancements  
🔹 **5-Day Weather Forecast** – Show upcoming weather predictions.  
🔹 **Dark Mode** – Theme toggle option for better UI experience.  
🔹 **Geolocation Support** – Auto-fetch weather based on user’s location.  
🔹 **Weather Alerts** – Show extreme weather warnings from the API.  

---

## 📜 License  
This project is licensed under the **MIT License** – feel free to modify and use it!  

---

## 🙌 Acknowledgments  
Big thanks to:  
- **Salesforce Developers** for LWC  
- **OpenWeather API** for free weather data  
- **SLDS** for UI design  

🌟 **Star this repo** if you found it helpful! 🚀  
```
