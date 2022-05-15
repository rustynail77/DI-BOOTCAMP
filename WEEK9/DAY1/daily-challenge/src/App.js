import './App.css';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
        {/* <MovieDetails /> */}
      </header>
    </div>
  );
}

export default App;
