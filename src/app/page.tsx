import { AchievementBadges } from "../components/AchievementBadges";
import { AboutMatix } from "../components/AboutMatix";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OrderMission } from "../components/OrderMission";
import { PickleBossAcademy } from "../components/PickleBossAcademy";
import { ProductShowcase } from "../components/ProductShowcase";
import { ProfitCalculator } from "../components/ProfitCalculator";
import { SiteFooter } from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMatix />
        <ProductShowcase />
        <OrderMission />
        <PickleBossAcademy />
        <ProfitCalculator />
        <AchievementBadges />
      </main>
      <SiteFooter />
    </>
  );
}

