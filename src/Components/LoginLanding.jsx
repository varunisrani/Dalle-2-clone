import { Link } from "react-router-dom";
import Imageshow from "./Imageshow";

const Landing = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <div className="flex flex-row">
        <h1 className="absolute left-0 top-0 text-white font-bold text-xl mt-5 ml-5">
          DALL.E 2
        </h1>
      </div>

      <div className="text-white mt-40 sm:mt-60 md:mt-80 ml-5 mr-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Research</h1>
        <h1 className="text-5xl sm:text-6xl md:text-8xl text-white mt-4">DALL.E 2</h1>
        <h1 className="text-lg sm:text-xl mt-3 max-w-3xl">
          DALL·E 2 is an AI system that can create realistic images and art from
          a description in natural language.
        </h1>
        <button className="mt-10 p-2 w-30 border border-white">
          <Link to="/login">Login in DALL.E</Link>
        </button>
      </div>
      <div className="bg-black">
        <div className="text-white ml-5 mt-20">
          <h1 className="text-2xl sm:text-3xl">Latest Update</h1>
        </div>
        <div className="flex flex-wrap mx-2 sm:mx-5 md:mx-10 mt-10 justify-center sm:justify-between gap-4 sm:gap-6 bg-black pb-10">
          <a href="https://openai.com/blog/dall-e-api-now-available-in-public-beta" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/rwxKSN8/dall-e-api-now-available-in-public-beta.jpg"
              text="Checkout"
            />
          </a>
          <a href="https://openai.com/blog/dall-e-2-extending-creativity" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/TYK7H3G/dall-e-2-extending-creativity.jpg"
              text="Checkout"
            />
          </a>
          <a href="https://openai.com/blog/dall-e-now-available-without-waitlist" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/5ch91KM/dall-e-now-available-without-waitlist.jpg"
              text="Checkout"
            />
          </a>
          <a href="https://openai.com/blog/dall-e-introducing-outpainting" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/F43zWcS/dall-e-introducing-outpainting.jpg"
              text="Checkout"
            />
          </a>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/3Y2tf8v/dall-e-1.jpg"
              text="Checkout"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/F43zWcS/dall-e-introducing-outpainting.jpg"
              text="Checkout"
            />
          </div>
          <a href="https://openai.com/blog/dall-e-api-now-available-in-public-beta" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/rwxKSN8/dall-e-api-now-available-in-public-beta.jpg"
              text="Checkout"
            />
          </a>
          <a href="https://openai.com/blog/dall-e-2-extending-creativity" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Imageshow
              src="https://i.ibb.co/TYK7H3G/dall-e-2-extending-creativity.jpg"
              text="Checkout"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
