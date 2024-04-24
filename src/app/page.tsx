import Footer from "./homePageComponents/footer/page";
import FooterSecond from "./homePageComponents/footerTwo/page";
import HeroSectionThree from "./homePageComponents/heroSectionThree/page";
import ThreeDives from "./homePageComponents/heroSectionTwo/page";
import HeroSection from "./homePageComponents/herosection/page";
import TwoColumnText from "./homePageComponents/twoCoulmnText/page";
import HeroSectionFour from "./homePageComponents/heroSectionFour/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroSectionThree />
      <TwoColumnText />
      <HeroSectionFour />
      <ThreeDives />
      <Footer />
      <FooterSecond />
    </>
  );
}
