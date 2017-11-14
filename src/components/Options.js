import React from 'react';
import Option from './Option';

//The options list with remove all button
const Options = (props) => (
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

export default Options;