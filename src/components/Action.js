import React from 'react';

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

export default Action;