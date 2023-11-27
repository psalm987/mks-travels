import Container from "../../components/Container";
import "./nexttrip.css";

const NEXT_TRIP_STEPS = [
  {
    color: "#F0BB1F",
    icon: "/img/Choose destination icon.svg",
    title: "Choose Destination",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    color: "#5EAD1F",
    icon: "/img/Make payment icon.svg",
    title: "Make Payment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    color: "#039CDF",
    icon: "/img/Reach Airport on Selected Date icon.svg",
    title: "Reach Airport on Selected Date",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
];

const NextTrip = () => {
  return (
    <section className="section">
      <Container className="next-trip-holder">
        <div>
          <p>Easy and Fast</p>
          <h2>Book your Next Trip in 3 Easy Steps</h2>
          <div className="next-trip-step-holder">
            {NEXT_TRIP_STEPS.map(({ icon, title, body, color }) => {
              return (
                <div key={title} className="next-trip-step">
                  <div
                    className="next-trip-step-icon-holder"
                    style={{ backgroundColor: color }}
                  >
                    <img src={icon} alt={title} height={26} width={26} />
                  </div>
                  <div className="next-trip-step-content">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src="/img/Book your next trip  in 3 easy steps Image.png"
          alt=""
          height={800}
        />
      </Container>
    </section>
  );
};

export default NextTrip;
