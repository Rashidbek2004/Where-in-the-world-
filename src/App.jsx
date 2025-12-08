import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { IoIosSearch } from "react-icons/io";
const App = () => {
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
    <div className="headColor active">
      <Navbar />
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
            console.log(item);

            return (
              <div className="cardBox">
                <div className="images">
                  <img src={item?.png} alt="" />
                </div>
                <div className="boxWrite">
                  <h4>{item.capital}</h4>
                  <h4>Population: {item?.population}</h4>
                  <h5>Region: {item?.region}</h5>
                  <h5>Capital: {item?.capital}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
