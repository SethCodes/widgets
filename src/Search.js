import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState(" ");


  useEffect(() => {
    // ***one way to use async await 
    // const search = async () => {
    //   await axios.get("api.url.com");

    //   search();
    // }

    //way to call async await AND way to create a function
    //and then call it immediately
    // (async () => {
    //   await axios.get("api.url.com");
    // })();

    //make a promis using .then
    axios.get("api.url.com").then((response) => {
      console.log(response.data);
    });

  }, [term]);

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="ui field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
