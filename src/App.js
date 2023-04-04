import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Virtual from "./components/Virtual";
import Our from "./components/Our";
import Care from "./components/Care";
import Team from "./components/Team";
import News from "./components/News";
import Footer from "./components/Footer";
import {useState} from "react";
import AOS from 'aos';

function App() {
    const [dark,setDark]=useState(false)
    function getDark (){
        setDark(!dark)
    }
    return (
        <div className="App" style={{
            background: dark ? 'wheat' : ''
        }}>
            <Header getDark={getDark} dark={dark} />
            <Virtual/>
            <Our/>
            <Care/>
            <Team/>
            <News/>
            <Footer/>
        </div>
    );
}

export default App;
