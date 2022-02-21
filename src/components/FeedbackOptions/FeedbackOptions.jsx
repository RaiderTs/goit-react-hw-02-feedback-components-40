import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  height: 45px;
  margin: auto;
  margin-top: 25px;
  padding: 6px 22px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.938);
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 10px;
  background: linear-gradient(to right, #396afc, #2948ff);
  box-shadow: 15px 13px 28px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
    background-color: rgb(7, 165, 15);
    box-shadow: 15px 13px 28px 23px rgba(34, 60, 80, 0.2);
    transform: scale(1.05);
  }
`;

const FeedbackOptions = ({ buttonsNames, onLeaveFeedback }) => {
  return (
    <div>
      {buttonsNames.map((buttonName) => (
        <Button
          key={buttonName}
          type="button"
          data-button={buttonName}
          onClick={onLeaveFeedback}
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
