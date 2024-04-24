import Image from "next/image";

const items = [
  { src: "/randomPhoto.jpg", alt: "Image 1", title: "Title 1" },
  { src: "/randomPhoto.jpg", alt: "Image 2", title: "Title 2" },
  { src: "/randomPhoto.jpg", alt: "Image 3", title: "Title 3" },
];

const ThreeDivs = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div className="p-4" key={index}>
          <div className="w-full md:w-auto md:mr-4 mb-4  rounded-lg p-4">
            <Image
              src={item.src}
              className="w-full h-auto rounded-lg"
              alt={item.alt}
              width={300}
              height={200}
            />
            <h3 className="text-center md:text-left m-1">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeDivs;
