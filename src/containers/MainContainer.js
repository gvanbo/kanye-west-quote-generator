import { useState, useEffect } from "react";
import Search from "../components/Search";
import DisplayResults from "../components/DisplayResults";

const MainContainer = () => {
  const [query, setQuery] = useState(false);
  const [data, setData] = useState("");

  const handleClick = (query) => {
    setQuery(true);
  };

  useEffect(() => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(setData)
    .catch(console.error())
  }, [query])

  return (
    <div>
      <Search onSubmit={handleClick} style={{ margin: "20px 20% 30px 20%"}}/>
      <DisplayResults data={data} />
    </div>
  );
};

export default MainContainer;
