import { useState } from "react";
import OpenAI from "openai";
import { InputBox } from "./Inputbox";
import Navbar from "./Navbar";
import ImageGallery from "./ImageGallery";
import imageArray from "./utils/imagearray";
import Part1 from "./Part1";
import { useAuthState } from "react-firebase-hooks/auth";
import ClipLoader from "react-spinners/ClipLoader";
import { auth } from "../Auth/firebase";
import LoginLanding from "./LoginLanding";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [create, setCreate] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [submitting, setSubmitting] = useState(false);

  const generateImage = async () => {
    setSubmitting(true);
    try {
      const imageParameters = {
        prompt: userPrompt,
        size: "512x512",
      };
      const response = await openai.images.generate(imageParameters);
      setImageUrl(response.data[0].url);
      setCreate(true);
      setUserPrompt("");
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setSubmitting(false);
    }
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
    const randomItem = imageArray[Math.floor(Math.random() * imageArray.length)];
    setUserPrompt(randomItem.text);
  };

  if (loading || submitting) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <ClipLoader color="purple" size={120} />
      </div>
    );
  }

  if (!user) {
    return <LoginLanding />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Part1 />
        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <h2 className="text-xl font-semibold">Start with a detailed description</h2>
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg font-bold text-sm hover:bg-gray-300 transition-colors"
              onClick={handleSurprise}
            >
              Surprise me
            </button>
          </div>
          <div className="space-y-4">
           
            <input
              type="text"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Enter your prompt"
              className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="px-6 py-3 bg-purple-600 font-medium rounded-lg text-white hover:bg-purple-700 transition-colors"
              onClick={generateImage}
              disabled={submitting}
            >
              {submitting ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {create ? (
          <div className="mt-12 flex flex-col items-center space-y-6">
            {imageUrl && (
              <img
                src={imageUrl}
                className="max-w-full h-auto rounded-lg shadow-lg"
                alt="AI generated image"
              />
            )}
            <button
              className="px-6 py-3 bg-blue-600 font-medium rounded-lg text-white hover:bg-blue-700 transition-colors"
              onClick={downloadImage}
              disabled={!imageUrl}
            >
              Download
            </button>
          </div>
        ) : (
          <div className="mt-12">
            <ImageGallery />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
