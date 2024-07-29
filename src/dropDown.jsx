import "./App.css";
import arrow from "./assets/images/icon-arrow-down.svg";


function DropdownMenu({isOpen, font, setFont, isDark, toggleMenu, setIsOpen}) {
  

  const handleChange = (font) => {
    setFont(font);
    setIsOpen(!isOpen)
  };
  
  

  return (
    <div className="relative">
      <div className="drop flex justify-between items-center mt-2 ml-[75px]">
          <h1 style={{color: isDark ? "white" : "black"}}className='inter font-bold text-base leading-6'>{font}</h1>
          <img onClick={toggleMenu} className="ml-4 w-[12px] h-[6px] cursor-pointer"src={arrow} alt="" />
      </div>
      {isOpen && (
        <div style={{backgroundColor: isDark ? "black" : "white"}} 
        className={`absolute  flex flex-col w-32 ml-12 rounded-md ${isDark ? "custom-box-shadow" : ""}`}>
          <button 
           className={`button block px-auto py-4 font-bold text-base leading-6 hover:text-purple-600 ${isDark ? "text-white" : "text-black"}`}
            onClick={() => handleChange('Sans Serif')}
          >
            Sans Serif
          </button>
          <button 
           className={`button block px-auto py-4 font-bold text-base leading-6 hover:text-purple-600 ${isDark ? "text-white" : "text-black"}`}
           onClick={() => handleChange('Serif')}
          >
            Serif
          </button>
          <button 
           className={`button block px-auto py-4 font-bold text-base leading-6 hover:text-purple-600 ${isDark ? "text-white" : "text-black"}`}
           onClick={() => handleChange('Mono')}
          >
            Mono
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;