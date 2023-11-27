import PropTypes from "prop-types";

const DestinationCard = (props) => {
  const { title, image, price, duration } = props;
  return (
    <div key={title} className="destination-card">
      <img src={image} alt={title} />
      <div className="destination-card-content">
        <div>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div>
          <img src="/img/navigation 1.svg" alt="navigation" />
          <p>{duration} Days Trip</p>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default DestinationCard;
