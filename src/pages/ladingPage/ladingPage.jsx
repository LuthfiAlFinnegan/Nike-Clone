import { BrandCategory } from "../../components/contetnBlock/brandCategory";
import { ClassicSpotlight } from "../../components/contetnBlock/classicSoptlight";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/header/navbar";
import { DontMissBanner } from "../../components/heroSection/dontMissBanner";
import { NewArrivalsBanner } from "../../components/heroSection/newArrivalsBanner";
import { Promotional } from "../../components/mainContent/promotional";

export const LandingPage = () => {
  return (
    <>
      <section className="">
        <Navbar />
        <NewArrivalsBanner />
        <Promotional />
        <DontMissBanner />
        <ClassicSpotlight />
        <BrandCategory />
        <Footer />
      </section>
    </>
  );
};
