import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  // console.log(requests.fetchTrending);
  return (
    <div className="app">
      <script
        type="text/javascript"
        src="https://unpkg.com/movie-trailer"
      ></script>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
    </div>
  );
}

export default App;
