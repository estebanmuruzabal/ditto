import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DeliveryText = styled.div`
  font-family: 'Poppins';
  color: black;
  margin: 0px 5px;
`;

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

const PickUpOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export { FieldWrapper, Heading, DeliveryText, PickUpOptions };
