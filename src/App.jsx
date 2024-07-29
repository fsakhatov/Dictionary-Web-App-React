import { useState } from "react";
import "./App.css";
import DropdownMenu from "./dropDown.jsx";
import Content from "./content.jsx";
import axios from "axios";
import Error from "./Error";
import logo from "./assets/images/logo.svg";
import moon from "./assets/images/icon-moon.svg";
import moonDark from "./assets/images/icon-moon-dark.svg";
import searchIcon from "./assets/images/icon-search.svg";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [font, setFont] = useState("Sans Serif")
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const [empty, setEmpty] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    if(inputValue === "" ){
      setEmpty(false);
    }else {
      setEmpty(true);
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
        );
        setData(response.data);
      } catch (error) {
        console.log("error");
        setError(true);
        setData("")
      } 
    }
      
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setEmpty(true)
  }
  const handleToggle = () => {
    setIsDark(!isDark);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    getData();
  }
};


  return (
    <>
      <div
        className="main min-h-screen"
        style={{ backgroundColor: isDark ? "black" : "white", fontFamily: font === "Sans Serif" ? "Inter" :  font === "Serif" ? "Lora" : font === "Mono" ? "Inconsolata" : "" }}
      >
        <div className="flex justify-between p-6 headAndNav  md:p-10 lg:pl-[350px] lg:pr-[350px]">

          <img src={logo} alt="" />
          <div className="flex">
          <DropdownMenu
            isOpen={isOpen}
            isDark={isDark}
            toggleMenu={toggleMenu}
            setIsOpen={setIsOpen}
            font={font}
            setFont={setFont}
          />
          <hr className="ml-4 border-l-2 border-rgba(233, 233, 233, 1)-500 h-10 transform-rotate-90"></hr>
          <div className="sliderAndIcon flex justify-center items-center">
            <label className="ml-4 toggle-switch cursor-pointer">
              <input type="checkbox" checked={isDark} onChange={handleToggle} />
              <span
                className={`toggle-slider`}
                style={{
                  backgroundColor: isDark
                    ? "rgba(164, 69, 237, 1)"
                    : "rgba(117, 117, 117, 1)",
                }}
              ></span>
            </label>
            <img
              className="ml-3"
              src={
                isDark
                  ? moonDark
                  : moon
              }
              alt=""
            />
          </div>
          </div>
        </div>
        <div>
        <div className="input flex items-center justify-between rounded-md h-12 min-w-screen mr-6 ml-6 br-3 lg:ml-[350px] lg:mr-[350px]" 
        style={{
          backgroundColor: isDark
            ? "rgba(31, 31, 31, 1)"
            : "rgba(244, 244, 244, 1)",
            border: empty ?  "none" : "1px solid red"
        }}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          style={{
            backgroundColor: isDark
              ? "rgba(31, 31, 31, 1)"
              : "rgba(244, 244, 244, 1)",
              color: isDark ? "white" : "black",
          }}
          className="w-[287px] md:w-[655px] lg:w-[696px] cursor-pointer"
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search for any word…"
        ></input>
        <img
          src={searchIcon}
          onClick={getData}
          alt=""
          className="w-4 h-4 mr-4 cursor-pointer"
        />
        </div>
        {empty ? (null) : <h1 className="text-red-500 ml-6 mt-2 lg:pl-[350px] ">Whoops, can’t be empty…</h1>}
      </div>
      {data !== "" ? <Content
      data={data}
      isDark={isDark}
      /> : error && empty && <Error isDark={isDark} /> }
      
      </div>
    </>
  );
}

export default App;