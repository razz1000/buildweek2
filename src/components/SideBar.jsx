import SinglePerson from "./SinglePerson";
import SeeMoreSideBar from "./SeeMoreSideBar";
import { Container, Row } from "react-bootstrap";
import "./stylesheets/sideBar.css";

const SideBar = ({ heading, data }) => {
  return (
    <Container fluid className="sidebar-container">
      <h2 className="sidebar-heading">{heading}</h2>
      {data.slice(0, 8).map((profile) => {
        return (
          <Row key={profile._id}>
            <SinglePerson profile={profile} />
          </Row>
        );
      })}
      {/* <Row>
        <SinglePerson />
      </Row>
      <Row>
        <SinglePerson />
      </Row>
      <Row>
        <SinglePerson />
      </Row>
      <Row>
        <SinglePerson />
      </Row> */}
      <Row className="d-flex justify-content-center see-more-row">
        <SeeMoreSideBar />
      </Row>
    </Container>
  );
};
export default SideBar;
