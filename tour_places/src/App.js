import './App.css';
import Card from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header";
import {places} from "../src/helper/data"

function App() {
  return (
      <div className="App">
      <Navbar/>
      <Header/>
      {places.map(x =>( <Card placeName={x.placeName} placeImgSrc={x.placeImg} placeText={x.placeText}></Card>))}
    </div>
  );
}
export default App;
