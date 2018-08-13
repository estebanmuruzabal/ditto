import React from 'react';
import { FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const SelectBikeSetting = ({
  label,
  disabled,
  value,
  input,
  name,
  selectOptions,
  handleChange,
  minBikes,
  maxBikes,
}) => {
  let error;
  if (name === 'maxBikes' && maxBikes && minBikes && Number(minBikes) > Number(maxBikes)) {
    error = { key: 'min', message: 'Must be greater than ' + minBikes };
  } else if (name === 'minBikes' && maxBikes && minBikes && Number(minBikes) > Number(maxBikes)) {
    error = { key: 'max', message: 'Must be less than ' + maxBikes };
  } else {
    error = undefined;
  }
  return (
    <FormGroup validationState={error ? 'error' : 'success'}>
      { label && <ControlLabel>{label}</ControlLabel> }
      <FormControl
        componentClass="select"
        onChange={(e) => handleChange(e)}
        name={name}
        value={input.value ? input.value : value}
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
          <HelpBlock key={error && error.key && error.key}>{error && error.message && error.message}</HelpBlock>
        </CSSTransitionGroup>
      </div>
    </FormGroup>
  );
};

SelectBikeSetting.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  minBikes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxBikes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  input: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object, // eslint-disable-line react/forbid-prop-types
  ]),
  disabled: PropTypes.bool,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
};

SelectBikeSetting.defaultProps = {
  minBikes: undefined,
  maxBikes: undefined,
  label: null,
  value: '',
  input: {},
  disabled: false,
};

export default SelectBikeSetting;
