import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mx-4 lg:mx-20 my-4 lg:my-20 relative">
        <div className="max-w-md p-6 rounded-lg relative z-10 bg-white bg-opacity-80">
          <div className="text-center lg:text-left">
            <span className="text-xl lg:text-4xl font-semibold text-green-600">
              SPECIAL OFFER
            </span>
            <span className="block text-xl lg:text-5xl text-gray-700 mt-2">
              Save on selected plant-based meals
            </span>
            <p className="text-sm text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              animi inventore quam itaque repellendus, expedita recusandae atque
              et.
            </p>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded mr-2 my-2 lg:my-0">
                Start Shopping Now -&gt;
              </button>
              <button className="bg-gray-400 text-gray-800 py-2 px-4 rounded my-2 lg:my-0">
                Browse Product
              </button>
            </div>
            <ul className="mt-4 text-sm text-gray-700 lg:text-lg">
              <li className="flex items-center">
                <span className="mr-2">&#10004;</span>Get your products asap
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#10004;</span>Promotions for our valued
                customers
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#10004;</span>Secure payment options for
                your convenience
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-md p-6 rounded-lg relative z-10 bg-white bg-opacity-80">
          <Image
            className="w-full h-auto rounded-md"
            src="/randomPhoto.jpg"
            alt="Image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
