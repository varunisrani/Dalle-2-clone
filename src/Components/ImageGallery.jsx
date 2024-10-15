import Imageshow from "./Imageshow";
import imageArray from "./utils/imagearray";

const ImageGallery = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {imageArray.map((image) => (
          <div key={image.id} className="flex justify-center">
            <Imageshow src={image.src} text={image.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
