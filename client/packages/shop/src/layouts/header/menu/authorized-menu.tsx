import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavLink from 'components/nav-link/nav-link';
import { AUTHORIZED_MENU_ITEMS, GROWER_MENU_ITEMS, STAFF_MENU_ITEMS } from 'site-settings/site-navigation';

type Props = {
  onLogout: () => void;
  isStaff: boolean;
  isGrower: boolean;
};

export const AuthorizedMenu: React.FC<Props> = ({ onLogout, isStaff, isGrower }) => {
  const menuItems = isGrower ? GROWER_MENU_ITEMS : isStaff ? STAFF_MENU_ITEMS : AUTHORIZED_MENU_ITEMS; 
  return (
    <>
      {menuItems?.map((item, idx) => (
        <NavLink
          key={idx}
          className="menu-item"
          href={item.href}
          label={item.defaultMessage}
          intlId={item.id}
        />
      ))}
      <div className="menu-item" onClick={onLogout}>
        <a>
          <span>
            <FormattedMessage id="navlinkLogout" defaultMessage="Logout" />
          </span>
        </a>
      </div>
    </>
  );
};
