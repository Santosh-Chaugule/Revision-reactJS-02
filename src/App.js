//import area

import logo from './logo.svg';
import logo2 from './images.png'
import './App.css';

//1:function defination
function App() {

  //every function return something

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo santosh" alt="logo2" />
        <p>
          My Name is Santosh And I am MERN Stack Developer
        </p>
        <a
          className="App-logo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


//Export area
export default App;
//function sum(x,y){
 // return
//}