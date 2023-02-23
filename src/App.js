import './App.css';
import { BrowserRouter } from "react-router-dom";
import IndexPages from './Components/IndexPages';
import Header from './Components/header'
import BackgroundImage from './assets/images/bg.png'

function App() {
  return (
    <div style={ AppStyle }>
    <BrowserRouter>
      <Header />
      <IndexPages />
    </BrowserRouter>
    </div>
  );
}

// This is main file

const AppStyle = {
  background: `url(${BackgroundImage})`
}

export default App;