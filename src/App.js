import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Spin } from "antd";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    // const response =
    await axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=love`, {
        headers: {
          "X-Api-Key": "v/QIKNv4TO6FdQZyZfG9og==NrDWBOALPHpj7cgy",
        },
        method: "GET",
      })
      .then((response) => {
        console.log(response.data[0].quote);
        setQuote(response.data[0].quote);
        setLoading(false);
      });
    // console.log(response.data[0].quote);
    // setQuote(response.data[0].quote);
    // setLoading(false);
  };

  const handleClick = () => {
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="content-box">
          <p className="quote-title">~ quote of the day ~</p>
          <h3 className="quote-content"> {loading ? <Spin /> : quote} </h3>
          <button onClick={handleClick}>get random</button>
        </div>
      </div>
    </div>
  );
}

export default App;
