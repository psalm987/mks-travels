import PropType from "prop-types";
import "./input.css";
const Input = (props) => {
  const {
    holderClassName,
    value,
    onChange,
    startEndornment,
    required,
    placeholder,
  } = props;
  return (
    <div className={`input-holder ${holderClassName || ""}`}>
      {startEndornment}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  holderClassName: PropType.object,
  value: PropType.string,
  onChange: PropType.func,
  startEndornment: PropType.node,
  required: PropType.bool,
  placeholder: PropType.string,
};
