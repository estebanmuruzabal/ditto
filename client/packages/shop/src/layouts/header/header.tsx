import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from 'assets/images/logo.svg';
import UserImage from 'assets/images/user.png';
import { isCategoryPage } from '../is-home-page';
import Search from 'features/search/search';
type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  const {
    authState: { isAuthenticated, isStaff, isGrower },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const { pathname, query } = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };
  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });

    if (!openModal) return;
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config:{
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };
  const type = pathname === '/restaurant' ? 'restaurant' : query.type;
  const showSearch = isCategoryPage(type);
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
      
      {/* { type && <Search className="banner-search" />}
      { type && <Search minimal={true} className="headerSearch" />} */}
     
      <RightMenu
        isAuthenticated={isAuthenticated}
        isStaff={isStaff}
        isGrower={isGrower}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
