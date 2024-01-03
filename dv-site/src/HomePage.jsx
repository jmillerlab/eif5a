import "./App.css";
import HomeHero from "./homeComponents/HomeHero";
import HomeDescription from "./homeComponents/HomeDescription";
import HomeLearnMore from "./homeComponents/HomeLearnMore";

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeDescription />
      <HomeLearnMore />
    </>
  );
}

export default HomePage;
