/* eslint-disable react/prop-types */

const Container = (props) => {
  const maxWidth = props.fullWidth ? props.maxWidth : "1250px";
  return (
    <div
      {...props}
      style={{
        ...props.style,
        maxWidth,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1em",
      }}
    />
  );
};

export default Container;
