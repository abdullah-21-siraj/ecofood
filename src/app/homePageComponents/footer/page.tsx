import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-amber-400">
      <div className="flex flex-col md:flex-row lg:flex-row ">
        <div className="p-4 m-2">
          <h2 className="font-bold">Customer Service</h2>
          <ul>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Delivery
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Legal Notice
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Terms and Conditions of Use
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Secure Payment
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 m-2">
          <h2 className="font-bold">My Account</h2>
          <ul>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Price Drop
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                New Products
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Best Seller
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Sitemap
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 m-2">
          <h2 className="font-bold">Get Help</h2>
          <ul>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Sitemap
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Stores
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Login
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                Registration
              </Link>
            </li>
            <li className="my-2">
              <Link href="/" className="block hover:text-blue-500">
                My Account
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 m-2">
          <h2 className="font-bold">Stay Up to Date</h2>
          <p className="my-2">
            Fusce nec diam sit amet leo efficitur congue. <br></br>Sed
            condimentum dui et quam sit amet leo efficitur
          </p>
          <input
            type="email"
            className="border-2 rounded-xl p-2 w-full md:w-auto"
            placeholder="Your email address ➡️"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
