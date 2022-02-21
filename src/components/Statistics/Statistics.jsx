import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const List = styled.ul`
  margin-top: 10px;
  text-align: left;
  padding: 25px;
  font-size: 25px;
  font-style: italic;
  list-style-type: none;
  border-radius: 10px;
  background: linear-gradient(to right, #396afc, #2948ff);
  box-shadow: 15px 13px 28px 0px rgba(34, 60, 80, 0.2);
  color: #fff;
  li {
    margin-bottom: 10px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-style: italic;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 2px;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
`;

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
