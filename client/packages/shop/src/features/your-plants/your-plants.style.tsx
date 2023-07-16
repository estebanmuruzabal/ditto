import styled from 'styled-components';
import { Row as Rows } from 'react-styled-flexboxgrid';
import { themeGet } from '@styled-system/theme-get';
import { compose, layout, space, color, border } from 'styled-system';
import css from '@styled-system/css';
type TextProps = {
  bold?: any;
};

const OrderReceivedWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  padding: 100px 0 60px 0;
  min-height: 100vh;
`;

export const PlantPageWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  // padding: 100px 0 60px 0;
  min-height: 100vh;
`;

export const InputUpper = styled.input<any>(
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

export const ButtonText = styled.span`
/* @media (max-width: 767px) {
  display: none;
} */
`;

export const PlantsPageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: ${themeGet('colors.white', '#ffffff')};
  padding: 70px 0px 0px;

  // @media only screen and (max-width: 990px) {
  //   padding: 100px 0 60px;
  // }

  @media only screen and (min-width: 991px) and (max-width: 1280px) {
    padding: 130px 15px 60px;
  }
`;

export const SidebarSection = styled.div`
  width: 300px;
  flex-shrink: 0;
  margin-right: 30px;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ContentBox = styled.div`
  width: calc(100% - 330px);
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 60px 50px 20px;
  border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};

  @media only screen and (max-width: 1199px) {
    width: 100%;
    border: 0;
    padding: 0px;
  }
`;

export const PlantsWrapper = styled.div`
  width: 100%;
  padding-left: 5px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;

  @media only screen and (max-width: 1199px) {
    margin-right: 20px;
  }
`;

export const PlantsListWrapper = styled.div`
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  width: 100%;
  padding: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-right: 30px;
  overflow: hidden;

  @media only screen and (max-width: 1199px) {
    margin-right: 20px;
  }
`;

export const PlantsSensorContainer = styled.button`
  background-color: #d8cbcb;
  cursor: pointer;
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  position: relative;
  // width: calc(100% - 30px);
  margin: 5px 0px;
  padding: 10px 5px;
  width: 100%;  
  
  // @media (min-width: 991px) {
  //   width: 870px;
  // }
  // @media (max-width: 990px) {
  //   padding: 50px 45px;
  // }
  // @media (max-width: 767px) {
  //   padding: 10px 5px;
  // }
`;

export const PlantsPageContainer = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding: 60px;
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  position: relative;
  // width: calc(100% - 30px);
  margin: 3px 0px;
  width: fit-content;
  // margin-left: auto;
  // margin-right: auto;
  // @media (min-width: 991px) {
  //   width: 870px;
  // }
  @media (max-width: 990px) {
    padding: 50px 45px;
  }
  @media (max-width: 767px) {
    padding: 10px 5px;
  }

  .home-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    padding: 5px 15px;
    height: 36px;
    border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
    border-radius: ${themeGet('radii.base', '6px')};
    position: absolute;
    top: 15px;
    right: 15px;
    transition: 0.15s ease-in-out;
    @media (max-width: 767px) {
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      height: 34px;
      padding: 5px 12px;
    }

    &:hover {
      background-color: ${themeGet('colors.primary.regular', '#009e7f')};
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
      color: ${themeGet('colors.white', '#ffffff')};
    }
  }
  .print-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    padding: 5px 15px;
    height: 36px;
    border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
    border-radius: ${themeGet('radii.base', '6px')};
    position: absolute;
    top: 15px;
    right: 165px;
    cursor: pointer;
    transition: 0.15s ease-in-out;
    @media (max-width: 767px) {
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      height: 34px;
      padding: 5px 12px;
    }

    &:hover {
      background-color: ${themeGet('colors.primary.regular', '#009e7f')};
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
      color: ${themeGet('colors.white', '#ffffff')};
    }
  }
  @media print{    
    .print-btn,
    .home-btn{
      display: none;
    }
  }
`;

export const OrderInfo = styled.div`
  margin-bottom: 60px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Row = styled(Rows)`
  margin-bottom: 40px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;


export const OrderDetails = styled.div`
  margin-bottom: 60px;
  @media (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const TotalAmount = styled.div``;

export const BlockTitle = styled.h2`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
    margin-bottom: 25px;
  }
`;


export const CardButtons = styled.span`

  display: flex;
  width: 330px;
  align-items: center;
  transition: 0.2s ease-in-out;
`;

export const Text = styled.p<TextProps>`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-weight: ${(props) =>
    props.bold
      ? themeGet('fontWeights.bold', '700')
      : themeGet('fontWeights.regular', '400')};
  line-height: 1.2;
  display: block;
  margin: 0;

  &:last-child {
    color: ${themeGet('colors.text.medium', '#424561')};
  }
`;

export const TextSpaced = styled.p<TextProps>`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-weight: ${(props) =>
    props.bold
      ? themeGet('fontWeights.bold', '700')
      : themeGet('fontWeights.regular', '400')};
  line-height: 1.2;
  display: block;
  margin-right: 10px;

  &:last-child {
    color: ${themeGet('colors.text.medium', '#424561')};
  }
`;

export const InfoBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const InfoBlock = styled.div`
  flex-grow: 1;
  padding: 0 15px;
  border-left: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  @media (max-width: 767px) {
    max-width: 100%;
    flex: 0 0 100%;
    margin-bottom: 20px;
    padding: 0;
    border: 0;
  }

  &:first-child {
    padding-left: 0;
    border-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  .title {
    margin-bottom: 10px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  &:last-child {
    margin-bottom: 20;
  }
  // @media (max-width: 767px) {
    justify-content: space-between;
    max-width: 300px;
  // }
`;

export const ListTitle = styled.div`
  flex-basis: 140px;
  width: 197px;
  flex-shrink: 0;
  position: relative;
  // @media (max-width: 767px) {
  //   flex-basis: 140px;
  //   max-width: 160px;
  // }
  &:after {
    // content: ':';
    position: absolute;
    top: -1px;
    right: -2px;
    line-height: 1;
  }
`;

export const ListDes = styled.div`
  // padding-left: 90px;
  // @media (max-width: 767px) {
  //   padding-left: 20px;
  // }
`;

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ScheduleTime = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  margin: 10px 10px;
  border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
`;

export const Status = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.black', '#2e70fa')};
  line-height: 1;
  background-color: rgba(46, 112, 250, 0.1);
  padding: 10px;
  border-radius: ${themeGet('radii.base', '6px')};
`;

export const ActionButton = styled.span`
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

export const DayContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
  width: 50px;
  height: 30px;
  border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
  border-radius: 5px;
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.red400,
  cursor: pointer;
`;

export default OrderReceivedWrapper;
