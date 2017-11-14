import React from 'react';

//The bottom form to submit a new option
export default class AddOption extends React.Component {
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