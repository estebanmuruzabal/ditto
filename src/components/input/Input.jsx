import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
      {showToolTip &&
        <div className="cvv-tooltip">?
          <span className="cvv-tooltip-text">CVV is the last three digits on the back of your credit card</span>
        </div>
      }
      { initialValue ? <FormControl {...input} className={className} type={type} value={initialValue} placeholder={placeholder} disabled={disabled} /> : <FormControl {...input} className={className} placeholder={placeholder} type={type} disabled={disabled} />}
      <div className="error-block-container">
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
