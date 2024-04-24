import Image from "next/image";
import products from "./product";
function HeroSectionThree() {
  return (
    <div className="my-10">
      <div className="flex justify-center font-bold text-amber-400 text-lg">
        TOP DEALS THIS WEEK
      </div>
      <div className="flex justify-center text-center font-extrabold text-2xl">
        Shop And Save <br /> With Our Online Weekly Ad
      </div>
      <div className="flex flex-wrap justify-center md:justify-between my-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4 m-4"
          >
            <div className="max-w-xs mx-auto bg-neutral-200 rounded-sm  overflow-hidden shadow-lg p-3">
              <img
                src={product.image}
                alt="Product Image"
                className="w-full h-auto rounded-lg my-1"
              />
              <div className="px-4 py-2">
                <span className="text-gray-800 font-bold text-xl bg-amber-400 p-1 rounded-md">
                  {product.price}
                </span>
              </div>
              <div className="px-4 py-2">
                <p className="text-gray-700">{product.description}</p>
              </div>
              <div className="py-2 mx-2 flex justify-between">
                <button className="bg-emerald-600 hover:bg-gray-400 text-white p-1 rounded m-2">
                  Add to Cart
                </button>
                <button className="  text-white p-1 rounded m-2">
                  <div className="hover:bg-amber-400 rounded-full p-1">
                    <Image
                      src="/heart.png"
                      width={20}
                      height={20}
                      alt="heart"
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSectionThree;
