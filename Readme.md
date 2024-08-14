# Real-Time Weather Monitoring System

## Overview

This application is designed to monitor real-time weather conditions and provide summarized insights using rollups and aggregates. It fetches weather data from the OpenWeatherMap API, processes it to compute daily summaries, and handles alerting based on user-defined thresholds. The system uses JavaScript for real-time data fetching and analysis.

## Features

- Continuous retrieval of weather data for Indian metros from the OpenWeatherMap API.
- Conversion of temperature values from Kelvin to Celsius.
- Daily weather summaries including average, maximum, minimum temperatures, and dominant weather conditions.
- User-configurable alerting thresholds for temperature and weather conditions.


## Data Source

The system uses the OpenWeatherMap API for weather data. You need an API key to access the data. The API provides the following weather parameters:

- `main`: Main weather condition (e.g., Rain, Snow, Clear)
- `temp`: Current temperature in Celsius
- `feels_like`: Perceived temperature in Celsius
- `dt`: Time of the data update (Unix timestamp)

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Shadowrunner21/Real_Time_Monitoring_Weather

2. **Navigate to the project directory**
   ```bash
   cd your-repository-name

3. **Open the Project in Visual Studio Code**
   ```bash
   code .

4. **Run the Application**

    Open the index.html file in Visual Studio Code.
    Install the "Live Server" extension if not already installed.

    Right-click on the index.html file and select "Open with Live Server".
    
    This will launch the application in your default web browser.  



## Security
API Key Management: API keys are currently hard-coded in the JavaScript file. For production use, it is recommended to manage API keys securely, using environment variables or secure storage solutions to prevent unauthorized access.

## Performance
Efficient Data Retrieval: The application fetches data from the OpenWeatherMap API asynchronously to ensure that the user interface remains responsive and that API calls are optimized to avoid redundant requests.


## Bonus Features (Planned Enhancements)

Additional Weather Parameters: Future improvements may include the integration of additional weather parameters such as humidity and wind speed for a more comprehensive weather overview.
