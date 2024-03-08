import Imageshow from "./Imageshow";
import imageArray from "./utils/imagearray";

const ImageGallery = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex flex-wrap gap-6 justify-center">
      {imageArray.map((image) => (
        <Imageshow key={image.id} src={image.src} text={image.text} />
      ))}
    </div>
  );
};

export default ImageGallery;
