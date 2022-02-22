import React from 'react';
import PropTypes from 'prop-types';
import { List, Div, Li } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total ? (
        <List>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total: {total}</li>
          <Li>Positive percentage: {positivePercentage}%</Li>
        </List>
      ) : (
        <Div>
          <h3>No reviews yet</h3>
        </Div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
