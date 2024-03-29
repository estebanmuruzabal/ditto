import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
// import Inputs from 'components/input/input';
import { Row as Rows } from 'react-styled-flexboxgrid';
import css from '@styled-system/css';
import { compose, layout, space, color, border } from 'styled-system';

const SettingsForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Title = styled.h3`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;

const SettingsFormContent = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// const Input = styled(Inputs)`
//   @media only screen and (min-width: 0em) and (max-width: 47.99em) {
//     margin-bottom: 30px;
//   }
// `;

const Row = styled(Rows)`
  margin-bottom: 40px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  .radioGroup {
    flex-grow: 1;
    justify-content: space-between;

    label {
      margin-top: 0;
      flex: calc(33.333333333% - 10px);
      max-width: calc(33.333333333% - 10px);
      margin-bottom: 15px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      @media (max-width: 700px) {
        flex: calc(50% - 10px);
        max-width: calc(50% - 10px);

        &:nth-child(3n) {
          margin-right: 15px;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      @media (max-width: 480px) {
        flex: 100%;
        max-width: 100%;
        margin-right: 0;

        &:nth-child(3n) {
          margin-right: 0;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }

  .add-button {
    flex: calc(33.3333333333% - 10px);
    max-width: calc(33.3333333333% - 10px);
    flex-shrink: 0;
    height: auto;
    min-height: 77px;
    border: 1px dashed ${themeGet('colors.gray.500', '#f1f1f1')};
    margin-bottom: 15px;
    margin-left: 0;
    margin-right: auto;
    &:hover {
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
    }

    @media (max-width: 700px) {
      flex: calc(50% - 10px);
      max-width: calc(50% - 10px);
    }

    @media (max-width: 480px) {
      flex: 100%;
      max-width: 100%;
    }
  }
`;

const SuccessMsg = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: #51b96b;
  padding-top: 10px;
  display: flex;
  margin-left: 20px;
`;


const ErrorMsg = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.secondary.hover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  margin-left: 20px;
`;

const InputUpper = styled.input<any>(
  css({
    display: 'block',
    width: '100%',
    textTransform: 'capitalize',
    p: '0 18px',
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'base',
    lineHeight: 'inherit',
    border: '1px solid',
    borderColor: 'gray.500',
    borderRadius: 'base',
    backgroundColor: 'white',
    color: 'text.bold',
    height: '48px',
    transition: 'all 0.25s ease',
    // mb: 3,
    '&:focus': {
      borderColor: 'primary.regular',
    },
  }),
  {
    '&:hover,&:focus': {
      outline: 0,
    },

    '&::placeholder': {
      color: '',
    },
    '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&.disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
  compose(layout, space, color, border)
);

const Input = styled.input<any>(
  css({
    display: 'block',
    width: '100%',
    p: '0 18px',
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'base',
    lineHeight: 'inherit',
    border: '1px solid',
    borderColor: 'gray.500',
    borderRadius: 'base',
    backgroundColor: 'white',
    color: 'text.bold',
    height: '48px',
    transition: 'all 0.25s ease',
    // mb: 3,
    '&:focus': {
      borderColor: 'primary.regular',
    },
  }),
  {
    '&:hover,&:focus': {
      outline: 0,
    },

    '&::placeholder': {
      color: '',
    },
    '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&.disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
  compose(layout, space, color, border)
);

export {
  SettingsForm,
  HeadingSection,
  Title,
  SettingsFormContent,
  Input,
  Row,
  ButtonGroup,
  SuccessMsg,
  ErrorMsg,
  InputUpper
};
