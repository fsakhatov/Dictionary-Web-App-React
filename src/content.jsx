import { useRef } from "react";
import playIcon from "./assets/images/icon-play.svg";
import sourceIcon from "./assets/images/icon-new-window.svg";

function Content({ data, isDark }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const audioSrc = data[0].phonetics.reduce((src, phonetic) => {
    if (src) {
      return src;
    } else if (phonetic.audio !== "") {
      return phonetic.audio;
    } else {
      return null;
    }
  }, null);

  return (
    <div className="content ml-6 mr-6 mt-6 md:p-10 md:ml-0 md:mr-0 md:mt-0 lg:pl-[350px] lg:pr-[350px]">
      <div className="flex flex-row justify-between">
        <div>
          <h1
            style={{ color: isDark ? "white" : "black" }}
            className="text-2xl font-bold md:text-[64px]"
          >
            {data[0].word}
          </h1>
          <h1 className=" text-purple-600 text-base sm:text-lg lg:mt-8 md:mt-8  ">
            {data[0].phonetic}
          </h1>
        </div>
        <div className="flex cursor-pointer">
          {audioSrc && <audio ref={audioRef} src={audioSrc}></audio>}
          {audioSrc && (
            <img
              className="w-12 h-12 "
              onClick={playAudio}
              src={playIcon}
            ></img>
          )}
        </div>
      </div>
      {data[0].meanings[0].partOfSpeech && (
        <div className="mt-8 flex flex-row">
          <h1
            style={{ color: isDark ? "white" : "black" }}
            className=" font-bold italic text-base "
          >
            {data[0].meanings[0].partOfSpeech}
          </h1>
          <hr className="mt-3 bg-gray-700 ml-4 w-screen" />
        </div>
      )}

      {data[0].meanings[0] && data[0].meanings[0].definitions && (
        <>
          <h1 className="mt-[21px] text-4 text-gray-600 mb-4">Meaning</h1>
          <div className="list-disc custom-dot-color mr-6">
            {data[0].meanings[0].definitions.map((item, index) => (
              <div className="mb-3 grid grid-cols-2" key={index}>
                <div className="w-1 h-1 mt-2 rounded-full bg-purple-600"></div>
                <h1
                  className="ml-[-90%]"
                  style={{ color: isDark ? "white" : "black" }}
                >
                  {item.definition}
                </h1>
              </div>
            ))}
          </div>
        </>
      )}
      {data[0].meanings[0].synonyms && (
        <div className="mt-[21px] flex">
          <h1 className=" text-4 text-gray-600 mb-4">Synonyms</h1>
          <h1 className="ml-5 text-purple-600 font-bold">
            {data[0].meanings[0].synonyms}
          </h1>
        </div>
      )}

      {data[0].meanings[1] && data[0].meanings[1].partOfSpeech && (
        <div className="mt-7 flex flex-row">
          <h1
            style={{ color: isDark ? "white" : "black" }}
            className=" font-bold italic text-base "
          >
            {data[0].meanings[1].partOfSpeech}
          </h1>
          <hr className="mt-3 bg-gray-700 ml-4 w-screen" />
        </div>
      )}
      {data[0].meanings[1] && data[0].meanings[1].definitions && (
        <>
          <h1 className="mt-[21px] text-4 text-gray-600 mb-4">Meaning</h1>
          <div className="list-disc custom-dot-color mr-6"></div>
          {data[0].meanings[1].definitions.map((item, index) => (
            <div className="mb-3 grid grid-cols-2" key={index}>
              <div className="w-1 h-1 mt-2 rounded-full bg-purple-600"></div>
              <h1
                className="ml-[-90%]"
                style={{ color: isDark ? "white" : "black" }}
              >
                {item.definition}
              </h1>
            </div>
          ))}
        </>
      )}

      {data[0].meanings[1] && data[0].meanings[1].definitions[0].example && (
        <h1 className="text-gray-600">
          "{data[0].meanings[1].definitions[0].example}"
        </h1>
      )}

      <hr className="mt-8 bg-gray-700" />
      <div>
        <h1 className="mt-6 underline text-gray-600">Source</h1>
        <div
          style={{ color: isDark ? "white" : "black" }}
          className="flex gap-2 pb-12  items-center"
        >
          <a className="mt-2" href={data[0].sourceUrls}>
            {data[0].sourceUrls}
          </a>
          <img src={sourceIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
