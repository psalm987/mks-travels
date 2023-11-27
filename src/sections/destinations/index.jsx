import Container from "../../components/Container";
import DestinationCard from "./card";
import { DESTINATION_DETAILS } from "./constants";
import "./destinations.css";

const Destinations = () => {
  return (
    <section className="section">
      <Container className="center-text relative">
        <img
          src="/img/Spring Decore.svg"
          alt="Spring"
          className="destination-spring-decore"
        />
        <p className="">Top Selling</p>
        <h2>Top Destinations</h2>
        <div className="destinations-holder">
          {DESTINATION_DETAILS.map(({ image, title, price, duration }) => {
            return (
              <DestinationCard
                key={title}
                {...{ title, price, image, duration }}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Destinations;
