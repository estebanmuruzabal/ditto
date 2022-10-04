import React from 'react';
import { useRouter } from 'next/router';
import { openModal, closeModal } from '@redq/reuse-modal';
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
} from './header.style';
import Search from 'features/search/search';
import LogoImage from 'assets/images/logo.svg';

import { SearchIcon } from 'assets/icons/SearchIcon';
import { LongArrowLeft } from 'assets/icons/LongArrowLeft';
import Logo from 'layouts/logo/logo';

import LanguageSwitcher from './menu/language-switcher/language-switcher';
import { isCategoryPage } from '../is-home-page';
import useDimensions from 'utils/useComponentSize';
import { GET_TYPE } from 'graphql/query/type.query';
import { useQuery } from '@apollo/react-hooks';
import { CATEGORY_MENU_ITEMS } from 'site-settings/site-navigation';

type MobileHeaderProps = {
  className?: string;
  closeSearch?: any;
};

const SearchModal: React.FC<{}> = () => {
  const onSubmit = () => {
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type="submit" onClick={() => closeModal()}>
        <LongArrowLeft />
      </SearchModalClose>
      <Search
        className="header-modal-search"
        showButtonText={false}
        onSubmit={onSubmit}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
  const { pathname, query } = useRouter();

  const [mobileHeaderRef, dimensions] = useDimensions();
  const router = useRouter();
  const { data, error, loading } = useQuery(
    GET_TYPE,
    {
      variables: {
        searchText: ''
      }
    }
  );

  const handleSearchModal = () => {
    openModal({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%',
      },
      closeOnClickOutside: false,
      component: SearchModal,
      closeComponent: () => <div />,
    });
  };
  const type = pathname === '/restaurant' ? 'restaurant' : query.type;

  const isHomePage = isCategoryPage(type);
  const typeMenu = data.types.items.map((item) => {
    return({
      id: item.id,
      href: `/${item.slug}`,
      defaultMessage: item.name,
      icon: item.icon,
      dynamic: true,
    })
  })
  const initialMenu = router.asPath == '/' ? typeMenu[0] : typeMenu.find((item) => item.href == router.asPath);
  
  if(initialMenu){
    if(localStorage.getItem('myMenu')){
      localStorage.removeItem('myMenu');
    }
    localStorage.setItem('myMenu', JSON.stringify(initialMenu));
  }

  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? CATEGORY_MENU_ITEMS[0]
  );

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo
            imageUrl={LogoImage}
            alt="shop logo"
            onClick={initialMenu ? initialMenu: JSON.parse(localStorage.getItem('myMenu'))}
          />
        </LogoWrapper>

        <LanguageSwitcher />

        {/* {isHomePage ? (
          <SearchWrapper
            onClick={handleSearchModal}
            className="searchIconWrapper"
          >
            <SearchIcon />
          </SearchWrapper>
        ) : null} */}
        {/* <SearchWrapper
          onClick={handleSearchModal}
          className="searchIconWrapper"
        >
          <SearchIcon />
        </SearchWrapper> */}
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
