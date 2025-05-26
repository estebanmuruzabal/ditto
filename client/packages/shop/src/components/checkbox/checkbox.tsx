import React, { useState } from 'react';
import {
  StyledCheckBox,
  StyledCheckBoxLabel,
  StyledCheckBoxLabelText,
  StyledCheckBoxInput,
  StyledCheckBoxInputIndicator,
} from './checkbox.style';


type CheckBoxProps = {
  id: string;
  disabled?: boolean;
  isChecked?: boolean;
  labelText?: string;
  className?: string;
  keyName: string;
  labelPosition?: 'left' | 'right';
  [key: string]: unknown;
  onChange: any
};

const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  isChecked,
  labelText,
  keyName,
  id,
  labelPosition = 'right',
  disabled = false,
  onChange,
}) => {

  return (
    <StyledCheckBox key={keyName} onClick={onChange} className={`Mahdi Fashion__checkbox ${keyName}`.trim()}>
      <StyledCheckBoxLabel htmlFor={id} position={labelPosition}>
        {labelText && (
          <StyledCheckBoxLabelText position={labelPosition}>
            {labelText}
          </StyledCheckBoxLabelText>
        )}
        <StyledCheckBoxInput
          type="checkbox"
          className="checkbox-input"
          checked={isChecked}
          disabled={disabled}
       
        />
        {/* <StyledCheckBoxInputIndicator /> */}
      </StyledCheckBoxLabel>
    </StyledCheckBox>
  );
};

export default CheckBox;
