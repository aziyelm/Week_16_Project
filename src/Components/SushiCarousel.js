import Carousel from "react-bootstrap/Carousel";
import SushiBoat from "../Images/SushiBoat.jpeg";
import Uni from "../Images/Uni.jpeg";
import SushiCake from "../Images/SushiCake.jpeg";
import Crab from "../Images/Crab.jpg";

function SushiCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={SushiBoat} alt="First slide" />
        <Carousel.Caption>
          <h3>Sushi Boat Party Platter</h3>
          <p>Our seafood is fresh off the boat!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Uni} alt="Second slide" />

        <Carousel.Caption>
          <h3>Uni</h3>
          <p>Wild caught and hand harvested! It's the UNI one for you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SushiCake} alt="Third slide" />

        <Carousel.Caption>
          <h3>Sushi Cake</h3>
          <p>This cake will make anyone's birthday SOY special!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Crab} alt="Third slide" />

        <Carousel.Caption>
          <h3>Soft Shell Crab Tempura</h3>
          <p>Crabsolutely Clawsome!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SushiCarousel;
