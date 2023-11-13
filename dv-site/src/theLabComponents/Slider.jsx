import Card from "./Card";
import "./card.css";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slide className="slider-class" {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slide>
    </div>
  );
}
