import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { PencilIcon } from 'assets/icons/PencilIcon';
import { useIntl } from 'react-intl';

const Link = styled.a`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.blue.dark', '#161F6A')};
`;

const CardWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: ${themeGet('radii.base', '6px')};
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
  text-align: center;
  padding: 15px 20px;
  margin-bottom: 15px;
  margin-right: 15px;
  position: relative;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 24px;
  max-width: 240px;
  cursor: pointer;
  width: 100%;
  transition: all 0.25s ease;

  &.active {
    border: 2px solid ${themeGet('colors.primary.regular', '#009E7F')};
    background-color: ${themeGet('colors.white', '#ffffff')};
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.item-has-title {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 15px;
  }

  &:last-child {
    margin-right: 0;
  }

  input[type='radio'] {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    .button-wrapper {
      opacity: 1;
      visibility: visible;
    }
  }
`;
const CardTitle = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

const CardContent = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '400')};
  color: ${themeGet('colors.text.medium', '#424561')};
`;

const CardButtons = styled.span`
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;
`;

const ActionButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5px;
  cursor: pointer;
  outline: 0;
  padding: 0;
  color: ${themeGet('colors.white', '#ffffff')};

  &.edit-btn {
    background-color: ${themeGet('colors.primary.regular', '#009E7F')};
  }
  &.delete-btn {
    background-color: ${themeGet('colors.secondary.regular', '#ff5b60')};
  }

  svg {
    display: block;
    width: 8px;
    height: auto;
  }
`;

type RadioCardProps = {
  id: string;
  name: string;
  title: string;
  details: string;
  editIcon?: any;
  deleteIcon?: any;
  withActionButtons?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onClick?: () => void;
  hasEdit?: boolean;
  hasDelete?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange: () => void;
  link?: string;
};
const RadioCard: React.FC<RadioCardProps> = ({
  id,
  name,
  title,
  details,
  editIcon,
  deleteIcon,
  withActionButtons,
  onEdit,
  onDelete,
  onClick,
  hasEdit,
  hasDelete,
  disabled,
  checked,
  onChange,
  link
}) => {
  const intl = useIntl();
  const getLinkOnly = (text) => {
    if (!text) return;
    const word = 'https';

    const index = text.indexOf(word);   // 8
    const length = word.length;			// 7

    return text.slice(index + length - 5);
  }

  const detailsDivided = details?.split(' | ');

  return (
    <CardWrapper
      htmlFor={`${name}-${id}`}
      className={`label ${title ? 'item-has-title' : 'no_title'}
      ${checked ? 'active' : 'not_active'}`}
    >
      <input
        type='radio'
        id={`${name}-${id}`}
        name={name}
        value={details}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />
      {title && <CardTitle>{title}</CardTitle>}

      {details && <CardContent>{<Link href={link} target="_blank" rel="noopener noreferrer">{ detailsDivided[0]}</Link>}</CardContent>}
      {details && <CardContent>{detailsDivided[1]}</CardContent>}
      {details && <CardContent>{detailsDivided[2]}</CardContent>}
      {withActionButtons && (
        <CardButtons className='button-wrapper'>
          {hasEdit && (
            <ActionButton onClick={onEdit} className='edit-btn'>
              {editIcon}
            </ActionButton>
          )}
          {hasDelete && (
            <ActionButton onClick={onDelete} className='delete-btn'>
              {deleteIcon}
            </ActionButton>
          )}
        </CardButtons>
      )}
    </CardWrapper>
  );
};
RadioCard.defaultProps = {
  title: '',
  details: '',
  editIcon: <PencilIcon />,
  deleteIcon: <CloseIcon />,
  withActionButtons: true,
  hasEdit: true,
  hasDelete: true,
};
export default RadioCard;
