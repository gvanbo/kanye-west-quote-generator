import { useState } from "react";

const Search = ({onSubmit}) => {
  const [, setQuery] = useState(false)

  const handleSubmit = (e) => {
    setQuery(true)
    console.log('You Clicked submit')
  }

  return (
    <form onSubmit={handleSubmit}>
    <button type="submit" className="btn btn-outline-light">Next Kanye Quote</button>
    </form>
  );
};

export default Search;
