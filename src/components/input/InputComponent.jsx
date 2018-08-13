import React from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const InputComponent = ({
  input,
  label,
  placeholder,
  disabled,
  value,
  index,
  name,
  handleChange,
  meta: { touched, error },
}) => {
  const hasError = touched && error;
  return (
    <FormGroup validationState={hasError ? 'error' : null}>
      { label && <ControlLabel>{label}</ControlLabel> }
      <FormControl {...input} onChange={e => handleChange(e, index)} placeholder={placeholder} name={name} value={value} disabled={disabled} />
      <div className="error-block-container">
        <CSSTransitionGroup
          transitionName="error-block"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <HelpBlock key={hasError && error.key}>{hasError && error.message}</HelpBlock>
        </CSSTransitionGroup>
      </div>
    </FormGroup>
  );
};

InputComponent.defaultProps = {
  label: '',
  disabled: false,
  placeholder: '',
  input: {},
  meta: {},
};

InputComponent.propTypes = {
  input: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  meta: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default InputComponent;
