let apiKeys = "16deaf9a19c54dec97f54628240508";
// http://api.weatherapi.com/v1/current.json?key=16deaf9a19c54dec97f54628240508&q=London&aqi=yes
let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let output = document.getElementsByClassName("output")[0];

const cityName = document.getElementById("city-name");
const country = document.getElementById("countryName");
const locTime = document.getElementById("loc-time");
const temp = document.getElementById("temp");

async function getData(apiKeys, cityInput) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKeys}&q=${cityInput}&aqi=yes`
  );

  return await promise.json();
}

searchBtn.addEventListener("click", async () => {
  const input = cityInput.value;
  const result = await getData(apiKeys, input);
  cityName.innerText = `${result.location.name}, ${result.location.region}, `;
  country.innerText = result.location.country;
  temp.innerText = result.current.temp_c;
  locTime.innerText = `${result.location.localtime}`;
});

// searchBtn.addEventListener("click", () => {
//   output.classList.toggle("hidden");
// });
