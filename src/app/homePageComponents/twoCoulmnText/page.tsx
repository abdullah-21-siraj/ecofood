import Link from "next/link";

const TwoColumnText = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:flex md:justify-between">
      <div className="md:w-1/2 md:pr-5 m-10 sm:ml-n5 md:ml-auto lg:ml-10">
        <h2 className="text-xl font-bold mb-4 text-amber-400">CONTRIBUTE TO</h2>
        <p className="text-4xl font-extrabold mb-4 text-black">
          A More Sustainable <br></br> World with Every Purchase
        </p>
        <Link href="/" passHref>
          <button className="bg-emerald-700 hover:bg-amber-600 text-white py-2 px-4 rounded">
            Learn more
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-5">
        <p className="text-lg mb-6 text-gray-700">
          Our e-shopping website brings you the convenience of instant access to
          a diverse range of products, spanning from fruits and vegetables to
          bakery items, milk, health products, and more. Discover best-selling
          items, explore new perspectives, or indulge in personal growth and
          development. The possibilities are endless.
        </p>
        <ul className=" text-gray-700 list-none">
          <li>✔️Access eShopping offline</li>
          <li>✔️Exclusive promotions for our valued customers</li>
          <li>✔️Secure payment options for your convenience</li>
        </ul>
      </div>
    </div>
  );
};

export default TwoColumnText;
