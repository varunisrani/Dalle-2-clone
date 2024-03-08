// eslint-disable-next-line react/prop-types
const Imageshow = ({ src, text }) => {
  return (
    <div className="relative inline-block group">
      <img
        src={src}
        height={300}
        width={300}
        className="rounded-lg transition duration-300 transform group-hover:scale-105"
        alt="Image"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-white bg-opacity-95 rounded-lg ">
        <h1 className="text-black text-lg ml-5 mr-5">{text}</h1>
      </div>
    </div>
  );
};

export default Imageshow;
