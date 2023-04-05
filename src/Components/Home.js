//Welcome page

import CraziSushi2 from "../Images/CraziSushi2.png";
import SushiCarousel from "./SushiCarousel";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div className="card">
      <Container>
        <Row>
          <img id="crazi-sushi" src={CraziSushi2} alt="CraziSushi" />
          <h1>Welcome!</h1>
          <p>Click the Order link above to Check In.</p>
        </Row>
        <Row>
          <h4>Check out our Monthly Specials!</h4>
          <SushiCarousel />
        </Row>
      </Container>
    </div>
  );
}
