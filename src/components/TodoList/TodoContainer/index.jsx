import React from 'react';
import PropTypes from 'prop-types';
import MuiBox from './styles';

export default function Box(props) {
  const { children } = props;

  return (
    <>
      <MuiBox>{children}</MuiBox>
    </>
  );
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
