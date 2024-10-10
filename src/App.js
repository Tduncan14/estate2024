import logo from './logo.svg';
import './layout.scss'
import Navbar from './components/Navbar/navbar';
import Homepage from './routes/Home/Homepage';


function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Homepage />

      </div>

    </div>
  );
}

export default App;
