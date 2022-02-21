import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SectionContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 500px;
  display: grid;
  justify-content: inherit;
  max-width: 600px;
  margin-left: 10%;
  margin-right: auto;
  padding: 25px;
`;

const Title = styled.h1`
  font-style: italic;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
`;

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
