import React from 'react';
import { Button } from 'components/button/button';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import { AuthorizedMenu } from './authorized-menu';

interface Props {
  isAuthenticated: boolean;
  isStaff: boolean;
  isGrower: boolean;
  onJoin: () => void;
  onLogout: () => void;
  avatar: string;
}

const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar, isStaff, isGrower }: Props) => {
  return !isAuthenticated ? (
    <Button variant="primary" onClick={onJoin}>
      <FormattedMessage id="joinButton" defaultMessage="join" />
    </Button>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<img src={avatar} alt="user" />}
      content={<AuthorizedMenu isStaff={isStaff} isGrower={isGrower} onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
