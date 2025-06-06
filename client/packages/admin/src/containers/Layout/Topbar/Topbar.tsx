import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Popover, { PLACEMENT } from '../../../components/Popover/Popover';
import Notification from '../../../components/Notification/Notification';
import { AuthContext } from '../../../context/auth';
import { STAFF_MEMBERS, SETTINGS, DASHBOARD } from '../../../settings/constants';
import { NotificationIcon } from '../../../assets/icons/NotificationIcon';
import { AlertDotIcon } from '../../../assets/icons/AlertDotIcon';
import { ArrowLeftRound } from '../../../assets/icons/ArrowLeftRound';
import { MenuIcon } from '../../../assets/icons/MenuIcon';
import {
  TopbarWrapper,
  Logo,
  LogoImage,
  TopbarRightSide,
  ProfileImg,
  Image,
  AlertDot,
  NotificationIconWrapper,
  UserDropdowItem,
  NavLink,
  LogoutBtn,
  DrawerIcon,
  CloseButton,
  DrawerWrapper,
} from './Topbar.style';
import Logoimage from '../../../assets/image/PickBazar.png';
import UserImage from '../../../assets/image/user.jpg';
import { useDrawerDispatch } from '../../../context/DrawerContext';
import Drawer, { ANCHOR } from '../../../components/Drawer/Drawer';
import Sidebar from '../Sidebar/Sidebar';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {Plus} from "../../../components/AllSvgIcon";
import {ADMIN_IMAGE_HOST} from "../../../helpers/images-path";


const GET_SETTING = gql`
    query GetSetting {
        getSiteSetting(key: "site-settings") {
            id
            key
            value
        }
    }
`;

function getFaviconEl() {
    return document.getElementById("favicon") as HTMLAnchorElement;
}

const Topbar = ({ refs }: any) => {
    const {data, error, refetch} = useQuery(GET_SETTING)
    const [siteSettingData, setSiteSettingData] = useState<any | null>(null);

    React.useEffect(() => {
        if (data) {
            setSiteSettingData(JSON.parse(data.getSiteSetting.value))
        }
    }, [data])

    let fav = getFaviconEl();
    if (siteSettingData) {
        fav.href = ADMIN_IMAGE_HOST+siteSettingData.favicon;
    }

    const dispatch = useDrawerDispatch()
    const {signout} = React.useContext(AuthContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = useCallback(
        () => dispatch({type: 'OPEN_DRAWER', drawerComponent: 'PRODUCT_FORM'}),
        [dispatch]
    );

  return (
    <TopbarWrapper ref={refs}>
      

      <DrawerWrapper>
        <DrawerIcon onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </DrawerIcon>
        <Drawer
          isOpen={isDrawerOpen}
          anchor={ANCHOR.left}
          onClose={() => setIsDrawerOpen(false)}
          overrides={{
            Root: {
              style: {
                zIndex: '1',
              },
            },
            DrawerBody: {
              style: {
                marginRight: '0',
                marginLeft: '0',
                '@media only screen and (max-width: 767px)': {
                  marginLeft: '30px',
                },
              },
            },
            DrawerContainer: {
              style: {
                width: '270px',
                '@media only screen and (max-width: 767px)': {
                  width: '80%',
                },
              },
            },
            Close: {
              component: () => (
                <CloseButton onClick={() => setIsDrawerOpen(false)}>
                  <ArrowLeftRound />
                </CloseButton>
              ),
            },
          }}
        >
          <Sidebar onMenuItemClick={() => setIsDrawerOpen(false)} />
        </Drawer>
      </DrawerWrapper>

      <Logo>
        <Link to={DASHBOARD}>
          <LogoImage src={siteSettingData ? ADMIN_IMAGE_HOST+siteSettingData.image : ''} alt={siteSettingData ? siteSettingData.site_title : ''} />
        </Link>
      </Logo>
      
      <TopbarRightSide>
        {/*<Button startEnhancer={() => <Plus />} style={{ marginRight: "20px" }} onClick={openDrawer}>Add Products</Button>*/}

        {/* <Popover
          content={({ close }) => <Notification data={data} onClear={close} />}
          accessibilityType={'tooltip'}
          placement={PLACEMENT.bottomRight}
          overrides={{
            Body: {
              style: {
                width: '330px',
                zIndex: 2,
              },
            },
            Inner: {
              style: {
                backgroundColor: '#ffffff',
              },
            },
          }}
        >
          <NotificationIconWrapper>
            <NotificationIcon />
            <AlertDot>
              <AlertDotIcon />
            </AlertDot>
          </NotificationIconWrapper>
        </Popover> */}

        <Popover
          content={({ close }) => (
            <UserDropdowItem>
              <NavLink to={STAFF_MEMBERS} exact={false} onClick={close}>
                Staff
              </NavLink>
              <NavLink to={SETTINGS} exact={false} onClick={close}>
                Settings
              </NavLink>
              <LogoutBtn
                onClick={() => {
                  signout();
                  close();
                }}
              >
                Logout
              </LogoutBtn>
            </UserDropdowItem>
          )}
          accessibilityType={'tooltip'}
          placement={PLACEMENT.bottomRight}
          overrides={{
            Body: {
              style: () => ({
                width: '220px',
                zIndex: 2,
              }),
            },
            Inner: {
              style: {
                backgroundColor: '#ffffff',
              },
            },
          }}
        >
          <ProfileImg>
            <Image src={UserImage} alt='user' />
          </ProfileImg>
        </Popover>
      </TopbarRightSide>
    </TopbarWrapper>
  );
};

export default Topbar;
