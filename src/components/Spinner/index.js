import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Spinner = ({ style }) => (
  <StyledSpinner style={style} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    />
  </StyledSpinner>
);

Spinner.propTypes = {
  style: PropTypes.shape({}),
};

Spinner.defaultProps = {
  style: {},
};

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: ${({ style }) => style.margin || '40px'};
  width: ${({ style }) => style.width || '20px'};
  height: ${({ style }) => style.height || '20px'};

  & .path {
    stroke: ${({ style }) => style.color || '#5652bf'};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
