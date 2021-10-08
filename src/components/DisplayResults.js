const DisplayResults = ({ data }) => {
  console.log(data.quote);

  return (
    <blockquote className="blockquote" style={{margin: "10 20 10 35"}}>
      <p style={{fontSize: "2rem"}}>"{data.quote}"</p>
      <p>- Kanye West</p>
    </blockquote>
  );
};

export default DisplayResults;
