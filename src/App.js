import './App.css';


import WeatherTable from './Components/WeatherTable'
import MainHeader from "./Components/MainHeader";
import Convertor from "./Components/Convertor";
import {Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

        <div className='App'>
            <BrowserRouter>
                <MainHeader/>
                <Routes>
                    <Route path="/" element={<WeatherTable />} exact/>

                        <Route path="convertor" element={<Convertor />} exact />
                        <Route path="*" element={"Nothing to display"} />

                </Routes>
            </BrowserRouter>
        </div>



  );
}

export default App;
