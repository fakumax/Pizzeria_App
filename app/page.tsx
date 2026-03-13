import Hero from "@/components/home/Hero";
import BestSellers from "@/components/home/BestSellers";
import BrowseMenu from "@/components/home/BrowseMenu";
import About from "@/components/home/About";
import Commitments from "@/components/home/Commitments";
import SpecialOffers from "@/components/home/SpecialOffers";
import Reviews from "@/components/home/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <BrowseMenu />
      <About />
      <Commitments />
      <SpecialOffers />
      <Reviews />
    </>
  );
}
