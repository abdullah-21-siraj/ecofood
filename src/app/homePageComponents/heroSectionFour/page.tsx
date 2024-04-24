import Link from "next/link";
import Image from "next/image";

const items = [
  { src: "/randomPhoto.jpg", alt: "Image 1", title: "Title 1" },
  { src: "/randomPhoto.jpg", alt: "Image 2", title: "Title 2" },
  { src: "/randomPhoto.jpg", alt: "Image 3", title: "Title 3" },
  { src: "/randomPhoto.jpg", alt: "Image 4", title: "Title 4" },
  { src: "/randomPhoto.jpg", alt: "Image 5", title: "Title 5" },
  { src: "/randomPhoto.jpg", alt: "Image 6", title: "Title 6" },
];

function HeroSectionFour() {
  return (
    <div className="ml-2 flex md:flex-row flex-col justify-around items-center my-10">
      <div className=" p-4 lg:p-8 border-2 border-slate-600 rounded-lg m-2 bg-amber-400">
        <h2 className="my-5 text-4xl font-bold">Shop by Diet</h2>
        <p className="my-10 text-xl">
          Balancing nutrients is key to a healthy diet—veggies offer vitamins,{" "}
          <br />
          while lean proteins build muscle. Don't forget hydration water fuels
          metabolism.
        </p>
        <button className="my-10 border-2 border-slate-600 rounded p-2 pl-6 pr-6 bg-emerald-700 text-white">
          <Link href="/"> Explore</Link>
        </button>
      </div>
      <div className="grid grid-cols-3 mr-4">
        {items.map((item, index) => (
          <div className="p-2 m-2 rounded-lg" key={index}>
            <Image
              src={item.src}
              width={300}
              height={200}
              alt={item.alt}
              className="rounded-lg"
            />
            <h3 className="m-1">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSectionFour;
