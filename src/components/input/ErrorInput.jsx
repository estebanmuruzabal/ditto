import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HelpBlock } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ErrorInput = ({ errorMessage }) => {
  return (
    <div className="error-block-container-independent">
      <CSSTransition
        transitionName="error-block"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <HelpBlock key={errorMessage}>{errorMessage}</HelpBlock>
      </CSSTransition>
    </div>
  );
};

export default ErrorInput;

ErrorInput.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorInput.defaultProps = {
  errorMessage: 'required',
};
