import { useState } from "react";
import OpenAI from "openai";
import { InputBox } from "./Inputbox";
import Navbar from "./Navbar";
import ImageGallery from "./ImageGallery"; // Import the ImageGallery component
import imageArray from "./utils/imagearray";
import Part1 from "./Part1";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [create, setCreate] = useState(false);

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      size: "256x256",
    };
    const response = await openai.images.generate(imageParameters);
    setImageUrl(response.data[0].url);
    setCreate(true);
    setUserPrompt("");
  };

  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "generated_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const handleSurprise = () => {
    // Get a random item from imageArray
    const randomItem =
      imageArray[Math.floor(Math.random() * imageArray.length)];
    // Set the text of the random item in the input
    setUserPrompt(randomItem.text);
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-20 flex-col">
        <Part1 />
        <div className="flex flex-row ml-7 mt-20 ">
          <h1 className="mt-1">Start with a detailed description</h1>
          <button
            className="w-30 bg-gray-200 mt-1 p-1 rounded-lg font-bold ml-3 text-xs "
            onClick={handleSurprise}
          >
            Surprise me
          </button>
        </div>
        <InputBox
          setAttribute={setUserPrompt}
          className="w-20 p-3 border border-black"
        />
        <input
          type="text"
          value={userPrompt}
          className="p-3 shadow-xl border border-white ml-5 mr-5 flex flex-row rounded-lg"
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <div className="flex justify-center items-center">
          <button
            className="w-20 px-5 py-5 bg-purple-600 flex justify-center items-center font-medium rounded-lg mt-10 text-white"
            onClick={() => generateImage()}
          >
            Generate
          </button>
        </div>

        {/* Use the ImageGallery component here */}
        {create ? (
          <div className="flex justify-center items-center flex-col">
            {imageUrl && (
              <img src={imageUrl} className="mt-10 rounded-lg" alt="ai thing" />
            )}
            <button
              className="w-20 p-4 bg-blue-600 flex justify-center items-center font-medium rounded-lg mt-5 text-white ml-2"
              onClick={() => downloadImage()}
              disabled={!imageUrl}
            >
              Download
            </button>
          </div>
        ) : (
          <ImageGallery />
        )}
      </div>
    </>
  );
}

export default App;
