import Listings from "@/components/Listings/Listings";
import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Menu />
      <Hero />
      <Categories />
      <Listings />
    </div>
  );
}
