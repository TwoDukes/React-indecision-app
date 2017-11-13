class Counter extends React.Component{
  constructor(props){
    super(props);
    //binding methods to this
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //setup state
    this.state = {
      count: props.count
    }
  }
  handleAddOne(){
    this.setState((prevState) => ({count: prevState.count+1}));
  }
  handleMinusOne(){
    this.setState((prevState) => ({count: prevState.count-1}));
  }
  handleReset(){
    this.setState(() => ({count: 0}));
  }
  render(){
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'));