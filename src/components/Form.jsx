import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setTemp(
          "Temprature at " + " " + city + "\n" + Math.round(celsius) + "°C"
        );
        setCity("");
      });
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Weather App</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={changeHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Get Temprature
            </button>
          </form>
          <h3>{temp}</h3>
        </div>
      </div>
    </div>
  );
}

export default Form;
