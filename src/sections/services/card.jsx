import PropTypes from "prop-types";

const ServicesCard = (props) => {
  const { image, title, body } = props;
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ServicesCard;
