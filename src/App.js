import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Athens" />
        <footer>
          {" "}
          This code was created by Nika Župan and it's{" "}
          <a
            href="https://github.com/nikabe10/my-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
