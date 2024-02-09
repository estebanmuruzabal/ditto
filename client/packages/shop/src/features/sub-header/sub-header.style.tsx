import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

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
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  transition: all 0.3s ease;

  &.home {
    position: absolute;
    background-color: transparent;
    box-shadow: none;

    // background-color: #0171dc;;
    border-bottom: 1px solid ${themeGet('colors.primary.regular', '#dbe9e5')};
    border-top: 1px solid ${themeGet('colors.primary.regular', '#dbe9e5')};
    height: 30px;
    top: 60px;
  }

  @media (min-width: 1600px) {
    padding: 0px 40px;
  }

  @media (max-width: 990px) {
    display: none;
  }

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
    // padding-top: 20px;
    // padding-bottom: 20px;
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
    @media (max-width: 1400px) {
      padding-top: 20px;
      padding-bottom: 20px;
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
`;

export const LocationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: '300px';
`;

export const DeliveryMethods = styled.div`
  display: flex;
  flex-direction: 'row';
`;

export const MethodOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 150px;
`;


export const BannerIcon = styled.span`
line-height: 0;
  img {
    height: 18px;
    line-height: 0;
    -webkit-filter: invert(100%);
    filter: invert(100%);
    
  }
`;
// 'Helvetica Neue'