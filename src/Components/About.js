//info about sushi restaurant

import ReviewsList from "./ReviewsList";
import { Container, Row, Col, Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export default function About() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h2>About</h2>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h5>Crazi Fresh, Crazi Cheap, Crazi Delicious</h5>
                    Serving up the CrAZiest Sushi in North Las Vegas! CrAZi
                    Sushi was founded by Aziyel Madrigal in 2023. We specialize
                    in quality AYCE sushi at an affordable price.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <h2>Hours and Location</h2>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h5>
                      {" "}
                      123 Crazi Sushi Ave <br /> North Las Vegas, NV, 89084{" "}
                    </h5>
                    <p>
                      <strong>Phone:</strong> (702) 123-4567
                      <br />
                      <strong>Hours:</strong> 24/7 Daily
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Row>
                <Col>
                  <SocialIcon url="https://www.yelp.com" />
                  <SocialIcon url="https://www.instagram.com" />
                  <SocialIcon url="https://www.facebook.com" />
                  <SocialIcon url="https://maps.google.com" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <ReviewsList />
          </Row>
        </Container>
      </div>
    </div>
  );
}
