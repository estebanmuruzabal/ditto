import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Button } from 'components/button/button';

const hideSearch = keyframes`
  from {
    display: none;
  }

  to {
    display: flex;
  }
`;

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

export const SubHeaderWrapper = styled.header`
  // for the sake of fitting the image bellow the sticky header so it doesnt overlap it
  /* padding: 30px 60px; */
  // padding: 20px 50px;

  position: absolute;
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid ${themeGet('colors.primary.regular', '#dbe9e5')};
  border-top: 1px solid ${themeGet('colors.primary.regular', '#dbe9e5')};
  padding: 0px 10px;
  top: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: fixed;
  // z-index: 99999;
  left: 0;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  transition: all 0.3s ease;

  &.home {

    // background-color: #0171dc;;

  }

  @media (min-width: 1600px) {
    padding: 0px 40px;
  }

  // @media (max-width: 990px) {
  //   display: none;
  // }

  .headerSearch {

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
     

      input {
        width: 80%;
      }

      .buttonText {
        display: none;
      }
    }
  }

  &.unSticky {
    animation: ${positionAnim} 0.3s ease;
    .minimal-wrap,
    .headerSearch {
      animation: ${hideSearch} 0.3s ease;
      display: none;
    }
    .banner-search{
        width: 650px;
    }
    // .modern-wrap{
    //   margin-right: 200px;
    // }
    @media (max-width: 1366px) {
      .headerSearc,
      .banner-search{
        margin: 0 5%;
      }
    }
  }

  &.sticky {
    background-color: ${themeGet('colors.white', '#ffffff')};
    position: fixed;
    box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
    .modern-wrap,
    .banner-search{
      animation: ${hideSearch} 0.3s ease;
      display: none;
    }
    .minimal-wrap{
      animation: ${hideSearch} 0.3s ease;
      display: flex;
      width: 75%;
    }
    @media (max-width: 1366px) {
      .minimal-wrap{
        margin: 0 5%;
      }
    }
    .headerSearch {
      display: flex;
      svg{
          height: 30px;
          width: 30px;
          padding-left: 15px;
        }
      form {
        background-color: ${themeGet('colors.gray.400', '#F3F3F3')};

        input {
          background-color: ${themeGet('colors.gray.400', '#F3F3F3')};
        }
       
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
        .buttonText {
          display: none;
        }
      }
    }
  }

  .popover-wrapper {
    .popover-content {
      padding: 20px 0;

      .menu-item {
        a {
          margin: 0;
          padding: 12px 30px;
          border-bottom: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
          cursor: pointer;
          white-space: nowrap;

          &:last-child {
            border-bottom: 0;
          }
          &:hover {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }
          &.current-page {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }

          .menu-item-icon {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .headerSearch {
    input {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
      }
    }
    button {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }
    }
  }
`;
export const BannerText = styled.div`
  font-family: 'Poppins';
  color: black;
  margin-left: 4px;
  margin-top: 2px;
`;

export const DeliveryText = styled.div`
  font-family: 'Poppins';
  color: black;
  margin: 0px 5px;
`;

export const LocationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -60px;
  margin-left: 200px;
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;

export const DeliveryMethods = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  
  @media (max-width: 767px) {
    width: auto;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 0px 20px;
  @media (max-width: 767px) {
    
  }
`;

export const PickUpOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CardWrapper = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-color: #ffffff;
  padding: 5px 8px;
  border-radius: ${themeGet('radii.base', '2px')};
  border-width: 2px;
  margin-bottom: 10px;
  border-style: solid;
  border-color: ${(props) => props.color || '#e4f4fc'};
  
  text-align: center;
  @media (max-width: 767px) {
    width: auto;
  }
`;
export const MethodOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
`;


export const BannerIcon = styled.span`
line-height: 0;
  img {
    justify-content: center;
    align-items: center;
    margin: 4px 3px;
    height: 14px;
    line-height: 0;
    // -webkit-filter: invert(100%);
    // filter: invert(100%);
     -webkit-filter: invert(1);
      filter: invert(1);
  }
`;


// export const BannerIcon = styled.span`
// line-height: 0;
//   img {
//     height: 18px;
//     line-height: 0;
//     -webkit-filter: invert(100%);
//     filter: invert(100%);
    
//   }
// `;

export const Wrapper = styled.div`
  text-align: left;
  background-color: ${themeGet('colors.white', '#ffffff')};
  padding: 0px 20px;
`;

export const Container = styled.div`
  padding: 10px 20px;

  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`;
export const ActionsButtons = styled.span`


  transition: 0.2s ease-in-out;
`;

export const ActionButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 20px;
  height: 20px;
  margin-right: 10px;
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

export const Heading = styled.h4`
  color: black;
  margin-bottom: 10px;
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '17')}px;
  font-weight: ${themeGet('fontWeights.medium', '500')};
`;

export const SubHeading = styled.span`
  margin-bottom: 30px;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  display: block;
  line-height: 1.5;
`;
export const OfferSection = styled.div`
  padding: 20px;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Offer = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin: 0;
  margin-left: 10px;
`;
export const Input = styled.input`
  height: 48px;
  cursor: pointer;
  border-radius: ${themeGet('radii.base', '6px')};
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  border: 1px solid ${themeGet('colors.gray.200', '#f7f7f7')};
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 19px;
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;
  margin-bottom: 20px;
  text-align: center;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:focus {
    border-color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  &::placeholder {
    color: ${themeGet('colors.text.regular', '#77798c')};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.disabled {
    .inner-wrap {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  .radioGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    label {
      margin-top: 0;
      width: calc(33.333333333% - 10px);
      max-width: calc(33.333333333% - 10px);
      margin-bottom: 15px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      @media (max-width: 900px) and (min-width: 768px) {
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

    .addButton {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: 0;
      outline: 0;
      border-radius: 0;
      padding: 0;
      font-family: ${themeGet('fonts.body', 'Lato')};
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: ${themeGet('colors.primary.regular', '#009e7f')};
      position: absolute;
      top: 40px;
      right: 30px;

      @media (max-width: 600px) {
        top: 27px;
        right: 20px;
      }
    }
    .changeButton {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: 0;
      outline: 0;
      border-radius: 0;
      padding: 0;
      font-family: ${themeGet('fonts.body', 'Lato')};
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: ${themeGet('colors.primary.regular', '#009e7f')};
      position: absolute;
      top: 40px;
      right: 30px;

      @media (max-width: 600px) {
        top: 27px;
        right: 20px;
      }
    }
  }
`;


// export const Button = styled(Buttons)`
//   border-radius: ${themeGet('radii.base', '6px')};
// `;
export { Button };
