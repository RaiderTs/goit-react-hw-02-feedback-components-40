import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ buttonsNames, onLeaveFeedback }) => {
  return (
    <div>
      {buttonsNames.map(buttonName => (
        <Button
          key={buttonName}
          type="button"
          onClick={() => {
            onLeaveFeedback(buttonName);
          }}
        >
          {buttonName}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttonsNames: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
