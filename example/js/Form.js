class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'greeting': 'hey'
    };
    this.onCountrySelected = this.onCountrySelected.bind(this);
    this.onFirstNameChanged = this.onFirstNameChanged.bind(this); // This binding is necessary to make `this` work in the callback

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      'greeting': 'hello'
    });
    console.log('The link was clicked.');
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  onCountrySelected(event) {
    console.log('Selected country');
    console.log(event);
  }

  handleChange(event) {
    alert('handleChange');
  }

  onFirstNameChanged(event) {
    console.log(event);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, this.state.greeting), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleClick
    }, "hello"), /*#__PURE__*/React.createElement(Button, {
      handleClick: this.handleClick
    }), /*#__PURE__*/React.createElement(FirstName, {
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement(Country, {
      onChange: this.onCountrySelected
    }));
  }

}