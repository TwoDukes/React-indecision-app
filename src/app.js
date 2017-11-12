class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    //bind functions
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    //setup state
    this.state = {
      options: []
    }
  };
  //START: APP METHODS
  //remove all options
  handleDeleteOptions(){
    this.setState(() => ({options:[]}));
  };
  //randomly pick an options
  handlePick(){
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    alert(option);
  }

  handleAddOption(option){
    //Some error checking
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    //set the new option in state if no error
    this.setState((prevs) => {
      return {
        options: prevs.options.concat(option)
      }
    });
  }
  //END: APP METHODS

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    //MAIN BODY TO BE RENDERED
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOption={this.state.options.length > 0}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
};

const Header = (props) => {
  return (
      <div>
        <h1>{props.title || 'No Title'}</h1>
        <h2>{props.subtitle || 'No Subtitle'}</h2>
      </div>
    );
}

const Action = (props) => {
  return (
      <div>
        <button 
          onClick={props.handlePick} 
          disabled={!props.hasOption}
        >
          What should I do?
        </button>
      </div>
    );
}

const Options = (props) => {
  return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option)=> <Option key={option} optionText={option} />)
        } 
      </div>
    );
}

const Option = (props) => {
  return (
      <div>
         {props.optionText}
      </div>
    );
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    //function binding
    this.handleAddOption = this.handleAddOption.bind(this);
    //setup state
    this.state = {
      error: undefined
    }
  }
  //grab submitted options and send it to parent for addition
  handleAddOption(e){
    e.preventDefault();
    //get option and set input to blank
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';
    //call for parent to add option and return any errors
    const error = this.props.handleAddOption(option);
    //set error state to returned error if any
    this.setState(() => ({error}));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option"/>
          <button>Submit Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));