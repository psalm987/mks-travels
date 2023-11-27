import Button, { CircleButton } from "../../components/Button";
import Container from "../../components/Container";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-background">
      <Container className="hero-container">
        <img
          alt="Travel Hero"
          src="/img/Hero Image.png"
          className="hero-image"
        />
        <div className="hero-content">
          <p className="lead">Best Destinations around the world</p>
          <h1>
            Travel, <span className="decore">enjoy</span> and live a new and
            full life
          </h1>
          <p className="hero-description">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="hero-cta">
            <Button>Find out more</Button>
            <CircleButton>▶︎</CircleButton>
            <span>Play Demo</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
