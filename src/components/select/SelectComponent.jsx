import React from 'react';
import { FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const metaObj = {
  touched: false,
  error: false,
};

const SelectComponent = ({
  label,
  disabled,
  value,
  input,
  index,
  name,
  selectOptions,
  handleChange,
  meta: { touched, error },
}) => {
  const hasError = touched && error;
  return (
    <FormGroup validationState={hasError ? 'error' : null}>
      { label && <ControlLabel>{label}</ControlLabel> }
      <FormControl
        componentClass="select"
        onChange={e => handleChange(e, index)}
        name={name}
        value={value.value ? value.value : value}
        {...input}
        className="select-custom"
        disabled={disabled}
      >
        {
          selectOptions.map((opt) => (
            <option key={opt.value.id ? opt.value.id : opt.value} value={opt.value}>{opt.name}</option>
          ))
        }
      </FormControl>

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

SelectComponent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  index: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  input: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object, // eslint-disable-line react/forbid-prop-types
  ]),
  meta: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  disabled: PropTypes.bool,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
};

SelectComponent.defaultProps = {
  label: null,
  value: '',
  input: {},
  index: undefined,
  disabled: false,
  meta: metaObj,
};

export default SelectComponent;
