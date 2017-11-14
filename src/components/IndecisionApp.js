import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  //setup state
  state = {options: []};

  /***
  //START: APP METHODS
  ***/

  //remove all options
  handleDeleteOptions = () => {
    this.setState(() => ({options:[]}));
  };
  //remove individual object selected
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevs) => ({
      options: prevs.options.filter((option) => option !== optionToRemove)
    }))
  }
  //randomly pick an option
  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    alert(option);
  }

  handleAddOption = (option) => {
    //Some error checking
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    //set the new option in state if no error
    this.setState((prevs) => ({options: prevs.options.concat(option)}));
  }

  /***
  //END: APP METHODS
  ***/

  /***
  //START: REACT CALLBACK METHODS
  ***/

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
  /***
  //END: REACT CALLBACK METHODS
  ***/
};
