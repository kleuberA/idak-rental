import Categories from "@/components/categories/Categories";
import Locations from "@/components/locations/Locations";
import Listings from "@/components/Listings/Listings";
import Articles from "@/components/Articles/Articles";
import Metrics from "@/components/metrics/metrics";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Menu />
      <Hero />
      <Categories />
      <Listings />
      <Metrics />
      <Locations />
      <Articles />
      <Footer />
    </div>
  );
}
