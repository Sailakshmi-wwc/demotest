function callForecast(month, day, year, zipcode) {
  return {};
}
 
class WeatherCaller {
 
  constructor() {
    this.forecasts = {};
  }
 
  getForecast(month, day, year, zipcode) {
    let key = '${month}/${day}/${year} for ${zipcode}';
    if (!(key in this.forecasts)) {
      this.forecasts[key] = callForecast(month, day, year, zipcode);
    }
    return this.forecasts[key];
  }
 
}
 
module.exports = {
  WeatherCaller: WeatherCaller,
}

//Rest API Middle layer Validation
const frisby = require('Weather');
 
describe("English Wikipedia REST API", function() {
 
  const ENV = require("../support/env.json");
  const BASE_URL = ENV.integration.wikipediaServiceBaseUrl;
 
  describe("GET /page/summary/{title}", function() {
 
    it("should return the summary for the given page title", function(done) {
      frisby
        .get(BASE_URL + "/page/summary/Pikachu")
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(response.json.title).toBe("month");
          expect(response.json.pageid).toBe(269816);
          expect(response.json.extract).toContain("November");
        })
        .done(done);
    })
 
  });
 
  // ...
});