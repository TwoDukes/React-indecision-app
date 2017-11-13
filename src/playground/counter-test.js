class Counter extends React.Component{
  constructor(props){
    super(props);
    //binding methods to this
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //setup state
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);
      if(!isNaN(count)) this.setState(() => ({count}));
    } catch(e) {
      //Do nothing at all
    }
  }
  //Save new options to local storage
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
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

ReactDOM.render(<Counter/>, document.getElementById('app'));