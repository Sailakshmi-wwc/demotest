This application displays the 5 day weather forecast for a given location.

### Features

* Enter city name, get 5 day weather forecast
* Select day, get 3 hourly forecast
* Select day again, hide 3 hourly forecast
* Daily forecast should summarize the 3 hour data:
  * Most dominant (or current) condition
  * Most dominant (or current) wind speed and direction
  * Aggregate rainfall
  * Minimum and maximum temperatures
* All values should be rounded down

The application is to be tested against the requirements above. Please rewrite the requirements into an appropriate format, e.g. BDD with Gherkin, adding any other requirements that you think appropriate, such as edge cases, validation and error scenarios or accessibility improvements.

Please write a set of automated acceptance tests against those requirements using any language and / or test framework of your choice.

The application is running in "test" mode, using a set of test data, matching that which comes from the public API at OpenWeatherMap (http://openweathermap.org/forecast5). There is test data for a number of locations, found in the folder ```src/data```.

You should find that every important part of the HTML produced has been marked with ```data-test``` attributes.


This exercise is to examine your testing and analysis skills, and your technical knowledge to demonstrate your experience and skill using current testing technologies and methodologies.

Make sure that your test scenarios and code are clear, demonstrates good practices, and that you include a README file explaining how to build and run your solution - please don't spend more than 4 hours on this assignment.

### Checklist

Please ensure you have submitted the following:

* A public repository (e.g. GitHub, BitBucket) containing the requirements and automated tests
* A readme explaining
  * How to build and execute your solution
  * Details on anything further that you would like to achieve given more time, including any trade-offs that you may have made

### Running the app locally

Pre- Requisite: You'll need node and npm installed, Later install the required dependencies:

    $ npm install

To start up the application:

    $ npm run develop