import Container from "../../components/Container";
import { PARTNERS_LOGOS } from "./constant";
import "./partners.css";

const Partners = () => {
  return (
    <section className="section">
      <Container className="partners-logos-holder">
        {PARTNERS_LOGOS.map((image, index) => {
          return (
            <div className="partners-logo" key={index}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Partners;
