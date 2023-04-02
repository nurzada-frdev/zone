import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Virtual from "./components/Virtual";
import Our from "./components/Our";
import Care from "./components/Care";
import Team from "./components/Team";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">

            <Header/>
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
