import { Link } from "react-router-dom";
import Imageshow from "./Imageshow";

const LoginLanding = () => {
  return (
    <div className="bg-black h-screen">
      <div className="flex flex-row">
        <h1 className="absolute left-0 top-0 text-white font-bold text-xl mt-5 ml-5">
          DALL.E 2
        </h1>
      </div>

      <div className="text-white mt-80 ml-5">
        <h1>Research</h1>
        <h1 className="text-8xl text-white mt-4">DALL.E 2</h1>
        <h1 className="text-xl mt-3">
          DALL·E 2 is an AI system that can create realistic images and art from
          a description in natural language.
        </h1>
        <button className="mt-10 p-2 w-30 border border-white">
          <Link to="/login">Try DALL.E</Link>
        </button>
      </div>
      <div className="bg-black h-screen">
        <div className="text-white ml-5 mt-20 ">
          <h1>Latest Update</h1>
        </div>
        <div className="flex flex-wrap ml-10 mt-10 mr-10 justify-between gap-6  ">
          <a href="https://openai.com/blog/dall-e-api-now-available-in-public-beta">
            <Imageshow
              src="https://i.ibb.co/rwxKSN8/dall-e-api-now-available-in-public-beta.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <a href="https://openai.com/blog/dall-e-2-extending-creativity">
            <Imageshow
              src="https://i.ibb.co/TYK7H3G/dall-e-2-extending-creativity.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <a href="https://openai.com/blog/dall-e-now-available-without-waitlist">
            <Imageshow
              src="https://i.ibb.co/5ch91KM/dall-e-now-available-without-waitlist.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <a href="https://openai.com/blog/dall-e-introducing-outpainting">
            <Imageshow
              src="https://i.ibb.co/F43zWcS/dall-e-introducing-outpainting.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <Imageshow
            src="https://i.ibb.co/3Y2tf8v/dall-e-1.jpg"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 "
            text="Checkout"
          ></Imageshow>

          <Imageshow
            src="https://i.ibb.co/F43zWcS/dall-e-introducing-outpainting.jpg"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
            text="Checkout"
          ></Imageshow>
          <a href="https://openai.com/blog/dall-e-api-now-available-in-public-beta">
            <Imageshow
              src="https://i.ibb.co/rwxKSN8/dall-e-api-now-available-in-public-beta.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <a href="https://openai.com/blog/dall-e-2-extending-creativity">
            <Imageshow
              src="https://i.ibb.co/TYK7H3G/dall-e-2-extending-creativity.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <a href="https://openai.com/blog/dall-e-now-available-without-waitlist">
            <Imageshow
              src="https://i.ibb.co/5ch91KM/dall-e-now-available-without-waitlist.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
          <a href="https://openai.com/blog/dall-e-introducing-outpainting">
            <Imageshow
              src="https://i.ibb.co/F43zWcS/dall-e-introducing-outpainting.jpg"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              text="Checkout"
            ></Imageshow>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
