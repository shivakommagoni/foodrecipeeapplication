import React, { useState } from "react";
import Output from "./output";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "4bdf83d5";
  const YOUR_APP_KEY = "74156ad400047b3261458ffca4f482eb";

  const searchRecipe = () => {
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData); // Verify the response data
        setData(responseData.hits); // Update the data state
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data); // Verify the data state

  return (
    <div className="App">
      <center>
        
          <fieldset className="bg-yellow-600">
        <h2>Food Recipe</h2>
        <br /><br /><br />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}></input>
        <br /><br />
        <input className="Button bg-green-600" type="submit"  onClick={searchRecipe} value="Search"></input>
        </fieldset></center>
      <Output props={data} />
    </div>
  );
}

export default App;
