import React from 'react';
import ReactSelect from 'react-select';
import SelectStyle from './select.style';

type SelectProps = {
  className?: string;
  labelText?: string;
  as?: string;
  name?: string;
  value?: any;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  props?: any;
  options: any[];
};

const Select: React.FC<SelectProps> = ({
  className,
  labelText,
  labelPosition,
  ...props
}) => {
  // Add all classes to an array
  const addAllClasses = ['Mahdi Fashion__select'];

  // Add label position class
  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  const LabelField = labelText && (
    <span className="Mahdi Fashion__field-label">{labelText}</span>
  );

  const position = labelPosition || 'top';

  return (
    <SelectStyle className={addAllClasses.join(' ')}>
      {position === 'left' || position === 'right' || position === 'top'
        ? LabelField
        : ''}

      <ReactSelect
        className="select-field__wrapper"
        classNamePrefix="select"
        {...props}
      />
      {position === 'bottom' && LabelField}
    </SelectStyle>
  );
};

Select.defaultProps = {
  as: 'div',
  labelPosition: 'top',
};

export default Select;
