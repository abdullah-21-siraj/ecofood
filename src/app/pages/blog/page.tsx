import Image from "next/image";
import Link from "next/link";

const items = [
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-25-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-24-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-23-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-22-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-21-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-20-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-19-2024",
    link: "/",
  },
  {
    src: "/ecofood.png",
    imgAlt: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4-18-2024",
    link: "/",
  },
];

function BlogPage() {
  return (
    <div>
      <div className="mx-5 my-5 font-extrabold">BLOG - WHAT'S NEW?</div>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 p-4"
            key={index}
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 transform-gpu">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <Image
                  src={item.src}
                  layout="fill"
                  objectFit="cover"
                  alt={item.imgAlt}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xs font-extralight mb-2">{item.date}</h3>
                <p className="text-gray-700">{item.desc}</p>
                <Link
                  href={item.link}
                  className="p-2 my-2 bg-green-800 text-white rounded-lg hover:bg-amber-300 font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
