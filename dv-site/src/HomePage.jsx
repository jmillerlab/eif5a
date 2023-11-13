import "./App.css";
import HomeHero from "./homeComponents/HomeHero";
import HomeDescription from "./homeComponents/HomeDescription";
import HomeLearnMore from "./homeComponents/HomeLearnMore";
import Heatmap from "./graphs/Heatmap";

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
