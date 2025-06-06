import React, { useContext } from 'react';
import { openModal } from '@redq/reuse-modal';
import Router from 'next/router';
import { FormattedMessage } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer/drawer';
import { Button } from 'components/button/button';
import NavLink from 'components/nav-link/nav-link';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import {
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  LoginView,
  UserAvatar,
  UserDetails,
  DrawerMenu,
  DrawerMenuItem,
  UserOptionMenu,
} from './header.style';
import UserImage from 'assets/images/user.png';
import {
  AUTHORIZED_MENU_ITEMS,
  GROWER_MENU_ITEMS,
  MOBILE_DRAWER_MENU,
  PROFILE_PAGE,
  STAFF_MENU_ITEMS,
} from 'site-settings/site-navigation';
import { useAppState, useAppDispatch } from 'contexts/app/app.provider';
import { ProfileContext } from 'contexts/profile/profile.context';

const MobileDrawer: React.FunctionComponent = () => {
  const isDrawerOpen = useAppState('isDrawerOpen');
  const dispatch = useAppDispatch();
  const { authState: { isAuthenticated, isStaff, isGrower }, authDispatch,  } = useContext<any>(AuthContext);
  const { state } = useContext(ProfileContext);

  if (state) {
    const { name, phone } = state;
  }  
  
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };

  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });

    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };

  const menuItems = isGrower ? GROWER_MENU_ITEMS : isStaff ? STAFF_MENU_ITEMS : isAuthenticated ? AUTHORIZED_MENU_ITEMS : []; 
  return (
    <Drawer
      width="316px"
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={isDrawerOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <Scrollbars autoHide>
        <DrawerContentWrapper>
          <DrawerProfile>
            {isAuthenticated ? (
              <LoginView>
                <UserAvatar>
                  <img src={UserImage} alt="user_avatar" />
                </UserAvatar>
                <UserDetails>
                  
                </UserDetails>
              </LoginView>
            ) : (
              <LogoutView>
                <Button variant="primary" onClick={signInOutForm}>
                  <FormattedMessage
                    id="mobileSignInButtonText"
                    defaultMessage="join"
                  />
                </Button>
              </LogoutView>
            )}
          </DrawerProfile>

          <DrawerMenu>
            {MOBILE_DRAWER_MENU.map((item) => (
              <DrawerMenuItem key={item.id}>
                <NavLink
                  onClick={toggleHandler}
                  href={item.href}
                  label={item.defaultMessage}
                  intlId={item.id}
                  className="drawer_menu_item"
                />
              </DrawerMenuItem>
            ))}
            {menuItems.map((item, idx) => (
              <DrawerMenuItem key={item.id}>
              <NavLink
              onClick={toggleHandler}
              href={item.href}
              label={item.defaultMessage}
              intlId={item.id}
              className="drawer_menu_item"
              />
              </DrawerMenuItem>
            ))}
          </DrawerMenu>

          {isAuthenticated && (
            <UserOptionMenu>
              <DrawerMenuItem>
                <div onClick={handleLogout} className="drawer_menu_item">
                  <span className="logoutBtn">
                    <FormattedMessage
                      id="navlinkLogout"
                      defaultMessage="Logout"
                    />
                  </span>
                </div>
              </DrawerMenuItem>
            </UserOptionMenu>
          )}
        </DrawerContentWrapper>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
