import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [place, setPlace] = useState({
    area: "",
  });
let history=useHistory()
  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const onsubmit=(e)=>{
    e.preventDefault()
    console.log(place)
history.push('/weatherData/'+place.area)
  }
  return (
    <div>
      <input
        className="form-control"
        onChange={handleChange}
        name="area"
        type="text"
      />
      <div className="text-center">
        <button className="btn btn-secondary" onClick={onsubmit}>
          getWeather
        </button>
      </div>
    </div>
  );
};

export default Home;
