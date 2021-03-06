/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img
      className={className}
      viewBox="0 0 135 67"
      src="/img/logofriends.png"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  position: center;
  z-index: 10;
  height: 98px;
  margin-left: 52px;
  top: 40px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;