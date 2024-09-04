import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home></Home>
        <h1>App Component</h1>
        <p> Cool stuff </p>
      </div>
    </div>
  );
}

export default App;
