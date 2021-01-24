const Button = props => {
  console.log('button props');
  console.log(props);
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.handleClick
  }, "hey");
};