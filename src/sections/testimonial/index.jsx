import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Container from "../../components/Container";
import "./testimonial.css";
import { TESTIMONIALS } from "./constant";

const Testimonial = () => {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(2);

  const timer = useRef();

  const nextActive = useMemo(() => {
    return index !== TESTIMONIALS.length - 1;
  }, [index]);

  const prevActive = useMemo(() => {
    return index !== 0;
  }, [index]);

  const next = useCallback(() => {
    setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => {
      next();
    }, 7000);

    return () => {
      clearInterval(timer.current);
    };
  }, [next]);

  return (
    <section className="section">
      <Container className="testimonial-content">
        <div>
          <p className="capitalize">Testimonials</p>
          <h2>What people say about Us.</h2>
          <div className="testimonial-indicator-holder">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                className={`testimonial-indicator ${
                  i === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="testimonial-card-section">
          <div className="testimonial-card-holder relative">
            {TESTIMONIALS.map(({ testimonial, name, role, image }, i) => (
              <div
                key={i}
                className={`testimonial-card ${index === i ? "active" : ""}`}
              >
                <img src={image} alt="" />
                <p className="testimonial-body">{testimonial}</p>
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-card-navigation">
            <button onClick={prev} disabled={!prevActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="inherit"
                  stroke="inherit"
                  d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"
                />
              </svg>
            </button>
            <button onClick={next} disabled={!nextActive}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  fill="inherit"
                  stroke="inherit"
                  d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
