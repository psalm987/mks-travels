import Container from "../../components/Container";
import Input from "../../components/Input";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <section className="section">
      <Container className="relative">
        <img
          src="/img/Plus elements 2.svg"
          alt=""
          className="subscribe-card-plus-element"
        />
        <div className="relative subscribe-card">
          <img
            src="/img/Circles element.svg"
            alt=""
            className="subscribe-card-circle-element"
          />
          <img
            src="/img/Circles element 2.svg"
            alt=""
            className="subscribe-card-circle-element-2"
          />
          <img
            src="/img/Corner element.svg"
            alt=""
            className="subscribe-card-corner-element"
          />
          <h3 className="center-text">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h3>
          <form className="subscribe-form">
            <Input
              placeholder="Your email"
              required
              startEndornment={<img src="/img/Email icon.svg" alt="" />}
            />
            <button>Subscribe</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
