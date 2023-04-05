//contains orderform and tablelist

import TablesList from "./TablesList";
import { Container, Row} from "react-bootstrap";

export default function Order() {
  return (
    <div>
      <Container>
        <Row>
          <TablesList />
        </Row>
      </Container>
    </div>
  );
}
