class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    //bind functions
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //setup state
    this.state = {options: props.options};
  };
  //START: APP METHODS
  //Set options from local storage if they exist
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) this.setState(() => ({options}));
    } catch(e) {
      //Do nothing at all
    }
  }
  //Save new options to local storage
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  
  //remove all options
  handleDeleteOptions(){
    this.setState(() => ({options:[]}));
  };
  //remove individual object selected
  handleDeleteOption(optionToRemove){
    this.setState((prevs) => ({
      options: prevs.options.filter((option) => option !== optionToRemove)
    }))
  }
  //randomly pick an option
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
    this.setState((prevs) => ({options: prevs.options.concat(option)}));
  }
  //END: APP METHODS

  render() {
    const subtitle = "Put your life in the hands of a computer";

    //MAIN BODY TO BE RENDERED
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOption={this.state.options.length > 0}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
};
IndecisionApp.defaultProps = {
  options: []
}

//Title and subtitle at the top
const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
}
Header.defaultProps = {
  title: 'Indecision'
}


//The what should I do button
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
//The options list with remove all button
const Options = (props) => {
  return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option) => (
              <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
              />
            ))
        } 
      </div>
    );
}
//individual option
const Option = (props) => {
  return (
      <div>
         {props.optionText}
         <button 
            onClick={(e) => {
              props.handleDeleteOption(props.optionText);
            }}
         >
          remove
         </button>
      </div>
    );
}
//The bottom form to submit a new option
class AddOption extends React.Component {
  constructor(props){
    super(props);
    //function binding
    this.handleAddOption = this.handleAddOption.bind(this);
    //setup state
    this.state = {error: undefined};
  }
  //grab submitted options and send it to parent for addition
  handleAddOption(e){
    e.preventDefault();
    //get option from event
    const option = e.target.elements.option.value.trim();
    //call for parent to add option and return any errors
    const error = this.props.handleAddOption(option);
    //set error state to returned error if any
    this.setState(() => ({error}));
    //if no error clear form input
    if(!error) e.target.elements.option.value = '';
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