import React, { useState, useEffect, useRef } from 'react';
import useOnClickOutside from './useOnClickOutside';
import PopoverBiggerWrapper from './popover-bigger.style';

type PopoverBiggerProps = {
  className?: string;
  handler: React.ReactNode;
  content: React.ReactNode;
  direction?: 'left' | 'right';
  handleToggle?: () => void;
};

const PopoverBigger: React.FC<PopoverBiggerProps> = ({
  className,
  handler,
  content,
  direction,
}) => {
  // PopoverBigger State
  const [state, setState] = useState(false);

  // Ref
  const ref = useRef();

  // Add all classs to an array
  const addAllClasses: string[] = ['popover-wrapper'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Add direction class on popover content
  if (direction) {
    addAllClasses.push(direction);
  }

  // Toggle PopoverBigger content
  const handleToggle = (e) => {
    e.stopPropagation();
    setState((state) => !state);
  };

  // Handle document click
  const handleDocumentClick = (e) => {
    e.stopPropagation();
    if (state) {
      handleToggle(e);
    }
  };

  // Handle window event listener
  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  // Close popover on click outside
  useOnClickOutside(ref, () => setState((state) => false));

  return (
    <PopoverBiggerWrapper className={addAllClasses.join(' ')} ref={ref}>
      <div className="popover-handler" onClick={handleToggle}>
        {handler}
      </div>
      {state && (
        <div className="popover-content">
          {content && (
            <div className="inner-wrap" onClick={handleToggle}>
              {content}
            </div>
          )}
        </div>
      )}
    </PopoverBiggerWrapper>
  );
};

export default PopoverBigger;
