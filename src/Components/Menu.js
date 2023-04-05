//menu
import MenuImg from "../Images/SushiMenu.png";
import { Container } from "react-bootstrap";

export default function Menu() {
  return (
    <div>
      <Container>
        <img id="menu-img" src={MenuImg} alt="Menu" />
      </Container>
    </div>
  );
}
