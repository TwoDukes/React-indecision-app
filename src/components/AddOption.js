import React from 'react';

//The bottom form to submit a new option
export default class AddOption extends React.Component {
  //setup state
  state = {
    error: undefined
  };
  //grab submitted options and send it to parent for addition
  handleAddOption = (e) => {
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
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type='text' name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}