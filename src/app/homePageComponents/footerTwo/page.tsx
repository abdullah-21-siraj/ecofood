import React from "react";
import Image from "next/image";
import Link from "next/link";
function FooterSecond() {
  return (
    <div className="flex flex-col m-2 p-4 ">
      <div className="text-xl mb-4">Get social with us!</div>
      <div className="flex">
        <div className="p-2">
          <Link href="/">
            <Image
              src="/socialmediahandles/instagram.png"
              width={30}
              height={30}
              alt="instagram"
            />
          </Link>
        </div>
        <div className="p-2">
          <Link href="/">
            <Image
              src="/socialmediahandles/facebook.png"
              width={30}
              height={30}
              alt="facebook"
            />
          </Link>
        </div>
        <div className="p-2">
          <Link href="/">
            <Image
              src="/socialmediahandles/linkedin.png"
              width={30}
              height={30}
              alt="linkedin"
            />
          </Link>
        </div>
        <div className="p-2">
          <Link href="/">
            <Image
              src="/socialmediahandles/youtube.png"
              width={30}
              height={30}
              alt="youtube"
            />
          </Link>
        </div>
      </div>
      <div className="flex m-2">
        <div>
          <Link href="/">Conditions of Use</Link> / {""}
          <Link href="/">Terms & Conditions</Link> / {""}
          <Link href="/">Sitemap</Link> / {""}
          <Link href="/">Online Policies</Link>/{""}
          <Link href="/">Privacy</Link>
        </div>
      </div>
    </div>
  );
}

export default FooterSecond;
