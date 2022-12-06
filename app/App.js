class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definedLimit: 25,
      maxLimit: 30,
    };
  }

  setDefinedLimit(e) {
    this.setState(() => ({
      definedLimit: parseInt(e.target.value)
    }));
  }

  render() {
    const {maxLimit, definedLimit} = this.state;

    return createElement('div',{}, [
      createElement('h1',{
        textContent: 'Asistentes a AsaditoJs'
      }),
      createElement('input',{
        type: 'text',
        value: definedLimit,
        onchange: e => this.setDefinedLimit(e),
      }),
      createElement('p',{
        textContent: `${ maxLimit - definedLimit } asientos disponibles`
      }),
      createElement('input',{
        type: 'range',
        min: 0,
        max: maxLimit,
        value: definedLimit,
        onchange: e => this.setDefinedLimit(e),
      })
    ]);
  }
}