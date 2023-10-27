import "./App.css";
import HomeHero from "./homeComponents/HomeHero";
import HomeDescription from "./homeComponents/HomeDescription";
import HomeLearnMore from "./homeComponents/HomeLearnMore";

function HomePage() {
  return (
    <>
      {/* 
    <div className="image">
       
      </div>
    */}

      <HomeHero />
      <HomeDescription />
      <HomeLearnMore />
    </>
  );
}

export default HomePage;
