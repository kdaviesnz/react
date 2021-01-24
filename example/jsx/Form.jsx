class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {'greeting':'hey'}
        this.onCountrySelected = this.onCountrySelected.bind(this)
        this.onFirstNameChanged = this.onFirstNameChanged.bind(this)
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        this.setState({'greeting':'hello'})
        console.log('The link was clicked.');
    }

    componentDidMount() {
        console.log('Component mounted')
    }

    onCountrySelected(event) {
        console.log('Selected country')
        console.log(event)
    }

    handleChange (event) {
        alert('handleChange')
    }

    onFirstNameChanged(event) {
        console.log(event)
    }

    render() {
        return <div>
            <div>{this.state.greeting}</div>
            <button onClick={this.handleClick}>hello</button>
            <Button handleClick={this.handleClick}/>
            <FirstName onChange={this.handleChange} />
            <Country onChange={this.onCountrySelected} />
        </div>
    }

}