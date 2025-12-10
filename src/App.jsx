import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { IoIosSearch } from "react-icons/io";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
const App = () => {
  const [modal, setModal] = useState(false);

  const [darkMode, setdarkMode] = useState(false);
  const [posts, setPosts] = useState();
  const api =
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,subregion,population,currencies,translation,currency";

  const getData = async (link) => {
    const req = await fetch(link);
    const data = await req.json();
    setPosts(data);
  };

  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className={darkMode ? `headColor dark` : `headColor`}>
     

      <BrowserRouter>
        <Navbar setdarkMode={setdarkMode} darkMode={darkMode} />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About modal={modal}/>}/>
        </Routes>
      </BrowserRouter>

      <div className="rows">
        <div className="container">
          <div className="write">
            <form action="">
              <IoIosSearch className="icon" />
              <input type="text" placeholder="Search for a country…" />
            </form>
            <div className="row">
              <select name="" id="">
                <option value="">Filter by Region</option>
                <option value="">Afrika</option>
                <option value=""> America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value=""> Ocenaia</option>
              </select>
            </div>
          </div>
          <div className="cards">
            {posts?.map((item) => {
              
              return (
                <BrowserRouter>
                  <Link
                    to="/about" element={<About setModal={setModal} modal={modal}/>}
                    state={{ selected: item }} 
                    className="cardBox"
                  >
                    <div className="images">
                      <img src={item?.flags.svg} alt="" />
                    </div>
                    <div className="boxWrite">
                      <h3>{item?.name.common}</h3>
                      <h6>Population: {item?.population}</h6>
                      <h6>Region: {item?.region}</h6>
                      <h6>Capital: {item?.capital}</h6>
                    </div>
                  </Link>
                </BrowserRouter>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
