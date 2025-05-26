import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

type TextProps = {
  bold?: any;
};

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Heading = styled.div`
  font-family: ${themeGet('fontFamily.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.md', '19')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const DeleteButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

export const DayContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
  width: 50px;
  height: 30px;
  border: 1px solid ${themeGet('colors.gray.700', '#c3b2b2')};
  border-radius: 5px;
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.red400,
  cursor: pointer;
`;

export const PlantsSensorContainer = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  position: relative;
  // width: calc(100% - 30px);
  margin: 5px 0px;
  padding: 10px 5px;
  
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

export { FieldWrapper, Heading };
