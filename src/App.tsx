import main from "./mainimage.png"
import logo from "./logo.png"
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="truckInHeader" alt="logo" />
      </header>
      <div className="main">
        <div className="mainimage">
          <img src={main} className="main-img" alt="big rig" />
        </div>
        <div className={"maintextarea"}>
          Driving Excellence, One Route at a Time.
          <div className="main-smaller-text">At Roeh-Rig Truck Leasing, we understand that the road to success is paved with trust and reliability. That's why we offer personalized truck leasing services that align precisely with your unique logistics needs. Our dedicated driver and well-maintained rig are at the heart of a seamless transport experience, committed to carrying your goods with the utmost care.</div>
        </div>
      </div>      
      <div className="dividerContainer">
        <div className="divider">
        </div>
      </div>
      <div className="contactContainer">
        <div className="leftSideContact"></div>
        <div>Owner/Operator: Matthew Roehrig</div>
        <div>matthewroehrig@gmail.com</div>
      </div>
    </div>
  );
}

export default App;
