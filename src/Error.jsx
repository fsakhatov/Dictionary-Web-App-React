import smile from "./assets/images/smile.png";
function Error({isDark}){


return(
    <div className=" ml-4 mr-4 flex flex-col justify-center items-center  lg:pl-[350px] lg:pr-[350px]" style={{ color: isDark ? "white" : "black" }}>
        <img className="mt-4" src={smile} alt="" />
        <h1 className="mt-4 font-bold text-center">No Definitions Found</h1>
        <p className="mt-4 text-center">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
);
}
export default Error;