import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    // ***one way to use async await
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    // if(debouncedTerm){
    //   search();
    // }, [debouncedTerm]);
    // };

    //way to call async await AND way to create a function
    //and then call it immediately
    // (async () => {
    //   await axios.get("api.url.com");
    // })();

    //make a promise using .then
    // axios.get("api.url.com")
    // .then((response) => {
    //   console.log(response.data);
    //});

    if (term && !results.length){
      search();
    } else {
      //delay search for 500ms before performing search
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    //resets timer
    return () => {
      clearTimeout(timeoutId);
    };
    }

    
    
  }, [term, results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
