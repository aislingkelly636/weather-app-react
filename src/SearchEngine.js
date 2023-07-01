import axios from "axios";

export default function SearchEngine() {
  function handleSubmit(response) {
    alert(`The weather in new york is ${response.data.main.temp}C`);
  }

  let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=${units}`;

  axios.get(url).then(handleSubmit);

  return <h2>Hello</h2>;
}
