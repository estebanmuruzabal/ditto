import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Input = ({
  input,
  label,
  type,
  disabled,
  placeholder,
  initialValue,
  className,
  showToolTip,
  meta: { touched, error },
}) => {
  const hasError = touched && error;
  return (
    <FormGroup validationState={hasError ? 'error' : null}>
      { label && <ControlLabel>{label}</ControlLabel> }
      { initialValue
        ? <FormControl {...input} className={className} type={type} value={initialValue} placeholder={placeholder} disabled={disabled} />
        : <FormControl {...input} className={className} placeholder={placeholder} type={type} disabled={disabled} />}
      <div className="error-block-container">
        <CSSTransition
            transitionName="error-block"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
          <HelpBlock key={hasError && error.key}>{hasError && error.message}</HelpBlock>
        </CSSTransition>
      </div>
    </FormGroup>
  );
};

Input.defaultProps = {
  label: '',
  disabled: false,
  placeholder: '',
  input: {},
  meta: {},
  initialValue: '',
  className: '',
  showToolTip: false,
};

Input.propTypes = {
  input: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string,
  className: PropTypes.string,
  showToolTip: PropTypes.bool,
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  meta: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default Input;
