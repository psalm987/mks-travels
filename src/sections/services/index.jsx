import Container from "../../components/Container";
import ServicesCard from "./card";
import { CARD_DETAILS } from "./constant";
import "./services.css";

const Services = () => {
  return (
    <section className="section">
      <Container className="center-text relative services">
        <div className="pin-decore" />
        <img src="/img/Plus assets.svg" alt="decore" />
        <p className="capitalize">Category</p>
        <h2>We Offer Best Services</h2>
        <div className="service-card-holder">
          {CARD_DETAILS.map(({ image, title, body }) => {
            return <ServicesCard key={title} {...{ title, image, body }} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
