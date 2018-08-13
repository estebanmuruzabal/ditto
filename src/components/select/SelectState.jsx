import React from 'react';
import { FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const SelectState = ({
  label,
  disabled,
  name,
  input,
  selectOptions,
  meta: { touched, error },
}) => {
  const hasError = touched && error;
  return (
    <FormGroup validationState={hasError ? 'error' : null}>
      { label && <ControlLabel>{label}</ControlLabel> }
      <FormControl componentClass="select" name={name} {...input} className="select-custom" disabled={disabled}>
        <option key="0" value="">Choose State</option>
        { selectOptions &&
          selectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.name}</option>
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

SelectState.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  meta: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  disabled: PropTypes.bool,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
};

SelectState.defaultProps = {
  label: null,
  name: '',
  disabled: false,
  // meta: metaObj,
  initialValue: 0,
};

export default SelectState;
