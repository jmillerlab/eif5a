import HomeHero from "../homeComponents/HomeHero";
import HomeDescription from "../homeComponents/HomeDescription";
import HomeLearnMore from "../homeComponents/HomeLearnMore";
import { motion as m } from "framer-motion";

function HomePage() {
  return (
    <m.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <HomeHero />
      <HomeDescription />
      <HomeLearnMore />
    </m.div>
  );
}

export default HomePage;
