import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2></h2>
      <h3 className="Links">
        <div>
          This project is coded by
          <a href="https://github.com/teagandong" target="_blank">
            {""} Teagan Dong
          </a>
          {""} is
          <a
            href="https://github.com/teagandong/SheCodes-week4-homework"
            target="_blank"
          >
            {""} open sourced on GitHub
          </a>
          {""} and
          <a
            href="https://65c0ccd8b16a0105d3852ee4--super-narwhal-e42be6.netlify.app/"
            target="_blank"
          >
            {""} hosted on Netlify
          </a>
        </div>
      </h3>
    </div>
  );
}
